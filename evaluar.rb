require 'json'
require 'csv'
require 'colorize'

def extraer_curso(nombre)
    nombre.match(/-FR_T-(\d{3})/)[1].to_i
end

def leer_json(origen)
    JSON.parse(File.read("#{origen}.json"), symbolize_names: true)
end

def escribir_json(datos, destino)
    File.open("#{destino}.json", "w") do |f|
        f.write(JSON.pretty_generate(datos))
    end
end

def tag(nombre, valor, total = 0)
    formato = total == 0 ? " - %-10s : %2i" : " - %-14s : %2i (%1i)"
    formato % [nombre, valor, total - valor]
end

class String
    def nombre
        self.split(" ").map{|x| x.capitalize}.join(" ")
    end
end

# --- Asistencias ---

def leer_asistencias
    cursos = Dir["./extras/asistencia/*.txt"]

    salida = []
    for curso in cursos
        asistencias = leer_asistencia(curso)
        asistencias.each{|x| x[:curso] = extraer_curso(curso)}
        asistencias.each{|x| salida << x}
    end 
    salida 
end 

def leer_asistencia(origen)
    texto = File.open(origen, 'r')
    data = texto.readlines[4..-1].map{|linea| linea.split("\t")}
    data = data.map do |x|
        {   
            curso: 0, 
            grupo: 0,
            nombre: "#{x[0].nombre}, #{x[1].nombre}", 
            dni: x[3].to_i, email: x[4],
            asistencias: x.count{|y| y["P ("]},
            dias: x.filter{|y| y[/\(\d\/1\)/]}.map{|z|z["(0/1)"] ? "A" : "P"}.join(""),
            id: x[2],
        }
    end
    texto.close
    data
end

def leer_examenes()
    cursos = Dir["./extras/examen/*.csv"]

    salida = []
    for curso in cursos
        examenes = leer_examen(curso)
        examenes.each{|x| salida << x}
    end 
    salida 
end

def leer_examen(origen)
    texto = File.open(origen, 'r')
    data = texto.readlines[1..-1].map{|linea| linea.split(";")}
    data = data.map do |x|
        {   
            email: x[5],
            departamento: x[4],
            examen: x[6],
        }
    end
    texto.close
    data
end

def color(valor, simbolo: "●", si: :green, no: :red)
    valor = valor == "si" if String === valor 
    simbolo.colorize( valor ? si : no )
end

def listar_detalle_asistencias(asistencias, titulo="Detalle de asistencias")
    puts ">> #{titulo}\n"
    i = 0 
    asistencias.each do |asistencia|
        falto = color(asistencia[:asistio]) # == 'si' ? "👍" : "❌"
        dias = asistencia[:dias].split(//).map{|x| color(x == "P")}.join(" ")
        ojo = color(asistencia[:revisar], si: :yellow, no: :black)
        mostrar = block_given? ? yield(asistencia) : true

        if mostrar  
            puts "%3i) %8i - %-50s  %3i-%02i  | %2i  %10s | %s %s %s | %s | %s  " % [i+=1, 
                asistencia[:dni], asistencia[:nombre], asistencia[:curso], asistencia[:grupo], 
                asistencia[:asistencias], dias, 
                falto, color(asistencia[:practico]), color(asistencia[:integral]), ojo, asistencia[:examen]]
        end
    end
end 

# --- Grupos --- 

def leer_grupos()
    salida = {}
    Dir["./extras/asistencia/*.csv"].each do |file|
        curso = file.split("_")[1].split(".")[0].to_i
        grupos = CSV.read(file)
        grupos = grupos.select{|x| !x[0][/^\s*grupo/i]}
        grupos.each{|x| salida[x[2].to_i] = {grupo: x[0].strip.to_i, curso: curso}}
    end 
    salida 
end

def registrar_grupos(asistencias, grupos)
    asistencias.each do |asistencia|
        grupo = grupos[asistencia[:dni]]
        if grupo
            asistencia[:grupo] = grupo[:grupo]
            if asistencia[:curso] != grupo[:curso]
                puts "ERROR: #{asistencia[:dni]} está en el curso #{asistencia[:curso]} y en el grupo #{asistencia[:grupo]} (grupo #{grupo[:curso]}))"
            end
        end
    end
end

def traer_grupo(asistencias, curso, grupo)
    asistencias.select{|a| a[:curso] == curso && a[:grupo] == grupo}.map{|a| a[:dni]}
end

# --- Resultados ---

def leer_resultados(base=:practicos)
    resultados = []
    Dir["./#{base}/*.html"].sort.each do |file|
        lineas = File.read(file).split("\n").map{|l| l.chomp.strip}
        lineas = lineas.select{|l| l.size > 0}
        desde  = lineas.find_index{ |line| line.include?("<!--") } + 1
        hasta  = lineas.find_index{ |line| line.include?("-->")  } - 1

        lineas[desde..hasta].each do |linea|
            if match = linea.match(/Curso (\d+).*Grupo (\d+).*-> (.+)/i)
                curso, grupo, email = match[1], match[2], match[3]
                resultados << {curso: curso.to_i, grupo: grupo.to_i, email: email, alumnos:[], notas:[], resultado: {}}

            elsif linea[/\d+;/]
                dni = linea.match(/(\d+);/)[1].to_i
                resultados.last[:alumnos] << dni 

            elsif linea[/-\s(.+)/]
                nota = linea.match(/-\s(.+)/)[1]
                resultados.last[:notas] << nota

            elsif match = linea.match(/([a-zA-ZñáéíóúÁÉÍÓÚ\s]+):(.+)/)
                variable = match[1].downcase.to_sym
                valor = match[2].strip
                resultados.last[:resultado][variable] = valor

            elsif linea.size > 0 
                puts "ERROR Cargar Resultado: #{linea} en #{file}"
            end
        end
    end 
    resultados
end

AsistenciaMinima = 4 

def registrar_resultados(asistencias, practicos, integral=[])
    asistencias.each do |x|
        x[:practico] = 'no'
        x[:integral] = 'no'

        x[:asistio] = (!x[:dias][/.*AAA$/] && x[:asistencias] >= AsistenciaMinima) ? "si" : "no" # 3 clases o más y no faltó a las últimas 4
    end

    practicos.each do |resultado|
        resultado[:alumnos].each do |dni|
            if asistencia = asistencias.find{|a| a[:dni] == dni}
                asistencia[:practico] = resultado[:resultado][:funciona]
            else 
                puts "ERROR: #{dni} no está en asistencias (practico)"
            end
        end
    end

    integral.each do |resultado|
        resultado[:alumnos].each do |dni|
            if asistencia = asistencias.find{|a| a[:dni] == dni}
                asistencia[:integral] = resultado[:resultado][:funciona]
            else 
                puts "ERROR: #{dni} no está en asistencias (integral)"
            end
        end
    end

    asistencias.each do |x|
        x[:correcto] = (x[:practico] == 'si' && x[:integral] == 'si') && x[:asistio] == 'si' ? 'si' : 'no'
        x[:revisar]  = (x[:practico] == 'no' || x[:integral] == 'no') && x[:asistio] == 'si' ? 'si' : 'no'
        x[:error]    = (x[:practico] == 'si' || x[:integral] == 'si') && x[:asistio] == 'no' ? 'si' : 'no'
    end
end

def registra_examenes(asistencias, examenes)
    asistencias.each{|a| a[:examen] = ''}
    examenes.each do |examen|
        if asistencia = asistencias.find{|a| a[:email] == examen[:email]}
            asistencia[:examen] = examen[:examen]
        else 
            puts "ERROR: #{examen[:email]} no está en asistencias (examen)"
        end
    end
end

# --- Estadisticas ---

def listar_con_notas(ejercicios)
    puts "Ejercicios con notas"
    ejercicios.each do |ejercicio|
        if ejercicio[:notas].size > 0 || ejercicio[:resultado].size > 0
            r = ejercicio[:resultado].map{|k,v| "#{k}: #{v}"}.join(', ')
            n = ejercicio[:notas].join('|') + " " * 40
            n = n[0..36] + '...' if n.size > 40
            puts " #{ejercicio[:curso]} #{ejercicio[:grupo]} | #{ejercicio[:email].ljust(32)} #{ejercicio[:alumnos].size} | #{n} > #{r}"
        end
    end
end 

def estadistica_resultado(ejercicios)
    funcionan = ejercicios.select{|e| e[:resultado][:funciona] == 'si'}
    diseño = ejercicios.select{|e| e[:resultado][:diseño] == 'si'}

    implementacion = ejercicios.map{|e| e[:resultado][:implementacion]}.group_by{|e| e}.map{|k,v| [k, v.size]}.to_h
    reutilizacion = ejercicios.select{|e| e[:resultado][:reutilizacion] == 'si'}

    n = ejercicios.size 
    puts "Estadística de ejercicios"
    puts tag("Funcionan", funcionan.size, n)
    puts tag("Diseño", diseño.size, n)
    puts " - Implementación #{implementacion.map{|k,v| "\n  #{tag(k, v)}"}.join('') }"
    puts tag("Reutilización", reutilizacion.size, n)
    puts " Total : #{ejercicios.size}"
end 

def alumnos_sin_presentar(asistencias)
    faltan = asistencias.select{|a| a[:practico] == '' && a[:grupo] != 0}
    puts "Alumnos sin presentar"
    n = 0
    faltan.each do |f|
        print "%4i -" % (n += 1)
        puts " #{f[:dni]} | #{f[:nombre].ljust(40)} #{f[:curso]} #{f[:grupo].ljust(2,"0")} | #{f[:email].ljust(32)} #{f[:dni]}"
    end
end


def alumnos_sin_rendir(asistencias)
    faltan = asistencias.select{|x| x[:practico] == 'si' && x[:integral] == 'si' && x[:examen] == '-'}
    puts "Alumnos en condiciones de aprobar pero sin Examen"
    n = 0
    faltan.each do |f|
        print "%4i -" % (n += 1)
        puts " #{f[:dni]} | #{f[:nombre].ljust(40)} #{f[:curso]} #{f[:grupo]} | #{f[:email].ljust(32)} #{f[:dni]}"
    end
end

def registrar_ausentes(asistencias, resultados)
    resultados.each{|r| r[:faltan] = []}
    resultados.each do |resultado|
        grupo = traer_grupo(asistencias, resultado[:curso], resultado[:grupo])
        resultado[:faltan] = grupo - resultado[:alumnos]
        resultado[:miembros] = grupo.size
    end 
    resultados
end

def resumir_resultados(resultados)
    puts "- Resumen de resultados ---------------------------------------"
    resultados.sort_by{|x|[x[:curso], x[:grupo]]}.each do |resultado|
        hay_error = resultado[:faltan].size + resultado[:alumnos].size  != resultado[:miembros]
        puts "  %3i-%02i | %-2s | %i / %i / %i %s" % [resultado[:curso], resultado[:grupo], resultado[:resultado][:funciona], 
        resultado[:alumnos].size, resultado[:faltan].size, resultado[:miembros] , hay_error ? "ERROR" : ""]
    end 
    resultados.map{|r| [r[:curso], r[:grupo], r[:resultado][:funciona]]}
    puts "Total alumnos: #{resultados.map{|r| r[:alumnos].size}.sum}"
    puts "Total faltan: #{resultados.map{|r| r[:faltan].size}.sum}"
    puts "Total miembros: #{resultados.map{|r| r[:miembros]}.sum}"
end

def informar(asistencias)
    asistencias.select{|a| block_given? ? yield(a) : true}.map{|a| [a[:curso], a[:email], a[:nombre]]}
end

def resumir_grupos(asistencias)
    salida = []
    grupos = asistencias.group_by{|a| [a[:curso], a[:grupo]]}
    grupos.sort.each do |k,v|
        salida << {curso: k[0], grupo: k[1], alumnos: v.map{|x|x[:dni]}, asistencia: [], practico: [], integral: [], examen: []}
    end
    asistencias.each do |a|
        grupo = salida.find{|s| s[:curso] == a[:curso] && s[:grupo] == a[:grupo]}
        grupo[:practico] << a[:dni] if a[:practico] == 'si'
        grupo[:integral] << a[:dni] if a[:integral] == 'si'
        grupo[:examen]   << a[:dni] if a[:examen] != "-"
        grupo[:asistencia] << a[:dni] if a[:asistio] == "si"
    end
    salida
end

asistencias = leer_asistencias()
puts "Hay #{asistencias.size} alumnos en asistencias"

grupos = leer_grupos()
puts "Hay #{grupos.size} alumnos en grupos"

resultados = leer_resultados(:practicos)
puts "Hay #{resultados.size} resultados de prácticos"

integral = leer_resultados(:integral)
puts "Hay #{integral.size} resultados de integral"

examenes = leer_examenes()

registrar_grupos(asistencias, grupos)
registrar_resultados(asistencias, resultados, integral)
registra_examenes(asistencias, examenes)

registrar_ausentes(asistencias, resultados)
registrar_ausentes(asistencias, integral)
resumen = resumir_grupos(asistencias)

escribir_json(asistencias, :alumnos)
escribir_json(resultados, :resultados)
escribir_json(resumen, :grupos)

# pp grupos 
asistencias = asistencias.sort_by{|a| [a[:curso], a[:grupo], a[:nombre]]}
listar_detalle_asistencias( asistencias, 'Listado completo'){|x|  x[:practico] == 'si' && x[:integral] == 'si' && x[:examen] == '-'}
# listar_detalle_asistencias( asistencias, 'Alumnos que presentaron tareas pero no asistieron'){|a| (a[:practico] == 'si' || a[:integral] == 'si') && a[:asistio] == 'no'}
# listar_detalle_asistencias( asistencias, 'Alumnos asistieron pero faltan tareas'){|a| (a[:practico] == 'no' || a[:integral] == 'no') && a[:asistio] == 'si'}
# listar_detalle_asistencias( asistencias, 'Faltan integrador'){|a| (a[:practico] == 'si' && a[:integral] == 'no') && a[:asistio] == 'si'}
# listar_detalle_asistencias( asistencias, 'Faltan práctico'){|a| (a[:practico] == 'no' && a[:integral] == 'si') && a[:asistio] == 'si'}
# listar_detalle_asistencias( asistencias, 'Faltan examen'){|a| (a[:practico] == 'si' && a[:integral] == 'si') && a[:examen] == '-'}
# listar_detalle_asistencias( asistencias, 'Sin grupos'){|a| (a[:grupo] == 0) && a[:asistio] == 'si'}

# estadistica_resultado(resultados)
# alumnos_sin_presentar(asistencias)
# resumir_resultados(resultados)

# pp a=traer_grupo(asistencias, 132, 10).sort.reverse
# pp b=resultados.find{|r| r[:curso] == 132 && r[:grupo] == 10}[:alumnos].sort
# pp c=resultados.find{|r| r[:curso] == 132 && r[:grupo] == 10}[:faltan].sort
# pp b - a

def listar_alumnos_aprobados(asistencias, destino = :resultados)
    asistencias = asistencias.map(&:clone)
    asistencias.each do |a|
        a[:aprobado] = (a[:practico] =='si' && a[:integral] =='si' && a[:examen] != '-' && a[:asistio] = "si") ? 'si' : 'no'
        apellido, nombre = a[:nombre].split(",")
        a[:apellido] = apellido.strip
        a[:nombre] = nombre.strip
    end 

    asistencias = asistencias.select{|a| yield(a)} if block_given? 
    asistencias = asistencias.sort_by{|a| [a[:curso], a[:apellido], a[:nombre]]}
    
    campos = [:nombre, :apellido,  :email, :aprobado, :asistio, :practico, :integral, :examen]
    salida = [] 
    salida << campos.join(";")

    asistencias.each do |a|
        salida << campos.map{|c| a[c]}.join(";")
    end 
    open("#{destino}.csv", "w"){|f| f.write salida.join("\n")}
end 

def informar(asistencias)
    asistencias.select{|a| block_given? ? yield(a) : true}.map{|a| [a[:curso], a[:email], a[:nombre]]}
end

pp asistencias.select{|a|a[:nombre][","].nil?}
listar_alumnos_aprobados(asistencias, :resultados_126){|a| a[:aprobado] == 'si' && a[:curso] == 126}
listar_alumnos_aprobados(asistencias, :resultados_132){|a| a[:aprobado] == 'si' && a[:curso] == 132}
listar_alumnos_aprobados(asistencias, :resultados_133){|a| a[:aprobado] == 'si' && a[:curso] == 133}
listar_alumnos_aprobados(asistencias, :resultados_134){|a| a[:aprobado] == 'si' && a[:curso] == 134}


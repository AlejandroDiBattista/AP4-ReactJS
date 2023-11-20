require 'json'

def cargar_resultados()
    resultados = []
    Dir["*.html"].sort.each do |file|

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
                puts "ERROR: #{linea} en #{file}"
            end
        end
    end 
    resultados
end

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

def tag(nombre, valor, total=0)
    if total == 0 
        return " - %-10s : %2i" % [nombre, valor]
    else 
        " - %-14s : %2i (%1i)" % [nombre, valor, total - valor]
    end
end

def estadistica_resultado(ejercicios)
    funcionan = ejercicios.select{|e| e[:resultado][:funciona] == 'si'}
    diseño = ejercicios.select{|e| e[:resultado][:diseño] == 'si'}
    # Cuenta cuanto veces se repita cada valor del campo :implementacion
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
        puts " #{f[:dni]} | #{f[:nombre].ljust(40)} #{f[:curso]} #{f[:grupo]} | #{f[:email].ljust(32)} #{f[:dni]}"
    end
end

def leer_json(origen)
    JSON.parse(File.read("#{origen}.json"), symbolize_names: true)
end

def escribir_json(datos, destino)
    File.open("#{destino}.json", "w") do |f|
        f.write(JSON.pretty_generate(datos))
    end
end

def traer_grupo(asistencias, curso, grupo)
    asistencias.select{|a| a[:curso] == curso && a[:grupo] == grupo}.map{|a| a[:dni]}
end

def registrar_resultado(asistencias, resultados)
    asistencias.each{|x| x[:practico] = ''}
    resultados.each do |resultado|
        resultado[:alumnos].each do |dni|
            if asistencia = asistencias.find{|a| a[:dni] == dni}
                asistencia[:practico] = resultado[:resultado][:funciona]
            else 
                puts "ERROR: #{dni} no está en asistencias"
            end
        end
    end
end

def registrar_ausentes(resultados, asistencias)
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
        puts "  %3i-%02i | %-2s | %i / %i / %i %s" % [resultado[:curso], resultado[:grupo],  
        resultado[:resultado][:funciona], 
        resultado[:alumnos].size, resultado[:faltan].size, resultado[:miembros] , hay_error ? "ERROR" : ""]
    end 
    resultados.map{|r| [r[:curso], r[:grupo], r[:resultado][:funciona]]}
    puts "Total alumnos: #{resultados.map{|r| r[:alumnos].size}.sum}"
    puts "Total faltan: #{resultados.map{|r| r[:faltan].size}.sum}"
    puts "Total miembros: #{resultados.map{|r| r[:miembros]}.sum}"
end

# listar_con_notas salida
# Leer asistencias desde json 
resultados = cargar_resultados()

asistencias = leer_json(:asistencias)
registrar_resultado(asistencias, resultados)
registrar_ausentes(resultados, asistencias)

estadistica_resultado(resultados)
escribir_json(asistencias, :alumnos)
escribir_json(resultados, :resultados)

alumnos_sin_presentar(asistencias)
escribir_json( resultados, :resultados)
resumir_resultados(resultados)

# pp a=traer_grupo(asistencias, 132, 10).sort.reverse
# pp b=resultados.find{|r| r[:curso] == 132 && r[:grupo] == 10}[:alumnos].sort
# pp c=resultados.find{|r| r[:curso] == 132 && r[:grupo] == 10}[:faltan].sort
# pp b - a


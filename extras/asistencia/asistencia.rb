require 'csv'
require 'json'

class String
    def nombre
        self.split(" ").map{|x| x.capitalize}.join(" ")
    end
end

def leer(origen)
    texto = File.open(origen, 'r')
    data = texto.readlines[4..-1].map{|linea| linea.split("\t")}
    # data = data.select{|x| x.size > 5}
    data = data.map do |x|
        {   curso: 0, 
            grupo: 0,
            nombre: "#{x[0].nombre}, #{x[1].nombre}", 
            dni: x[3].to_i, email: x[4],
            asistencias: x[3..-1].count{|y| y["P"]},
            id: x[2],
        }
    end
    texto.close
    data
end

def contar(asistencias)
    (0..10)
        .map{|x| [x, asistencias.count{|y| y[:asistencias] == x}]}
        .select{|x| x[1] > 0}
end

def extraer_curso(curso)
    curso.split("_")[1].split("-").last.to_i
end

def seleccionar(asistencias, minimo=2)
    asistencias.select{|x| x[:asistencias] >= minimo}
end

def separar_grupos(asistencias, miembros=6)
    asistencias.shuffle.each_slice(miembros).to_a
end

def guardar_csv(nro_curso, alumnos)
    alumnos.sort_by!{|x| [x[:grupo], x[:nombre]]}
    grupo = 0
    CSV.open("curso_#{nro_curso}.csv", "wb") do |csv|
        csv << alumnos.first.keys
        for alumno in alumnos
            if grupo != alumno[:grupo]
                csv << ["Grupo #{alumnos.first[:grupo]}", "", "", "", "", ""]
                grupo = alumno[:grupo]
            end
            csv << alumno.values
        end
    end
end

def generar_grupos_al_azar(cursos)
    for curso in cursos
        asistencias = leer(curso)
        asistencias = seleccionar(asistencias)
        grupos = separar_grupos(asistencias)

        pp [extraer_curso(curso), contar(asistencias)]
        grupos.each_with_index do |grupo, i|
            puts "Grupo #{i+1} (#{grupo.size}):"
            for alumno in grupo
                alumno[:grupo] = i+1
            end 
            pp grupo
        end
        puts "\n"
        pp asistencias.first(10)
        guardar_csv(extraer_curso(curso), asistencias)
    end
end 

def extraer_curso(nombre)
    nombre.split("_")[1].split("-").last.to_i
end

def leer_asistencias
    cursos = Dir["*.txt"]

    salida = []
    for curso in cursos
        asistencias = leer(curso)
        asistencias.each{|x| x[:curso] = extraer_curso(curso)}
        asistencias.each{|x| salida << x}
    end 
    salida 
end 

require 'json'

def guardar_asistencias(asistencias)
    File.open("asistencias.json", "w") do |f|
        f.write(JSON.pretty_generate(asistencias))
    end
end

def leer_grupos()
    salida = {}
    Dir["*.csv"].each do |file|
        # grupo,nombre,dni,email,asistencias,id

        curso = file.split("_")[1].split(".")[0].to_i
        grupos = CSV.read(file)
        grupos = grupos.select{|x| !x[0][/^\s*grupo/i]}
        grupos.each{|x|  salida[x[2].to_i] = {grupo: x[0].strip.to_i, curso: curso}}
    end 
    salida 
end

grupos = leer_grupos()
pp grupos.select{|k,v| v[:curso] == 133}
asistencias = leer_asistencias()
nunca = asistencias.select{|x| x[:asistencias] == 0}
una = asistencias.select{|x| x[:asistencias] == 1}
dos = asistencias.select{|x| x[:asistencias] == 2}
tres = asistencias.select{|x| x[:asistencias] == 3}

puts "- ESTADISTICAS --------------------------------------"
puts "  Hay #{grupos.size} alumnos en grupos"
puts "  Hay #{asistencias.size} alumnos en asistencias"
puts "  Hay #{nunca.size} alumnos que nunca asistieron"	
puts "  Hay #{una.size} alumnos que asistieron una vez"
puts "  Hay #{dos.size} alumnos que asistieron dos veces"
puts "  Hay #{tres.size} alumnos que asistieron tres veces"
puts 

n = 0
asistencias.each do |asistencia|
    grupo = grupos[asistencia[:dni]]
    if grupo
        asistencia[:grupo] = grupo[:grupo]
        if asistencia[:curso] != grupo[:curso]
            puts "ERROR: #{asistencia[:dni]} está en el curso #{asistencia[:curso]} y en el grupo #{asistencia[:grupo]} (grupo #{grupo[:curso]}))"
        end
    # elsif asistencia[:asistencias] > 1
    #     print "%4i - " % (n += 1)
    #     puts "#{asistencia[:dni]} - #{asistencia[:nombre].ljust(40)} | #{asistencia[:asistencias]} | Curso: #{asistencia[:curso]} "
    end
    # asistencia[:curso] = grupos[asistencia[:dni]][:curso]
end
guardar_asistencias(asistencias)


# guardar asistencias en JSON 
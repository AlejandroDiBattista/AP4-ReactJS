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
            dni: x[3], email: x[4],
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
        asistencias = leer(cursos.first)
        asistencias.each{|x| x[:curso] = extraer_curso(curso)}
        salida += asistencias
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
        grupos = grupos.select{|x| !x[0][/grupo/i]}
        grupos[2..-1].each{|x|  salida[x[2]] = {grupo: x[0].strip, curso: curso}}
    end 
    salida 
end

grupos = leer_grupos()
asistencias = leer_asistencias.first(10)
asistencias.each do |asistencia|
    grupo = grupos[asistencia[:dni]]
    if grupo 
        asistencia[:grupo] = grupo[:grupo]
        if asistencia[:curso] != grupo[:curso]
            puts "ERROR: #{asistencia[:dni]} esta en el curso #{asistencia[:curso]} y en el grupo #{asistencia[:grupo]}"
        end
    else 
        puts asistencia[:dni] + " no esta en ningun grupo"
    end
    # asistencia[:curso] = grupos[asistencia[:dni]][:curso]
end
guardar_asistencias(asistencias)


# guardar asistencias en JSON 
require 'csv'

cursos = Dir["*.txt"]
pp cursos

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
        {   grupo: 0,
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


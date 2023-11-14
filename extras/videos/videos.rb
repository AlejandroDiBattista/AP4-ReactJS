
def cargar_videos(lineas)
    clase,curso,url, fecha, hora = nil,nil,nil,nil,nil
    clases = []

    lineas.map do |linea|
        if linea =~ /^Clase (\d+)/i
            clase = $1.to_i
            clases << { clase: clase, cursos: [] }
        end

        if linea =~ /^\* (\d{3})\s*-\s*(.*?)\s*-\s*(.*)/i
            curso = $1.to_i
            fecha = $2
            hora = $3
            puts "Clase #{clase}|Curso #{curso}|#{fecha} - #{hora}"
            # clases.last[:cursos][curso] = {fecha: fecha, hora: hora, video: ""} 
        end 

        if linea =~ /^\[Ver video\]\((.*)\)/i
            url = $1
            if url =~ /utn.zoom.us/
                clases.last[:cursos] << {curso: curso, fecha: fecha, hora: hora, video: url, clase: clase}
            end
        end
    end
    clases.select{|clase| clase[:cursos].count > 0}
end

def traer_plantilla(clase)
    clase = "%02i" % clase.to_i
    if File.exist?("plantilla-#{clase}.md")
        open("plantilla-#{clase}.md").read
    else
        open('plantilla.md').read
    end
end

def rellenar(plantilla, variables)
    texto = plantilla
    variables.each do |key, value|
        key = "{#{key}}"
        value = value.to_s 
        if texto =~ /#{key}/
            texto = texto.gsub(key, value)
        end
    end
    texto
end

def generar_url_clase(curso, clase)
    ids = { '132' =>  '691', '133' => 697, '134' => 708, '126' => 715 }
    id = ids[curso.to_s]
    "https://campus.argentinaprograma.utn.edu.ar/course/view.php?id=#{id}&section=#{clase.to_i}"
end

def generar_texto_videos(clase)
    texto = ''
    nro_clase = "%02i" % clase[:clase]

    plantilla = traer_plantilla(nro_clase)
    clase[:cursos].each do |curso|
        texto_copiar = rellenar(plantilla, curso)
        nro_curso = curso[:curso]

        texto += "## Clase #{nro_clase} - Curso #{nro_curso}\n\n"
        texto += "  Cambiar en #{generar_url_clase(nro_curso, nro_clase)}\n"
        texto += "\n---\n#{texto_copiar}\n---\n\n"
    end

    open("clase-#{nro_clase}.md", 'w'){|f| f.puts texto }
    texto
end


lineas = open('grabacion-clases.md').readlines
clases = cargar_videos(lineas)

pp clases
clases.each do |clase|
    generar_texto_videos(clase)
end

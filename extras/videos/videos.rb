
def cargar_videos(lineas)
    clase,curso,url = nil,nil,nil
    clases = []

    lineas.map do |linea|
        if linea =~ /^Clase (\d+)/i
            clase = $1.to_i
            clases << { clase: clase, videos: {} }
        end
        if linea =~ /^\* (\d{3})\s*-\s*(.*?)\s*-\s*(.*)/i
            curso = $1.to_i
            fecha = $2
            hora = $3
            puts "Clase #{clase}|Curso #{curso}|#{fecha} - #{hora}"
            clases.last[:videos][curso] = nil 
            clases.last[:fecha] = fecha
            clases.last[:hora] = hora
        end 
        if linea =~ /^\[Ver video\]\((.*)\)/i
            url = $1
            clases.last[:videos][curso] = url
        end
  end

  clases.select{|x|x[:videos].values.compact.size > 0}
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

def generar_texto_videos(clase)
    texto = ''
    numero = clase[:clase].to_s.rjust(2, '0')
    plantilla = traer_plantilla(numero)
    clase[:videos].each do |curso, url|
        datos = { video: url, clase: numero, curso: curso.to_s}.merge(clase)
        texto_copiar = rellenar(plantilla, datos)

        texto += "## Clase #{numero} - Curso #{curso}\n\n"
        texto += "  Cambiar en #{generar_url_clase(curso, numero)}\n\n"
        texto += "\n\n---\n\n#{texto_copiar}\n\n---\n\n\n"
    end

    open("clase-#{numero}.md", 'w'){|f| f.puts texto }
    texto
end

def generar_url_clase(curso, clase)
    ids = { '132' =>  '691', '133' => 697, '134' => 708, '126' => 715 }
    id = ids[curso.to_s]
    "https://campus.argentinaprograma.utn.edu.ar/course/view.php?id=#{id}&section=#{clase.to_i}"
end

lineas = open('grabacion-clases.md').readlines
clases = cargar_videos(lineas)

clases.each do |clase|
    generar_texto_videos(clase)
end

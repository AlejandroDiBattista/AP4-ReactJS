

salida = []
Dir["*.html"].sort.each do |file|

    lineas = File.read(file).split("\n").map{|l| l.chomp.strip}
    lineas = lineas.select{|l| l.size > 0}
    desde  = lineas.find_index{ |line| line.include?("<!--") } + 1
    hasta  = lineas.find_index{ |line| line.include?("-->")  } - 1

    lineas[desde..hasta].each do |linea|
        if match = linea.match(/Curso (\d+).*Grupo (\d+).*-> (.+)/i)
            curso = match[1]
            grupo = match[2]
            email = match[3]
            salida << {curso: curso, grupo: grupo, email: email, alumnos:[], notas:[], resultado: {}}
        elsif linea[/\d+;/]
            dni = linea.match(/(\d+);/)[1]
            salida.last[:alumnos] << dni 
        elsif linea[/-\s(.+)/]
            nota = linea.match(/-\s(.+)/)[1]
            salida.last[:notas] << nota
        elsif match = linea.match(/([a-zA-ZñáéíóúÁÉÍÓÚ\s]+):(.+)/)
            variable = match[1].downcase.to_sym
            valor = match[2].strip
            salida.last[:resultado][variable] = valor
        elsif linea.size > 0 
            puts "ERROR: #{linea} en #{file}"
        end
    end
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

def estadistica(ejercicios)
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
# listar_con_notas salida

estadistica salida
require 'gmail'

ConvertirCursoId = {126 => 715, 132 => 691, 133 => 697, 134 => 708}

# Credenciales de Gmail
Username = 'adibattistautn@gmail.com'
Password = 'ibny dblm svwt dzup'

oportunidades = [
  [126, "arielstegmann74@gmail.com", "Stegmann, Carlos Ariel"],
  [126, "la_casita_libros@hotmail.com", "Ritacco, Gabriel"],
  [126, "ximenaromani@hotmail.com", "Romani, Maria Ximena"],
  [126, "grupodepracticas2013@gmail.com", "Ruiz, Guillermo"],
  [126, "maranda.gm@gmail.com", "Aranda, Marcelo"],
  [126, "nattyarrascaeta@hotmail.com", "Arrascaeta, Gabriela Natalia"],
  [126, "eliasmail0745@gmail.com", "Figueira Perez, Elias"],
  [126, "cluciano.vega@gmail.com", "Vega, Luciano"],
  [132, "andreaalonso727@gmail.com", "Andrea Lujan, Alonso"],
  [132, "marielab_017@hotmail.com", "Bamba, Mariela"],
  [132, "lopezrubenleonardo@gmail.com", "Lopez, Ruben Leonardo"],
  [132, "angie_caprarulo@hotmail.com", "María Angélica, Caprarulo"],
  [132, "marcos_gaso@hotmail.com", "Gaso, Marcos Leonardo"],
  [132, "juanlavayen@hotmail.com", "Lavayen, Juan Entiqur"],
  [132, "sydgi4@gmail.com", "Maggiolo, Gisela"],
  [132, "lucilamonzon96@gmail.com", "Monzon Fernandez, Lucila Emilce"],
  [132, "fabiandjulio@gmail.com", "D Julio, Fabian"],
  [132, "mariojs9265@gmail.com", "Matricardi, Mario Andres"],
  [132, "edgarscal@gmail.com", "Scaltritti, Edgar"],
  [132, "lore_ar@hotmail.com", "Arditi, Lorena"],
  [132, "p.garay@yahoo.com.ar", "Garay, Pablo"],
  [132, "roldannatysol@gmail.com", "Roldán, Natalia"],
  [132, "matias_paternal04@hotmail.com", "Gutierrez, Matias Sebastian"],
  [132, "leo.tango.arg@gmail.com", "Maldonado, Leonardo"],
  [133, "ferpa567@gmail.com", "Fernandez, Pablo"],
  [133, "vanihortaltoribio@gmail.com", "Hortal Toribio, Vanila Isabel"],
  [133, "matiasrheinze@gmail.com", "Rojo Heinze, Facundo"],
  [133, "matiasclimente@gmail.com", "Climente, Carlos Matías"],
  [133, "mariajoseavendanio774@gmail.com", "Avendaño, Maria Jose"],
  [133, "ngfreyes@gmail.com", "Flores, Néstor"],
  [134, "femiacintia@gmail.com", "Femia, Cintia"],
  [134, "estrellita.figueroa@gmail.com", "Ojeda, Miriam Beatriz"],
  [134, "mariiiiiiano@gmail.com", "Perriere, Mariano"],
  [134, "guillesuarez68@gmail.com", "Suárez, Guillermo"],
  [134, "miguelamema@gmail.com", "Mema, Miguel Angel"],
  [134, "vivianasolizosinaga@gmail.com", "Soliz, Viviana"]
]



def enviar(destinatarios, asunto, contenido)
  puts "Conectado a Gmail"

  # Crea el correo electrónico
  email = Gmail.compose do
    to destinatarios
    subject asunto
    body contenido 
  end

  puts "Enviando correo electrónico a #{destinatarios}"
  email.deliver!
  puts "Correo electrónico enviado"
end

def enviar_oportunidad(oportunidades)
  direccion = 'https://campus.argentinaprograma.utn.edu.ar/course/view.php?id={id}&section=9'

  n = oportunidades.size 
  i = 0
  oportunidades.each do |oportunidad|
    curso = oportunidad[0]
    email = oportunidad[1]
    nombre = oportunidad[2].split(",").last.strip

    id = ConvertirCursoId[curso]
    url = direccion.gsub("{id}", id.to_s)

    puts "Enviando correo electrónico a #{nombre} (#{email})"
    
    texto = """
    Hola #{nombre}:

    Según mis registros has cumplimentado todos los pasos para aprobar el curso pero no realizaste el examen

    Tenes una oportunidad más para aprobar el curso 

    He habilitado que puedas tomar el examen durante el día de hoy en el sitio
    
    #{url}
    """
    
    puts "Enviando correo electrónico a #{nombre} (#{email}) (#{i+=1}/#{n})"
    texto = texto.gsub("\n", "\r\n")
    enviar email, "Recuperación examen Argentina Programa", texto
  end
end 


Gmail = Gmail.connect(Username, Password)
# enviar_oportunidad oportunidades
Gmail.logout

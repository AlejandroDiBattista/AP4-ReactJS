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

segunda_oportunidad = [[126, "gjwenner@gmail.com", "Wenner, Gustavo Javier"],
 [126, "mikicerny@yahoo.com.ar", "Cernada, Miguel Angel"],
 [126, "griseldavanina@hotmail.es", "Gonzalez, Griselda Vanina"],
 [126, "arielstegmann74@gmail.com", "Stegmann, Carlos Ariel"],
 [126, "maranda.gm@gmail.com", "Aranda, Marcelo"],
 [126, "nattyarrascaeta@hotmail.com", "Arrascaeta, Gabriela Natalia"],
 [126, "eliasmail0745@gmail.com", "Figueira Perez, Elias"],
 [132, "andreaalonso727@gmail.com", "Andrea Lujan, Alonso"],
 [132, "lopezrubenleonardo@gmail.com", "Lopez, Ruben Leonardo"],
 [132, "angie_caprarulo@hotmail.com", "María Angélica, Caprarulo"],
 [132, "marcos_gaso@hotmail.com", "Gaso, Marcos Leonardo"],
 [132, "juanlavayen@hotmail.com", "Lavayen, Juan Entiqur"],
 [132, "sydgi4@gmail.com", "Maggiolo, Gisela"],
 [132, "lucilamonzon96@gmail.com", "Monzon Fernandez, Lucila Emilce"],
 [132, "fabiandjulio@gmail.com", "D Julio, Fabian"],
 [132, "edgarscal@gmail.com", "Scaltritti, Edgar"],
 [132, "lore_ar@hotmail.com", "Arditi, Lorena"],
 [133, "luciano_otegui@hotmail.com", "Otegui, Luciano Jesús"],
 [133, "betianar76@gmail.com", "Ruiz Diaz, Betiana"],
 [133, "mg_sierra@yahoo.com.ar", "Sierra, Magdalena"],
 [133, "ferpa567@gmail.com", "Fernandez, Pablo"],
 [133, "matiasrheinze@gmail.com", "Rojo Heinze, Facundo"],
 [133, "lauratgo@gmail.com", "Markus, Laura"],
 [133, "guaranicazador@gmail.com", "Ortiz, Juan Pablo"],
 [134, "guillesuarez68@gmail.com", "Suárez, Guillermo"],
 [134, "miguelamema@gmail.com", "Mema, Miguel Angel"],
 [134, "vivianasolizosinaga@gmail.com", "Soliz, Viviana"],
 [134, "juanherrera545@hotmail.com", "Herrera, Juan Adolfo"]]


sin_integrador = [
  [126, "bergalolaura.programacion@gmail.com", "Bergalo, Laura Isabel"],
  [126, "gjwenner@gmail.com", "Wenner, Gustavo Javier"],
  [126, "ramiroalegre1976@gmail.com", "Alegre, Ramiro Alejandro"],
  [126, "jorgecponce40@gmail.com", "Jorge Christian, Ponce"],
  [126, "mikicerny@yahoo.com.ar", "Cernada, Miguel Angel"],
  [126, "griseldavanina@hotmail.es", "Gonzalez, Griselda Vanina"],
  [126, "mariacarolaaa@gmail.com", "Jerez, María Carola"],
  [126, "adrianclavario@gmail.com", "Osvaldo Adrian, Clavario"],
  [126, "robcaniza@gmail.com", "Roberto Carlos, Caniza"],
  [126, "vipescri@hotmail.com", "Villalba, Raul Orlando"],
  [126, "juanjocoronel1j@gmail.com", "Coronel, Juan José"],
  [126, "pablo.eluniversoweb@gmail.com", "Perez, Pablo"],
  [126, "arielsorensen@hotmail.com", "Sorensen, Ariel"],
  [126, "mari_joandet@hotmail.com", "Joandet, Mariela Giselle"],
  [126, "leousogral@gmail.com", "Moyano, Leonardo"],
  [132, "eduardodnf@gmail.com", "Núñez Fornaroli, Eduardo Daniel"],
  [132, "acegabriel62@gmail.com", "Acevedo, Gabriel"],
  [132, "gustavofurrer1@gmail.com", "Furrer, Gustavo Omar"],
  [132, "guillermohechem@hotmail.com", "Hechem, Guillermo"],
  [132, "sergiolignini@gmail.com", "Lignini, Sergio Darío Duilio"],
  [132, "aleousset@gmail.com", "Ousset, Alejandro"],
  [132, "sandovaly@yahoo.com", "Sandoval, Waldo David"],
  [132, "ferdacop@gmail.com", "Copte, Fernando David"],
  [132, "fadago1@gmail.com", "González, Fabián"],
  [132, "amoltoni@yahoo.com", "Moltoni, Andres Fernando"],
  [132, "ordoneznoeliap@gmail.com", "Ordoñez, Noelia"],
  [132, "mariia813@hotmail.com.ar", "Rodríguez, Maria Isabel"],
  [132, "andrealorenasuarez9@gmail.com", "Tapia Suarez, Andrea Lorena"],
  [132, "sergiolq2050@gmail.com", "Aramayo, Sergio Adrian"],
  [132, "danibrizu@yahoo.com.ar", "Brizuela, Jorge Daniel"],
  [132, "leonardogabriel@gmail.com", "D'acchille, Leonardo Gabriel"],
  [132, "agustiiin@yahoo.com.ar", "Fernández Gasc, Agustín"],
  [132, "elbfey@yahoo.com.ar", "Feyling, Elbio Adalberto"],
  [132, "mcolina77@gmail.com", "Mauricio Aurelio Nicolas, Colina"],
  [133, "miriany.gonzalez@gmail.com", "Gonzalez, Mirian Yolanda"],
  [133, "cristianmilano25@gmail.com", "Milano, Cristian Andrés"],
  [133, "luciano_otegui@hotmail.com", "Otegui, Luciano Jesús"],
  [133, "mariapaularodriguezmontes@gmail.com", "Rodríguez, María Paula"],
  [133, "betianar76@gmail.com", "Ruiz Diaz, Betiana"],
  [133, "aberbacha@gmail.com", "Aberbach, Angel Sergio"],
  [133, "padreedmundo@yahoo.com.ar", "Edmundo, Molina"],
  [133, "viviana.lopez.design@gmail.com", "López, Viviana"],
  [133, "tsade@live.com.ar", "Villafañe, Adriana"],
  [133, "tobiasalvarez@yahoo.com.ar", "Alvarez Lockmann, Tobías Daniel"],
  [133, "gloria.miguel@hotmail.com", "Miguel, Gloria"],
  [133, "dariorodriguez2907@gmail.com", "Rodriguez, Dario Fernando"],
  [133, "dante.m.garcia.75@gmail.com", "Garcia, Dante Marcelo"],
  [133, "vampirulo10@hotmail.com", "Gonzalez, Armando"],
  [133, "marchesiniramonricardo@gmail.com", "Marchesini, Ramón Ricardo"],
  [133, "lauratgo@gmail.com", "Markus, Laura"],
  [133, "lucianadelfin@gmail.com", "Milan, Luciana"],
  [133, "guaranicazador@gmail.com", "Ortiz, Juan Pablo"],
  [133, "diegompanno@gmail.com", "Panno, Diego Mauricio"],
  [133, "peredoisabel839@gmail.com", "Peredo, Isabel"],
  [134, "gustavofab@gmail.com", "Amado, Gustavo Fabian"],
  [134, "juanherrera545@hotmail.com", "Herrera, Juan Adolfo"],
  [134, "marcelnoguerol@yahoo.com.ar", "Noguerol, Maria Marcela"],
  [134, "ochoafabian2020@gmail.com", "Ochoa, Fabián Andrés"],
  [134, "verowaelkens@gmail.com", "Waelkens, Verónica María"],
  [134, "ciropuig1@gmail.com", "Ciro, Puig"],
  [134, "alfonsojosearias@gmail.com", "Arias, Alfonso Jose"],
  [134, "mahmudpaa@gmail.com", "Mahmud, Adrián"],
  [134, "charlymanera@gmail.com", "Manera, Carlos Federico"],
  [134, "juanpe752@gmail.com", "Eduardo José, Riera"],
  [134, "ucelayh@gmail.com", "Ucelay, Hector R"]
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
    nombre = oportunidad[2].split(",").last.split(" ").first.strip

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

def enviar_segunda_oportunidad(oportunidades)
  direccion = 'https://campus.argentinaprograma.utn.edu.ar/course/view.php?id={id}&section=9'

  n = oportunidades.size 
  i = 0
  oportunidades.each do |oportunidad|
    curso = oportunidad[0]
    email = oportunidad[1]
    nombre = oportunidad[2].split(",").last.split(" ").first.strip

    id = ConvertirCursoId[curso]
    url = direccion.gsub("{id}", id.to_s)

    puts "Enviando correo electrónico a #{nombre} (#{email})"
    
    texto = """
#{nombre}:

Según mis registros, aún no has completado el Examen Online, un cuestionario de 20 preguntas de opciones múltiples que deberías poder responder en unos minutos. Habiendo cumplido con la asistencia y la aprobación de los trabajos prácticos, confío en que el examen no representará una dificultad para ti, al igual que no lo fue para tus compañeros. No obstante, la plataforma exige que se complete.

Considerando que ya has cumplido con el resto de las consignas, hemos decidido brindarte una última oportunidad y habilitar la posibilidad de que lo respondas durante el fin de semana.

Puedes acceder directamente desde aquí: #{url}

¡Buena suerte!
    
    puts "Enviando correo electrónico a #{nombre} (#{email}) (#{i+=1}/#{n})"
    texto = texto.gsub("\n", "\r\n")
    enviar email, "Recuperación examen Argentina Programa", texto
  end
end 

def enviar_falta_integral(sin_integral)

  i, n = 0, sin_integral.size 

  sin_integral.each do |x|
    curso = x[0]
    email = x[1]
    nombre = x[2].split(",").last.split(" ").first.strip

    id = ConvertirCursoId[curso]
  
    texto = """
    Hola #{nombre}:

    Según mis registros has asistido y aprobado el 'Trabajo Práctico 1' pero no presentaste el 'Trabajo Práctico Integral'

    ¿Podrias explicame que sucedio?
    
    """
    
    puts "Enviando correo electrónico a #{nombre} (#{email}) (#{i+=1}/#{n})"
    texto = texto.gsub("\n", "\r\n")
    enviar email, "Falta Trabajo Práctico Integral", texto
  end
end 

respondieron = oportunidades - segunda_oportunidad
puts "1 Oportunidad #{oportunidades.size}"
puts "Respondieron #{respondieron.size}"
puts "2 Oportunidad #{segunda_oportunidad.size}"

Gmail = Gmail.connect(Username, Password)
# enviar_oportunidad oportunidades
# enviar_falta_integral sin_integrador



Gmail.logout

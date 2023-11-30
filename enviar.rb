require 'gmail'

# Credenciales de Gmail
$username = 'adibattistautn@gmail.com'
$password = 'ibny dblm svwt dzup'
Gmail = Gmail.connect($username, $password)

def enviar(destinatarios, asunto, contenido)
  # Crea una instancia de Gmail
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

Gmail.logout

enviar ["alejandrodibattista@gmail.com", "adibattista.utn@gmail.com"], "Prueba 2", "Estoy enviando un correo electrónico desde Ruby a 2 destinatarios"


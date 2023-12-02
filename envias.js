const nodemailer = require('nodemailer');

const Username = 'adibattistautn@gmail.com'
const Password = 'ibny dblm svwt dzup'

function send(destinatarios, asunto, contenido) {
    console.log("Conectado a Gmail");
    const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: Username, pass: Password } });
    const mailOptions = {from: Username, to: destinatarios, subject: asunto, text: contenido  };
    console.log(`Enviando correo a ${destinatarios}`);
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
        } else {
            console.log(`Correo electrónico enviado: ${info.response}`);
        }
    });
    transporter.close();
}

const segunda_oportunidad = [
    [126, "gjwenner@gmail.com", "Wenner", "Gustavo Javier"],
    [126, "mikicerny@yahoo.com.ar", "Cernada", "Miguel Angel"],
    [126, "griseldavanina@hotmail.es", "Gonzalez", "Griselda Vanina"],
    [126, "arielstegmann74@gmail.com", "Stegmann", "Carlos Ariel"],
    [126, "maranda.gm@gmail.com", "Aranda", "Marcelo"],
    [126, "nattyarrascaeta@hotmail.com", "Arrascaeta", "Gabriela Natalia"],
    [126, "eliasmail0745@gmail.com", "Figueira Perez", "Elias"],
    [132, "andreaalonso727@gmail.com", "Andrea Lujan", "Alonso"],
    [132, "lopezrubenleonardo@gmail.com", "Lopez", "Ruben Leonardo"],
    [132, "angie_caprarulo@hotmail.com", "María Angélica", "Caprarulo"],
    [132, "marcos_gaso@hotmail.com", "Gaso", "Marcos Leonardo"],
    [132, "juanlavayen@hotmail.com", "Lavayen", "Juan Entiqur"],
    [132, "sydgi4@gmail.com", "Maggiolo", "Gisela"],
    [132, "lucilamonzon96@gmail.com", "Monzon Fernandez", "Lucila Emilce"],
    [132, "fabiandjulio@gmail.com", "D Julio", "Fabian"],
    [132, "edgarscal@gmail.com", "Scaltritti", "Edgar"],
    [132, "lore_ar@hotmail.com", "Arditi", "Lorena"],
    [133, "luciano_otegui@hotmail.com", "Otegui", "Luciano Jesús"],
    [133, "betianar76@gmail.com", "Ruiz Diaz", "Betiana"],
    [133, "mg_sierra@yahoo.com.ar", "Sierra", "Magdalena"],
    [133, "ferpa567@gmail.com", "Fernandez", "Pablo"],
    [133, "matiasrheinze@gmail.com", "Rojo Heinze", "Facundo"],
    [133, "lauratgo@gmail.com", "Markus", "Laura"],
    [133, "guaranicazador@gmail.com", "Ortiz", "Juan Pablo"],
    [134, "guillesuarez68@gmail.com", "Suárez", "Guillermo"],
    [134, "miguelamema@gmail.com", "Mema", "Miguel Angel"],
    [134, "vivianasolizosinaga@gmail.com", "Soliz", "Viviana"],
    [134, "juanherrera545@hotmail.com", "Herrera", "Juan Adolfo"]
]

send(['alejandrodibattista@gmail.com', 'alejandrodibattista+1@gmail.com'], 'Test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
/**
 * Función para cambiar el color del texto de un elemento id "titulo".
 * Cuando se llama a esta función, comprueba el color actual del texto.
 * Si el color es azul, lo cambia a rojo.
 * Si el color no es azul (o es rojo), lo cambia a azul.
 */
function cambiarColor() {
    var titulo = document.getElementById('titulo');
    if (titulo.style.color === 'blue') {
        titulo.style.color = 'red';
    } else {
        titulo.style.color = 'blue';
    }
};


/**
 * Función para generar un menú de navegación en la página web.
 * El menú incluye un logo que enlaza a la página de inicio y tres enlaces a diferentes páginas.
 * Los enlaces son: Home, Curso JavaScript y Curso CSS.
 * Esta función utiliza el método `document.write()` para insertar el HTML directamente en la página.
 */
function generarMenu() {
    // Utiliza una plantilla de cadena de texto (template string) para crear el HTML del menú
    document.write(`
        <a href="pagina.html">
            <img src="logo.png" alt="Logo" width="100px">              
        </a>             
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="curso-js.html">Curso JavaScript</a></li>
                <li><a href="curso-css.html">Curso CSS</a></li>
            </ul>
        </nav>`);
}
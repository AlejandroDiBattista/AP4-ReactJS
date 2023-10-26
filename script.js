// Tabla de multiplicar

function generarTabla(n) {
    
    let html = ``
    html += `<h2>Version dentro del script</h2>`
    html += `<h3>Tabla de multiplicar del ${n}</h3> `
    html += `<ul>`
    for (let i = 1; i <= 5; i++) {
        html += `<li>${i} x ${n} = ${n * i}</li>`;
    }
    html += `</ul>`
    return html;
}
// <h1>Tabla del multiplicar del 5</h1>
// <p>1 * 5 = 5</p>
// <p>2 * 5 = 10</p>
// <p>3 * 5 = 15</p>
// <p>4 * 5 = 20</p>
// <p>5 * 5 = 25</p>


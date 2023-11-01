

// function distancia1(punto) {
//     return Math.sqrt(punto.x * punto.x + punto.y * punto.y);
// }

// function distancia2(punto) {
//     let x = punto.x;
//     let y = punto.y;

//     return Math.sqrt(x * x + y * y);
// }

// function distancia3(punto) {
//     let { x, y } = punto;
//     return Math.sqrt(x * x + y * y);
// }

// function distancia4({ x, y = 10 }) {
//     return Math.sqrt(x * x + y * y);
// }

// function sumar1(a, b) {
//     return a + b;
// }

// const sumar2 = function (a, b) {
//     return a + b;
// }

// const sumar3 = (a, b) => {
//     return a + b;
// }

// const sumar4 = (a, b) => a + b;


// console.log(sumar1(1, 2));
// console.log(sumar2(1, 2));
// console.log(sumar3(1, 2));
// console.log(sumar4(1, 2));

// function nombreCompleto1(persona) {
//     return `${persona.nombre} ${persona.apellido}`;
// }

// const nombreCompleto2 = (persona) => `${persona.nombre} ${persona.apellido}`;

// const nombreCompleto3 = ({ nombre, apellido }) => `${nombre} ${apellido}`;

// console.log(nombreCompleto1({ nombre: 'Juan', apellido: 'Perez' }));
// console.log(nombreCompleto2({ nombre: 'Juan', apellido: 'Perez' }));
// console.log(nombreCompleto3({ nombre: 'Juan', apellido: 'Perez' }));


let nombres = ['Alejandro', 'Juan', 'Pedro', 'Maria', 'Ana', 'Luis'];

let lenNombre = []
for (let i = 0; i < nombres.length; i++) {
    let a = nombres[i];
    lenNombre.push(a.length);
}

let b = nombres.map( nombre => nombre.length );

console.log(nombres)
console.log(lenNombre);
console.log(b);

function mapear(lista, fn) {
    let salida = [];
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        let tmp = fn(item)

        salida.push(tmp);
    }
    return salida;
}

const longitud = texto => texto.length;

let c = mapear(nombres, longitud);
let d = mapear(nombres, texto => texto.length)

let may = nombres.map(texto => texto.toUpperCase()) // Transfoma a mayusculas
console.log(may);

let min = nombres.map(texto => texto.toLowerCase()) // Transfoma a minusculas
console.log(min);

let salida = []
for (let i = 0; i < nombres.length; i++){
    let item = nombres[i];
    if (item.length >= 4) {
        salida.push(item)
    }
}

let salida2 = nombres.filter(item => item.length >= 4);

console.log(salida);
console.log(salida2);

let nombreLargosEnMayuscula = nombres
    .filter(item => item.length >= 4)
    .map(item => item.toUpperCase());

console.log(nombreLargosEnMayuscula)

let nombre5 = nombres
    .filter(item => item.length == 5)
    .map(t => t.toLowerCase());

console.log(nombre5);

let p = {
    nombre: "Juan",
    apellido: "Perez",

    nombreCompleto: function () {
        return `${this.nombre} ${this.apellido}`;
    }
}

function nombreComplet(p) {
    return `${p.nombre} ${p.apellido}`;
}


console.log(nombreComplet(p));
console.log(p.nombreCompleto());

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}

let a1 = new Persona("Juan", "Perez");
console.log(a1.nombreCompleto());

let d1 = new Date(1967,12,5);
console.log(d1);

let a2 = new Persona("Maria", "Gomez");
console.log(a2.nombreCompleto)

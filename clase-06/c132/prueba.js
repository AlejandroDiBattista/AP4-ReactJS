let a = [10, 20, 30, 40]

let b = [...a, 1000]  // Copiar el array y añadir un elemento


console.log(a)  // [10, 20, 30, 40]
console.log(b)  // [10, 20, 30, 40, 1000]

let c = { nombre: 'Pepe', edad: 23, apellido: 'Perez', id: 34 }
let d = { ...c }  // Copiar el objeto

let e = { nombre: 'Juan', edad: 50 }

let dd = {...c, ...e}

console.log(c)  // { nombre: 'Juan', edad: 23 }
console.log(d)  // { nombre: 'Juan', edad: 23 }

let s = "ANTES " + JSON.stringify(c) + " DESPUES "

let j = '{"nombre":"Juan","edad":23}'
let o = JSON.parse(j)

console.log( s )  // { nombre: 'Juan', edad: 23 }

































function useState(inicial) {
    let estado = inicial;

    function getEstado() {
        return estado;
    }

    function setEstado(nuevoEstado) {
        estado = nuevoEstado;
    }

    return [getEstado, setEstado];
}

const [getNombre, setNombre] = useState('Juan');

setNombre("Pedro");
console.log(getNombre());


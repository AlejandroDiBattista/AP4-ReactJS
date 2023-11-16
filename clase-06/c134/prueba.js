// let a = [ 10, 20, 30, 40 ]
// let b = [1000, ...a]

// console.log(a)
// console.log(b)

// let m = { id: 1, nombre: 'Juan', edad: 20 }
// let x = { ...m }    // Copiar el objeto m en x
// let o = { edad: 99, profesion: 'Programador' }

// let n = { ...m, ...o }

// console.log(m)
// console.log(n)

// let bb = { ...aa }
// console.log(bb)
// console.log(aa.nombre)

let personas = [
    { id: 1, nombre: 'Juan',  edad: 20 },
    { id: 2, nombre: 'Ana',   edad: 30 },
    { id: 3, nombre: 'Luis',  edad: 40 },
    { id: 4, nombre: 'Lucia', edad: 50 },
    { id: 5, nombre: 'Maria', edad: 50}
]

let luis = { id: 3, nombre: 'Luis Maria', edad: 41 }
let a = personas.map(persona => persona.id == luis.id ? luis : persona)
// Actualizar un elemente en un arreglo copiado

let id = 3 
let b = personas.filter(persona => persona.id != id)
// Creeme una copia sin el elemento indicado

// console.log( JSON.stringify(b) )

let diego = { id: 6, nombre: 'Diego', edad: 60}
let d = [...personas, diego]	

console.log( JSON.stringify(d) )
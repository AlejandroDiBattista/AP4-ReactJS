// Como manipular una lista sin que se modifique la original

// IDEA PRINCIPAL
// La asignación de un array a una variable no copia los valores, solo copia la referencia a la lista original
//

// ---------------------------------------------------------------
// El problema es que la asignación de un array a una variable no copia los valores, solo copia la referencia a la lista original
//
let lista = [1, 2, 3, 4, 5];
const a = lista 

a.push(100)         // Modifica la lista original (aunque se haya asignado a otra variable)
console.log(lista)  // [1, 2, 3, 4, 5, 100]
console.log(a)      // [1, 2, 3, 4, 5, 100]

// ---------------------------------------------------------------
// Para copiar una lista sin modificar la original se puede usar el operador spread (...)
//
lista = [1, 2, 3, 4, 5] // Reinicializa la lista original

const b = [...lista]    // Crea una copia de la lista original (IDEA CENTRAL)
b.push(200)

console.log(lista)  // [1, 2, 3, 4, 5]
console.log(b)      // [1, 2, 3, 4, 5, 200]

const c = [...lista, 1000]  // Crea una copia de la lista original y le agrega un elemento al final

console.log(lista)  // [1, 2, 3, 4, 5]
console.log(c)      // [1, 2, 3, 4, 5, 1000]

const d = [1000, ...lista]  // Crea una copia de la lista original y le agrega un elemento al comienzo

console.log(lista) // [1, 2, 3, 4, 5]
console.log(d)     // [1000, 1, 2, 3, 4, 5]

// ===============================================================
//  IDEA PRINCIPAL
//  La asignación de un objeto a una variable no copia los valores, solo copia la referencia al objeto original

let objeto = { a: 1, b: 2, c: 3 }

const e = objeto

e.d = 100      // Modifica el objeto original (aunque se haya asignado a otra variable)

console.log(objeto) // { a: 1, b: 2, c: 3, d: 100 }
console.log(e)      // { a: 1, b: 2, c: 3, d: 100 }

// ---------------------------------------------------------------
// Para copiar un objeto sin modificar el original se puede usar el operador spread (...)
//

objeto = { a: 1, b: 2, c: 3 }   // Reinicializa el objeto original

const f = { ...objeto }         // Crea una copia del objeto original
f.c = 100

console.log(objeto)             // { a: 1, b: 2, c: 3 }
console.log(f)                  // { a: 1, b: 2, c: 100 }

const g = { ...objeto, d: 1000 }  // Crea una copia del objeto original y le agrega una propiedad

console.log(objeto)             // { a: 1, b: 2, c: 3 }
console.log(g)                  // { a: 1, b: 2, c: 3, d: 1000 }


// ---------------------------------------------------------------
// Algunos ejemplos extras
//
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2] // [1, 2, 3, 4, 5, 6] // Concatena dos listas

const o1 = { a: 1, b: 2 }
const o2 = { c: 3, d: 4 }

const o3 = { ...o1, ...o2 } // { a: 1, b: 2, c: 3, d: 4 } // Concatena dos objetos
const o4 = { ...o1, ...o2, a: 100 } // { a: 100, b: 2, c: 3, d: 4 } // Concatena dos objetos y modifica una propiedad


// ---------------------------------------------------------------
// Como manipular una lista de objetos
//
const personas = [
    { id: 1, nombre: 'Juan',  edad: 20 },
    { id: 2, nombre: 'Maria', edad: 30 },
    { id: 3, nombre: 'Pedro', edad: 40 },
    { id: 4, nombre: 'Ana',   edad: 50 },
    { id: 5, nombre: 'Luis',  edad: 60 }
]

// Como buscar un elemento
const persona = personas.find(p => p.id === 3) // { id: 3, nombre: 'Pedro', edad: 40 }

// Como agregar una persona
const nuevo = { id: 6, nombre: 'Carlos', edad: 70 }
const nuevasPersonas = [...personas, nuevo] // Agrega una persona al final de la lista

// Como modificar una persona 
const cambio = { id: 3, edad: 41 } 

const personasConCambio = personas.map(p => p.id === cambio.id ? { ...p, ...cambio } : p) // Modifica la edad de Pedro

// Como eliminar una persona
const personasSinPedro = personas.filter(p => p.id !== 3) // Elimina a Pedro de la lista

const ordenado = personas.sort((a, b) => a.edad - b.edad) // Ordena la lista por edad

const total = personas.reduce((acum, p) => acum + p.edad, 0) // Suma las edades de todas las personas

const promedio = total / personas.length // Calcula el promedio de edad de todas las personas

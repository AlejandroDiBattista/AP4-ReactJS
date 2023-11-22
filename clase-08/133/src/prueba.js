
let contadores = [
    { id: 1, cantidad:  0 , nombre: 'Contador 1', activo: true },
    { id: 2, cantidad: 10 , nombre: 'Contador 2', activo: false },
    { id: 3, cantidad: 20 , nombre: 'Contador 3', activo: true },
    { id: 4, cantidad: 30 , nombre: 'Contador 4', activo: false },
    { id: 5, cantidad: 40 , nombre: 'Contador 5', activo: true},
]

// Como agregar un objeto dentro de un array
let nuevo = { id: 6, cantidad: 60 }
let agregados = [...contadores, nuevo]

// Como actualizar un objeto dentro de un array
let cambio = { id: 3, cantidad: 1000 }
let modificados = contadores.map((contador) => contador.id === cambio.id ? cambio : contador)

// Como borrar un objeto dentro de un array
let id = 3
let borrados = contadores.filter((contador) => contador.id !== id)

console.log(JSON.stringify(contadores))
console.log(JSON.stringify(agregados))
console.log(JSON.stringify(modificados))
console.log(JSON.stringify(borrados))

function incrementar(contadores, id) {
    let actual = contadores.find((contador) => contador.id === id)
    let nuevo = { ...actual, cantidad: actual.cantidad + 1 }
    let modificados = contadores.map((contador) => contador.id === id ? nuevo : contador)
    return modificados
}

let actualizado = incrementar(contadores, 3)
console.log("Incrementando el elemento 3")
console.log(JSON.stringify(contadores))
console.log(JSON.stringify(actualizado))


const contadores = [
    { id: 1, cantidad: 5 },
    { id: 2, cantidad: 10 },
    { id: 3, cantidad: 15 },
] 
// Agrega un nuevo elemento sin modificar el original
let nuevo = { id: 4, cantidad: 20 }
let nuevos = [...contadores, nuevo]

// Borrar un elemento sin modificar el original
let id = 2 
let borrados = contadores.filter(contador => contador.id !== id)

// Cambiar un elemento sin modificar el original
let cambiar = { id: 2, cantidad: 100 }
let cambiados = contadores.map(contador => contador.id === cambiar.id ? cambiar : contador)
    
console.log("orginal", JSON.stringify(contadores))
console.log("agregado", JSON.stringify(nuevos))
console.log("borrado", JSON.stringify(borrados))
console.log("cambiado", JSON.stringify(cambiados))


const contador = { id: 1, cantidad: 5, nombre: "Auto", hora: "12:00" }
const nuevoContador = { ...contador, cantidad: 10 }


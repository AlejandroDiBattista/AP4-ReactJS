const contadores = [
    { id: 1, cantidad: 0 },
    { id: 2, cantidad: 0 },
    { id: 3, cantidad: 0 },
    { id: 4, cantidad: 0 },
]

 
const cambio = {id: 2, cantidad: 100}
const nuevos = contadores.map(contador => contador.id === cambio.id ? cambio : contador)

// Operacines sobre arrays sin modificar el original
const agregado = [...original, nuevo]
const modificado = original.map(elemento => elemento.id === modificado.id ? modificado : elemento)
const borrado = original.filter(elemento => elemento.id !== borrado.id)

const contador = { id: 1, cantidad: 0 }
const nuevoContador = { ...contador, cantidad: 10 }

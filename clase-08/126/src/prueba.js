const contadores = [
    { id: 1, cantidad: 10, a:10 },
    { id: 2, cantidad: 25, a:20 },
    { id: 3, cantidad: 30, a:30, c:30 },
]

const nuevo = { id: 4, cantidad: 40 }
const agregados = [...contadores]
agregados.push(nuevo)

const id = 3
const borrados = contadores.filter(contador => contador.id !== id)

const actual = contadores.find(contador => contador.id === 2)
const modificado = { ...actual, cantidad: 100 }
const modificados = contadores.map(contador => contador.id === modificado.id ? modificado : contador)

console.log("Contadores", JSON.stringify(contadores))

console.log("Agregados     ", JSON.stringify(agregados))
console.log("Borrados      ", JSON.stringify(borrados))
console.log("Modificados   ", JSON.stringify(modificados))

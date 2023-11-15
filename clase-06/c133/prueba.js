let personas = [
    { id: 1, nombre: 'Juan', edad: 20 },
    { id: 2, nombre: 'Pedro', edad: 18 },
    { id: 3, nombre: 'Pablo', edad: 22 },
    { id: 4, nombre: 'Luis', edad: 19}
]

let id = 2

// Buscar la persona con id = 2
let persona = personas.find(p => p.id === id) ?? { id: 0, nombre:'', edad: 0 }

console.log(personas)
console.log(persona)

let borrado = personas.filter(persona => persona.id !== id)
console.log(JSON.stringify(borrado))

let ana = { id: 5, nombre: 'Ana', edad: 20 }

let agregado = [...personas, { ...ana, edad: 50 }]
console.log(JSON.stringify(agregado))

let pedro = { id: 2, nombre: 'Pepe', edad: 19 }
 
let modificado = personas.map(persona => persona.id === pedro.id ? pedro : persona) // Modicar
console.log(JSON.stringify(modificado))

console.log(JSON.stringify(personas))
let aux = '{ "id": 1, "nombre": "Juan", "edad": 20 }'

let obj = JSON.parse(aux)
obj.nombre = "XXXXX"
console.log(obj)

function sumar(a, b){
    return a + b
}

let contar = 0

function incrementar(incremento) {
    contar = contar + incremento
}

incrementar(1)
sumar(1, 2)
incrementar(1)
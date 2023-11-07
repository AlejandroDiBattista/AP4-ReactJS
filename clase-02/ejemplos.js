//
// Al final del archivo se definen dos funciones para mostrar los ejemplos en la consola.
//
// - seccion(titulo): para separar los ejemplos.
// - mostrar(valor):  para presentar los resultados de los ejemplos.
//      Observe que en la consola muestra el tipo de dato y el número de línea donde se llama a la función
//
// Para probar en la consola se debe instalar NODEJS desde https://nodejs.org/es/
// y ejecutar el comando 'node ejemplos.js' (o F5 desde Visual Studio Code)
//

seccion('Ejemplo uso de "number"')
let a0 = 100            // Numeros enteros
let a1 = 100.1          // Numeros decimales
let a2 = 0xA0B1C2       // Incluso numeros Hexadecimal (pe. para poner un color)

mostrar(a0)
mostrar(a1)
mostrar(a2)

seccion('Ejemplos uso de "string"')
let b0 = "Juan"         // Se puede unsar comillas dobles, simples o backticks
let b1 = 'Juan'
let b2 = `Juan`
let b3 = `Hola ${b0 + 'y' + b1}` // Interpolación de cadenas (Los que esta entre ${} se evalua como codigo javascript)
let b4 = ` 
    Las cadenas
    pueden ocupar
    varias lineas con la comilla invertida (backtick)
`
mostrar(b0)
mostrar(b1)
mostrar(b2)
mostrar(b3)
mostrar(b4)

seccion('Ejemplos uso de "Boolean"')
let c0 = true
let c1 = false
let c2 = 1 > 2      // Operadores de comparación siempre generan un boolean
let c3 = 1 < 2

mostrar(c0)
mostrar(c1)
mostrar(c2)
mostrar(c3)

if (12 > 10) mostrar("12 es mayor que 10")

let c4 = 12 > 10 
if (c4) mostrar("12 es mayor que 10")    
let c5 = -1
if (c5) mostrar("c5 es verdadero") // Cualquier numero diferente de 0 es verdadero


seccion('Ejemplos uso de "undefined"')
let d0                  // variable sin inicializar

if (d0 === undefined) mostrar("d0 es undefined")

let d1 = null           // variable inicializa pero con ausencia de valor
mostrar(d0)
mostrar(d1)
mostrar(d1 == null)

// ARRAY : Colección de valores homogeneos

seccion('Ejemplos uso de "Array"')

let e0 = [1, 2, 3, 4]           // Colección de números
let e1 = ['a', 'b', 'c', 'd']   // Colección de cadenas
let e2 = [                      // Array de arrays (conocido como matriz)
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];
        
let e3 = [1, 'a', true, null, undefined, [1, 2, 3], { nombre: 'Juan', edad: 20 }]  //Array (coleccion de valores de cualquier tipo)

mostrar(e0)
mostrar(e1)
mostrar(e2)
mostrar(e3)

// Leer valores
seccion('Acceso a los elementos de un "Array"')

let e4 = e0[0]  // A la derecha del = se leer el valor
mostrar(e4)

e0[1] = 1000    // A la izquierda del = se asigna el valor
mostrar(e0)

// Propiedad length
seccion('Propiedad length de un "Array"')
mostrar(e0.length)   // Propiedad de un array que indica la cantidad de elementos que tiene

seccion('Metodos de un "Array" para manipular el contenido' )
e0.push(5)           // Metodo de un array que agrega un elemento al final
mostrar(e0)

e0.unshift(100)        // Metodo de un array que agrega un elemento al principio
mostrar(e0)

let e5 = e0.pop()     // Metodo de un array que elimina el ultimo elemento y lo devuelve
mostrar(e5)             // Ultimo elemento eliminado
mostrar(e0)             // Array modificado

let e6 = e0.shift()   // Metodo de un array que elimina el primer elemento y lo devuelve
mostrar(e6)             // Primer elemento eliminado
mostrar(e0)             // Array modificado


// Recorrer un array
seccion('Recorrer un "Array"')
for (let i = 0; i < e0.length; i++) {
    mostrar(e0[i])
}

e0.forEach((elemento) => mostrar(elemento)) // Metodo de un array que recorre todos los elementos

// OBJETOS : Colección de valores 
seccion('Ejemplos uso de "Object"')

let f0 = { nombre: 'Juan', edad: 20 }  // Objeto (coleccion de valores heterogeneos)
mostrar(f0)

seccion('Objetos anidados')
let f1 = {  // Objetos anidados
    nombre: 'Juan',
    edad: 20,
    direccion: {
        calle: 'Av. Siempre Viva',
        numero: 123
    }
}
mostrar(f1)

seccion('Formas de declarar un objeto')
let f2 = { 'nombre': 'Juan', 'edad': 20 }   // Forma normal
let f3 = { nombre: 'Juan', edad: 20 }       // Forma corta (sin comillas cuando el nombre es una palabra)

mostrar(f2) // Los dos objetos son iguales
mostrar(f3)

let nombre = 'Juan', edad = 20
let f4 = { nombre: nombre, edad: edad }     // Forma normal
let f5 = { nombre, edad }                   // Forma super corta cuando el nombre de la propiedad es igual al nombre de la variable

mostrar(f4) // Los dos objetos son iguales
mostrar(f5)

seccion('Los objetos pueden ser muy complejos')
let gerente = { // OBJETO que contiene ARRAY que contiene OBJETOS
    nombre: 'Juan',
    edad: 20,
    cargo: {
        nombre: 'Gerente',
        sueldo: 10000,
    },
    empleados: [
        { nombre: 'Pedro', sueldo: 300 },
        { nombre: 'Maria', sueldo: 250 },
        { nombre: 'Jose', sueldo: 400 },
    ]
} 

let gerenteJson = { // JSON (JavaScript Object Notation) es un formato de intercambio de datos
    "nombre": 'Juan',   // Observen que los nombres de las propiedades van entre comillas
    "edad": 20,
    "cargo": {
        "nombre": 'Gerente',
        "sueldo": 10000
    },
    "empleados": [
        { "nombre": 'Pedro', "sueldo": 300 },
        { "nombre": 'Maria', "sueldo": 250 },
        { "nombre": 'Jose', "sueldo": 400 }
    ]
}
 
mostrar(gerente)        // Los dos son lo mismo
mostrar(gerenteJson)

seccion('Acceso a los elementos de un objeto')
let f6 = f0.nombre      // Acceso con sintexis de punto
let f7 = f0['nombre']   // Acceso con sintexis de corchetes

mostrar(f6) // Los dos son lo mismo
mostrar(f7)

seccion('Modificar un objeto')
mostrar(f0) // Objeto original
f0.nombre = 'Pedro' // Modificar una propiedad
mostrar(f0) // Objeto modificado

seccion('Modificar un objeto anidado')
mostrar(gerente.empleados[0].nombre) // Acceso a un objeto anidado
gerente.empleados[0].nombre = 'Nuevo nombre' // Modificar un objeto anidado
mostrar(gerente)

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
}
mostrar(persona)

let claves = Object.keys(persona) // Metodo de un objeto que devuelve las propiedades
mostrar(claves) 

let valores = Object.values(persona) // Metodo de un objeto que devuelve los valores
mostrar(valores) 


// DECONSTRUCCION

seccion('Descontruccion de Arrays')
// Cuando se usa la sintexis de un array en la declaracion de la variable, se llama descontruccion de array

let g0 = [101, 102, 103, 104, 105]

let [x, y, , , z] = g0 // Descontruccion de un array
mostrar(x)
mostrar(y)
mostrar(z)

let [primero, segundo, ...resto] = g0   // ...resto es un array con el resto de los elementos
mostrar(primero)
mostrar(segundo)
mostrar(resto)

let g2 = g0          // g2 es una referencia a g0 (no copia los datos)
let g3 = [...g0]    // Truco con '...' para copiar un array (no es una referencia)

g2[0] = 1000
mostrar(g0)
mostrar(g2)

g3[1] = 2000
mostrar(g0)
mostrar(g3)

seccion('Descontruccion de Objetos')
// Cuando se usa la sintexis de un objeto en la declaracion de la variable, se llama descontruccion de objeto
let { nombre: n, apellido: a, edad: e } = persona // Descontruccion de un objeto
// equivale a...
//  let n = persona.nombre
//  let a = persona.apellido
//  let e = persona.edad
mostrar(`Nombre: ${n} Apellido: ${a} Edad: ${e}`)

// let { nombre, apellido, edad } = persona
// equivale a...
// let { nombre: nombre, apellido: apellido, edad: edad } = persona


let auto = { marca: 'Ford', modelo: 'Fiesta', anio: 2019 }
let { marca, modelo, anio } = auto

mostrar(marca)
mostrar(modelo)
mostrar(anio)

let h1 = auto           // No copia los datos, es una referencia
let h2 = { ...auto }    // Truco con '...' para copiar un objeto (no es una referencia)

seccion('Los objetos son pasados por referencia')
mostrar(h1)                 // Antes de modificar
h1.marca = 'Fiat'
mostrar(h1)                 // Despues de modificar
mostrar(auto)               // El objeto original se modifica (porque es una referencia)

seccion(' Cuando se copiar un objeto con ...')
mostrar(h2)                 // Antes de modificar
h2.modelo = 'Uno'
mostrar(h2)                 // Despues de modificar
mostrar(auto)               // El objeto original no se modifica (porque no es una referencia)

// ARRAYS Y OBJETOS

let i1 = [1, 2, 3, 4]
let i2 = { nombre: 'Juan', edad: 20 }

i1['nombre'] = 'Pedro'  // Agrega una propiedad al array
i2[0] = 100             // Agrega un elemento al objeto

mostrar(i1)             // Los arrays son objetos (pero no muestra la propiedad)
mostrar(i1.nombre)

mostrar(i2)
mostrar(i2[0])          // Los objetos son arrays (cuando las propiedades son numeros)

let i3 = [1, 2, 3]
i3[10] = 10             // Las posiciones i3[3] al i3[9] son undefined

mostrar(i3)             // Los arrays son objetos (cuando las propiedades son números)

// FUNCIONES

// Como usar '...' para copiar array y objetos

let j1 = [1, 2, 3, 4]
let j2 = { nombre: 'Juan', edad: 20 }

mostrar(j1)
mostrar(j2)

seccion('Copiar un array u objeto')
let j3 = [...j1]        // Copia un array
mostrar(j3)              // j3 es una copia de j1

let j4 = { ...j2 }      // 
mostrar(j4)             // j4 es una copia de j2

seccion('Agregar un elemento a un array u objeto')
let j5 = [...j1, 100]   // Copia un array y agrega un elemento
let j6 = { ...j2, sueldo: 10000 } // Copia un objeto y agrega una propiedad

seccion('Concatenar un array u objeto')
let j7 = [...j1, ...j1] // Copia un array y concatena con otro array
let j8 = { ...j2, ...j2 } // Copia un objeto y concatena con otro objeto


seccion('Funciones')
// El pasaje de parámetros es como las declaraciones de variables

function sumar(a, b = 10) {  // a y b son parámetros
    mostrar(`a: ${a} b: ${b} => (${arguments.length}) [${arguments[0]}, ${arguments[1]}]`)
    return a + b                // arguments es un array con los parámetros 
}

sumar()             // a: undefined b: undefined
sumar(10)           // a: 10 b: 10
sumar(10, 20)       // a: 10 b: 20
sumar(10, 20, 30)   // a: 10 b: 20 (30 es ignorado)

// Se puede usar la desestructuración en la declaración de la función

function sumar1(a, b){
    return a + b
}

let par = { a: 10, b: 20 }  

// 
function sumar2(par) {  
    return par.a + par.b
}

function sumar3(par) {
    let a = par.a
    let b = par.b
    return a + b
}

function sumar4(par) {
    let { a, b } = par
    return a + b
}

function sumar5({ a, b }) {
    return a + b
}

mostrar(sumar1(par))    // Las 5 funciones son equivalentes
mostrar(sumar2(par))
mostrar(sumar3(par))
mostrar(sumar4(par))
mostrar(sumar5(par))

mostrar(sumar5({ a: 10, b: 20 })) // Se puede usar la desestructuración en la llamada a la función

// FUNCIONES | Formas de declarar una función

function incrementar1(n) {      // Funcion normal
    return n + 1
}

let incrementar2 = function(n) { // Funcion anonima
    return n + 1
}

let incrementar3 = (n) => {      // Funcion flecha
    return n + 1
}

let incrementar4 = (n) => n + 1 // Funcion flecha con una sola linea
let incrementar5 = n => n + 1   // Funcion flecha con un solo parámetro

seccion('Diferentes formas de declarar una función')

mostrar(incrementar1(10))   // Las 5 funciones son equivalentes
mostrar(incrementar2(10))
mostrar(incrementar3(10))
mostrar(incrementar4(10))
mostrar(incrementar5(10))

// La misma pero ejemplificado con la clase Persona(nombre, apellido, edad)

function nombreCompleto(nombre, apellido) {     // Funcion tradicional donde el nombre y apellido son parámetros
    return `${nombre} ${apellido.toUpperCase()}`
}

function nombreCompleto1(persona) {             // Funcion que recibe un objeto como parámetro
    return `${persona.nombre} ${persona.apellido.toUpperCase()}`    // Accediendo a las propiedades del objeto
}

function nombreCompleto2(persona) {
    let nombre = persona.nombre             // Copiando las propiedades del objeto en variables
    let apellido = persona.apellido

    return `${nombre} ${apellido.toUpperCase()}`
}

function nombreCompleto3(persona) {
    let { nombre, apellido } = persona      // Copiando las propiedades mediante desestructuración

    return `${nombre} ${apellido.toUpperCase()}`
}

function nombreCompleto4({ nombre, apellido }) { // Usar la desestructuración en la declaración de la función
    return `${nombre} ${apellido.toUpperCase()}`
}

mostrar(nombreCompleto1(persona))
mostrar(nombreCompleto2(persona))
mostrar(nombreCompleto3(persona))
mostrar(nombreCompleto4(persona))
mostrar(nombreCompleto4({ nombre: 'Juan', apellido: 'Perez' })) // Usar la desestructuración en la llamada a la función



// Las funciones son objetos de primer nivel en JavaScript
// es decir... pueden ser pasadas como parámetros y devueltas como resultado

// Podemos usarla para hacer funciones genericas

function operar(a, b, operacion) {
    return operacion(a, b)
}   

function multiplicar(a,b){ return a * b}
let dividir = (a, b) => a / b

mostrar(operar(20, 10, multiplicar))  // Cuando se pasa una función como parámetro, no se ponen los paréntesis
mostrar(operar(20, 10, dividir)) 

// Funciones de orden superior.

// pe. Una funcion que dado un array me retorne otro array con los elementos duplicados
function duplicar(lista) {
    let resultado = []
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i] * 2     // <-- lista[i] * 2 trasnforma a duplicado
        resultado.push(item)
    }
    return resultado
}

// pe. Una funcion que dado un array me retorne otro array con los elementos en mayusculas
function mayusculas(lista) {
    let resultado = []
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i].toUpperCase() // <- lista[i].toUpperCase() trasnforma a mayusculas
        resultado.push(item)
    }
    return resultado
}

let numeros = [1, 2, 3, 4]
let nombres = ['juan', 'pedro', 'maria', 'ana']

mostrar(duplicar(numeros))
mostrar(mayusculas(nombres))

// Funciones de orden superior.
// Podemos crear una funcion que le pasemos que operación queremos realizar.

function mapear(lista, fn) {
    let resultado = []
    for (let i = 0; i < lista.length; i++) {
        let item = fn(lista[i])     // <-- fn(lista[i]) trasnforma a duplicado o mayusculas
        resultado.push(item)
    }
    return resultado
}

// duplicar y mayusculas son identicas excepto por la operacion que se hace en cada iteracion
function doblar(item) {
    return item * 2
}

function mayuscula(item) {
    return item.toUpperCase()
}

mostrar(mapear(numeros, doblar))        // Le pasamos la funcion definida arriba
mostrar(mapear(nombres, mayuscula))

mostrar(mapear(numeros, item => item * 2))           // Definimos la funcion en el momento
mostrar(mapear(nombres, item => item.toUpperCase())) // 

mostrar(mapear(numeros, item => item * 3)) 
mostrar(mapear(nombres, item => item.toLowerCase()))

// Funciones de orden superior.
// Los array tienen un metodo map que hace lo mismo que la funcion mapear

mostrar(numeros.map(item => item * 2))
mostrar(nombres.map(item => item.toUpperCase()))

// Existen muchas otras.
//      forEach: recorre los elementos de un array
//      map: transforma los elementos de un array
//      reduce: reduce un array a un unico valor
//      filter: filtra los elementos de un array
//      find: busca un elemento en un array
//      sort: ordena los elementos de un array

// Ejemplo de uso de forEach
//      Recorrer un array
seccion('forEach')
nombres.forEach((item,i) => mostrar(`${i+1} ${item}`))

// Ejemplo de uso de filter
//      Filtrar los nombres que tienen mas de 4 caracteres
seccion('filter')
mostrar(nombres.filter(item => item.length > 4))

// Ejemplo de uso de reduce
//      Sumar todos los elementos de un array
seccion('reduce')
mostrar(numeros.reduce((acumulador, item) => acumulador + item), 0)         // 0 es valor inicial
mostrar(numeros.reduce((multiplicador, item) => multiplicador * item), 1)   // 1 es valor inicial

// Ejemplo de uso de find
//      Buscar un elemento en un array
seccion('find')
mostrar(nombres.find(item => item === 'maria'))

// Se pueden encadenar
seccion('Encadenar')
let nombreCortoEnMayusculas = nombres
    .filter(item => item.length < 5)    // Filtra los nombres que tienen menos de 5 caracteres
    .map(item => item.toUpperCase())    // Transforma los nombres a mayusculas
    .sort()                             // Ordena alfabeticamente 

mostrar(nombreCortoEnMayusculas)

// Ejemplo de uso de sort
//      Ordenar un array
seccion('sort')
mostrar(nombres.sort()) // Ordena alfabeticamente
mostrar(numeros.sort()) // Ordena alfabeticamente
mostrar(nombres.sort((a, b) => a.length - b.length)) // Ordena por longitud

// Clases y objetos

let punto = {
    x: 10,
    y: 20,
    moverEnX(dx) { this.x += dx },
    moverEnY: function (dy) { return this.y += dy } // No usar arrow function en metodos
}
// Al declarar un metodo dentro de un objeto puede acceder a las propiedad con la palabra reservada this

seccion('Objeto = instancia de una clase (prototipo)')
mostrar(punto)

punto.moverEnX(10)  // Llama al metodo moverEnX con la sintaxis de punto
mostrar(punto)

punto.moverEnY(20)
mostrar(punto)

// Clases : Son funciones constructoras de objetos

seccion('Clases = funciones constructoras de objetos')
class Punto {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    moverEnX(dx) { this.x += dx }
    moverEnY(dy) { this.y += dy }
}


let p1 = new Punto(10, 20)  // Crea instanciar un objeto
let p2 = new Punto(100, 200)

p1.moverEnX(100)
p2.moverEnX(200)

mostrar(p1)
mostrar(p2)

// JSON: JavaScript Object Notation (Notación de Objetos de JavaScript)
//// Se puede usar para intercambiar datos entre aplicaciones

seccion('JSON')
let personaJson = {
    "nombre": 'Juan',
    "apellido": 'Perez',
    "edad": 20,
    "direccion": {
        "calle": 'Av. Siempre Viva',
        "numero": 123
    }
}

let jsonConvertidoEnTexto = JSON.stringify(personaJson) // Convierte un objeto en JSON
let textoConvertidoEnJson = JSON.parse(jsonConvertidoEnTexto) // Convierte un JSON en objeto

mostrar(jsonConvertidoEnTexto)  // Observe que el tipo de dato es string

mostrar(personaJson)
mostrar(textoConvertidoEnJson)





// *** FUNCIONES AUXILIARES para mostrar los ejemplos en la consola *** 
//      Observen que aunque las funciones se definen al final pueden
//      ser accedidas desde cualquier parte del archivo.
//
function seccion(titulo) {  // Separa los distintos ejemplos en la consola
    console.warn(`\n-- ${titulo} --`)
}

function mostrar(datos) {   // Muestra el valor indicando el tipo de dato y el número de línea en que se ejecutó
    // Truco para mostrar el tipo de dato
    let tipo = typeof datos
    tipo = tipo.padStart(10); // Añade espacios al principio de la cadena hasta que tenga 10 caracteres

    // Truco para obtener el número de línea de la llamada a la función
    let error = new Error()
    let linea = error.stack.split('\n')[2].split(':')[3];

    // Truco para mostrar objetos 
    datos = `${datos instanceof Object ? JSON.stringify(datos) : datos}`
    datos = datos.padEnd(120) // Añade espacios al final de la cadena hasta que tenga 100 caracteres

    console.info(` ${datos} ${tipo} | Línea ${linea}`);
}

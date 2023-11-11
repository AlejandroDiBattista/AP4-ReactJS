import { useState } from 'react'

import Menu from './Menu.jsx'
import Articulo from './Articulo.jsx'
import Recorrer from './Recorrer.jsx'

import notas from './assets/notas.json' // Inporta el archivo JSON con las notas

import './Revista.css'

function Revista() {
  // Desde la revista se puede acceder a todas las notas y se coordina que nota se mostrará

  const [actual, setActual] = useState(1)   // Para poder seleccionar cual es la nota actual.

  const cantidad = notas.length             // Para saber cuantas notas hay en total
  const nota = notas[actual - 1]            // Las notas comienzan en 1, pero el arreglo comienza en 0

  function siguiente() {
    if(actual == cantidad) return       // Si es la última nota, no hacer nada
    setActual(actual + 1)
  }

  function anterior() {
    if(actual == 1) return              // Si es la primera nota, no hacer nada
    setActual(actual - 1)
  }

  return (
    <>
      <main>
        <Menu />
        <Recorrer actual={actual} cantidad={cantidad} siguiente={siguiente} anterior={anterior} />
        <Articulo {...nota} /> 
      </main>
    </>
  )
}

export default Revista

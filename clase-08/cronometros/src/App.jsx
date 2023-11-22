import { useState, useEffect } from 'react'
import './App.css'

const datosIniciales = [
  { nombre: 'Uno', segundos: 0, activo: true, id: 1 },
  { nombre: 'Dos', segundos: 0, activo: false, id: 2 },
  { nombre: 'Tres', segundos: 0, activo: true, id: 3 },
]
function App() {
  const [cronometros, setCronometros] = useState(datosIniciales)
  const [proximoID, setProximoID] = useState(4)

   useEffect(() => {
    const time = setInterval(incrementar, 1000);
    return () => clearInterval(time);
   }, [])
  
  function actualizar(cronometro) {
    if (cronometro.activo) {
      return { ...cronometro, segundos: cronometro.segundos + 1 }
    }
    return cronometro
  }

  function incrementar() {
    setCronometros( cronometros => cronometros.map( actualizar ) )
  }
 
  function agregar(nombre) {
    setProximoID(proximoID + 1)
    const nuevos = [...cronometros, { nombre, segundos: 0, activo: true, id: proximoID }]
    setCronometros( nuevos )
  }
  function cambiar(id, activo) {
    const nuevos = cronometros.map( cronometro => cronometro.id === id ? { ...cronometro, activo } : cronometro )
    setCronometros( nuevos )
  }

  function borrar(id) {
    const nuevos = cronometros.filter( cronometro => cronometro.id !== id )
    setCronometros( nuevos )
  }

  return (
    <>
      <h1>Cronómetros</h1>
      <Formulario alAgregar={agregar} />
      <ul>
        {cronometros.map(cronometro => <Cronometro key={cronometro.id} cronometro={cronometro} alCambiar={cambiar} alBorrar={borrar} /> ) }
      </ul>
    </>
  )
}

function Formulario({ alAgregar }) {
  const [nombre, setNombre] = useState('')
  
  const cambiar = e => setNombre(e.target.value)
  const agregar = e => {
    e.preventDefault()
    alAgregar(nombre)
    setNombre('')
  }
  return (
    <form>
      <input type="search" value={nombre}  onChange={cambiar} placeholder="Ingresar un nombre" />
      <button onClick={agregar}>Agregar</button>
    </form>
  )
}

function Cronometro({ cronometro, alCambiar, alBorrar }) {
  const { nombre, segundos, activo, id } = cronometro
  return (
    <li className="cronometro">
      <div className='nombre'>{nombre}</div>
      <div>{segundos}</div>
      <button onClick={() => alCambiar(id, !activo)}> {activo ? '||' : '>'}</button>
      <button onClick={() => alBorrar(id)}>X</button>
    </li>
  )
}

export default App

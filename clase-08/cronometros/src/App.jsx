import { useState, useEffect, useReducer } from 'react'
import './App.css'

const datosIniciales = [
  { nombre: 'Uno', segundos: 0, activo: true, id: 1 },
  { nombre: 'Dos', segundos: 0, activo: false, id: 2 },
  { nombre: 'Tres', segundos: 0, activo: true, id: 3 },
]

function reducer(cronometros, action) {
  const { id, nombre, activo } = action
  
  switch (action.type) {
    case 'incrementar':
      return cronometros.map(cronometro => cronometro.activo ? { ...cronometro, segundos: cronometro.segundos + 1 } : cronometro  )
    
    case 'agregar':
      return [...cronometros, { id, nombre, segundos: 0, activo: true }]
    
    case 'cambiar':
      return cronometros.map(cronometro => cronometro.id === id ? { ...cronometro, activo } : cronometro )
    
    case 'borrar':
      return cronometros.filter(cronometro => cronometro.id !== id)  
    
    default:
      throw new Error()
  }
}

function hora(segundos) {
  const minutos = Math.floor(segundos / 60)
  const seg = segundos % 60
  return `${minutos}:${seg < 10 ? '0' : ''}${seg}`
}

function App() {
  const [cronometros, dispatch] = useReducer(reducer, datosIniciales)
  const [proximoID, setProximoID] = useState(4)

  useEffect(() => {
    const timer = setInterval(() => { dispatch({ type: 'incrementar' }) }, 1000)
    return () => clearInterval(timer)
  }, [])
  

  function agregar(nombre) {
    setProximoID(proximoID + 1)
    dispatch({ type: 'agregar', nombre, id: proximoID })
  }
  
  function cambiar(id, activo) {
    dispatch({ type: 'cambiar', id, activo })
  }

  function borrar(id) {
    dispatch({ type: 'borrar', id })
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

function iniciarNombre() {
  console.log('iniciarNombre')
  return 'aa';
}
function Formulario({ alAgregar }) {
  const [nombre, setNombre] = useState( () => iniciarNombre() )
  
  const cambiar = e => setNombre(e.target.value)
  const agregar = e => {
    e.preventDefault()
    alAgregar(nombre)
    setNombre('')
  }
  return (
    <form>
      <input type="search" value={nombre}  onChange={cambiar} placeholder="" />
      <button onClick={agregar}>Agregar</button>
    </form>
  )
}

function Cronometro({ cronometro, alCambiar, alBorrar }) {
  const { nombre, segundos, activo, id } = cronometro
  const color = { color: activo ? 'black' : 'gray' }
  return (
    <li className="cronometro" style={color}>
      <div className='nombre'>{nombre}</div>
      <div>{ hora(segundos) }</div>
      <button onClick={ () => alCambiar(id, !activo) }> { activo ? '||' : '>' }</button>
      <button onClick={ () => alBorrar(id) }>X</button>
    </li>
  )
}

export default App

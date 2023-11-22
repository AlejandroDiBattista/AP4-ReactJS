import { useState } from 'react'
import ContadorForm from './ContadorForm'
import ContadorList from './ContadorList'

import './App.css'

const datoIniciales = [
  { id: 1, nombre: 'Autos', cantidad: 10 },
  { id: 2, nombre: 'Camionetas', cantidad: 0 },
  { id: 3, nombre: 'Bici',  cantidad: 3 }
]

function App() {
  const [proximoID, setProximoID] = useState(4)
  const [contadores, setContadores] = useState(datoIniciales)

  function agregar(nombre) {
    const nuevo = { id: proximoID, nombre, cantidad: 0 }
    setContadores([...contadores, nuevo])

    setProximoID(proximoID + 1)
  }
  
  function sumar(id) {
    const actual = contadores.find(contador => contador.id === id) 
    const nuevo = { ...actual, cantidad : actual.cantidad + 1 }
    const nuevos = contadores.map(contador => contador.id === id ? nuevo : contador)
    setContadores(nuevos)
  }

  function borrar(id) {
    const borrados = contadores.filter(contador => contador.id !== id)
    setContadores(borrados)
  }

  return (
    <>
      <main>
        <h1>Control de Transito</h1>
        <ContadorForm alAgregar={agregar} />
        <ContadorList contadores={contadores} alSumar={sumar} alBorrar={borrar}/>
      </main>
    </>
  )
}


export default App

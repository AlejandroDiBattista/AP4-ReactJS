import { useState, useEffect } from 'react'
import { ContadorFormulario } from './ContadorFormulario'
import { ContadorLista } from './ContadorLista'

import './App.css'

const datosIniciales = [
  { id: 1, nombre: 'Automovil', cantidad: 0 },
  { id: 2, nombre: 'Camioneta', cantidad: 0 },
  { id: 3, nombre: 'Moto', cantidad: 0 },
  { id: 4, nombre: 'Bicicleta', cantidad: 0 },
]

function App() {
  const [proximoId, setProximoId] = useState(5)
  const [contadores, setContadores] = useState(datosIniciales)

  function agregar(nombre) {
    const nuevo = { id: proximoId, nombre: nombre, cantidad: 0 }
    const copia = [...contadores, nuevo]
    setContadores(copia)

    setProximoId(proximoId + 1)
  }
  
  function incrementar(id) {
    const actual = contadores.find(contador => contador.id === id)
    const nuevo = { ...actual, cantidad: actual.cantidad + 1 }
    const copia = contadores.map(contador => contador.id === id ? nuevo : contador)

    setContadores(copia)
  }

  function borrar(id) {
    const copia = contadores.filter(contador => contador.id !== id)
    setContadores(copia)
  }
  
  function limpiar() {
    setContadores([])
  }

  useEffect(() => {
    const datos = localStorage.getItem('contadores')
    if (datos) {
      setContadores(JSON.parse(datos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('contadores', JSON.stringify(contadores))
    console.log('Contadores actualizados', contadores)
  })
  
  useEffect(() => {
    console.log('Proximo ID actualizado', proximoId)
  }, [proximoId])

    
  return (
    <>
      <main>
        <h1>Control de Tránsito</h1>
        <ContadorFormulario alAgregar={agregar} />
        <ContadorLista contadores={contadores} alIncrementar={incrementar} alBorrar={borrar} />
      </main>
    </>
  )
}

export default App

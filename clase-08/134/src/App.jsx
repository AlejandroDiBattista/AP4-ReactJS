import { useState, useEffect } from 'react'
import { ContadorFormulario } from './ContadorFormulario'
import { ContadorLista } from './ContadorLista'
import './App.css'

const datosInicial = [
  { id: 1, nombre: 'Auto', cantidad: 0 },
  { id: 3, nombre: 'Camion', cantidad: 0 },
  { id: 4, nombre: 'Bicicleta', cantidad: 0 },
]

function App() {
  const [contadores, setContadores] = useState(datosInicial)

  function agregar(nombre) {
    const original = { id: Number(Date.now()), nombre, cantidad: 0, }
    const copia = [...contadores, original]
    
    setContadores(copia)
  }

  function incrementar(id, cantidad) {
    const original = contadores.find((contador) => contador.id === id)
    const nuevo = { ...original, cantidad }
    const copia = contadores.map(contador => contador.id === nuevo.id ? nuevo : contador)
    
    setContadores(copia)
  }
  
  function borrar(id) {
    const copia = contadores.filter((contador) => contador.id !== id)
    setContadores(copia)
  }
  
  useEffect(() => {
    console.log('Se cambio un contador :' + contadores.length)
  }, [contadores.length])	

  return (
    <>
      <main>
        <h1>Control de transito</h1>
        <ContadorFormulario alAgregar={agregar} />
        <ContadorLista contadores={contadores} alIncrementar={incrementar} alBorrar={borrar} />
      </main>
    </>
  )
}

export default App

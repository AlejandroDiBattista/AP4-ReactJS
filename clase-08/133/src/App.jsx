import { useState, useEffect } from 'react'

import { ContadorFormulario } from './ContadorFormulario';
import { ContadorLista } from './ContadorLista';

import './App.css'

const datosIniciales = [
  { id: 1, nombre: 'Autos', cantidad: 10 },
  { id: 2, nombre: 'Motos', cantidad: 0 },
  { id: 3, nombre: 'Bicicletas', cantidad: 0 },
]

function App() {
  const [id, setId] = useState(4) // Proximo id a asignar
  const [contadores, setContadores] = useState(datosIniciales);
  
  function agregar(nombre) {
    const nuevo = { id, nombre, cantidad: 0 }
    const copia = [...contadores, nuevo ]
    setContadores(copia)
    
    setId(id + 1)
  }

  function incrementar(id) {
    const actual = contadores.find(contador => contador.id === id)
    const nuevo = { ...actual, cantidad: actual.cantidad + 1 }
    const copia = contadores.map(contador => contador.id === nuevo.id ? nuevo : contador)
    
    setContadores(copia)
  }

  function borrar(id) {
    const copia = contadores.filter(contador => contador.id !== id)

    setContadores(copia)
  }

  useEffect(() => {
    console.log("Se modificaron los contadores")
  }, [contadores] )

  return (
    <>
      <main>
        <h1>Control de transito</h1>
        <button onClick={() => setContadores([])}>Borrar Todo</button>
        <ContadorFormulario alAgregar={ agregar } />
        <ContadorLista contadores={contadores} alIncrementar={incrementar} alBorrar={borrar} />
      </main>
    </>
  )
}

export default App

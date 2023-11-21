import { useState } from 'react'

import './App.css'

function App() {
  return (
    <>
      <main>
        <h1>Boca de Urna</h1>
        <Contador candidato="Pedro" />
        <Contador candidato="Juan" />

      </main>
    </>
  )
}

function Contador({ candidato }) {
  const [votos, setVotos] = useState(0)

  function incrementar() {
    setVotos(votos + 1)
    alCambiar(candidato + " tiene " + (votos + 1))
  }
  const decrementar = () => setVotos(votos - 1);

  return (
    <div className="contador">
      <h2>{candidato}</h2>
      <div className="numero">{votos}</div>
      <div>
        <button onClick={incrementar}><IoIosAddCircle /></button>
        <button onClick={decrementar}><IoIosRemoveCircle /></button>
      </div>
    </div>
  )
}

export default App

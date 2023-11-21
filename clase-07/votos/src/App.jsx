import { useState } from 'react'

import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

import './App.css'

function App() {

  const candidatos = [
    { nombre: 'Candidato 1', id: 1 },
    { nombre: 'Candidato 2', id: 2 },
    { nombre: 'Candidato 3', id: 3 },
    { nombre: 'Candidato 4', id: 4 },
    { nombre: 'Candidato 5', id: 5 }
  ]

  return (
    <>
      <main>
        <h1>Boca de Urna</h1>
        {
          candidatos.map(({nombre, id}) => <Contador candidato={nombre} alCambiar={(a) => alert(a)} key={id} />)
        }
      </main>
    </>
  )
}

function Contador({ candidato, alCambiar }) {
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

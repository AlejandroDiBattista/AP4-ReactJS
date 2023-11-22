import { useState } from 'react'

import './App.css'

function App() {
  return (
    <>
      <main>
        <h1>Boca de Urna</h1>
        <Contador candidato='Pedro' />
        <Contador candidato='Juan' />
      </main>
    </>
  )
}

function Contador({ candidato }) {
  const [votos, setVotos] = useState(0)

  const incrementar = () => setVotos(votos + 1)
  const decrementar = () => setVotos(votos > 0 ? votos - 1 : 0)
  
  return (
    <div className='contador'>
      <h2>{candidato}</h2>
      <div className='valor'>{votos}</div>
      <div className='botones'>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
      </div>
    </div>
  )
}

export default App
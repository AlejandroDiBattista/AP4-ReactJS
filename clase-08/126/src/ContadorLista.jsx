import './ContadorLista.css'

export function ContadorLista({ contadores, alIncrementar, alBorrar }) {
  return (
    <ul>
      {contadores.map(contador => <ContadorItem key={contador.id} contador={contador} alIncrementar={alIncrementar} alBorrar={alBorrar} />)}
    </ul>
  );
}

function ContadorItem({ contador, alIncrementar, alBorrar }) {
  const { id, cantidad, nombre } = contador

  function incrementar() {
    alIncrementar(id)
  }

  function borrar() {
    alBorrar(id)
  }

  const estilo = { color: cantidad >= 10 ? "red" : "black" }

  return (
    <li className='lista'>
      <span className='cantidad' style={estilo}>{cantidad}</span> 
      <span>{nombre}</span>
      <div className='botones'>
        <button onClick={incrementar}>+</button>
        <button onClick={borrar}>x</button>
      </div>
    </li>
  )
}

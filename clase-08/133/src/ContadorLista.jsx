import './ContadorLista.css';

export function ContadorLista({ contadores, alIncrementar, alBorrar }) {
  return (
    <ul className='lista'>
      {contadores.map(contador => <ContadorItem
        key={contador.id}
        contador={contador}
        alIncrementar={alIncrementar}
        alBorrar={alBorrar} />)}
    </ul>
  );
}

function ContadorItem({ contador, alIncrementar, alBorrar }) {

  function incrementar() {
    alIncrementar(contador.id);
  }

  function borrar() {
    alBorrar(contador.id);
  }

  return (
    <li>
      <b>{contador.cantidad}</b> {contador.nombre}
      <div>
        <button onClick={incrementar}>+</button>
        <button onClick={borrar}>x</button>
      </div>
    </li>
  );
}

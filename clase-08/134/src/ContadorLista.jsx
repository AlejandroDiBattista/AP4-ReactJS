import './ContadorLista.css'

function ContadorLista({ contadores, alIncrementar, alBorrar }) {
  return (
    <>
      <ul>
        {contadores.map((contador) => <ContadorItem
          key={contador.id}
          contador={contador} 
          alIncrementar={alIncrementar}
          alBorrar={alBorrar} />)
        }
      </ul>
    </>
  );
}

function ContadorItem({contador, alIncrementar, alBorrar}) {
  const { id, nombre, cantidad } = contador

  function incrementar(){
    alIncrementar(id, cantidad + 1)
  }

  function borrar() {
    alBorrar(id)
    console.log('Borrar', id)
  }

  return (
    <li><b>{cantidad}</b> {nombre}
      <div className='botones'>
        <button onClick={incrementar}>+</button>
        <button onClick={borrar}>x</button>
      </div>
    </li>
  )
}

export { ContadorLista }
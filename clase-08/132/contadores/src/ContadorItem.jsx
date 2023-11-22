function ContadorItem({ contador, alSumar, alBorrar }) {
  const { id, nombre, cantidad } = contador;
  const color = { color: cantidad < 10 ? 'blue' : 'red' };
  return (
    <li>
      <span style={color}>{cantidad}</span>
      <span>{nombre}</span>
      <div className='botones'>
        <button onClick={() => alSumar(id)}>+</button>
        <button onClick={() => alBorrar(id)}>x</button>
      </div>
    </li>
  );
}

export  default  ContadorItem
import { useState } from 'react';
import './Buscar.css';

export function Buscar({ alTerminar }) {
  const [texto, setTexto] = useState('Alejandro');

  function alCambiar(e) {
    setTexto(e.target.value);
  }
  return (
    <>
      <div className='busqueda'>
        <div className='entrada'>

          <input type='text' value={texto} onChange={alCambiar} placeholder='Buscar' />
          <button onClick={() => alTerminar(texto)}>Buscar</button>
        </div>
        <div className="info">Estas buscando: {texto.toUpperCase()}</div>
      </div>
    </>
  );
}

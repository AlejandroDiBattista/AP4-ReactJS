import { useState } from 'react';
import './ContadorFormulario.css';

export function ContadorFormulario({ alAgregar }) {
  const [nombre, setNombre] = useState('');

  function enviar(e) {
    e.preventDefault();

    if (nombre === '') return;
    alAgregar(nombre);
    setNombre('');
  }

  return (
    <form onSubmit={enviar}>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <button type="submit">Agregar</button>
    </form>
  );
}

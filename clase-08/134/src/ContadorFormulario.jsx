import { useState } from 'react';
import './ContadorFormulario.css';

export function ContadorFormulario({ alAgregar }) {
  const [nombre, setNombre] = useState('')

  function cambiarNombre(event) {
    setNombre(event.target.value)
  }
  
  function agregar(event) {
    alAgregar(nombre)
    setNombre('')
    event.preventDefault()
  }

  return (
    <form>
      <input type="search" value={nombre} onChange={cambiarNombre} />
      <button onClick={agregar}>Agregar</button>
    </form>
  );
}

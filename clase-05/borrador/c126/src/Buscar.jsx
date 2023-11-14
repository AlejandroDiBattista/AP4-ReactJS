import { useState } from 'react';

function Buscar({ onBuscar }) {
  const [filtro, setFiltro] = useState('mostrar todo');

  function informar() {
    onBuscar(filtro);
  }

  function actualizar(e) {
    setFiltro(e.target.value);
  }

  return (
    <>
      <input type="text" value={filtro} onChange={actualizar} />
      <button onClick={informar}>Buscar</button>
    </>
  );
}

function Saludar() {
  return <h1>Hola Mundo</h1>;
}

export { Buscar, Saludar };
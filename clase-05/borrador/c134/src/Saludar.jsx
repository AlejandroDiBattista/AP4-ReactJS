import { useState } from 'react';

export function Saludar() {
  const [mensaje, setMensaje] = useState("Mensaje inicial");

  function alSaludar() {
    setMensaje("Hola Mundo");
  }

  return (
    <>
      <button onClick={alSaludar}>Saludar</button>
      <p className="info">{mensaje}</p>
    </>
  );
}

export function Boton() {
  return <button>Botón</button>;
}
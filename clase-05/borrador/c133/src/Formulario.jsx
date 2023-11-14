import { useState } from 'react';

function Formulario({ contacto, alAceptar, alCancelar }) {
  const [nombre, setNombre] = useState(contacto.nombre);
  const [apellido, setApellido] = useState(contacto.apellido);

  function cambiarNombre(e) {
    setNombre(e.target.value);
  }

  function cambiarApellido(e) {
    setApellido(e.target.value);
  }

  return (
    <>
      <form className="formulario">
        <div>
          <label>Nombre</label>
          <input type="text" value={nombre} onChange={cambiarNombre} />
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" value={apellido} onChange={cambiarApellido} />

          <div className="botones">
            <button onClick={() => alAceptar({ nombre, apellido })}>Aceptar</button>
            <button onClick={alCancelar}>Cancelar</button>
          </div>
        </div>
        <p>{nombre} <b>{apellido}</b> </p>
      </form>
    </>
  );
}

export default Formulario;
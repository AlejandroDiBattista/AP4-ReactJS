import { useState } from "react";

export function EditarContacto({ contacto, alGuardar }) {
  const [nombre, setNombre] = useState(contacto.nombre);
  const [apellido, setApellido] = useState(contacto.apellido);

  function guardar(e) {
    e.preventDefault();
    
    if (nombre === '' || apellido === '') {
      alert('Faltan datos');
      return;
    }
   
    alGuardar({ id: contacto.id,  nombre, apellido });
  }

  function cancelar(e) {
    e.preventDefault();

    alGuardar(null);
  }

  return (
    <>
      <form>
        <label>Nombre:</label> <br />
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <br />

        <label>Apellido:</label><br />
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        <br />
        <p>{nombre} <b>{apellido}</b></p>
        <br />

        <button onClick={guardar}>Guardar</button>
        <button onClick={cancelar}>Cancelar</button>
      </form>
    </>
  );
}

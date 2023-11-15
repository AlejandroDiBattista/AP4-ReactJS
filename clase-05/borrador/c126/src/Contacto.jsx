import { useState } from 'react';
import './Contacto.css';

function EditarContacto( { contacto, alGuardar } ) {
  const [nombre, setNombre] = useState(contacto.nombre);
  const [apellido, setApellido] = useState(contacto.apellido);
  const [telefono, setTelefono] = useState(contacto.telefono);

  function guardar(e) {
    e.preventDefault();

    if (nombre === '' || apellido === '' || telefono === '') {
      alert('Faltan datos');
      return;
    }

    alGuardar({ id: contacto.id, nombre, apellido, telefono });
  }

  function cancelar(e) {
    e.preventDefault();
    alGuardar(null);
  }

  return (
    <>
      <form>
        <label>Nombre:</label> 
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        
        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />

        <label>Teléfono:</label>
        <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

        <div className="acciones">
          <button onClick={guardar}>Guardar</button>
          <button onClick={cancelar}>Cancelar</button>
        </div>
      </form>
    </>
  );
}

function MostrarContacto( { contacto, alEditar, alBorrar } ) {
  const { id, nombre, apellido, telefono } = contacto;

  function ejecutarEditar(e) {
    e.preventDefault();
    alEditar(id);
  }
  
  function ejecutarBorrar(e) {
    e.preventDefault();
    alBorrar(id);
  }

  return (
    <li key={id}>
      <div>
        <span>{nombre} <b>{apellido}</b></span>
        <p>Teléfono: {telefono}</p>
      </div>
      <div className="acciones">
        <button onClick={ejecutarEditar}>Editar</button>
        <button onClick={ejecutarBorrar}>Borrar</button>
      </div>
    </li>
  )
}

function ListarContactos({ contactos, alEditar, alBorrar }) {
  function info(cantidad)  {
    if (cantidad === 0) {
      return <p>No hay contactos</p>
    } else if (cantidad === 1) {
      return <p>Hay un contacto</p>
    } else {
      return <p>Hay {cantidad} contactos</p>
    }
  }

  return (
    <>
    <ul className="lista">
      {contactos.map(c => <MostrarContacto key={c.id} contacto={c} alEditar={alEditar} alBorrar={alBorrar} />)}
      </ul>
      {info(contactos.length)}
    </>
  );
}
export { EditarContacto, MostrarContacto, ListarContactos };
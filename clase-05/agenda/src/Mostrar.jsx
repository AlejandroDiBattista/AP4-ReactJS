import './Mostrar.css';

export function Mostrar({ contacto, alEditar, alBorrar }) {
  return (
    <>
      <div className='mostrar'>
        <div>
          <div>
            {contacto.nombre} <b>{contacto.apellido}</b>
          </div>
          <p className='infoId'>id: {contacto.id}</p>
        </div>
        <div className='acciones'>
          <button onClick={alEditar}>Editar</button>
          <button onClick={alBorrar}>Borrar</button>
        </div>
      </div>
    </>
  );
}

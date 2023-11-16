import './Mostrar.css';

export function Mostrar({ contacto , alEditar, alBorrar }) {
  const {id, nombre, apellido} = contacto;
  const editar = () => alEditar(id);
  const borrar = () => alBorrar(id);

  return (
    <>
      <div className='mostrar'>
        <div>
          <div>
            {nombre} <b>{apellido}</b>
          </div>
          <p className='infoId'>id: {id}</p>
        </div>
        <div className='acciones'>
          <button onClick={editar}>Editar</button>
          <button onClick={borrar}>Borrar</button>
        </div>
      </div>
    </>
  );
}

import { useEffect } from 'react';
import './Mostrar.css';

export function Mostrar({ contacto, alEditar, alBorrar }) {
  const {id, nombre, apellido, telefono} = contacto;
  
  const editar = () => alEditar(id);
  const borrar = () => alBorrar(id);

  useEffect(() => {
    console.log('Comence Mostrar', id, nombre, apellido, telefono);
  
    return () => {
      console.log('Termine Mostrar', id, nombre, apellido, telefono);
    }
  }, []);

  return (
    <>
      <div className='mostrar'>
        <div>
          <div>
            {nombre} <b>{apellido}</b>
            <p>{telefono}</p>
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

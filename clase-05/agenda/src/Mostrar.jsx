export function Mostrar({ contacto, alEditar }) {
  return (
    <>
      <div className='mostrar'>
        <div>{contacto.nombre} <b>{contacto.apellido}</b>({contacto.id})</div>
        <button onClick={alEditar}>Editar</button>
      </div>
    </>
  );
}

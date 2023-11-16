import './Formulario.css'
import { useState } from 'react'

// El formulario recibe el contacto a mostrar y
// la funcion alActualizar que retornar el
// contacto actualizado o null en caso de cancelar

function Formulario({ contacto, alActualizar = () => { }}) {
    const [nombre, setNombre] = useState(contacto.nombre)
    const [apellido, setApellido] = useState(contacto.apellido)
    
    const ponerNombre = (e) => setNombre(e.target.value);
    const ponerApellido = (e) => setApellido(e.target.value);
    
    const confirmar = () => alActualizar( {...contacto, nombre, apellido } ); //Crea un objeto con los datos del contacto y lo pasa a la funcion alActualizar
    const cancelar = () => alActualizar(null);
    
    return (
        <div>
            <form action="">
                <div>
                    <label>Nombre</label><br />
                    <input autoFocus type="text" value={nombre} onChange={ponerNombre} />
                </div>

                <div>
                    <label>Apellido </label><br />
                    <input type="text" value={apellido} onChange={ponerApellido}/>
                </div>

                <div className='acciones'>
                    <button onClick={confirmar}>Aceptar</button>
                    <button onClick={cancelar}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export { Formulario };
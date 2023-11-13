import './Formulario.css'
import { useState } from 'react'

function Formulario({ contacto, alActualizar }) {
    
    const [nombre, setNombre] = useState(contacto.nombre)
    const [apellido, setApellido] = useState(contacto.apellido)

    const ponerNombre = (e) => setNombre(e.target.value);
    const ponerApellido = (e) => setApellido(e.target.value);
    
    const confirmar = () => alActualizar({...contacto, ...{nombre, apellido}});
    const cancelar = () => alActualizar(null);
    
    return (
        <div>
            <form action="">
                <div>
                    <label>Nombre</label><br />
                    <input type="text" value={nombre} onChange={ponerNombre} />
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
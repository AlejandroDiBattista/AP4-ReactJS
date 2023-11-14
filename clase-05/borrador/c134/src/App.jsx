import './App.css'
import {useState} from 'react'

function App() {
  const [editando, setEditando] = useState(false)
  const [contacto, setContacto] = useState({nombre: "", apellido: ""})
  const [contactos, setContactos] = useState([])

    function actualizar(nuevo) {
      setContacto({nombre: "", apellido: ""})
      setContactos([...contactos, nuevo])
      setEditando(false)
    }
    
    function cancelar() {
      setContacto({nombre: "", apellido: ""})
      setEditando(false)
    }
  
    return (<>
      <h2>Demo Eventos</h2>
        { !editando && <button onClick={ () => setEditando(true) }>Agregar</button>}
        { editando && <Formulario contacto={contacto} alAceptar={actualizar} alCancelar={cancelar} />}
      <hr />
            
      <Listar titulo="Listado de amigos">
        {contactos.map((c, i) => <Mostrar key={i} nombre={c.nombre} apellido={c.apellido} />)}
      </Listar>
      </>)
}

function Listar({ titulo, children }) {
  return (
    <>
      <h3>{titulo}</h3>
      <ul>
        {children}
      </ul>
    </>
  )
}

function Mostrar({ nombre, apellido }) {
  return (
    <>
      <li>{nombre} <b>{apellido}</b></li>
    </>
  )
}

function Formulario({ contacto, alAceptar, alCancelar }) {
    const [nombre, setNombre] = useState(contacto.nombre)
    const [apellido, setApellido] = useState(contacto.apellido)

    function cambiarNombre(e) {
        setNombre(e.target.value)
    }
  
    function cambiarApellido(e) {
      setApellido(e.target.value)
    }

    function ejecutarAceptar(e) {
      e.preventDefault()
      if (nombre.length < 2 || apellido.length < 2) {
        alert("Debe ingresar nombre y apellido")
        return
      }
      
      const nuevo = {
            nombre: nombre,
            apellido: apellido
      }
      alAceptar(nuevo)
    }
  
    function ejecutarCancelar(e) {
      e.preventDefault()
      alCancelar()
    }
    return (<>
        <form>
            <label>Nombre</label><br/>
            <input type="text"
                value={nombre}
                onChange={cambiarNombre}/>
            <br/>

            <label>Apellido</label><br/>
            <input type="text"
                value={apellido}
                onChange={cambiarApellido}/>
            <br/>
            <br/>
            <div> {nombre}
                <b> {apellido}</b>
            </div>
            <button onClick={ejecutarAceptar}>Aceptar</button>
            <button onClick={ejecutarCancelar}>Cancelar</button>
        </form>
    </>)
}

export default App

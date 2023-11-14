import './App.css'
import { useState } from 'react'
import { EditarContacto } from './EditarContacto'

function App() {
  const [editando, setEditando] = useState(false)
  const [contacto, setContacto] = useState({ id: 0, nombre: '', apellido: '' });
  const [contactos, setContactos] = useState([])
  const [contarId, setContarId] = useState(0)

  function informar(nuevo) {
    console.log("Estamos en 'informar'")
    console.log(nuevo)
    
    setEditando(false)

    if(nuevo === null) return
    
    if (nuevo.id === 0) {
      setContarId(contarId + 1)
      nuevo.id = contarId + 1

      contactos.push(nuevo)
      setContactos(contactos)
    } else {
      let index = contactos.findIndex(c => c.id === nuevo.id)
      contactos[index] = nuevo
      setContactos(contactos)
    }


    setContacto({id: 0, nombre: '', apellido: '' })
  }
    
  function agregar() {
    console.log("Estamos en 'agregar'")
    setEditando(true)
  }

  function editar(id) {
    console.log("Estamos en 'editar'")
    setEditando(true)
    setContacto(contactos.find(c => c.id === id))
  }

  function borrar(id) {
    console.log("Estamos en 'borrar'")
    setContactos(contactos.filter(c => c.id !== id))
  }

  return (
    <>
      <h1>Agenda</h1>
      {!editando && <button onClick={agregar}>Agregar</button>}
      { editando && <EditarContacto contacto={contacto} alGuardar={informar} />}
      <ul>
        {contactos.map((contacto, i) => (
          <li key={contacto.id}> {contacto.nombre} {contacto.apellido} id:{contacto.id}
            <button onClick={() => editar(contacto.id) }>Editar</button>
            <button onClick={() => borrar(contacto.id)}>Borrar</button>
          </li>
        ))}
      </ul>
      
    </>
  )
}

export default App

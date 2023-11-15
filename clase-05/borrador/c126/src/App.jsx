import './App.css'
import { useState } from 'react'

import { EditarContacto, ListarContactos } from './Contacto';

function App() {
  // Estados de la agenda
  const [editando, setEditando] = useState(false)
  const [contacto, setContacto] = useState({ id: 0, nombre: '', apellido: '', telefono: '' });

  const [contactos, setContactos] = useState([])  // Lista de contactos
  const [proximoId, setProximoId] = useState(1)   // Próximo id a asignar

  // AlActualizar se ejecuta cuando se guarda un contacto
  //  - cuando recibe null cancela la edición
  //  - cuando recibe un nuevo contacto sin id le asigna un id y lo agrega a la lista
  //  - cuando recibe un contacto con id lo busca en la lista y lo reemplaza

  function alActualizar(nuevo) {
    console.log("Estamos en 'alActualizar'")
    console.log(nuevo)
    
    setEditando(false)
    
    if (nuevo === null) return  // Cancelar
    
    if (nuevo.id === 0) {       // Agregar
      const id = proximoId
      setProximoId(proximoId + 1)
      
      const nuevos = [...contactos, { ...nuevo, id }] // Agregar un contacto sin modificar la lista original
      
      console.log(nuevos)
      setContactos(nuevos)

    } else {                    // Modificar
      const nuevos = contactos.map(c => c.id === nuevo.id ? nuevo : c) // Reemplazar un contacto sin modificar la lista original
      console.log(nuevos)
      setContactos(nuevos)
    }
  }
  
  // Acciones de la agenda
  function alAgregar() {
    console.log("Estamos en 'agregar'")

    setContacto({ id: 0, nombre: '', apellido: '', telefono: '' })    // Limpiar el formulario
    setEditando(true)
  }

  function alEditar(id) {
    console.log("Estamos en 'editar'", id)
    
    const actual = contactos.find(c => c.id === id)                   // Buscar el contacto a editar
    setContacto(actual)
    setEditando(true)
  }

  function alBorrar(id) {
    console.log("Estamos en 'borrar' id:", id)

    const nuevos = contactos.filter(c => c.id !== id)                 // Eliminar un contacto sin modificar la lista original
    setContactos(nuevos)
  }

  return (
    <>
      <main>
        <h2>Agenda</h2>
        { editando
          ? editando && <EditarContacto contacto={contacto} alGuardar={alActualizar} />
          : <>
              <button onClick={alAgregar}>Agregar</button>
              <ListarContactos contactos={contactos} alEditar={alEditar} alBorrar={alBorrar}/>
            </>
        }
      </main>
    </>
  )

  
}

export default App
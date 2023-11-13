import { useState } from 'react'

import './App.css'
import { Formulario } from './Formulario'
import { Mostrar } from './Mostrar'

const datosInciales = [
  { id: 1, nombre: 'Juan', apellido: 'Perez' },
  { id: 2, nombre: 'Maria', apellido: 'Gomez' },
  { id: 3, nombre: 'Carlos', apellido: 'Sanchez' },
  { id: 4, nombre: 'Luis', apellido: 'Gonzalez' },
]

function App() {
  const [editar, setEditar] = useState(false)
  const [actual, setActual] = useState(0)
  const [contactos, setContactos] = useState(datosInciales)
    
  function alActualizar(nuevo) {
    if (nuevo != null) {
      if (nuevo.id === 0) {
        const nuevos = [...contactos, { ...nuevo, ...{ id: contactos.length + 1 } }]
        setContactos(nuevos)
      } else {
        const nuevos = contactos.map((contacto) => contacto.id === nuevo.id ? nuevo : contacto)
        setContactos(nuevos)
      }
    };
    setEditar(false)
  }

  function alEditar(id) {
    setEditar(true)
    setActual(id)
  }

  const contacto = contactos.find((contacto) => contacto.id === actual) ?? { id: 0, nombre: '', apellido: ''}

  const listaContactos = contactos.map((contacto) => <Mostrar key={contacto.id} contacto={contacto} alEditar={()=> alEditar(contacto.id)} />)
  return (
    <>
      <h1>App Vacia</h1>
      {!editar && <button onClick={() => alEditar(0)}>Agregar</button>}
      {editar
        ? <Formulario contacto={contacto} alActualizar={alActualizar} />
        : listaContactos }
    </>
  )
      
}

export default App

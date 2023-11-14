import './App.css'

import  Formulario  from './Formulario'
import { useState } from 'react'

export default function App() {
  const [editando, setEditando] = useState(false)
  const [contacto, setContacto] = useState( {nombre: "", apellido: ""})
  const [contactos, setContactos] = useState([])

  function alAceptar(nuevoContacto) {
    contactos.push(nuevoContacto)
    setContactos(contactos)
    setContacto({nombre: "", apellido: ""})
    setEditando(false)
  }  
  function alCancelar() {
    // alert("Cancelo")
    setEditando(false)
  }

  
  let cuerpo
  
  if (editando) {
    cuerpo = <Formulario contacto={contacto} alAceptar={alAceptar} alCancelar={alCancelar}/>
  } else {
    cuerpo = <button onClick={() => setEditando(true)}>Agregar</button>
  }

  let listaContactos = contactos.map((contacto, indice) => <Contacto key={indice} nombre={contacto.nombre} apellido={contacto.apellido} />)

  return (
    <>
      <main>
        {cuerpo}
        <Listar titulo="Contactos">
          <Contacto nombre="Alejandro" apellido="Gonzalez" />
          {listaContactos}
        </Listar>
      </main>
    </>
  )
}

function Contacto({ nombre, apellido }) {
  return (
    <li>
      <p>{nombre} <b>{apellido}</b> </p>
    </li>
  )
}
function Listar({titulo, children}) {
  return (
    <>
      <h3>{titulo}</h3>
      <ul>
      {children}
    </ul>
    </>
  )
} 
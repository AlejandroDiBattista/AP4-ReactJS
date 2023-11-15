import { useState, useEffect } from 'react'

import { Formulario } from './Formulario'
import { Mostrar } from './Mostrar'

import './App.css'

const datosIniciales = [
  { id: 1, nombre: 'Juan',   apellido: 'Perez'    },
  { id: 2, nombre: 'Maria',  apellido: 'Gomez'    },
  { id: 3, nombre: 'Carlos', apellido: 'Sanchez'  },
  { id: 4, nombre: 'Luis',   apellido: 'Gonzalez' },
]

const generarId = () => Number(new Date());

function App() {
  const [editar, setEditar] = useState(false)
  const [actual, setActual] = useState(0)
  const [contactos, setContactos] = useStatePreservado('contactos', [])
  
  useEffect(() => {
    console.log("Estado:")
    console.log(" editar:", editar)
    console.log(" actual:", actual)
  }, [editar, actual])

  function alActualizar(nuevo) {
    if (nuevo != null) {
      if (nuevo.id === 0) {
        const nuevos = [...contactos, { ...nuevo, id: generarId() }]
        setContactos(nuevos)
      } else {
        const nuevos = contactos.map( contacto => contacto.id === nuevo.id ? nuevo : contacto)
        setContactos(nuevos)
      }
    }
    setEditar(false)
  }

  function alAgregar() {
    setEditar(true)
    setActual(0)
  }

  function alEditar(id) {
    setEditar(true)
    setActual(id)
  }

  function alBorrar(id) {
    const nuevos = contactos.filter((contacto) => contacto.id !== id)
    setContactos(nuevos)
  }
  
  const listaContactos = contactos.map( contacto =>
    <Mostrar contacto={contacto} alEditar={alEditar} alBorrar={alBorrar} key={contacto.id} />
  )
    
  const contacto = contactos.find(contacto => contacto.id === actual) ?? { id: 0, nombre: '', apellido: '' }

  /// EJEMPLO DE USO DE LOCAL STORAGE
  localStorage.setItem('contactos', JSON.stringify( contactos))


  return (
    <>
      <h1>Mi Agenda Web</h1>
      { !editar && <button onClick={alAgregar}>Agregar</button> } 
      { editar
        ? <Formulario contacto={contacto} alActualizar={alActualizar} />
        : listaContactos
      }
      
    </>
  )
}

function useStatePreservado(key, inicial = []) {
  const [value, setValue] = useState(() => {
    const initial = localStorage.getItem(key)
    return initial ? JSON.parse(initial) : inicial
  })
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  
  return [value, setValue]
}

export default App


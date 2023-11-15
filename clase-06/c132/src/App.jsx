import { useState, useEffect } from 'react'

import { Formulario } from './Formulario'
import { Mostrar } from './Mostrar'

import './App.css'

// const datosIniciales = [
//   { id: 1, nombre: 'Juan',   apellido: 'Perez'    , telefono: '1234567890'},
//   { id: 2, nombre: 'Maria',  apellido: 'Gomez'    , telefono: '1234567891'},
//   { id: 3, nombre: 'Carlos', apellido: 'Sanchez'  , telefono: '1234567892'},
//   { id: 4, nombre: 'Luis',   apellido: 'Gonzalez' , telefono: '1234567893'},
// ]

const generarId = () => Number(new Date());   // Timestamp

function App()  {
  const [editar, setEditar] = useState(false)
  const [actual, setActual] = useState(0)   // id del contacto a editar

  const [contactos, setContactos] = useLocalStorate('contactos', [])

  useEffect(() => {
    console.log("Estado actual")
    console.log("- Editar: " + editar)
    console.log("- Actual: " + actual)
  }, [editar, actual])  // solo se ejecuta cuando cambia editar o actual

  function alActualizar(nuevo) {
    if (nuevo != null) {
      if (nuevo.id === 0) { // nuevo contacto
        const nuevos = [...contactos, { ...nuevo, id: generarId() }]
        setContactos(nuevos)

      } else {              // actualizar contacto
        const nuevos = contactos.map((contacto) => contacto.id === nuevo.id ? nuevo : contacto)
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
    const nuevos = contactos.filter(contacto => contacto.id !== id)
    setActual(id)
    setContactos(nuevos)
  }

  const contacto = contactos.find(contacto => contacto.id === actual) ?? { id: 0, nombre: '', apellido: '' }

  const listaContactos = contactos.map( contacto =>
    <Mostrar contacto={contacto} alEditar={alEditar} alBorrar={alBorrar} key={contacto.id} />
  )

  
  return (
    <>
      <h1>Nano Agenda</h1>
      { !editar && <button onClick={alAgregar}>Agregar</button> }
      { editar
        ? <Formulario contacto={contacto} alActualizar={alActualizar} />
        : listaContactos
      }
    </>
  )
}

function useLocalStorate(key, initialValue = []) {
  const [value, setValue] = useState(initialValue)
    
  useEffect( () => {
    const initial = localStorage.getItem(key)
    if (initial) {
      setValue(JSON.parse(initial))
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  
  return [value, setValue]
}

export default App

import { useState } from 'react'

function ContadorForm({ alAgregar }) {
  const [nombre, setNombre] = useState('')

  function cambiar(evento) {
    setNombre(evento.target.value)
  }

  function agregar(evento) {
    alAgregar(nombre)
    setNombre('')
    evento.preventDefault()
  }

  return (
    <form>
      <input type="search" value={nombre} onChange={cambiar} placeholder="Nombre" />
      <button onClick={agregar}>Agregar</button>
    </form>
  )
}

export default ContadorForm
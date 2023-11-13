import { useState } from 'react'
import { Tarjeta, Titulo, Menu, Accion } from './Tarjeta'
// import Tarjeta  from './Tarjeta'

function DemoTarjeta() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <Tarjeta>
        <Titulo titulo="Contactos" />
        <p>Podemos poner un texto largo</p>
        <i>O una linea destacada</i>
        <p>O lo que quieras</p>
        <br />
        <h4>Contador: {contador}</h4>
        <Menu>
          <Accion nombre="Sumar" accion={ () => setContador(contador+1)} />
          <Accion nombre="Restar" accion={() => setContador(contador-1)} />
        </Menu>
      </Tarjeta>
    </>
  )
}

export default DemoTarjeta;


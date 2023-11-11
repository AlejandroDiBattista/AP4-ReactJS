import './Articulo.css'

// Muestra el articulo que le llega desde la revista
function Articulo({ titulo, contenido, autor }) {
  const lineas = contenido.split('\n')              // Separa el contenido en lineas
  const parrafos = lineas.map((linea, i) => <p key={i}>{linea}</p>) // Crea un párrafo por cada linea

  return (
    <article>
        <h2>{titulo}</h2>
        {parrafos}
        <Autor autor={autor} />
        <footer>Todos los derechos reservados</footer>
    </article>
  )
}

// Este componente es interno. No se usa fuera de este archivo
function Autor({ autor = 'Anonimo' }) {
  return <p className='autor'>Artículo escrito por <b>{autor}</b></p>
}


export default Articulo

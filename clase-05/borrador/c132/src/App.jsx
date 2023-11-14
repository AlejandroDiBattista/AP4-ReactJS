import './App.css'
import Semaforo from './Semaforo.jsx'

function App() {

  function mostrarColor(color) {
    console.log(color)
  }

  return (
    <>
      <div className="esquina">
         <Semaforo inicial='red' onChange={mostrarColor}/>
         <Semaforo inicial='green'/>
      </div>
      </>
    )
}

export default App

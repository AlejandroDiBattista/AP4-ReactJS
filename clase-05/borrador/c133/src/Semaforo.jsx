import { useState } from 'react';
import './Semaforo.css';

export default function Semaforo({ inicial }) {
  const [color, setColor] = useState(inicial);

  function cambiarColor() {
    if (color == "rojo") {
      setColor("verde");
    } else if (color == "verde") {
      setColor("amarillo");
    } else if (color == "amarillo") {
      setColor("rojo");
    }
  }

  return (
    <div onClick={cambiarColor}
      className="semaforo">
      <div className={color == "rojo" ? "luzRoja" : "luzApagada"}></div>
      <div className={color == "amarillo" ? "luzAmarilla" : "luzApagada"}></div>
      <div className={color == "verde" ? "luzVerde" : "luzApagada"}></div>
    </div>
  );
}

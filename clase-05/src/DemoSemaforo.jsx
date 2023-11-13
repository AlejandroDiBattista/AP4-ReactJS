import React, { useState, useEffect } from 'react';

import Semaforo from './Semaforo';
import './DemoSemaforo.css';

const duracionFase = { rojo: 4, amarillo: 1, verde: 3 }

function calcularColor(segundos, fase) {
    const { verde, amarillo, rojo } = duracionFase
    const total = verde + amarillo + rojo

    let nuevo = (segundos + fase) % total

    // console.log(`segundos: ${segundos} => nuevo: ${nuevo}`)
    if (nuevo < verde) return 'verde'
    if (nuevo < verde + amarillo) return 'amarillo'
    return 'rojo'
}


function DemoSemaforo({ cruce = "Cordoba y 25 de Mayo" }) {
    const [segundos, setSegundos] = useState(0)

    useEffect(() => {
        const tick = 100;
        const intervalo = setInterval(() => setSegundos(segundos + tick / 1000), tick);
        return () => clearInterval(intervalo)
    }, [segundos])


    const color1 = calcularColor(segundos, 0)
    const color2 = calcularColor(segundos, 4)
    const hora = (new Date()).toLocaleString().split(" ")[1]
    return (
        <div className='esquina'>
            <div className='nombre'>
                <h2>{cruce}</h2>
                <p>Hora: <b>{hora}</b></p>
                <p>Segundos: <b>{segundos.toFixed(1)}</b></p>
            </div>
            <div>
                <h4>Norte-Sur</h4>
                <Semaforo color={color1} />
            </div>
            <div>
                <h4>Este-Oeste</h4>
                <Semaforo color={color2} />
            </div>
        </div>
    );
}

export default DemoSemaforo;
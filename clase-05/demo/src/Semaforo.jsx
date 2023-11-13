// import { useState, useEffect } from 'react';
import './Semaforo.css';

function Semaforo({ color = 'verde' }) {
    return (
        <>
            <div className='semaforo'>
                <div className={color == 'rojo' ? 'luzRoja' : 'luzApagada'}></div>
                <div className={color == 'amarillo' ? 'luzAmarilla' : 'luzApagada'}></div>
                <div className={color == 'verde' ? 'luzVerde' : 'luzApagada'}></div>
            </div>
        </>
    );
}


export default  Semaforo;
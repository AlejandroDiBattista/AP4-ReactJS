import './Semaforo.css'
import { useState } from 'react'

export default function Semaforo({inicial='red',  onChange = () => { }}) {
    const [color, setColor] = useState(inicial)

    function cambiarColor() {
        if (color == 'red') setColor('green')
        if (color == 'green') setColor('yellow')
        if (color == 'yellow') setColor('red')
        onChange(color)
    }

    return (
        <div className="semaforo" onClick={cambiarColor}>
            <Luz color={color == 'red' ? 'red': 'gray'}/>
            <Luz color={color == 'yellow' ? 'yellow' : 'gray'} />
            <Luz color={color == 'green' ? 'green' : 'gray'} />
        </div>
    )
}

function Luz({ color, tamanio = "100px" }) {
    const estilo = {
        backgroundColor: color,
        width: tamanio,
        height: tamanio,
        borderRadius: '50%',
    }

    return (<div style={estilo}></div>)
}
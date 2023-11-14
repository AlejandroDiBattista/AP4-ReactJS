// Permite moverse entre las notas
// Note que revise los valores y las funciones desde Revista.jsx

function Recorrer({ actual, cantidad, anterior, siguiente }) {
    return (
        <div className='recorrer'>
            <span>Nota {actual} de {cantidad}</span>
            <button onClick={anterior}  disabled={actual==1}> Anterior </button>
            <button onClick={siguiente} disabled={actual==cantidad} >Siguiente</button>
        </div>
    )
}

export default Recorrer
import './Tarjeta.css'

function Tarjeta({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    )
}

function Titulo({ titulo }) {
    const estilo = {
        color: 'red',
        fontSize: '20px',
        fontWeight: 'normal',
        margin: 0,
    }
    return <h2 style={estilo}>{titulo}</h2>
}

function Menu({ children }) {
    return (
        <div className="menu">
            {children}
        </div>
    )
}

function Accion({ nombre, accion }) {
    return <button onClick={accion}>{nombre}</button>
}

Tarjeta.Titulo = Titulo
Tarjeta.Menu = Menu
Tarjeta.Accion = Accion

// export {Tarjeta, Titulo, Menu, Accion}
export default Tarjeta
export { Tarjeta, Titulo, Menu, Accion }


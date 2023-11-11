import logo from './assets/logo.png'
import './Menu.css'

// Simula un menú de navegación para la revista - No hace nada 
function Menu() {
    return (
        <nav>
            <img src={logo} alt="Logo" />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Revista</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        </nav>
    )   
}

export default Menu;
// Importa las dependencias necesarias
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';
import './App.css';
import logo from './assets/react.svg';
// Componente principal que contiene la barra de navegación y las rutas
function App() {
    return (
        <Router>
            <main>
                {/* Barra de navegación con enlaces */}
                <nav>
                    <img src={logo} alt="" />
                    <ul>
                        {/* NavLink es igual que Link pero permite destacar la página activo */}
                        <li><NavLink to="/" activeClassName="activo">Home</NavLink></li>
                        <li><NavLink to="/pagina/uno" activeClassName="activo">Uno</NavLink></li>
                        <li><NavLink to="/pagina/dos" activeClassName="activo">Dos</NavLink></li>
                        <li><NavLink to="/acerca-de" activeClassName="activo">Acerca de</NavLink></li>
                        <li><NavLink to="/contacto" activeClassName="activo">Contacto</NavLink></li>
                    </ul>
                </nav>

                <article>
                    <Routes>
                        <Route path="/" exact element={<PaginaHome />} />             {/* Esta es la ruta inicial */}
                        <Route path="/contacto" element={<PaginaContacto />} />
                        <Route path="/acerca-de" element={<PaginaAcercaDe />} />
                        <Route path="/pagina/:numero" element={<PaginaDinamica />} /> {/* Esta ruta acepta un parámetro  */}
                        <Route path="*" element={<Pagina404 />} />                    {/* Esta ruta se muestra cuando no hay match (404 -> Página no encontrada) */}
                    </Routes>
                </article>
                <footer>Ejemplo de use de React Router DOM</footer>
            </main>
        </Router>

    );
}

function PaginaDinamica() {
    const { numero } = useParams();
    return (
        <div>
            <h2>Página { numero.toUpperCase() }</h2>
            <b>Bienvenido a la página dinamica</b>
            <p> Toma el valor directamente desde la url: { numero } </p>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quae illum illo iusto ipsa. Animi laboriosam architecto
                nobis omnis, dolore impedit tempore veritatis in
                porro earum minima soluta, repellendus debitis totam!</p>
        </div>
    );
}


// Componente para la página Home
function PaginaHome() {
    return (
        <div>
            <h2>Home</h2>
            <b>Bienvenido a la página de inicio.</b>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quae illum illo iusto ipsa. Animi laboriosam architecto
                nobis omnis, dolore impedit tempore veritatis in
                porro earum minima soluta, repellendus debitis totam!</p>
        </div>
    );
}

// Componente para la página AcercaDe
function PaginaAcercaDe() {
    return (
        <div>
            <h2>Acerca de</h2>
            <b>Esta es la página "Acerca de nosotros".</b>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores molestias labore id! Perspiciatis tenetur
                nesciunt mollitia blanditiis ab, maxime a dignissimos
                nostrum modi autem porro neque, tempora iure exercitationem itaque?</p>
        </div>
    );
}

// Componente para la página Contacto 
// Simula una pagina muy larga para ver el comportamiento del pie de página
function PaginaContacto() {
    return (
        <div>
            <h2>Contacto</h2>
            <b>¡Contáctanos aquí!</b>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos mollitia dolore cupiditate. Rerum ad assumenda, qui
                consequatur molestias dolorum facilis eius fugit aliquid,
                pariatur est quod labore nisi quos. Alias?</p>
        </div>
    );
}

function Pagina404() {
    return (
        <div>
            <h2>404</h2>
            <p>La página que buscas no existe.</p>
        </div>
    );
}


export default App;

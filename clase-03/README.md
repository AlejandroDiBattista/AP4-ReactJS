¿Como desarrollar **React.js** localmente?
===

## Se debe agregar 3 librerias

### Las 2 primeras son para incluir React y ReactDOM


*React*

    <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>

*ReactDOM*

    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>

### La última incluye Babel (Convierte JSX en JS)

*Babel*

    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

### Cuando escribes el script debe agregar type="text/babel"

    <script type="text/babel">
    // Codigo en JSX
    </script>


### Este es la página minima para usar ReactJS localmente

    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Titulo</title>
                
            <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>

            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

            <script type="text/babel">
                // Codigo JSX
                let root = document.getElementById('root')
                ReactDOM.render( Agenda(datos), root)
            </script>
        </head>
        <body>
            <div id="root"></div>
        </body>
    </html>

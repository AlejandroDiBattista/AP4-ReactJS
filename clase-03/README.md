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




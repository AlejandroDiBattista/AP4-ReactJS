## Ejercicio práctico 1 

El trabajo solicita que se envie la solución en un único archivo.

Para lograrlo se debe incorporar 3 liberías para usar REACT y BABEL

Luego incrustar el CSS dentro del elemento 
```html
    <style>
        /* Aca va todo los CSS */
    </style>
```

El css que deben incrustar se forma copiando todos los css de todos los componentes dentro de **<style>**

y el código JSX con la etiqueta  **<script>**

```html
    <script type="text/babel">
        /* Aca va todo el código de JSX (sin importación ni exportación) */
    </script>
```

El código jsx que se debe incrustar se forma copiando todos los archivos jsx que se utilizaron eliminando toda referencia a importación o exportación dentro de *style*

Un observación extra...

Cuando realizamos un componente que mantine un estado (como es este caso) hay que importar la función **useState** para ello se usa la expresion **import { useState } from './React'** cosa que no se puede hacer ya que eliminamos toda importación

Para resolver este problema debe colocarse como primera linea del codigo javascript la expresion **const {useState} = React** que cúmple la misma función que la importación 

Le dejo un archivo que se puede usar como base para realizar la conversion. 

[Ver código de la **plantilla**](https://github.com/AlejandroDiBattista/AP4-ReactJS/blob/main/clase-04/plantilla.html)


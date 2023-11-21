## Ejercicio práctico 1 

El trabajo solicita que se envie la solución en un único archivo.

Para lograrlo se debe incorporar 3 liberías para usar REACT y BABEL

Luego incrustar el CSS dentro del elemento 
```html
    <style>
        // Estilo
    </style>
```

El css que deben incrustar se forma copiando todos los css de todos los componentes dentro de <style>.

y el código JSX con la etiqueta 

```html
    <script type="text/babel">
        // Codigo 
    </script>
```

El codigo jsx que se debe incrustar se forma copiando todos los archivos jsx que se utilizaron eliminando toda referencia a importacion o exportación dentro de <style>

Un observacion extra. 

Cuando realizamos un componente que mantine un estado (como es este caso) hay que importar la función "useState" para ello se usa la expresion "import { useState } from './React'" cosa que no se puede hacer ya que eliminamos toda importacion. 

Para resolver este problema debe colocarse como primera linea del codigo javascript la expresion "const {useState} = React" que comple la misma funcion que la importacion 

**agenda_todo_en_uno.html** [Ver código](https://github.com/AlejandroDiBattista/AP4-ReactJS/blob/main/clase-04/agenda_todo_en_uno.html)


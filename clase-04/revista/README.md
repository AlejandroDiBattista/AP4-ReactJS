# Revista Interactiva

Este proyecto simula una revista digital que permite visualizar varias notas y navegar entre ellas.

### Componentes de la aplicación

La aplicación se divide en cuatro componentes principales:

* Revista: Este componente muestra el menú, la navegación y el artículo actual.
* Menú: Este componente simula el menú de la página.
* Recorrer: Este componente permite ir a la nota siguiente o a la anterior.
* Artículo: Este componente muestra la nota en la revista.

### Datos

El contenido de las notas está guardado en el archivo datos.json. 
Este archivo contiene todas las notas que se pueden visualizar en la revista.

### Aclaración

Para poder probar el sistema debe bajase a una carpeta. Dentro de ella debe llamarse a 

```batch
node install
node i -g vite
node run dev
```
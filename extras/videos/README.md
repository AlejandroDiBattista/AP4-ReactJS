# Publicación de videos

Se debe copiar las URL de los videos grabados por ZOOM en 
el archivo "grabacion-clases.md" en los cursos correspondientes.

Luego se debe correr

```batch
    ruby .\videos.rb
```

Esto genera un archivo "clase-xx.md" 

El dicho archivo tiene un acceso directo para ir a la clase dentro del campus y el texto que debe copiar en la seccion "Grabacion de la clase"

### Nota:
Si se quiere generar un texto específico para la clase se puede hacer una plantilla nombrada "plantilla-xx.md" antes de correr el programa
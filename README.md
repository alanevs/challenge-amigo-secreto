# challenge amigo secreto

Este proyecto tiene como objetivo permitir al usuario ingresar nombres de amigos en una lista y realizar un sorteo para elegir uno de ellos de manera aleatoria.

## Descripción

El código permite al usuario:

1. **Agregar amigos a una lista**: Introduciendo un nombre en un campo de texto y presionando un botón para añadirlo a la lista.
2. **Mostrar la lista de amigos**: Los amigos se muestran en una lista desordenada en la interfaz web.
3. **Sortear un amigo aleatorio**: Cuando se hace el sorteo, el código selecciona un nombre aleatorio de la lista y lo muestra en pantalla.

## Funciones principales

- **agregarAmigo()**: Permite agregar un amigo a la lista si el campo de entrada no está vacío.
- **actualizarListaAmigos()**: Muestra la lista de amigos agregados en la interfaz.
- **sortearAmigo()**: Realiza el sorteo, eligiendo aleatoriamente un amigo de la lista.
- **limpiarCaja()**: Limpia el campo de texto después de agregar un amigo.
- **mensajeResultado()**: Muestra el mensaje de resultado del sorteo en la interfaz.

## Instrucciones de uso

1. Ingresa un nombre en el campo de texto "Nombre del amigo".
2. Haz clic en el botón "Agregar amigo" para añadirlo a la lista.
3. Para realizar un sorteo, haz clic en el botón "Sortear amigo".

## Notas

- El código no permite agregar amigos con nombres vacíos.
- Si se realiza un sorteo sin amigos en la lista, se muestra un mensaje de advertencia.


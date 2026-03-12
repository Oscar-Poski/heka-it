---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: edicion-de-texto-linux
lessonSlug: 04-modos-de-vim
title: "Modos de vim"

summary: "Comprender los diferentes modos de vim y cómo se utilizan para navegar y editar texto."

durationMinutes: 8

objectives:

- "Comprender los modos principales de vim"
- "Cambiar entre modos de vim"
- "Utilizar vim correctamente según el modo activo"
    
order: 4
    

---

# Modos de vim

Una de las características más importantes de `vim` es que funciona mediante **modos de operación**.

Esto significa que el teclado puede tener **funciones diferentes dependiendo del modo activo**.

Aunque al principio puede parecer extraño, este diseño permite editar texto **de forma muy rápida y eficiente**.

Los tres modos principales de `vim` son:

- **Modo normal**
- **Modo inserción**
- **Modo comando**

---

# Modo normal

El **modo normal** es el modo en el que `vim` inicia por defecto.

En este modo **no se escribe texto**.

En lugar de eso, el teclado se utiliza para:

- navegar por el archivo
- borrar texto
- copiar y pegar contenido
- ejecutar comandos

Este modo es el centro del funcionamiento de `vim`.

Si alguna vez no sabes en qué modo estás, presiona:

```
Esc
```

Esto siempre regresa al modo normal.

---

# Modo inserción

El **modo inserción** permite escribir texto dentro del archivo.

Para entrar en este modo se utilizan teclas como:

```
i
```

Insertar texto en la posición actual del cursor.

---

```
a
```

Insertar texto después del cursor.

---

```
o
```

Crear una nueva línea debajo y comenzar a escribir.

---

Cuando estás en modo inserción, el editor funciona como un editor de texto tradicional.

Para salir del modo inserción se presiona:

```
Esc
```

---

# Modo comando

El **modo comando** permite ejecutar instrucciones especiales dentro de `vim`.

Para entrar en este modo se presiona:

```
:
```

Esto abre una línea de comandos en la parte inferior del editor.

Algunos comandos comunes incluyen:

Guardar archivo:

```
:w
```

Salir del editor:

```
:q
```

Guardar y salir:

```
:wq
```

Salir sin guardar:

```
:q!
```

---

# Flujo típico de trabajo

Un flujo común al editar archivos con `vim` es:

1. abrir archivo
2. entrar en modo inserción
3. escribir o modificar texto
4. volver al modo normal
5. guardar y salir

Por ejemplo:

```
vim archivo.txt
i
(escribir texto)
Esc
:wq
```

---

# Por qué existen los modos

Los modos permiten separar diferentes tipos de acciones:

- escribir texto
- navegar rápidamente
- ejecutar comandos

Esto permite realizar muchas tareas **sin mover las manos del teclado**.

Con práctica, los usuarios avanzados pueden editar archivos muy rápidamente.

---

# Idea clave de esta lección

`vim` utiliza diferentes modos para separar navegación, edición y ejecución de comandos.

---

# Repaso

- `vim` utiliza varios modos de operación.
- El **modo normal** se usa para navegar y ejecutar comandos.
- El **modo inserción** permite escribir texto.
- El **modo comando** permite ejecutar instrucciones como guardar o salir.
- `Esc` siempre regresa al modo normal.
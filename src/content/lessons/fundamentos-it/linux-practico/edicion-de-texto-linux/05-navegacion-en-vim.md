---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: edicion-de-texto-linux
lessonSlug: 05-navegacion-en-vim
title: "Navegación en vim"

summary: "Aprender a moverse rápidamente dentro de archivos utilizando los comandos de navegación de vim."

durationMinutes: 8

objectives:

- "Navegar dentro de archivos usando el modo normal"
- "Mover el cursor usando comandos de vim"
- "Desplazarse rápidamente dentro de archivos grandes"
order: 5
    

---

# Navegación en vim

Una de las grandes ventajas de `vim` es que permite **navegar por archivos de forma muy rápida** usando comandos del teclado.

La navegación se realiza en **modo normal**.

Si no estás seguro de estar en modo normal, presiona:

```
Esc
```

Esto te llevará al modo normal.

---

# Movimiento básico del cursor

`vim` tiene teclas específicas para mover el cursor.

```
h  mover izquierda
j  mover abajo
k  mover arriba
l  mover derecha
```

Aunque también puedes usar las flechas del teclado, muchos usuarios prefieren estas teclas porque permiten **navegar sin mover las manos del teclado**.

---

# Movimiento por palabras

También puedes moverte rápidamente entre palabras.

Moverse a la siguiente palabra:

```
w
```

Moverse al inicio de la palabra anterior:

```
b
```

Moverse al final de la palabra:

```
e
```

Esto permite desplazarse rápidamente dentro de líneas de texto.

---

# Ir al inicio o final de línea

Mover el cursor al inicio de la línea:

```
0
```

Mover al primer carácter no vacío de la línea:

```
^
```

Mover al final de la línea:

```
$
```

Esto es útil cuando trabajas con líneas largas.

---

# Navegar por el archivo

También puedes moverte dentro del archivo completo.

Ir al inicio del archivo:

```
gg
```

Ir al final del archivo:

```
G
```

Ir a una línea específica:

```
:25
```

Esto moverá el cursor a la línea **25**.

---

# Desplazamiento por pantalla

También puedes moverte por la pantalla de forma más rápida.

Media pantalla hacia abajo:

```
Ctrl + d
```

Media pantalla hacia arriba:

```
Ctrl + u
```

Esto permite desplazarse rápidamente por archivos largos.

---

# Buscar texto en el archivo

Puedes buscar texto dentro del archivo usando:

```
/texto
```

Por ejemplo:

```
/error
```

Esto buscará la palabra **error**.

Para ir al siguiente resultado se usa:

```
n
```

Para ir al resultado anterior:

```
N
```

---

# Por qué es importante la navegación

La navegación eficiente es una de las habilidades más importantes al usar `vim`.

Cuando se domina, permite:

- moverse rápidamente por archivos grandes
- encontrar texto fácilmente
- editar código o configuraciones con rapidez

Por esta razón muchos desarrolladores y administradores prefieren `vim`.

---

# Idea clave de esta lección

`vim` permite navegar por archivos de forma muy eficiente usando comandos del teclado en modo normal.

---

# Repaso

- `h`, `j`, `k`, `l` mueven el cursor.
- `w`, `b`, `e` permiten moverse entre palabras.
- `0` y `$` llevan al inicio y final de línea.
- `gg` y `G` llevan al inicio y final del archivo.
- `/texto` permite buscar dentro del archivo.
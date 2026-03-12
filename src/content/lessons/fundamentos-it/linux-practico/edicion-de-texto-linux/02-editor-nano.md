---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: edicion-de-texto-linux
lessonSlug: 02-editor-nano
title: "Editor nano"

summary: "Aprender a utilizar el editor de texto nano para crear y modificar archivos desde la terminal."

durationMinutes: 8

objectives:

- "Abrir y crear archivos con nano"
- "Editar texto dentro del editor"
- "Guardar y salir del editor"
    
order: 2
    

---

# Editor `nano`

Uno de los editores de texto más sencillos y fáciles de usar en Linux es:

```
nano
```

`nano` es un editor de texto que funciona dentro de la terminal y está diseñado para ser **simple e intuitivo**.

Por esta razón, es muy popular entre principiantes que están aprendiendo a trabajar en Linux.

Muchas distribuciones Linux lo incluyen instalado por defecto.

---

# Abrir o crear un archivo

Para abrir un archivo con `nano` se utiliza:

```bash
nano archivo.txt
```

Si el archivo ya existe, `nano` lo abrirá para editarlo.

Si el archivo no existe, `nano` creará un nuevo archivo con ese nombre.

---

# Interfaz de nano

Cuando abres un archivo con `nano`, verás tres partes principales:

1. **Área de edición**

Aquí aparece el contenido del archivo y puedes escribir texto.

2. **Barra de estado**

Muestra información sobre el archivo y el editor.

3. **Atajos de teclado**

En la parte inferior aparecen combinaciones de teclas para ejecutar comandos.

Por ejemplo:

```
^O Write Out
^X Exit
^K Cut
^U Paste
```

El símbolo `^` representa la tecla **Ctrl**.

---

# Escribir y editar texto

Dentro de `nano` puedes escribir y editar texto de forma directa.

Las teclas del teclado funcionan normalmente:

- escribir texto
- borrar con **Backspace**
- mover el cursor con las flechas

Esto hace que el editor sea muy fácil de usar.

---

# Guardar un archivo

Para guardar los cambios se utiliza:

```
Ctrl + O
```

Esto significa **Write Out** (guardar archivo).

Después de presionar esta combinación, `nano` pedirá confirmar el nombre del archivo.

Presiona **Enter** para confirmar.

---

# Salir del editor

Para salir de `nano` se utiliza:

```
Ctrl + X
```

Si existen cambios sin guardar, `nano` preguntará si deseas guardarlos antes de salir.

---

# Cortar y pegar texto

`nano` también permite cortar y pegar líneas de texto.

Cortar línea actual:

```
Ctrl + K
```

Pegar texto:

```
Ctrl + U
```

Esto permite mover contenido dentro del archivo fácilmente.

---

# Buscar texto

Para buscar texto dentro del archivo puedes usar:

```
Ctrl + W
```

Después puedes escribir la palabra que deseas buscar.

Esto es útil cuando trabajas con archivos grandes.

---

# Cuándo usar nano

`nano` es especialmente útil cuando:

- necesitas editar archivos rápidamente
- estás aprendiendo Linux
- trabajas en un sistema remoto
- necesitas modificar configuraciones simples

Es un editor sencillo pero muy práctico.

---

# Idea clave de esta lección

`nano` es un editor de texto simple que permite crear y editar archivos desde la terminal de forma fácil.

---

# Repaso

- `nano archivo.txt` abre o crea un archivo.
- `Ctrl + O` guarda el archivo.
- `Ctrl + X` sale del editor.
- `Ctrl + K` corta una línea.
- `Ctrl + U` pega texto.
- `Ctrl + W` busca texto.
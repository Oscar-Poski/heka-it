---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: edicion-de-texto-linux
lessonSlug: 03-introduccion-a-vim
title: "Introducción a vim"

summary: "Conocer el editor vim, una herramienta poderosa y ampliamente utilizada para editar texto en Linux."

durationMinutes: 8

objectives:

- "Comprender qué es vim"
- "Abrir archivos con vim"
- "Entender el concepto de modos de edición"
    
order: 3
    

---

# Introducción a `vim`

Uno de los editores de texto más utilizados en Linux es:

```
vim
```

`vim` significa:

**Vi Improved**

Es una versión mejorada del editor clásico **vi**, que existe desde los primeros sistemas Unix.

A diferencia de editores simples como `nano`, `vim` está diseñado para ser **extremadamente eficiente y poderoso**.

Por esta razón es muy utilizado por:

- administradores de sistemas
- desarrolladores
- ingenieros DevOps

---

# Por qué aprender vim

Aunque al principio puede parecer complicado, aprender `vim` tiene muchas ventajas.

Por ejemplo:

- permite editar archivos muy rápido
- funciona en prácticamente todos los sistemas Linux
- no requiere interfaz gráfica
- es muy eficiente para archivos grandes

Muchos administradores de sistemas prefieren `vim` porque permite trabajar **muy rápido desde la terminal**.

---

# Abrir un archivo con vim

Para abrir un archivo se utiliza:

```bash
vim archivo.txt
```

Si el archivo existe, se abrirá para editarlo.

Si el archivo no existe, `vim` creará un nuevo archivo con ese nombre.

---

# Interfaz básica de vim

Cuando abres `vim`, verás una pantalla similar a un editor de texto, pero su funcionamiento es diferente.

`vim` no permite escribir texto inmediatamente.

Esto ocurre porque utiliza un sistema llamado **modos de edición**.

---

# Modos en vim

Una de las características más importantes de `vim` es que funciona con diferentes **modos**.

Los principales son:

**Modo normal**

Es el modo inicial.

Se utiliza para navegar y ejecutar comandos.

---

**Modo inserción**

Permite escribir texto dentro del archivo.

---

**Modo comando**

Permite ejecutar comandos como guardar o salir del editor.

---

# Entrar en modo inserción

Para empezar a escribir texto debes entrar en **modo inserción**.

Esto se hace presionando:

```
i
```

Después de presionar `i`, puedes escribir texto normalmente.

---

# Salir del modo inserción

Para volver al modo normal se utiliza:

```
Esc
```

Esto permite ejecutar comandos nuevamente.

---

# Guardar y salir

Para guardar y salir del archivo en `vim` se utiliza:

Primero presiona:

```
Esc
```

Luego escribe:

```
:wq
```

y presiona **Enter**.

Esto significa:

```
write + quit
```

Guardar y salir del editor.

---

# Salir sin guardar

Si deseas salir sin guardar cambios puedes usar:

```
:q!
```

Esto cerrará el archivo descartando modificaciones.

---

# Curva de aprendizaje

Al principio `vim` puede parecer complicado porque utiliza comandos y modos.

Sin embargo, con práctica se vuelve una herramienta muy poderosa.

Muchos usuarios avanzados pueden editar archivos **mucho más rápido con vim que con editores tradicionales**.

---

# Idea clave de esta lección

`vim` es un editor de texto poderoso que funciona mediante diferentes modos de operación para permitir edición rápida y eficiente desde la terminal.

---

# Repaso

- `vim` es un editor avanzado de texto en Linux.
- `vim archivo.txt` abre un archivo.
- `i` entra en modo inserción.
- `Esc` regresa al modo normal.
- `:wq` guarda y sale del editor.
- `:q!` sale sin guardar.
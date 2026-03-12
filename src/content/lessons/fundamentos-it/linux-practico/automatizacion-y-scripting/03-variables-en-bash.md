---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: automatizacion-y-scripting
lessonSlug: 03-variables-en-bash
title: "Variables en Bash"

summary: "Aprender a usar variables en scripts de Bash para almacenar y reutilizar información."

durationMinutes: 8

objectives:

- "Comprender qué es una variable en Bash"
- "Asignar valores a variables"
- "Usar variables dentro de scripts"
    
order: 3
    

---

# Variables en Bash

En programación y scripting, una **variable** es un nombre que representa un valor almacenado.

Las variables permiten **guardar información y reutilizarla dentro de un script**.

Esto hace que los scripts sean más flexibles y fáciles de modificar.

---

# Crear una variable

En Bash se puede crear una variable de forma muy sencilla.

Ejemplo:

```bash
nombre="Oscar"
```

Aquí estamos creando una variable llamada:

```
nombre
```

con el valor:

```
Oscar
```

---

# Reglas importantes

Al crear variables en Bash hay algunas reglas importantes.

No debe haber espacios alrededor del signo `=`.

Correcto:

```bash
nombre="Oscar"
```

Incorrecto:

```
nombre = "Oscar"
```

Esto produciría un error.

---

# Usar una variable

Para usar el valor de una variable se utiliza el símbolo:

```
$
```

Ejemplo:

```bash
echo $nombre
```

La salida sería:

```
Oscar
```

---

# Variables dentro de un script

Un ejemplo simple de script con variables sería:

```bash
#!/bin/bash

usuario="Carlos"

echo "Hola $usuario"
echo "Bienvenido al sistema"
```

Cuando el script se ejecuta, mostrará el valor almacenado en la variable.

---

# Usar llaves con variables

En algunos casos se utilizan llaves para delimitar la variable.

Ejemplo:

```bash
echo "Hola ${usuario}"
```

Esto ayuda cuando la variable está cerca de otros caracteres.

---

# Variables del sistema

Bash también tiene **variables especiales del sistema**.

Algunas de las más comunes incluyen:

```bash
$HOME
$USER
$PWD
```

Ejemplo:

```bash
echo $HOME
```

Esto muestra el **directorio personal del usuario**.

---

# Variables de solo lectura

También es posible definir variables que no puedan cambiarse.

Ejemplo:

```bash
readonly version="1.0"
```

Después de esto, el valor no podrá modificarse.

---

# Ejemplo práctico

Un pequeño script que utiliza variables:

```bash
#!/bin/bash

nombre="Ana"
edad=25

echo "Nombre: $nombre"
echo "Edad: $edad"
```

Este script imprime información almacenada en variables.

---

# Idea clave de esta lección

Las variables permiten almacenar información dentro de scripts de Bash y reutilizarla en diferentes partes del programa.

---

# Repaso

- Una variable almacena un valor.
- Se define con `nombre="valor"`.
- Se accede usando `$nombre`.
- No deben existir espacios alrededor del `=`.
- Bash incluye variables del sistema como `$HOME` y `$USER`.
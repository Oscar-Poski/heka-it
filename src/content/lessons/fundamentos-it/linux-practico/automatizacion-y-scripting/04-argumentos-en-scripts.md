---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: automatizacion-y-scripting
lessonSlug: 04-argumentos-en-scripts
title: "Argumentos en scripts"

summary: "Aprender a pasar argumentos a scripts de Bash para hacerlos más flexibles y reutilizables."

durationMinutes: 8

objectives:

- "Comprender qué son los argumentos en un script"
- "Acceder a argumentos dentro de un script de Bash"
- "Utilizar argumentos para modificar el comportamiento de un script"
    
order: 4
    

---

# Argumentos en scripts

Cuando ejecutamos un script de Bash, también podemos **pasarle información desde la línea de comandos**.

Esa información se conoce como **argumentos**.

Los argumentos permiten que un mismo script funcione con **diferentes valores o parámetros**, sin necesidad de modificar el código.

---

# Ejemplo básico

Supongamos que tenemos el siguiente script:

```bash
#!/bin/bash

echo "Hola $1"
```

Si ejecutamos el script así:

```bash
./saludo.sh Carlos
```

La salida será:

```
Hola Carlos
```

Aquí:

```
Carlos
```

es el **argumento que pasamos al script**.

---

# Variables de argumentos

Bash utiliza variables especiales para acceder a los argumentos.

Las más comunes son:

```
$1   primer argumento
$2   segundo argumento
$3   tercer argumento
```

Por ejemplo:

```bash
#!/bin/bash

echo "Primer argumento: $1"
echo "Segundo argumento: $2"
```

Si ejecutamos:

```bash
./script.sh manzana naranja
```

La salida será:

```
Primer argumento: manzana
Segundo argumento: naranja
```

---

# Número de argumentos

Bash también permite saber **cuántos argumentos fueron enviados al script**.

Esto se obtiene usando:

```bash
$#
```

Ejemplo:

```bash
#!/bin/bash

echo "Número de argumentos: $#"
```

---

# Todos los argumentos

Si queremos acceder a **todos los argumentos al mismo tiempo**, podemos usar:

```bash
$@
```

o

```bash
$*
```

Ejemplo:

```bash
#!/bin/bash

echo "Argumentos recibidos:"
echo "$@"
```

---

# Nombre del script

Existe otra variable útil:

```bash
$0
```

Esta variable contiene **el nombre del script que se está ejecutando**.

Ejemplo:

```bash
#!/bin/bash

echo "Este script se llama $0"
```

---

# Ejemplo práctico

Un script que utiliza argumentos podría verse así:

```bash
#!/bin/bash

nombre=$1
edad=$2

echo "Nombre: $nombre"
echo "Edad: $edad"
```

Si ejecutamos:

```bash
./persona.sh Ana 30
```

La salida será:

```
Nombre: Ana
Edad: 30
```

---

# Cuándo usar argumentos

Los argumentos son muy útiles cuando:

- queremos reutilizar un mismo script
- necesitamos pasar parámetros al programa
- queremos automatizar tareas con diferentes datos

Muchos comandos de Linux funcionan precisamente utilizando **argumentos en la línea de comandos**.

---

# Idea clave de esta lección

Los argumentos permiten pasar información a un script desde la línea de comandos, haciendo que los scripts sean más flexibles y reutilizables.

---

# Repaso

- Los argumentos se pasan al ejecutar un script.
- `$1`, `$2`, `$3` representan argumentos.
- `$#` muestra cuántos argumentos se recibieron.
- `$@` contiene todos los argumentos.
- `$0` contiene el nombre del script.
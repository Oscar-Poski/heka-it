---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: automatizacion-y-scripting
lessonSlug: 06-bucles-for-while
title: "Bucles (for, while)"

summary: "Aprender a utilizar bucles en Bash para repetir acciones dentro de scripts."

durationMinutes: 9

objectives:

- "Comprender qué es un bucle en Bash"
- "Usar el bucle for"
- "Usar el bucle while"
    
order: 6
    

---

# Bucles (for, while)

En muchos scripts es necesario **repetir una acción varias veces**.

Por ejemplo:

- procesar múltiples archivos
- recorrer una lista de valores
- ejecutar una tarea hasta que una condición cambie

Para esto se utilizan **bucles**.

Un **bucle** es una estructura que permite ejecutar un conjunto de comandos **varias veces**.

En Bash, los bucles más comunes son:

- `for`
- `while`

---

# Bucle `for`

El bucle `for` se utiliza cuando queremos **recorrer una lista de valores**.

La estructura básica es:

```bash
for variable in lista
do
  comandos
done
```

---

# Ejemplo simple

```bash
#!/bin/bash

for nombre in Ana Luis Pedro
do
echo "Hola $nombre"
done
```

La salida será:

```
Hola Ana
Hola Luis
Hola Pedro
```

El bucle ejecuta el comando una vez por cada elemento de la lista.

---

# Recorrer archivos

Un uso muy común del bucle `for` es recorrer archivos en un directorio.

Ejemplo:

```bash
for archivo in *.txt
do
echo "Archivo encontrado: $archivo"
done
```

Esto recorrerá todos los archivos con extensión `.txt`.

---

# Bucle `while`

El bucle `while` se utiliza cuando queremos repetir acciones **mientras una condición sea verdadera**.

La estructura es:

```bash
while [ condición ]
do
  comandos
done
```

---

# Ejemplo con números

```bash
#!/bin/bash

contador=1

while [ $contador -le 5 ]
do
echo "Número: $contador"
contador=$((contador + 1))
done
```

Salida:

```
Número: 1
Número: 2
Número: 3
Número: 4
Número: 5
```

El bucle se ejecuta hasta que la condición deja de cumplirse.

---

# Incrementar valores

En Bash se puede incrementar un número usando:

```bash
contador=$((contador + 1))
```

Esto realiza una operación aritmética.

---

# Cuándo usar cada bucle

`for` se utiliza cuando:

- conocemos la lista de elementos
- recorremos archivos
- iteramos sobre valores específicos

---

`while` se utiliza cuando:

- una condición controla el bucle
- no sabemos cuántas veces se ejecutará
- dependemos de un estado o variable

---

# Ejemplo práctico

Un script que recorre archivos de un directorio:

```bash
#!/bin/bash

for archivoin *
do
echo "Procesando: $archivo"
done
```

Esto muestra todos los archivos del directorio actual.

---

# Idea clave de esta lección

Los bucles permiten repetir comandos automáticamente dentro de scripts de Bash.

---

# Repaso

- Un bucle repite acciones.
- `for` recorre listas de valores.
- `while` repite acciones mientras una condición sea verdadera.
- Los bucles son útiles para procesar múltiples archivos o datos.
- Son una herramienta esencial para automatizar tareas.
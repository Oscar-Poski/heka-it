---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: automatizacion-y-scripting
lessonSlug: 02-primer-script-en-bash
title: "Primer script en Bash"

summary: "Crear y ejecutar el primer script en Bash para automatizar comandos en Linux."

durationMinutes: 8

objectives:

- "Crear un archivo de script en Bash"
- "Ejecutar un script desde la terminal"
- "Comprender la estructura básica de un script"
    
order: 2
    

---

# Primer script en Bash

Una de las ventajas de Bash es que permite **automatizar comandos**.

En lugar de escribir los mismos comandos una y otra vez, podemos guardarlos en un **script**.

Un **script de Bash** es simplemente un archivo que contiene una lista de comandos que se ejecutarán en orden.

---

# Crear un archivo de script

Primero crearemos un archivo para nuestro script.

Por ejemplo:

```bash
nano primer_script.sh
```

La extensión `.sh` no es obligatoria, pero es una convención común para scripts de Bash.

---

# Estructura básica de un script

Dentro del archivo escribimos algo como esto:

```bash
#!/bin/bash

echo "Hola, este es mi primer script"
echo "Estoy aprendiendo Bash"
```

La primera línea:

```bash
#!/bin/bash
```

se llama **shebang**.

Indica que el script debe ejecutarse usando **Bash**.

Las líneas `echo` muestran texto en la terminal.

---

# Guardar el script

Después de escribir el contenido:

1. guarda el archivo
2. cierra el editor

Si usas `nano`:

```
Ctrl + O
Enter
Ctrl + X
```

---

# Dar permisos de ejecución

Antes de ejecutar el script debemos darle permisos de ejecución.

Esto se hace con:

```bash
chmod +x primer_script.sh
```

Esto permite que el archivo se ejecute como un programa.

---

# Ejecutar el script

Ahora podemos ejecutar el script usando:

```bash
./primer_script.sh
```

La salida será algo como:

```
Hola, este es mi primer script
Estoy aprendiendo Bash
```

El prefijo `./` indica que el archivo está en el **directorio actual**.

---

# Otra forma de ejecutar un script

También puedes ejecutar el script directamente con Bash:

```bash
bash primer_script.sh
```

Esto ejecuta el script sin necesidad de cambiar permisos.

---

# Qué ocurre cuando se ejecuta un script

Cuando ejecutas un script de Bash:

1. Bash lee el archivo línea por línea
2. interpreta cada comando
3. ejecuta los comandos en orden

Esto permite automatizar tareas repetitivas fácilmente.

---

# Ejemplo práctico

Un script sencillo podría ser:

```bash
#!/bin/bash

echo "Directorio actual:"
pwd

echo "Archivos en este directorio:"
ls
```

Este script muestra el directorio actual y luego lista los archivos.

---

# Idea clave de esta lección

Un script de Bash es un archivo que contiene comandos que el sistema ejecuta automáticamente en orden.

---

# Repaso

- Un script es un archivo con comandos de Bash.
- `#!/bin/bash` indica el intérprete del script.
- `chmod +x archivo.sh` da permisos de ejecución.
- `./archivo.sh` ejecuta el script.
- Los scripts permiten automatizar tareas.
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 05-comandos-basicos-de-manipulacion-de-archivos
title: "Comandos básicos de manipulación de archivos"

summary: "Aprender los comandos esenciales para crear, copiar, mover y eliminar archivos y directorios en Linux."

durationMinutes: 8

objectives:

- "Crear archivos y directorios desde la terminal"
- "Copiar y mover archivos dentro del sistema"
- "Eliminar archivos y carpetas de forma segura"
    
order: 5
    

---

# Comandos básicos de manipulación de archivos

Una vez que sabes **navegar por el sistema de archivos**, el siguiente paso es aprender a **trabajar con archivos y carpetas**.

En Linux, muchas de estas tareas se realizan mediante comandos en la terminal.

En esta lección veremos algunos de los más importantes:

- `touch`
- `mkdir`
- `cp`
- `mv`
- `rm`

Estos comandos permiten **crear, copiar, mover y eliminar archivos o directorios**.

---

# Crear archivos con `touch`

El comando `touch` permite crear un archivo vacío.

Por ejemplo:

```bash
touch archivo.txt
```

Después de ejecutar el comando, el archivo aparecerá en el directorio actual.

Puedes comprobarlo con:

```bash
ls
```

Verás algo como:

```
archivo.txt
```

Aunque el archivo esté vacío, ahora ya existe dentro del sistema.

---

# Crear directorios con `mkdir`

Para crear una carpeta usamos el comando:

```bash
mkdir
```

Por ejemplo:

```bash
mkdir proyectos
```

Esto crea un directorio llamado `proyectos`.

Si ejecutas:

```bash
ls
```

verás el nuevo directorio en la lista.

Luego puedes entrar en él con:

```bash
cd proyectos
```

---

# Copiar archivos con `cp`

El comando `cp` se utiliza para **copiar archivos o directorios**.

Ejemplo:

```bash
cp archivo.txt copia.txt
```

Esto crea una copia del archivo con otro nombre.

Después de ejecutar el comando, `ls` mostraría algo como:

```
archivo.txt  copia.txt
```

---

# Mover o renombrar archivos con `mv`

El comando `mv` se utiliza para:

- mover archivos entre carpetas
- cambiar el nombre de un archivo

Por ejemplo, para renombrar un archivo:

```bash
mv archivo.txt notas.txt
```

Ahora el archivo se llama `notas.txt`.

También puedes mover archivos a otra carpeta.

Ejemplo:

```bash
mv notas.txt proyectos/
```

Esto mueve el archivo al directorio `proyectos`.

---

# Eliminar archivos con `rm`

Para eliminar archivos se utiliza el comando:

```bash
rm
```

Por ejemplo:

```bash
rm notas.txt
```

Este comando elimina el archivo.

Después de ejecutarlo, el archivo ya no aparecerá en `ls`.

---

# Eliminar directorios

Para eliminar un directorio vacío puedes usar:

```bash
rmdir nombre_directorio
```

Por ejemplo:

```bash
rmdir proyectos
```

Sin embargo, si el directorio contiene archivos, este comando no funcionará.

En ese caso se utilizan otras opciones más avanzadas que veremos más adelante.

---

# Precaución con `rm`

El comando `rm` elimina archivos **de forma permanente**.

A diferencia de algunos sistemas gráficos, en la terminal normalmente **no existe papelera de reciclaje**.

Por eso es importante revisar bien qué archivo estás eliminando antes de ejecutar el comando.

---

# Flujo básico de trabajo

Un flujo típico cuando trabajas con archivos puede verse así:

```bash
mkdir trabajo
cd trabajo
touch notas.txt
cp notas.txt copia.txt
mv copia.txt respaldo.txt
ls
```

Esto crea un directorio, entra en él, crea archivos y los manipula.

---

# Idea clave de esta lección

Linux ofrece comandos simples pero muy poderosos para manipular archivos y directorios.

Con `touch`, `mkdir`, `cp`, `mv` y `rm` puedes realizar la mayoría de las tareas básicas de administración de archivos desde la terminal.

---

# Repaso

- `touch` crea archivos vacíos.
- `mkdir` crea directorios.
- `cp` copia archivos.
- `mv` mueve o renombra archivos.
- `rm` elimina archivos.
- `rmdir` elimina directorios vacíos.
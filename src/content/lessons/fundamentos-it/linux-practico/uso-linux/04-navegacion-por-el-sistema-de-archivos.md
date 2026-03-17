---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 04-navegacion-por-el-sistema-de-archivos
title: "Navegación por el Sistema"

summary: "Aprender a moverse dentro del sistema de archivos de Linux utilizando comandos básicos de la terminal."

durationMinutes: 8

objectives:

- "Entender cómo se organiza el sistema de archivos en Linux"
- "Aprender a cambiar de directorio usando la terminal"
- "Explorar carpetas y ubicaciones dentro del sistema"
    
order: 4
    

---

# Navegación por el sistema de archivos

Para trabajar con Linux es fundamental saber **moverse dentro del sistema de archivos**.

El sistema de archivos es la forma en que el sistema operativo organiza:

- archivos
- carpetas
- programas
- configuraciones

En esta lección aprenderás a **explorar y navegar por el sistema** usando algunos comandos básicos de la terminal.

---

# ¿Qué es el sistema de archivos?

El **sistema de archivos** es la estructura que organiza toda la información almacenada en el disco.

En Linux, todo se organiza en forma de **árbol de directorios**.

En la parte superior de ese árbol está el **directorio raíz**, representado por:

```
/
```

Desde ese punto se ramifican todas las demás carpetas del sistema.

Por ejemplo:

```
/
├── home
├── etc
├── var
├── usr
```

Cada carpeta puede contener más carpetas y archivos.

---

# Directorio actual

Cuando trabajas en la terminal siempre te encuentras en una ubicación específica del sistema.

A esto se le llama **directorio actual** o **directorio de trabajo**.

Puedes ver tu ubicación actual usando:

```bash
usuario@equipo:~$ pwd
```

Por ejemplo, podrías ver algo como:

```bash
usuario@equipo:~$ pwd
/home/usuario
```

Esto significa que actualmente estás dentro del directorio personal del usuario.

---

# Listar contenido con `ls`

Para ver los archivos y carpetas dentro del directorio actual usamos:

```bash
usuario@equipo:~$ ls
```

Esto muestra el contenido del directorio.

Por ejemplo:

```bash
usuario@equipo:~$ ls
documentos/  fotos/  proyectos/  notas.txt
```

Esto permite explorar el sistema paso a paso.

---

# Cambiar de directorio con `cd`

El comando principal para navegar entre carpetas es:

```bash
usuario@equipo:~$ cd
```

`cd` significa **change directory**.

Por ejemplo:

```bash
usuario@equipo:~$ cd Documentos
```

Esto cambia tu ubicación al directorio llamado `Documentos`.

Si después ejecutas:

```bash
usuario@equipo:~$ pwd
```

podrías ver algo como:

```bash
usuario@equipo:~$ pwd
/home/usuario/Documentos
```

---

# Volver al directorio anterior

Si quieres subir un nivel en la estructura de carpetas puedes usar:

```bash
usuario@equipo:~$ cd ..
```

Los dos puntos (`..`) representan **el directorio padre**, es decir, la carpeta que contiene la actual.

Por ejemplo:

```bash
usuario@equipo:~$ pwd
/home/usuario/Documentos
```

si ejecutas:

```bash
usuario@equipo:~$ cd ..
```

terminarás en:

```
/home/usuario
```

---

# Ir directamente al directorio personal

Existe una forma rápida de volver a tu directorio personal.

Simplemente ejecuta:

```bash
usuario@equipo:~$ cd
```

o también:

```bash
usuario@equipo:~$ cd ~
```

El símbolo `~` representa **el directorio personal del usuario**.

---

# Rutas absolutas y relativas

Cuando navegas por el sistema puedes usar dos tipos de rutas.

## Ruta absoluta

Una **ruta absoluta** comienza desde la raíz del sistema.

Ejemplo:

```bash
usuario@equipo:~$ cd /home/usuario/Documentos
```

Esta ruta funciona desde cualquier lugar del sistema.

---

## Ruta relativa

Una **ruta relativa** se interpreta desde tu ubicación actual.

Por ejemplo, si estás en:

```bash
usuario@equipo:~$ pwd
usuario@equipo:~$ /home/usuario
```

puedes entrar a Documentos con:

```bash
usuario@equipo:~$ cd Documentos
```

La ruta no empieza desde `/`, sino desde tu posición actual.

---

# Explorando el sistema paso a paso

Una forma común de explorar el sistema es combinar `ls` y `cd`.

Por ejemplo:

```bash
usuario@equipo:~$ ls
documentos/  fotos/  proyectos/  notas.txt
usuario@equipo:~$ cd Documentos
usuario@equipo:~$ ls
tareas/  idea1.txt idea2.txt
usuario@equipo:~$ cd ..
```

Este flujo te permite:

1. ver qué hay en un directorio
2. entrar en una carpeta
3. ver su contenido
4. regresar al directorio anterior

---

# Idea clave de esta lección

El sistema de archivos de Linux está organizado como un árbol de directorios que comienza en la raíz `/`.

Los comandos `pwd`, `ls` y `cd` permiten navegar y explorar esa estructura desde la terminal.

---

# Repaso

- El sistema de archivos organiza toda la información del sistema.
- `/` representa el directorio raíz.
- `pwd` muestra el directorio actual.
- `ls` lista archivos y carpetas.
- `cd` permite cambiar de directorio.
- `cd ..` sube un nivel en la estructura.
- `cd ~` regresa al directorio personal.
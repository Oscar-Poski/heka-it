---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: sistema-archivos-linux
lessonSlug: 01-como-funciona-el-sistema-de-archivos-en-linux
title: "¿Cómo funciona el sistema de archivos en Linux?"

summary: "Entender cómo Linux organiza archivos y directorios dentro del sistema y cómo se estructura el almacenamiento."

durationMinutes: 8

objectives:

- "Comprender qué es un sistema de archivos"
- "Entender cómo Linux organiza archivos y directorios"
- "Conocer la estructura jerárquica del almacenamiento"
    
order: 1
    

---

# ¿Cómo funciona el sistema de archivos en Linux?

El **sistema de archivos** es la forma en que un sistema operativo organiza y almacena la información dentro de los discos.

Cada documento, imagen, programa o configuración que existe en Linux está guardado como **archivo dentro del sistema de archivos**.

Para trabajar de forma efectiva en Linux es importante entender **cómo se organiza esta información**.

---

# Todo es un archivo

Una de las ideas más importantes en Linux es la siguiente:

> En Linux, casi todo se trata como un archivo.
> 

Esto incluye:

- documentos
- configuraciones del sistema
- dispositivos de hardware
- procesos
- registros del sistema

Este diseño hace que el sistema sea **consistente y flexible**, porque muchas herramientas pueden trabajar con diferentes tipos de información de la misma manera.

---

# Estructura jerárquica

El sistema de archivos en Linux está organizado como un **árbol jerárquico de directorios**.

En la parte superior del árbol se encuentra el **directorio raíz**, representado por:

```
/
```

Desde este punto se ramifican todos los demás directorios.

Un ejemplo simplificado podría verse así:

```
/
├── home
│   └── usuario
│       ├── Documentos
│       └── Descargas
├── etc
├── var
└── usr
```

Cada carpeta puede contener otras carpetas o archivos.

---

# El directorio raíz

El directorio raíz `/` es el punto inicial del sistema de archivos.

A diferencia de otros sistemas operativos, Linux no organiza los discos como letras separadas (por ejemplo `C:` o `D:`).

En Linux todo el sistema se organiza dentro de **una sola estructura que comienza en `/`**.

Esto significa que cualquier archivo del sistema tiene una ruta que comienza desde ese punto.

Por ejemplo:

```
/home/oscar/Documentos/notas.txt
```

---

# Directorios y archivos

Dentro del sistema de archivos existen dos tipos principales de elementos:

**Archivos**

Contienen información, por ejemplo:

- documentos
- imágenes
- programas
- scripts

**Directorios**

Son carpetas que organizan archivos y otros directorios.

Esto permite estructurar la información de forma ordenada.

---

# Rutas dentro del sistema

Para ubicar archivos dentro del sistema utilizamos **rutas**.

Una ruta indica la ubicación exacta de un archivo o directorio.

Ejemplo:

```
/home/oscar/Documentos
```

Esta ruta indica:

- directorio raíz `/`
- carpeta `home`
- usuario `oscar`
- carpeta `Documentos`

Las rutas permiten navegar y trabajar con archivos desde la terminal.

---

# Sistemas de archivos en el disco

El sistema de archivos también define **cómo se almacenan físicamente los datos en el disco**.

Existen distintos tipos de sistemas de archivos en Linux, por ejemplo:

- ext4
- xfs
- btrfs

Estos sistemas determinan cosas como:

- cómo se guardan los archivos
- cómo se recuperan los datos
- cómo se maneja el espacio en disco

Para el usuario, estas diferencias suelen ser transparentes, pero son importantes a nivel del sistema.

---

# Un diseño pensado para organización

La estructura del sistema de archivos en Linux está diseñada para mantener el sistema organizado.

Cada tipo de información suele tener su propio lugar.

Por ejemplo:

- archivos personales del usuario
- configuraciones del sistema
- programas instalados
- archivos temporales
- registros del sistema

Más adelante veremos con detalle algunos de estos directorios.

---

# Idea clave de esta lección

El sistema de archivos de Linux organiza toda la información en una estructura jerárquica que comienza en el directorio raíz `/`.

Todo en el sistema —desde documentos hasta configuraciones— se almacena como archivos dentro de esta estructura.

---

# Repaso

- El sistema de archivos organiza la información en el disco.
- En Linux casi todo se trata como un archivo.
- La estructura del sistema se organiza como un árbol de directorios.
- El directorio raíz `/` es el punto inicial del sistema.
- Los archivos se ubican mediante rutas dentro de esta estructura.
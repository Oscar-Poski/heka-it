---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: sistema-archivos-linux
lessonSlug: 02-estructura-del-sistema-de-directorios-fhs
title: "Estructura del sistema de directorios (FHS)"

summary: "Entender cómo se organiza el sistema de directorios en Linux según el estándar Filesystem Hierarchy Standard (FHS)."

durationMinutes: 8

objectives:

- "Comprender qué es el Filesystem Hierarchy Standard (FHS)"
- "Identificar los directorios principales del sistema"
- "Entender el propósito general de cada parte del sistema de archivos"
    
order: 2
    

---

# Estructura del sistema de directorios (FHS)

En Linux, el sistema de archivos sigue una organización bastante consistente entre diferentes distribuciones.

Esto no ocurre por casualidad.

Existe un estándar llamado **Filesystem Hierarchy Standard**, o **FHS**.

Este estándar define **cómo deben organizarse los directorios dentro del sistema**.

Gracias a esto, un administrador que conoce Linux puede orientarse fácilmente en diferentes distribuciones.

---

# ¿Qué es el FHS?

El **Filesystem Hierarchy Standard (FHS)** es una especificación que define:

- qué directorios existen en Linux
- qué tipo de archivos se almacenan en cada uno
- cómo se organiza la información dentro del sistema

El objetivo es mantener **consistencia entre sistemas Linux**.

Esto facilita tareas como:

- administración de sistemas
- desarrollo de software
- instalación de programas
- mantenimiento del sistema

---

# El punto de inicio: `/`

Todos los directorios del sistema cuelgan del **directorio raíz**:

```
/
```

Desde este punto se organizan todas las carpetas principales del sistema.

Un ejemplo simplificado podría verse así:

```
/
├── bin
├── boot
├── dev
├── etc
├── home
├── lib
├── tmp
├── usr
└── var
```

Cada uno de estos directorios tiene un propósito específico.

---

# Directorios importantes del sistema

A continuación veremos algunos de los directorios más importantes definidos por el estándar.

---


# `/home` — archivos de los usuarios

El directorio `/home` contiene los **directorios personales de los usuarios del sistema**.

Por ejemplo:

```
/home/oscar
/home/ana
/home/luis
```

Cada usuario tiene su propio directorio donde guarda:

- documentos
- descargas
- configuraciones personales
- archivos de trabajo

Cuando un usuario inicia sesión, normalmente comienza su sesión dentro de su propio directorio.

Puedes comprobar tu ubicación con:

```
pwd
```

---

# `/etc` — configuración del sistema

El directorio `/etc` contiene **archivos de configuración del sistema**.

Aquí se almacenan configuraciones relacionadas con:

- usuarios
- red
- servicios
- aplicaciones instaladas
- configuración del sistema operativo

Muchos de estos archivos son **archivos de texto**, lo que permite editarlos con herramientas como `nano` o `vim`.

Por ejemplo, algunos archivos importantes dentro de `/etc` incluyen configuraciones de:

- cuentas de usuario
- DNS
- servicios del sistema

---

# `/var` — datos que cambian constantemente

El directorio `/var` contiene archivos que **cambian frecuentemente durante la operación del sistema**.

Entre ellos se encuentran:

- archivos de log
- colas de correo
- cachés de aplicaciones
- archivos temporales generados por servicios

Uno de los subdirectorios más importantes es:

```
/var/log
```

Aquí se guardan muchos **registros del sistema**, que son útiles para diagnosticar problemas.

---

# `/tmp` — archivos temporales

El directorio `/tmp` se utiliza para almacenar **archivos temporales**.

Muchos programas usan esta carpeta para guardar datos que solo necesitan durante un corto periodo de tiempo.

Por ejemplo:

- archivos temporales de programas
- datos intermedios de procesos
- archivos temporales del sistema

En muchos sistemas, el contenido de `/tmp` se elimina automáticamente al reiniciar.

---

# `/usr` — programas y herramientas del sistema

El directorio `/usr` contiene gran parte del software instalado en el sistema.

Aquí suelen encontrarse:

- aplicaciones
- bibliotecas
- herramientas de usuario
- documentación

Por ejemplo, muchos programas instalados mediante el gestor de paquetes terminan en subdirectorios dentro de `/usr`.

---

# `/bin` — comandos esenciales

El directorio `/bin` contiene **comandos esenciales del sistema**.

Estos son programas básicos que deben estar disponibles incluso en situaciones de recuperación.

Entre los comandos que suelen encontrarse aquí están:

- `ls`
- `cp`
- `mv`
- `cat`
- `echo`

Estos comandos permiten realizar operaciones fundamentales dentro del sistema.

---

# `/boot` — archivos de arranque

El directorio `/boot` contiene archivos necesarios para **iniciar el sistema operativo**.

Aquí se encuentran:

- el kernel de Linux
- archivos del cargador de arranque
- configuraciones relacionadas con el arranque

Cuando la computadora se enciende, el sistema utiliza estos archivos para iniciar Linux.

---

# `/dev` — dispositivos del sistema

En Linux, muchos dispositivos se representan como **archivos dentro del sistema**.

Estos archivos se encuentran en el directorio `/dev`.

Aquí pueden aparecer archivos que representan:

- discos
- particiones
- dispositivos USB
- terminales
- dispositivos de entrada

Esto refleja una idea fundamental de Linux:

> muchos recursos del sistema pueden tratarse como archivos.
> 

---

# Una estructura pensada para orden

El FHS permite que Linux mantenga una estructura clara y organizada.

Cada directorio tiene un propósito específico.

Esto facilita:

- localizar archivos
- administrar el sistema
- instalar software
- mantener consistencia entre sistemas

Aunque algunas distribuciones puedan variar ligeramente, la estructura general suele mantenerse muy similar.

---

# Idea clave de esta lección

El **Filesystem Hierarchy Standard (FHS)** define cómo se organizan los directorios dentro del sistema de archivos de Linux.

Gracias a este estándar, diferentes distribuciones mantienen una estructura coherente y predecible.

Linux organiza el sistema en directorios con propósitos específicos.

Conocer directorios importantes como `/home`, `/etc`, `/var` y `/usr` facilita entender dónde se guardan los archivos y configuraciones dentro del sistema.

---

# Repaso

- El FHS define cómo se organizan los directorios en Linux.
- `/` es el directorio raíz del sistema.
- `/home` contiene los archivos personales de los usuarios.
- `/etc` guarda configuraciones del sistema.
- `/var` contiene datos que cambian frecuentemente.
- `/tmp` se utiliza para archivos temporales.
- `/usr` contiene muchos programas instalados.
- `/bin` incluye comandos esenciales del sistema.
- `/boot` contiene archivos necesarios para arrancar el sistema.
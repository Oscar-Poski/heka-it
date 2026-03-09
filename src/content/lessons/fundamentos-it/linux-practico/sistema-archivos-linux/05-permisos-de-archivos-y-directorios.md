---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: sistema-archivos-linux
lessonSlug: 05-permisos-de-archivos-y-directorios
title: "Permisos de archivos y directorios"

summary: "Entender cómo funcionan los permisos en Linux y cómo controlan quién puede leer, modificar o ejecutar archivos."

durationMinutes: 9

objectives:

- "Comprender el sistema de permisos en Linux"
- "Interpretar los permisos mostrados por el comando ls -l"
- "Entender cómo los permisos protegen el sistema"
    
order: 5
    

---

# Permisos de archivos y directorios

Linux es un sistema diseñado para ser **seguro y multiusuario**.

Esto significa que diferentes usuarios pueden utilizar el mismo sistema, pero no necesariamente tienen acceso a todos los archivos.

Para controlar esto, Linux utiliza un sistema de **permisos de archivos y directorios**.

Estos permisos determinan:

- quién puede leer un archivo
- quién puede modificarlo
- quién puede ejecutarlo

---

# Ver permisos con `ls -l`

Para ver los permisos de archivos y directorios puedes usar:

```bash
ls -l
```

La salida podría verse algo así:

```
-rw-r--r-- 1 oscar oscar  1200 mar 10 10:00 archivo.txt
```

La primera parte contiene información sobre los **permisos del archivo**.

```
-rw-r--r--
```

Aunque al principio parece confuso, esta cadena sigue una estructura clara.

---

# Tipos de permisos

En Linux existen tres tipos básicos de permisos.

**Lectura (read)**

Permite ver el contenido de un archivo.

Representado por:

```
r
```

---

**Escritura (write)**

Permite modificar el archivo.

Representado por:

```
w
```

---

**Ejecución (execute)**

Permite ejecutar el archivo como un programa o script.

Representado por:

```
x
```

---

# Tres grupos de usuarios

Los permisos se dividen en tres grupos.

Cada archivo tiene permisos para:

1. **Propietario (owner)**
2. **Grupo (group)**
3. **Otros usuarios (others)**

La cadena de permisos se divide así:

```
-rw-r--r--
```

Se interpreta como:

```
[ tipo ][ propietario ][ grupo ][ otros ]
```

Ejemplo visual:

```
- rw- r-- r--
  │   │   │
  │   │   └── permisos para otros
  │   └────── permisos para el grupo
  └────────── permisos para el propietario
```

---

# Tipo de archivo

El primer carácter indica el **tipo de archivo**.

Ejemplos comunes:

```
-  archivo normal
d  directorio
l  enlace simbólico
```

Por ejemplo:

```
drwxr-xr-x
```

indica que se trata de un **directorio**.

---

# Ejemplo completo

Observa este ejemplo:

```
-rw-r--r--
```

Esto significa:

**Propietario**

```
rw-
```

Puede:

- leer
- escribir

Pero no ejecutar.

---

**Grupo**

```
r--
```

Puede:

- leer

Pero no escribir ni ejecutar.

---

**Otros usuarios**

```
r--
```

También solo pueden leer.

---

# Permisos en directorios

Los permisos funcionan de forma un poco distinta en directorios.

**Lectura (r)**

Permite ver el contenido del directorio.

**Escritura (w)**

Permite crear o eliminar archivos dentro del directorio.

**Ejecución (x)**

Permite entrar al directorio usando `cd`.

Por ejemplo:

```
drwxr-xr-x
```

Esto significa que el propietario puede leer, escribir y entrar al directorio.

Otros usuarios pueden leer su contenido y acceder a él.

---

# ¿Por qué son importantes los permisos?

Los permisos permiten proteger el sistema.

Gracias a ellos:

- los usuarios no pueden modificar archivos de otros usuarios
- los programas no pueden cambiar configuraciones críticas sin permiso
- el sistema puede controlar quién ejecuta ciertos programas

Este modelo es una de las razones por las que Linux es considerado un sistema muy seguro.

---

# Idea clave de esta lección

Los permisos de archivos y directorios determinan quién puede leer, modificar o ejecutar archivos dentro del sistema.

Cada archivo tiene permisos para tres grupos: propietario, grupo y otros usuarios.

---

# Repaso

- Linux usa permisos para controlar acceso a archivos.
- Los permisos principales son lectura (`r`), escritura (`w`) y ejecución (`x`).
- Los permisos se aplican a propietario, grupo y otros usuarios.
- `ls -l` permite ver los permisos de archivos.
- Los permisos ayudan a mantener el sistema seguro.

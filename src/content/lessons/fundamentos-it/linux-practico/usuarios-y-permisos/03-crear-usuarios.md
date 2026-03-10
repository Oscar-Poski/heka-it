---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: usuarios-y-permisos
lessonSlug: 03-crear-usuarios
title: "Crear usuarios"

summary: "Aprender a crear nuevas cuentas de usuario en Linux utilizando herramientas básicas de administración."

durationMinutes: 8

objectives:

- "Crear un nuevo usuario en el sistema"
- "Entender qué ocurre cuando se crea una cuenta"
- "Asignar una contraseña a un usuario"
    
order: 3
    

---

# Crear usuarios

En Linux, una tarea común de administración es **crear nuevas cuentas de usuario**.

Esto es necesario cuando:

- varias personas utilizan el mismo sistema
- se administran servidores
- se quiere separar entornos de trabajo
- se crean cuentas para desarrolladores o administradores

Linux incluye herramientas para crear y administrar usuarios de forma sencilla.

---

# El comando `useradd`

El comando más básico para crear usuarios es:

```bash
useradd
```

La estructura general es:

```bash
sudo useradd nombre_usuario
```

Por ejemplo:

```bash
sudo useradd ana
```

Esto crea un nuevo usuario llamado `ana`.

Sin embargo, este comando solo crea la cuenta básica.

No crea automáticamente una contraseña ni un directorio personal.

---

# Crear usuario con directorio personal

Para crear un usuario junto con su directorio personal se utiliza:

```bash
sudo useradd -m nombre_usuario
```

Ejemplo:

```bash
sudo useradd -m ana
```

La opción `-m` indica que el sistema debe crear el directorio:

```
/home/ana
```

Este directorio será el espacio personal del usuario.

---

# Asignar una contraseña

Después de crear un usuario es necesario asignar una contraseña.

Esto se hace con el comando:

```bash
sudo passwd nombre_usuario
```

Ejemplo:

```bash
sudo passwd ana
```

El sistema pedirá escribir la contraseña dos veces.

Una vez asignada, el usuario podrá iniciar sesión.

---

# Qué ocurre al crear un usuario

Cuando se crea un usuario en Linux ocurren varias cosas.

Normalmente el sistema:

- asigna un **UID** (identificador de usuario)
- crea un **grupo principal**
- crea un **directorio personal** si se usa `m`
- copia archivos de configuración inicial

Estos archivos suelen venir de:

```
/etc/skel
```

Este directorio contiene configuraciones iniciales que se copian al nuevo usuario.

---

# Ver usuarios del sistema

Los usuarios del sistema se almacenan en el archivo:

```
/etc/passwd
```

Puedes ver su contenido con:

```bash
cat /etc/passwd
```

Cada línea representa un usuario del sistema.

---

# Ejemplo práctico completo

Un flujo típico para crear un usuario sería:

## Paso 1: crear el usuario

```bash
sudo useradd -m dev1
```

## Paso 2: asignar contraseña

```bash
sudo passwd dev1
```

Después de esto, el usuario ya puede iniciar sesión en el sistema.

---

# Comando alternativo: `adduser`

En muchas distribuciones también existe un comando más amigable:

```bash
sudo adduser nombre_usuario
```

Este comando guía el proceso paso a paso.

Por ejemplo:

```bash
sudo adduser ana
```

El sistema preguntará:

- contraseña
- información opcional del usuario
- confirmación de datos

Esto simplifica la creación de usuarios.

---

# Idea clave de esta lección

Linux permite crear nuevas cuentas con herramientas como `useradd` o `adduser`.

Cada usuario tiene un identificador, un directorio personal y permisos propios dentro del sistema.

---

# Repaso

- `useradd` crea nuevas cuentas de usuario.
- `useradd -m` crea también el directorio personal.
- `passwd` permite asignar una contraseña.
- Los usuarios se registran en `/etc/passwd`.
- `adduser` es una versión más interactiva del proceso.
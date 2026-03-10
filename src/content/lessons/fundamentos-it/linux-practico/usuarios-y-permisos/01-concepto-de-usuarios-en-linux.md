---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: usuarios-y-permisos
lessonSlug: 01-concepto-de-usuarios-en-linux
title: "Concepto de usuarios en Linux"

summary: "Entender qué es un usuario en Linux, por qué existen y cómo ayudan a organizar y proteger el sistema."

durationMinutes: 7

objectives:

- "Comprender qué representa un usuario en Linux"
- "Entender por qué Linux utiliza múltiples usuarios"
- "Reconocer los elementos básicos asociados a un usuario"
    
order: 1
    

---

# Concepto de usuarios en Linux

Linux fue diseñado desde sus inicios como un sistema **multiusuario**.

Esto significa que varias personas pueden usar el mismo sistema al mismo tiempo, cada una con su propia cuenta.

Para lograr esto, el sistema utiliza el concepto de **usuarios**.

Un usuario representa una **identidad dentro del sistema operativo**.

Cada acción que ocurre en Linux está asociada a algún usuario.

---

# ¿Qué es un usuario?

Un **usuario** es una cuenta que permite acceder al sistema.

Cada usuario tiene:

- un nombre de usuario
- una contraseña
- un identificador interno en el sistema
- un directorio personal
- permisos específicos

Por ejemplo, en un sistema podrían existir usuarios como:

```
oscar
ana
luis
```

Cada uno tendrá su propio entorno de trabajo dentro del sistema.

---

# El directorio personal del usuario

Cada usuario tiene un **directorio personal** donde guarda sus archivos.

Normalmente se encuentra dentro de:

```
/home
```

Por ejemplo:

```
/home/oscar
/home/ana
/home/luis
```

Dentro de este directorio el usuario puede crear:

- documentos
- configuraciones
- scripts
- proyectos

Otros usuarios normalmente no pueden modificar estos archivos sin permiso.

---

# ¿Por qué Linux usa múltiples usuarios?

El modelo de usuarios permite varias cosas importantes.

## Separación de datos

Cada usuario tiene su propio espacio de trabajo.

Esto evita que los archivos personales de un usuario interfieran con los de otro.

---

## Seguridad

Los usuarios no pueden modificar archivos del sistema o de otros usuarios sin permisos adecuados.

Esto protege el sistema contra errores o acciones malintencionadas.

---

## Control de acceso

Los administradores pueden decidir:

- quién puede usar el sistema
- qué programas puede ejecutar cada usuario
- a qué archivos puede acceder

Esto es muy importante en servidores o sistemas compartidos.

---

# Identidad del usuario en el sistema

Internamente, Linux identifica a los usuarios mediante un **UID** (User ID).

Este es un número que representa al usuario dentro del sistema.

Por ejemplo:

- el usuario normal podría tener UID 1000
- otro usuario podría tener UID 1001

El sistema utiliza estos identificadores para manejar permisos y accesos.

---

# El usuario activo

Cuando inicias sesión en Linux, el sistema te identifica como un usuario específico.

Puedes verificar qué usuario está activo con:

```bash
whoami
```

La terminal mostrará tu nombre de usuario actual.

Esto es útil porque muchas acciones dependen del usuario que ejecuta el comando.

---

# Usuarios del sistema

Además de los usuarios humanos, Linux también crea **usuarios del sistema**.

Estos usuarios son utilizados por servicios y programas.

Por ejemplo:

- servicios web
- bases de datos
- procesos del sistema

Estos usuarios ayudan a mantener el sistema organizado y seguro.

---

# Idea clave de esta lección

Un usuario en Linux representa una identidad dentro del sistema.

El sistema utiliza usuarios para organizar el acceso, proteger archivos y permitir que múltiples personas utilicen el mismo sistema de forma segura.

---

# Repaso

- Linux es un sistema multiusuario.
- Cada usuario tiene su propia cuenta.
- Cada usuario tiene un directorio personal dentro de `/home`.
- Los usuarios ayudan a mantener seguridad y organización.
- Linux identifica a los usuarios mediante un UID.
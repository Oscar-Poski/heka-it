---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: usuarios-y-permisos
lessonSlug: 06-archivos-importantes-de-usuarios-etc-passwd-etc-shadow
title: "Archivos importantes de usuarios (/etc/passwd, /etc/shadow)"

summary: "Entender los archivos principales donde Linux almacena información sobre usuarios y contraseñas."

durationMinutes: 8

objectives:

- "Comprender dónde Linux guarda la información de usuarios"
- "Explorar el archivo /etc/passwd"
- "Entender el propósito del archivo /etc/shadow"
    
order: 6
    

---

# Archivos importantes de usuarios (`/etc/passwd`, `/etc/shadow`)

Linux almacena la información de los usuarios en **archivos especiales del sistema**.

Estos archivos permiten que el sistema sepa:

- qué usuarios existen
- qué identificador tiene cada usuario
- qué directorio personal utiliza
- qué shell usa al iniciar sesión
- cómo se gestionan las contraseñas

Los dos archivos más importantes para esto son:

```
/etc/passwd
/etc/shadow
```

---

# El archivo `/etc/passwd`

El archivo `/etc/passwd` contiene **información básica de todos los usuarios del sistema**.

Puedes ver su contenido con:

```bash
cat /etc/passwd
```

Cada línea representa un usuario.

Un ejemplo simplificado podría verse así:

```
oscar:x:1000:1000:Oscar:/home/oscar:/bin/bash
```

Los campos están separados por dos puntos `:`.

---

# Campos del archivo `/etc/passwd`

Cada línea del archivo contiene varios campos.

```
usuario:password:UID:GID:comentario:home:shell
```

Veamos qué significa cada uno.

---

## Nombre de usuario

```
oscar
```

Es el nombre de la cuenta.

---

## Campo de contraseña

```
x
```

Antiguamente aquí se almacenaba la contraseña.

Hoy en día solo aparece una `x`, indicando que la contraseña real está almacenada en otro archivo más seguro.

---

## UID (User ID)

```
1000
```

Es el identificador numérico del usuario.

Linux utiliza este número internamente para manejar permisos.

---

## GID (Group ID)

```
1000
```

Es el identificador del grupo principal del usuario.

---

## Campo de comentario

```
Oscar
```

Suele contener información descriptiva del usuario.

Este campo es opcional.

---

## Directorio personal

```
/home/oscar
```

Es el directorio donde el usuario guarda sus archivos personales.

---

## Shell del usuario

```
/bin/bash
```

Es el programa que se ejecuta cuando el usuario inicia sesión.

Normalmente es una **shell interactiva**.

---

# El archivo `/etc/shadow`

El archivo `/etc/shadow` contiene **las contraseñas cifradas de los usuarios**.

Por razones de seguridad, este archivo **no puede ser leído por usuarios normales**.

Solo puede acceder a él el usuario root.

Un ejemplo simplificado de una línea podría verse así:

```
oscar:$6$k9sjf82...:19300:0:99999:7:::
```

Aquí se almacena la contraseña **en forma de hash**, no en texto plano.

---

# ¿Por qué existen dos archivos?

La separación entre `/etc/passwd` y `/etc/shadow` mejora la seguridad del sistema.

El archivo `/etc/passwd` debe ser accesible para muchos programas del sistema.

Pero las contraseñas no deberían estar disponibles para todos.

Por eso:

- `/etc/passwd` contiene información general
- `/etc/shadow` contiene las contraseñas cifradas

Esto protege mejor las credenciales de los usuarios.

---

# Ver información de usuarios sin leer estos archivos

Aunque es posible leer `/etc/passwd`, normalmente se utilizan comandos que consultan esta información de forma segura.

Por ejemplo:

```bash
id usuario
```

Ejemplo:

```bash
id oscar
```

Esto muestra:

- UID
- GID
- grupos del usuario

También puedes ver el usuario actual con:

```bash
whoami
```

---

# Importancia de estos archivos

Estos archivos son **críticos para el funcionamiento del sistema**.

Si se modifican incorrectamente, pueden causar problemas como:

- usuarios que no pueden iniciar sesión
- fallos en autenticación
- problemas en permisos del sistema

Por eso, normalmente solo los administradores del sistema interactúan directamente con estos archivos.

---

# Idea clave de esta lección

Linux almacena la información de usuarios principalmente en `/etc/passwd` y las contraseñas cifradas en `/etc/shadow`.

La separación de estos archivos ayuda a mejorar la seguridad del sistema.

---

# Repaso

- `/etc/passwd` contiene información básica de los usuarios.
- Cada línea representa una cuenta del sistema.
- `/etc/shadow` almacena las contraseñas cifradas.
- Solo root puede acceder al archivo `/etc/shadow`.
- Esta separación mejora la seguridad del sistema.
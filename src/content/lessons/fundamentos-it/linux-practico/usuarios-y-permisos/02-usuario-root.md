---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: usuarios-y-permisos
lessonSlug: 02-usuario-root
title: "Usuario root"

summary: "Entender qué es el usuario root, qué permisos tiene y por qué debe utilizarse con cuidado en sistemas Linux."

durationMinutes: 7

objectives:

- "Comprender qué es el usuario root"
- "Entender los privilegios del administrador del sistema"
- "Aprender por qué el acceso root debe usarse con precaución"
    
order: 2
    

---

# Usuario root

En Linux existe un usuario especial llamado **root**.

Este usuario es el **administrador del sistema**.

El usuario root tiene **control total sobre el sistema operativo**.

Esto significa que puede:

- modificar cualquier archivo
- instalar o eliminar programas
- administrar usuarios
- cambiar configuraciones del sistema
- iniciar o detener servicios
- acceder a cualquier parte del sistema de archivos

En otras palabras, root puede realizar **cualquier operación dentro del sistema**.

---

# El usuario más poderoso del sistema

El usuario root tiene privilegios que los usuarios normales no poseen.

Por ejemplo, un usuario normal no puede modificar archivos críticos del sistema como los que se encuentran en:

```
/etc
```

o

```
/usr
```

Sin embargo, root sí puede hacerlo.

Esto permite que el sistema tenga un **administrador con control completo**, pero también implica un riesgo si se usa incorrectamente.

---

# Identificador del usuario root

Internamente, Linux identifica a root con el **UID 0**.

Esto significa que cualquier proceso que se ejecute con UID 0 tiene privilegios administrativos.

Por eso, el sistema trata al usuario root de forma especial.

---

# Cómo saber si estás usando root

Puedes comprobar qué usuario está activo con:

```bash
whoami
```

Si el resultado es:

```
root
```

significa que estás operando con privilegios de administrador.

También puedes observar el prompt de la terminal.

En muchos sistemas:

```
$
```

indica un usuario normal.

Mientras que:

```
#
```

indica una sesión con privilegios de root.

---

# Por qué root debe usarse con cuidado

Debido a que root tiene acceso total al sistema, **un error puede tener consecuencias graves**.

Por ejemplo:

- borrar archivos críticos del sistema
- modificar configuraciones importantes
- eliminar directorios completos accidentalmente

Un comando incorrecto ejecutado como root puede afectar todo el sistema.

---

# Uso común de privilegios administrativos

Por razones de seguridad, en muchos sistemas modernos **los usuarios no inician sesión directamente como root**.

En su lugar, utilizan el comando:

```bash
sudo
```

Este comando permite ejecutar **un solo comando con privilegios de administrador**.

Por ejemplo:

```bash
sudo apt update
```

Esto permite realizar tareas administrativas sin mantener una sesión permanente como root.

---

# Ventajas de usar sudo

El uso de `sudo` tiene varias ventajas.

- limita el tiempo que se utilizan privilegios administrativos
- permite registrar qué usuario ejecutó un comando
- reduce el riesgo de errores accidentales
- mejora la seguridad del sistema

Por esta razón, muchas distribuciones modernas prefieren `sudo` en lugar de iniciar sesión directamente como root.

---

# Un principio importante en administración

Existe un principio de seguridad muy utilizado en sistemas:

**principio de mínimo privilegio**

Esto significa que un usuario o proceso solo debería tener **los permisos necesarios para realizar su tarea**.

Usar root únicamente cuando es necesario ayuda a cumplir este principio.

---

# Idea clave de esta lección

El usuario root es el administrador del sistema en Linux y tiene acceso total a todos los recursos.

Debido a su poder, su uso debe hacerse con cuidado, normalmente mediante herramientas como `sudo`.

---

# Repaso

- `root` es el administrador del sistema en Linux.
- Tiene control total sobre archivos y configuraciones.
- El UID del usuario root es 0.
- Los errores como root pueden afectar todo el sistema.
- Muchas distribuciones utilizan `sudo` para ejecutar tareas administrativas.
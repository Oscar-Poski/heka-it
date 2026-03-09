---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: sistema-archivos-linux
lessonSlug: 06-usuarios-grupos-y-permisos
title: "Usuarios, grupos y permisos"

summary: "Entender cómo Linux organiza el acceso al sistema mediante usuarios, grupos y permisos."

durationMinutes: 8

objectives:

- "Comprender qué es un usuario en Linux"
- "Entender el propósito de los grupos"
- "Relacionar usuarios y grupos con el sistema de permisos"
    
order: 6
    

---

# Usuarios, grupos y permisos

Linux está diseñado para funcionar en entornos donde **varias personas utilizan el mismo sistema**.

Para mantener el sistema organizado y seguro, Linux utiliza tres conceptos fundamentales:

- **usuarios**
- **grupos**
- **permisos**

Estos tres elementos trabajan juntos para controlar **quién puede acceder o modificar archivos dentro del sistema**.

---

# Usuarios en Linux

Un **usuario** representa una identidad dentro del sistema.

Cada usuario tiene:

- un nombre de usuario
- una contraseña
- un directorio personal
- ciertos permisos dentro del sistema

Por ejemplo, en un sistema pueden existir usuarios como:

```
oscar
ana
luis
```

Cada uno tendrá su propio espacio dentro de:

```
/home
```

Por ejemplo:

```
/home/oscar
/home/ana
/home/luis
```

Esto permite que cada persona tenga su propio entorno de trabajo.

---

# El usuario root

En Linux existe un usuario especial llamado:

```
root
```

Este usuario es el **administrador del sistema**.

El usuario root tiene permiso para:

- modificar cualquier archivo
- instalar o eliminar software
- administrar usuarios
- cambiar configuraciones del sistema

Debido a su gran poder, el acceso a root suele utilizarse con cuidado.

---

# Grupos en Linux

Además de usuarios, Linux organiza permisos mediante **grupos**.

Un **grupo** es una colección de usuarios.

Esto permite que varios usuarios compartan ciertos permisos.

Por ejemplo, un grupo podría ser:

```
desarrollo
```

Los usuarios que pertenecen a ese grupo pueden tener acceso a archivos específicos del proyecto.

Esto facilita administrar permisos cuando varias personas trabajan juntas.

---

# Relación entre usuarios y grupos

Cada archivo en Linux tiene asociado:

- un **usuario propietario**
- un **grupo propietario**

Podemos ver esta información usando:

```bash
ls -l
```

Ejemplo:

```
-rw-r--r-- 1 oscar desarrollo 1200 archivo.txt
```

Aquí podemos observar:

- **oscar** → propietario del archivo
- **desarrollo** → grupo asociado al archivo

Esto ayuda a controlar quién puede acceder al archivo.

---

# Cómo se aplican los permisos

Los permisos se aplican a tres categorías:

```
propietario
grupo
otros usuarios
```

Por ejemplo:

```
-rw-r--r--
```

Esto significa:

- el propietario puede leer y escribir
- el grupo puede leer
- otros usuarios pueden leer

Este modelo permite controlar el acceso de forma clara.

---

# Ejemplo práctico

Supongamos que un archivo pertenece al usuario **oscar** y al grupo **desarrollo**.

Si los permisos son:

```
-rw-r-----
```

entonces:

- oscar puede leer y escribir
- los usuarios del grupo desarrollo pueden leer
- otros usuarios no tienen acceso

Esto es útil para compartir archivos dentro de un equipo.

---

# Un modelo simple pero poderoso

El sistema de usuarios, grupos y permisos permite que Linux controle el acceso de forma muy eficiente.

Esto es especialmente importante en entornos como:

- servidores
- equipos compartidos
- sistemas empresariales
- infraestructura cloud

Gracias a este modelo, es posible mantener el sistema organizado y seguro.

---

# Idea clave de esta lección

Linux controla el acceso al sistema mediante usuarios, grupos y permisos.

Cada archivo tiene un propietario, un grupo asociado y un conjunto de permisos que determinan quién puede acceder o modificar ese archivo.

---

# Repaso

- Linux es un sistema multiusuario.
- Cada usuario tiene su propio entorno dentro de `/home`.
- El usuario `root` es el administrador del sistema.
- Los grupos permiten compartir permisos entre varios usuarios.
- Cada archivo tiene un propietario y un grupo asociado.
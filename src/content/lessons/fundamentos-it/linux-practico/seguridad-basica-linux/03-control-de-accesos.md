---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: seguridad-basica-linux
lessonSlug: 03-control-de-accesos
title: "Repaso: Control de accesos"

summary: "Comprender cómo Linux controla quién puede acceder al sistema y qué acciones puede realizar."

durationMinutes: 8

objectives:

- "Comprender el concepto de control de acceso"
- "Identificar mecanismos de control de acceso en Linux"
- "Aplicar principios básicos para proteger recursos del sistema"
    
order: 3
    

---

# Repaso: Control de accesos

El **control de accesos** determina **quién puede usar el sistema y qué acciones puede realizar**.

En Linux, este control se basa principalmente en:

- usuarios
- grupos
- permisos de archivos
- privilegios administrativos

Estos mecanismos permiten proteger los recursos del sistema y evitar accesos no autorizados.

---

# Usuarios

Cada persona que utiliza un sistema Linux normalmente tiene una **cuenta de usuario**.

Esto permite:

- identificar quién accede al sistema
- separar datos entre usuarios
- aplicar permisos diferentes

Cada usuario tiene su propio directorio personal, normalmente ubicado en:

```
/home/usuario
```

---

# Grupos

Linux también utiliza **grupos** para organizar usuarios.

Un grupo permite asignar permisos a **varios usuarios al mismo tiempo**.

Por ejemplo:

- un grupo de administradores
- un grupo de desarrolladores
- un grupo de usuarios de una aplicación

Esto facilita la administración de permisos.

---

# Permisos de archivos

Cada archivo o directorio en Linux tiene permisos que controlan quién puede acceder a él.

Los permisos básicos son:

```
r  lectura
w  escritura
x  ejecución
```

Estos permisos pueden aplicarse a:

- el propietario del archivo
- el grupo
- otros usuarios

Esto permite controlar el acceso a archivos importantes.

---

# Privilegios administrativos

Algunas tareas del sistema requieren privilegios especiales.

El usuario con más privilegios en Linux es:

```
root
```

Sin embargo, normalmente no se utiliza root directamente.

En su lugar se usa el comando:

```
sudo
```

Esto permite ejecutar comandos administrativos de forma controlada.

---

# Control de acceso en servicios

Muchos servicios también incluyen mecanismos para controlar acceso.

Por ejemplo:

- limitar qué usuarios pueden conectarse
- restringir acceso por red
- requerir autenticación

Estas configuraciones ayudan a proteger servicios críticos.

---

# Buenas prácticas

Para mejorar la seguridad del sistema es recomendable:

- crear cuentas individuales para cada usuario
- evitar compartir cuentas
- usar grupos para organizar permisos
- revisar permisos de archivos sensibles

Estas prácticas ayudan a mantener el sistema más seguro.

---

# Idea clave de esta lección

El control de accesos en Linux utiliza usuarios, grupos y permisos para determinar quién puede acceder a recursos del sistema.

---

# Repaso

- El control de accesos define quién puede usar el sistema.
- Linux utiliza usuarios y grupos para organizar permisos.
- Los archivos tienen permisos de lectura, escritura y ejecución.
- `sudo` permite ejecutar comandos administrativos.
- Configurar correctamente permisos ayuda a proteger el sistema.
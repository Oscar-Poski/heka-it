---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: usuarios-y-permisos
lessonSlug: 07-uso-de-sudo
title: "Uso de sudo"

summary: "Aprender cómo utilizar el comando sudo para ejecutar tareas administrativas de forma segura."

durationMinutes: 7

objectives:

- "Comprender qué es sudo"
- "Ejecutar comandos con privilegios administrativos"
- "Entender por qué sudo es más seguro que usar root directamente"
    
order: 7
    

---

# Uso de `sudo`

En Linux, muchas tareas administrativas requieren **privilegios especiales**.

Por ejemplo:

- instalar software
- modificar archivos del sistema
- administrar usuarios
- cambiar configuraciones del sistema

Estas tareas normalmente requieren permisos del **usuario administrador (root)**.

Sin embargo, en lugar de iniciar sesión directamente como root, Linux utiliza una herramienta llamada:

```bash
sudo
```

---

# ¿Qué es `sudo`?

`sudo` significa:

**superuser do**

Permite ejecutar un comando **con privilegios de administrador** aunque estés usando una cuenta normal.

Por ejemplo:

```bash
sudo apt update
```

Este comando ejecuta `apt update` con privilegios administrativos.

---

# Cómo funciona `sudo`

Cuando ejecutas un comando con `sudo`, el sistema:

1. verifica si tu usuario tiene permiso para usar sudo
2. solicita tu contraseña
3. ejecuta el comando con privilegios de administrador

Es importante notar que **se usa la contraseña del usuario actual**, no necesariamente la de root.

---

# Ejemplo práctico

Supongamos que quieres instalar un programa.

Si ejecutas:

```bash
apt install nginx
```

es posible que el sistema muestre un error de permisos.

En cambio, usando:

```bash
sudo apt install nginx
```

el comando se ejecutará con privilegios administrativos.

---

# Qué usuarios pueden usar sudo

No todos los usuarios pueden usar `sudo`.

Solo los usuarios que pertenecen a ciertos grupos tienen este permiso.

En muchas distribuciones, este grupo se llama:

```bash
sudo
```

o

```bash
wheel
```

Los administradores pueden agregar usuarios a estos grupos para permitirles ejecutar comandos con privilegios elevados.

---

# Ejecutar una sesión como root

También es posible abrir una sesión temporal como root usando:

```bash
sudo -i
```

Esto abre una shell con privilegios administrativos.

Sin embargo, esta práctica debe usarse con cuidado.

---

# Cuándo usar sudo

`sudo` se utiliza cuando necesitas realizar tareas administrativas, por ejemplo:

- instalar paquetes
- modificar archivos en `/etc`
- administrar usuarios
- cambiar permisos del sistema
- montar dispositivos

La idea es **usar privilegios elevados solo cuando sea necesario**.

---

# Ventajas de usar sudo

El uso de `sudo` tiene varias ventajas importantes.

**Mayor seguridad**

Los usuarios no necesitan conocer la contraseña de root.

---

**Control de acceso**

Los administradores pueden decidir qué usuarios tienen permisos para usar sudo.

---

**Registro de actividad**

El sistema puede registrar qué comandos se ejecutan con sudo.

Esto es útil para auditoría y seguridad.

---

# Buen hábito de administración

Un principio importante en administración de sistemas es:

**usar privilegios elevados solo cuando sea necesario**.

Esto reduce el riesgo de errores y mejora la seguridad del sistema.

Por eso, muchas distribuciones modernas prefieren `sudo` en lugar de usar directamente la cuenta root.

---

# Idea clave de esta lección

`sudo` permite ejecutar comandos con privilegios administrativos sin necesidad de iniciar sesión como root.

Esto mejora la seguridad y el control dentro del sistema.

---

# Repaso

- `sudo` permite ejecutar comandos como administrador.
- Significa *superuser do*.
- Solo usuarios autorizados pueden usarlo.
- Solicita la contraseña del usuario actual.
- Es más seguro que usar root directamente.
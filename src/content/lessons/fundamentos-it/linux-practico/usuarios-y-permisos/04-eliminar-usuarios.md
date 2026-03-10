---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: usuarios-y-permisos
lessonSlug: 04-eliminar-usuarios
title: "Eliminar usuarios"

summary: "Aprender a eliminar cuentas de usuario en Linux y comprender qué ocurre con sus archivos y configuraciones."

durationMinutes: 7

objectives:

- "Eliminar cuentas de usuario del sistema"
- "Entender qué ocurre con los archivos del usuario"
- "Usar opciones para eliminar completamente una cuenta"
    
order: 4
    

---

# Eliminar usuarios

Así como es posible crear usuarios en Linux, también es posible **eliminar cuentas que ya no se necesitan**.

Esto es común en situaciones como:

- usuarios que ya no utilizan el sistema
- cuentas de prueba
- cuentas temporales de proyectos
- mantenimiento de servidores

Eliminar usuarios ayuda a mantener el sistema **ordenado y seguro**.

---

# El comando `userdel`

El comando principal para eliminar usuarios es:

```bash
userdel
```

La estructura básica es:

```bash
sudo userdel nombre_usuario
```

Por ejemplo:

```bash
sudo userdel ana
```

Esto elimina la cuenta del usuario `ana` del sistema.

Sin embargo, este comando **no elimina automáticamente el directorio personal del usuario**.

---

# Qué ocurre cuando se elimina un usuario

Cuando ejecutas `userdel`, el sistema:

- elimina la entrada del usuario en `/etc/passwd`
- elimina su acceso al sistema
- deja intactos sus archivos en el disco

Esto significa que el directorio del usuario podría seguir existiendo, por ejemplo:

```
/home/ana
```

Esto puede ser útil si quieres conservar sus archivos.

---

# Eliminar también el directorio personal

Si quieres eliminar completamente la cuenta junto con su directorio personal, puedes usar la opción:

```
-r
```

Ejemplo:

```bash
sudo userdel -r ana
```

Esto eliminará:

- la cuenta del usuario
- su directorio personal
- archivos asociados al usuario

Este comando debe usarse con cuidado porque **los archivos se eliminan permanentemente**.

---

# Verificar antes de eliminar

Antes de eliminar un usuario conviene verificar algunos puntos.

Por ejemplo:

- si el usuario tiene procesos activos
- si sus archivos deben conservarse
- si otros servicios dependen de esa cuenta

Eliminar una cuenta utilizada por servicios o aplicaciones puede causar problemas.

---

# Procesos activos del usuario

Si un usuario tiene procesos activos, el sistema puede impedir su eliminación.

Para verificar procesos asociados a un usuario puedes usar:

```bash
ps -u nombre_usuario
```

Por ejemplo:

```bash
ps -u ana
```

Esto muestra procesos que pertenecen a ese usuario.

---

# Buenas prácticas

Al administrar usuarios en sistemas Linux conviene seguir algunas prácticas básicas.

- revisar qué archivos pertenecen al usuario
- confirmar que la cuenta ya no se utiliza
- cerrar sesiones activas
- usar `userdel -r` solo cuando sea necesario

Esto ayuda a evitar pérdidas accidentales de información.

---

# Idea clave de esta lección

El comando `userdel` permite eliminar cuentas de usuario del sistema.

Si se usa la opción `-r`, también se eliminan el directorio personal y los archivos asociados.

---

# Repaso

- `userdel` elimina una cuenta de usuario.
- `userdel -r` elimina también el directorio personal.
- Los usuarios se registran en `/etc/passwd`.
- Es recomendable revisar procesos y archivos antes de eliminar un usuario.
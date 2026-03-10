---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: usuarios-y-permisos
lessonSlug: 05-crear-y-administrar-grupos
title: "Crear y administrar grupos"

summary: "Aprender qué son los grupos en Linux y cómo crearlos, administrarlos y agregar usuarios a ellos."

durationMinutes: 8

objectives:

- "Comprender qué es un grupo en Linux"
- "Crear nuevos grupos en el sistema"
- "Agregar usuarios a grupos existentes"
    
order: 5
    

---

# Crear y administrar grupos

En Linux, los **grupos** permiten organizar usuarios y controlar permisos de forma más eficiente.

Un grupo es simplemente **un conjunto de usuarios que comparten ciertos permisos**.

Esto es especialmente útil cuando varias personas trabajan en:

- un mismo proyecto
- un mismo servidor
- un mismo conjunto de archivos

En lugar de asignar permisos usuario por usuario, puedes asignarlos **al grupo completo**.

---

# ¿Qué es un grupo?

Un **grupo** es una colección de usuarios.

Cada archivo en Linux tiene asociado:

- un **usuario propietario**
- un **grupo propietario**

Los permisos pueden aplicarse tanto al propietario como al grupo.

Por ejemplo:

```
-rw-r-----1 oscar desarrollo archivo.txt
```

Esto indica que:

- el propietario es **oscar**
- el grupo asociado es **desarrollo**

Los usuarios que pertenecen al grupo `desarrollo` pueden tener acceso al archivo según los permisos definidos.

---

# Ver grupos del sistema

Los grupos del sistema se almacenan en el archivo:

```
/etc/group
```

Puedes ver su contenido con:

```bash
cat /etc/group
```

Cada línea representa un grupo del sistema.

---

# Crear un grupo

Para crear un grupo usamos el comando:

```bash
groupadd
```

Ejemplo:

```bash
sudo groupadd desarrollo
```

Esto crea un grupo llamado `desarrollo`.

---

# Agregar un usuario a un grupo

Para agregar un usuario a un grupo usamos:

```bash
usermod -aG grupo usuario
```

Ejemplo:

```bash
sudo usermod -aG desarrollo ana
```

Esto agrega al usuario `ana` al grupo `desarrollo`.

---

# Explicación de las opciones

En el comando anterior aparecen dos opciones importantes.

```
-a
```

significa **append**, es decir, agregar sin eliminar otros grupos existentes.

```
-G
```

indica la lista de grupos a los que se agregará el usuario.

Usar `-a` es importante para evitar sobrescribir los grupos actuales del usuario.

---

# Ver grupos de un usuario

Puedes ver a qué grupos pertenece un usuario con:

```bash
groups usuario
```

Por ejemplo:

```bash
groups ana
```

La terminal mostrará todos los grupos asociados a ese usuario.

---

# Grupo principal y grupos secundarios

Cada usuario tiene:

**Grupo principal**

Es el grupo asociado automáticamente al usuario cuando se crea.

---

**Grupos secundarios**

Son grupos adicionales que el usuario puede tener.

Estos grupos permiten compartir acceso a recursos específicos.

---

# Ejemplo práctico

Supongamos que tienes un equipo de desarrollo.

Podrías crear un grupo:

```bash
sudo groupadd desarrollo
```

Luego agregar usuarios al grupo:

```bash
sudo usermod -aG desarrollo oscar
sudo usermod -aG desarrollo ana
sudo usermod -aG desarrollo luis
```

Después podrías asignar permisos a un directorio para ese grupo.

Esto permitiría que todos los miembros del grupo trabajen con los mismos archivos.

---

# Idea clave de esta lección

Los grupos permiten administrar permisos de forma eficiente al organizar usuarios en conjuntos que comparten acceso a ciertos recursos.

---

# Repaso

- Un grupo es una colección de usuarios.
- Los grupos ayudan a compartir permisos.
- `groupadd` crea nuevos grupos.
- `usermod -aG` agrega usuarios a un grupo.
- `groups usuario` muestra los grupos de un usuario.
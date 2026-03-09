---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: sistema-archivos-linux
lessonSlug: 08-cambiar-propietario-chown
title: "Cambiar propietario (chown)"

summary: "Aprender a cambiar el propietario y el grupo de archivos y directorios utilizando el comando chown."

durationMinutes: 7

objectives:

- "Entender qué es el propietario de un archivo"
- "Cambiar el propietario de archivos y directorios"
- "Modificar el grupo asociado a un archivo"
    
order: 8
    

---

# Cambiar propietario (`chown`)

En Linux, cada archivo y directorio tiene asociado:

- un **usuario propietario**
- un **grupo propietario**

Estos elementos determinan quién tiene control principal sobre el archivo.

Para modificar esta información se utiliza el comando:

```bash
chown
```

El nombre `chown` significa **change owner**, es decir, cambiar el propietario.

---

# Ver el propietario de un archivo

Puedes ver el propietario de un archivo usando:

```bash
ls -l
```

Ejemplo:

```
-rw-r--r-- 1 oscar desarrollo 1200 archivo.txt
```

Aquí podemos identificar:

- **oscar** → propietario del archivo
- **desarrollo** → grupo asociado

---

# Cambiar el propietario de un archivo

Para cambiar el propietario usamos la siguiente estructura:

```bash
chown nuevo_usuario archivo
```

Por ejemplo:

```bash
chown ana archivo.txt
```

Esto cambia el propietario del archivo a `ana`.

El grupo asociado permanecerá igual.

---

# Cambiar propietario y grupo al mismo tiempo

También es posible cambiar el propietario **y el grupo** en un solo comando.

La sintaxis es:

```
chown usuario:grupo archivo
```

Ejemplo:

```bash
chown ana:desarrollo archivo.txt
```

Ahora:

- el propietario será **ana**
- el grupo será **desarrollo**

---

# Cambiar solo el grupo

Si solo quieres modificar el grupo asociado al archivo puedes usar:

```
chown :grupo archivo
```

Por ejemplo:

```bash
chown :ventas archivo.txt
```

Esto cambia únicamente el grupo del archivo.

---

# Cambiar propietario en directorios

El comando `chown` también funciona con directorios.

Por ejemplo:

```bash
chown oscar proyectos
```

Esto cambia el propietario del directorio `proyectos`.

---

# Cambiar propietario de forma recursiva

Si un directorio contiene muchos archivos, puedes cambiar el propietario de todos ellos usando la opción:

```
-R
```

Ejemplo:

```bash
chown -R oscar proyectos
```

Esto cambia el propietario de:

- el directorio `proyectos`
- todos los archivos dentro de él
- todos los subdirectorios

La opción `-R` significa **recursivo**.

---

# Permisos necesarios

Cambiar el propietario de un archivo generalmente requiere **privilegios de administrador**.

Por eso muchas veces verás este comando usado con:

```bash
sudo
```

Por ejemplo:

```bash
sudo chown oscar archivo.txt
```

Esto ejecuta el comando con permisos elevados.

---

# ¿Cuándo se usa `chown`?

Cambiar propietarios es común en situaciones como:

- administrar servidores
- configurar aplicaciones
- transferir archivos entre usuarios
- ajustar permisos en proyectos compartidos

También es común después de copiar archivos desde otro sistema o instalar software manualmente.

---

# Idea clave de esta lección

El comando `chown` permite cambiar el propietario y el grupo asociado a archivos y directorios.

Esto es una parte importante de la administración de permisos en Linux.

---

# Repaso

- Cada archivo tiene un propietario y un grupo.
- `ls -l` permite ver esta información.
- `chown usuario archivo` cambia el propietario.
- `chown usuario:grupo archivo` cambia propietario y grupo.
- `chown -R` permite aplicar cambios de forma recursiva.
- A menudo se usa junto con `sudo`.
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: administracion-basica-del-sistema
lessonSlug: 08-gestion-de-almacenamiento
title: "Gestión de almacenamiento"

summary: "Comprender cómo Linux administra el almacenamiento y aprender herramientas básicas para gestionar discos y sistemas de archivos."

durationMinutes: 9

objectives:

- "Comprender cómo Linux gestiona el almacenamiento"
- "Identificar discos, particiones y sistemas de archivos"
- "Usar herramientas básicas para inspeccionar almacenamiento"
    
order: 8
    

---

# Gestión de almacenamiento

Los sistemas Linux utilizan diferentes dispositivos de almacenamiento para guardar datos.

Estos dispositivos pueden incluir:

- discos duros (HDD)
- unidades de estado sólido (SSD)
- discos externos
- almacenamiento en red

Administrar correctamente el almacenamiento es una tarea importante para mantener el sistema funcionando correctamente.

---

# Discos y particiones

Un **disco** es el dispositivo físico donde se almacenan los datos.

Sin embargo, los discos normalmente se dividen en **particiones**.

Una **partición** es una sección lógica del disco que puede utilizarse como un sistema independiente.

Por ejemplo, un disco puede dividirse en:

- una partición para el sistema operativo
- otra para datos
- otra para respaldo

Esto permite organizar mejor el almacenamiento.

---

# Sistemas de archivos

Para que el sistema operativo pueda organizar archivos dentro de un disco, se utiliza un **sistema de archivos**.

Un sistema de archivos define cómo se almacenan y recuperan los datos.

Algunos sistemas de archivos comunes en Linux son:

```
ext4
xfs
btrfs
```

Cada uno tiene diferentes características y ventajas.

---

# Ver discos y particiones

Para ver los discos y particiones disponibles en el sistema se puede usar:

```
lsblk
```

La salida puede verse así:

```
sda
├─sda1
├─sda2
└─sda3
```

Esto muestra:

- el disco principal (`sda`)
- sus particiones

---

# Ver uso de disco

Para revisar cuánto espacio se está utilizando se puede usar:

```bash
df -h
```

La opción `-h` muestra los valores en formato legible para humanos.

Esto permite ver:

- espacio total
- espacio usado
- espacio disponible

---

# Ver uso por directorio

Si deseas saber qué directorios están ocupando más espacio puedes usar:

```bash
du -sh *
```

Esto muestra el tamaño de cada directorio dentro del directorio actual.

---

# Montaje de sistemas de archivos

En Linux, los discos y particiones se **montan** en directorios del sistema.

Esto significa que el contenido del disco aparece dentro del árbol de directorios.

Por ejemplo:

```
/mnt
/media
/home
```

Un disco montado permite que el sistema acceda a sus archivos.

---

# Importancia de la gestión de almacenamiento

Administrar el almacenamiento correctamente es importante para:

- evitar que el sistema se quede sin espacio
- organizar datos correctamente
- mantener el rendimiento del sistema
- prevenir fallos en servicios

Muchos problemas en servidores ocurren simplemente porque **el disco se llena**.

---

# Idea clave de esta lección

Linux organiza el almacenamiento mediante discos, particiones y sistemas de archivos que se montan dentro del sistema de directorios.

---

# Repaso

- Los datos se almacenan en discos.
- Los discos se dividen en particiones.
- Los sistemas de archivos organizan los datos.
- `lsblk` muestra discos y particiones.
- `df -h` muestra uso de espacio.
- `du` permite ver uso de espacio por directorio.
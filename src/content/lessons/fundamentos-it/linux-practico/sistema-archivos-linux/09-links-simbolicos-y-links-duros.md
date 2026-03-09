---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: sistema-archivos-linux
lessonSlug: 09-links-simbolicos-y-links-duros
title: "Links simbólicos y links duros"

summary: "Entender qué son los enlaces simbólicos y los enlaces duros en Linux, y cómo se utilizan para referenciar archivos dentro del sistema."

durationMinutes: 8

objectives:

- "Comprender qué es un enlace en Linux"
- "Diferenciar entre enlaces simbólicos y enlaces duros"
- "Crear enlaces utilizando el comando ln"
    
order: 9
    

---

# Links simbólicos y links duros

En Linux es posible crear **referencias a archivos existentes** sin duplicar realmente su contenido.

Estas referencias se llaman **links** o **enlaces**.

Los enlaces permiten que un mismo archivo pueda ser accesible desde diferentes ubicaciones del sistema de archivos.

Existen dos tipos principales:

- **links duros (hard links)**
- **links simbólicos (symbolic links o symlinks)**

---

# ¿Qué es un link?

Un **link** es una referencia a un archivo que ya existe.

En lugar de copiar el archivo completo, el sistema crea una referencia que apunta al archivo original.

Esto puede ser útil para:

- organizar archivos
- crear accesos rápidos
- mantener múltiples rutas hacia un mismo recurso

---

# Links simbólicos

Un **link simbólico** es similar a un acceso directo.

Este tipo de enlace apunta a la **ruta de otro archivo o directorio**.

Si el archivo original se mueve o se elimina, el enlace deja de funcionar.

Los links simbólicos son muy comunes en Linux.

---

# Crear un link simbólico

Para crear un enlace simbólico usamos:

```bash
ln -s archivo_original link
```

Por ejemplo:

```bash
ln -s archivo.txt acceso.txt
```

Esto crea un enlace llamado `acceso.txt` que apunta al archivo `archivo.txt`.

Si ejecutas:

```bash
ls -l
```

podrías ver algo como:

```
lrwxrwxrwx 1 oscar oscar 10 acceso.txt -> archivo.txt
```

La letra `l` al inicio indica que se trata de un **link simbólico**.

---

# Usar un link simbólico

Cuando accedes al link, el sistema sigue la referencia hacia el archivo original.

Por ejemplo:

```bash
cat acceso.txt
```

mostrará el contenido de `archivo.txt`.

Desde el punto de vista del usuario, el enlace funciona como si fuera el archivo original.

---

# Links duros

Un **link duro** funciona de manera diferente.

En lugar de apuntar a una ruta, el enlace duro apunta **directamente al mismo contenido en el disco**.

Esto significa que:

- el archivo original y el link duro comparten los mismos datos
- ambos se consideran referencias al mismo archivo

---

# Crear un link duro

Para crear un link duro usamos:

```
ln archivo_original link
```

Ejemplo:

```bash
ln archivo.txt copia.txt
```

Después de ejecutar el comando, ambos nombres apuntan al mismo contenido.

Si editas uno, el otro reflejará los mismos cambios.

---

# Diferencias principales

La diferencia clave entre ambos tipos es cómo apuntan al archivo.

**Link simbólico**

- apunta a la ruta del archivo
- funciona como un acceso directo
- puede apuntar a directorios
- deja de funcionar si el archivo original se elimina

**Link duro**

- apunta directamente al contenido del archivo
- comparte los mismos datos
- normalmente no puede apuntar a directorios
- sigue funcionando aunque se elimine uno de los nombres

---

# Ejemplo conceptual

Supongamos que tienes este archivo:

```
archivo.txt
```

Si creas:

```bash
ln archivo.txt copia.txt
```

ambos nombres apuntan al mismo archivo.

Pero si creas:

```bash
ln -s archivo.txt acceso.txt
```

`acceso.txt` es solo una referencia al archivo original.

---

# ¿Cuándo se usan links?

Los enlaces se usan en muchos contextos en Linux.

Por ejemplo:

- organizar software en el sistema
- crear accesos rápidos a programas
- mantener múltiples rutas hacia archivos importantes
- gestionar versiones de software

Los **links simbólicos** son especialmente comunes en configuraciones del sistema.

---

# Idea clave de esta lección

Los enlaces permiten crear referencias a archivos sin duplicar su contenido.

Linux ofrece dos tipos principales: enlaces duros, que comparten el mismo contenido en disco, y enlaces simbólicos, que funcionan como accesos directos.

---

# Repaso

- Un link es una referencia a un archivo existente.
- Los links simbólicos funcionan como accesos directos.
- Los links duros apuntan directamente al contenido del archivo.
- `ln -s` crea un enlace simbólico.
- `ln` crea un enlace duro.
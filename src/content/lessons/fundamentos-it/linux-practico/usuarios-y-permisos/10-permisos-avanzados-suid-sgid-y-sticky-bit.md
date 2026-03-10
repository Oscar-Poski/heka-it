---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: usuarios-y-permisos
lessonSlug: 10-permisos-avanzados-suid-sgid-y-sticky-bit
title: "Permisos avanzados (SUID, SGID y Sticky Bit)"

summary: "Entender los permisos especiales de Linux: SUID, SGID y Sticky Bit, y cómo afectan la ejecución de archivos y directorios."

durationMinutes: 9

objectives:

- "Comprender qué son los permisos especiales en Linux"
- "Entender el funcionamiento de SUID, SGID y Sticky Bit"
- "Reconocer cuándo se utilizan estos permisos en el sistema"
    
order: 10
    

---

# Permisos avanzados (SUID, SGID y Sticky Bit)

Además de los permisos normales de Linux (`r`, `w`, `x`), existen **permisos especiales** que modifican el comportamiento de archivos y directorios.

Estos permisos son:

- **SUID (Set User ID)**
- **SGID (Set Group ID)**
- **Sticky Bit**

Se utilizan principalmente en **administración del sistema y seguridad**.

Aunque no se usan todos los días, es importante entender qué hacen.

---

# Recordatorio: permisos normales

Los permisos básicos de Linux son:

```
r  lectura
w  escritura
x  ejecución
```

Aplicados a tres grupos:

- propietario
- grupo
- otros usuarios

Ejemplo típico:

```
-rwxr-xr-x
```

Los permisos especiales **modifican este comportamiento**.

---

# SUID (Set User ID)

El permiso **SUID** permite que un programa se ejecute **con los privilegios del propietario del archivo**, en lugar de los del usuario que lo ejecuta.

Esto es útil cuando un programa necesita realizar acciones que normalmente requieren privilegios elevados.

---

# Ejemplo clásico: `passwd`

El comando:

```bash
passwd
```

permite a los usuarios cambiar su contraseña.

Sin embargo, la información de contraseñas está almacenada en:

```
/etc/shadow
```

Este archivo solo puede ser modificado por **root**.

Entonces, ¿cómo puede un usuario normal cambiar su contraseña?

La respuesta es que el programa `passwd` tiene activado el permiso **SUID**.

Puedes verlo con:

```bash
ls -l /usr/bin/passwd
```

Salida típica:

```
-rwsr-xr-x
```

La letra **s** indica que el bit SUID está activo.

Esto permite que el programa se ejecute con privilegios del propietario (root).

---

# SGID (Set Group ID)

El permiso **SGID** funciona de forma similar a SUID, pero aplicado al **grupo**.

Cuando un archivo tiene SGID, el programa se ejecuta con los privilegios del **grupo propietario del archivo**.

---

# SGID en directorios

El uso más común de SGID es en **directorios compartidos**.

Cuando SGID está activado en un directorio:

- los archivos creados dentro heredarán el **grupo del directorio**
- no el grupo del usuario que creó el archivo

Esto es útil para trabajo colaborativo.

Por ejemplo, un directorio de proyecto donde todos los archivos deben pertenecer al mismo grupo.

---

# Sticky Bit

El **Sticky Bit** se utiliza principalmente en **directorios compartidos**.

Cuando este bit está activo:

- los usuarios solo pueden eliminar **sus propios archivos**
- aunque el directorio tenga permisos de escritura para todos

Esto evita que los usuarios eliminen archivos de otros usuarios.

---

# Ejemplo: `/tmp`

Un ejemplo típico es el directorio:

```
/tmp
```

Puedes verlo con:

```bash
ls -ld /tmp
```

Salida típica:

```
drwxrwxrwt
```

La letra **t** indica que el Sticky Bit está activo.

Esto permite que todos los usuarios creen archivos temporales, pero **no puedan borrar los de otros usuarios**.

---

# Representación en permisos

Los permisos especiales aparecen en la salida de `ls -l`.

Ejemplos:

```
rws
```

SUID activo.

```
rwxr-sr-x
```

SGID activo.

```
drwxrwxrwt
```

Sticky Bit activo.

---

# Valores numéricos

En modo numérico, estos permisos usan valores adicionales.

```
SUID   = 4
SGID   = 2
Sticky = 1
```

Por ejemplo:

```
chmod 4755 archivo
```

El **4** activa el SUID.

Aunque estos valores se usan más en administración avanzada.

---

# Cuándo se utilizan

Estos permisos aparecen en situaciones como:

- programas del sistema que requieren privilegios especiales
- directorios compartidos entre usuarios
- entornos colaborativos
- control de seguridad en sistemas multiusuario

---

# Precaución

Los permisos especiales deben usarse con cuidado.

Si se aplican incorrectamente pueden provocar problemas de seguridad.

Por ejemplo, un programa con SUID mal configurado podría permitir a un usuario obtener privilegios elevados.

Por eso normalmente solo los administradores del sistema trabajan con estos permisos.

---

# Idea clave de esta lección

Linux incluye permisos especiales como **SUID, SGID y Sticky Bit** que modifican el comportamiento normal de archivos y directorios.

Estos permisos permiten implementar funciones administrativas y mejorar la seguridad en sistemas multiusuario.

---

# Repaso

- Linux tiene permisos especiales además de `r`, `w` y `x`.
- **SUID** ejecuta programas con permisos del propietario.
- **SGID** ejecuta programas con permisos del grupo o controla grupos en directorios.
- **Sticky Bit** evita que usuarios eliminen archivos de otros.
- Estos permisos se utilizan en configuraciones avanzadas del sistema.
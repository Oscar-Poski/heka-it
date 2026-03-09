---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: sistema-archivos-linux
lessonSlug: 11-ver-espacio-disponible
title: "Ver espacio disponible"

summary: "Aprender a revisar cuánto espacio libre queda en el sistema de archivos y cómo interpretar esa información en la práctica."

durationMinutes: 7

objectives:

- "Consultar el espacio disponible en el sistema"
- "Interpretar la información mostrada por df"
- "Identificar cuándo un sistema de archivos se está llenando"
    
order: 11
    

---

# Ver espacio disponible

En la lección anterior vimos cómo revisar **uso de disco** y cómo identificar directorios que ocupan mucho espacio.

Ahora vamos a enfocarnos en algo muy importante desde el punto de vista operativo:

**saber cuánto espacio libre queda en el sistema.**

Esto es fundamental porque muchos sistemas fallan cuando el almacenamiento llega a su límite.

---

# El comando principal: `df`

El comando más común para ver el espacio disponible es:

```bash
df
```

`df` significa **disk free**.

Este comando muestra información sobre los **sistemas de archivos montados** y cuánto espacio queda disponible en cada uno.

---

# Usar formato legible con `h`

La salida de `df` puede ser difícil de leer porque muestra los valores en bloques.

Por eso normalmente se usa:

```bash
df -h
```

La opción `-h` significa **human readable**.

Esto muestra el tamaño en unidades más fáciles de entender como:

- KB
- MB
- GB
- TB

---

# Ejemplo de salida

Una salida típica podría verse así:

```
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        50G   20G   28G  42% /
tmpfs            2G     0    2G    0% /dev/shm
/dev/sda2       200G  120G   70G  63% /home
```

Cada columna tiene un significado específico.

---

# Columnas principales

**Filesystem**

Indica el dispositivo o sistema de archivos.

---

**Size**

El tamaño total del sistema de archivos.

---

**Used**

Cuánto espacio ya está ocupado.

---

**Avail**

Cuánto espacio queda disponible.

---

**Use%**

El porcentaje de uso del disco.

---

**Mounted on**

Indica en qué parte del sistema está montado ese sistema de archivos.

Por ejemplo:

```
/
```

representa el sistema principal.

---

# Revisar un sistema de archivos específico

También puedes revisar el espacio disponible en una ubicación específica.

Por ejemplo:

```bash
df -h /home
```

Esto muestra el sistema de archivos donde se encuentra el directorio `/home`.

Esto es útil cuando quieres verificar espacio en una ubicación concreta.

---

# Interpretar el porcentaje de uso

El porcentaje de uso (`Use%`) es uno de los datos más importantes.

De forma general:

- **menos de 70%** → situación normal
- **70–85%** → conviene monitorear
- **más de 90%** → riesgo de quedarse sin espacio

No es una regla absoluta, pero sirve como referencia.

En entornos productivos, muchos administradores empiezan a investigar cuando el uso supera el **80%**.

---

# ¿Qué pasa si el disco se llena?

Si un sistema de archivos llega a **100% de uso**, pueden aparecer varios problemas:

- programas que no pueden guardar archivos
- servicios que dejan de funcionar
- errores en aplicaciones
- fallos en bases de datos
- problemas durante actualizaciones

Por eso revisar el espacio disponible es una tarea importante.

---

# Flujo práctico de revisión

Cuando revisas almacenamiento, normalmente el flujo es:

1. revisar espacio general

```bash
df -h
```

1. identificar sistemas de archivos con uso alto
2. investigar qué directorios ocupan espacio usando:

```bash
du -sh
```

Esto permite localizar el origen del problema.

---

# Idea clave de esta lección

El comando `df -h` permite ver cuánto espacio libre queda en los sistemas de archivos.

Revisar esta información regularmente ayuda a prevenir problemas relacionados con almacenamiento.

---

# Repaso

- `df` muestra información sobre sistemas de archivos.
- `df -h` presenta los datos en formato legible.
- Las columnas principales incluyen tamaño, uso y espacio disponible.
- El porcentaje de uso ayuda a identificar discos que se están llenando.
- Un disco lleno puede causar fallas en el sistema.
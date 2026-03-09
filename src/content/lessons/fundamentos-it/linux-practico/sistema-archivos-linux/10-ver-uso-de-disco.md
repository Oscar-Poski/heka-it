---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: sistema-archivos-linux
lessonSlug: 10-ver-uso-de-disco
title: Ver uso de disco

summary: "Aprender a revisar cuánto espacio se está usando en Linux y cómo interpretar esa información de forma práctica."

durationMinutes: 8

objectives:

- "Entender qué significa uso de disco en Linux"
- "Revisar espacio ocupado con comandos básicos"
- "Interpretar el uso de disco con un enfoque práctico y operativo"
    
order: 10
    

---

# Ver uso de disco

En Linux, revisar el **uso de disco** es una tarea básica de operación.

No se trata solo de curiosidad.

Saber cuánto espacio se está usando ayuda a detectar problemas antes de que se vuelvan críticos.

Por ejemplo, un sistema puede fallar o comportarse mal si:

- el disco está casi lleno
- una aplicación genera demasiados logs
- un usuario guarda demasiados archivos
- un proceso crea archivos temporales sin control

Por eso, revisar disco es una tarea cotidiana en administración de sistemas.

---

# ¿Qué significa “uso de disco”?

El uso de disco es la cantidad de espacio de almacenamiento que ya está ocupada dentro del sistema.

Ese espacio puede estar siendo usado por:

- archivos personales
- programas instalados
- logs
- cachés
- bases de datos
- archivos temporales

En otras palabras, el disco no solo guarda tus documentos.

También guarda gran parte del funcionamiento del sistema.

---

# Dos preguntas importantes

Cuando revisas el disco en Linux, normalmente quieres responder dos preguntas:

## 1. ¿Cuánto espacio libre queda?

Esto ayuda a saber si el sistema está en riesgo de quedarse sin almacenamiento.

## 2. ¿Qué directorios o archivos están ocupando más espacio?

Esto ayuda a encontrar la causa del problema.

Linux tiene comandos distintos para cada una de estas preguntas.

---

# Ver espacio general con `df`

El comando más común para revisar el espacio disponible en los sistemas de archivos es:

```bash
df -h
```

`df` significa **disk free**.

La opción `-h` significa **human readable**, es decir, un formato más fácil de leer para personas.

La salida suele mostrar columnas como:

- sistema de archivos
- tamaño total
- espacio usado
- espacio disponible
- porcentaje de uso
- punto de montaje

Esto te permite ver rápidamente si alguna parte del sistema está cerca de llenarse.

---

# Qué observar en `df -h`

Cuando veas la salida de `df -h`, lo más importante al inicio es fijarte en:

- **Use%** o porcentaje de uso
- espacio **Avail** o disponible
- el punto de montaje, como `/` o `/home`

Si un sistema de archivos está en valores muy altos, por ejemplo arriba de 80% o 90%, ya merece atención.

No siempre significa emergencia, pero sí significa que debes revisar qué está creciendo.

---

# Ver tamaño de directorios con `du`

Si `df` te dice cuánto espacio queda, el siguiente paso suele ser descubrir **qué lo está ocupando**.

Para eso sirve:

```bash
du -sh
```

`du` significa **disk usage**.

Por ejemplo, para revisar cuánto ocupa un directorio:

```bash
du -sh /var
```

La opción `-s` muestra un resumen.

La opción `-h` lo muestra en formato legible.

Esto te permite revisar directorios específicos y entender cuáles están creciendo más.

---

# Ejemplo de revisión práctica

Supón que notas que el sistema tiene poco espacio libre.

Un flujo operativo razonable sería:

## Paso 1: revisar el panorama general

```bash
df -h
```

## Paso 2: revisar directorios grandes

```bash
du -sh /var
du -sh /home
du -sh /tmp
```

## Paso 3: profundizar donde haga falta

Si `/var` ocupa mucho, puedes seguir revisando:

```bash
du -sh /var/log
```

Así vas acotando el problema poco a poco.

---

# Directorios que suelen crecer mucho

En sistemas Linux reales, algunos directorios suelen consumir mucho espacio con más frecuencia:

- `/var/log` por logs
- `/home` por archivos de usuarios
- `/tmp` por archivos temporales
- directorios de aplicaciones
- respaldos o archivos descargados

No siempre el problema está en el mismo lugar.

Por eso conviene revisar con método, no adivinar.

---

# Enfoque operativo: no solo ver, sino interpretar

Revisar el uso de disco no es solo correr comandos.

También implica interpretar lo que ves.

Por ejemplo:

- un directorio grande no siempre es un problema
- un directorio pequeño puede ser importante si está creciendo rápido
- un sistema con poco espacio libre puede seguir funcionando, pero con riesgo
- un log demasiado grande puede indicar una falla repetitiva

La pregunta práctica no es solo “¿qué ocupa espacio?”, sino también:

**¿esto es normal o no?**

Ese criterio se desarrolla con experiencia, pero desde ahora conviene pensar así.

---

# Buen hábito de operación

En entornos reales, revisar disco debería ser parte de una rutina básica.

Especialmente en:

- servidores
- máquinas virtuales
- ambientes de desarrollo
- sistemas con muchas aplicaciones
- equipos compartidos

Esperar a que el disco se llene por completo casi siempre complica más las cosas.

---

# Idea clave de esta lección

Revisar uso de disco en Linux es una tarea operativa esencial.

`df -h` permite ver el espacio total y disponible, mientras que `du -sh` permite identificar qué directorios están ocupando almacenamiento.

---

# Repaso

- El uso de disco indica cuánto almacenamiento está ocupado.
- `df -h` muestra espacio total, usado y disponible.
- `du -sh` muestra cuánto ocupa un directorio.
- Revisar disco ayuda a prevenir fallas operativas.
- Lo importante no es solo ver números, sino interpretarlos.
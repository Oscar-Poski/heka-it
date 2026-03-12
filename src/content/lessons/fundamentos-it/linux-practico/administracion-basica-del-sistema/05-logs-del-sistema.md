---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: administracion-basica-del-sistema
lessonSlug: 05-logs-del-sistema
title: "Logs del sistema"

summary: "Comprender qué son los logs del sistema en Linux y cómo se utilizan para monitorear y diagnosticar problemas."

durationMinutes: 8

objectives:

- "Comprender qué son los logs del sistema"
- "Identificar dónde se almacenan los logs en Linux"
- "Utilizar comandos básicos para revisar logs"
    
order: 5
    

---

# Logs del sistema

Los **logs del sistema** son archivos que registran eventos que ocurren dentro del sistema operativo.

Estos registros pueden incluir información sobre:

- inicio del sistema
- actividad de servicios
- errores del sistema
- conexiones de red
- eventos de seguridad

Los logs son una herramienta fundamental para **diagnosticar problemas y monitorear el sistema**.

---

# Dónde se almacenan los logs

En muchos sistemas Linux, los archivos de log se almacenan en el directorio:

```
/var/log
```

Este directorio contiene múltiples archivos que registran diferentes tipos de eventos del sistema.

Puedes ver su contenido usando:

```bash
ls /var/log
```

---

# Ejemplos de logs comunes

Dentro de `/var/log` puedes encontrar archivos como:

```
syslog
auth.log
kern.log
dmesg
```

Cada uno registra diferentes eventos del sistema.

---

# Log del sistema

Un archivo común es:

```
/var/log/syslog
```

Este archivo contiene información general del sistema.

Incluye eventos como:

- inicio de servicios
- mensajes del sistema
- advertencias y errores

---

# Log de autenticación

Otro archivo importante es:

```
/var/log/auth.log
```

Este archivo registra eventos relacionados con:

- inicio de sesión de usuarios
- accesos SSH
- cambios de permisos
- uso de `sudo`

Es útil para revisar actividad de seguridad.

---

# Ver logs con `cat`

Para ver el contenido de un log se puede usar:

```bash
cat /var/log/syslog
```

Sin embargo, los logs pueden ser muy grandes.

---

# Usar `less` para leer logs

Una forma más cómoda de leer logs es usando:

```bash
less /var/log/syslog
```

Esto permite:

- desplazarse por el archivo
- buscar texto
- leer el contenido gradualmente

---

# Ver logs recientes

También puedes ver las últimas líneas de un log usando:

```bash
tail /var/log/syslog
```

Esto muestra las últimas líneas del archivo.

---

# Monitorear logs en tiempo real

Para observar logs mientras se generan se puede usar:

```bash
tail -f /var/log/syslog
```

Esto es útil cuando se investigan problemas en tiempo real.

---

# Importancia de los logs

Los logs ayudan a los administradores a:

- diagnosticar errores
- investigar fallos del sistema
- analizar actividad del sistema
- detectar problemas de seguridad

Revisar logs es una de las primeras acciones cuando algo no funciona correctamente.

---

# Idea clave de esta lección

Los logs del sistema registran eventos importantes del sistema y ayudan a diagnosticar problemas.

---

# Repaso

- Los logs registran eventos del sistema.
- Muchos logs se almacenan en `/var/log`.
- `syslog` contiene eventos generales del sistema.
- `auth.log` registra actividad de autenticación.
- `less` y `tail` permiten revisar logs fácilmente.
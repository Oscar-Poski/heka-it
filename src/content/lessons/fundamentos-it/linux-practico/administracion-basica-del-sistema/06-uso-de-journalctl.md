---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: administracion-basica-del-sistema
lessonSlug: 06-uso-de-journalctl
title: "Uso de journalctl"

summary: "Aprender a consultar los registros del sistema usando journalctl en sistemas Linux basados en systemd."

durationMinutes: 9

objectives:

- "Comprender qué es el journal de systemd"
- "Consultar logs del sistema con journalctl"
- "Filtrar logs por servicio o tiempo"
    
order: 6
    

---

# Uso de `journalctl`

En sistemas Linux modernos que utilizan **systemd**, los eventos del sistema se almacenan en un registro central llamado:

```
journal
```

La herramienta principal para consultar estos registros es:

```bash
journalctl
```

`journalctl` permite ver información detallada sobre:

- eventos del sistema
- actividad de servicios
- mensajes del kernel
- errores del sistema

Esto lo convierte en una herramienta muy útil para **diagnóstico y administración del sistema**.

---

# Ver todos los logs

Para ver todos los registros almacenados en el journal se utiliza:

```bash
journalctl
```

Esto mostrará una lista cronológica de eventos del sistema.

Sin embargo, el resultado puede ser muy largo.

---

# Navegar por los logs

Normalmente `journalctl` abre los logs usando el visor `less`.

Esto permite:

- desplazarse con las flechas
- buscar texto con `/`
- salir presionando `q`

---

# Ver logs recientes

Para ver solo las últimas líneas del registro se puede usar:

```bash
journalctl -n 20
```

Esto muestra las últimas **20 entradas** del journal.

---

# Monitorear logs en tiempo real

Si deseas ver los eventos a medida que ocurren, puedes usar:

```bash
journalctl -f
```

Esto funciona de forma similar a `tail -f`.

Es útil para observar actividad del sistema en tiempo real.

---

# Ver logs de un servicio específico

También puedes filtrar los logs por servicio.

Ejemplo:

```bash
journalctl -u ssh
```

Esto muestra los registros relacionados con el servicio **SSH**.

---

# Ver logs desde el último arranque

Para ver solo los logs generados desde el último arranque del sistema se usa:

```bash
journalctl -b
```

Esto es útil cuando investigas problemas ocurridos después de reiniciar el sistema.

---

# Ver logs con errores

También puedes filtrar por nivel de prioridad.

Ejemplo para ver errores:

```bash
journalctl -p err
```

Esto muestra solo los mensajes de error registrados.

---

# Por qué usar journalctl

`journalctl` es una herramienta poderosa porque permite:

- centralizar logs del sistema
- filtrar información específica
- investigar problemas rápidamente
- analizar actividad de servicios

Muchos administradores de sistemas utilizan esta herramienta regularmente.

---

# Idea clave de esta lección

`journalctl` permite consultar y analizar los registros del sistema en sistemas Linux que utilizan `systemd`.

---

# Repaso

- `journalctl` consulta el journal de systemd.
- `journalctl -n` muestra logs recientes.
- `journalctl -f` monitorea logs en tiempo real.
- `journalctl -u servicio` filtra por servicio.
- `journalctl -b` muestra logs desde el último arranque.
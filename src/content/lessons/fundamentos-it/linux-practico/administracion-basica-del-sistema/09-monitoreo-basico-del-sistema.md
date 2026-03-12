---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: administracion-basica-del-sistema
lessonSlug: 09-monitoreo-basico-del-sistema
title: "Monitoreo básico del sistema: Repaso"

summary: "Aprender a observar el estado general de un sistema Linux utilizando herramientas básicas de monitoreo."

durationMinutes: 9

objectives:

- "Comprender qué significa monitorear un sistema"
- "Ver uso de CPU, memoria y procesos"
- "Identificar herramientas básicas de monitoreo en Linux"
    
order: 9
    

---

# Monitoreo básico del sistema: Repaso

En la administración de sistemas es muy importante **saber qué está ocurriendo dentro del sistema en todo momento**.

El monitoreo del sistema consiste en observar el uso de recursos como:

- CPU
- memoria
- almacenamiento
- procesos
- carga del sistema

Esto permite detectar problemas antes de que afecten el funcionamiento del sistema.

---

# Por qué es importante monitorear

El monitoreo ayuda a responder preguntas como:

- ¿el sistema está sobrecargado?
- ¿algún proceso consume demasiados recursos?
- ¿hay poca memoria disponible?
- ¿el sistema está funcionando con normalidad?

En servidores, el monitoreo constante es esencial para mantener estabilidad y rendimiento.

---

# Ver procesos con `top`

Una de las herramientas más comunes para monitorear el sistema es:

```bash
top
```

`top` muestra información en tiempo real sobre:

- procesos en ejecución
- uso de CPU
- uso de memoria
- carga del sistema

También muestra qué procesos están utilizando más recursos.

---

# Interpretar información de top

Dentro de `top` puedes ver datos como:

- **CPU usage** → porcentaje de uso del procesador
- **memory usage** → memoria utilizada
- **running processes** → procesos activos

Los procesos con mayor consumo aparecen normalmente en la parte superior de la lista.

---

# Ver memoria del sistema

Para ver información sobre la memoria se utiliza:

```bash
free -h
```

La opción `-h` muestra los valores en formato legible.

Esto muestra:

- memoria total
- memoria usada
- memoria disponible

---

# Ver uso de CPU y carga

Otra herramienta útil es:

```bash
uptime
```

Este comando muestra:

- cuánto tiempo lleva el sistema encendido
- número de usuarios conectados
- carga del sistema

La carga del sistema indica **cuántos procesos están esperando CPU**.

---

# Ver uso de disco

El uso del almacenamiento también es parte del monitoreo del sistema.

Para verlo se utiliza:

```bash
df -h
```

Esto muestra el espacio disponible en cada sistema de archivos.

---

# Ver actividad de procesos

Otra herramienta útil es:

```bash
ps aux
```

Este comando muestra una lista de procesos en ejecución junto con información como:

- usuario que ejecuta el proceso
- uso de CPU
- uso de memoria
- comando ejecutado

---

# Monitoreo en entornos reales

En servidores reales, el monitoreo puede incluir herramientas más avanzadas.

Por ejemplo:

- sistemas de monitoreo centralizado
- alertas automáticas
- dashboards de rendimiento

Sin embargo, muchas investigaciones iniciales comienzan con herramientas básicas del sistema.

---

# Idea clave de esta lección

El monitoreo del sistema permite observar el uso de recursos y detectar problemas antes de que afecten el funcionamiento del sistema.

---

# Repaso

- Monitorear significa observar el estado del sistema.
- `top` muestra procesos y uso de recursos en tiempo real.
- `free -h` muestra uso de memoria.
- `uptime` muestra carga del sistema.
- `df -h` muestra uso de almacenamiento.
- `ps aux` lista procesos en ejecución.
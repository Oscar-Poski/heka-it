---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: gestion-de-procesos
lessonSlug: 03-monitoreo-del-sistema
title: "Monitoreo del sistema"

summary: "Aprender a observar el estado general del sistema Linux, incluyendo uso de CPU, memoria y carga del sistema."

durationMinutes: 8

objectives:

- "Comprender qué significa monitorear un sistema"
- "Observar uso de CPU, memoria y carga del sistema"
- "Usar herramientas básicas para supervisar el estado del sistema"
    
order: 3
    

---

# Monitoreo del sistema

Además de ver procesos individuales, es importante poder **observar el estado general del sistema**.

Esto se conoce como **monitoreo del sistema**.

Monitorear el sistema permite responder preguntas como:

- ¿la CPU está muy ocupada?
- ¿queda memoria disponible?
- ¿el sistema está sobrecargado?
- ¿algún proceso está consumiendo demasiados recursos?

Este tipo de información es muy útil para **diagnosticar problemas de rendimiento**.

---

# Recursos principales del sistema

Cuando monitoreas un sistema Linux, normalmente observas tres recursos principales.

## CPU

Indica cuánto trabajo está realizando el procesador.

Si la CPU está constantemente al 100%, el sistema podría estar saturado.

---

## Memoria

La memoria RAM permite que los programas se ejecuten rápidamente.

Si la memoria se llena, el sistema puede volverse lento o usar memoria de intercambio (swap).

---

## Carga del sistema

La carga del sistema representa **cuántos procesos están esperando tiempo de CPU**.

Una carga muy alta puede indicar que el sistema está trabajando más de lo que puede manejar.

---

# Ver uso de CPU y carga con `top`

Una de las herramientas más usadas para monitoreo básico es:

```bash
top
```

La parte superior de la pantalla muestra información como:

- carga del sistema
- uso de CPU
- memoria utilizada
- procesos activos

Por ejemplo, podrías ver algo como:

```
load average: 0.20, 0.35, 0.40
```

Esto representa la carga promedio del sistema en los últimos:

- 1 minuto
- 5 minutos
- 15 minutos

---

# Ver memoria con `free`

Para revisar el uso de memoria se utiliza:

```bash
free -h
```

La opción `-h` muestra la información en formato legible.

Salida típica:

```
              total   used   free   shared  buff/cache  available
Mem:           16G     5G     4G       1G       7G        10G
Swap:           2G     0G     2G
```

Esto indica cuánta memoria está:

- utilizada
- libre
- reservada para caché
- disponible para nuevos procesos

---

# Ver carga del sistema con `uptime`

Otra herramienta sencilla es:

```bash
uptime
```

Este comando muestra:

- cuánto tiempo lleva encendido el sistema
- cuántos usuarios están conectados
- la carga promedio del sistema

Ejemplo:

```
10:20:15 up 2 days,  3:12,  2 users,  load average: 0.15, 0.20, 0.30
```

Esto ayuda a tener una visión rápida del estado del sistema.

---

# Ver uso de CPU con `top`

Dentro de `top`, también puedes observar cómo se utiliza la CPU.

Normalmente se muestran categorías como:

- **us** → uso por procesos de usuario
- **sy** → uso por el sistema
- **id** → CPU inactiva

Si el valor `id` es alto, significa que el sistema tiene CPU disponible.

---

# Interpretar el estado del sistema

El monitoreo no solo consiste en ejecutar comandos, sino en **interpretar la información**.

Por ejemplo:

- CPU alta durante unos segundos puede ser normal
- CPU constantemente al máximo puede indicar un problema
- memoria llena no siempre es malo si hay caché disponible
- carga alta puede significar demasiados procesos esperando CPU

La clave es observar **patrones y comportamiento general**.

---

# Monitoreo en entornos reales

En sistemas de producción o servidores, el monitoreo es aún más importante.

Se utiliza para:

- detectar problemas antes de que afecten usuarios
- observar crecimiento de recursos
- investigar fallos de rendimiento
- analizar comportamiento de aplicaciones

Muchas empresas utilizan herramientas avanzadas de monitoreo para automatizar estas tareas.

---

# Idea clave de esta lección

El monitoreo del sistema permite observar el uso de CPU, memoria y carga del sistema para entender cómo está funcionando Linux en un momento dado.

---

# Repaso

- Monitorear el sistema permite evaluar su rendimiento.
- Los recursos principales son CPU, memoria y carga del sistema.
- `top` permite ver uso de recursos en tiempo real.
- `free -h` muestra uso de memoria.
- `uptime` muestra carga del sistema y tiempo activo.
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: gestion-de-procesos
lessonSlug: 05-controlar-procesos-kill-killall
title: "Controlar procesos (kill, killall)"

summary: "Aprender a detener o controlar procesos en Linux utilizando comandos como kill y killall."

durationMinutes: 8

objectives:

- "Entender cómo finalizar procesos en Linux"
- "Usar el comando kill con un PID"
- "Usar killall para terminar procesos por nombre"
    
order: 5
    

---

# Controlar procesos (`kill`, `killall`)

En Linux, a veces es necesario **detener un proceso manualmente**.

Esto puede ocurrir cuando:

- un programa deja de responder
- un proceso consume demasiados recursos
- un servicio necesita reiniciarse
- un proceso se ejecutó por error

Para controlar o terminar procesos se utilizan comandos como:

- `kill`
- `killall`

Estos comandos envían **señales** a los procesos.

---

# ¿Qué significa “matar” un proceso?

Aunque el nombre `kill` suena agresivo, en realidad significa **enviar una señal a un proceso**.

Las señales son mensajes que el sistema envía a los procesos para indicarles que hagan algo.

Por ejemplo:

- terminar
- reiniciarse
- detenerse
- recargar configuración

La señal más común es la señal para **terminar el proceso**.

---

# El comando `kill`

El comando `kill` se utiliza para enviar una señal a un proceso específico.

La sintaxis básica es:

```bash
kill PID
```

Por ejemplo:

```bash
kill 2451
```

Aquí `2451` es el **PID del proceso**.

Para encontrar el PID normalmente se utiliza:

```bash
ps aux
```

o

```bash
top
```

---

# Señal más común: SIGTERM

Cuando usas `kill` sin especificar señal, el sistema envía:

```
SIGTERM
```

Esta señal solicita al proceso que **termine de forma ordenada**.

Esto permite que el proceso:

- cierre archivos
- libere memoria
- termine operaciones pendientes

Es la forma recomendada de detener procesos.

---

# Forzar terminación con SIGKILL

Si un proceso no responde, puede ser necesario forzarlo a terminar.

Para esto se utiliza la señal:

```
SIGKILL
```

Ejemplo:

```bash
kill -9 2451
```

El número `9` representa la señal **SIGKILL**.

Esta señal termina el proceso inmediatamente.

Sin embargo, debe usarse con cuidado porque el proceso **no puede limpiar recursos antes de cerrarse**.

---

# El comando `killall`

En lugar de usar el PID, también es posible terminar procesos **por nombre**.

Para esto se utiliza:

```bash
killall
```

Ejemplo:

```bash
killall firefox
```

Esto terminará todos los procesos llamados `firefox`.

Esto es útil cuando un programa tiene múltiples procesos activos.

---

# Ver procesos antes de terminarlos

Antes de detener procesos es recomendable verificar qué procesos están activos.

Por ejemplo:

```bash
ps aux |grep nombre_proceso
```

Esto permite confirmar el nombre o PID del proceso antes de enviar la señal.

---

# Señales comunes

Linux utiliza muchas señales diferentes.

Algunas de las más comunes son:

```
SIGTERM  (15)  terminar proceso de forma normal
SIGKILL  (9)   terminar proceso inmediatamente
SIGSTOP  (19)  pausar proceso
SIGCONT  (18)  reanudar proceso
```

Estas señales permiten controlar el comportamiento de los procesos.

---

# Cuándo usar control de procesos

Controlar procesos es útil cuando:

- un programa se congela
- un servicio consume demasiados recursos
- se necesita reiniciar una aplicación
- se administran servidores

Saber controlar procesos es una habilidad básica para operar sistemas Linux.

---

# Idea clave de esta lección

Los comandos `kill` y `killall` permiten enviar señales a procesos para controlarlos o terminarlos.

Estas herramientas son esenciales para administrar procesos en Linux.

---

# Repaso

- `kill` envía señales a un proceso mediante su PID.
- `killall` termina procesos usando su nombre.
- `SIGTERM` solicita terminar el proceso de forma ordenada.
- `SIGKILL` fuerza la terminación inmediata.
- Es recomendable verificar procesos antes de detenerlos.
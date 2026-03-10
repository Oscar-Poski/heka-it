---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: gestion-de-procesos
lessonSlug: 02-ver-procesos-en-ejecucion
title: "Ver procesos en ejecución"

summary: "Aprender a visualizar los procesos activos en el sistema utilizando herramientas básicas de Linux."

durationMinutes: 8

objectives:

- "Ver los procesos que están ejecutándose en el sistema"
- "Entender la información mostrada por los comandos de procesos"
- "Utilizar herramientas comunes para monitorear procesos"
    
order: 2
    

---

# Ver procesos en ejecución

En Linux, muchos programas y servicios se ejecutan al mismo tiempo.

Para administrar el sistema correctamente, es importante poder **ver qué procesos están activos**.

Esto permite responder preguntas como:

- ¿qué programas están ejecutándose?
- ¿qué proceso está usando CPU o memoria?
- ¿qué servicio está funcionando en el sistema?

Linux ofrece varias herramientas para observar los procesos en ejecución.

---

# El comando `ps`

El comando más básico para ver procesos es:

```bash
ps
```

Este comando muestra los procesos asociados a la terminal actual.

La salida puede verse algo así:

```
PID   TTY          TIME CMD
2410  pts/0        00:00:00 bash
2531  pts/0        00:00:00 ps
```

Aquí se muestra:

- el identificador del proceso
- la terminal asociada
- el tiempo de uso de CPU
- el comando que se está ejecutando

---

# Ver más procesos con `ps aux`

Para ver **todos los procesos del sistema**, se utiliza:

```bash
ps aux
```

Este comando muestra información mucho más completa.

Por ejemplo:

```
USER   PID %CPU %MEM VSZ   RSS TTY   STAT START TIME COMMAND
root     1  0.0  0.1 16984  980 ?     Ss   08:00 0:02 systemd
oscar  2410 0.0  0.2 21000 2100 pts/0 S    10:10 0:00 bash
```

Esto incluye información sobre:

- usuario propietario
- uso de CPU
- uso de memoria
- estado del proceso
- comando ejecutado

---

# El comando `top`

Otra herramienta muy útil es:

```bash
top
```

Este comando muestra **una vista dinámica del sistema**.

En lugar de una lista estática, `top` actualiza continuamente la información.

Permite ver:

- procesos activos
- uso de CPU
- uso de memoria
- carga del sistema

Esto es muy útil para monitorear el sistema en tiempo real.

---

# Información mostrada en `top`

La pantalla de `top` incluye varios datos importantes.

Por ejemplo:

- carga promedio del sistema
- uso total de CPU
- memoria utilizada
- lista de procesos ordenados por uso de recursos

Esto ayuda a detectar procesos que consumen demasiados recursos.

---

# Ordenar procesos por uso de recursos

En `top`, los procesos normalmente aparecen ordenados por **uso de CPU**.

Esto permite identificar rápidamente:

- procesos pesados
- programas que consumen muchos recursos
- posibles problemas de rendimiento

---

# Salir de `top`

Para salir de la interfaz de `top`, simplemente presiona:

```bash
q
```

Esto cerrará la herramienta y volverás a la terminal normal.

---

# Otra herramienta moderna: `htop`

En muchos sistemas también existe una herramienta llamada:

```bash
htop
```

Es una versión más visual e interactiva de `top`.

Permite:

- navegar con teclado
- ordenar procesos fácilmente
- ver uso de CPU por núcleo
- gestionar procesos de forma más sencilla

Sin embargo, no siempre está instalada por defecto.

---

# Cuándo revisar procesos

Ver procesos es útil en muchas situaciones.

Por ejemplo:

- cuando el sistema está lento
- cuando un programa no responde
- cuando se quiere verificar si un servicio está activo
- cuando se administran servidores

Saber observar procesos es una habilidad básica en administración de sistemas Linux.

---

# Idea clave de esta lección

Linux ofrece herramientas como `ps`, `top` y `htop` para ver y monitorear procesos en ejecución dentro del sistema.

---

# Repaso

- Los procesos activos pueden visualizarse desde la terminal.
- `ps` muestra procesos asociados a la sesión actual.
- `ps aux` muestra todos los procesos del sistema.
- `top` permite monitorear procesos en tiempo real.
- `htop` ofrece una interfaz más interactiva para gestionar procesos.
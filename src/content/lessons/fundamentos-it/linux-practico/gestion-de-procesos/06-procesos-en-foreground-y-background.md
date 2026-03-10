---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: gestion-de-procesos
lessonSlug: 06-procesos-en-foreground-y-background
title: "Procesos en foreground y background"

summary: "Entender la diferencia entre procesos en primer plano y segundo plano, y cómo controlarlos desde la terminal."

durationMinutes: 8

objectives:

- "Comprender qué es un proceso en foreground"
- "Comprender qué es un proceso en background"
- "Mover procesos entre foreground y background"
    
order: 6
    

---

# Procesos en foreground y background

Cuando ejecutas un programa desde la terminal, ese programa puede ejecutarse de dos formas:

- **foreground (primer plano)**
- **background (segundo plano)**

Comprender esta diferencia es importante para trabajar cómodamente con la terminal y ejecutar múltiples tareas al mismo tiempo.

---

# Procesos en foreground

Un proceso en **foreground** es un proceso que ocupa la terminal mientras se ejecuta.

Esto significa que:

- la terminal queda “ocupada”
- no puedes ejecutar otros comandos hasta que el proceso termine

Por ejemplo:

```bash
sleep10
```

Este comando pausa durante 10 segundos.

Mientras el proceso se ejecuta, la terminal no acepta nuevos comandos.

---

# Interrumpir un proceso

Si necesitas detener un proceso que está en foreground puedes usar:

```
Ctrl + C
```

Esto envía una señal al proceso para que termine.

Este atajo es muy común cuando un programa se ejecuta por error o tarda demasiado.

---

# Procesos en background

Un proceso en **background** se ejecuta sin bloquear la terminal.

Esto permite seguir usando la terminal mientras el proceso continúa ejecutándose.

Para ejecutar un proceso en background se utiliza el símbolo:

```
&
```

Ejemplo:

```bash
sleep30 &
```

Esto ejecuta el proceso en segundo plano.

La terminal mostrará algo como:

```
[1] 2450
```

Aquí:

- `[1]` es el número de trabajo
- `2450` es el PID del proceso

---

# Ver trabajos en background

Puedes ver los procesos en segundo plano de la terminal con:

```bash
jobs
```

Esto mostrará algo como:

```
[1]+  Running  sleep 30 &
[2]-  Stopped    nano archivo.txt
```

Esto indica que el proceso sigue ejecutándose.

- el número del job

- su estado (Running, Stopped, Done)

- el comando asociado

---

# Pausar un proceso

También puedes **pausar temporalmente un proceso** usando:

```
Ctrl + Z
```

Esto detiene el proceso y lo coloca en estado suspendido.

Después puedes decidir si ejecutarlo en background o foreground.

---

# Enviar proceso a background

Si pausaste un proceso con `Ctrl + Z`, puedes enviarlo al background usando:

```bash
bg
```

El proceso continuará ejecutándose en segundo plano.

---

# Traer proceso al foreground

También es posible traer un proceso de vuelta al primer plano.

Para esto se usa:

```bash
fg
```

Esto vuelve a conectar el proceso con la terminal.

Si hay varios jobs, puedes indicar cuál traer usando su número.

Ejemplo:

```bash
fg %1
```

Esto trae el job número **1** al foreground.

---

# Ejemplo práctico

Supongamos que ejecutas:

```bash
sleep100
```

El proceso está en foreground.

Presionas:

```
Ctrl + Z
```

Ahora está suspendido.

Puedes enviarlo al background:

```bash
bg
```

Y continuar usando la terminal.

Si quieres traerlo de vuelta:

```bash
fg
```

---

# Por qué es útil

Trabajar con procesos en background es muy útil cuando:

- ejecutas comandos largos
- descargas archivos grandes
- ejecutas scripts
- administras servidores

Esto permite **seguir usando la terminal sin esperar a que el proceso termine**.

---

# Idea clave de esta lección

Los procesos pueden ejecutarse en **foreground**, ocupando la terminal, o en **background**, permitiendo seguir trabajando mientras el proceso se ejecuta.

---

# Repaso

- Un proceso en foreground ocupa la terminal.
- Un proceso en background se ejecuta sin bloquear la terminal.
- `&` ejecuta un proceso en background.
- `Ctrl + Z` pausa un proceso.
- `bg` envía un proceso al background.
- `fg` trae un proceso al foreground.
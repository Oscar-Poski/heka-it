---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: gestion-de-procesos
lessonSlug: 04-estados-de-procesos
title: "Estados de procesos"

summary: "Entender los diferentes estados en los que puede encontrarse un proceso en Linux."

durationMinutes: 7

objectives:

- "Comprender los diferentes estados de los procesos"
- "Interpretar los estados mostrados por herramientas como ps y top"
- "Entender cómo el sistema operativo gestiona la ejecución de procesos"
    
order: 4
    

---

# Estados de procesos

Un proceso en Linux no siempre está ejecutándose activamente.

Durante su vida, un proceso puede pasar por **diferentes estados**, dependiendo de lo que esté haciendo o esperando.

Estos estados ayudan al sistema operativo a **administrar el uso del procesador y otros recursos**.

Las herramientas que muestran procesos, como `ps` o `top`, también indican el estado en el que se encuentra cada proceso.

---

# Estados principales de un proceso

Linux utiliza varios estados para describir la situación de un proceso.

Los más comunes son:

- **Running**
- **Sleeping**
- **Stopped**
- **Zombie**

Cada uno describe una situación diferente en la ejecución del proceso.

---

# Running (R)

El estado **Running** indica que el proceso está:

- ejecutándose en la CPU
    
    o
    
- listo para ejecutarse cuando el procesador esté disponible

En las herramientas del sistema suele aparecer como:

```
R
```

Un proceso en estado *running* está utilizando activamente recursos del sistema.

---

# Sleeping (S)

El estado **Sleeping** indica que el proceso está esperando que ocurra algún evento.

Por ejemplo:

- esperar entrada del usuario
- esperar acceso a disco
- esperar datos de red

Este es uno de los estados más comunes.

En las herramientas del sistema aparece como:

```
S
```

El proceso no está usando CPU mientras espera.

---

# Uninterruptible Sleep (D)

Existe una variante llamada **uninterruptible sleep**.

Aparece como:

```
D
```

Esto ocurre cuando un proceso está esperando operaciones críticas del sistema, normalmente relacionadas con **entrada/salida de disco**.

Mientras está en este estado, el proceso no puede interrumpirse fácilmente.

---

# Stopped (T)

El estado **Stopped** indica que el proceso ha sido pausado.

Esto puede ocurrir cuando:

- el usuario detiene el proceso manualmente
- se envía una señal de pausa
- se utiliza control de trabajos en la terminal

Este estado aparece como:

```
T
```

Un proceso detenido puede reanudarse posteriormente.

---

# Zombie (Z)

Un **zombie** es un proceso que ya terminó de ejecutarse, pero cuyo registro aún existe en la tabla de procesos.

Aparece como:

```
Z
```

Esto ocurre cuando:

- el proceso hijo terminó
- el proceso padre aún no ha recogido su estado de salida

Normalmente los procesos zombie desaparecen rápidamente.

Si permanecen mucho tiempo, puede indicar un problema en el programa padre.

---

# Ver estados con `ps`

Puedes observar los estados de procesos usando:

```bash
ps aux
```

La columna **STAT** muestra el estado del proceso.

Por ejemplo:

```
USER   PID  STAT COMMAND
root     1  Ss   systemd
oscar  2145 S    bash
oscar  2200 R    ps
```

Aquí podemos ver procesos en diferentes estados.

---

# Estados en `top`

En `top` también puedes observar los estados de los procesos.

Generalmente aparecen abreviados con letras como:

- **R** → running
- **S** → sleeping
- **D** → uninterruptible sleep
- **T** → stopped
- **Z** → zombie

Esto ayuda a entender qué están haciendo los procesos en el sistema.

---

# El ciclo de vida de un proceso

Un proceso normalmente sigue este ciclo:

1. se crea
2. se ejecuta
3. puede esperar recursos
4. termina su ejecución

Durante este ciclo puede cambiar varias veces de estado.

Linux gestiona estos cambios constantemente para mantener el sistema funcionando de manera eficiente.

---

# Idea clave de esta lección

Los procesos en Linux pueden encontrarse en distintos estados dependiendo de si están ejecutándose, esperando recursos, detenidos o terminados.

---

# Repaso

- Los procesos cambian de estado durante su ejecución.
- **R** indica que el proceso está ejecutándose.
- **S** indica que el proceso está esperando.
- **D** indica espera de operaciones de disco.
- **T** indica proceso detenido.
- **Z** indica proceso zombie.
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: gestion-de-procesos
lessonSlug: 01-que-es-un-proceso
title: "¿Qué es un proceso?"

summary: "Entender qué es un proceso en Linux y cómo el sistema operativo ejecuta programas."

durationMinutes: 7

objectives:

- "Comprender qué es un proceso"
- "Diferenciar entre programa y proceso"
- "Entender cómo Linux gestiona la ejecución de programas"
    
order: 1
    

---

# ¿Qué es un proceso?

Cuando ejecutas un programa en Linux, el sistema operativo crea algo llamado **proceso**.

Un **proceso** es simplemente **un programa que está en ejecución**.

Por ejemplo, cuando ejecutas un comando como:

```bash
ls
```

el sistema crea un proceso para ejecutar ese comando.

Una vez que el comando termina, el proceso desaparece.

---

# Programa vs proceso

Es importante distinguir entre dos conceptos.

**Programa**

Un programa es un archivo almacenado en el disco.

Por ejemplo:

```
/usr/bin/ls
```

Es solo el código del programa.

---

**Proceso**

Un proceso es **una instancia de ese programa ejecutándose en memoria**.

Incluye:

- el código del programa
- datos en memoria
- recursos del sistema
- estado de ejecución

En otras palabras:

> un programa es algo almacenado, un proceso es algo ejecutándose.
> 

---

# Qué contiene un proceso

Cuando Linux crea un proceso, el sistema asigna varios recursos.

Por ejemplo:

- memoria
- tiempo de CPU
- identificador del proceso
- variables de entorno
- archivos abiertos

Esto permite que el programa funcione de manera independiente dentro del sistema.

---

# Identificador de proceso (PID)

Cada proceso en Linux tiene un número único llamado:

**PID (Process ID)**

Este número permite al sistema identificar cada proceso.

Por ejemplo:

```bash
ps
```

podría mostrar algo como:

```
PID   TTY          TIME CMD
1234  pts/0        00:00:00 bash
1256  pts/0        00:00:00 ls
```

Aquí:

- `1234` es el PID del proceso `bash`
- `1256` es el PID del proceso `ls`

---

# Procesos en segundo plano

No todos los procesos requieren interacción directa del usuario.

Muchos procesos se ejecutan **en segundo plano**.

Ejemplos:

- servicios del sistema
- servidores web
- bases de datos
- demonios del sistema

Estos procesos pueden ejecutarse continuamente mientras el sistema está activo.

---

# El primer proceso del sistema

Cuando Linux inicia, el sistema crea un proceso especial llamado:

```
PID 1
```

Este proceso es responsable de iniciar otros procesos del sistema.

En sistemas modernos suele ser:

```bash
systemd
```

Este proceso actúa como **el padre de muchos procesos del sistema**.

---

# Jerarquía de procesos

Los procesos en Linux forman una **estructura jerárquica**.

Cada proceso puede crear otros procesos llamados **procesos hijos**.

Por ejemplo:

```
systemd (PID 1)
 ├─ sshd
 │   └─ bash
 │       └─ ls
```

Aquí:

- `systemd` inicia servicios
- `sshd` inicia sesiones remotas
- `bash` ejecuta comandos
- `ls` es un proceso temporal

Esta estructura ayuda al sistema a organizar la ejecución de programas.

---

# Estados de los procesos

Un proceso puede encontrarse en diferentes estados.

Por ejemplo:

- ejecutándose
- esperando recursos
- en pausa
- terminado

Linux gestiona constantemente estos estados para distribuir el uso del procesador entre los procesos activos.

---

# Idea clave de esta lección

Un proceso es un programa en ejecución.

Linux crea procesos para ejecutar comandos, aplicaciones y servicios, y los administra mediante identificadores únicos llamados PID.

---

# Repaso

- Un proceso es un programa en ejecución.
- Cada proceso tiene un identificador llamado PID.
- Los procesos utilizan recursos como memoria y CPU.
- Los procesos pueden crear procesos hijos.
- Linux organiza los procesos en una estructura jerárquica.
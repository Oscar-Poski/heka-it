---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: automatizacion-y-scripting
lessonSlug: 01-que-es-bash
title: "¿Qué es Bash?"

summary: "Comprender qué es Bash y por qué es el shell más utilizado en sistemas Linux."

durationMinutes: 7

objectives:

- "Comprender qué es Bash"
- "Entender qué es un shell"
- "Reconocer el papel de Bash en la automatización de tareas"
    
order: 1
    

---

# ¿Qué es Bash?

En Linux, el usuario interactúa con el sistema principalmente a través de un **shell**.

Un **shell** es un programa que permite enviar comandos al sistema operativo.

Uno de los shells más utilizados en Linux es:

```
Bash
```

Bash significa:

**Bourne Again SHell**

Es una versión mejorada del shell original de Unix llamado **sh (Bourne shell)**.

Hoy en día, Bash es el shell predeterminado en muchas distribuciones Linux.

---

# Qué hace Bash

Bash actúa como **intérprete de comandos**.

Esto significa que:

1. el usuario escribe un comando
2. Bash interpreta el comando
3. el sistema ejecuta la acción correspondiente

Por ejemplo:

```bash
ls
```

Bash interpreta este comando y el sistema muestra el contenido del directorio.

---

# Bash y la terminal

Cuando abres una **terminal** en Linux, normalmente estás interactuando con un shell.

En la mayoría de los casos ese shell es **Bash**.

Esto significa que cada comando que escribes en la terminal está siendo procesado por Bash.

---

# Qué es un script de Bash

Además de ejecutar comandos uno por uno, Bash permite **guardar una serie de comandos dentro de un archivo**.

Ese archivo se llama **script**.

Un script es simplemente un archivo que contiene comandos que se ejecutarán automáticamente.

Por ejemplo:

```bash
#!/bin/bash

echo "Hola mundo"
```

Este archivo contiene un pequeño programa que imprime un mensaje.

---

# Para qué se usa Bash

Bash se utiliza ampliamente para automatizar tareas en Linux.

Por ejemplo:

- ejecutar procesos repetitivos
- administrar servidores
- instalar o configurar software
- automatizar respaldos
- desplegar aplicaciones

Muchas herramientas de administración y DevOps utilizan scripts de Bash.

---

# Ventajas de Bash

Bash es muy popular porque:

- está disponible en casi todos los sistemas Linux
- permite automatizar tareas fácilmente
- se integra bien con herramientas del sistema
- es muy poderoso para manipular archivos y procesos

Por esta razón, aprender Bash es una habilidad muy valiosa para trabajar con Linux.

---

# Idea clave de esta lección

Bash es un shell que interpreta comandos en Linux y permite automatizar tareas mediante scripts.

---

# Repaso

- Bash es un shell utilizado en Linux.
- Un shell interpreta comandos del usuario.
- Bash permite ejecutar comandos desde la terminal.
- Bash también permite crear scripts para automatizar tareas.
- Es una herramienta fundamental para trabajar con Linux.
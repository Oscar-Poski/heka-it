---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: intro-linux
lessonSlug: 07-conceptos-clave-kernel-shell-terminal-procesos-y-usuarios
title: "Conceptos Clave"

summary: "Introducción a cinco conceptos fundamentales para entender cómo funciona un sistema Linux: kernel, shell, terminal, procesos y usuarios."

durationMinutes: 7

objectives:

- "Entender qué es el kernel en un sistema Linux"
- "Diferenciar entre shell y terminal"
- "Comprender qué es un proceso"
- "Entender el concepto de usuarios en Linux"
    
order: 7
    

---

# Conceptos clave: kernel, shell, terminal, procesos y usuarios

Antes de comenzar a usar Linux de forma práctica, es importante familiarizarse con algunos conceptos básicos.

Estos conceptos aparecen constantemente cuando se trabaja con el sistema.

Entenderlos desde el principio hará que muchas cosas tengan más sentido más adelante.

En esta lección veremos cinco de los más importantes:

1. kernel
2. shell
3. terminal
4. procesos
5. usuarios

---

## Kernel

El **kernel** es el núcleo del sistema operativo.

Su función principal es actuar como intermediario entre el software y el hardware.

El kernel administra recursos fundamentales de la computadora, como:

- el procesador
- la memoria
- los discos
- la red
- los dispositivos conectados

Cuando un programa quiere leer un archivo, usar memoria o comunicarse con la red, en realidad está solicitando esa operación al kernel.

Por eso el kernel es la pieza central del sistema.

---

## Shell

La **shell** es un programa que interpreta los comandos que escribe el usuario.

Cuando escribes un comando en Linux, la shell:

1. lee el texto que escribiste
2. lo interpreta
3. ejecuta el programa correspondiente

Por ejemplo, si escribes:

```bash
ls
```

la shell entiende ese comando y ejecuta el programa que lista los archivos del directorio actual.

Algunas shells comunes en Linux son:

- Bash
- Zsh
- Fish

En este curso trabajaremos principalmente con **Bash**, que es una de las más utilizadas.

---

## Terminal

La **terminal** es la aplicación que te permite interactuar con la shell.

Es decir:

- la **terminal** es la ventana o programa que ves
- la **shell** es el programa que interpreta los comandos

Muchas veces la gente usa ambas palabras como si fueran lo mismo, pero técnicamente no lo son.

Puedes pensar en la terminal como **la interfaz**, y en la shell como **el intérprete de comandos**.

---

## Procesos

Un **proceso** es un programa que está en ejecución.

Cada vez que ejecutas algo en el sistema, se crea un proceso.

Por ejemplo:

- abrir un navegador
- ejecutar un editor de texto
- correr un comando en la terminal
- iniciar un servicio del sistema

Todos esos son procesos.

El sistema operativo administra estos procesos, asignándoles recursos como:

- tiempo de CPU
- memoria
- acceso a archivos

Linux puede ejecutar muchos procesos al mismo tiempo, lo que permite que múltiples programas funcionen de manera simultánea.

---

## Usuarios

Linux es un sistema **multiusuario**.

Esto significa que el sistema puede manejar múltiples cuentas de usuario con diferentes niveles de acceso.

Cada usuario tiene:

- un nombre de usuario
- una contraseña
- un directorio personal
- ciertos permisos dentro del sistema

Esto permite separar responsabilidades y proteger el sistema.

También existe un usuario especial llamado **root**.

El usuario root tiene control total sobre el sistema y puede modificar cualquier configuración o archivo.

Por esta razón, normalmente se utiliza con cuidado.

---

## Cómo se relacionan estos conceptos

Todos estos elementos trabajan juntos dentro del sistema.

Un flujo típico podría verse así:

1. Un **usuario** abre una **terminal**
2. La terminal ejecuta una **shell**
3. El usuario escribe un comando
4. La shell inicia un **proceso**
5. Ese proceso solicita recursos al **kernel**

Este flujo se repite constantemente cuando trabajas en Linux.

---

## Idea clave de esta lección

Para entender Linux es importante comprender cómo interactúan sus componentes principales.

El usuario interactúa con la **terminal**, la terminal ejecuta una **shell**, la shell lanza **procesos**, y todos esos procesos dependen del **kernel** para usar el hardware.

---

## Repaso

- El **kernel** es el núcleo del sistema operativo.
- La **shell** interpreta los comandos del usuario.
- La **terminal** es la interfaz donde escribimos comandos.
- Un **proceso** es un programa en ejecución.
- Linux permite múltiples **usuarios** con distintos permisos.
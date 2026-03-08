---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 02-primeros-comandos-en-linux
title: "Primeros comandos en Linux"

summary: "Aprender algunos de los primeros comandos que se utilizan en la terminal de Linux para comenzar a interactuar con el sistema."

durationMinutes: 7

objectives:

- "Ejecutar comandos básicos en la terminal"
- "Comprender cómo se estructuran los comandos en Linux"
- "Familiarizarse con algunos comandos fundamentales"
    
order: 2
    

---

# Primeros comandos en Linux

Ahora que ya sabemos qué es la **terminal**, es momento de comenzar a usarla.

En Linux, muchas tareas se realizan escribiendo **comandos**.

Un comando es simplemente una instrucción que le damos al sistema para que haga algo.

Por ejemplo:

- mostrar archivos
- ver en qué carpeta estamos
- mostrar información del sistema
- ejecutar programas

En esta lección veremos algunos de los primeros comandos que suelen aprenderse al empezar con Linux.

---

## Cómo se ejecuta un comando

Cuando abres la terminal normalmente verás algo parecido a esto:

```bash
usuario@equipo:~$
```

Este texto se llama **prompt**.

Indica que la terminal está lista para recibir un comando.

Para ejecutar un comando solo debes:

1. escribir el comando
2. presionar **Enter**

Por ejemplo:

```bash
date
```

Este comando muestra la fecha y hora actuales del sistema.

---

## Comando `whoami`

Uno de los comandos más simples es:

```bash
whoami
```

Este comando muestra **qué usuario está ejecutando la sesión actual**.

Esto es útil porque Linux puede tener múltiples usuarios, y algunos comandos dependen del usuario activo.

---

## Comando `pwd`

Otro comando muy importante es:

```bash
pwd
```

`pwd` significa **print working directory**.

Este comando muestra **la ruta de la carpeta en la que estás actualmente** dentro del sistema.

Por ejemplo, podrías ver algo como:

```
/home/oscar
```

Esto indica que te encuentras dentro del directorio personal del usuario.

---

## Comando `ls`

Uno de los comandos más usados en Linux es:

```bash
ls
```

Este comando muestra **los archivos y carpetas que existen en el directorio actual**.

Por ejemplo, el resultado podría verse así:

```
Documentos  Descargas  Imágenes  Videos
```

Esto permite explorar rápidamente el contenido del sistema de archivos.

---

## Comando `clear`

Si la terminal empieza a llenarse de texto, puedes limpiarla con:

```bash
clear
```

Este comando **borra el contenido visible de la terminal** y deja la pantalla limpia.

Esto no elimina información del sistema, solo limpia la vista.

---

## Comando `echo`

El comando `echo` permite mostrar texto en la terminal.

Por ejemplo:

```bash
echo Hola Linux
```

El resultado será:

```
Hola Linux
```

Aunque parece simple, `echo` es muy útil en scripts y automatización.

---

## Estructura básica de un comando

Muchos comandos en Linux siguen una estructura parecida:

```
comando opciones argumentos
```

Por ejemplo:

```bash
ls -l
```

En este caso:

- `ls` es el comando
- `l` es una opción que cambia la forma en que se muestra la información

No todos los comandos tienen opciones o argumentos, pero muchos sí.

Más adelante aprenderemos a usarlos.

---

## Algo importante: Linux distingue mayúsculas y minúsculas

Linux es **case sensitive**, lo que significa que distingue entre mayúsculas y minúsculas.

Por ejemplo:

```bash
ls
```

no es lo mismo que:

```
LS
```

El primer comando funciona.

El segundo normalmente generará un error.

Esto es algo importante que debes recordar cuando trabajes en la terminal.

---

## Aprender Linux es aprender a explorar

Una buena forma de aprender Linux es **probar comandos y observar qué hacen**.

Puedes abrir la terminal y experimentar con los comandos que vimos:

- `whoami`
- `pwd`
- `ls`
- `date`
- `echo`
- `clear`

No romperás nada por probarlos.

---

## Idea clave de esta lección

Los comandos son instrucciones que se ejecutan en la terminal para interactuar con el sistema.

Aprender Linux implica familiarizarse con estos comandos y entender cómo se combinan para realizar tareas.

---

## Repaso

- Un comando es una instrucción para el sistema.
- Los comandos se ejecutan escribiéndolos en la terminal y presionando Enter.
- `whoami` muestra el usuario actual.
- `pwd` muestra el directorio actual.
- `ls` lista archivos y carpetas.
- `clear` limpia la terminal.
- `echo` muestra texto.
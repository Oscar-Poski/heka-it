---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 11-pipes-y-encadenamiento-de-comandos
title: "Pipes (|)"

summary: "Aprender cómo conectar comandos en Linux utilizando pipes para que la salida de un comando se convierta en la entrada de otro."

durationMinutes: 8

objectives:

- "Entender qué es un pipe en Linux"
- "Conectar comandos para procesar información"
- "Usar pipes para construir flujos de trabajo en la terminal"
    
order: 11
    

---

# Pipes (`|`) y encadenamiento de comandos

Una de las ideas más poderosas en Linux es que **los programas pueden trabajar juntos**.

En lugar de hacer todo con un solo comando grande, Linux permite **conectar comandos pequeños** para resolver tareas más complejas.

Esto se logra utilizando **pipes**, representados por el símbolo:

```
|
```

Un **pipe** envía la salida de un comando directamente como entrada a otro comando.

---

# Cómo funciona un pipe

Sin pipes, un comando produce su salida en la pantalla.

Por ejemplo:

```bash
ls
```

Esto muestra los archivos en el directorio actual.

Pero si usamos un pipe:

```bash
ls | comando2
```

entonces:

1. `ls` produce una salida
2. esa salida no va a la pantalla
3. se envía como entrada al segundo comando

Esto permite **procesar información paso a paso**.

---

# Ejemplo con `ls` y `more`

Supongamos que un directorio contiene muchos archivos.

Podrías usar:

```bash
$ ls | more
archivo1.txt
archivo2.txt
archivo3.txt
archivo4.txt
--More--
```

Esto permite **ver la lista página por página**, en lugar de mostrar todo de golpe.

El pipe envía la salida de `ls` al programa `more`, que controla cómo se muestra el texto.

---

# Ejemplo con `ls` y `grep`

Otro ejemplo muy común es filtrar resultados.

Por ejemplo:

```bash
$ ls | grep txt
reporte.txt
notas.txt
archivo1.txt
```

Esto significa:

1. `ls` lista todos los archivos
2. `grep` busca líneas que contengan `txt`

El resultado sería mostrar solo archivos que contienen `txt` en su nombre.

---

# Encadenar varios comandos

Los pipes pueden conectarse varias veces.

Por ejemplo:

```bash
$ ls | grep txt | sort
archivo1.txt
notas.txt
reporte.txt
```

Aquí ocurre lo siguiente:

1. `ls` lista archivos
2. `grep` filtra los que contienen `txt`
3. `sort` ordena el resultado

Cada comando recibe la salida del anterior.

Esto permite construir **pequeños flujos de procesamiento de datos**.

---

# Filosofía de herramientas pequeñas

Linux sigue una filosofía muy importante:

> hacer herramientas pequeñas que hagan una sola cosa, pero que la hagan bien.
> 

Luego esas herramientas pueden combinarse usando pipes.

Esto permite resolver problemas complejos usando comandos simples.

---

# Pipes en el trabajo diario

Los pipes son muy comunes en tareas como:

- analizar logs
- filtrar información
- procesar listas de archivos
- combinar herramientas del sistema
- automatizar tareas

Con el tiempo aprenderás a combinarlos para crear comandos muy poderosos.

---

# Diferencia entre pipes y redirección

En la lección anterior vimos la **redirección de salida**.

Por ejemplo:

```bash
ls > archivo.txt
```

Eso guarda la salida en un archivo.

En cambio, un pipe:

```bash
ls | grep txt
```

envía la salida **directamente a otro comando**, sin crear un archivo intermedio.

---

# Idea clave de esta lección

Los pipes permiten conectar comandos para que trabajen juntos.

La salida de un comando se convierte en la entrada de otro, lo que permite construir flujos de trabajo muy poderosos en la terminal.

---

# Repaso

- El símbolo `|` representa un pipe.
- Un pipe conecta la salida de un comando con la entrada de otro.
- Permite procesar información paso a paso.
- Los comandos pueden encadenarse múltiples veces.
- Es una de las herramientas más poderosas de la terminal en Linux.
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 12-edicion-basica-de-texto-en-terminal
title: "Edición Básica de Texto"

summary: "Aprender a crear y editar archivos de texto desde la terminal utilizando un editor sencillo como nano."

durationMinutes: 8

objectives:

- "Entender por qué los editores de texto son importantes en Linux"
- "Crear y editar archivos desde la terminal"
- "Usar las funciones básicas del editor nano"
    
order: 12
    

---

# Edición básica de texto en la terminal

En Linux es muy común trabajar con **archivos de texto**.

Muchos elementos importantes del sistema están almacenados como texto, por ejemplo:

- archivos de configuración
- scripts
- registros del sistema
- documentación

Por eso es fundamental saber **crear y editar archivos directamente desde la terminal**.

En esta lección utilizaremos un editor sencillo llamado **nano**.

---

# ¿Qué es un editor de texto en terminal?

Un **editor de texto en terminal** es un programa que permite crear y modificar archivos de texto sin salir de la línea de comandos.

Existen varios editores en Linux, por ejemplo:

- nano
- vim
- emacs

En este curso empezaremos con **nano**, porque es uno de los más fáciles de aprender.

---

# Abrir o crear un archivo con `nano`

Para abrir un archivo con nano puedes escribir:

```bash
$ nano archivo.txt
```

Si el archivo ya existe, nano abrirá su contenido.

Si el archivo no existe, nano creará uno nuevo cuando lo guardes.

Después de ejecutar el comando, la terminal se transforma en una pantalla de edición de texto.

---

# Escribir texto

Dentro de nano puedes empezar a escribir inmediatamente.

Por ejemplo:

```
Este es mi primer archivo en Linux
Estoy aprendiendo a usar la terminal
```

Nano funciona de forma parecida a un editor de texto simple.

Puedes moverte con las **flechas del teclado** para cambiar de línea o posición.

---

# Guardar el archivo

Para guardar el archivo en nano se utiliza el atajo:

```
Ctrl + O
```

Nano mostrará el nombre del archivo en la parte inferior de la pantalla.

Simplemente presiona **Enter** para confirmar.

El archivo se guardará en el directorio actual.

---

# Salir del editor

Para salir de nano se utiliza:

```
Ctrl + X
```

Si el archivo tiene cambios sin guardar, nano te preguntará si deseas guardarlos antes de salir.

---

# Atajos útiles en nano

En la parte inferior de la pantalla nano siempre muestra algunos atajos importantes.

Algunos de los más usados son:

Guardar archivo:

```
Ctrl + O
```

Salir del editor:

```
Ctrl + X
```

Buscar texto:

```
Ctrl + W
```

Estos atajos aparecen siempre visibles dentro del editor.

---

# Ver el archivo después de editarlo

Después de salir del editor puedes comprobar el contenido del archivo usando:

```bash
$ cat archivo.txt
```

Esto mostrará el contenido en la terminal.

También puedes ver el archivo con:

```bash
$ less archivo.txt
```

Lo que permite navegar el texto más cómodamente si el archivo es largo.

---

# ¿Por qué es importante editar archivos desde la terminal?

Muchos sistemas Linux, especialmente servidores, **no tienen interfaz gráfica**.

En esos casos, editar archivos desde la terminal es la forma principal de modificar configuraciones o scripts.

Incluso en sistemas con entorno gráfico, editar archivos desde la terminal suele ser más rápido para muchas tareas.

---

# Idea clave de esta lección

Linux utiliza ampliamente archivos de texto para configuraciones y scripts.

Los editores de terminal como `nano` permiten crear y modificar estos archivos directamente desde la línea de comandos.

---

# Repaso

- Muchos archivos importantes en Linux son archivos de texto.
- `nano` es un editor sencillo que funciona dentro de la terminal.
- `nano archivo.txt` abre o crea un archivo.
- `Ctrl + O` guarda el archivo.
- `Ctrl + X` sale del editor.
- Editar texto desde la terminal es una habilidad esencial en Linux.
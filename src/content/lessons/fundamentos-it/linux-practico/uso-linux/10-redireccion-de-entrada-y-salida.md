---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 10-redireccion-de-entrada-y-salida
title: "Redirección de Entrada y Salida"

summary: "Aprender cómo redirigir la entrada y salida de los comandos en Linux utilizando operadores como >, >> y <."

durationMinutes: 8

objectives:

- "Entender cómo funcionan la entrada y salida de los comandos"
- "Usar operadores para redirigir la salida de un comando"
- "Guardar resultados de comandos en archivos"
    
order: 10
    

---

# Redirección de entrada y salida

Cuando ejecutas un comando en Linux, ese comando normalmente **recibe información y produce un resultado**.

Por ejemplo, si ejecutas:

```bash
$ ls
```

el comando produce una salida que aparece en la pantalla de la terminal.

Pero Linux permite hacer algo muy poderoso: **redirigir esa información hacia archivos u otros comandos**.

Esto se conoce como **redirección de entrada y salida**.

---

# Entrada y salida estándar

En Linux, los programas normalmente utilizan tres canales principales:

**Entrada estándar (stdin)**

Es la información que el programa recibe.

**Salida estándar (stdout)**

Es el resultado normal del programa.

**Salida de error (stderr)**

Es donde aparecen los mensajes de error.

Cuando ejecutas un comando en la terminal, normalmente la salida estándar se muestra en pantalla.

---

# Redirigir salida con `>`

El operador `>` permite **redirigir la salida de un comando hacia un archivo**.

Por ejemplo:

```bash
$ ls > archivos.txt
```

Esto hace que la salida del comando `ls` se guarde en el archivo `archivos.txt`.

Después puedes ver el contenido con:

```bash
$ cat archivos.txt
archivo.txt
notas.txt
proyectos
```

Si el archivo no existe, se crea automáticamente.

---

# Cuidado: `>` sobrescribe archivos

Es importante saber que `>` **sobrescribe el contenido del archivo**.

Por ejemplo:

```bash
echo Hola > texto.txt
```

Si ejecutas después:

```bash
echo Mundo > texto.txt
```
El contenido anterior se pierde.
```bash
$ echo Hola > texto.txt
$ cat texto.txt
Hola
$ echo Mundo > texto.txt
$ cat texto.txt
Mundo
```
---

# Agregar contenido con `>>`

Si quieres **agregar contenido al final de un archivo**, puedes usar:

```
>>
```

Por ejemplo:

```bash
$ echo Hola > texto.txt
$ echo Mundo >> texto.txt
```

El resultado será:

```bash
$ cat texto.txt
Hola
Mundo
```

El operador `>>` agrega información sin borrar lo que ya existe.

---

# Redirigir entrada con `<`

También es posible redirigir **la entrada de un comando**.

El operador `<` indica que un comando debe leer su entrada desde un archivo.

Por ejemplo:

```bash
$ comando < archivo.txt
```

Esto hace que el programa reciba como entrada el contenido del archivo.

Aunque este tipo de redirección se usa menos en tareas básicas, es muy común en scripts y automatización.

---

# Redirección en el trabajo diario

La redirección es muy útil cuando trabajas con:

- archivos de log
- resultados de comandos largos
- procesamiento de datos
- automatización
- scripts

Muchas herramientas en Linux están diseñadas para producir salida de texto precisamente porque **esa salida puede redirigirse o procesarse fácilmente**.

---

# Idea clave de esta lección

Linux permite redirigir la entrada y salida de los comandos usando operadores especiales como `>`, `>>` y `<`.

Esto permite guardar resultados, reutilizar información y automatizar tareas.

---

# Repaso

- Los comandos producen salida que normalmente aparece en la terminal.
- `>` redirige la salida hacia un archivo.
- `>>` agrega salida al final de un archivo.
- `<` permite usar un archivo como entrada de un comando.
- La redirección es una herramienta muy importante para automatizar tareas.
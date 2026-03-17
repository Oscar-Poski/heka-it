---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 07-visualizar-contenido-de-archivos
title: "Visualizar Contenido de Archivos"

summary: "Aprender a ver el contenido de archivos de texto desde la terminal utilizando comandos comunes en Linux."

durationMinutes: 7

objectives:

- "Visualizar el contenido de archivos desde la terminal"
- "Usar comandos comunes para inspeccionar archivos de texto"
- "Entender cuándo usar cada comando"
    
order: 7
    

---

# Visualizar contenido de archivos

En Linux es muy común trabajar con **archivos de texto**.

Muchos archivos importantes del sistema —como configuraciones, logs o scripts— están almacenados en formato de texto plano.

Por eso es fundamental saber **cómo visualizar el contenido de un archivo desde la terminal**.

En esta lección veremos algunos comandos muy utilizados para hacerlo.

---

# Ver el contenido completo con `cat`

Uno de los comandos más simples para ver el contenido de un archivo es `cat`.

Por ejemplo:

```bash
$ cat archivo.txt
```

Este comando muestra todo el contenido del archivo directamente en la terminal.

```bash
$ cat archivo.txt
Hola Linux
Este es un archivo de prueba
```

El comando `cat` es muy útil cuando los archivos son **pequeños o cortos**.

---

# Ver el inicio de un archivo con `head`

Si un archivo es muy grande, mostrar todo su contenido puede ser poco práctico.

Para esos casos existe el comando `head`.

```bash
$ head archivo.txt
```

Este comando muestra **las primeras líneas del archivo**.

Por defecto, `head` muestra **las primeras 10 líneas**.
```bash
$ head archivo.txt
Linea 1
Linea 2
Linea 3
Linea 4
Linea 5
Linea 6
Linea 7
Linea 8
Linea 9
Linea 10
```
También puedes especificar cuántas líneas mostrar.

Por ejemplo:

```bash
$ head -n 5 archivo.txt
```

Esto mostrará solo las primeras cinco líneas.
```bash
$ head -n 5 archivo.txt
Linea 1
Linea 2
Linea 3
Linea 4
Linea 5
```
---

# Ver el final de un archivo con `tail`

El comando `tail` funciona de forma similar a `head`, pero muestra **el final del archivo**.

Esto muestra las **últimas 10 líneas**.
```bash
$ tail archivo.txt
Linea 91
Linea 92
Linea 93
Linea 94
Linea 95
Linea 96
Linea 97
Linea 98
Linea 99
Linea 100
```
También puedes elegir un número específico de líneas.

```bash
$ tail -n 5 archivo.txt
Linea 96
Linea 97
Linea 98
Linea 99
Linea 100
```

Esto mostrará las últimas cinco líneas.

Este comando es especialmente útil cuando se revisan **archivos de log**, que suelen crecer constantemente.

---

# Seguir un archivo en tiempo real

Una función muy útil de `tail` es la opción `-f`.

```bash
$ tail -f archivo.log
[INFO] Servidor iniciado
[INFO] Usuario conectado
[WARNING] Uso de memoria alto
[INFO] Nueva petición recibida
```

Esto permite **seguir el archivo en tiempo real**.

Cada vez que se agregan nuevas líneas al archivo, aparecerán automáticamente en la terminal.

Esta técnica es muy utilizada para monitorear:

- logs del sistema
- registros de aplicaciones
- procesos en ejecución

---

# Cuando usar cada comando

Cada comando tiene un uso típico.

**cat**

- archivos pequeños
- ver todo el contenido rápidamente

**head**

- revisar el inicio de un archivo
- inspeccionar archivos grandes

**tail**

- revisar el final de un archivo
- analizar logs o archivos que cambian constantemente

Con la práctica aprenderás a elegir el comando adecuado según el contexto.

---

# Idea clave de esta lección

Muchos archivos en Linux son archivos de texto.

Los comandos `cat`, `head` y `tail` permiten visualizar el contenido de estos archivos directamente desde la terminal.

---

# Repaso

- `cat` muestra todo el contenido de un archivo.
- `head` muestra las primeras líneas.
- `tail` muestra las últimas líneas.
- `tail -f` permite seguir un archivo en tiempo real.
- Estos comandos son muy útiles para revisar archivos de texto y logs.
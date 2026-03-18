---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 105-lab-redireccion
title: "Lab: Redirección y Escritura de Archivos"

summary: ""

durationMinutes: 2

objectives: 
- "Aprende a ver el contenido de los archivos y a redireccionar el contenido."
    
order: 10
    

---
# Lab: Redirección y Escritura de Archivos

Prueba estos comandos dentro de la terminal simulada. Sigue el orden para obtener el mismo resultado.

1. `ls` lista los archivos en el directorio actual. Aquí se muestra que existe **README.txt**.

```bash
student@heka:~$ ls
README.txt
```

2. `cat README.txt` muestra el contenido del archivo **README.txt**.

```bash
student@heka:~$ cat README.txt
Simulación de terminal de Heka IT. Usa help para ver los comandos disponibles.
```

3. `echo Hola > archivo.txt` crea (o sobrescribe) el archivo **archivo.txt** con el texto **Hola**.

```bash
student@heka:~$ echo Hola > archivo.txt
```

4. Verificas el contenido del archivo recién creado.

```bash
student@heka:~$ cat archivo.txt
Hola
```

5. `echo Mundo > archivo.txt` sobrescribe el contenido del archivo, reemplazando **Hola** por **Mundo**.

```bash
student@heka:~$ echo Mundo > archivo.txt
```

6. Confirmas que el contenido fue reemplazado.

```bash
student@heka:~$ cat archivo.txt
Mundo
```

7. `echo Feliz >> archivo.txt` agrega (sin borrar lo anterior) el texto **Feliz** al archivo.

```bash
student@heka:~$ echo Feliz >> archivo.txt
```

8. Verificas el contenido final del archivo, que ahora tiene dos líneas.

```bash
student@heka:~$ cat archivo.txt
Mundo
Feliz
```


```terminal
Objetivo: Aprende a ver el contenido de los archivos y a redireccionar el contenido.
Para ver los comandos disponibles: help
Tip: Prueba escribir los comandos tú mismo en lugar de copiarlos.
```

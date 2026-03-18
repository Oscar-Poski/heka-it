---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 055-lab-navegacion
title: "Lab: Navegación por el Sistema"

summary: ""

durationMinutes: 2

objectives: 
- "Aprende a crear directorios, archivos y navegar por el sistema."
    
order: 5
    

---
# Lab: Navegación por el Sistema

Prueba estos comandos dentro de la terminal simulada. Sigue el orden para obtener el mismo resultado.
1. `pwd` (print working directory) muestra la ruta del directorio actual. Aquí estás en `/home/student`.
```bash
student@heka:~$ pwd
/home/student
```
2. `mkdir trabajo` crea un nuevo directorio (carpeta) llamado **trabajo** en la ubicación actual.
```bash
student@heka:~$ mkdir trabajo
```
3. `cd trabajo` cambia al directorio recién creado. Ahora estás dentro de la carpeta **trabajo**.
```bash
student@heka:~$ cd trabajo
```
4. Verificas tu ubicación nuevamente. Ahora estás dentro de `/home/student/trabajo`.
```bash
student@heka:~/trabajo$ pwd
/home/student/trabajo
```
5. `touch notas.txt` crea un archivo vacío llamado **notas.txt**.
```bash
student@heka:~/trabajo$ touch notas.txt
```
6. `ls` lista los archivos del directorio actual. Aquí confirma que **notas.txt** existe.
```bash
student@heka:~/trabajo$ ls
notas.txt
```
7. `cp notas.txt copia.txt` crea una copia del archivo **notas.txt** con el nombre **copia.txt**.
```bash
student@heka:~/trabajo$ cp notas.txt copia.txt
```
8. Verificas que ahora existen dos archivos: el original y la copia.
```bash
student@heka:~/trabajo$ ls
copia.txt notas.txt
```
9. `mv copia.txt respaldo.txt` renombra el archivo **copia.txt** a **respaldo.txt**.
```bash
student@heka:~/trabajo$ mv copia.txt respaldo.txt
```
10. Confirmas el cambio de nombre. Ahora tienes **notas.txt** y **respaldo.txt**.
```bash
student@heka:~/trabajo$ ls
notas.txt respaldo.txt
```
11. Eliminas el archivo **respaldo.txt**.
```bash
student@heka:~/trabajo$ rm respaldo.txt
```
12. Confirmas la eliminación del archivo. Ahora solo tienes **notas.txt**.
```bash
student@heka:~/trabajo$ ls
notas.txt
```
```terminal
Objetivo: Aprende a crear directorios, archivos y navegar por el sistema.
Para ver los comandos disponibles: help
Tip: Prueba escribir los comandos tú mismo en lugar de copiarlos.
```

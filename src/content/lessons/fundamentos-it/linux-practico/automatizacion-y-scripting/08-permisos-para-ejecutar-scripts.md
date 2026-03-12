---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: automatizacion-y-scripting
lessonSlug: 08-permisos-para-ejecutar-scripts
title: "Permisos para ejecutar scripts"

summary: "Aprender cómo dar permisos de ejecución a scripts en Linux para poder ejecutarlos como programas."

durationMinutes: 7

objectives:

- "Comprender el permiso de ejecución en Linux"
- "Usar chmod para hacer ejecutable un script"
- "Ejecutar scripts correctamente desde la terminal"
    
order: 8
    

---

# Permisos para ejecutar scripts

En Linux, los archivos tienen **permisos** que determinan qué acciones se pueden realizar sobre ellos.

Los permisos principales son:

```
r  lectura (read)
w  escritura (write)
x  ejecución (execute)
```

Para que un script pueda ejecutarse como un programa, necesita el **permiso de ejecución**.

---

# Ver permisos de un archivo

Puedes ver los permisos de un archivo usando:

```bash
ls -l
```

Ejemplo de salida:

```
-rw-r--r-- 1 usuario usuario 1200 script.sh
```

Aquí vemos que el archivo tiene permisos de:

- lectura y escritura para el propietario
- solo lectura para otros usuarios

Pero **no tiene permiso de ejecución**.

---

# Dar permiso de ejecución

Para hacer que un script sea ejecutable se utiliza el comando:

```bash
chmod +x script.sh
```

Esto añade el permiso de ejecución.

Después de ejecutar este comando, los permisos podrían verse así:

```
-rwxr-xr-x 1 usuario usuario 1200 script.sh
```

Ahora el archivo puede ejecutarse como un programa.

---

# Ejecutar un script

Una vez que el script tiene permisos de ejecución, puedes ejecutarlo usando:

```bash
./script.sh
```

El prefijo:

```bash
./
```

indica que el archivo se encuentra en el **directorio actual**.

---

# Ejecutar sin cambiar permisos

También es posible ejecutar un script sin modificar permisos usando Bash directamente:

```bash
bash script.sh
```

En este caso Bash interpreta el archivo como un script.

---

# Importancia del permiso de ejecución

El permiso de ejecución es importante porque permite que el sistema trate el archivo como **un programa ejecutable**.

Esto es común en:

- scripts de automatización
- herramientas de administración
- instaladores
- scripts de despliegue

Muchos programas en Linux son en realidad **scripts ejecutables**.

---

# Buenas prácticas

Al trabajar con scripts es recomendable:

- usar nombres claros para los archivos
- agregar comentarios dentro del script
- verificar que el script tenga permisos correctos

Esto facilita su uso y mantenimiento.

---

# Idea clave de esta lección

Para ejecutar un script como programa en Linux, el archivo debe tener el **permiso de ejecución**, que puede asignarse usando `chmod +x`.

---

# Repaso

- Los archivos tienen permisos `r`, `w` y `x`.
- El permiso `x` permite ejecutar un archivo.
- `chmod +x script.sh` agrega permiso de ejecución.
- `./script.sh` ejecuta el script.
- También se puede usar `bash script.sh`.
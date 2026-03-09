---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: sistema-archivos-linux
lessonSlug: 07-cambiar-permisos-chmod

title: "Cambiar permisos (chmod)"

summary: "Aprender a modificar permisos de archivos y directorios utilizando el comando chmod en Linux."

durationMinutes: 9

objectives:

- "Entender cómo modificar permisos de archivos"
- "Usar el comando chmod para controlar acceso"
- "Aplicar permisos usando el método simbólico y numérico"
    
order: 7
    

---

# Cambiar permisos (`chmod`)

En la lección anterior vimos que los archivos en Linux tienen permisos que determinan:

- quién puede leer un archivo
- quién puede modificarlo
- quién puede ejecutarlo

Para modificar estos permisos utilizamos el comando:

```bash
chmod
```

El nombre `chmod` significa **change mode**, es decir, cambiar los permisos de un archivo o directorio.

---

# Ver permisos antes de modificarlos

Antes de cambiar permisos es buena práctica verificar los permisos actuales.

Puedes hacerlo con:

```bash
ls -l
```

Ejemplo:

```
-rw-r--r-- 1 oscar oscar 1200 archivo.txt
```

Esto indica que:

- el propietario puede leer y escribir
- el grupo puede leer
- otros usuarios pueden leer

---

# Método simbólico

Una forma común de usar `chmod` es el **modo simbólico**.

Este método utiliza letras para representar:

Usuarios:

```
u  usuario propietario
g  grupo
o  otros usuarios
a  todos
```

Permisos:

```
r  lectura
w  escritura
x  ejecución
```

Operadores:

```
+  agregar permiso
-  eliminar permiso
=  asignar permisos específicos
```

---

# Ejemplo: agregar permiso de ejecución

Supongamos que tenemos un script llamado:

```
script.sh
```

Para permitir que el propietario pueda ejecutarlo usamos:

```bash
chmod u+x script.sh
```

Esto agrega el permiso de ejecución al usuario propietario.

---

# Ejemplo: quitar permiso de escritura

También puedes eliminar permisos.

```bash
chmod u-w archivo.txt
```

Esto elimina el permiso de escritura para el propietario.

---

# Ejemplo: dar permisos a todos

Si quieres que todos puedan ejecutar un archivo:

```bash
chmod a+x programa.sh
```

Esto agrega permiso de ejecución para:

- propietario
- grupo
- otros usuarios

---

# Método numérico (modo octal)

Otra forma muy común de usar `chmod` es mediante **valores numéricos**.

Cada permiso tiene un valor:

```
lectura    = 4
escritura  = 2
ejecución  = 1
```

Los permisos se suman para formar combinaciones.

Ejemplo:

```
7 = 4 + 2 + 1 = rwx
6 = 4 + 2     = rw-
5 = 4 + 1     = r-x
4 = 4         = r--
```

---

# Ejemplo práctico

Supongamos que quieres asignar estos permisos:

Propietario:

```
rwx
```

Grupo:

```
r-x
```

Otros:

```
r-x
```

Esto corresponde a:

```
755
```

El comando sería:

```
chmod 755 archivo.sh
```

---

# Otro ejemplo común

Un permiso muy común para archivos de texto es:

```
644
```

Esto significa:

```
propietario  rw-
grupo        r--
otros        r--
```

Se aplica así:

```bash
chmod 644 archivo.txt
```

---

# Cambiar permisos en directorios

El comando `chmod` también funciona con directorios.

Por ejemplo:

```bash
chmod 755 proyectos
```

Esto permite que:

- el propietario pueda leer, escribir y entrar al directorio
- otros usuarios puedan leer y acceder al directorio

---

# Precaución al cambiar permisos

Modificar permisos incorrectamente puede causar problemas.

Por ejemplo:

- permitir acceso excesivo a archivos sensibles
- impedir que programas funcionen correctamente
- bloquear acceso a archivos importantes

Por eso es importante entender qué permisos estás cambiando antes de aplicarlos.

---

# Idea clave de esta lección

El comando `chmod` permite modificar los permisos de archivos y directorios.

Puede utilizarse mediante **modo simbólico** o **modo numérico**, y es una herramienta fundamental para controlar el acceso en Linux.

---

# Repaso

- `chmod` cambia los permisos de archivos y directorios.
- Los permisos principales son `r`, `w` y `x`.
- Los usuarios se representan como `u`, `g`, `o` y `a`.
- El modo simbólico usa letras y operadores.
- El modo numérico usa valores como `755` o `644`.
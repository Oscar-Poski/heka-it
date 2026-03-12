---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: edicion-de-texto-linux
lessonSlug: 08-guardar-y-salir-correctamente
title: "Guardar y salir correctamente"

summary: "Aprender a guardar archivos y salir correctamente del editor vim."

durationMinutes: 6

objectives:

- "Guardar archivos en vim"
- "Salir del editor de forma correcta"
- "Evitar errores comunes al cerrar vim"
    
order: 8
    

---

# Guardar y salir correctamente

Uno de los desafíos más comunes para quienes comienzan a usar `vim` es **guardar los cambios y salir del editor**.

Esto ocurre porque `vim` utiliza **comandos especiales en modo comando** para realizar estas acciones.

Para ejecutar estos comandos primero debes estar en **modo normal**.

Si no estás seguro del modo actual, presiona:

```
Esc
```

Luego presiona:

```
:
```

Esto abre la línea de comandos en la parte inferior del editor.

---

# Guardar archivo

Para guardar los cambios en el archivo utiliza:

```
:w
```

Esto significa:

```
write
```

El archivo se guardará sin cerrar el editor.

---

# Salir del editor

Para salir de `vim` se utiliza:

```
:q
```

Esto significa:

```
quit
```

Si el archivo no tiene cambios sin guardar, `vim` se cerrará.

---

# Guardar y salir

El comando más común es guardar y salir al mismo tiempo.

Para hacerlo utiliza:

```
:wq
```

Esto significa:

```
write + quit
```

Primero guarda el archivo y después cierra el editor.

---

# Salir sin guardar cambios

Si realizaste cambios pero deseas salir sin guardarlos puedes usar:

```
:q!
```

El signo `!` significa **forzar la acción**.

Esto descarta todos los cambios realizados desde la última vez que se guardó el archivo.

---

# Guardar usando un atajo rápido

También existe una forma rápida de guardar y salir desde **modo normal**.

Primero asegúrate de estar en modo normal (`Esc`) y luego escribe:

```
ZZ
```

Esto guarda el archivo y cierra `vim`.

---

# Errores comunes

Algunos errores comunes al usar `vim` incluyen:

Intentar salir con `:q` cuando hay cambios sin guardar.

En ese caso `vim` mostrará un mensaje indicando que el archivo fue modificado.

Debes usar:

```
:wq
```

o

```
:q!
```

---

# Flujo típico al usar vim

Un flujo común al editar archivos con `vim` es:

```
vim archivo.txt
i
(escribir texto)
Esc
:wq
```

Este proceso:

1. abre el archivo
2. entra en modo inserción
3. permite editar
4. guarda y cierra el archivo

---

# Idea clave de esta lección

Guardar y salir en `vim` se realiza mediante comandos en modo comando como `:w`, `:q` y `:wq`.

---

# Repaso

- `:w` guarda el archivo.
- `:q` sale del editor.
- `:wq` guarda y sale.
- `:q!` sale sin guardar cambios.
- `ZZ` también guarda y sale.
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 09-uso-de-comodines-wildcards
title: "Uso de Comodines"

summary: "Aprender a utilizar comodines para trabajar con múltiples archivos al mismo tiempo en la terminal de Linux."

durationMinutes: 7

objectives:

- "Entender qué son los comodines en Linux"
- "Usar comodines para seleccionar múltiples archivos"
- "Aplicar comodines en comandos comunes"
    
order: 9
    

---

# Uso de comodines (wildcards)

Cuando trabajas con archivos en Linux, muchas veces necesitas aplicar un comando a **varios archivos al mismo tiempo**.

Por ejemplo:

- listar varios archivos
- copiar muchos archivos
- eliminar un grupo de archivos
- buscar archivos con nombres similares

Para esto Linux utiliza **comodines**, también llamados **wildcards**.

Los comodines permiten **seleccionar archivos mediante patrones**.

---

# ¿Qué es un comodín?

Un **comodín** es un símbolo especial que representa uno o más caracteres dentro de un nombre de archivo.

Esto permite seleccionar varios archivos con un solo comando.

Por ejemplo, si tienes estos archivos:

```
reporte1.txt
reporte2.txt
reporte3.txt
notas.txt
```

Puedes trabajar con todos los archivos `.txt` usando un patrón.

---

# El comodín

El comodín más común es:

```
*
```

Este símbolo representa **cualquier cantidad de caracteres**.

Por ejemplo:

```bash
$ ls *.txt
reporte1.txt
reporte2.txt
reporte3.txt
notas.txt
```

Este comando lista todos los archivos que terminan en `.txt`.

---

# Usar  al inicio del nombre

También puedes usar el comodín al inicio.

Por ejemplo:

```bash
$ ls reporte*
reporte1.txt
reporte2.txt
reporte3.txt
```
El patrón significa:

> cualquier archivo que comience con "reporte".
> 

---

# El comodín `?`

El símbolo:

```
?
```

representa **un solo carácter**.

Por ejemplo:

```bash
$ ls reporte?.txt
reporte1.txt
reporte2.txt
reporte3.txt
```
No coincidiría con un archivo como:

```
reporte10.txt
```

Porque ese nombre tiene más de un carácter en esa posición.

---

# Seleccionar múltiples caracteres específicos

También puedes usar **corchetes** para elegir entre caracteres específicos.

Ejemplo:

```bash
$ ls reporte[12].txt
reporte1.txt
reporte2.txt
```
No coincide con:

```
reporte3.txt
```

---

# Usar comodines con otros comandos

Los comodines no solo funcionan con `ls`.

También funcionan con muchos otros comandos.

Por ejemplo:

Copiar todos los archivos `.txt`:

```bash
$ cp *.txt respaldo/
```

Eliminar todos los archivos `.log`:

```bash
$ rm *.log
```

Mover todos los archivos que comienzan con `foto`:

```bash
mv foto* imagenes/
```

Esto hace que los comodines sean **muy poderosos para trabajar con múltiples archivos**.

---

# Precaución con `rm` y comodines

Es importante tener cuidado cuando usas comodines con comandos destructivos como `rm`.

Por ejemplo:

```bash
$ rm *.txt
```

Este comando eliminará **todos los archivos `.txt` del directorio actual**.

Por eso es recomendable primero verificar qué archivos coinciden usando:

```bash
$ ls *.txt
reporte1.txt
reporte2.txt
reporte3.txt
notas.txt
```

Y después ejecutar el comando.

---

# Idea clave de esta lección

Los comodines permiten seleccionar múltiples archivos mediante patrones.

Esto facilita trabajar con grandes cantidades de archivos usando comandos simples.

---

# Repaso

- Los comodines permiten seleccionar archivos mediante patrones.
- representa cualquier cantidad de caracteres.
- `?` representa un solo carácter.
- `[ ]` permite elegir caracteres específicos.
- Los comodines funcionan con muchos comandos como `ls`, `cp`, `mv` y `rm`.
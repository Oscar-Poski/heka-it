---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: automatizacion-y-scripting
lessonSlug: 05-condicionales
title: "Condicionales"

summary: "Aprender a usar estructuras condicionales en Bash para ejecutar acciones según ciertas condiciones."

durationMinutes: 9

objectives:

- "Comprender cómo funcionan los condicionales en Bash"
- "Usar if, else y elif"
- "Evaluar condiciones dentro de scripts"
    
order: 5
    

---

# Condicionales

En muchos scripts es necesario **tomar decisiones**.

Por ejemplo:

- ejecutar una acción solo si un archivo existe
- realizar una operación si un número es mayor que otro
- mostrar un mensaje dependiendo de un valor

Para esto se utilizan **condicionales**.

Los condicionales permiten ejecutar comandos **solo si se cumple una condición**.

---

# Estructura básica de `if`

La estructura básica de un condicional en Bash es:

```bash
if [ condición ]
then
  comando
fi
```

Esto significa:

- si la condición es verdadera
- entonces se ejecuta el comando

---

# Ejemplo simple

```bash
#!/bin/bash

numero=10

if [ $numero -gt 5 ]
then
echo "El número es mayor que 5"
fi
```

Aquí:

```bash
-gt
```

significa **greater than (mayor que)**.

---

# Operadores comunes

Bash incluye operadores para comparar valores.

Comparación numérica:

```bash
-eq   igual
-ne   diferente
-gt   mayor que
-lt   menor que
-ge   mayor o igual
-le   menor o igual
```

---

# Usar `else`

También es posible ejecutar una acción cuando la condición **no se cumple**.

Ejemplo:

```bash
#!/bin/bash

numero=3

if [ $numero -gt 5 ]
then
echo "Número mayor que 5"
else
echo "Número menor o igual a 5"
fi
```

---

# Usar `elif`

Si queremos evaluar **varias condiciones**, podemos usar `elif`.

Ejemplo:

```bash
#!/bin/bash

numero=10

if [ $numero -lt 5 ]
then
echo "Menor que 5"
elif [ $numero -lt 10 ]
then
echo "Menor que 10"
else
echo "Mayor o igual a 10"
fi
```

Esto permite evaluar múltiples posibilidades.

---

# Comparar texto

También se pueden comparar cadenas de texto.

Ejemplo:

```bash
nombre="Ana"

if [ "$nombre" = "Ana" ]
then
echo "Hola Ana"
fi
```

Las comillas ayudan a evitar errores si la variable está vacía.

---

# Verificar archivos

Los condicionales también permiten verificar archivos.

Ejemplo:

```bash
if [ -f archivo.txt ]
then
echo "El archivo existe"
fi
```

Opciones comunes:

```bash
-f  archivo existe
-d  directorio existe
-e  archivo o directorio existe
```

---

# Ejemplo práctico

```bash
#!/bin/bash

archivo=$1

if [ -f "$archivo" ]
then
echo "El archivo existe"
else
echo "El archivo no existe"
fi
```

Si ejecutas:

```bash
./verificar.sh documento.txt
```

El script verificará si el archivo existe.

---

# Idea clave de esta lección

Los condicionales permiten que los scripts de Bash tomen decisiones basadas en condiciones.

---

# Repaso

- `if` permite evaluar una condición.
- `else` ejecuta una acción alternativa.
- `elif` permite evaluar múltiples condiciones.
- Los operadores comparan números o texto.
- Los condicionales también permiten verificar archivos.
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: automatizacion-y-scripting
lessonSlug: 07-manejo-de-errores
title: "Manejo de errores"

summary: "Aprender a detectar y manejar errores en scripts de Bash para hacerlos más confiables."

durationMinutes: 8

objectives:

- "Comprender cómo Bash maneja errores"
- "Detectar errores en comandos"
- "Controlar el comportamiento del script ante fallos"
    
order: 7
    

---

# Manejo de errores

Cuando ejecutamos comandos en Linux, cada comando devuelve un **código de salida**.

Este código indica si el comando **se ejecutó correctamente o si ocurrió un error**.

Comprender estos códigos permite crear scripts más **robustos y confiables**.

---

# Código de salida

Después de ejecutar un comando, Bash guarda el resultado en una variable especial:

```bash
$?
```

Los códigos más comunes son:

```
0   ejecución exitosa
1   ocurrió un error
```

Ejemplo:

```bash
ls archivo.txt
echo $?
```

Si el archivo existe, el resultado será:

```
0
```

Si no existe:

```
1
```

---

# Usar códigos de salida en condicionales

Podemos usar el código de salida para tomar decisiones en un script.

Ejemplo:

```bash
#!/bin/bash

ls archivo.txt

if [ $? -eq 0 ]
then
echo "El comando se ejecutó correctamente"
else
echo "Ocurrió un error"
fi
```

Esto permite reaccionar cuando un comando falla.

---

# Manejo simple de errores

Un patrón común es verificar si un archivo existe antes de usarlo.

Ejemplo:

```bash
#!/bin/bash

archivo="datos.txt"

if [ -f "$archivo" ]
then
echo "Procesando archivo..."
else
echo "El archivo no existe"
fi
```

Esto evita errores en el script.

---

# Detener script cuando ocurre un error

En algunos casos queremos que el script **se detenga inmediatamente si ocurre un error**.

Esto se puede hacer usando:

```bash
set -e
```

Ejemplo:

```bash
#!/bin/bash

set -e

echo "Iniciando script"
ls archivo_inexistente
echo "Este mensaje no aparecerá"
```

Si ocurre un error, el script termina automáticamente.

---

# Mostrar errores claros

También es buena práctica mostrar **mensajes claros cuando ocurre un error**.

Ejemplo:

```bash
echo "Error: el archivo no existe"
```

Esto ayuda a entender qué ocurrió cuando el script falla.

---

# Ejemplo práctico

```bash
#!/bin/bash

archivo=$1

if [ -f "$archivo" ]
then
echo "El archivo existe"
else
echo "Error: el archivo no fue encontrado"
exit 1
fi
```

Aquí usamos:

```bash
exit 1
```

para indicar que el script terminó con error.

---

# Idea clave de esta lección

Los scripts de Bash pueden detectar errores usando códigos de salida y reaccionar adecuadamente para evitar fallos inesperados.

---

# Rrepaso

- Los comandos devuelven códigos de salida.
- `0` indica éxito.
- `$?` contiene el código del último comando.
- `set -e` detiene el script si ocurre un error.
- Los scripts pueden mostrar mensajes de error y usar `exit`.
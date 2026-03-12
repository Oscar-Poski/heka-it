---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: edicion-de-texto-linux
lessonSlug: 07-busqueda-y-reemplazo
title: "Búsqueda y reemplazo"

summary: "Aprender a buscar y reemplazar texto dentro de archivos usando vim."

durationMinutes: 8

objectives:

- "Buscar texto dentro de un archivo"
- "Navegar entre resultados de búsqueda"
- "Reemplazar texto dentro de un archivo"
    
order: 7
    

---

# Búsqueda y reemplazo

Cuando trabajas con archivos grandes, encontrar rápidamente una palabra o modificar múltiples ocurrencias de texto es muy importante.

`vim` incluye herramientas muy poderosas para **buscar y reemplazar contenido dentro de un archivo**.

Estas funciones se utilizan desde **modo normal**.

Si no estás seguro del modo actual, presiona:

```
Esc
```

---

# Buscar texto

Para buscar una palabra dentro del archivo se utiliza:

```
/texto
```

Por ejemplo:

```
/error
```

Después de presionar **Enter**, `vim` buscará la palabra en el archivo.

El cursor se moverá automáticamente al primer resultado.

---

# Navegar entre resultados

Una vez que realizas una búsqueda puedes moverte entre los resultados.

Siguiente resultado:

```
n
```

Resultado anterior:

```
N
```

Esto permite recorrer rápidamente todas las coincidencias encontradas.

---

# Buscar hacia arriba

También puedes buscar hacia arriba en el archivo utilizando:

```
?texto
```

Por ejemplo:

```
?error
```

Esto busca la palabra **hacia arriba** desde la posición actual.

---

# Reemplazar texto

`vim` permite reemplazar texto usando comandos en **modo comando**.

Primero presiona:

```
:
```

Luego escribe el comando de reemplazo.

La sintaxis general es:

```
:s/texto_viejo/texto_nuevo/
```

Esto reemplaza la primera coincidencia en la línea actual.

---

# Reemplazar en toda la línea

Para reemplazar todas las coincidencias en la línea actual se usa:

```
:s/texto_viejo/texto_nuevo/g
```

La `g` significa **global**, es decir, todas las coincidencias en la línea.

---

# Reemplazar en todo el archivo

Para reemplazar texto en todo el archivo se utiliza:

```
:%s/texto_viejo/texto_nuevo/g
```

Por ejemplo:

```
:%s/http/https/g
```

Esto reemplaza todas las ocurrencias de **http** por **https** en todo el archivo.

---

# Confirmar cada reemplazo

Si deseas revisar cada reemplazo antes de aplicarlo puedes usar:

```
:%s/texto_viejo/texto_nuevo/gc
```

La opción `c` significa **confirmar**.

`vim` preguntará antes de reemplazar cada coincidencia.

---

# Cuándo usar búsqueda y reemplazo

Estas funciones son especialmente útiles cuando:

- trabajas con archivos grandes
- modificas configuraciones repetidas
- editas código
- necesitas actualizar múltiples líneas rápidamente

Son herramientas muy utilizadas por desarrolladores y administradores de sistemas.

---

# Idea clave de esta lección

`vim` permite buscar y reemplazar texto dentro de archivos de forma rápida utilizando comandos desde el modo normal y el modo comando.

---

# Repaso

- `/texto` busca una palabra.
- `n` va al siguiente resultado.
- `N` va al resultado anterior.
- `:%s/viejo/nuevo/g` reemplaza texto en todo el archivo.
- `gc` permite confirmar cada reemplazo.
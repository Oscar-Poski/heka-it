---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: edicion-de-texto-linux
lessonSlug: 06-edicion-basica-en-vim
title: "Edición básica en vim"

summary: "Aprender los comandos básicos para modificar texto dentro del editor vim."

durationMinutes: 8

objectives:

- "Insertar texto en vim"
- "Eliminar texto y líneas"
- "Copiar y pegar contenido"
    
order: 6
    

---

# Edición básica en vim

Además de navegar por archivos, `vim` permite **editar texto de forma muy eficiente** utilizando comandos desde el **modo normal**.

Una de las ventajas de `vim` es que muchas operaciones comunes pueden realizarse con **combinaciones simples de teclas**.

Antes de ejecutar estos comandos, asegúrate de estar en **modo normal** presionando:

```
Esc
```

---

# Insertar texto

Para escribir texto necesitas entrar en **modo inserción**.

Algunas teclas comunes para hacerlo son:

Insertar en la posición actual:

```
i
```

Insertar después del cursor:

```
a
```

Crear una nueva línea debajo:

```
o
```

Crear una nueva línea arriba:

```
O
```

Después de entrar en modo inserción puedes escribir texto normalmente.

Para regresar al modo normal se presiona:

```
Esc
```

---

# Eliminar caracteres

En modo normal puedes eliminar caracteres usando:

```
x
```

Esto elimina el carácter bajo el cursor.

---

# Eliminar palabras

Para eliminar una palabra desde el cursor se utiliza:

```
dw
```

Esto significa **delete word**.

---

# Eliminar líneas

Para eliminar una línea completa se utiliza:

```
dd
```

Esto elimina la línea actual.

También puedes eliminar múltiples líneas.

Por ejemplo:

```
3dd
```

Esto elimina **3 líneas**.

---

# Copiar texto

En `vim`, copiar texto se conoce como **yank**.

Para copiar una línea completa se utiliza:

```
yy
```

También puedes copiar múltiples líneas:

```
3yy
```

Esto copia **3 líneas**.

---

# Pegar texto

Para pegar texto se utilizan los siguientes comandos.

Pegar debajo de la línea actual:

```
p
```

Pegar arriba de la línea actual:

```
P
```

---

# Reemplazar texto

Para reemplazar un carácter bajo el cursor se utiliza:

```
r
```

Después se escribe el nuevo carácter.

Por ejemplo:

```
ra
```

Esto reemplaza el carácter actual por **a**.

---

# Deshacer cambios

Para deshacer la última acción se utiliza:

```
u
```

Para rehacer un cambio deshecho se utiliza:

```
Ctrl + r
```

Esto permite corregir errores fácilmente.

---

# Idea clave de esta lección

`vim` permite editar texto rápidamente utilizando comandos desde el modo normal para insertar, eliminar, copiar y pegar contenido.

---

# Repaso

- `i` entra en modo inserción.
- `x` elimina un carácter.
- `dd` elimina una línea.
- `yy` copia una línea.
- `p` pega texto.
- `u` deshace cambios.
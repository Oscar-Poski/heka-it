---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 03-obtener-ayuda-en-linux-man-help-help
title: "Obtener ayuda en Linux (man, help, --help)"

summary: "Aprender cómo encontrar información sobre comandos en Linux usando herramientas integradas como man, help y la opción --help."

durationMinutes: 7

objectives:

- "Aprender a consultar documentación desde la terminal"
- "Usar man para explorar manuales de comandos"
- "Usar help y --help para obtener información rápida"
    
order: 3
    

---

# Obtener ayuda en Linux (man, help, --help)

En Linux existen **miles de comandos** y herramientas diferentes.

Nadie memoriza todos los comandos ni todas sus opciones.

La habilidad importante no es memorizar todo, sino **saber cómo encontrar información cuando la necesitas**.

Afortunadamente, Linux incluye varias herramientas que permiten consultar ayuda directamente desde la terminal.

En esta lección veremos tres de las más importantes:

- `man`
- `help`
- `-help`

---

# El manual del sistema: `man`

Una de las herramientas más importantes en Linux es el **manual del sistema**, accesible mediante el comando `man`.

`man` significa **manual**.

Permite consultar la documentación de la mayoría de los comandos del sistema.

Por ejemplo, para ver el manual del comando `ls` puedes escribir:

```bash
man ls
```

Esto abre una página con información detallada sobre el comando.

Normalmente incluye:

- descripción del comando
- opciones disponibles
- ejemplos de uso
- comportamiento del programa

---

## Navegar dentro de `man`

Las páginas del manual se abren en un visor de texto.

Algunos controles básicos son:

- **Flechas arriba/abajo** → desplazarse
- **Barra espaciadora** → avanzar una página
- **q** → salir del manual

Si nunca has usado `man`, puede parecer extraño al principio, pero es una herramienta muy poderosa.

---

# Ayuda rápida con `-help`

Muchos comandos también incluyen una opción llamada `--help`.

Esta opción muestra una explicación rápida del comando y sus opciones más comunes.

Por ejemplo:

```bash
ls --help
```

Esto muestra información directamente en la terminal.

La salida suele incluir:

- descripción breve
- lista de opciones disponibles
- ejemplos simples
- `-help` suele ser más corto y directo que `man`.

---

# El comando `help`

Algunos comandos no son programas externos, sino **comandos internos de la shell**.

Para esos casos existe el comando `help`.

Por ejemplo:

```bash
help cd
```

Esto muestra información sobre el comando `cd`, que es parte de la shell.

El comando `help` es especialmente útil para aprender comandos internos de Bash.

---

# Cuándo usar cada uno

Cada herramienta tiene un propósito ligeramente diferente.

### `man`

- documentación completa
- más detallada
- útil para aprender profundamente un comando

### `-help`

- explicación rápida
- buena para recordar opciones
- útil cuando ya conoces el comando

### `help`

- documentación de comandos internos de la shell

Con el tiempo aprenderás a usar las tres dependiendo de la situación.

---

# Ejemplo práctico

Supongamos que encuentras un comando nuevo:

```bash
grep
```

Puedes aprender sobre él de varias formas.

Manual completo:

```bash
man grep
```

Ayuda rápida:

``` bash
grep --help
```

Ambas opciones te ayudan a entender cómo usar el comando.

---

# Una habilidad clave en Linux

En Linux es muy común encontrar herramientas nuevas.

Por eso, saber consultar documentación es una habilidad esencial.

Muchos usuarios experimentados no memorizan todas las opciones.

En cambio, saben **cómo encontrar rápidamente la información correcta**.

---

# Idea clave de esta lección

Linux incluye herramientas integradas para consultar documentación directamente desde la terminal.

Las más importantes son `man`, `help` y `--help`, y aprender a usarlas permite explorar y entender nuevos comandos de forma autónoma.

---

# Repaso

- Linux incluye documentación integrada para muchos comandos.
- `man` muestra el manual completo de un comando.
- `-help` muestra ayuda rápida directamente en la terminal.
- `help` muestra información sobre comandos internos de la shell.
- Saber consultar documentación es más importante que memorizar comandos.
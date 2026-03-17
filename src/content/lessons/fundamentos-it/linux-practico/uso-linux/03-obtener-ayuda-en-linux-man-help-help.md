---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 03-obtener-ayuda-en-linux-man-help-help
title: "Obtener Ayuda"

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
- `--help`

---

# El manual del sistema: `man`

Una de las herramientas más importantes en Linux es el **manual del sistema**, accesible mediante el comando `man`.

`man` significa **manual**.

Permite consultar la documentación de la mayoría de los comandos del sistema.

Por ejemplo, para ver el manual del comando `ls` puedes escribir:

```bash
usuario@equipo:~$ man ls
```
Esto abre una página con información detallada sobre el comando.

Normalmente incluye:

- descripción del comando
- opciones disponibles
- ejemplos de uso
- comportamiento del programa
```bash
usuario@equipo:~$ man ls
LS(1)                          User Commands                          LS(1)

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List information about the FILEs (the current directory by default).

       -a, --all
              do not ignore entries starting with .

       -l     use a long listing format

       -h     with -l, print sizes in human readable format

       -R     list subdirectories recursively

       -t     sort by modification time, newest first

AUTHOR
       Written by Richard M. Stallman and David MacKenzie.

REPORTING BUGS
       GNU coreutils online help: <https://www.gnu.org/software/coreutils/>

SEE ALSO
       Full documentation at: <https://www.gnu.org/software/coreutils/ls>
```
---

## Navegar dentro de `man`

Las páginas del manual se abren en un visor de texto.

Algunos controles básicos son:

- **Flechas arriba/abajo** → desplazarse
- **Barra espaciadora** → avanzar una página
- **q** → salir del manual

Si nunca has usado `man`, puede parecer extraño al principio, pero es una herramienta muy poderosa.

---

# Ayuda rápida con `--help`

Muchos comandos también incluyen una opción llamada `--help`.

Esta opción muestra una explicación rápida del comando y sus opciones más comunes.

Por ejemplo:

```bash
usuario@equipo:~$ ls --help
```

Esto muestra información directamente en la terminal.

La salida suele incluir:

- descripción breve
- lista de opciones disponibles
- ejemplos simples
- `--help` suele ser más corto y directo que `man`.
```bash
usuario@equipo:~$ ls --help
Usage: ls [OPTION]... [FILE]...
List information about the FILEs (the current directory by default).

Mandatory arguments to long options are mandatory for short options too.
  -a, --all                  do not ignore entries starting with .
  -A, --almost-all           do not list implied . and ..
      --author               with -l, print the author of each file
  -b, --escape               print C-style escapes for nongraphic characters
      --block-size=SIZE      scale sizes by SIZE before printing them
  -B, --ignore-backups       do not list implied entries ending with ~
  -c                         with -lt: sort by, and show, ctime (time of last
                             modification of file status information)
  -C                         list entries by columns
      --color[=WHEN]         colorize the output; WHEN can be 'always', 'auto',
                             or 'never'
  -d, --directory            list directories themselves, not their contents
  -F, --classify             append indicator (one of */=>@|) to entries
  -h, --human-readable       with -l, print sizes in human readable format
  -i, --inode                print the index number of each file
  -l                         use a long listing format
  -r, --reverse              reverse order while sorting
  -R, --recursive            list subdirectories recursively
  -S                         sort by file size, largest first
  -t                         sort by modification time, newest first
  -1                         list one file per line

Exit status:
  0  if OK,
  1  if minor problems,
  2  if serious trouble.

Report ls bugs to: <https://www.gnu.org/software/coreutils/>
Full documentation at: <https://www.gnu.org/software/coreutils/ls>
```
---

# El comando `help`

Algunos comandos no son programas externos, sino **comandos internos de la shell**.

Para esos casos existe el comando `help`.

Por ejemplo:

```bash
usuario@equipo:~$ help cd
```

Esto muestra información sobre el comando `cd`, que es parte de la shell.

El comando `help` es especialmente útil para aprender comandos internos de Bash.
```bash
usuario@equipo:~$ help cd
cd: cd [-L|[-P [-e]] [-@]] [dir]
    Change the shell working directory.

    Change the current directory to DIR. The default DIR is the value of the
    HOME shell variable.

    The variable CDPATH defines the search path for the directory containing
    DIR. Alternative directory names in CDPATH are separated by a colon (:).
    A null directory name is the same as the current directory. If DIR begins
    with a slash (/), then CDPATH is not used.

    If the directory is not found, and the shell option 'cdable_vars' is set,
    the word is assumed to be a variable name. If that variable has a value,
    its value is used for DIR.

    Options:
      -L    force symbolic links to be followed: resolve symbolic links in DIR
            after processing instances of '..'
      -P    use the physical directory structure without following symbolic
            links
      -e    if the -P option is supplied, and the current working directory
            cannot be determined successfully, exit with a non-zero status
      -@    on systems that support it, present a file with extended attributes
            as a directory containing the file attributes

    Exit Status:
    Returns 0 if the directory is changed, and non-zero otherwise.
```
---

# Cuándo usar cada uno

Cada herramienta tiene un propósito ligeramente diferente.

### `man`

- documentación completa
- más detallada
- útil para aprender profundamente un comando

### `--help`

- explicación rápida
- buena para recordar opciones
- útil cuando ya conoces el comando

### `help`

- documentación de comandos internos de la shell

Con el tiempo aprenderás a usar las tres dependiendo de la situación.

---

# Ejemplo práctico

Supongamos que encuentras un comando nuevo: `grep`.

Puedes aprender sobre él de varias formas.

Manual completo:

```bash
usuario@equipo:~$ man grep
```

Ayuda rápida:

``` bash
usuario@equipo:~$ grep --help
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
- `--help` muestra ayuda rápida directamente en la terminal.
- `help` muestra información sobre comandos internos de la shell.
- Saber consultar documentación es más importante que memorizar comandos.
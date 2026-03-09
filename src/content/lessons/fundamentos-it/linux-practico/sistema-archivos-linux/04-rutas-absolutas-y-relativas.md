---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: sistema-archivos-linux
lessonSlug: 04-rutas-absolutas-y-relativas
title: "Rutas absolutas y relativas"

summary: "Aprender qué son las rutas absolutas y relativas en Linux y cómo se utilizan para referenciar archivos y directorios."

durationMinutes: 7

objectives:

- "Entender qué es una ruta en el sistema de archivos"
- "Diferenciar entre rutas absolutas y relativas"
- "Usar ambos tipos de rutas en comandos de Linux"
    
order: 4
    

---

# Rutas absolutas y relativas

Cuando trabajas con archivos en Linux, necesitas una forma de indicar **dónde se encuentra un archivo o directorio dentro del sistema**.

Para esto se utilizan **rutas**.

Una **ruta** es simplemente la ubicación de un archivo o carpeta dentro del sistema de archivos.

En Linux existen dos tipos principales de rutas:

- rutas absolutas
- rutas relativas

Entender la diferencia es fundamental para trabajar con la terminal.

---

# ¿Qué es una ruta?

Una ruta describe **la ubicación de un archivo o directorio dentro del sistema de archivos**.

Por ejemplo:

```
/home/oscar/Documentos/notas.txt
```

Esta ruta indica exactamente dónde se encuentra el archivo `notas.txt`.

El sistema sigue esta estructura:

- directorio raíz `/`
- carpeta `home`
- carpeta `oscar`
- carpeta `Documentos`
- archivo `notas.txt`

---

# Rutas absolutas

Una **ruta absoluta** comienza siempre desde el directorio raíz del sistema:

```
/
```

Esto significa que la ruta describe **la ubicación completa desde el inicio del sistema de archivos**.

Ejemplo:

```
/home/oscar/Documentos
```

Esta ruta siempre apunta al mismo lugar, sin importar desde qué directorio se ejecute el comando.

Por ejemplo:

```bash
cd /home/oscar/Documentos
```

Este comando funcionará desde cualquier ubicación del sistema.

---

# Rutas relativas

Una **ruta relativa** describe una ubicación **en relación con el directorio actual**.

Por ejemplo, si estás en:

```
/home/oscar
```

puedes entrar al directorio `Documentos` con:

```bash
cd Documentos
```

No necesitas escribir la ruta completa, porque el sistema interpreta la ruta **a partir de tu ubicación actual**.

---

# El directorio actual

Para saber dónde te encuentras dentro del sistema puedes usar:

```bash
pwd
```

Esto mostrará tu ubicación actual dentro del sistema de archivos.

Por ejemplo:

```
/home/oscar
```

A partir de ese punto puedes usar rutas relativas para moverte.

---

# El directorio padre (`..`)

Linux utiliza dos símbolos especiales para navegar por rutas relativas.

El primero es:

```
..
```

Esto representa **el directorio padre**, es decir, la carpeta que contiene la actual.

Por ejemplo:

```bash
cd ..
```

Este comando te mueve **un nivel hacia arriba** en la estructura de directorios.

---

# El directorio actual (`.`)

Otro símbolo especial es:

```
.
```

Este símbolo representa **el directorio actual**.

Aunque no siempre es necesario usarlo, aparece con frecuencia en comandos.

Por ejemplo:

```bash
ls .
```

Este comando lista el contenido del directorio actual.

---

# Ejemplo comparando ambos tipos

Supongamos que estás en:

```
/home/oscar
```

Para entrar a `Documentos` puedes usar:

Ruta relativa:

```bash
cd Documentos
```

Ruta absoluta:

```bash
cd /home/oscar/Documentos
```

Ambas funcionan, pero la ruta relativa depende de tu ubicación actual.

---

# ¿Cuándo usar cada una?

Ambos tipos de rutas son útiles.

**Rutas absolutas**

- cuando necesitas especificar una ubicación exacta
- en scripts
- cuando no estás seguro de tu ubicación actual

**Rutas relativas**

- cuando trabajas dentro de un mismo directorio
- para escribir comandos más cortos
- durante navegación interactiva

Con el tiempo usarás ambos tipos de forma natural.

---

# Idea clave de esta lección

Las rutas permiten identificar la ubicación de archivos dentro del sistema de archivos.

Las rutas absolutas comienzan desde el directorio raíz `/`, mientras que las rutas relativas se interpretan a partir del directorio actual.

---

# Repaso

- Una ruta indica la ubicación de un archivo o directorio.
- Las rutas absolutas comienzan desde `/`.
- Las rutas relativas dependen del directorio actual.
- `pwd` muestra el directorio actual.
- `..` representa el directorio padre.
- `.` representa el directorio actual.
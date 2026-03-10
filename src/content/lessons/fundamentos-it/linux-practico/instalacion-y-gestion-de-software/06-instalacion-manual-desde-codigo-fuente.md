---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: instalacion-y-gestion-de-software
lessonSlug: 06-instalacion-manual-desde-codigo-fuente
title: "Instalación manual desde código fuente"

summary: "Aprender cómo instalar software en Linux compilándolo directamente desde su código fuente."

durationMinutes: 9

objectives:

- "Comprender qué significa compilar software"
- "Instalar software desde código fuente"
- "Entender cuándo se utiliza este método"
    
order: 6
    

---

# Instalación manual desde código fuente

La mayoría del software en Linux se instala mediante **gestores de paquetes**.

Sin embargo, en algunos casos es necesario instalar software **directamente desde su código fuente**.

Esto significa descargar el **código del programa** y compilarlo en tu propio sistema.

Este método se utiliza cuando:

- el software no está disponible en los repositorios
- se necesita una versión específica
- se desea compilar el programa con opciones personalizadas

---

# ¿Qué es el código fuente?

El **código fuente** es el conjunto de archivos que contienen las instrucciones escritas por los desarrolladores del programa.

Estas instrucciones suelen estar escritas en lenguajes como:

- C
- C++
- Go
- Rust
- Python
- otros lenguajes de programación

Para que el sistema pueda ejecutar el programa, este código debe ser **compilado**.

---

# Qué significa compilar

**Compilar** es el proceso de transformar el código fuente en un programa ejecutable.

Esto lo hace un programa especial llamado **compilador**.

Por ejemplo:

- `gcc`
- `clang`

El resultado de la compilación es un archivo que el sistema puede ejecutar directamente.

---

# Flujo típico de instalación

Muchos proyectos que se distribuyen como código fuente utilizan un proceso estándar de instalación.

El flujo común suele ser:

```bash
./configure
make
sudomake install
```

Cada paso cumple una función específica.

---

# Paso 1 — Configuración

El script `configure` analiza el sistema y prepara la compilación.

```bash
./configure
```

Este paso:

- verifica dependencias
- detecta bibliotecas del sistema
- prepara archivos de compilación

---

# Paso 2 — Compilación

El comando `make` compila el programa.

```bash
make
```

Durante este paso:

- el código fuente se convierte en archivos ejecutables
- se generan bibliotecas necesarias

Dependiendo del programa, este proceso puede tardar algunos minutos.

---

# Paso 3 — Instalación

Finalmente se instala el programa en el sistema.

```bash
sudomake install
```

Este paso:

- copia los archivos ejecutables
- instala bibliotecas
- coloca archivos en directorios del sistema

Después de este paso el programa queda disponible para usar.

---

# Ejemplo general

Un proceso típico podría verse así:

```bash
tar -xvf programa.tar.gz
cd programa
./configure
make
sudomake install
```

Esto:

1. descomprime el archivo
2. entra al directorio del programa
3. configura la compilación
4. compila el software
5. instala el programa

---

# Posibles problemas

Instalar desde código fuente puede presentar algunos desafíos.

Por ejemplo:

- dependencias faltantes
- errores de compilación
- conflictos con bibliotecas del sistema

Por esta razón, normalmente se recomienda usar primero los **gestores de paquetes** cuando sea posible.

---

# Ventajas de compilar software

Aunque es más complejo, este método también tiene ventajas.

- permite instalar versiones muy recientes
- permite personalizar la compilación
- permite optimizar el software para el sistema

Por esta razón es común en entornos de desarrollo o software especializado.

---

# Idea clave de esta lección

Instalar software desde código fuente implica descargar el código del programa, compilarlo y luego instalarlo en el sistema.

---

# Repaso

- El código fuente contiene las instrucciones del programa.
- Compilar transforma el código en un ejecutable.
- El flujo común es `configure`, `make`, `make install`.
- Este método se usa cuando el software no está en repositorios.
- Es más flexible, pero también más complejo.
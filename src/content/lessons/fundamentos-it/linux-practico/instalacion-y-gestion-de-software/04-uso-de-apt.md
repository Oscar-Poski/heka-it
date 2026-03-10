---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: instalacion-y-gestion-de-software
lessonSlug: 04-uso-de-apt
title: "Uso de apt"

summary: "Aprender a utilizar apt para instalar, actualizar, buscar y eliminar paquetes en sistemas Linux basados en Debian y Ubuntu."

durationMinutes: 9

objectives:

- "Utilizar apt para instalar software"
- "Actualizar la lista de paquetes y el sistema"
- "Buscar y eliminar paquetes"
    
order: 4
    

---

# Uso de `apt`

En muchas distribuciones Linux, especialmente **Debian y Ubuntu**, el gestor de paquetes principal es:

```
apt
```

`apt` permite administrar software desde la terminal de forma sencilla.

Con `apt` puedes:

- instalar programas
- actualizar el sistema
- buscar paquetes
- eliminar software

Es una de las herramientas más utilizadas al administrar sistemas Linux.

---

# Actualizar la lista de paquetes

Antes de instalar software, es recomendable actualizar la lista de paquetes disponibles.

Esto se hace con:

```bash
sudo apt update
```

Este comando:

- consulta los repositorios configurados
- descarga la lista más reciente de paquetes disponibles

Es importante entender que **no instala ni actualiza programas**, solo actualiza la información del sistema sobre los paquetes disponibles.

---

# Actualizar el sistema

Después de actualizar la lista de paquetes, puedes actualizar los programas instalados con:

```bash
sudo apt upgrade
```

Este comando:

- instala versiones nuevas de los paquetes instalados
- aplica actualizaciones disponibles

Mantener el sistema actualizado ayuda a mejorar **seguridad y estabilidad**.

---

# Instalar software

Para instalar un paquete se utiliza:

```bash
sudo apt install nombre_paquete
```

Ejemplo:

```bash
sudo apt install htop
```

Durante la instalación, `apt` puede:

- descargar el paquete
- instalar dependencias necesarias
- configurar el programa automáticamente

Después de la instalación, el programa queda disponible en el sistema.

---

# Buscar paquetes

Si no estás seguro del nombre exacto de un programa, puedes buscarlo usando:

```bash
apt search nombre
```

Por ejemplo:

```bash
apt search htop
```

Esto mostrará paquetes que coincidan con el término buscado.

---

# Ver información de un paquete

También es posible obtener información detallada sobre un paquete.

```bash
apt show nombre_paquete
```

Ejemplo:

```bash
apt show htop
```

Esto muestra información como:

- descripción del programa
- dependencias
- tamaño del paquete
- repositorio de origen

---

# Eliminar software

Para eliminar un programa se utiliza:

```bash
sudo apt remove nombre_paquete
```

Ejemplo:

```bash
sudo apt remove htop
```

Esto elimina el programa, pero puede dejar algunos archivos de configuración.

---

# Eliminar completamente un paquete

Si deseas eliminar también los archivos de configuración, puedes usar:

```bash
sudo apt purge nombre_paquete
```

Ejemplo:

```bash
sudo apt purge htop
```

Esto elimina completamente el paquete del sistema.

---

# Limpiar dependencias innecesarias

Cuando se eliminan programas, algunas dependencias pueden quedar instaladas aunque ya no se utilicen.

Para limpiar estas dependencias se utiliza:

```bash
sudo apt autoremove
```

Esto ayuda a mantener el sistema limpio.

---

# Flujo típico de trabajo

Un flujo común al administrar software con `apt` es:

```bash
sudo apt update
sudo apt upgrade
sudo apt install paquete
```

Este proceso mantiene el sistema actualizado y permite instalar nuevas aplicaciones fácilmente.

---

# Idea clave de esta lección

`apt` es el gestor de paquetes utilizado en distribuciones basadas en Debian y Ubuntu, y permite instalar, actualizar, buscar y eliminar software desde la terminal.

---

# Repaso

- `apt update` actualiza la lista de paquetes.
- `apt upgrade` actualiza programas instalados.
- `apt install` instala software.
- `apt search` busca paquetes.
- `apt remove` elimina programas.
- `apt autoremove` limpia dependencias innecesarias.
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: instalacion-y-gestion-de-software
lessonSlug: 03-gestores-de-paquetes
title: "Gestores de paquetes"

summary: "Entender qué son los gestores de paquetes y cómo permiten instalar, actualizar y administrar software en Linux."

durationMinutes: 7

objectives:

- "Comprender qué es un gestor de paquetes"
- "Entender su papel en la instalación de software"
- "Reconocer los gestores de paquetes más comunes en Linux"
    
order: 2
    

---

# Gestores de paquetes

En Linux, la instalación de software se realiza normalmente mediante **gestores de paquetes**.

Un **gestor de paquetes** es una herramienta que permite:

- instalar software
- actualizar programas
- eliminar aplicaciones
- administrar dependencias

Estas herramientas trabajan junto con los **repositorios de software** para gestionar programas dentro del sistema.

---

# Qué hace un gestor de paquetes

Un gestor de paquetes automatiza varias tareas que de otro modo serían complejas.

Por ejemplo, cuando instalas un programa, el gestor de paquetes puede:

1. buscar el paquete solicitado
2. descargarlo desde un repositorio
3. instalar sus dependencias
4. colocar los archivos en las ubicaciones correctas
5. registrar el paquete en el sistema

Todo este proceso ocurre automáticamente.

---

# Problema que resuelven los gestores de paquetes

Antes de que existieran estos sistemas, instalar software podía ser complicado.

Muchos programas dependen de:

- bibliotecas
- archivos del sistema
- otras herramientas

Sin un gestor de paquetes, el usuario tendría que instalar cada dependencia manualmente.

Esto podría generar conflictos o errores.

Los gestores de paquetes resuelven este problema de forma automática.

---

# Gestores de paquetes más comunes

Dependiendo de la distribución Linux, el gestor de paquetes puede variar.

Algunos de los más comunes son:

Distribuciones basadas en **Debian y Ubuntu**:

```
apt
```

Distribuciones basadas en **Red Hat**:

```
dnf
```

Distribuciones como **Arch Linux**:

```
pacman
```

Aunque los comandos pueden cambiar, todos cumplen funciones similares.

---

# Ejemplo práctico

En sistemas basados en Debian o Ubuntu, puedes instalar software usando:

```bash
sudo apt install htop
```

Este comando realiza varias acciones automáticamente:

- descarga el paquete
- instala dependencias necesarias
- configura el software

Después de la instalación, el programa queda disponible en el sistema.

---

# Actualizar software con el gestor de paquetes

Los gestores de paquetes también permiten **actualizar programas instalados**.

Por ejemplo:

```bash
sudo apt upgrade
```

Esto actualiza los paquetes del sistema a versiones más recientes disponibles en los repositorios.

Esto facilita mantener el sistema actualizado y seguro.

---

# Eliminar software

También es posible eliminar programas instalados.

Por ejemplo:

```bash
sudo apt remove nombre_paquete
```

Esto elimina el programa del sistema.

Algunos gestores de paquetes también permiten eliminar dependencias que ya no se utilizan.

---

# Ventajas de los gestores de paquetes

Los gestores de paquetes ofrecen varios beneficios importantes.

- instalación rápida de software
- manejo automático de dependencias
- actualizaciones centralizadas
- control sobre programas instalados

Esto hace que la administración de software en Linux sea más eficiente y organizada.

---

# Idea clave de esta lección

Los gestores de paquetes son herramientas que permiten instalar, actualizar y eliminar software en Linux de forma automatizada y segura.

---

# Repaso

- Un gestor de paquetes administra software en Linux.
- Permite instalar, actualizar y eliminar programas.
- Gestiona automáticamente dependencias.
- Algunos gestores comunes son `apt`, `dnf` y `pacman`.
- Facilitan mantener el sistema organizado y actualizado.
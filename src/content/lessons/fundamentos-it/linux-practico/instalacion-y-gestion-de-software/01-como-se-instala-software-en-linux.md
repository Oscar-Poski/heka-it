---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: instalacion-y-gestion-de-software
lessonSlug: 01-como-se-instala-software-en-linux
title: "¿Cómo se instala software en Linux?"

summary: "Entender las diferentes formas en que se instala software en Linux y cómo funciona el proceso de instalación."

durationMinutes: 7

objectives:

- "Comprender cómo se distribuye el software en Linux"
- "Conocer las formas comunes de instalación"
- "Entender el papel de los gestores de paquetes"
    
order: 1
    

---

# ¿Cómo se instala software en Linux?

Instalar software en Linux funciona de forma diferente a otros sistemas operativos.

En muchos sistemas como Windows, es común descargar un archivo instalador desde internet y ejecutarlo.

En Linux, normalmente el software se instala mediante **gestores de paquetes** que descargan e instalan programas desde **repositorios oficiales**.

Este enfoque tiene varias ventajas:

- mayor seguridad
- instalación automatizada
- actualizaciones centralizadas
- control de dependencias

---

# Qué es un paquete

En Linux, el software se distribuye normalmente en forma de **paquetes**.

Un **paquete** es un archivo que contiene:

- el programa
- archivos necesarios para ejecutarlo
- información de instalación
- dependencias necesarias

El sistema utiliza herramientas especiales para instalar estos paquetes correctamente.

---

# Qué son las dependencias

Muchos programas necesitan **otras bibliotecas o programas** para funcionar.

Estas se llaman **dependencias**.

Por ejemplo, una aplicación puede necesitar:

- bibliotecas de red
- bibliotecas gráficas
- herramientas del sistema

Los gestores de paquetes se encargan de **instalar automáticamente estas dependencias**.

Esto evita problemas comunes como programas que no funcionan por falta de archivos.

---

# Repositorios de software

La mayoría del software en Linux se instala desde **repositorios**.

Un repositorio es un servidor que contiene miles de paquetes listos para instalar.

Las distribuciones Linux mantienen repositorios oficiales con software:

- probado
- mantenido
- compatible con el sistema

Esto permite instalar programas fácilmente desde la terminal.

---

# Ejemplo de instalación

En muchas distribuciones basadas en Debian o Ubuntu se utiliza el gestor de paquetes:

```
apt
```

Por ejemplo:

```bash
sudo apt install htop
```

Este comando:

1. busca el paquete `htop`
2. descarga el programa
3. instala sus dependencias
4. configura el software automáticamente

---

# Otros gestores de paquetes

Dependiendo de la distribución Linux, el gestor de paquetes puede cambiar.

Algunos ejemplos comunes:

Distribuciones basadas en Debian:

```
apt
```

Distribuciones basadas en Red Hat:

```
dnf
```

Distribuciones más avanzadas como Arch Linux:

```
pacman
```

Aunque los comandos cambian, el concepto es muy similar.

---

# Instalación desde interfaz gráfica

Muchas distribuciones Linux también incluyen **tiendas de software gráficas**.

Estas herramientas permiten:

- buscar aplicaciones
- instalar programas con un clic
- actualizar software

Internamente, estas herramientas utilizan los mismos repositorios y gestores de paquetes.

---

# Otras formas de instalar software

Además de los repositorios, también existen otras formas de instalar software en Linux.

Por ejemplo:

- instalar paquetes descargados manualmente
- compilar software desde código fuente
- usar formatos universales como Flatpak o Snap

Estas opciones se utilizan en situaciones específicas.

---

# Ventajas del sistema de paquetes

El sistema de paquetes de Linux ofrece varios beneficios.

- instalación rápida
- control automático de dependencias
- actualizaciones centralizadas
- mayor seguridad

Por esta razón, en Linux normalmente **no se descargan instaladores manualmente** como en otros sistemas.

---

# Idea clave de esta lección

En Linux el software se instala principalmente mediante gestores de paquetes que descargan programas desde repositorios oficiales y gestionan automáticamente dependencias y actualizaciones.

---

# Repaso

- El software en Linux se distribuye en paquetes.
- Los paquetes contienen programas y dependencias.
- Los repositorios almacenan miles de paquetes listos para instalar.
- Los gestores de paquetes automatizan la instalación.
- Diferentes distribuciones usan herramientas como `apt`, `dnf` o `pacman`.
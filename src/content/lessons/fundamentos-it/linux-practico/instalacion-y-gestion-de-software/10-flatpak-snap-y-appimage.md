---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: instalacion-y-gestion-de-software
lessonSlug: 10-flatpak-snap-y-appimage
title: "Flatpak, Snap y AppImage"

summary: "Entender los formatos modernos de distribución de software en Linux: Flatpak, Snap y AppImage."

durationMinutes: 8

objectives:

- "Comprender qué son Flatpak, Snap y AppImage"
- "Entender cómo funcionan los formatos de paquetes universales"
- "Conocer sus ventajas y diferencias principales"
    
order: 10
    

---

# Flatpak, Snap y AppImage

Tradicionalmente, el software en Linux se instala usando **gestores de paquetes** como:

- `apt`
- `dnf`
- `pacman`

Estos gestores dependen de los repositorios de cada distribución.

Sin embargo, esto puede generar un problema:

un programa empaquetado para una distribución **no siempre funciona en otra**.

Para resolver este problema surgieron **formatos universales de aplicaciones**, como:

- **Flatpak**
- **Snap**
- **AppImage**

Estos formatos permiten instalar software **independientemente de la distribución Linux**.

---

# ¿Qué son los paquetes universales?

Los paquetes universales incluyen dentro del mismo paquete:

- la aplicación
- sus dependencias
- bibliotecas necesarias

Esto permite que el programa funcione en diferentes distribuciones sin depender del sistema base.

En otras palabras, el software viene **auto-contenido**.

---

# Flatpak

**Flatpak** es un sistema moderno para distribuir aplicaciones en Linux.

Características principales:

- aplicaciones aisladas del sistema
- dependencias incluidas
- repositorios centralizados

Uno de los repositorios más conocidos es:

```
Flathub
```

Desde allí se pueden instalar miles de aplicaciones.

Ejemplo de instalación:

```bash
flatpak install flathub org.gimp.GIMP
```

Flatpak es muy popular en muchas distribuciones modernas.

---

# Snap

**Snap** es otro formato universal desarrollado por **Canonical**, la empresa detrás de Ubuntu.

Las aplicaciones Snap se instalan mediante el sistema:

```
snap
```

Ejemplo:

```bash
sudo snap install code
```

Esto instalaría Visual Studio Code.

Características de Snap:

- aplicaciones aisladas
- actualizaciones automáticas
- repositorio central llamado **Snap Store**

Snap es utilizado principalmente en Ubuntu y sus derivados.

---

# AppImage

**AppImage** funciona de forma diferente.

En lugar de instalar el programa en el sistema, AppImage distribuye la aplicación como **un solo archivo ejecutable**.

El proceso suele ser:

1. descargar el archivo AppImage
2. darle permisos de ejecución
3. ejecutarlo directamente

Ejemplo:

```bash
chmod +x programa.AppImage
./programa.AppImage
```

No requiere instalación ni permisos de administrador.

---

# Diferencias principales

Cada formato tiene un enfoque ligeramente distinto.

**Flatpak**

- muy popular en distribuciones modernas
- buena integración con escritorios Linux
- repositorio Flathub

---

**Snap**

- desarrollado por Canonical
- muy usado en Ubuntu
- actualizaciones automáticas

---

**AppImage**

- archivo ejecutable único
- no requiere instalación
- fácil de transportar entre sistemas

---

# Cuándo usar estos formatos

Estos formatos se utilizan cuando:

- el software no está en repositorios
- se necesita una versión reciente
- se quiere instalar aplicaciones fácilmente

También son muy comunes para **aplicaciones de escritorio**.

---

# Idea clave de esta lección

Flatpak, Snap y AppImage son formatos modernos que permiten distribuir aplicaciones Linux de forma universal, sin depender de una distribución específica.

---

# Repaso

- Los paquetes universales funcionan en diferentes distribuciones.
- Flatpak utiliza repositorios como Flathub.
- Snap es desarrollado por Canonical.
- AppImage distribuye aplicaciones como archivos ejecutables.
- Estos formatos simplifican la distribución de software en Linux.
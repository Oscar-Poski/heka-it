---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: instalacion-y-gestion-de-software
lessonSlug: 05-uso-de-dnf-o-yum
title: "Uso de dnf o yum"

summary: "Aprender a instalar, actualizar y administrar paquetes en distribuciones Linux basadas en Red Hat utilizando dnf o yum."

durationMinutes: 8

objectives:

- "Comprender qué son dnf y yum"
- "Instalar y eliminar software usando dnf o yum"
- "Actualizar el sistema en distribuciones basadas en Red Hat"
    
order: 5
    

---

# Uso de `dnf` o `yum`

En distribuciones Linux basadas en **Red Hat**, el gestor de paquetes más común es:

```
dnf
```

En versiones más antiguas del sistema se utilizaba:

```
yum
```

Hoy en día, `dnf` es el reemplazo moderno de `yum`, aunque ambos funcionan de forma muy similar.

Estas herramientas permiten:

- instalar software
- actualizar paquetes
- eliminar programas
- buscar paquetes disponibles

---

# Actualizar repositorios

Antes de instalar software, es recomendable actualizar la información de los repositorios.

Esto se hace con:

```bash 
sudo dnf check-update
```

Este comando consulta los repositorios y muestra si existen actualizaciones disponibles.

---

# Actualizar el sistema

Para actualizar todos los paquetes instalados se utiliza:

```bash
sudo dnf update
```

Esto descargará e instalará las versiones más recientes disponibles en los repositorios.

Mantener el sistema actualizado es importante para:

- seguridad
- estabilidad
- compatibilidad

---

# Instalar software

Para instalar un paquete se utiliza:

```bash
sudo dnf install nombre_paquete
```

Ejemplo:

```bash
sudo dnf install htop
```

Durante la instalación, `dnf`:

- descarga el paquete
- instala dependencias necesarias
- configura el programa automáticamente

---

# Buscar paquetes

Si no conoces el nombre exacto de un paquete, puedes buscarlo con:

```bash
dnf search nombre
```

Ejemplo:

```bash
dnf search htop
```

Esto mostrará paquetes que coincidan con el término buscado.

---

# Ver información de un paquete

Para obtener detalles sobre un paquete puedes usar:

```bash
dnf info nombre_paquete
```

Ejemplo:

```bash
dnf info htop
```

Esto muestra:

- descripción
- tamaño
- repositorio
- versión disponible

---

# Eliminar software

Para eliminar un paquete del sistema se utiliza:

```bash
sudo dnf remove nombre_paquete
```

Ejemplo:

```bash
sudo dnf remove htop
```

Esto eliminará el programa del sistema.

---

# Limpiar paquetes innecesarios

También es posible eliminar dependencias que ya no se utilizan.

Esto se hace con:

```bash
sudo dnf autoremove
```

Esto ayuda a mantener el sistema limpio y organizado.

---

# Diferencia entre `dnf` y `yum`

Aunque ambos comandos son muy similares, `dnf` ofrece mejoras como:

- mejor manejo de dependencias
- mayor velocidad
- mejor gestión de repositorios

Por esta razón, la mayoría de las distribuciones modernas basadas en Red Hat utilizan `dnf`.

---

# Distribuciones que usan `dnf`

Algunas distribuciones que utilizan `dnf` incluyen:

- Fedora
- Red Hat Enterprise Linux (versiones recientes)
- Rocky Linux
- AlmaLinux

Estas distribuciones utilizan paquetes en formato **RPM**.

---

# Idea clave de esta lección

`dnf` es el gestor de paquetes utilizado en muchas distribuciones basadas en Red Hat y permite instalar, actualizar y eliminar software de forma similar a `apt`.

---

# Repaso

- `dnf` es el gestor de paquetes moderno en sistemas basados en Red Hat.
- Permite instalar software con `dnf install`.
- `dnf update` actualiza el sistema.
- `dnf search` permite buscar paquetes.
- `dnf remove` elimina programas instalados.
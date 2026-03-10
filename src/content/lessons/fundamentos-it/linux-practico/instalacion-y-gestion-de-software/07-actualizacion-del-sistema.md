---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: instalacion-y-gestion-de-software
lessonSlug: 07-actualizacion-del-sistema
title: "Actualización del sistema"

summary: "Aprender cómo mantener un sistema Linux actualizado instalando nuevas versiones de paquetes y parches de seguridad."

durationMinutes: 7

objectives:

- "Comprender por qué es importante actualizar el sistema"
- "Actualizar la lista de paquetes disponibles"
- "Instalar actualizaciones del sistema"
    
order: 7
    

---

# Actualización del sistema

Mantener el sistema actualizado es una de las tareas más importantes en la administración de Linux.

Las actualizaciones permiten:

- corregir errores del software
- mejorar estabilidad del sistema
- agregar nuevas funciones
- aplicar **parches de seguridad**

Por esta razón es recomendable actualizar el sistema regularmente.

---

# Tipos de actualizaciones

Las actualizaciones del sistema pueden incluir diferentes tipos de cambios.

**Correcciones de errores**

Los desarrolladores corrigen fallos detectados en programas.

---

**Mejoras del software**

Algunas actualizaciones incluyen mejoras de rendimiento o nuevas funciones.

---

**Actualizaciones de seguridad**

Estas actualizaciones corrigen vulnerabilidades que podrían ser explotadas por atacantes.

Por esta razón, las actualizaciones de seguridad son especialmente importantes.

---

# Actualizar repositorios

Antes de instalar actualizaciones, el sistema necesita consultar los repositorios para obtener información sobre nuevas versiones de paquetes.

En sistemas basados en Debian o Ubuntu se utiliza:

```bash
sudo apt update
```

Este comando actualiza la **lista local de paquetes disponibles**.

No instala actualizaciones todavía.

---

# Actualizar paquetes instalados

Después de actualizar la lista de paquetes, puedes instalar las actualizaciones disponibles con:

```bash
sudo apt upgrade
```

Este comando descarga e instala las nuevas versiones disponibles para los paquetes instalados en el sistema.

---

# Actualización completa del sistema

En algunos casos se utiliza un comando más completo:

```bash
sudo apt full-upgrade
```

Este comando permite:

- instalar nuevas dependencias
- eliminar paquetes obsoletos si es necesario
- realizar actualizaciones más complejas

---

# Actualización en sistemas Red Hat

En distribuciones basadas en Red Hat, como Fedora o Rocky Linux, el proceso es similar.

Se utiliza el comando:

```bash
sudo dnf update
```

Esto actualiza los paquetes instalados a las versiones disponibles en los repositorios.

---

# Ver actualizaciones disponibles

Antes de actualizar, también es posible verificar qué paquetes tienen nuevas versiones disponibles.

En sistemas basados en Debian se puede usar:

```bash
apt list--upgradable
```

Esto muestra los paquetes que pueden actualizarse.

---

# Buenas prácticas

Algunas recomendaciones al actualizar el sistema:

- actualizar regularmente
- revisar actualizaciones de seguridad
- evitar retrasar actualizaciones importantes
- reiniciar servicios cuando sea necesario

En servidores críticos, las actualizaciones suelen probarse antes de aplicarse en producción.

---

# Idea clave de esta lección

Actualizar el sistema permite instalar nuevas versiones de software, corregir errores y aplicar parches de seguridad.

---

# Repaso

- Las actualizaciones mejoran seguridad y estabilidad.
- `apt update` actualiza la lista de paquetes.
- `apt upgrade` instala actualizaciones disponibles.
- `apt full-upgrade` permite actualizaciones más complejas.
- `dnf update` actualiza sistemas basados en Red Hat.
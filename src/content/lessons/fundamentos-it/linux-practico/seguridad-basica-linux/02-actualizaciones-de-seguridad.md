---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: seguridad-basica-linux
lessonSlug: 02-actualizaciones-de-seguridad
title: "Repaso: Actualizaciones de seguridad"

summary: "Comprender la importancia de las actualizaciones de seguridad y aprender cómo aplicarlas en sistemas Linux."

durationMinutes: 8

objectives:

- "Comprender por qué son importantes las actualizaciones de seguridad"
- "Actualizar el sistema y los paquetes instalados"
- "Adoptar buenas prácticas para mantener el sistema protegido"
    
order: 2
    

---

# Repaso: Actualizaciones de seguridad

Los sistemas operativos y el software contienen millones de líneas de código.

Con el tiempo, los desarrolladores descubren **errores o vulnerabilidades de seguridad** en ese código.

Una vulnerabilidad es un problema que podría permitir a un atacante:

- acceder al sistema
- ejecutar código malicioso
- robar información
- afectar el funcionamiento del sistema

Para corregir estos problemas, los desarrolladores publican **actualizaciones de seguridad**.

---

# Qué incluyen las actualizaciones

Las actualizaciones del sistema pueden incluir:

- correcciones de vulnerabilidades
- mejoras de estabilidad
- corrección de errores
- mejoras de rendimiento

Aplicar estas actualizaciones es una de las formas más efectivas de proteger un sistema Linux.

---

# Actualizar repositorios

Antes de instalar actualizaciones, el sistema necesita obtener la información más reciente sobre los paquetes disponibles.

En sistemas basados en Debian o Ubuntu se utiliza:

```bash
sudo apt update
```

Este comando actualiza la lista de paquetes disponibles en los repositorios.

---

# Instalar actualizaciones

Después de actualizar la lista de paquetes, puedes instalar las actualizaciones disponibles usando:

```bash
sudo apt upgrade
```

Esto descargará e instalará versiones más recientes de los paquetes instalados.

---

# Actualizar todo el sistema

En algunos casos se utiliza:

```bash
sudo apt full-upgrade
```

Este comando permite instalar actualizaciones que requieren cambios más complejos en dependencias.

---

# Ver paquetes actualizables

Para ver qué paquetes tienen actualizaciones disponibles puedes usar:

```bash
apt list --upgradable
```

Esto muestra una lista de paquetes que pueden actualizarse.

---

# Reiniciar servicios o el sistema

Algunas actualizaciones afectan componentes importantes como:

- el kernel
- servicios del sistema
- bibliotecas críticas

En estos casos puede ser necesario:

- reiniciar un servicio
- reiniciar el sistema

Esto asegura que las nuevas versiones estén en uso.

---

# Automatizar actualizaciones

En muchos servidores se utilizan herramientas que aplican actualizaciones automáticamente.

Esto ayuda a:

- mantener el sistema protegido
- reducir el riesgo de vulnerabilidades
- evitar olvidar actualizaciones importantes

---

# Buenas prácticas

Al trabajar con actualizaciones es recomendable:

- aplicar actualizaciones regularmente
- revisar qué paquetes se actualizarán
- realizar respaldos antes de cambios importantes

Esto reduce riesgos durante el proceso de actualización.

---

# Idea clave de esta lección

Las actualizaciones de seguridad corrigen vulnerabilidades en el sistema y son una de las formas más importantes de mantener un sistema Linux protegido.

---

# Repaso

- Las vulnerabilidades son errores que pueden afectar la seguridad.
- Las actualizaciones corrigen estos problemas.
- `apt update` actualiza la lista de paquetes.
- `apt upgrade` instala actualizaciones disponibles.
- Mantener el sistema actualizado mejora la seguridad.
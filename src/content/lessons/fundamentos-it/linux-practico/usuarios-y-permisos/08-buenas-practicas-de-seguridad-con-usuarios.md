---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: usuarios-y-permisos
lessonSlug: 08-buenas-practicas-de-seguridad-con-usuarios
title: "Buenas prácticas de seguridad con usuarios"

summary: "Aprender principios básicos de seguridad para administrar usuarios de forma segura en sistemas Linux."

durationMinutes: 7

objectives:

- "Comprender principios básicos de seguridad en cuentas de usuario"
- "Aplicar buenas prácticas en la administración de usuarios"
- "Reducir riesgos asociados a privilegios y accesos"
    
order: 8
    

---

# Buenas prácticas de seguridad con usuarios

La administración de usuarios no solo consiste en crear cuentas.

También implica **mantener el sistema seguro**.

Una mala gestión de usuarios puede provocar problemas como:

- accesos no autorizados
- modificaciones accidentales del sistema
- exposición de información sensible
- fallos en servicios críticos

Por eso existen varias **buenas prácticas de seguridad** al administrar usuarios en Linux.

---

# Principio de mínimo privilegio

Uno de los principios más importantes en seguridad es el **principio de mínimo privilegio**.

Este principio establece que:

> cada usuario debe tener únicamente los permisos necesarios para realizar su trabajo.
> 

Por ejemplo:

- un usuario normal no debería tener acceso administrativo
- una aplicación no debería poder modificar archivos del sistema
- un servicio no debería ejecutar tareas que no necesita

Esto reduce el impacto de errores o ataques.

---

# Evitar usar root directamente

El usuario root tiene control total sobre el sistema.

Por eso, en la mayoría de los casos se recomienda **no usar root para tareas diarias**.

En su lugar se utiliza:

```bash
sudo
```

Esto permite ejecutar comandos administrativos **solo cuando es necesario**.

---

# Usar contraseñas seguras

Las contraseñas débiles representan uno de los riesgos más comunes en sistemas.

Una contraseña segura debería:

- tener suficiente longitud
- combinar letras, números y símbolos
- no ser fácil de adivinar
- no reutilizarse en múltiples sistemas

En sistemas críticos también se pueden implementar políticas de contraseñas obligatorias.

---

# Eliminar cuentas que ya no se usan

Las cuentas antiguas o abandonadas pueden convertirse en un riesgo de seguridad.

Por ejemplo:

- cuentas de empleados que ya no trabajan en la organización
- cuentas temporales de pruebas
- cuentas de proyectos que ya terminaron

Mantener el sistema limpio ayuda a reducir riesgos.

---

# Controlar quién puede usar sudo

El acceso a `sudo` debe limitarse únicamente a usuarios que realmente necesitan privilegios administrativos.

No todos los usuarios del sistema deberían tener acceso a estos permisos.

Esto reduce el riesgo de:

- errores administrativos
- cambios accidentales en el sistema
- accesos no autorizados

---

# Revisar permisos de archivos

Los archivos del sistema y los datos importantes deben tener permisos adecuados.

Algunos problemas comunes incluyen:

- archivos críticos con permisos demasiado abiertos
- directorios compartidos sin control
- archivos sensibles accesibles por todos los usuarios

Revisar permisos regularmente ayuda a evitar estos problemas.

---

# Registrar y monitorear actividad

En sistemas importantes es recomendable monitorear actividad de usuarios.

Esto puede incluir:

- revisiones de logs del sistema
- registros de uso de `sudo`
- auditorías de acceso

Esto ayuda a detectar comportamientos anómalos o problemas potenciales.

---

# Seguridad como proceso continuo

La seguridad no es algo que se configure una sola vez.

Es un proceso continuo que implica:

- revisar configuraciones
- actualizar sistemas
- eliminar cuentas innecesarias
- ajustar permisos cuando cambian las necesidades

Incluso sistemas pequeños se benefician de aplicar estas prácticas.

---

# Idea clave de esta lección

Administrar usuarios correctamente es una parte fundamental de la seguridad en Linux.

Aplicar buenas prácticas como limitar privilegios, usar contraseñas seguras y controlar accesos ayuda a mantener el sistema protegido.

---

# Repaso

- Aplicar el principio de mínimo privilegio.
- Evitar usar root para tareas diarias.
- Utilizar contraseñas seguras.
- Eliminar cuentas que ya no se utilizan.
- Limitar el acceso a `sudo`.
- Revisar permisos de archivos regularmente.
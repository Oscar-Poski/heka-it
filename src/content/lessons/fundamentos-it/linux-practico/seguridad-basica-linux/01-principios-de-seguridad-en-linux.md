---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: seguridad-basica-linux
lessonSlug: 01-principios-de-seguridad-en-linux
title: "Principios de seguridad en Linux"

summary: "Comprender los principios fundamentales de seguridad que ayudan a proteger sistemas Linux."

durationMinutes: 8

objectives:

- "Comprender conceptos básicos de seguridad en sistemas Linux"
- "Identificar riesgos comunes en sistemas conectados a red"
- "Aplicar principios fundamentales de protección del sistema"
    
order: 1
    

---

# Principios de seguridad en Linux

Cuando un sistema Linux está conectado a una red o a internet, puede estar expuesto a diferentes riesgos.

Por ejemplo:

- accesos no autorizados
- intentos de intrusión
- malware
- errores de configuración
- pérdida de datos

Por esta razón, la **seguridad del sistema** es una parte fundamental de la administración de Linux.

---

# Seguridad como proceso

Una idea importante es que **la seguridad no es una sola configuración**, sino un proceso continuo.

Proteger un sistema implica:

- configurar correctamente el sistema
- aplicar actualizaciones
- monitorear actividad
- revisar configuraciones regularmente

La seguridad se mantiene a lo largo del tiempo.

---

# Principio de mínimo privilegio

Uno de los principios más importantes en seguridad es el **principio de mínimo privilegio**.

Este principio dice que cada usuario o programa debe tener **solo los permisos necesarios para realizar su trabajo**.

Esto ayuda a reducir riesgos.

Por ejemplo:

- evitar que usuarios tengan privilegios de administrador innecesariamente
- limitar acceso a archivos sensibles

---

# Reducir superficie de ataque

La **superficie de ataque** se refiere a todos los puntos donde un sistema puede ser atacado.

Para reducir esta superficie se recomienda:

- desactivar servicios innecesarios
- cerrar puertos que no se utilizan
- instalar solo el software necesario

Mientras menos componentes expuestos tenga el sistema, menor será el riesgo.

---

# Mantener el sistema actualizado

Las actualizaciones del sistema incluyen correcciones de seguridad.

Estas actualizaciones corrigen vulnerabilidades que podrían ser explotadas por atacantes.

Por ejemplo:

```bash
sudo apt update
sudo apt upgrade
```

Mantener el sistema actualizado es una de las formas más simples de mejorar la seguridad.

---

# Control de acceso

El control de acceso determina **quién puede usar el sistema y qué puede hacer**.

Linux incluye varios mecanismos para esto:

- usuarios
- grupos
- permisos de archivos
- uso de `sudo`

Estos mecanismos ayudan a proteger recursos del sistema.

---

# Registro de actividad

Los sistemas Linux registran eventos importantes en **logs**.

Esto permite:

- detectar intentos de acceso
- investigar incidentes
- analizar actividad del sistema

Revisar logs regularmente ayuda a detectar problemas de seguridad.

---

# Copias de seguridad

Incluso con buenas prácticas de seguridad, siempre existe el riesgo de pérdida de datos.

Por esta razón es importante mantener **copias de seguridad periódicas**.

Las copias de seguridad permiten recuperar información en caso de:

- fallos del sistema
- errores humanos
- ataques informáticos

---

# Seguridad en capas

Una estrategia efectiva es aplicar **múltiples capas de seguridad**.

Por ejemplo:

- control de acceso
- firewall
- actualizaciones de seguridad
- monitoreo de logs

Si una capa falla, otras capas pueden seguir protegiendo el sistema.

---

# Idea clave de esta lección

La seguridad en Linux se basa en aplicar principios como mínimo privilegio, reducción de superficie de ataque y mantenimiento constante del sistema.

---

# Repaso

- Los sistemas conectados a redes están expuestos a riesgos.
- La seguridad es un proceso continuo.
- El principio de mínimo privilegio limita riesgos.
- Mantener el sistema actualizado es esencial.
- Los logs y respaldos ayudan a proteger el sistema.
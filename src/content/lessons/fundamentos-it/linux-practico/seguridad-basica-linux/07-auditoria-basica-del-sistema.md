---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: seguridad-basica-linux
lessonSlug: 07-auditoria-basica-del-sistema
title: "Auditoría básica del sistema"

summary: "Aprender cómo revisar el estado de seguridad de un sistema Linux mediante auditorías básicas."

durationMinutes: 9

objectives:

- "Comprender qué es una auditoría de sistema"
- "Revisar configuraciones y actividad del sistema"
- "Detectar posibles problemas de seguridad"
    
order: 7
    

---

# Auditoría básica del sistema

Una **auditoría del sistema** consiste en revisar diferentes aspectos de un sistema Linux para verificar:

- si está configurado correctamente
- si existen riesgos de seguridad
- si hay actividad sospechosa

Las auditorías ayudan a detectar problemas antes de que se conviertan en incidentes graves.

---

# Qué revisar en una auditoría

Una auditoría básica puede incluir la revisión de:

- usuarios del sistema
- permisos de archivos importantes
- servicios activos
- puertos abiertos
- logs del sistema
- procesos en ejecución

Esto permite obtener una visión general del estado del sistema.

---

# Revisar usuarios del sistema

Un primer paso puede ser revisar las cuentas de usuario.

Por ejemplo:

```bash
cat /etc/passwd
```

Este archivo contiene la lista de usuarios del sistema.

Conviene revisar si existen cuentas inesperadas o innecesarias.

---

# Revisar accesos recientes

Para revisar accesos recientes al sistema se puede utilizar:

```
last
```

Este comando muestra los últimos inicios de sesión registrados.

Esto permite detectar accesos inusuales.

---

# Revisar servicios activos

También es importante revisar qué servicios están ejecutándose.

Por ejemplo:

```bash
systemctl list-units --type=service
```

Esto muestra servicios activos en el sistema.

Servicios inesperados pueden indicar configuraciones incorrectas o riesgos potenciales.

---

# Revisar puertos abiertos

Los puertos abiertos pueden indicar qué servicios están expuestos a la red.

Para ver conexiones y puertos abiertos se puede usar:

```bash
ss -tuln
```

Esto muestra servicios escuchando en la red.

---

# Revisar procesos en ejecución

También es útil revisar procesos activos.

Por ejemplo:

```bash
ps aux
```

Esto permite detectar procesos sospechosos o inesperados.

---

# Revisar logs del sistema

Los logs contienen información sobre eventos del sistema.

Puedes revisarlos usando:

```bash
journalctl
```

O revisar archivos dentro de:

```
/var/log
```

Esto ayuda a detectar errores o actividad sospechosa.

---

# Uso de herramientas de auditoría

Existen herramientas diseñadas específicamente para auditoría de seguridad.

Por ejemplo:

```
Lynis
```

Estas herramientas analizan el sistema y generan reportes de seguridad.

---

# Importancia de la auditoría

Las auditorías ayudan a:

- detectar configuraciones inseguras
- identificar accesos sospechosos
- mejorar la seguridad del sistema

En entornos profesionales, realizar auditorías periódicas es una práctica común.

---

# Idea clave de esta lección

La auditoría del sistema permite revisar configuraciones, actividad y seguridad para detectar problemas o riesgos potenciales.

---

# Repaso

- Una auditoría revisa el estado de seguridad del sistema.
- `cat /etc/passwd` muestra usuarios del sistema.
- `last` muestra accesos recientes.
- `ss -tuln` muestra puertos abiertos.
- Revisar logs ayuda a detectar actividad sospechosa.
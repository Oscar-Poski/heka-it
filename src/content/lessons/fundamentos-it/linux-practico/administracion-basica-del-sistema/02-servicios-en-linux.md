---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: administracion-basica-del-sistema
lessonSlug: 02-servicios-en-linux
title: "Servicios en Linux"

summary: "Comprender qué son los servicios en Linux y cómo permiten que el sistema ejecute procesos en segundo plano."

durationMinutes: 8

objectives:

- "Comprender qué es un servicio en Linux"
- "Identificar ejemplos de servicios del sistema"
- "Entender cómo funcionan los servicios en segundo plano"
    
order: 2
    

---

# Servicios en Linux

En Linux, muchos componentes del sistema funcionan como **servicios**.

Un **servicio** es un programa que se ejecuta en segundo plano y proporciona una función específica al sistema o a otros programas.

Estos servicios suelen iniciarse automáticamente cuando el sistema arranca y continúan ejecutándose sin intervención directa del usuario.

---

# Servicios y procesos en segundo plano

Los servicios normalmente se ejecutan como **procesos en segundo plano**.

Esto significa que:

- no requieren interacción directa con el usuario
- funcionan continuamente
- realizan tareas específicas del sistema

A este tipo de procesos también se les conoce como **daemons**.

---

# Ejemplos de servicios

Muchos componentes importantes del sistema funcionan como servicios.

Por ejemplo:

**Servidor SSH**

Permite conectarse remotamente al sistema.

---

**Servidor web**

Permite que un servidor entregue páginas web.

---

**Servicio de red**

Administra la configuración de red del sistema.

---

**Sistema de registro (logging)**

Recopila información sobre eventos del sistema.

---

# Cómo funcionan los servicios

Cuando el sistema Linux inicia, el sistema de arranque carga diferentes servicios necesarios para el funcionamiento del sistema.

Algunos servicios se ejecutan siempre, mientras que otros se inician solo cuando son necesarios.

Por ejemplo:

- servicios de red
- servicios de autenticación
- servicios de registro de eventos

---

# Por qué son importantes los servicios

Los servicios permiten que el sistema proporcione funcionalidades de forma continua.

Gracias a los servicios, un servidor puede:

- aceptar conexiones de red
- ejecutar aplicaciones
- registrar eventos del sistema
- manejar tareas automáticas

Sin servicios, muchos sistemas Linux no podrían funcionar correctamente.

---

# Servicios en servidores

En servidores Linux, los servicios son especialmente importantes.

Muchos servidores ejecutan servicios como:

- servidores web
- servidores de bases de datos
- servicios de autenticación
- sistemas de monitoreo

La administración de estos servicios es una tarea común para los administradores de sistemas.

---

# Idea clave de esta lección

Los servicios en Linux son programas que se ejecutan en segundo plano para proporcionar funcionalidades al sistema.

---

# Repaso

- Un servicio es un programa que se ejecuta en segundo plano.
- Muchos servicios se inician automáticamente al arrancar el sistema.
- Los servicios también se conocen como **daemons**.
- Proporcionan funciones importantes como red, acceso remoto o registro de eventos.
- Administrar servicios es una tarea clave en sistemas Linux.
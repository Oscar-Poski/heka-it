---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-osi
lessonSlug: 05-intro-osi
title: 9.5 Sesión (Capa 5)

summary: Entender cómo se establecen, mantienen y gestionan las conexiones entre aplicaciones.

durationMinutes: 7

objectives:

- Comprender el rol de la capa de Sesión
- Entender cómo se establecen conexiones entre aplicaciones
- Aprender el concepto de puertos
- Entender el manejo básico de sesiones y seguridad

order: 43

---

## Idea general

### Idea clave

La capa de Sesión se encarga de **abrir, mantener y cerrar conversaciones entre aplicaciones**.

```mermaid
flowchart LR
    A[Cliente] -->|Sesión| B[Servidor]
```

---

## Qué problema resuelve

Aunque los datos ya pueden viajar correctamente:

- ¿Cómo inicia una conversación?
- ¿Cómo se mantiene activa?
- ¿Cómo se cierra correctamente?
- ¿Cómo conectar con la app correcta dentro del sistema?

---

## Establecimiento de sesión

### Idea clave

Antes de enviar datos, se establece una conexión lógica.

```mermaid
flowchart TD
    A[Cliente solicita conexión]
    B[Servidor acepta]
    C[Sesión establecida]

    A --> B --> C
```

---

## Identificación de aplicaciones

### Idea clave

Usa **puertos** para identificar aplicaciones dentro de un mismo equipo.

- IP → identifica el dispositivo
- Puerto → identifica la aplicación

```mermaid
flowchart LR
    A[IP: 192.168.1.10]
    A --> B[Puerto 80 - Web]
    A --> C[Puerto 25 - Mail]
    A --> D[Puerto 22 - SSH]
```

---

## Analogía simple

### Idea clave

Es como llamar por teléfono a una extensión específica.

```mermaid
flowchart LR
    A[Número principal] --> B[Extensión correcta]
```

---

## Mantenimiento de la sesión

### Idea clave

Mantiene activa la comunicación mientras sea necesaria.

```mermaid
flowchart TD
    A[Sesión activa]
    B[Intercambio de datos]
    C[Sesión sigue abierta]

    A --> B --> C --> B
```

---

## Cierre de sesión

### Idea clave

Finaliza la comunicación de forma ordenada.

```mermaid
flowchart TD
    A[Fin de comunicación]
    B[Cerrar sesión]
    C[Recursos liberados]

    A --> B --> C
```

---

## Seguridad en sesión

### Idea clave

Algunas funciones de seguridad se manejan aquí.

- Inicio de sesión
- Validación de conexión
- Parte del manejo de conexiones seguras

```mermaid
flowchart LR
    A[Cliente] -->|Autenticación| B[Servidor]
```

---

## Relación con TCP/IP

### Idea clave

En TCP/IP, esta capa no existe como tal.

- Sus funciones están integradas en:
    - Transporte (TCP)
    - Aplicación

```mermaid
flowchart LR
    A[OSI]
    A --> B[Sesión]

    C[TCP/IP]
    C --> D[Transporte + Aplicación]
```

---

## Insight clave

### Idea clave

La capa de Sesión organiza la conversación, no los datos.

- Decide **con quién hablas**
- Mantiene la conversación activa
- Se asegura de cerrarla correctamente

---

## Resumen

- Establece, mantiene y cierra conexiones entre aplicaciones
- Usa puertos para identificar servicios
- Permite que el cliente encuentre el servidor correcto
- Maneja aspectos básicos de seguridad
- En TCP/IP sus funciones están distribuidas
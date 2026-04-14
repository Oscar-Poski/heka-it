---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: capa-app
lessonSlug: 04-capa-app
title: 7.4 Protocolo IMAP para descarga de correo

summary: Comprender cómo funciona IMAP para acceder y gestionar correos en servidores remotos y cómo difiere de otros protocolos como HTTP.

durationMinutes: 9

objectives:

- Entender cómo funciona el correo electrónico en red
- Comprender el rol de IMAP
- Analizar la interacción cliente-servidor en correo
- Diferenciar IMAP de HTTP
order: 31

---

## El problema del correo

### Idea clave

Tu computadora no siempre está encendida.

```mermaid
flowchart TD
    A[Usuario offline]
    B[Correo enviado]
    B --> C[Servidor almacena]
    C --> A
```

---

## Solución: servidor de correo

### Idea clave

El correo se guarda en un servidor central.

```mermaid
flowchart LR
    U[Usuario remitente] --> S[Servidor de correo]
    S --> R[Usuario receptor]
```

---

## Qué es IMAP

### Idea clave

IMAP permite acceder al correo almacenado en el servidor.

```mermaid
flowchart LR
    C[Cliente de correo] -->|IMAP| S[Servidor de correo]
```

---

## Flujo básico de correo

```mermaid
sequenceDiagram
    participant S as Servidor
    participant C as Cliente

    S->>S: Guarda correos
    C->>S: Solicita correos
    S->>C: Envía mensajes
```

---

## Diferencia con HTTP

### Idea clave

IMAP es más complejo que HTTP.

```mermaid
flowchart TD
    A[HTTP]
    A --> B[Simple]

    C[IMAP]
    C --> D[Más complejo]
```

---

## Comunicación IMAP

### Idea clave

Cliente y servidor intercambian comandos estructurados.

```mermaid
sequenceDiagram
    participant C as Cliente
    participant S as Servidor

    C->>S: SELECT INBOX
    S->>C: Respuesta estructurada
```

---

## Ejemplo real

```
C: A142 SELECT INBOX
S: * 172 EXISTS
S: * 1 RECENT
S: A142 OK
```

---

## Qué significa esto

### Idea clave

El cliente solicita información y el servidor responde con estado.

```mermaid
flowchart TD
    A[Cliente solicita]
    B[Servidor responde]
    A --> B
```

---

## Tipo de datos intercambiados

### Idea clave

IMAP trabaja con información estructurada.

```mermaid
flowchart TD
    A[Mensajes]
    A --> B[Cantidad]
    A --> C[Estado]
    A --> D[Flags]
```

---

## Flags de correo

### Idea clave

Los correos tienen estados.

```mermaid
flowchart TD
    A[Correo]
    A --> B[Seen]
    A --> C[Deleted]
    A --> D[Flagged]
```

---

## Características de IMAP

### Idea clave

Permite trabajar directamente sobre el servidor.

```mermaid
flowchart TD
    A[IMAP]
    A --> B[No descarga todo]
    A --> C[Sincronización]
    A --> D[Gestión remota]
```

---

## Comparación conceptual

```mermaid
flowchart TD
    A[HTTP]
    A --> B[Descarga páginas]

    C[IMAP]
    C --> D[Gestiona correo]
```

---

## Por qué no usar telnet fácilmente

### Idea clave

IMAP es más complejo y estructurado.

```mermaid
flowchart TD
    A[HTTP] --> B[Fácil con telnet]
    C[IMAP] --> D[Difícil manualmente]
```

---

## Insight clave

Los protocolos varían en complejidad según el problema que resuelven.

- HTTP → simple (documentos)
- IMAP → complejo (estado, sincronización)

> Más funcionalidad = más complejidad

---

## Resumen

- El correo se almacena en servidores
- IMAP permite acceder a ese correo
- Funciona con modelo cliente/servidor
- Usa comandos estructurados
- Gestiona estados (leído, eliminado, etc.)
- Es más complejo que HTTP
- Permite sincronización remota
- No está pensado para interacción humana directa
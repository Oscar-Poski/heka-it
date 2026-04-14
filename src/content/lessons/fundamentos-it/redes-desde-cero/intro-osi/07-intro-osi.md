---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-osi
lessonSlug: 07-intro-osi
title: 9.7 Aplicación (Capa 7)

summary: Entender cómo las aplicaciones usan la red para comunicarse mediante protocolos estándar.

durationMinutes: 7

objectives:

- Comprender el rol de la capa de Aplicación
- Entender el modelo cliente/servidor
- Aprender sobre protocolos de aplicación
- Ver ejemplos reales de aplicaciones de red

order: 45

---

## Idea general

### Idea clave

La capa de Aplicación es donde viven las **aplicaciones que usamos** y donde ocurre la interacción directa con la red.

```mermaid
flowchart LR
    A[Usuario] --> B[Aplicación] --> C[Red]
```

---

## Qué problema resuelve

Después de mover datos correctamente:

- ¿Qué hacemos con esos datos?
- ¿Cómo los usamos?
- ¿Cómo interactúan las aplicaciones entre sí?

---

## Modelo cliente / servidor

### Idea clave

Las aplicaciones funcionan en pares.

- Cliente → inicia la conexión
- Servidor → responde

```mermaid
flowchart LR
    A[Cliente] -->|Solicitud| B[Servidor]
    B -->|Respuesta| A
```

---

## Ejemplos de aplicaciones

### Idea clave

Son las herramientas que usamos todos los días.

- Navegadores web
- Apps de correo
- Streaming de video
- Juegos en línea

```mermaid
flowchart TD
    A[Aplicaciones]
    A --> B[Web]
    A --> C[Correo]
    A --> D[Video]
    A --> E[Juegos]
```

---

## Protocolos de aplicación

### Idea clave

Definen **cómo se comunican** cliente y servidor.

- HTTP → páginas web
- HTTPS → web segura
- SMTP → envío de correo
- IMAP → lectura de correo

```mermaid
flowchart LR
    A[Cliente] -->|HTTP| B[Servidor Web]
    A -->|SMTP| C[Servidor Mail]
```

---

## Reglas de comunicación

### Idea clave

Cada protocolo define:

- Qué enviar
- En qué orden
- Cómo responder

```mermaid
flowchart TD
    A[Solicitud] --> B[Procesamiento]
    B --> C[Respuesta]
```

---

## Interoperabilidad

### Idea clave

Permite que diferentes sistemas funcionen juntos.

- Diferentes empresas
- Diferentes sistemas operativos
- Diferentes implementaciones

```mermaid
flowchart LR
    A[Cliente Chrome] -->|HTTP| B[Servidor Apache]
    C[Cliente Safari] -->|HTTP| B
```

---

## Relación con TCP/IP

### Idea clave

Es equivalente a la capa de Aplicación en TCP/IP.

```mermaid
flowchart LR
    A[OSI] --> B[Aplicación]
    C[TCP/IP] --> D[Aplicación]
```

---

## Insight clave

### Idea clave

La capa de Aplicación es donde la red se vuelve útil.

- Es lo que el usuario ve
- Es donde ocurre la experiencia
- Todo lo demás es soporte

---

## Resumen

- Contiene las aplicaciones que usan la red
- Funciona bajo el modelo cliente/servidor
- Usa protocolos estándar para comunicarse
- Permite interoperabilidad entre sistemas
- Equivale a la capa de Aplicación en TCP/IP
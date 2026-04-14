---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: capa-acceso
lessonSlug: 02-capa-acceso
title: 3.2 Cortesía y coordinación (CSMA/CD)

summary: Comprender cómo los dispositivos coordinan el uso de un medio compartido para evitar colisiones en redes como WiFi y Ethernet.

durationMinutes: 7

objectives:

- Entender el problema de compartir un medio de transmisión
- Comprender qué es una colisión
- Conocer el mecanismo CSMA/CD
- Entender cómo los dispositivos evitan y resuelven conflictos
order: 13

---

## El problema del medio compartido

### Idea clave

Cuando varios dispositivos usan el mismo medio, deben coordinarse.

```mermaid
flowchart LR
    A[Dispositivo A] --> NET[Medio compartido]
    B[Dispositivo B] --> NET
    C[Dispositivo C] --> NET
```

### Explicación

- Todos usan la misma frecuencia o cable
- Si transmiten al mismo tiempo → problema
- Se necesita coordinación

---

## Analogía: conversación humana

### Idea clave

Hablar en grupo tiene el mismo problema que transmitir datos.

```mermaid
flowchart TD
    A[Persona A habla]
    B[Persona B habla]
    A --> X[Interferencia]
    B --> X
```

### Explicación

- Si todos hablan al mismo tiempo
- Nadie entiende nada
- Se requiere “cortesía”

---

## Técnica 1: Escucha de portadora

### Idea clave

Antes de transmitir, el dispositivo escucha si el canal está libre.

```mermaid
flowchart TD
    A[Quiero enviar datos]
    A --> B[Escuchar canal]
    B -->|Ocupado| C[Esperar]
    B -->|Libre| D[Transmitir]
```

### Explicación

- Si alguien está transmitiendo → esperar
- Si hay silencio → enviar

---

## Problema: transmisión simultánea

### Idea clave

Dos dispositivos pueden detectar silencio al mismo tiempo.

```mermaid
flowchart LR
    A[Dispositivo A] --> NET
    B[Dispositivo B] --> NET
    NET --> X[Colisión]
```

### Explicación

- Ambos comienzan a transmitir
- Los datos se corrompen
- Ningún mensaje llega correctamente

---

## Detección de colisiones

### Idea clave

El dispositivo escucha mientras transmite para detectar errores.

```mermaid
flowchart TD
    A[Transmitir]
    A --> B[Escuchar señal]
    B -->|Correcta| C[Continuar]
    B -->|Diferente| D[Colisión detectada]
```

### Explicación

- Si lo que recibe ≠ lo que envía
- Entonces ocurrió una colisión
- Se detiene la transmisión

---

## Qué ocurre después de una colisión

### Idea clave

El dispositivo detiene la transmisión y reintenta.

```mermaid
flowchart TD
    A[Colisión]
    A --> B[Detener transmisión]
    B --> C[Esperar tiempo aleatorio]
    C --> D[Reintentar]
```

### Explicación

- Ambos dispositivos se detienen
- Esperan tiempos distintos
- Evitan repetir la colisión

---

## Tiempo de espera aleatorio

### Idea clave

Cada dispositivo espera un tiempo diferente antes de reintentar.

```mermaid
flowchart LR
    A[Dispositivo A espera 2ms]
    B[Dispositivo B espera 7ms]

    A --> NET[Reintento]
    B --> NET
```

### Explicación

- Reduce probabilidad de colisión repetida
- Mejora eficiencia

---

## Proceso completo: CSMA/CD

```mermaid
flowchart TD
    A[Quiero transmitir]
    A --> B[Escuchar canal]

    B -->|Libre| C[Transmitir]
    B -->|Ocupado| D[Esperar]

    C --> E[Escuchar mientras transmite]
    E -->|Sin colisión| F[Continuar]
    E -->|Colisión| G[Detener]

    G --> H[Esperar aleatorio]
    H --> A
```

### Idea clave

Este ciclo se repite continuamente.

---

## Por qué funciona

### Idea clave

Aunque parece caótico, es eficiente en la práctica.

```mermaid
flowchart TD
    A[Intentar transmitir]
    A --> B[Colisión ocasional]
    B --> C[Reintento]
    C --> D[Transmisión exitosa]
```

### Explicación

- Las colisiones son raras
- El sistema se auto-regula
- Escala bien con muchos dispositivos

---

## Uso en diferentes tecnologías

### Idea clave

Este mecanismo se usa en varias redes.

```mermaid
flowchart TD
    A[CSMA/CD]
    A --> B[Ethernet]
    A --> C[WiFi]
    A --> D[Red celular]
    A --> E[SMS]
```

---

## Insight clave (muy importante)


La coordinación en redes compartidas se basa en reglas simples de comportamiento.

- Escuchar antes de hablar
- Detectar errores
- Reintentar inteligentemente

> Igual que en interacciones humanas

---

## Resumen

- El medio de transmisión es compartido
- Se necesita coordinación para evitar interferencias
- Se usa “escucha de portadora” antes de transmitir
- Pueden ocurrir colisiones
- Los dispositivos detectan colisiones
- Se detienen y esperan
- Reintentan con tiempos aleatorios
- CSMA/CD permite uso eficiente del medio
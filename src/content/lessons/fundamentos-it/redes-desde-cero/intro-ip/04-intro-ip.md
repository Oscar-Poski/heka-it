---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-ip
lessonSlug: 04-intro-ip
title: 4.4 Trazando tu ruta (Traceroute y TTL)

summary: Comprender cómo funciona traceroute y cómo el TTL evita bucles infinitos en la red, permitiendo observar rutas aproximadas en Internet.

durationMinutes: 10

objectives:

- Entender qué es traceroute
- Comprender el problema de los bucles en la red
- Entender el concepto de TTL
- Visualizar cómo se reconstruye una ruta
order: 18

---

## ¿Se puede conocer la ruta de un paquete?

### Idea clave

Ningún dispositivo conoce la ruta completa de un paquete.

```mermaid
flowchart LR
    A[Origen] --> R1
    R1 --> R2
    R2 --> R3
    R3 --> D[Destino]
```

### Explicación

- Cada router solo decide el siguiente salto
- No existe un mapa global completo
- La ruta se construye dinámicamente

---

## Herramienta: traceroute

### Idea clave

Traceroute permite estimar la ruta de un paquete.

```mermaid
flowchart TD
    A[Tu computadora]
    A --> T[Traceroute]
    T --> Rutas[Lista de routers]
```

### Explicación

- No muestra la ruta exacta
- Muestra una aproximación
- Puede variar entre ejecuciones

---

## Problema crítico: bucles de red

### Idea clave

Un paquete puede quedar atrapado en un ciclo infinito.

```mermaid
flowchart LR
    R1 --> R2
    R2 --> R3
    R3 --> R1
```

### Explicación

- Los routers pueden estar mal configurados
- El paquete nunca llega a destino
- Se consume toda la red

---

## Consecuencia de un bucle

### Idea clave

Los paquetes saturan la red.

```mermaid
flowchart TD
    A[Paquetes]
    A --> B[Bucle infinito]
    B --> C[Saturación]
    C --> D[Fallo de routers]
```

---

## Solución: TTL (Time To Live)

### Idea clave

Cada paquete tiene un contador de vida.

```mermaid
flowchart LR
    P[Paquete TTL=30] --> R1[TTL=29]
    R1 --> R2[TTL=28]
    R2 --> R3[TTL=27]
```

### Explicación

- Se reduce en cada salto
- Evita loops infinitos

---

## Cuando TTL llega a cero

### Idea clave

El paquete es descartado.

```mermaid
flowchart TD
    A[TTL = 1]
    A --> B[Router]
    B --> C[TTL = 0]
    C --> D[Descartar paquete]
```

### Explicación

- El router elimina el paquete
- Evita congestión infinita

---

## Mensaje de error

### Idea clave

El router notifica al origen.

```mermaid
sequenceDiagram
    participant O as Origen
    participant R as Router

    O->>R: Paquete
    R-->>O: TTL expirado
```

### Explicación

- Mensaje de cortesía
- Incluye IP del router
- Clave para traceroute

---

## Cómo funciona traceroute

### Idea clave

Usa TTL para descubrir routers paso a paso.

```mermaid
flowchart TD
    A[TTL=1] --> R1[Router 1]
    B[TTL=2] --> R2[Router 2]
    C[TTL=3] --> R3[Router 3]
```

---

## Proceso completo

```mermaid
sequenceDiagram
    participant U as Usuario
    participant R1 as Router 1
    participant R2 as Router 2
    participant R3 as Router 3

    U->>R1: TTL=1
    R1-->>U: Respuesta

    U->>R2: TTL=2
    R2-->>U: Respuesta

    U->>R3: TTL=3
    R3-->>U: Respuesta
```

### Explicación

- Incrementa TTL gradualmente
- Cada router responde
- Se construye la ruta

---

## Resultado de traceroute

### Idea clave

Obtienes una lista de saltos.

```mermaid
flowchart TD
    A[Salto 1] --> B[Salto 2]
    B --> C[Salto 3]
    C --> D[Destino]
```

---

## Medición de latencia

### Idea clave

También mide el tiempo entre saltos.

```mermaid
flowchart TD
    A[Router 1 - 1ms]
    B[Router 2 - 7ms]
    C[Router 3 - 30ms]
    D[Destino - 77ms]
```

### Explicación

- Milisegundos (ms)
- Indica distancia y congestión

---

## Saltos largos (ej. submarinos)

### Idea clave

Los enlaces largos aumentan la latencia.

```mermaid
flowchart LR
    A[Continente] --> B[Cable submarino]
    B --> C[Otro continente]
```

### Explicación

- Saltos internacionales → más tiempo
- Aún así, muy rápido globalmente

---

## Routers que no responden

### Idea clave

Algunos routers no envían respuesta.

```mermaid
flowchart TD
    A[Router]
    A --> X[Sin respuesta]
```

### Explicación

- Seguridad
- Configuración
- traceroute continúa

---

## Insight clave 


Traceroute no muestra la ruta exacta, sino una aproximación basada en el comportamiento de la red.

- La ruta puede cambiar
- Cada paquete puede tomar caminos distintos
- Aún así, es una herramienta poderosa

> Es una “radiografía” del Internet en ese momento

---

## Resumen

- No existe conocimiento global de rutas
- Los routers solo conocen el siguiente salto
- Pueden existir bucles peligrosos
- TTL evita loops infinitos
- Los routers descartan paquetes con TTL=0
- traceroute usa TTL para mapear rutas
- Permite ver saltos y latencia
- La ruta puede variar dinámicamente
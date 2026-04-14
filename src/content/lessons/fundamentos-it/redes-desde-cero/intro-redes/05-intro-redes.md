---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-redes
lessonSlug: 05-intro-redes
title: 1.5 Direccionamiento y paquetes

summary: Entender cómo las direcciones permiten enrutar paquetes y reconstruir mensajes en redes.

durationMinutes: 5

objectives:

- Comprender por qué las computadoras necesitan direcciones
- Entender cómo los routers usan esas direcciones
- Conocer cómo se reconstruyen los mensajes a partir de paquetes
order: 5

---

## La necesidad de direcciones

### Idea clave

Para enviar un mensaje, es necesario saber quién lo envía y quién lo recibe.

### Explicación

- Cada computadora tiene un identificador único
- Este identificador funciona como una “dirección”
- Permite distinguir entre millones de dispositivos

```mermaid
flowchart LR
    A[Origen<br/>Dirección A] --> B[Destino<br/>Dirección B]
```

---

## Direcciones en los mensajes

### Idea clave

Cada mensaje incluye información de origen y destino.

```mermaid
flowchart TD
    M[Mensaje]
    M --> O[Dirección origen]
    M --> D[Dirección destino]
    M --> C[Contenido]
```

### Explicación

- Antes de enviarse, el mensaje se “etiqueta”
- Esto permite que la red sepa hacia dónde enviarlo

---

## Elección de rutas

### Idea clave

Los nodos intermedios pueden elegir diferentes caminos según el destino.

```mermaid
flowchart LR
    A[Origen] --> R1[Router]
    R1 -->|Ruta 1| R2[Router]
    R1 -->|Ruta 2| R3[Router]
    R2 --> D[Destino]
    R3 --> D
```

### Explicación

- Puede haber múltiples rutas disponibles
- Los routers eligen la mejor opción
- La decisión depende del estado de la red

---

## Direcciones en paquetes

### Idea clave

Cuando un mensaje se divide, cada paquete necesita su propia dirección.

```mermaid
flowchart LR
    M[Mensaje] --> P1[Paquete 1<br/>Origen/Destino]
    M --> P2[Paquete 2<br/>Origen/Destino]
    M --> P3[Paquete 3<br/>Origen/Destino]
```

### Explicación

- Cada paquete viaja de forma independiente
- Cada uno debe saber a dónde ir
- No dependen de otros paquetes para moverse

---

## Viaje independiente de paquetes

### Idea clave

Los paquetes pueden tomar rutas diferentes.

```mermaid
flowchart LR
    A[Origen] --> R1[Router]

    R1 --> R2[Router]
    R1 --> R3[Router]

    R2 --> D[Destino]
    R3 --> D
```

### Explicación

- No todos los paquetes siguen el mismo camino
- La red optimiza cada envío
- Aumenta la eficiencia y resiliencia

---

## Problema: orden de llegada

### Idea clave

Los paquetes pueden llegar en desorden.

```mermaid
flowchart LR
    P1[Paquete 1] --> D[Destino]
    P3[Paquete 3] --> D
    P2[Paquete 2] --> D
```

### Explicación

- Diferentes rutas → diferentes tiempos
- No llegan necesariamente en orden

---

## Solución: offset (posición)

### Idea clave

Cada paquete incluye su posición dentro del mensaje original.

```mermaid
flowchart LR
    P1[Paquete 1<br/>Offset 1]
    P2[Paquete 2<br/>Offset 2]
    P3[Paquete 3<br/>Offset 3]
```

### Explicación

- El “offset” indica el orden correcto
- Permite reconstruir el mensaje original

---

## Reconstrucción del mensaje

```mermaid
flowchart LR
    P2[Paquete 2] --> D[Destino]
    P1[Paquete 1] --> D
    P3[Paquete 3] --> D

    D --> R[Reordenar por offset]
    R --> M[Mensaje reconstruido]
```

### Idea clave

El destino reorganiza los paquetes antes de usarlos.

---

## Estructura de un paquete

### Idea clave

Un paquete contiene más que solo datos.

```mermaid
flowchart TD
    P[Paquete]
    P --> O[Dirección origen]
    P --> D[Dirección destino]
    P --> X[Offset]
    P --> C[Datos]
```

### Explicación

Cada paquete incluye:

- Quién lo envía
- A quién va dirigido
- Su posición
- Parte del contenido

---

## Insight clave (muy importante)

### Idea clave

El direccionamiento permite que la red funcione sin rutas fijas.

- Los paquetes pueden viajar por diferentes caminos
- Los routers toman decisiones dinámicas
- El destino reconstruye el mensaje final

> Esta flexibilidad es fundamental para Internet

---

## Resumen

- Cada computadora tiene una dirección única
- Los mensajes incluyen origen y destino
- Los paquetes también llevan direcciones
- Los routers usan estas direcciones para enrutar
- Los paquetes pueden tomar diferentes rutas
- Pueden llegar en desorden
- El offset permite reconstruir el mensaje correctamente
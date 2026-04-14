---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: capa-app
lessonSlug: 05-capa-app
title: 7.5 Control de flujo

summary: Comprender cómo la capa de Transporte regula la velocidad de envío de datos entre aplicaciones para evitar saturar la red.

durationMinutes: 10

objectives:

- Entender qué es el control de flujo
- Comprender la interacción entre aplicación y transporte
- Visualizar el envío de datos en tiempo real
- Entender cómo se adapta la velocidad según la red
order: 32

---

## Idea general

### Idea clave

El control de flujo regula la velocidad de envío de datos.

```mermaid
flowchart LR
    A[Servidor] --> B[Transporte]
    B --> C[Red]
    C --> D[Transporte]
    D --> E[Cliente]
```

---

## Problema

### Idea clave

El servidor puede enviar datos más rápido que la red.

```mermaid
flowchart TD
    A[Servidor rápido] --> B[Red limitada]
    B --> C[Congestión]
```

---

## Solución: tamaño de ventana

### Idea clave

El envío se limita a cierta cantidad de datos.

```mermaid
flowchart TD
    A[Ventana]
    A --> B[Paquete]
    A --> C[Paquete]
    A --> D[Paquete]
```

---

## Estado del sistema

### Idea clave

Hay paquetes en distintos estados simultáneamente.

```mermaid
flowchart TD
    S[Enviados S]
    R[Recibidos R]
    A[Aplicación A]

    S --> R --> A
```

---

## Ejemplo con aplicación real

### Idea clave

Un navegador descargando una imagen.

```mermaid
flowchart LR
    WS[Servidor Web] --> T1[Transporte]
    T1 --> NET[Internet]
    NET --> T2[Transporte]
    T2 --> WB[Navegador]
```

---

## Flujo de datos

```mermaid
sequenceDiagram
    participant WS as Servidor Web
    participant TS as Transporte (origen)
    participant TR as Transporte (destino)
    participant WB as Navegador

    WS->>TS: Datos (archivo)
    TS->>TR: Paquetes
    TR->>WB: Datos reconstruidos
    TR->>TS: ACK
```

---

## Ventana llena

### Idea clave

El transporte detiene al servidor cuando se llena la ventana.

```mermaid
flowchart TD
    A[Paquetes enviados]
    A --> B[Límite alcanzado]
    B --> C[Servidor pausado]
```

---

## Recepción parcial

### Idea clave

El receptor va reconstruyendo poco a poco.

```mermaid
flowchart TD
    A[Paquetes recibidos]
    A --> B[Reensamblado]
    B --> C[Aplicación]
```

---

## Confirmaciones (ACK)

### Idea clave

El receptor confirma qué datos recibió.

```mermaid
sequenceDiagram
    participant R as Receptor
    participant E as Emisor

    R->>E: ACK (hasta byte X)
```

---

## Reanudación del envío

### Idea clave

Cuando llegan ACKs, el emisor continúa.

```mermaid
flowchart TD
    A[ACK recibido]
    A --> B[Ventana se libera]
    B --> C[Servidor continúa]
```

---

## Qué ocurre con los paquetes

### Idea clave

Solo se almacenan temporalmente.

```mermaid
flowchart TD
    A[Paquetes en tránsito]
    A --> B[Confirmados]
    B --> C[Eliminados]
```

---

## Visualización completa

```mermaid
flowchart LR
    F[Archivo]
    F --> WS[Servidor Web]
    WS --> TS[Transporte origen]

    TS --> S1[S]
    TS --> S2[S]
    TS --> S3[S]

    S1 --> R1[R]
    S2 --> R2[R]
    S3 --> R3[R]

    R1 --> A1[A]
    R2 --> A1
    R3 --> A1

    A1 --> WB[Navegador]
```

---

## Comportamiento dinámico

### Idea clave

El sistema se adapta a la velocidad de la red.

```mermaid
flowchart TD
    A[Red rápida] --> B[Más datos]
    C[Red lenta] --> D[Menos datos]
```

---

## Qué ve el usuario

### Idea clave

La experiencia depende de la velocidad.

```mermaid
flowchart TD
    A[Conexión lenta] --> B[Imagen se dibuja]
    C[Conexión rápida] --> D[Imagen instantánea]
```

---

## Rol de las capas

### Idea clave

Las aplicaciones no controlan el flujo.

```mermaid
flowchart TD
    A[Aplicación]
    B[Transporte]

    A --> B
    B --> A
```

### Explicación

- La app solo envía/recibe
- Transporte regula velocidad

---

## Insight clave 

El control de flujo protege la red.

- Evita saturación
- Maximiza eficiencia
- Ajusta automáticamente

> Sin esto, Internet colapsaría bajo carga

---

## Resumen

- El control de flujo regula la velocidad de envío
- Se basa en el tamaño de ventana
- El emisor se detiene cuando la ventana se llena
- El receptor envía confirmaciones (ACK)
- El emisor reanuda al recibir ACK
- Solo se almacenan paquetes no confirmados
- La velocidad se adapta a la red
- Las aplicaciones no controlan este proceso
- La capa de Transporte gestiona todo
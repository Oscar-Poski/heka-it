---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: capa-transporte
lessonSlug: 03-capa-transporte
title: 6.3 Ventana, paquetes en tránsito y recepción desordenada

summary: Comprender cómo interactúan los paquetes en tránsito, la ventana de envío y la recepción desordenada en la capa de Transporte.

durationMinutes: 7

objectives:

- Entender qué son los paquetes en tránsito
- Comprender cómo funciona la ventana en tiempo real
- Analizar la recepción desordenada
- Visualizar el flujo completo entre emisor y receptor
order: 26

---

## Paquetes en tránsito

### Idea clave

Puede haber múltiples paquetes viajando al mismo tiempo.

```mermaid
flowchart LR
    E[Emisor] --> P1[Paquete]
    E --> P2[Paquete]
    E --> P3[Paquete]
    P1 --> R[Receptor]
    P2 --> R
    P3 --> R
```

---

## Ventana llena

### Idea clave

El emisor deja de enviar cuando alcanza el límite de la ventana.

```mermaid
flowchart TD
    A[Ventana]
    A --> B[S]
    A --> C[S]
    A --> D[S]
    E[Espera confirmación]
```

### Explicación

- “S” = paquetes enviados pero no confirmados
- No se envían más hasta recibir ACK

---

## Flujo continuo

### Idea clave

Siempre hay paquetes “en el aire”.

```mermaid
flowchart LR
    A[Paquetes enviados] --> B[En tránsito]
    B --> C[Recepción]
```

---

## Estado en el receptor

### Idea clave

El receptor puede tener paquetes en diferentes estados.

```mermaid
flowchart TD
    A[Paquetes recibidos]
    A --> B[Entregados - a]
    A --> C[Recibidos - R]
    A --> D[Faltantes]
```

---

## Paquetes entregados

### Idea clave

Los paquetes correctos ya pasan a la aplicación.

```mermaid
flowchart LR
    A[Paquetes confirmados] --> B[Aplicación]
```

---

## Paquetes recibidos pero no ordenados

### Idea clave

El receptor puede recibir paquetes fuera de orden.

```mermaid
flowchart TD
    A[Paquete 1]
    B[Paquete 3]
    C[Paquete 2]

    A --> D[Buffer]
    B --> D
    C --> D
```

---

## Ejemplo completo

```mermaid
flowchart LR
    E[Emisor]

    E --> S1[S]
    E --> S2[S]
    E --> S3[S]

    S1 --> R1[R]
    S2 --> R2[R]
    S3 --> R3[R]

    R1 --> A1[a]
    R2 --> A1
    R3 --> A1
```

### Leyenda

- **S** → Enviado
- **R** → Recibido
- **a** → Entregado a la aplicación

---

## Problema: paquete desordenado

### Idea clave

Un paquete puede llegar antes que otro anterior.

```mermaid
flowchart TD
    A[Paquete 1] --> D
    B[Paquete 3] --> D
    C[Paquete 2] --> D
```

---

## Solución: buffer temporal

### Idea clave

El receptor espera y almacena paquetes hasta completar el mensaje.

```mermaid
flowchart TD
    A[Buffer]
    A --> B[Datos correctos]
    A --> C[Hueco]
    A --> D[Datos adelantados]
```

---

## Reconstrucción final

### Idea clave

El mensaje se arma como un rompecabezas.

```mermaid
flowchart LR
    P1 --> M[Mensaje completo]
    P2 --> M
    P3 --> M
```

---

## Insight clave 

La red puede entregar datos desordenados…

pero TCP garantiza orden final.

- No importa el orden de llegada
- Lo importante es el orden final
- El receptor se encarga

> Esto permite máxima eficiencia en la red

---

## Resumen

- Puede haber múltiples paquetes en tránsito
- El emisor se detiene cuando llena la ventana
- El receptor recibe paquetes en distintos estados
- Algunos paquetes ya están confirmados
- Otros están en buffer
- Algunos pueden llegar desordenados
- El sistema espera paquetes faltantes
- Finalmente, el mensaje se reconstruye correctamente
---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: capa-transporte
lessonSlug: 02-capa-transporte
title: 6.2 Reensamblado y reenvío de paquetes

summary: Comprender cómo la capa de Transporte reordena paquetes, maneja pérdidas y controla la velocidad de envío mediante el tamaño de ventana.

durationMinutes: 10

objectives:

- Entender cómo se reensamblan los paquetes
- Comprender el concepto de buffer y huecos
- Entender el tamaño de ventana
- Analizar cómo se manejan pérdidas de paquetes
order: 25

---

## Reensamblado de paquetes

### Idea clave

Los paquetes pueden llegar desordenados, pero se reorganizan usando su posición.

```mermaid
flowchart TD
    A[Paquete 3]
    B[Paquete 1]
    C[Paquete 2]

    B --> D[Mensaje reconstruido]
    C --> D
    A --> D
```

---

## Uso del offset

### Idea clave

Cada paquete sabe dónde va dentro del mensaje.

```mermaid
flowchart TD
    A[Paquete]
    A --> B[Offset = posición]
    B --> C[Ubicación en mensaje]
```

---

## Buffer de recepción

### Idea clave

Los paquetes adelantados se almacenan temporalmente.

```mermaid
flowchart TD
    A[Paquete 3 llega primero]
    A --> B[Se guarda en buffer]
    B --> C[Esperando paquete 2]
```

---

## Manejo de huecos

### Idea clave

El sistema detecta partes faltantes del mensaje.

```mermaid
flowchart TD
    A[Mensaje parcial]
    A --> B[Datos 1]
    A --> C[Hueco]
    A --> D[Datos 3]
```

---

## Llegada tardía

### Idea clave

Cuando llega el paquete faltante, se completa el mensaje.

```mermaid
flowchart TD
    A[Hueco detectado]
    B[Paquete faltante llega]
    B --> A
    A --> C[Mensaje completo]
```

---

## Control de flujo: tamaño de ventana

### Idea clave

El emisor no envía todo de golpe.

```mermaid
flowchart LR
    A[Emisor] --> B[Envía N paquetes]
    B --> C[Espera confirmación]
```

---

## Qué es el tamaño de ventana

### Idea clave

Cantidad de datos enviados antes de esperar confirmación.

```mermaid
flowchart TD
    A[Ventana]
    A --> B[Paquete 1]
    A --> C[Paquete 2]
    A --> D[Paquete 3]
```

---

## Ajuste dinámico

### Idea clave

La ventana se adapta según la red.

```mermaid
flowchart TD
    A[Confirmaciones rápidas] --> B[Aumentar ventana]
    C[Confirmaciones lentas] --> D[Reducir ventana]
```

---

## Red rápida vs lenta

```mermaid
flowchart LR
    A[Red rápida] --> B[Mayor ventana]
    C[Red lenta] --> D[Menor ventana]
```

---

## Problema: paquete perdido

### Idea clave

Un paquete puede no llegar nunca.

```mermaid
flowchart TD
    A[Paquete enviado]
    A --> X[Se pierde]
```

---

## Bloqueo temporal

### Idea clave

El sistema se detiene esperando confirmación.

```mermaid
flowchart TD
    A[Emisor espera ACK]
    B[Receptor espera paquete]
```

---

## Solución: timeout

### Idea clave

El receptor detecta que pasó demasiado tiempo.

```mermaid
flowchart TD
    A[Tiempo sin recibir datos]
    A --> B[Timeout]
```

---

## Solicitud de reenvío

### Idea clave

El receptor pide reiniciar desde un punto.

```mermaid
sequenceDiagram
    participant R as Receptor
    participant E as Emisor

    R->>E: Reenvía desde posición X
```

---

## Retransmisión

### Idea clave

El emisor “retrocede” y reenvía datos.

```mermaid
flowchart TD
    A[Emisor]
    A --> B[Retrocede]
    B --> C[Reenvía datos]
```

---

## Flujo completo simplificado

```mermaid
sequenceDiagram
    participant E as Emisor
    participant R as Receptor

    E->>R: Paquetes
    R->>E: Confirmación (ACK)
    E->>R: Más paquetes
    R->>E: Falta paquete
    E->>R: Reenvío
```

---

## Control continuo

### Idea clave

El sistema ajusta constantemente su comportamiento.

```mermaid
flowchart TD
    A[Medir red]
    A --> B[Ajustar ventana]
    B --> C[Optimizar envío]
```

---

## Insight clave 

TCP logra fiabilidad combinando tres ideas simples:

- Reordenamiento con offsets
- Confirmaciones (ACKs)
- Retransmisión

> Esto convierte una red imperfecta en un sistema confiable

---

## Resumen

- Los paquetes pueden llegar desordenados
- Se reensamblan usando offsets
- Se usan buffers para paquetes adelantados
- Se detectan huecos en el mensaje
- El tamaño de ventana controla el flujo
- Se ajusta dinámicamente según la red
- Los paquetes perdidos detienen el envío
- El sistema usa timeouts para detectar fallos
- Se solicita retransmisión cuando falta información
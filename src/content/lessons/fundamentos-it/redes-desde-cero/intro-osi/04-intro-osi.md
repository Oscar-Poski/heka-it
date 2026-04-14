---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-osi
lessonSlug: 04-intro-osi
title: 9.4 Transporte (Capa 4)

summary: Entender cómo se garantiza la entrega confiable de datos y cómo se controla el flujo entre emisor y receptor.

durationMinutes: 8

objectives:

- Comprender el rol de la capa de Transporte
- Entender cómo se manejan pérdidas de paquetes
- Aprender qué es el control de flujo
- Entender el concepto de tamaño de ventana

order: 42

---

## Idea general

### Idea clave

La capa de Transporte asegura que los datos lleguen **completos, en orden y sin saturar la red**.

```mermaid
flowchart LR
    A[Origen] -->|Datos confiables| B[Destino]
```

---

## Qué problema resuelve

La capa de Red puede:

- Perder paquetes
- Enviar paquetes desordenados
- Retrasar datos

> La capa de Transporte corrige todo esto.

---

## Entrega confiable

### Idea clave

Se asegura de que todos los datos lleguen correctamente.

```mermaid
flowchart TD
    A[Enviar paquetes]
    B[Recibir paquetes]
    C[Confirmación ACK]

    A --> B --> C
```

---

## Manejo de pérdida de paquetes

### Idea clave

Si un paquete no llega, se vuelve a enviar.

```mermaid
flowchart TD
    A[Paquete enviado]
    B{¿Confirmación recibida?}
    B -->|Sí| C[Continuar]
    B -->|No| D[Reenviar]
```

---

## Reensamblado

### Idea clave

Ordena los paquetes correctamente.

```mermaid
flowchart LR
    A[Paquete 3]
    B[Paquete 1]
    C[Paquete 2]

    B --> C --> A
```

---

## Control de flujo

### Idea clave

Evita saturar la red o el receptor.

```mermaid
flowchart TD
    A[Emisor rápido]
    B[Control de flujo]
    C[Receptor limitado]

    A --> B --> C
```

---

## Tamaño de ventana

### Idea clave

Cantidad de datos enviados antes de esperar confirmación.

```mermaid
flowchart LR
    A[Enviar varios paquetes]
    B[Esperar ACK]
    C[Continuar envío]

    A --> B --> C
```

---

## Ajuste dinámico

### Idea clave

La ventana cambia según la red.

- Red rápida → ventana grande
- Red lenta → ventana pequeña

```mermaid
flowchart TD
    A[Red rápida] --> B[Aumentar ventana]
    C[Red lenta] --> D[Reducir ventana]
```

---

## Qué NO hace

### Idea clave

No decide rutas ni direcciones.

> Eso es trabajo de la capa de Red.

---

## Relación con TCP/IP

### Idea clave

Equivalente a TCP, pero en OSI algunas funciones se separan.

```mermaid
flowchart LR
    A[OSI]
    A --> B[Transporte]
    A --> C[Sesión]

    D[TCP/IP]
    D --> E[Transporte TCP]
```

---

## Insight clave

### Idea clave

La capa de Transporte convierte una red imperfecta en una comunicación confiable.

- Detecta errores
- Reenvía datos
- Controla velocidad

---

## Resumen

- Gestiona pérdida de paquetes y reenvío
- Reensambla datos en orden
- Implementa control de flujo
- Usa tamaño de ventana dinámico
- Equivale a TCP en el modelo TCP/IP
- Parte de sus funciones se dividen con la capa de Sesión en OSI
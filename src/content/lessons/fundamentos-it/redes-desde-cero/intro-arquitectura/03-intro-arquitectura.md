---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-arquitectura
lessonSlug: 03-intro-arquitectura
title: 2.3 La Capa de Transporte (TCP)

summary: Comprender cómo TCP garantiza la entrega confiable de datos sobre una red no confiable.

durationMinutes: 8

objectives:

- Entender los problemas de la capa de Internet (pérdida, desorden, retrasos)
- Comprender cómo TCP asegura entrega completa y ordenada
- Conocer el concepto de acuse de recibo (ACK)
- Entender el control de flujo mediante tamaño de ventana
order: 9

---

## Problemas de la capa de Internet

### Idea clave

La capa de Internet no garantiza que los paquetes lleguen correctamente.

```mermaid
flowchart LR
    A[Origen] --> R1 --> R2 --> D[Destino]
    R1 -. pérdida .-> X
```

### Problemas posibles

- Paquetes perdidos
- Paquetes retrasados
- Paquetes desordenados

---

## Reconstrucción del mensaje

### Idea clave

El destino puede reconstruir el mensaje usando el offset.

```mermaid
flowchart LR
    P2[Offset 2] --> D[Destino]
    P1[Offset 1] --> D
    P3[Offset 3] --> D

    D --> R[Reordenar]
    R --> M[Mensaje completo]
```

### Explicación

- Cada paquete indica su posición
- El destino reordena los datos
- Se reconstruye el mensaje original

---

## Acuse de recibo (ACK)

### Idea clave

El destino confirma qué datos ha recibido correctamente.

```mermaid
sequenceDiagram
    participant O as Origen
    participant D as Destino

    O->>D: Paquetes
    D->>O: ACK (confirmación)
```

### Explicación

- El destino envía confirmaciones periódicas
- Indica cuánto del mensaje ha recibido
- Permite al origen saber qué datos ya llegaron

---

## Detección de pérdida

### Idea clave

Si faltan datos, el destino solicita retransmisión.

```mermaid
sequenceDiagram
    participant O as Origen
    participant D as Destino

    O->>D: Paquetes 1,2,4
    D->>O: Falta paquete 3
    O->>D: Reenvío paquete 3
```

### Explicación

- El destino detecta huecos en la secuencia
- Espera un tiempo
- Solicita los paquetes faltantes

---

## Almacenamiento en el origen

### Idea clave

El origen guarda los datos hasta recibir confirmación.

```mermaid
flowchart TD
    A[Origen]
    A --> B[Guardar copia]
    B --> C[Enviar paquetes]
    C --> D[Esperar ACK]
    D --> E[Eliminar datos confirmados]
```

### Explicación

- No se eliminan datos inmediatamente
- Se espera confirmación del destino
- Evita pérdida definitiva

---

## Tamaño de ventana

### Idea clave

Define cuántos datos se envían antes de esperar confirmación.

```mermaid
flowchart LR
    A[Origen] -->|Envía varios paquetes| B[Destino]
    B -->|ACK| A
```

---

## Ventana pequeña vs grande

### Idea clave

El tamaño de ventana afecta la velocidad y estabilidad.

```mermaid
flowchart TD
    A[Ventana pequeña]
    A --> B[Lento pero seguro]

    C[Ventana grande]
    C --> D[Rápido pero riesgo de congestión]
```

### Explicación

- Pequeña → espera frecuente → menor velocidad
- Grande → más datos → posible saturación

---

## Ajuste dinámico de la ventana

### Idea clave

TCP ajusta el tamaño de ventana según la red.

```mermaid
flowchart TD
    A[Inicio: ventana pequeña]
    A --> B[ACK rápido]
    B --> C[Aumentar ventana]
    C --> D[Más velocidad]

    C --> E[ACK lento]
    E --> F[Mantener o reducir ventana]
```

### Explicación

- Si la red responde rápido → aumenta velocidad
- Si la red está lenta → reduce ritmo
- Se adapta automáticamente

---

## Control de congestión

### Idea clave

TCP evita sobrecargar la red.

```mermaid
flowchart TD
    A[Demasiados datos]
    A --> B[Congestión]
    B --> C[Reducción de velocidad]
```

### Explicación

- Evita saturar routers
- Protege la red compartida
- Mantiene estabilidad global

---

## Comportamiento adaptativo

### Idea clave

TCP se adapta a las condiciones de la red.

```mermaid
flowchart LR
    A[Red rápida] --> B[Alta velocidad]
    C[Red lenta] --> D[Baja velocidad]
```

### Explicación

- Redes rápidas → transmisión rápida
- Redes saturadas → transmisión lenta

---

## Analogía: conversación educada

### Idea clave

TCP funciona como reglas de cortesía.

- Esperar turno
- Confirmar recepción
- No interrumpir demasiado

> Igual que en comunicación humana eficiente

---

## Insight clave (muy importante)


TCP convierte una red no confiable en una comunicación confiable.

- Detecta pérdidas
- Reenvía datos
- Ordena paquetes
- Ajusta velocidad

> Sin TCP, Internet sería caótico

---

## Resumen

- La capa de Internet no garantiza entrega correcta
- TCP reconstruye mensajes completos
- Usa acuses de recibo (ACK)
- Detecta y corrige pérdidas
- El origen guarda datos hasta confirmación
- El tamaño de ventana controla el flujo
- TCP se adapta a la velocidad de la red
- Evita congestión y mantiene estabilidad
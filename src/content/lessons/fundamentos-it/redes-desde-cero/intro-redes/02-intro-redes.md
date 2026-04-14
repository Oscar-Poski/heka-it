---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-redes
lessonSlug: 02-intro-redes
title: 1.2 Las computadoras se comunican de forma diferente
summary: Comprender los inicios de comunicación entre computadoras.
durationMinutes: 5
objectives:
  - Entender que la comunicación entre computadoras es un problema diferente a la comunicación entre humanos
  - Conocer un poco de la evolución de la comunicación entre computadoras
order: 2

---
## Diferencia entre humanos y computadoras

### Idea clave

Las computadoras no se comunican como los humanos.

### Humanos

- Hacen una llamada
- Hablan durante un tiempo
- Terminan la comunicación

```mermaid
sequenceDiagram
    participant A as Persona A
    participant B as Persona B

    A->>B: Llamada
    A->>B: Conversación continua
    A->>B: Fin de llamada
```

---

### Computadoras

- Envían datos constantemente
- No siguen un patrón fijo
- La comunicación puede ser:
    - Muy breve
    - Intermedia
    - Muy larga

```mermaid
flowchart LR
    A[Computadora A] -->|Ping corto| B[Computadora B]
    A -->|Foto| B
    A -->|Película| B
```

---

## Tipos de comunicación entre computadoras

### Idea clave

No todos los mensajes son iguales.

### Tipos

- **Mensajes cortos**
    - Ej: verificar si un servidor está activo
- **Mensajes medianos**
    - Ej: enviar una imagen o correo
- **Mensajes largos**
    - Ej: descargar una película o software

```mermaid
flowchart TD
    A[Datos enviados]
    A --> B[Pequeños<br/>Ping, señales]
    A --> C[Medianos<br/>Fotos, correos]
    A --> D[Grandes<br/>Videos, programas]
```

---

## Primer modelo: conexión directa entre computadoras

### Idea clave

Las primeras computadoras se conectaban directamente entre sí.

```mermaid
flowchart LR
    A[Computadora A] --- B[Computadora B]
```

### Características

- Conexión física (cables)
- Comunicación directa
- Sin intermediarios

---

## Envío de datos en cola

### Idea clave

Los datos se enviaban uno detrás de otro.

```mermaid
flowchart LR
    Q[Cola de mensajes]
    M1[Mensaje 1] --> M2[Mensaje 2] --> M3[Mensaje 3] --> M4[Mensaje 4]

    Q --> M1
```

### Explicación

- Cada mensaje espera su turno
- No hay paralelismo
- El canal se usa de forma secuencial

---

## Flujo de transmisión

```mermaid
sequenceDiagram
    participant A as Computadora A
    participant B as Computadora B

    A->>B: Mensaje 1
    A->>B: Mensaje 2
    A->>B: Mensaje 3
```

### Idea clave

Los mensajes no se mezclan: se envían en orden.

---

## Conexión en el mismo edificio

### Idea clave

Cuando las computadoras estaban cerca, era fácil conectarlas.

```mermaid
flowchart TD
    A[Computadora A] --> C[Cable directo]
    B[Computadora B] --> C
```

### Características

- Bajo costo
- Control total del propietario
- Instalación sencilla

---

## Conexión dentro de una ciudad

### Problema

No siempre puedes tender tu propio cable.

### Solución

Usar infraestructura de compañías telefónicas.

```mermaid
flowchart LR
    A[Empresa A] --> T[Compañía telefónica]
    T --> B[Empresa B]
```

### Idea clave

Se empieza a depender de terceros.

---

## Líneas arrendadas (leased lines)

### Idea clave

Conexiones dedicadas entre computadoras.

```mermaid
flowchart LR
    A[Computadora A] === L[Línea dedicada 24/7] === B[Computadora B]
```

### Características

- Siempre activas
- No requieren “marcar”
- Comunicación inmediata

---

## Ventajas y desventajas

### Ventajas

- Conexión estable
- Baja latencia
- Siempre disponible

### Desventajas

- Muy costosas
- Se usan incluso cuando no hay tráfico

```mermaid
flowchart TD
    A[Línea dedicada]
    A --> B[Siempre activa]
    A --> C[Recurso ocupado todo el tiempo]
    C --> D[Alto costo]
```

---

## Conexiones de larga distancia

### Idea clave

Las líneas arrendadas también se extendían entre ciudades.

```mermaid
flowchart LR
    A[Ciudad A] --> C1[Central]
    C1 --> C2[Central intermedia]
    C2 --> B[Ciudad B]
```

### Problema

- Pocos cables disponibles
- Costos muy altos
- Escalabilidad limitada

---

## El costo de la distancia

```mermaid
flowchart LR
    A[Distancia corta] --> B[Costo bajo]
    C[Distancia larga] --> D[Costo alto]
```

### Explicación

- Más distancia = más infraestructura
- Más infraestructura = mayor costo

---

## Problema de compatibilidad

### Idea clave

No todas las computadoras hablaban el mismo “idioma”.

```mermaid
flowchart LR
    A[Computadora Marca A] -. diferente protocolo .-> B[Computadora Marca B]
```

### Explicación

- Cada fabricante tenía su propio sistema
- No había estándares universales
- La comunicación solo funcionaba entre sistemas compatibles

---

## Resumen

- Las computadoras envían datos de forma continua y variable
- Los mensajes pueden ser de distintos tamaños
- El envío se hacía en cola, de forma secuencial
- Las conexiones directas funcionaban, pero no escalaban
- Las líneas dedicadas resolvían algunos problemas, pero eran costosas
- La falta de estándares limitaba la comunicación entre diferentes sistemas
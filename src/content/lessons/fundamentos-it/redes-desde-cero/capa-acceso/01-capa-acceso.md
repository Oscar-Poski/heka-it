---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: capa-acceso
lessonSlug: 01-capa-acceso
title: 3.1 Compartiendo el aire (WiFi y capa de acceso)

summary: Comprender cómo funciona el WiFi como capa de acceso, incluyendo el uso de direcciones MAC y el envío de datos en un medio compartido.

durationMinutes: 9

objectives:

- Entender cómo funciona el WiFi como medio de transmisión
- Comprender qué es una dirección MAC
- Entender cómo los dispositivos descubren la puerta de acceso
- Visualizar cómo se comparten las señales en el aire
order: 12

---

## La capa de acceso y el medio físico

### Idea clave

La capa de acceso transmite datos a través de medios físicos como cable, radio o luz.

```mermaid
flowchart TD
    A[Datos]
    A --> B[Cable]
    A --> C[WiFi radio]
    A --> D[Fibra óptica]
```

### Explicación

- Cable → señales eléctricas
- WiFi → ondas de radio
- Fibra → luz

---

## Alcance de las tecnologías

### Idea clave

Cada tecnología tiene un alcance limitado.

```mermaid
flowchart TD
    A[WiFi ~300m]
    B[Celular ~km]
    C[Fibra ~miles de km]
    D[Satélite ~global]
```

### Explicación

- WiFi → corto alcance
- Fibra → largas distancias
- Siempre se necesita más de un salto

---

## Un solo salto

### Idea clave

La capa de acceso solo cubre un tramo del camino.

```mermaid
flowchart LR
    A[Dispositivo] --> R[Router]
    R --> ... --> D[Destino]
```

### Explicación

- Solo conecta al primer router
- El resto del camino lo hace Internet

---

## WiFi: comunicación por radio

### Idea clave

El WiFi usa ondas de radio para enviar datos.

```mermaid
flowchart LR
    D[Dispositivo] -->|Radio| R[Router / Gateway]
```

### Explicación

- El dispositivo tiene un transmisor de radio
- Envía datos al router cercano
- El router reenvía a Internet

---

## Red compartida en el aire

### Idea clave

Todos los dispositivos dentro del rango reciben todas las señales.

```mermaid
flowchart TD
    R[Router]
    R --> A[Dispositivo A]
    R --> B[Dispositivo B]
    R --> C[Dispositivo C]
```

### Explicación

- Todos “escuchan” todo
- Luego deciden qué ignorar
- El aire es un medio compartido

---

## Problema de privacidad

### Idea clave

Cualquier dispositivo puede captar los datos transmitidos.

```mermaid
flowchart LR
    A[Dispositivo] --> R[Router]
    M[Dispositivo malicioso] -. escucha .-> R
```

### Explicación

- Los datos viajan por el aire
- Otros pueden captarlos
- Se requiere seguridad (tema posterior)

---

## Dirección MAC

### Idea clave

Cada dispositivo tiene un identificador único en la red local.

```mermaid
flowchart TD
    A[Dispositivo]
    A --> B[MAC: 0f:2a:b3:1f:b3:1a]
```

### Explicación

- Número de 48 bits
- Único para cada dispositivo
- Identifica origen y destino en WiFi

---

## Uso de direcciones MAC

### Idea clave

Cada paquete incluye dirección de origen y destino.

```mermaid
flowchart LR
    A[MAC Origen] --> P[Paquete]
    P --> B[MAC Destino]
```

### Explicación

- Similar a “remitente” y “destinatario”
- Permite a cada dispositivo filtrar mensajes

---

## Descubrimiento de la puerta de acceso

### Idea clave

El dispositivo necesita saber a qué router enviar datos.

```mermaid
flowchart LR
    D[Dispositivo] -->|Broadcast| ALL[Todos los dispositivos]
```

---

## Mensaje de difusión (broadcast)

```mermaid
sequenceDiagram
    participant D as Dispositivo
    participant ALL as Red WiFi

    D->>ALL: ¿Quién es el gateway?
```

### Idea clave

Se envía a todos usando una dirección especial.

- Dirección destino: `ff:ff:ff:ff:ff:ff`
- Todos reciben el mensaje

---

## Respuesta del router

```mermaid
sequenceDiagram
    participant D as Dispositivo
    participant R as Router

    D->>R: ¿Quién es el gateway?
    R->>D: Soy el gateway (MAC)
```

### Explicación

- El router responde con su MAC
- El dispositivo ya sabe a quién enviar datos

---

## Comunicación normal

### Idea clave

Después del descubrimiento, ya no se usa broadcast.

```mermaid
flowchart LR
    D[Dispositivo] -->|MAC Router| R[Router]
```

### Explicación

- Se envían paquetes directamente
- Más eficiente
- Menos carga en la red

---

## Uso limitado del broadcast

### Idea clave

El broadcast debe usarse lo menos posible.

```mermaid
flowchart TD
    A[Broadcast]
    A --> B[Todos procesan mensaje]
    B --> C[Alto costo]
```

### Explicación

- Todos los dispositivos reciben el mensaje
- Genera trabajo innecesario
- Se usa solo cuando es necesario

---

## Insight clave (muy importante)


El WiFi es un medio compartido donde todos escuchan, pero solo algunos actúan.

- Todos reciben paquetes
- Solo procesan los que les corresponden
- Se usa MAC para identificar destinatarios

> Este modelo hace posible redes inalámbricas eficientes

---

## Resumen

- La capa de acceso transmite datos físicamente
- WiFi usa ondas de radio
- Todos los dispositivos reciben todos los paquetes
- Cada dispositivo tiene una dirección MAC única
- Los paquetes incluyen origen y destino
- Se usa broadcast para descubrir el router
- Luego se usa comunicación directa
- El aire es un medio compartido que requiere coordinación
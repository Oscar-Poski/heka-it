---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-ip
lessonSlug: 01-intro-ip
title: 4.1 Direcciones de Protocolo de Internet (IP)

summary: Comprender cómo las direcciones IP permiten enrutar paquetes a través de múltiples redes de forma eficiente.

durationMinutes: 9

objectives:

- Entender por qué se necesitan direcciones IP
- Diferenciar direcciones MAC vs IP
- Comprender cómo los routers usan direcciones IP
- Entender la estructura de una dirección IP
order: 15

---

## El reto: llegar a cualquier destino

### Idea clave

Para enviar datos a larga distancia, los paquetes deben atravesar múltiples redes y saltos.

```mermaid
flowchart LR
    A[Origen] --> R1[Router]
    R1 --> R2[Router]
    R2 --> R3[Router]
    R3 --> D[Destino]
```

### Explicación

- No existe una conexión directa
- Los paquetes viajan por múltiples medios
- Cada salto acerca el paquete a su destino

---

## Analogía: viajar por el mundo

### Idea clave

Un paquete viaja como una persona en un viaje largo.

```mermaid
flowchart LR
    Casa --> Bus
    Bus --> Tren
    Tren --> Avion
    Avion --> Taxi
    Taxi --> Hotel
```

### Explicación

- Diferentes medios de transporte
- Diferentes decisiones en cada punto
- El camino completo se construye paso a paso

---

## Routers como estaciones

### Idea clave

Los routers funcionan como estaciones de tránsito.

```mermaid
flowchart TD
    R[Router]
    R --> O1[Salida 1]
    R --> O2[Salida 2]
    R --> O3[Salida 3]
```

### Explicación

- Reciben paquetes
- Deciden a dónde enviarlos
- Tienen múltiples rutas posibles

---

## Cómo decide un router

### Idea clave

El router usa la dirección de destino para decidir el siguiente salto.

```mermaid
flowchart TD
    P[Paquete]
    P --> D[Dirección destino]
    D --> R[Router decide salida]
```

### Explicación

- No pregunta a nadie
- No conoce toda la ruta
- Solo toma la mejor decisión local

---

## Introducción a la dirección IP

### Idea clave

Cada paquete lleva una dirección IP que indica su destino final.

```mermaid
flowchart LR
    P[Paquete] --> IP[Dirección IP destino]
```

---

## Ejemplo de dirección IPv4

### Idea clave

Las direcciones IPv4 tienen 4 números.

```
212.78.1.25
```

### Características

- 4 números separados por puntos
- Cada número entre 0 y 255
- Representa un dispositivo en la red

---

## Ejemplo de dirección IPv6

### Idea clave

IPv6 permite muchas más direcciones.

```
2001:0db8:85a3:0042:1000:8a2e:0370:7334
```

### Explicación

- Direcciones más largas
- Solución a la escasez de IPv4

---

## Problema con direcciones MAC

### Idea clave

Las direcciones MAC no sirven para enrutar en Internet.

```mermaid
flowchart TD
    MAC[Dirección MAC]
    MAC --> X[No indica ubicación]
```

### Explicación

- Son fijas (hardware)
- No dependen de la ubicación
- No escalan para Internet

---

## Solución: direcciones basadas en ubicación

### Idea clave

Las direcciones IP dependen de dónde está conectado el dispositivo.

```mermaid
flowchart TD
    A[Dispositivo] --> B[Dirección IP según red]
```

### Explicación

- Cambian según la red
- Reflejan ubicación lógica
- Facilitan el enrutamiento

---

## Estructura de una dirección IP

### Idea clave

Una dirección IP se divide en dos partes.

```mermaid
flowchart LR
    IP[212.78.1.25]
    IP --> NET[Red: 212.78]
    IP --> HOST[Dispositivo: 1.25]
```

---

## Dirección de red

### Idea clave

Identifica la red a la que pertenece el dispositivo.

```mermaid
flowchart TD
    NET[212.78]
    NET --> A[Dispositivo 1]
    NET --> B[Dispositivo 2]
    NET --> C[Dispositivo 3]
```

### Explicación

- Agrupa dispositivos
- Permite enrutar en bloque

---

## Identificador de dispositivo

### Idea clave

Identifica el equipo dentro de la red.

```mermaid
flowchart TD
    NET[Red 212.78]
    NET --> H1[1.1]
    NET --> H2[1.2]
    NET --> H3[1.3]
```

---

## Enrutamiento eficiente

### Idea clave

Los routers solo necesitan conocer redes, no dispositivos individuales.

```mermaid
flowchart LR
    P[Paquete 212.78.*.*] --> R[Router]
    R --> DEST[Enviar a red 212.78]
```

### Explicación

- Reduce complejidad
- Escala a nivel global
- Hace posible Internet

---

## Ventaja clave del diseño

### Idea clave

Agrupar dispositivos en redes simplifica el enrutamiento.

```mermaid
flowchart TD
    A[Miles de millones de dispositivos]
    A --> B[Agrupados en redes]
    B --> C[Menos rutas a gestionar]
```

---

## Insight clave


Las direcciones IP permiten enrutar de forma eficiente a escala global.

- Representan ubicación lógica
- Agrupan dispositivos
- Reducen complejidad
- Permiten decisiones rápidas en routers

> Sin este diseño, Internet no podría escalar

---

## Resumen

- Los paquetes viajan a través de múltiples routers
- Cada router usa la dirección IP para decidir
- Las direcciones MAC no sirven para enrutar globalmente
- Las direcciones IP dependen de la red
- IPv4 usa 4 números, IPv6 usa direcciones más largas
- Una IP tiene parte de red y parte de dispositivo
- Los routers enrutan usando la parte de red
- Esto hace posible escalar Internet
---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-ip
lessonSlug: 05-intro-ip
title: 4.5 Obteniendo una dirección IP (DHCP)

summary: Comprender cómo los dispositivos obtienen dinámicamente una dirección IP al conectarse a una red mediante DHCP.

durationMinutes: 8

objectives:

- Entender por qué las direcciones IP cambian
- Comprender qué es DHCP
- Visualizar el proceso de asignación de IP
- Identificar problemas comunes (IP duplicadas, auto-asignadas)
order: 19

---

## El problema de la movilidad

### Idea clave

Los dispositivos cambian de red constantemente.

```mermaid
flowchart LR
    A[Cafetería] --> B[Casa]
    B --> C[Oficina]
```

### Explicación

- Laptop, smartphone, tablet
- Se conectan a diferentes redes
- Necesitan nuevas direcciones IP

---

## IP vs MAC

### Idea clave

La MAC es fija, la IP cambia.

```mermaid
flowchart TD
    A[Dispositivo]
    A --> B[MAC - fija]
    A --> C[IP - cambia]
```

### Explicación

- MAC → hardware
- IP → ubicación en red

---

## ¿Cómo obtiene una IP?

### Idea clave

Se usa el protocolo DHCP.

```mermaid
flowchart TD
    D[Dispositivo] --> DHCP[Servidor DHCP]
    DHCP --> D
```

---

## Qué es DHCP

### Idea clave

DHCP asigna automáticamente una dirección IP.

- Dynamic Host Configuration Protocol
- Configuración dinámica
- Automatiza la conexión

---

## Proceso DHCP (simplificado)

```mermaid
sequenceDiagram
    participant D as Dispositivo
    participant R as Router (DHCP)

    D->>R: ¿Hay alguien que me dé IP?
    R->>D: Sí, usa esta IP
```

---

## Paso 1: Broadcast inicial

### Idea clave

El dispositivo pregunta a toda la red.

```mermaid
flowchart LR
    D[Dispositivo] --> ALL[Red completa]
```

### Explicación

- No conoce servidores
- Usa difusión (broadcast)

---

## Paso 2: Respuesta del router

### Idea clave

El router asigna una IP temporal.

```mermaid
flowchart LR
    R[Router] --> D[Dispositivo]
```

### Información entregada

- Dirección IP
- Puerta de enlace (gateway)
- Otros parámetros

---

## IP temporal (lease)

### Idea clave

La IP no es permanente.

```mermaid
flowchart TD
    A[IP asignada]
    A --> B[Uso temporal]
    B --> C[Expira]
```

### Explicación

- Se “presta” la IP
- Se reutiliza después
- Optimiza recursos

---

## Reutilización de IPs

### Idea clave

Las IPs se reciclan cuando los dispositivos se desconectan.

```mermaid
flowchart TD
    A[Dispositivo se va]
    A --> B[IP liberada]
    B --> C[Asignada a otro]
```

---

## Problema: IP duplicada

### Idea clave

Dos dispositivos pueden tener la misma IP por error.

```mermaid
flowchart LR
    A[Dispositivo 1: 192.168.0.5]
    B[Dispositivo 2: 192.168.0.5]
```

### Explicación

- Error en DHCP
- Conflicto en red
- Se pierde conectividad

---

## Mensaje de conflicto

### Idea clave

El sistema detecta duplicados.

```
“Otro equipo está usando esta dirección IP”
```

---

## Caso sin DHCP

### Idea clave

El dispositivo se auto-asigna una IP.

```mermaid
flowchart TD
    A[Sin respuesta DHCP]
    A --> B[Auto-asignación 169.x.x.x]
```

---

## IP auto-asignada

### Idea clave

Permite conexión local, pero no acceso a Internet.

```mermaid
flowchart TD
    A[Dispositivo] --> B[Red local]
    B --> X[Sin acceso a Internet]
```

### Explicación

- Solo comunicación local
- No hay gateway
- No se puede salir a Internet

---

## Insight clave 

DHCP permite que Internet funcione de forma automática y escalable.

- Sin configuración manual
- Reutilización eficiente
- Soporte para movilidad

> Sin DHCP, conectarse a Internet sería mucho más complicado

---

## Resumen

- Los dispositivos cambian de red constantemente
- La dirección IP depende de la ubicación
- DHCP asigna IPs automáticamente
- Usa mensajes broadcast para descubrir el servidor
- Las IPs son temporales
- Se reutilizan cuando los dispositivos se desconectan
- Puede haber conflictos de IP
- Sin DHCP, se usan IPs auto-asignadas sin acceso a Internet
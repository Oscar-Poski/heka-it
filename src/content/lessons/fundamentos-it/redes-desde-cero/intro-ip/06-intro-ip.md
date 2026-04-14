---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-ip
lessonSlug: 06-intro-ip
title: 4.6 Reutilización de direcciones (NAT)

summary: Comprender cómo las direcciones IP privadas y NAT permiten reutilizar direcciones y conectar múltiples dispositivos a Internet con una sola IP pública.

durationMinutes: 8

objectives:

- Entender qué son las direcciones IP privadas
- Comprender qué es NAT
- Visualizar cómo múltiples dispositivos comparten una IP pública
- Entender cómo se conservan las direcciones IP globales
order: 20

---

## El problema: escasez de direcciones IP

### Idea clave

No hay suficientes direcciones IPv4 para todos los dispositivos.

```mermaid
flowchart TD
    A[Millones de dispositivos] --> B[Direcciones limitadas]
    B --> C[Problema global]
```

---

## Direcciones IP privadas

### Idea clave

Algunas direcciones no se usan en Internet global.

```
192.168.x.x
10.x.x.x
```

```mermaid
flowchart TD
    A[Red local]
    A --> B[192.168.0.5]
    A --> C[192.168.0.6]
    A --> D[192.168.0.7]
```

### Explicación

- Solo funcionan dentro de una red local
- No son enrutables en Internet
- Se pueden reutilizar en diferentes redes

---

## Qué significa “no enrutable”

### Idea clave

Estas direcciones no pueden viajar por Internet.

```mermaid
flowchart LR
    A[192.168.0.5] --> X[Internet]
    X -->|Bloqueado| FAIL[No enrutable]
```

---

## Entonces… ¿cómo accedemos a Internet?

### Idea clave

Usamos NAT (Network Address Translation).

```mermaid
flowchart LR
    D[Dispositivo] --> R[Router NAT] --> I[Internet]
```

---

## Qué es NAT

### Idea clave

El router traduce direcciones privadas a una dirección pública.

```mermaid
flowchart TD
    A[192.168.0.5]
    A --> B[Router]
    B --> C[IP pública]
```

---

## Dirección interna vs externa

### Idea clave

Un dispositivo tiene IP interna, el router tiene IP pública.

```mermaid
flowchart TD
    D[Dispositivo]
    D --> IP1[IP privada]

    R[Router]
    R --> IP2[IP pública]
```

---

## Flujo de salida (hacia Internet)

```mermaid
sequenceDiagram
    participant D as Dispositivo
    participant R as Router (NAT)
    participant I as Internet

    D->>R: Origen 192.168.0.5
    R->>I: Origen IP pública
```

### Explicación

- El router reemplaza la IP
- Internet solo ve la IP pública

---

## Flujo de entrada (respuesta)

```mermaid
sequenceDiagram
    participant I as Internet
    participant R as Router (NAT)
    participant D as Dispositivo

    I->>R: Destino IP pública
    R->>D: Destino 192.168.0.5
```

### Explicación

- El router recuerda quién hizo la solicitud
- Reescribe la dirección de destino
- Entrega al dispositivo correcto

---

## Compartiendo una IP pública

### Idea clave

Muchos dispositivos usan una sola IP pública.

```mermaid
flowchart TD
    A[192.168.0.5]
    B[192.168.0.6]
    C[192.168.0.7]

    A --> R[Router]
    B --> R
    C --> R

    R --> IP[IP pública única]
```

---

## Ventajas de NAT

### Idea clave

Permite escalar Internet eficientemente.

```mermaid
flowchart TD
    A[NAT]
    A --> B[Ahorro de IPs]
    A --> C[Reutilización]
    A --> D[Escalabilidad]
```

---

## Reutilización global

### Idea clave

La misma IP privada puede existir en muchas redes.

```mermaid
flowchart TD
    A[Casa 1: 192.168.0.5]
    B[Casa 2: 192.168.0.5]
    C[Oficina: 192.168.0.5]
```

### Explicación

- No hay conflicto
- Cada red es independiente

---

## Insight clave 

NAT permite que miles de millones de dispositivos compartan un número limitado de direcciones públicas.

- Traduce direcciones automáticamente
- Oculta redes internas
- Hace viable el Internet actual

> Sin NAT, IPv4 ya habría colapsado

---

## Resumen

- Las direcciones privadas (192.168.x.x, 10.x.x.x) no son enrutable
- Solo funcionan dentro de redes locales
- NAT traduce IPs privadas a públicas
- El router actúa como intermediario
- Muchos dispositivos comparten una IP pública
- Las IPs privadas se reutilizan en todo el mundo
- NAT permite escalar Internet
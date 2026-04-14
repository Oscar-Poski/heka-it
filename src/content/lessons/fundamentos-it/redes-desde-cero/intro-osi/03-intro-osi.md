---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-osi
lessonSlug: 03-intro-osi
title: 9.3 Red (Capa 3)

summary: Entender cómo los paquetes encuentran su camino a través de múltiples redes hasta llegar a su destino.

durationMinutes: 8

objectives:

- Comprender el rol de la capa de Red
- Entender el direccionamiento IP
- Aprender cómo funcionan los routers
- Entender el concepto de enrutamiento

order: 41

---

## Idea general

### Idea clave

La capa de Red se encarga de llevar los datos **desde cualquier origen hasta cualquier destino**, incluso a través de múltiples redes.

```mermaid
flowchart LR
    A[Origen] --> B[Router 1] --> C[Router 2] --> D[Router 3] --> E[Destino]
```

---

## Qué problema resuelve

Cuando los dispositivos están lejos:

- ¿Cómo llegan los datos hasta otro país?
- ¿Qué camino deben tomar?
- ¿Qué pasa si una ruta falla?

---

## Direccionamiento global

### Idea clave

Cada dispositivo tiene una dirección única en la red global.

- Dirección IP
- Identifica ubicación en Internet

```mermaid
flowchart LR
    A[192.168.1.10] -->|Se traduce a| B[IP pública]
```

---

## Qué hace un router

### Idea clave

Un router decide el **siguiente salto** del paquete.

```mermaid
flowchart TD
    A[Paquete con IP destino]
    A --> B[Router]
    B --> C{¿Me acerco al destino?}
    C --> D[Enviar por mejor ruta]
```

---

## Enrutamiento

### Idea clave

Los paquetes no siguen una ruta fija.

- Cada router decide localmente
- Se busca acercarse al destino
- La ruta puede cambiar

```mermaid
flowchart LR
    A[Origen] -->|Ruta 1| B[Destino]
    A -->|Ruta 2| B
```

---

## Múltiples saltos

### Idea clave

Un paquete viaja pasando por varios routers.

- 5 a 20 saltos típicamente
- Cada salto = decisión independiente

```mermaid
flowchart LR
    A[Hop 1] --> B[Hop 2] --> C[Hop 3] --> D[Hop N]
```

---

## No garantiza entrega

### Idea clave

La capa de Red **no es perfecta**.

- Puede perder paquetes
- Puede enviarlos desordenados
- Puede haber retrasos

```mermaid
flowchart TD
    A[Paquete enviado]
    A --> B[¿Llega?]
    B -->|Sí| C[OK]
    B -->|No| D[Perdido]
```

---

## ¿Entonces quién arregla eso?

👉 La capa superior: **Transporte (TCP)**

---

## Analogía simple

### Idea clave

Viajar sin plan exacto.

- Tomas decisiones paso a paso
- Te acercas al destino
- A veces cambias de ruta

```mermaid
flowchart LR
    A[Ciudad origen] --> B[Ciudad intermedia] --> C[Otra ciudad] --> D[Destino]
```

---

## Relación con TCP/IP

### Idea clave

Equivalente a la capa de Internet (IP)

```mermaid
flowchart LR
    A[Modelo OSI] --> B[Capa de Red]
    C[Modelo TCP/IP] --> D[Capa de Internet]
```

---

## Insight clave

### Idea clave

La capa de Red **no busca perfección, busca eficiencia**.

- Entrega "lo mejor posible"
- Se adapta a fallos
- Deja la confiabilidad a otra capa

---

## Resumen

- La capa de Red maneja el direccionamiento global (IP)
- Los routers encaminan paquetes entre redes
- Los paquetes viajan en múltiples saltos
- No garantiza entrega ni orden
- Es equivalente a la capa de Internet en TCP/IP
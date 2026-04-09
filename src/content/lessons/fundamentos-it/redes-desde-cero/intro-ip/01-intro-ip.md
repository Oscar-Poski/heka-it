---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-ip
lessonSlug: 01-intro-ip
title: ¿Qué es una dirección IP?
summary: Entender qué es una dirección IP y cómo permite identificar dispositivos dentro de una red.
durationMinutes: 5
objectives:
  - Comprender qué es una dirección IP
  - Entender por qué es necesaria para la comunicación
  - Identificar cómo se ve una dirección IP
order: 17
---
# ¿Qué es una dirección IP?

Hasta ahora ya sabemos:

- los datos viajan en paquetes
- los paquetes tienen un destino

Pero esto nos lleva a una pregunta clave:

> ¿Cómo sabe la red a dónde enviar los datos?
> 

---

## La idea clave

Cada dispositivo en una red necesita una forma de identificarse.

Esa identificación es:

> la **dirección IP**
> 

---

## ¿Qué es una dirección IP?

Una dirección IP es:

> un identificador único que permite localizar un dispositivo dentro de una red
> 

Es como una dirección en el mundo real.

---

## Analogía importante

Imagina que quieres enviar una carta.

Necesitas:

- dirección de origen
- dirección de destino

Sin dirección, la carta no llega.

En redes ocurre lo mismo.

---

## ¿Cómo se ve una dirección IP?

Una dirección IP común (IPv4) se ve así:

```
192.168.1.1
```

Está formada por números separados por puntos.

---

## ¿Qué representa?

Una dirección IP identifica:

- un dispositivo específico
- dentro de una red específica

Esto permite que los paquetes lleguen al destino correcto.

---

## En los paquetes

Cuando se envía un paquete, incluye:

- IP de origen
- IP de destino

---

```mermaid
flowchart LR
  A["Origen (IP A)"] --> B["Red"] --> C["Destino (IP B)"]
```

---

Los dispositivos intermedios usan esta información para enrutar los datos.

---

## Ejemplo real

Cuando usas una aplicación como YouTube:

- tu dispositivo tiene una IP
- el servidor tiene otra IP
- los datos viajan entre esas direcciones

---

## Algo importante

Aunque normalmente usas nombres como:

- google.com
- youtube.com

en realidad:

> las computadoras usan direcciones IP
> 

Más adelante veremos cómo se traducen esos nombres.

---

## Intuición clave

La red no entiende nombres humanos.

> entiende direcciones numéricas
> 

---

## Idea clave de esta lección

Una dirección IP es un identificador único que permite enviar datos a un dispositivo específico dentro de una red.

---

## Repaso

- Cada dispositivo tiene una dirección IP
- Funciona como una dirección en el mundo real
- Los paquetes incluyen IP de origen y destino
- Permite que la red enrute los datos correctamente
- Las computadoras usan IPs, no nombres
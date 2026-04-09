---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-ip
lessonSlug: 04-intro-ip
title: NAT. Cómo muchos dispositivos usan una sola IP
summary: Entender cómo NAT permite que múltiples dispositivos dentro de una red compartan una sola dirección IP pública.
durationMinutes: 6
objectives:
  - Comprender qué es NAT
  - Entender cómo traduce direcciones privadas a públicas
  - Visualizar cómo múltiples dispositivos comparten una IP
order: 20
---
# NAT: cómo muchos dispositivos usan una sola IP

En la lección anterior vimos que:

- cada dispositivo tiene una IP privada
- el router tiene una IP pública

Pero esto plantea una pregunta importante:

> ¿Cómo pueden muchos dispositivos usar una sola IP pública al mismo tiempo?
> 

---

## La idea clave

Esto es posible gracias a:

> **NAT (Network Address Translation)**
> 

---

## ¿Qué es NAT?

NAT es un mecanismo que:

> traduce direcciones IP privadas en una dirección IP pública (y viceversa)
> 

Lo realiza el router.

---

## El problema que resuelve

En tu casa puedes tener:

- laptop
- celular
- tablet
- smart TV

Todos necesitan acceder a Internet.

Pero:

- solo tienes una IP pública

---

## ¿Cómo funciona NAT?

El router actúa como intermediario.

---

```mermaid
flowchart LR
  A["Laptop\n192.168.1.2"] --> R["Router (NAT)"]
  B["Celular\n192.168.1.3"] --> R
  R --> C["IP pública"] --> D["Internet"]
```

---

## Paso a paso

### 1. Dispositivo envía solicitud

Por ejemplo:

- tu laptop (IP privada) quiere acceder a un servidor

---

### 2. NAT modifica la solicitud

El router:

- reemplaza la IP privada por la IP pública
- registra quién hizo la solicitud

---

### 3. Envío a Internet

El servidor ve:

- solo la IP pública

---

### 4. Respuesta

El servidor responde a la IP pública.

---

### 5. NAT redirige la respuesta

El router:

- revisa su registro
- envía la respuesta al dispositivo correcto

---

```mermaid
sequenceDiagram
  participant L as Laptop (privada)
  participant R as Router (NAT)
  participant S as Servidor

  L->>R: Solicitud
  R->>S: Solicitud (IP pública)
  S->>R: Respuesta
  R->>L: Respuesta correcta
```

---

## ¿Cómo distingue entre dispositivos?

El router usa información adicional como:

- puertos
- tablas internas

Esto le permite saber:

- qué respuesta corresponde a qué dispositivo

---

## Analogía importante

Imagina una oficina:

- todos los empleados usan la misma dirección del edificio
- el recepcionista (router) recibe todo
- luego entrega cada mensaje a la persona correcta

---

## Ejemplo real

Cuando usas una app como YouTube:

- tu celular envía una solicitud
- NAT la traduce
- el servidor responde
- el router devuelve la respuesta al dispositivo correcto

---

## Ventajas de NAT

- permite compartir una IP pública
- reduce el uso de direcciones IPv4
- añade una capa básica de aislamiento

---

## Intuición clave

Internet no ve todos tus dispositivos.

> solo ve tu router
> 

---

## Idea clave de esta lección

NAT permite que múltiples dispositivos con IP privadas compartan una sola IP pública mediante traducción de direcciones.

---

## Repaso

- NAT traduce IP privadas a una IP pública
- El router realiza esta función
- Mantiene una tabla para enrutar respuestas
- Permite que múltiples dispositivos usen Internet
- Internet solo ve la IP pública
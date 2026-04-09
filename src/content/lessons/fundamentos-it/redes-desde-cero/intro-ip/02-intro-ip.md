---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-ip
lessonSlug: 02-intro-ip
title: IP pública vs privada
summary: Entender la diferencia entre direcciones IP públicas y privadas, y cómo se utilizan dentro de una red.
durationMinutes: 6
objectives:
  - Comprender qué es una IP pública
  - Comprender qué es una IP privada
  - Entender cómo interactúan dentro de una red doméstica
order: 18
---
# IP pública vs privada

En la lección anterior vimos que cada dispositivo tiene una dirección IP.

Pero en la práctica, no todas las IPs son iguales.

> Existen dos tipos principales: **IP pública** y **IP privada**
> 

---

## La idea clave

- **IP pública** → identifica tu red en Internet
- **IP privada** → identifica dispositivos dentro de tu red local

---

## IP privada

Una IP privada se usa dentro de una red local (LAN).

Por ejemplo, en tu casa:

- tu celular
- tu laptop
- tu smart TV

Cada uno tiene su propia IP privada.

---

```mermaid
flowchart TD
  R["Router"]
  A["Laptop\n192.168.1.2"] --> R
  B["Celular\n192.168.1.3"] --> R
  C["TV\n192.168.1.4"] --> R
```

---

### Características

- solo funciona dentro de la red local
- no es visible desde Internet
- puede repetirse en otras redes

---

## IP pública

La IP pública es la dirección que representa a tu red en Internet.

Es asignada por tu proveedor de Internet.

---

```mermaid
flowchart LR
  A["Tu red (LAN)"] --> B["IP pública"] --> C["Internet"]
```

---

### Características

- es única en Internet
- permite que otras redes te encuentren
- es asignada por el proveedor

---

## ¿Cómo trabajan juntas?

En una red doméstica ocurre lo siguiente:

1. tus dispositivos usan IP privadas
2. el router tiene una IP pública
3. el router conecta tu red con Internet

---

```mermaid
flowchart LR
  A["Laptop\n192.168.1.2"] --> R["Router"]
  B["Celular\n192.168.1.3"] --> R
  R --> C["IP pública"] --> D["Internet"]
```

---

## Analogía importante

Imagina un edificio:

- IP pública → dirección del edificio
- IP privada → número de departamento

Desde fuera, solo ven el edificio.

Dentro, cada departamento tiene su número.

---

## Ejemplo real

Cuando usas una app como YouTube:

- tu celular usa una IP privada
- tu router usa una IP pública
- Internet solo ve la IP pública

---

## Algo importante

Muchos dispositivos pueden compartir una sola IP pública.

Esto es posible gracias a un mecanismo que veremos después (NAT).

---

## Intuición clave

Internet no se comunica directamente con cada dispositivo de tu casa.

> se comunica con tu red, a través de tu IP pública
> 

---

## Idea clave de esta lección

Las IP privadas identifican dispositivos dentro de una red local, mientras que la IP pública identifica a toda la red frente a Internet.

---

## Repaso

- IP privada → dentro de la red local
- IP pública → visible en Internet
- El router conecta ambas
- Muchos dispositivos comparten una IP pública
- Permite organizar redes de forma eficiente
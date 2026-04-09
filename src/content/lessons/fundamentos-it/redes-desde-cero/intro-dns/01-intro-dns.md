---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-dns
lessonSlug: 01-intro-dns
title: ¿Por qué no usamos IPs?
summary: Entender por qué los humanos no usamos direcciones IP directamente y la necesidad de un sistema más fácil de recordar.
durationMinutes: 4
objectives:
  - Comprender por qué las IPs no son prácticas para humanos
  - Entender la diferencia entre nombres y direcciones
  - Introducir la necesidad del DNS
order: 21
---
# ¿Por qué no usamos IPs?

Ya sabemos que:

- cada dispositivo tiene una dirección IP
- las computadoras usan esas direcciones para comunicarse

Pero entonces surge una pregunta natural:

> ¿Por qué nosotros no usamos direcciones IP directamente?
> 

---

## La idea clave

Las direcciones IP funcionan muy bien para las computadoras.

Pero:

> no son prácticas para los humanos
> 

---

## Problema 1: Difíciles de recordar

Una IP se ve así:

```
142.250.190.78
```

Ahora imagina memorizar:

- decenas de direcciones
- para cada sitio que usas

No es práctico.

---

## Problema 2: No son intuitivas

Una IP no dice nada sobre su contenido.

Por ejemplo:

- 142.250.190.78 → no sabes qué es
- youtube.com → sabes inmediatamente a dónde vas

---

## Problema 3: Pueden cambiar

Las direcciones IP pueden cambiar con el tiempo.

Si dependieras de ellas:

- tendrías que actualizar constantemente
- perderías acceso si cambian

---

## La solución: nombres

En lugar de usar IPs, usamos nombres como:

- google.com
- youtube.com

Estos nombres son:

- fáciles de recordar
- significativos
- estables desde la perspectiva del usuario

---

## Analogía importante

Imagina que en lugar de guardar contactos en tu celular:

- tuvieras que memorizar números largos
- sin nombres

Sería muy difícil.

Por eso usamos nombres.

---

## Pero hay un detalle importante

Aunque tú uses nombres:

> las computadoras siguen usando direcciones IP
> 

---

## Entonces, ¿qué ocurre realmente?

Cuando escribes un nombre como:

```
google.com
```

tu dispositivo necesita convertirlo en una IP.

Ese proceso lo realiza un sistema que veremos en la siguiente lección.

---

## Ejemplo real

Cuando entras a YouTube:

- tú usas un nombre
- el sistema lo traduce a una IP
- la comunicación ocurre usando esa IP

---

## Intuición clave

Hay dos niveles:

- humanos → usan nombres
- computadoras → usan direcciones IP

---

## Idea clave de esta lección

No usamos direcciones IP porque son difíciles de recordar y no son intuitivas, por lo que utilizamos nombres que luego se traducen a IPs.

---

## Repaso

- Las IPs son necesarias para la red
- Pero no son prácticas para humanos
- Usamos nombres en su lugar
- Las computadoras convierten esos nombres en IPs
- Ese proceso se verá en la siguiente lección
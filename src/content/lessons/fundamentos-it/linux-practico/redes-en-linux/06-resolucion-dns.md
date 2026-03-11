---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: redes-en-linux
lessonSlug: 06-resolucion-dns
title: "Resolución DNS"

summary: "Comprender cómo el sistema convierte nombres de dominio en direcciones IP mediante el sistema DNS."

durationMinutes: 8

objectives:

- "Comprender qué es DNS"
- "Entender cómo se resuelven los nombres de dominio"
- "Utilizar herramientas básicas para consultar DNS"
    
order: 6
    

---

# Resolución DNS

Cuando accedes a un sitio web normalmente utilizas un **nombre de dominio**, por ejemplo:

```
google.com
```

Sin embargo, las computadoras no utilizan nombres para comunicarse entre sí.

Las redes funcionan utilizando **direcciones IP**.

Por ejemplo:

```
142.250.190.14
```

Entonces surge una pregunta:

> ¿Cómo sabe el sistema qué dirección IP corresponde a `google.com`?
> 

La respuesta es **DNS**.

---

# ¿Qué es DNS?

**DNS** significa:

**Domain Name System**

Es un sistema que convierte **nombres de dominio en direcciones IP**.

En otras palabras, DNS funciona como **una especie de agenda telefónica de internet**.

Ejemplo:

```
google.com → 142.250.190.14
```

Gracias a DNS no necesitamos memorizar direcciones IP.

---

# Cómo funciona la resolución DNS

Cuando escribes un dominio en tu navegador o utilizas un comando como `ping`, ocurre el siguiente proceso:

1. el sistema consulta su caché local
2. si no encuentra la dirección, consulta un servidor DNS
3. el servidor DNS responde con la dirección IP
4. el sistema usa esa dirección IP para conectarse al servidor

Este proceso suele ocurrir en milisegundos.

---

# Servidores DNS

Un **servidor DNS** es un sistema que responde consultas de nombres de dominio.

Algunos servidores DNS comunes son:

```
8.8.8.8   (Google DNS)
1.1.1.1   (Cloudflare DNS)
```

Los sistemas Linux normalmente utilizan servidores DNS configurados por:

- el router
- el proveedor de internet
- la configuración del sistema

---

# Ver configuración DNS

En muchos sistemas Linux puedes ver los servidores DNS configurados revisando el archivo:

```
/etc/resolv.conf
```

Puedes visualizarlo con:

```bash
cat /etc/resolv.conf
```

Un ejemplo de contenido podría verse así:

```
nameserver 8.8.8.8
nameserver 1.1.1.1
```

Esto indica qué servidores DNS utilizará el sistema.

---

# Consultar DNS con `nslookup`

Una herramienta común para consultar DNS es:

```bash
nslookup
```

Ejemplo:

```bash
nslookup google.com
```

Salida simplificada:

```
Name: google.com
Address: 142.250.190.14
```

Esto muestra la dirección IP asociada al dominio.

---

# Consultar DNS con `dig`

Otra herramienta más avanzada es:

```bash
dig
```

Ejemplo:

```bash
dig google.com
```

`dig` muestra información más detallada sobre la consulta DNS.

Se utiliza frecuentemente para **diagnóstico de redes**.

---

# Problemas comunes de DNS

Muchos problemas de conexión a internet están relacionados con DNS.

Por ejemplo:

- el dominio no se resuelve
- el servidor DNS no responde
- configuración incorrecta del sistema

Un síntoma típico es cuando:

- `ping` funciona con una IP
- pero no funciona con un nombre de dominio

Esto indica un problema de DNS.

---

# Idea clave de esta lección

DNS convierte nombres de dominio en direcciones IP para que los dispositivos puedan comunicarse en una red.

---

# Repaso

- DNS significa Domain Name System.
- Convierte nombres de dominio en direcciones IP.
- Los servidores DNS responden consultas de dominios.
- `/etc/resolv.conf` contiene la configuración DNS del sistema.
- `nslookup` y `dig` permiten consultar DNS.
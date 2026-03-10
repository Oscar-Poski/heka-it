---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: redes-en-linux
lessonSlug: 03-direcciones-ip
title: "Direcciones IP"

summary: "Entender qué es una dirección IP y cómo se utiliza para identificar dispositivos dentro de una red."

durationMinutes: 8

objectives:

- "Comprender qué es una dirección IP"
- "Diferenciar entre IPv4 e IPv6"
- "Entender el concepto de red y host en una dirección IP"
    
order: 3
    

---

# Direcciones IP

Para que los dispositivos puedan comunicarse en una red, cada uno necesita una **identificación única**.

Esta identificación se llama:

**dirección IP (Internet Protocol address)**

Una dirección IP permite que los datos sepan **a qué dispositivo deben llegar** dentro de una red.

Es similar a una dirección postal, pero para computadoras.

---

# Ejemplo de dirección IP

Un ejemplo de dirección IP común es:

```
192.168.1.10
```

Esta dirección identifica un dispositivo dentro de una red local.

Cuando otro dispositivo envía datos a esa dirección, el sistema de red puede entregar la información al destino correcto.

---

# IPv4

El tipo de dirección IP más común es **IPv4**.

IPv4 utiliza direcciones de **32 bits**, representadas normalmente como cuatro números separados por puntos.

Ejemplo:

```
192.168.1.10
```

Cada número puede tener un valor entre:

```
0 – 255
```

Esto permite aproximadamente **4 mil millones de direcciones IP posibles**.

---

# IPv6

Debido al crecimiento de internet, las direcciones IPv4 comenzaron a agotarse.

Para resolver este problema se creó **IPv6**.

IPv6 utiliza direcciones de **128 bits**, lo que permite una cantidad mucho mayor de direcciones.

Ejemplo de dirección IPv6:

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

Aunque IPv6 es cada vez más común, muchos sistemas aún utilizan IPv4.

---

# Parte de red y parte de host

Una dirección IP se divide en dos partes principales.

**Red**

Identifica la red a la que pertenece el dispositivo.

---

**Host**

Identifica el dispositivo específico dentro de esa red.

Por ejemplo:

```
192.168.1.10
```

En muchas redes domésticas:

```
192.168.1
```

representa la red, y

```
10
```

representa el dispositivo dentro de esa red.

---

# Máscara de red

La **máscara de red** define qué parte de la dirección IP pertenece a la red y cuál al host.

Un ejemplo común es:

```
255.255.255.0
```

En formato CIDR también se puede escribir como:

```
/24
```

Por ejemplo:

```
192.168.1.10/24
```

Esto indica que los primeros 24 bits identifican la red.

---

# Direcciones privadas

Algunas direcciones IP se reservan para redes privadas.

Estas direcciones no se utilizan directamente en internet.

Rangos comunes:

```
10.0.0.0 – 10.255.255.255
172.16.0.0 – 172.31.255.255
192.168.0.0 – 192.168.255.255
```

Las redes domésticas suelen usar direcciones dentro de estos rangos.

---

# Dirección pública

Cuando un dispositivo se conecta a internet, normalmente utiliza una **dirección IP pública** asignada por el proveedor de internet.

Esta dirección permite que otros sistemas en internet puedan comunicarse con tu red.

En muchos casos, un router comparte una dirección pública entre múltiples dispositivos de una red local.

---

# Ver direcciones IP en Linux

Puedes ver las direcciones IP del sistema usando:

```bash
ip addr
```

Esto mostrará:

- interfaces de red
- direcciones IPv4
- direcciones IPv6

---

# Idea clave de esta lección

Una dirección IP identifica de forma única a un dispositivo dentro de una red y permite que los datos se envíen al destino correcto.

---

# Repaso

- Una dirección IP identifica un dispositivo en una red.
- IPv4 utiliza direcciones de 32 bits.
- IPv6 utiliza direcciones de 128 bits.
- Las direcciones IP se dividen en red y host.
- Algunas direcciones están reservadas para redes privadas.
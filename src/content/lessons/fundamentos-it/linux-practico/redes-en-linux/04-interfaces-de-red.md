---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: redes-en-linux
lessonSlug: 04-interfaces-de-red
title: "Interfaces de red"

summary: "Comprender qué son las interfaces de red en Linux y cómo permiten que el sistema se conecte a redes."

durationMinutes: 7

objectives:

- "Comprender qué es una interfaz de red"
- "Identificar tipos de interfaces en Linux"
- "Visualizar interfaces usando herramientas del sistema"
    
order: 4
    

---

# Interfaces de red

Para que una computadora pueda conectarse a una red necesita un componente que gestione la comunicación.

Este componente se llama **interfaz de red**.

Una **interfaz de red** es el punto a través del cual el sistema envía y recibe datos en una red.

Cada interfaz tiene su propia configuración, que puede incluir:

- dirección IP
- máscara de red
- estado de conexión
- estadísticas de tráfico

---

# Tipos de interfaces de red

En Linux pueden existir diferentes tipos de interfaces.

## Ethernet

Las interfaces Ethernet representan conexiones de red cableadas.

Ejemplo de nombres comunes:

```
eth0
ens33
enp0s3
```

Estas interfaces se utilizan cuando el sistema está conectado mediante un cable de red.

---

## WiFi

Las interfaces inalámbricas representan conexiones WiFi.

Ejemplos:

```
wlan0
wlp2s0
```

Estas interfaces permiten conectarse a redes inalámbricas.

---

## Loopback

Una interfaz especial que existe en todos los sistemas Linux es:

```
lo
```

Esta interfaz permite que el sistema se comunique **consigo mismo**.

Utiliza la dirección IP:

```
127.0.0.1
```

---

# Interfaces virtuales

Además de interfaces físicas, Linux también puede tener **interfaces virtuales**.

Estas se utilizan en situaciones como:

- máquinas virtuales
- contenedores
- redes internas del sistema

Algunos ejemplos incluyen:

```
docker0
virbr0
```

Estas interfaces no representan hardware físico, pero funcionan como conexiones de red dentro del sistema.

---

# Ver interfaces de red

Para ver las interfaces disponibles en el sistema se utiliza:

```bash
ip link
```

Ejemplo de salida simplificada:

```
1: lo: <LOOPBACK,UP>
2: eth0: <BROADCAST,MULTICAST,UP>
3: wlan0: <BROADCAST,MULTICAST>
```

Esto muestra:

- nombre de la interfaz
- estado de la interfaz
- características de red

---

# Ver información detallada

Para ver direcciones IP y configuración completa se utiliza:

```bash
ip addr
```

Este comando muestra:

- interfaces disponibles
- direcciones IPv4
- direcciones IPv6
- estado de cada interfaz

---

# Estado de una interfaz

Una interfaz puede encontrarse en diferentes estados.

Los más comunes son:

**UP**

La interfaz está activa y puede enviar o recibir datos.

---

**DOWN**

La interfaz está desactivada.

Esto puede ocurrir si:

- no está conectada
- fue deshabilitada manualmente
- el hardware no está disponible

---

# Activar o desactivar interfaces

En algunos casos es necesario activar o desactivar una interfaz manualmente.

Esto se puede hacer con:

```bash
sudo ip linkset eth0 up
```

o

```bash
sudo ip linkset eth0 down
```

Esto activa o desactiva la interfaz.

---

# Importancia de las interfaces

Las interfaces de red son fundamentales para el funcionamiento de sistemas conectados.

Permiten que el sistema:

- se conecte a redes locales
- acceda a internet
- se comunique con otros servidores
- transfiera archivos a través de la red

Comprender cómo funcionan es esencial para administrar redes en Linux.

---

# Idea clave de esta lección

Las interfaces de red son los puntos de conexión que permiten a Linux enviar y recibir datos dentro de una red.

---

# Repaso

- Una interfaz de red permite la comunicación con una red.
- Existen interfaces Ethernet, WiFi y virtuales.
- `lo` es la interfaz loopback del sistema.
- `ip link` muestra interfaces disponibles.
- `ip addr` muestra configuración completa de red.
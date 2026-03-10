---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: redes-en-linux
lessonSlug: 02-ver-configuracion-de-red
title: "Ver configuración de red"

summary: "Aprender a visualizar la configuración de red en Linux, incluyendo direcciones IP, interfaces y estado de conexión."

durationMinutes: 7

objectives:

- "Ver la configuración de red del sistema"
- "Identificar interfaces de red"
- "Mostrar direcciones IP y estado de conexión"
    
order: 2
    

---

# Ver configuración de red

Para trabajar con redes en Linux es importante saber **cómo ver la configuración actual del sistema**.

Esto permite responder preguntas como:

- ¿qué dirección IP tiene la computadora?
- ¿qué interfaces de red están activas?
- ¿la red está funcionando correctamente?

Linux incluye varias herramientas para visualizar esta información.

---

# Interfaces de red

Una **interfaz de red** es el componente que permite al sistema conectarse a una red.

Puede representar:

- una tarjeta de red Ethernet
- una conexión WiFi
- una interfaz virtual
- una conexión de contenedor o máquina virtual

Cada interfaz tiene su propia configuración de red.

Algunos nombres comunes de interfaces son:

```
eth0
wlan0
ens33
lo
```

---

# El comando `ip`

La herramienta moderna para ver configuración de red es:

```bash
ip
```

Este comando forma parte del paquete **iproute2** y reemplaza herramientas más antiguas como `ifconfig`.

---

# Ver interfaces de red

Para listar las interfaces de red del sistema se utiliza:

```bash
ip link
```

La salida puede verse así:

```
1: lo: <LOOPBACK,UP>
2: eth0: <BROADCAST,MULTICAST,UP>
```

Aquí puedes ver:

- el nombre de la interfaz
- su estado
- sus características

---

# Ver direcciones IP

Para ver las direcciones IP asociadas a las interfaces se utiliza:

```bash
ip addr
```

Ejemplo de salida simplificada:

```
2: eth0
    inet 192.168.1.25/24
```

Esto indica que la interfaz `eth0` tiene la dirección IP:

```
192.168.1.25
```

---

# Ver solo direcciones IP

También puedes usar una versión más corta del comando:

```bash
ip a
```

Esto muestra la misma información de forma más compacta.

---

# La interfaz loopback

Una interfaz especial en todos los sistemas Linux es:

```
lo
```

Esta interfaz se llama **loopback**.

Utiliza la dirección IP:

```
127.0.0.1
```

Permite que el sistema se comunique **consigo mismo**.

Se utiliza para:

- pruebas de red
- servicios locales
- comunicación interna del sistema

---

# Ver la puerta de enlace (gateway)

La puerta de enlace es el dispositivo que conecta la red local con otras redes, normalmente con internet.

Puedes verla con:

```bash
ip route
```

Ejemplo:

```
default via 192.168.1.1 dev eth0
```

Esto indica que el tráfico hacia otras redes pasa por:

```
192.168.1.1
```

---

# Cuándo revisar la configuración de red

Revisar la configuración de red es útil cuando:

- el sistema no tiene conexión a internet
- se investiga un problema de red
- se configura una nueva interfaz
- se administra un servidor

Estas herramientas permiten verificar rápidamente el estado de la red.

---

# Idea clave de esta lección

Linux permite ver la configuración de red utilizando herramientas como `ip`, que muestran interfaces, direcciones IP y rutas de red.

---

# Repaso

- Las interfaces de red permiten la conexión del sistema a una red.
- `ip link` muestra interfaces disponibles.
- `ip addr` muestra direcciones IP.
- `ip route` muestra rutas y gateway.
- `lo` es la interfaz loopback del sistema.
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: redes-en-linux
lessonSlug: 07-ver-conexiones-activas
title: "Ver conexiones activas"

summary: "Aprender a visualizar conexiones de red activas en el sistema Linux para analizar tráfico y servicios en ejecución."

durationMinutes: 8

objectives:

- "Ver conexiones de red activas en el sistema"
- "Identificar puertos abiertos"
- "Usar herramientas para analizar tráfico de red"
    
order: 7
    

---

# Ver conexiones activas

En un sistema Linux conectado a una red pueden existir muchas **conexiones activas** al mismo tiempo.

Por ejemplo:

- conexiones a sitios web
- conexiones SSH
- servicios escuchando en puertos
- aplicaciones comunicándose con servidores

Poder ver estas conexiones es importante para:

- diagnóstico de red
- seguridad
- administración de servidores

Linux incluye herramientas que permiten observar estas conexiones.

---

# El comando `ss`

La herramienta moderna para ver conexiones de red es:

```bash
ss
```

Este comando forma parte del paquete **iproute2** y es el reemplazo moderno de herramientas más antiguas como `netstat`.

---

# Ver todas las conexiones

Para ver conexiones activas se puede usar:

```bash
ss -t
```

Esto muestra conexiones TCP.

Ejemplo de salida simplificada:

```
State      Recv-Q Send-Q Local Address:Port   Peer Address:Port
ESTAB      0      0      192.168.1.10:443      142.250.190.14:52341
```

Esto indica que existe una conexión activa entre dos sistemas.

---

# Ver puertos en escucha

Muchos programas funcionan como **servidores**, esperando conexiones en un puerto específico.

Para ver qué servicios están escuchando conexiones se utiliza:

```bash
ss -l
```

Esto muestra puertos abiertos en el sistema.

---

# Ver puertos y procesos

También puedes ver qué procesos están asociados a conexiones de red usando:

```bash
sudo ss -tulnp
```

Este comando muestra:

- conexiones TCP y UDP
- puertos abiertos
- procesos asociados

Ejemplo de salida:

```
LISTEN 0 128 0.0.0.0:22 0.0.0.0:* users:(("sshd",pid=1045))
```

Esto indica que el servicio **SSH** está escuchando en el puerto 22.

---

# Qué es un puerto

En redes, un **puerto** identifica un servicio dentro de un dispositivo.

Un mismo sistema puede tener múltiples servicios escuchando en diferentes puertos.

Ejemplos comunes:

```
22   SSH
80   HTTP
443  HTTPS
```

Los puertos permiten que múltiples aplicaciones utilicen la red simultáneamente.

---

# Conexiones establecidas

Una conexión activa suele aparecer con el estado:

```
ESTAB
```

Esto significa **establecida**.

Indica que dos sistemas están intercambiando datos.

---

# Diagnóstico con conexiones activas

Ver conexiones activas es útil cuando:

- un servicio no responde
- se sospecha tráfico extraño
- se investiga qué programa usa la red
- se analiza actividad de un servidor

Estas herramientas ayudan a entender qué está ocurriendo en la red.

---

# Idea clave de esta lección

Linux permite observar conexiones activas y puertos abiertos usando herramientas como `ss`, lo que facilita el diagnóstico de problemas de red.

---

# Repaso

- Los sistemas Linux pueden tener múltiples conexiones activas.
- `ss` permite ver conexiones de red.
- `ss -l` muestra puertos en escucha.
- `ss -tulnp` muestra puertos y procesos asociados.
- Los puertos identifican servicios dentro del sistema.
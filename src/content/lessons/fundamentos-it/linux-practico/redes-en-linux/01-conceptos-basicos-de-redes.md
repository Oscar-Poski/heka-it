---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: redes-en-linux
lessonSlug: 01-conceptos-basicos-de-redes
title: "Conceptos básicos de redes"

summary: "Comprender los conceptos fundamentales de redes para entender cómo Linux se comunica con otras computadoras."

durationMinutes: 8

objectives:

- "Comprender qué es una red"
- "Identificar los componentes básicos de una red"
- "Entender cómo se comunican los dispositivos en una red"
    
order: 1
    

---

# Conceptos básicos de redes

Una **red** es un conjunto de dispositivos conectados entre sí que pueden comunicarse y compartir información.

Estos dispositivos pueden incluir:

- computadoras
- servidores
- routers
- impresoras
- teléfonos
- dispositivos IoT

Las redes permiten que los sistemas intercambien datos y accedan a servicios compartidos.

En Linux, comprender redes es fundamental para tareas como:

- conectarse a internet
- acceder a servidores remotos
- transferir archivos
- administrar sistemas a distancia

---

# Dispositivos en una red

En una red pueden existir diferentes tipos de dispositivos.

**Clientes**

Son dispositivos que solicitan servicios o recursos.

Ejemplos:

- computadoras personales
- laptops
- teléfonos

---

**Servidores**

Son sistemas que ofrecen servicios a otros dispositivos.

Ejemplos:

- servidores web
- servidores de archivos
- servidores de bases de datos

---

**Dispositivos de red**

También existen dispositivos que permiten conectar y dirigir el tráfico de la red.

Por ejemplo:

- routers
- switches
- puntos de acceso WiFi

---

# Qué es una dirección IP

Para que los dispositivos puedan comunicarse en una red, cada uno necesita una **dirección única**.

Esta dirección se llama:

**dirección IP**

Una dirección IP identifica un dispositivo dentro de una red.

Ejemplo de dirección IPv4:

```
192.168.1.10
```

Esta dirección permite que otros dispositivos sepan **a dónde enviar datos**.

---

# Redes locales e internet

Existen diferentes tipos de redes según su alcance.

**Red local (LAN)**

Una red local conecta dispositivos dentro de un espacio limitado.

Por ejemplo:

- una casa
- una oficina
- una escuela

---

**Internet**

Internet es una red global que conecta millones de redes alrededor del mundo.

Gracias a internet podemos:

- visitar sitios web
- enviar correos electrónicos
- acceder a servicios en la nube

---

# Cómo viajan los datos

La comunicación en redes ocurre mediante **paquetes de datos**.

Cuando un dispositivo envía información:

1. los datos se dividen en paquetes
2. los paquetes viajan a través de la red
3. el dispositivo destino reconstruye la información

Este proceso ocurre en fracciones de segundo.

---

# Protocolos de red

La comunicación entre dispositivos sigue reglas llamadas **protocolos de red**.

Un protocolo define cómo se envían y reciben los datos.

Algunos protocolos comunes incluyen:

- **TCP** → transmisión confiable de datos
- **UDP** → transmisión rápida de datos
- **HTTP** → comunicación web
- **DNS** → resolución de nombres de dominio

Estos protocolos hacen posible la comunicación entre sistemas.

---

# Importancia de redes en Linux

Linux es uno de los sistemas más utilizados en redes.

Muchos sistemas importantes dependen de Linux, por ejemplo:

- servidores web
- infraestructura cloud
- routers y dispositivos de red
- centros de datos

Por esta razón, comprender redes es una habilidad fundamental para trabajar con Linux.

---

# Idea clave de esta lección

Una red permite que múltiples dispositivos se comuniquen entre sí utilizando direcciones IP y protocolos de comunicación.

---

# Repaso

- Una red conecta dispositivos para compartir información.
- Los dispositivos en una red pueden ser clientes o servidores.
- Cada dispositivo tiene una dirección IP única.
- Los datos viajan en forma de paquetes.
- Los protocolos definen cómo se comunican los dispositivos.
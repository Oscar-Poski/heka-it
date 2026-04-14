---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-osi
lessonSlug: 02-intro-osi
title: 9.2 Enlace de Datos (Capa 2)

summary: Entender cómo los dispositivos cooperan en un mismo medio físico y cómo se organizan los datos en tramas.

durationMinutes: 8

objectives:

- Comprender el rol de la capa de Enlace de Datos
- Entender cómo se delimitan los paquetes
- Aprender cómo se comparte el medio
- Conocer el concepto de checksum
order: 40

---

## Idea general

### Idea clave

La capa de Enlace de Datos organiza la comunicación entre dispositivos conectados físicamente.

```mermaid
flowchart TD
    A[Datos] --> B[Tramas]
    B --> C[Transmisión en el medio]
```

---

## Qué problema resuelve

Cuando dos dispositivos están conectados físicamente:

- ¿Dónde empieza un paquete?
- ¿Dónde termina?
- ¿Quién puede transmitir?
- ¿Cómo detectamos errores?

---

## Delimitación de datos

### Idea clave

Define el inicio y fin de cada paquete (trama).

```mermaid
flowchart LR
    A[Inicio] --> B[Datos] --> C[Fin]
```

---

## Tramas (frames)

### Idea clave

La capa 2 trabaja con **tramas**, no paquetes.

```mermaid
flowchart TD
    A[Trama]
    A --> B[Cabecera]
    A --> C[Datos]
    A --> D[Checksum]
```

---

## Direcciones en capa 2

### Idea clave

Cada dispositivo tiene una dirección física.

- Dirección MAC
- Identifica dispositivos en la red local

```mermaid
flowchart LR
    A[Dispositivo A] -->|MAC destino| B[Dispositivo B]
```

---

## Medio compartido

### Idea clave

Varios dispositivos pueden usar el mismo canal.

```mermaid
flowchart TD
    A[WiFi / Cable compartido]
    A --> B[Equipo 1]
    A --> C[Equipo 2]
    A --> D[Equipo 3]
```

---

## Problema: colisiones

Si todos transmiten al mismo tiempo:

- Los datos se corrompen
- Nadie recibe correctamente

---

## Solución: coordinación

### Idea clave

La capa 2 define cómo compartir el medio.

```mermaid
flowchart TD
    A[Escuchar]
    B[Transmitir]
    C[Esperar]
    D[Reintentar]

    A --> B --> C --> D
```

---

## Ejemplo: WiFi / Ethernet

- Escuchar antes de transmitir
- Detectar colisiones
- Reintentar con retraso

---

## Detección de errores

### Idea clave

Se usa un **checksum** para validar datos.

```mermaid
flowchart LR
    A[Datos enviados] --> B[Checksum]
    B --> C[Validación]
    C --> D[Correcto o Error]
```

---

## Qué hace el checksum

- Detecta errores en transmisión
- A veces permite corregirlos
- Asegura integridad básica

---

## Relación con TCP/IP

### Idea clave

En TCP/IP, esta capa está incluida en "Acceso".

```mermaid
flowchart LR
    A[OSI]
    A --> B[Capa Física]
    A --> C[Capa Enlace]

    D[TCP/IP]
    D --> E[Capa de Acceso]

    B --> E
    C --> E
```

---

## Insight clave

### Idea clave

La capa 2 convierte señales en comunicación organizada.

- Señales → bits
- Bits → tramas
- Tramas → comunicación confiable local

---

## Resumen

- La capa de Enlace de Datos coordina dispositivos en un mismo medio
- Define inicio y fin de tramas
- Usa direcciones MAC
- Gestiona el acceso al medio compartido
- Detecta errores con checksum
- En TCP/IP forma parte de la capa de Acceso
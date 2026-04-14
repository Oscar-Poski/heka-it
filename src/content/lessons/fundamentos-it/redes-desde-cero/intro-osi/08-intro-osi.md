---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-osi
lessonSlug: 08-intro-osi
title: 9.8 Comparación de los modelos OSI y TCP/IP

summary: Entender cómo se relacionan y diferencian los modelos OSI y TCP/IP en la organización de las capas de red.

durationMinutes: 10

objectives:

- Comparar las capas de ambos modelos
- Entender cómo se agrupan funciones
- Identificar equivalencias entre capas
- Comprender cuándo usar cada modelo

order: 46

---

## Idea general

### Idea clave

OSI y TCP/IP describen lo mismo (cómo funciona la red), pero lo organizan de forma diferente.

```mermaid
flowchart LR
    A[Modelo OSI] --> B[7 capas]
    C[Modelo TCP/IP] --> D[4 capas]
```

---

## Comparación directa

### Idea clave

Las capas de ambos modelos se pueden mapear.

```mermaid
flowchart TD
    subgraph OSI
        A1[Aplicación]
        A2[Presentación]
        A3[Sesión]
        A4[Transporte]
        A5[Red]
        A6[Enlace]
        A7[Física]
    end

    subgraph TCP_IP
        B1[Aplicación]
        B2[Transporte]
        B3[Internet]
        B4[Acceso]
    end

    A1 --> B1
    A2 --> B1
    A3 --> B2
    A4 --> B2
    A5 --> B3
    A6 --> B4
    A7 --> B4
```

---

## Capa de Acceso

### Idea clave

TCP/IP combina dos capas de OSI.

- OSI: Física + Enlace de Datos
- TCP/IP: Acceso

```mermaid
flowchart LR
    A[Física] --> C[Acceso]
    B[Enlace] --> C
```

En la práctica:

- WiFi
- Ethernet
- Fibra

Todo suele venir integrado en hardware.

---

## Capa de Red vs Internet

### Idea clave

Son prácticamente equivalentes.

- OSI: Red
- TCP/IP: Internet (IP)

```mermaid
flowchart LR
    A[OSI - Red] --> B[TCP/IP - Internet]
```

Ambas:

- Usan direcciones IP
- Hacen routing
- Manejan múltiples saltos

---

## Capa de Transporte

### Idea clave

Se divide en OSI, pero se unifica en TCP/IP.

```mermaid
flowchart LR
    A[OSI - Transporte] --> C[TCP/IP - Transporte]
    B[OSI - Sesión] --> C
```

- OSI separa responsabilidades
- TCP/IP simplifica

---

## SSL / TLS

### Idea clave

No es una capa formal en TCP/IP, pero encaja entre capas.

```mermaid
flowchart LR
    A[TCP/IP Transporte] --> B[SSL/TLS] --> C[Aplicación]
```

En OSI corresponde a partes de:

- Sesión
- Presentación

---

## Capa de Aplicación

### Idea clave

TCP/IP agrupa varias capas de OSI.

```mermaid
flowchart LR
    A[OSI Aplicación] --> D[TCP/IP Aplicación]
    B[OSI Presentación] --> D
    C[OSI Sesión] --> D
```

En TCP/IP:

- Formato de datos
- Protocolos
- Lógica de aplicación
todo va junto.

---

## Diferencia filosófica

### Idea clave

Cada modelo tiene un propósito distinto.

```mermaid
flowchart LR
    A[OSI] --> B[Modelo teórico]
    C[TCP/IP] --> D[Modelo práctico]
```

---

## OSI

- Más detallado
- Más académico
- Mejor para aprender conceptos

---

## TCP/IP

- Más simple
- Más práctico
- Base del Internet real

---

## Insight clave

TCP/IP simplifica lo que OSI separa.

- Menos capas
- Más implementación real
- Menos abstracción

---

## Resumen

- OSI tiene 7 capas, TCP/IP tiene 4
- TCP/IP combina varias capas de OSI
- Red (OSI) ≈ Internet (TCP/IP)
- Transporte (TCP/IP) ≈ Transporte + Sesión (OSI)
- Aplicación (TCP/IP) ≈ Aplicación + Presentación + Sesión (OSI)
- OSI es teórico, TCP/IP es práctico
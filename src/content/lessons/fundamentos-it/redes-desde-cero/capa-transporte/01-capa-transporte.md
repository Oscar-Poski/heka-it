---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: capa-transporte
lessonSlug: 01-capa-transporte
title: 6.1 Cabeceras de paquetes y capa de Transporte

summary: Comprender cómo la capa de Transporte garantiza la fiabilidad mediante cabeceras y cómo se estructuran los paquetes en Internet.

durationMinutes: 9

objectives:

- Entender el rol de la capa de Transporte
- Comprender por qué Internet no garantiza entrega
- Identificar las cabeceras de un paquete
- Entender cómo se reconstruyen los mensajes
order: 24

---

## El problema: Internet no es perfecto

### Idea clave

La capa de Internet no garantiza que los paquetes lleguen.

```mermaid
flowchart TD
    A[Paquete enviado]
    A --> B[Llega]
    A --> C[Se pierde]
    A --> D[Llega tarde]
```

### Explicación

- Puede haber pérdidas
- Puede haber desorden
- Puede haber retrasos

---

## Necesidad de fiabilidad

### Idea clave

Los usuarios necesitan recibir mensajes completos y correctos.

```mermaid
flowchart TD
    A[Archivo enviado]
    A --> B[Todos los paquetes]
    B --> C[Mensaje reconstruido]
```

---

## Rol de la capa de Transporte

### Idea clave

Se encarga de asegurar la entrega correcta.

```mermaid
flowchart TD
    A[Internet]
    A --> B[No confiable]

    B --> C[Transporte]
    C --> D[Entrega confiable]
```

### Funciones

- Reordenar paquetes
- Detectar pérdidas
- Solicitar reenvíos

---

## Estructura de un paquete

### Idea clave

Un paquete tiene múltiples capas de información.

```mermaid
flowchart LR
    A[Cabecera Acceso]
    B[Cabecera IP]
    C[Cabecera TCP]
    D[Datos]

    A --> B --> C --> D
```

---

## Qué contiene cada cabecera

### Idea clave

Cada capa agrega información específica.

```mermaid
flowchart TD
    A[Acceso] --> B[Transmisión local]
    C[IP] --> D[Dirección origen/destino]
    E[TCP] --> F[Orden y control]
```

---

## Cabecera de acceso

### Idea clave

Se usa solo para el siguiente salto.

```mermaid
flowchart TD
    A[Router recibe]
    A --> B[Quita cabecera acceso]
    B --> C[Agrega nueva cabecera]
```

### Explicación

- Cambia en cada salto
- Depende del medio (WiFi, cable, etc.)

---

## Cabecera IP

### Idea clave

Se mantiene durante todo el viaje.

```mermaid
flowchart TD
    A[Origen IP]
    A --> B[Destino IP]
    B --> C[TTL]
```

### Explicación

- Dirección origen
- Dirección destino
- TTL (decrementa en cada salto)

---

## Cabecera TCP

### Idea clave

Indica cómo reconstruir el mensaje.

```mermaid
flowchart TD
    A[Paquete]
    A --> B[Offset - posición]
```

### Explicación

- Indica posición en el mensaje
- Permite ordenar paquetes
- Clave para reconstrucción

---

## Viaje del paquete

```mermaid
flowchart LR
    A[Origen] --> R1
    R1 --> R2
    R2 --> R3
    R3 --> D[Destino]
```

### Idea clave

- Cabecera acceso cambia
- IP y TCP permanecen

---

## Reensamblaje en destino

### Idea clave

El destino usa la información TCP para reconstruir.

```mermaid
flowchart TD
    A[Paquete 3]
    B[Paquete 1]
    C[Paquete 2]

    B --> D[Orden correcto]
    C --> D
    A --> D
```

### Explicación

- Los paquetes pueden llegar desordenados
- Se reorganizan usando offsets

---

## Insight clave 

Internet mueve paquetes, pero la capa de Transporte crea mensajes confiables.

- IP → entrega “lo mejor posible”
- TCP → garantiza orden y completitud

> Sin la capa de Transporte, Internet sería inutilizable para aplicaciones reales

---

## Resumen

- Internet no garantiza entrega
- Los paquetes pueden perderse o desordenarse
- La capa de Transporte asegura fiabilidad
- Los paquetes tienen múltiples cabeceras
- La cabecera de acceso cambia en cada salto
- La cabecera IP permanece
- La cabecera TCP permite reconstrucción
- El destino reorganiza los paquetes
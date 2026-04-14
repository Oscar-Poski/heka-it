---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-arquitectura
lessonSlug: 01-intro-arquitectura
title: 2.1 La capa de Acceso al medio

summary: Comprender cómo los dispositivos se conectan a una red local y cómo comparten un medio de transmisión.

durationMinutes: 8

objectives:

- Entender el modelo de capas TCP/IP
- Comprender el rol de la capa de acceso
- Conocer cómo se transmiten datos en medios físicos
- Entender cómo múltiples dispositivos comparten una red
order: 7

---

## Dividir un problema complejo

### Idea clave

Internet se diseñó dividiendo el problema en capas independientes.

```mermaid
flowchart TD
    A[Problema complejo: Internet]
    A --> B[Acceso al medio]
    A --> C[Internet]
    A --> D[Transporte]
    A --> E[Aplicación]
```

### Explicación

- En lugar de resolver todo de una vez
- Se divide en partes más pequeñas
- Cada capa resuelve un problema específico

---

## Modelo de capas (TCP/IP)

### Idea clave

Las capas se organizan como una pila.

```mermaid
flowchart TD
    A[Aplicación]
    B[Transporte]
    C[Internet]
    D[Acceso al medio]

    A --> B --> C --> D
```

### Explicación

- **Acceso**: conexión física
- **Internet**: direccionamiento y rutas
- **Transporte**: control de comunicación
- **Aplicación**: interacción con el usuario

---

## ¿Qué hace la capa de acceso?

### Idea clave

Conecta un dispositivo a su red local y mueve datos en un solo salto.

```mermaid
flowchart LR
    A[Dispositivo] --> B[Red local]
```

### Explicación

- Es el nivel más cercano al hardware
- Maneja conexiones físicas o inalámbricas
- Solo cubre distancias cortas

---

## Tipos de conexión en la capa de acceso

### Idea clave

Las conexiones tienen alcance limitado.

```mermaid
flowchart TD
    A[Dispositivo]
    A --> B[WiFi ~200m]
    A --> C[Celular ~km]
    A --> D[Cable ~100m]
```

### Explicación

- WiFi → corto alcance
- Celular → mayor alcance, pero depende de torres
- Cable → conexión física directa

---

## Problema 1: cómo enviar datos

### Idea clave

Hay que definir cómo representar los bits en el medio físico.

```mermaid
flowchart TD
    A[Datos digitales]
    A --> B[Señal eléctrica]
    A --> C[Señal de radio]
    A --> D[Señal de luz]
```

### Explicación

Dependiendo del medio:

- Cable → voltaje
- WiFi → ondas de radio
- Fibra → luz

---

## Problema 2: compartir el medio

### Idea clave

Múltiples dispositivos usan la misma red → riesgo de colisiones.

```mermaid
flowchart LR
    A[Dispositivo A] --> NET[Red compartida]
    B[Dispositivo B] --> NET
    C[Dispositivo C] --> NET
```

### Problema

- Si todos transmiten al mismo tiempo
- Los datos se mezclan
- Se genera ruido

---

## Solución: turnarse usando paquetes

### Idea clave

Dividir datos en paquetes permite compartir la red.

```mermaid
flowchart LR
    A[A envía paquete]
    B[B envía paquete]
    C[C envía paquete]

    A --> NET[Red]
    B --> NET
    C --> NET
```

### Explicación

- Cada dispositivo envía un paquete
- Luego espera
- Se alternan de forma ordenada

---

## Cómo sabe un dispositivo si puede transmitir

### Idea clave

Se usa un mecanismo llamado CSMA/CD.

---

## CSMA/CD explicado

```mermaid
flowchart TD
    A[Quiero enviar datos]
    A --> B[Escuchar red]
    B -->|Libre| C[Transmitir]
    B -->|Ocupada| D[Esperar]

    C --> E[Escuchar mientras transmite]
    E -->|Sin colisión| F[Continuar]
    E -->|Colisión| G[Detenerse]

    G --> H[Esperar tiempo aleatorio]
    H --> A
```

### Explicación

- Escucha si alguien está transmitiendo
- Si no, transmite
- Si detecta colisión:
    - Se detiene
    - Espera
    - Intenta de nuevo

---

## Qué es una colisión

### Idea clave

Ocurre cuando dos dispositivos transmiten al mismo tiempo.

```mermaid
flowchart LR
    A[Dispositivo A] --> NET[Red]
    B[Dispositivo B] --> NET

    NET --> X[Colisión]
```

### Explicación

- Los datos se mezclan
- No se pueden interpretar correctamente
- Se requiere reintento

---

## Compartición justa de la red

### Idea clave

El sistema permite uso eficiente tanto con pocos como con muchos dispositivos.

```mermaid
flowchart TD
    A[1 dispositivo]
    A --> B[Uso completo de red]

    C[Varios dispositivos]
    C --> D[Uso compartido equitativo]
```

### Explicación

- Un dispositivo → usa toda la red
- Muchos → se turnan automáticamente

---

## Tipos de redes en la capa de acceso

### Redes compartidas

- WiFi
- Celular
- Cable modem

### Redes no compartidas

- Fibra óptica dedicada
- Líneas arrendadas

```mermaid
flowchart TD
    A[Acceso]
    A --> B[Compartido]
    A --> C[No compartido]
```

---

## Salto (hop)

### Idea clave

Cada vez que un paquete pasa de un dispositivo a otro, realiza un salto.

```mermaid
flowchart LR
    A[Origen] -->|Hop 1| R1[Router]
    R1 -->|Hop 2| R2[Router]
    R2 -->|Hop 3| D[Destino]
```

### Explicación

- Cada salto usa la capa de acceso
- Internet completo = muchos saltos

---

## Viaje global de un paquete

```mermaid
flowchart LR
    A[Dispositivo] --> R1
    R1 --> R2
    R2 --> R3
    R3 --> R4
    R4 --> D[Destino]
```

### Idea clave

Un mensaje puede atravesar ~20 routers para llegar al otro lado del mundo.

---

## Insight clave (muy importante)


La capa de acceso permite que los datos se muevan en distancias cortas, pero es la base de todo Internet.

- Define cómo viajan los bits
- Permite compartir el medio
- Hace posibles los saltos

> Sin esta capa, nada podría transmitirse físicamente

---

## Resumen

- Internet se divide en capas para simplificar su diseño
- La capa de acceso conecta dispositivos a la red local
- Define cómo se transmiten los datos físicamente
- Gestiona redes compartidas
- Usa mecanismos como CSMA/CD para evitar colisiones
- Permite que múltiples dispositivos compartan el medio
- Cada transmisión entre nodos es un “salto”
- Muchos saltos permiten comunicación global
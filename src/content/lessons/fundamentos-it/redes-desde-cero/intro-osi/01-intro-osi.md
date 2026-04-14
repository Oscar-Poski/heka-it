---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-osi
lessonSlug: 01-intro-osi
title: 9.1 Modelo OSI y Capa Física (Capa 1)

summary: Comprender la diferencia entre el modelo TCP/IP y OSI, y entender el rol de la capa física en la transmisión de datos.

durationMinutes: 8

objectives:

- Entender qué es el modelo OSI
- Comparar OSI vs TCP/IP
- Conocer las 7 capas del modelo OSI
- Comprender el rol de la capa física
order: 39

---

## Dos formas de entender redes

### Idea clave

Existen dos modelos principales: TCP/IP y OSI.

```mermaid
flowchart TD
    A[Modelos de red]
    A --> B[TCP/IP]
    A --> C[OSI]
```

---

## Diferencia fundamental

### Idea clave

Cada modelo tiene un propósito distinto.

```mermaid
flowchart TD
    A[TCP/IP]
    A --> B[Modelo práctico]
    A --> C[Implementación real]

    D[OSI]
    D --> E[Modelo teórico]
    D --> F[Comprensión conceptual]
```

---

## Evolución de los modelos

```mermaid
timeline
    title Evolución de modelos de red
    1970s : Desarrollo TCP/IP (práctico)
    1980s : Diseño modelo OSI (teórico)
    Actualidad : TCP/IP domina implementación
```

---

## Número de capas

### Idea clave

OSI tiene más detalle que TCP/IP.

```mermaid
flowchart LR
    A[TCP/IP 4 capas]
    B[OSI 7 capas]

    A --> B
```

---

## Capas del modelo OSI

```mermaid
flowchart TD
    A[7. Aplicación]
    B[6. Presentación]
    C[5. Sesión]
    D[4. Transporte]
    E[3. Red]
    F[2. Enlace de datos]
    G[1. Física]

    A --> B --> C --> D --> E --> F --> G
```

---

## Comparación con TCP/IP

```mermaid
flowchart LR
    subgraph TCP/IP
        A1[Aplicación]
        A2[Transporte]
        A3[Internet]
        A4[Acceso]
    end

    subgraph OSI
        B1[Aplicación]
        B2[Presentación]
        B3[Sesión]
        B4[Transporte]
        B5[Red]
        B6[Enlace]
        B7[Física]
    end
```

---

## Enfoque del modelo OSI

### Idea clave

Divide el problema en más partes para entenderlo mejor.

- Más granular
- Más teórico
- Más descriptivo

---

## Capa Física

### Idea clave

Es la capa más cercana al mundo real.

```mermaid
flowchart LR
    A[Bits] --> B[Señales físicas]
    B --> C[Medio]
```

---

## Qué maneja la capa física

### Elementos

```mermaid
flowchart TD
    A[Capa Física]
    A --> B[Cables]
    A --> C[WiFi]
    A --> D[Fibra óptica]
    A --> E[Conectores]
```

---

## Problema clave

### Idea clave

Cómo representar bits en el mundo físico.

```mermaid
flowchart TD
    A[Datos digitales]
    B[Codificación]
    C[Señal física]

    A --> B --> C
```

---

## Ejemplo de codificación

```mermaid
flowchart LR
    A[1 y 0] --> B[Voltaje / Luz / Radio]
```

---

## Tipos de medios

```mermaid
flowchart TD
    A[Medios físicos]
    A --> B[Cable cobre]
    A --> C[Fibra óptica]
    A --> D[Ondas de radio]
```

---

## Velocidad de transmisión

### Idea clave

Depende de cómo se codifican los bits.

```mermaid
flowchart TD
    A[Codificación]
    A --> B[Velocidad]
    B --> C[Capacidad de red]
```

---

## Insight clave

### Idea clave

Todo Internet empieza en lo físico.

- Bits → señales
- Señales → medio
- Medio → transmisión

---

## Resumen

- Existen dos modelos: TCP/IP y OSI
- TCP/IP es práctico, OSI es teórico
- OSI tiene 7 capas
- TCP/IP tiene 4 capas
- La capa física es la base del modelo OSI
- Se encarga de cables, señales y medios
- Define cómo representar bits físicamente
- Determina la velocidad de transmisión
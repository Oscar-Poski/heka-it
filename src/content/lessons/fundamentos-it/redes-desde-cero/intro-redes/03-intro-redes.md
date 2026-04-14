---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-redes
lessonSlug: 03-intro-redes
title: 1.3 Primeras redes de área amplia

summary: Entender cómo surgieron las primeras redes de larga distancia usando el modelo de almacenamiento y reenvío.

durationMinutes: 5

objectives:

- Comprender cómo se lograba la comunicación a larga distancia con pocas conexiones
- Entender el concepto de almacenamiento y reenvío (store-and-forward)
- Visualizar cómo viajan los mensajes a través de múltiples equipos intermedios
order: 3

---

## El problema de la distancia en redes tempranas

### Idea clave

Las computadoras solo estaban conectadas a equipos cercanos debido al alto costo de las conexiones.

### Explicación

- En los años 70 y 80, las conexiones eran costosas
- Mientras más distancia, mayor el costo
- Las computadoras no podían conectarse directamente a sistemas lejanos

```mermaid
flowchart LR
    A[Computadora A] --> B[Computadora cercana]
    A -. conexión costosa .-> D[Computadora lejana]
```

---

## La idea clave: usar intermediarios

### Idea clave

Un mensaje podía viajar largas distancias pasando por múltiples computadoras intermedias.

### Explicación

- Si A está conectado a B
- Y B está conectado a C
- Y C está conectado a D

> Entonces A puede enviar un mensaje a D a través de la cadena

```mermaid
flowchart LR
    A[Origen] --> B[Intermedio 1]
    B --> C[Intermedio 2]
    C --> D[Destino]
```

---

## Concepto de almacenamiento y reenvío

### Idea clave

Cada computadora intermedia recibe el mensaje, lo guarda temporalmente y luego lo reenvía.

```mermaid
flowchart LR
    A[Origen] --> B[Almacena]
    B --> C[Reenvía]
    C --> D[Destino]
```

### Explicación

- El mensaje no viaja de forma continua
- Se detiene en cada punto intermedio
- Cada nodo decide cuándo enviarlo al siguiente

---

## Flujo completo de un mensaje

```mermaid
sequenceDiagram
    participant A as Origen
    participant B as Nodo 1
    participant C as Nodo 2
    participant D as Destino

    A->>B: Enviar mensaje
    B->>B: Almacenar
    B->>C: Reenviar
    C->>C: Almacenar
    C->>D: Reenviar
```

### Idea clave

El mensaje avanza paso a paso, no todo de una vez.

---

## Esperas en cada salto (hop)

### Idea clave

El mensaje puede quedarse esperando en cada nodo antes de continuar.

```mermaid
flowchart LR
    A[Origen] --> B[Nodo 1]
    B -->|Espera| B
    B --> C[Nodo 2]
    C -->|Espera| C
    C --> D[Destino]
```

### Explicación

- Cada nodo tiene una cola de mensajes
- El mensaje espera su turno
- El tiempo depende del tráfico

---

## Concepto de "salto" (hop)

### Idea clave

Cada vez que un mensaje pasa de una computadora a otra, ocurre un “salto”.

```mermaid
flowchart LR
    A[Origen] -->|Hop 1| B
    B -->|Hop 2| C
    C -->|Hop 3| D[Destino]
```

### Explicación

- Más distancia = más saltos
- Más saltos = más tiempo total

---

## Tiempo de entrega

### Idea clave

El tiempo total dependía de la suma de esperas en cada nodo.

```mermaid
flowchart TD
    A[Mensaje enviado]
    A --> B[Espera en nodo 1]
    B --> C[Espera en nodo 2]
    C --> D[Espera en nodo 3]
    D --> E[Llegada]
```

### Explicación

- Podía tardar:
    - Minutos
    - Horas
    - Incluso días
- Todo dependía del tráfico en la red

---

## Comparación con métodos tradicionales

### Idea clave

Aunque lento, este sistema era más eficiente que el correo físico.

```mermaid
flowchart LR
    A[Correo postal] --> B[Días o semanas]
    C[Red store-and-forward] --> D[Minutos o horas]
```

### Explicación

- Incluso con retrasos, era más rápido que enviar cartas
- Permitía comunicación digital a larga distancia por primera vez

---

## Ventaja clave del modelo

### Idea clave

Permite comunicación global usando pocas conexiones físicas.

```mermaid
flowchart TD
    A[Pocas conexiones]
    A --> B[Uso compartido de la red]
    B --> C[Mayor alcance]
```

### Explicación

- No necesitas conectar todo con todo
- Se reutilizan enlaces existentes
- La red crece de forma más eficiente

---

## Desventaja principal

### Idea clave

La comunicación no es inmediata.

```mermaid
flowchart TD
    A[Mensaje]
    A --> B[Se detiene]
    B --> C[Espera]
    C --> D[Continúa]
```

### Explicación

- No hay transmisión en tiempo real
- El mensaje viaja “por etapas”
- Puede haber grandes retrasos

---

## Insight clave (muy importante)

Aquí nace uno de los conceptos fundamentales de Internet:

> Los datos pueden viajar en partes, pasando por múltiples nodos, sin necesidad de conexión directa.

---

## Resumen

- Las computadoras estaban conectadas solo a equipos cercanos
- Los mensajes viajaban a través de múltiples nodos intermedios
- Cada nodo almacenaba y reenviaba el mensaje
- El tiempo dependía del tráfico en cada salto
- Este modelo permitió comunicación a larga distancia con pocas conexiones
- Fue una base fundamental para el desarrollo de Internet
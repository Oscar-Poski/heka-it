---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-redes
lessonSlug: 06-intro-redes
title: 1.6 Juntando todo

summary: Integrar los conceptos de paquetes, routers y direccionamiento para entender el funcionamiento básico de Internet.

durationMinutes: 6

objectives:

- Comprender cómo interactúan routers y paquetes en conjunto
- Entender el flujo completo de datos desde origen hasta destino
- Visualizar cómo Internet conecta múltiples redes
order: 6

---

## La visión completa

### Idea clave

Internet funciona gracias a routers que envían paquetes a través de múltiples saltos.

```mermaid
flowchart LR
    A[Origen] --> R1[Router]
    R1 --> R2[Router]
    R2 --> R3[Router]
    R3 --> B[Destino]
```

### Explicación

- Los datos no viajan directamente
- Pasan por varios routers intermedios
- Cada salto acerca el paquete a su destino

---

## Paquetes viajan de forma independiente

### Idea clave

Cada paquete es tratado como una unidad independiente.

```mermaid
flowchart LR
    P1[Paquete 1] --> R1[Router]
    P2[Paquete 2] --> R1
    P3[Paquete 3] --> R1
```

### Explicación

- No existe un “mensaje completo” en tránsito
- Solo paquetes individuales moviéndose en la red
- Cada uno se enruta por separado

---

## Diferentes rutas para un mismo mensaje

### Idea clave

Los paquetes de un mismo mensaje pueden tomar caminos distintos.

```mermaid
flowchart LR
    A[Origen] --> R1[Router]

    R1 --> R2[Router]
    R1 --> R3[Router]

    R2 --> D[Destino]
    R3 --> D
```

### Explicación

- La red decide dinámicamente
- No hay una única ruta fija
- Se optimiza el tráfico en tiempo real

---

## Llegada desordenada

### Idea clave

Los paquetes pueden llegar en diferente orden al que fueron enviados.

```mermaid
flowchart LR
    P2[Paquete 2] --> D[Destino]
    P1[Paquete 1] --> D
    P3[Paquete 3] --> D
```

### Explicación

- Diferentes rutas implican diferentes tiempos
- Puede haber congestión en algunos caminos
- El orden no está garantizado

---

## Reconstrucción del mensaje

### Idea clave

El destino usa el offset para reconstruir el mensaje original.

```mermaid
flowchart LR
    P2[Offset 2] --> D[Destino]
    P1[Offset 1] --> D
    P3[Offset 3] --> D

    D --> R[Reordenar]
    R --> M[Mensaje completo]
```

### Explicación

- Cada paquete tiene su posición
- El sistema reorganiza los datos
- Se reconstruye el mensaje correctamente

---

## Uso eficiente de la red

### Idea clave

Dividir en múltiples saltos reduce costos y mejora eficiencia.

```mermaid
flowchart TD
    A[Conexiones cortas]
    A --> B[Menor costo individual]
    B --> C[Uso compartido]
    C --> D[Mayor alcance global]
```

### Explicación

- No se necesitan conexiones directas largas
- Se reutilizan enlaces existentes
- El costo se distribuye entre muchos usuarios

---

## Adaptación dinámica de rutas

### Idea clave

Los routers pueden cambiar rutas si hay congestión o fallos.

```mermaid
flowchart LR
    A[Origen] --> R1[Router]
    R1 -->|Ruta óptima| R2[Router]
    R1 -->|Ruta alternativa| R3[Router]
    R2 --> D[Destino]
    R3 --> D
```

### Explicación

- Si un camino está saturado, se usa otro
- La red se adapta automáticamente
- Mejora la resiliencia

---

## El núcleo de Internet

### Idea clave

Internet es una red de routers que cooperan.

```mermaid
flowchart TD
    R1[Router]
    R2[Router]
    R3[Router]
    R4[Router]

    R1 --- R2
    R2 --- R3
    R3 --- R4
    R4 --- R1
```

### Explicación

- No hay un único centro
- Muchos routers trabajan juntos
- Manejan tráfico de múltiples orígenes y destinos

---

## Conexión de dispositivos a Internet

### Idea clave

Cada dispositivo se conecta a través de una red local y un router.

```mermaid
flowchart LR
    D1[Smartphone] --> LAN[Red local]
    D2[Laptop] --> LAN
    LAN --> R[Router]
    R --> I[Internet]
```

### Explicación

- Los dispositivos no se conectan directamente a todo Internet
- Usan una red local como intermediario
- El router conecta esa red al resto del mundo

---

## Internet = red de redes

### Idea clave

Internet conecta múltiples redes locales entre sí.

```mermaid
flowchart LR
    LAN1[Red local 1] --> R1[Router]
    R1 --> NET[Internet]
    NET --> R2[Router]
    R2 --> LAN2[Red local 2]
```

### Explicación

- Cada red local es independiente
- Internet las interconecta
- Permite comunicación global

---

## Insight clave (muy importante)


Internet no es una sola red, es una interconexión de muchas redes.

- Los paquetes viajan por múltiples routers
- Las rutas son dinámicas
- Los mensajes se reconstruyen al final
- Todo funciona de manera distribuida

> Esta arquitectura hace posible la escala global de Internet

---

## Resumen

- Los routers dirigen paquetes entre origen y destino
- Los paquetes viajan de forma independiente
- Pueden tomar diferentes rutas
- Pueden llegar en desorden
- El destino reconstruye el mensaje usando el offset
- La red optimiza rutas dinámicamente
- Internet es una red de routers interconectados
- Los dispositivos acceden a Internet a través de redes locales
---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-redes
lessonSlug: 04-intro-redes
title: 1.4 Paquetes y routers

summary: Comprender cómo la división en paquetes y el uso de routers hicieron posible una comunicación más eficiente y escalable en redes.

durationMinutes: 6

objectives:

- Entender qué son los paquetes y por qué son importantes
- Comprender cómo mejora la eficiencia al dividir mensajes
- Conocer el rol de los routers en una red
- Entender la relación entre LAN y WAN
order: 4

---

## El problema del modelo anterior

### Idea clave

Enviar mensajes completos era ineficiente y lento.

### Explicación

- Un mensaje largo ocupaba toda la conexión
- Otros mensajes debían esperar
- Se generaban grandes retrasos

```mermaid
flowchart LR
    A[Mensaje largo] -->|Ocupa toda la red| B[Conexión]
    C[Mensaje corto] -. espera .-> B
```

---

## La innovación: dividir en paquetes

### Idea clave

Los mensajes se dividen en fragmentos pequeños llamados paquetes.

```mermaid
flowchart LR
    M[Mensaje completo]
    M --> P1[Paquete 1]
    M --> P2[Paquete 2]
    M --> P3[Paquete 3]
    M --> P4[Paquete 4]
```

### Explicación

- Cada paquete se envía por separado
- No es necesario esperar a enviar todo el mensaje completo
- Permite mayor flexibilidad en la red

---

## Envío intercalado de paquetes

### Idea clave

Los paquetes de distintos mensajes pueden alternarse en la red.

```mermaid
flowchart LR
    L1[Largo P1] --> S1[Corto P1] --> L2[Largo P2] --> S2[Corto P2] --> L3[Largo P3]
```

### Explicación

- Un mensaje corto no tiene que esperar a que termine uno largo
- Solo espera al paquete actual en transmisión
- Mejora el tiempo de respuesta

---

## Comparación: antes vs ahora

```mermaid
flowchart TD
    A[Antes: mensaje completo]
    A --> B[Otros esperan]
    B --> C[Alta latencia]

    D[Ahora: paquetes]
    D --> E[Se intercalan]
    E --> F[Mejor eficiencia]
```

### Idea clave

Dividir en paquetes hace la red mucho más eficiente.

---

## Menor necesidad de almacenamiento

### Idea clave

Los nodos intermedios ya no necesitan almacenar mensajes completos.

```mermaid
flowchart LR
    A[Antes: mensaje completo] --> B[Mucho almacenamiento]
    C[Ahora: pocos paquetes] --> D[Poco almacenamiento]
```

### Explicación

- Antes: guardar mensajes por horas
- Ahora: guardar paquetes por segundos
- Reduce carga en la red

---

## Evolución: aparición de equipos especializados

### Idea clave

Se crearon dispositivos dedicados a mover paquetes en la red.

### Primer nombre

- **IMPs (Interface Message Processors)**

### Función

- Interconectar computadoras
- Gestionar el envío de paquetes

```mermaid
flowchart LR
    A[Computadora] --> IMP[IMP]
    IMP --> RED[Red]
```

---

## Nacimiento de los routers

### Idea clave

Los IMP evolucionaron a routers.

### Función del router

- Recibir paquetes
- Decidir a dónde enviarlos
- Encaminarlos hacia su destino

```mermaid
flowchart LR
    A[Origen] --> R1[Router]
    R1 --> R2[Router]
    R2 --> R3[Router]
    R3 --> B[Destino]
```

---

## Qué hace un router realmente

```mermaid
flowchart TD
    A[Paquete recibido]
    A --> B[Analiza destino]
    B --> C[Decide mejor ruta]
    C --> D[Reenvía paquete]
```

### Idea clave

El router actúa como un “director de tráfico” de la red.

---

## Interoperabilidad entre computadoras

### Idea clave

Los routers permiten conectar computadoras de diferentes fabricantes.

```mermaid
flowchart LR
    A[Computadora A] --> R[Router]
    B[Computadora B] --> R
    C[Computadora C] --> R
```

### Explicación

- Ya no importa cómo se comunican internamente
- El router maneja la comunicación externa
- Se facilita la estandarización

---

## Redes de Área Local (LAN)

### Idea clave

Una LAN conecta dispositivos en una misma ubicación.

```mermaid
flowchart TD
    R[Router]
    A[PC A] --> R
    B[PC B] --> R
    C[PC C] --> R
```

### Características

- Misma ubicación física
- Alta velocidad
- Bajo costo

---

## Redes de Área Amplia (WAN)

### Idea clave

Una WAN conecta múltiples redes locales entre sí.

```mermaid
flowchart LR
    LAN1[LAN 1] --> R1[Router]
    R1 --> WAN[Red amplia]
    WAN --> R2[Router]
    R2 --> LAN2[LAN 2]
```

### Explicación

- Permite comunicación entre ciudades o países
- Usa múltiples routers intermedios

---

## Conexión LAN → WAN

### Idea clave

El router conecta redes locales con redes globales.

```mermaid
flowchart LR
    A[Dispositivo en LAN] --> R[Router]
    R --> WAN[Internet / WAN]
```

### Explicación

- El router es la puerta de salida
- Permite que dispositivos locales accedan a redes externas

---

## Insight clave (muy importante)


Dividir datos en paquetes + usar routers permite:

- Escalabilidad
- Eficiencia
- Interoperabilidad

> Esta es la base del Internet moderno

---

## Resumen

- Los mensajes se dividen en paquetes
- Los paquetes se envían de forma independiente
- Se pueden intercalar paquetes de distintos mensajes
- Se reduce el almacenamiento en nodos intermedios
- Aparecen dispositivos especializados: routers
- Los routers dirigen los paquetes hacia su destino
- Se facilita la conexión entre diferentes sistemas
- Las LAN se conectan a WAN mediante routers
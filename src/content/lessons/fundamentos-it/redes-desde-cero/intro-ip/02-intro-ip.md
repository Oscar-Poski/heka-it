---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-ip
lessonSlug: 02-intro-ip
title: 4.2 Cómo determinan las rutas los routers

summary: Comprender cómo los routers descubren rutas y construyen tablas de enrutamiento para dirigir paquetes eficientemente.

durationMinutes: 8

objectives:

- Entender cómo los routers descubren rutas
- Comprender el concepto de tabla de enrutamiento
- Visualizar cómo los routers colaboran entre sí
- Entender cómo se optimiza el envío de paquetes
order: 16

---

## El problema del enrutamiento

### Idea clave

Un router necesita saber por dónde enviar cada paquete.

```mermaid
flowchart LR
    P[Paquete] --> R[Router]
    R --> ?[¿Qué ruta elegir?]
```

### Explicación

- Existen muchas posibles rutas
- El router debe elegir una salida
- Necesita información para decidir

---

## Un router nuevo

### Idea clave

Un router recién conectado no conoce todas las rutas.

```mermaid
flowchart TD
    R[Router nuevo]
    R --> A[Rutas conocidas pocas]
    R --> B[Rutas desconocidas muchas]
```

### Explicación

- Solo tiene información inicial
- Debe aprender el resto dinámicamente

---

## Descubrimiento de rutas

### Idea clave

Los routers preguntan a sus vecinos.

```mermaid
flowchart LR
    R1[Router nuevo] --> R2[Vecino]
    R2 --> R3[Vecino]
    R3 --> DEST[Red destino]
```

### Explicación

- Si no conoce la ruta → pregunta
- Los vecinos pueden responder
- O preguntar a otros routers

---

## Propagación de información

### Idea clave

La información sobre rutas se propaga entre routers.

```mermaid
flowchart TD
    A[Router A]
    A --> B[Router B]
    B --> C[Router C]
    C --> D[Router D]
```

### Explicación

- Los routers colaboran
- Comparten conocimiento
- La red se “auto-organiza”

---

## Construcción de la tabla de enrutamiento

### Idea clave

El router construye un mapa de rutas.

```mermaid
flowchart TD
    R[Router]
    R --> T[Tabla de enrutamiento]

    T --> N1[Red 1 → Salida A]
    T --> N2[Red 2 → Salida B]
    T --> N3[Red 3 → Salida C]
```

---

## Qué es una tabla de enrutamiento

### Idea clave

Es una lista que indica a dónde enviar paquetes según su destino.

```mermaid
flowchart LR
    IP[Dirección destino] --> T[Tabla]
    T --> OUT[Interfaz de salida]
```

### Explicación

- Relaciona redes con salidas
- Permite decisiones rápidas
- Es clave para el funcionamiento del router

---

## Primer paquete vs siguientes

### Idea clave

El router aprende una vez y reutiliza la información.

```mermaid
flowchart TD
    A[Primer paquete]
    A --> B[Descubrir ruta]
    B --> C[Guardar en tabla]

    D[Siguientes paquetes]
    D --> E[Usar tabla directamente]
```

### Explicación

- Primera vez → más trabajo
- Después → muy rápido
- Mejora eficiencia

---

## Optimización del enrutamiento

### Idea clave

Los routers evitan recalcular rutas constantemente.

```mermaid
flowchart TD
    A[Tabla actualizada]
    A --> B[Uso repetido]
    B --> C[Alta eficiencia]
```

### Explicación

- No se recalcula cada vez
- Se reutiliza conocimiento
- Reduce carga en la red

---

## Actualización de rutas

### Idea clave

Las rutas pueden cambiar si la red cambia.

```mermaid
flowchart TD
    A[Cambio en red]
    A --> B[Router detecta]
    B --> C[Actualiza tabla]
```

### Explicación

- Fallos o congestión
- Nuevas rutas disponibles
- Ajuste dinámico

---

## Escalabilidad del sistema

### Idea clave

El sistema funciona a escala global gracias a este mecanismo.

```mermaid
flowchart TD
    A[Miles de millones de dispositivos]
    A --> B[Agrupados en redes]
    B --> C[Tablas manejables]
```

### Explicación

- No se rastrean dispositivos individuales
- Solo redes
- Hace viable Internet

---

## Insight clave 

Los routers aprenden y colaboran para construir una visión distribuida de la red.

- No hay mapa central
- Cada router tiene su propia tabla
- La red funciona por cooperación

> Internet es un sistema distribuido e inteligente

---

## Resumen

- Los routers necesitan conocer rutas
- Un router nuevo no conoce todas las rutas
- Descubre rutas preguntando a vecinos
- La información se propaga entre routers
- Construyen tablas de enrutamiento
- Usan esas tablas para decisiones rápidas
- Aprenden una vez y reutilizan
- Se adaptan a cambios en la red
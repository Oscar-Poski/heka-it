---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-ip
lessonSlug: 03-intro-ip
title: 4.3 Cuando las cosas empeoran y mejoran

summary: Comprender cómo los routers se adaptan a fallos y optimizan rutas en una red dinámica como Internet.

durationMinutes: 8

objectives:

- Entender cómo reaccionan los routers ante fallos
- Comprender el concepto de red bi-conectada
- Visualizar cómo se reconstruyen rutas
- Entender cómo los routers optimizan continuamente
order: 17

---

## Problemas en la red

### Idea clave

Las conexiones pueden fallar y afectar el enrutamiento.

```mermaid
flowchart LR
    A[Router] --> X[Conexión caída]
```

### Explicación

- Fallos físicos (cables)
- Congestión
- Interrupciones externas

---

## Reacción ante fallos

### Idea clave

El router elimina rutas inválidas de su tabla.

```mermaid
flowchart TD
    A[Conexión falla]
    A --> B[Eliminar rutas asociadas]
    B --> C[Tabla actualizada]
```

### Explicación

- Detecta la falla
- Borra rutas que ya no funcionan
- Evita enviar paquetes por caminos inválidos

---

## Redescubrimiento de rutas

### Idea clave

El router vuelve a buscar rutas alternativas.

```mermaid
flowchart LR
    R[Router] --> V[Vecinos disponibles]
    V --> ALT[Ruta alternativa]
```

### Explicación

- Pregunta a otros routers
- Ignora la conexión caída
- Encuentra nuevos caminos

---

## Impacto temporal

### Idea clave

El rendimiento disminuye mientras se reconstruyen rutas.

```mermaid
flowchart TD
    A[Fallo]
    A --> B[Reconstrucción]
    B --> C[Recuperación]
```

### Explicación

- Más lento temporalmente
- Luego vuelve a la normalidad

---

## Red bi-conectada

### Idea clave

Una red es resiliente si tiene múltiples rutas.

```mermaid
flowchart LR
    A[Origen] --> R1[Router]
    R1 --> R2[Router]
    R1 --> R3[Router]
    R2 --> D[Destino]
    R3 --> D
```

### Explicación

- Al menos dos caminos
- Permite recuperación ante fallos
- Mejora disponibilidad

---

## Falta de redundancia

### Idea clave

Una sola conexión implica riesgo total.

```mermaid
flowchart LR
    A[Origen] --> R[Router] --> D[Destino]
    R -. falla .-> X[Sin conexión]
```

### Explicación

- Un fallo = desconexión total
- Común en hogares o escuelas

---

## Recuperación de conexiones

### Idea clave

Cuando vuelve una conexión, el router intenta usarla.

```mermaid
flowchart TD
    A[Conexión restaurada]
    A --> B[Router evalúa]
    B --> C[Actualiza tabla]
```

### Explicación

- Detecta nuevas oportunidades
- Mejora rutas existentes

---

## Optimización continua

### Idea clave

Los routers buscan constantemente mejores rutas.

```mermaid
flowchart TD
    A[Router]
    A --> B[Consulta vecinos]
    B --> C[Compara rutas]
    C --> D[Optimiza tabla]
```

### Explicación

- No solo reaccionan a fallos
- También mejoran rendimiento

---

## Intercambio de tablas

### Idea clave

Los routers comparten información entre sí.

```mermaid
flowchart LR
    R1[Router] <-->|Tabla parcial| R2[Router]
```

### Explicación

- Comparan rutas
- Detectan mejores caminos
- Actualizan información

---

## Cambio de rutas dinámico

### Idea clave

Los paquetes pueden seguir rutas diferentes en distintos momentos.

```mermaid
flowchart LR
    A[Origen] --> R1
    R1 --> R2
    R1 --> R3
    R2 --> D[Destino]
    R3 --> D
```

### Explicación

- La ruta no es fija
- Cambia según condiciones
- Optimiza velocidad y disponibilidad

---

## Desorden en paquetes

### Idea clave

Los paquetes pueden llegar en diferente orden.

```mermaid
flowchart LR
    P1[Paquete 1] --> D[Destino]
    P2[Paquete 2] --> D
```

### Explicación

- Rutas diferentes → tiempos distintos
- No es responsabilidad de IP
- Otra capa lo resuelve

---

## Analogía: correo postal

### Idea clave

Los paquetes viajan como cartas.

```mermaid
flowchart TD
    A[Cartas enviadas]
    A --> B[Rutas diferentes]
    B --> C[Llegadas en distinto orden]
```

### Explicación

- Cada paquete toma su camino
- No hay control exacto del recorrido
- Todos llegan eventualmente

---

## Insight clave

Internet es resiliente porque se adapta dinámicamente a fallos y cambios.

- No depende de rutas fijas
- Se auto-reconfigura
- Mejora continuamente

> Esta flexibilidad es clave para su funcionamiento global

---

## Resumen

- Las conexiones pueden fallar
- Los routers eliminan rutas inválidas
- Redescubren rutas alternativas
- La red se ralentiza temporalmente
- Las redes con múltiples rutas son más resilientes
- Los routers optimizan continuamente
- Las rutas pueden cambiar dinámicamente
- Los paquetes pueden llegar desordenados
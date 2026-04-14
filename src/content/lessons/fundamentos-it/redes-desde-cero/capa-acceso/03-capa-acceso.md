---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: capa-acceso
lessonSlug: 03-capa-acceso
title: 3.3 Coordinación en otras capas de Acceso (Token vs CSMA/CD)

summary: Comprender métodos alternativos de coordinación en redes compartidas, comparando CSMA/CD con el uso de testigo (token).

durationMinutes: 7

objectives:

- Entender el mecanismo de acceso por testigo (token)
- Comparar token vs CSMA/CD
- Identificar cuándo conviene usar cada método
- Comprender los trade-offs entre eficiencia y latencia
order: 14

---

## Problema: alta carga en la red

### Idea clave

Cuando muchos dispositivos transmiten constantemente, CSMA/CD puede no ser suficiente.

```mermaid
flowchart TD
    A[Muchos dispositivos]
    A --> B[Alta carga]
    B --> C[Mayor probabilidad de colisiones]
```

### Explicación

- Más tráfico → más colisiones
- Más colisiones → menor eficiencia

---

## Solución alternativa: el testigo (token)

### Idea clave

Solo el dispositivo que tiene el “testigo” puede transmitir.

```mermaid
flowchart LR
    A[Dispositivo A] --> B[Dispositivo B] --> C[Dispositivo C] --> D[Dispositivo D] --> A
```

### Explicación

- El testigo circula entre los dispositivos
- Define quién puede usar la red
- Evita colisiones completamente

---

## Funcionamiento del token

```mermaid
flowchart TD
    A[Recibo el token]
    A --> B{¿Tengo datos?}
    B -->|Sí| C[Transmitir paquete]
    B -->|No| D[Pasar token]
    C --> D
```

### Idea clave

Transmitir solo cuando tienes permiso.

---

## Analogía: hablar con una pelota

### Idea clave

Solo quien tiene la pelota puede hablar.

```mermaid
flowchart LR
    A[Persona A] --> B[Persona B] --> C[Persona C] --> D[Persona D] --> A
```

### Explicación

- La pelota = token
- Nadie interrumpe
- Comunicación ordenada

---

## Ventaja: cero colisiones

### Idea clave

El método elimina completamente las colisiones.

```mermaid
flowchart TD
    A[Token]
    A --> B[Control total]
    B --> C[Sin colisiones]
```

### Explicación

- No hay competencia
- No hay interferencias
- Uso eficiente bajo alta carga

---

## Desventaja: latencia

### Idea clave

Un dispositivo debe esperar su turno aunque la red esté libre.

```mermaid
flowchart TD
    A[Quiero transmitir]
    A --> B[Esperar token]
    B --> C[Transmitir]
```

### Explicación

- Puede haber retrasos innecesarios
- Incluso si nadie más transmite

---

## Problema con pocos dispositivos activos

### Idea clave

El token puede desperdiciar tiempo.

```mermaid
flowchart TD
    A[1 dispositivo activo]
    A --> B[Envía paquete]
    B --> C[Espera token]
    C --> D[Token recorre todos]
```

### Explicación

- El token pasa por equipos inactivos
- Se pierde tiempo
- Baja eficiencia en tráfico bajo

---

## Comparación: CSMA/CD vs Token

```mermaid
flowchart TD
    A[CSMA/CD]
    A --> B[Rápido en tráfico bajo]
    A --> C[Posibles colisiones]

    D[Token]
    D --> E[Sin colisiones]
    D --> F[Mayor latencia]
```

---

## Cuándo usar CSMA/CD

### Idea clave

Mejor para redes con tráfico irregular.

- WiFi
- Redes domésticas
- Oficinas
- Cafeterías

```mermaid
flowchart TD
    A[Tráfico bajo/intermitente]
    A --> B[CSMA/CD ideal]
```

---

## Cuándo usar token

### Idea clave

Mejor para redes con alta carga constante.

- Satélites
- Fibra de larga distancia
- Enlaces costosos

```mermaid
flowchart TD
    A[Alta carga constante]
    A --> B[Token ideal]
```

---

## Costo de colisiones

### Idea clave

En algunos medios, las colisiones son muy costosas.

```mermaid
flowchart TD
    A[Colisión]
    A --> B[Pérdida de datos]
    B --> C[Alto costo]
```

### Explicación

- Satélite → alto tiempo de ida y vuelta
- Fibra submarina → costosa
- Mejor evitarlas completamente

---

## Insight clave (muy importante)


No existe un único método perfecto: depende del contexto.

- CSMA/CD → flexible y rápido
- Token → ordenado y eficiente bajo carga

> Ingeniería = elegir el trade-off correcto

---

## Resumen

- Existen múltiples formas de coordinar redes compartidas
- CSMA/CD usa “escuchar e intentar”
- Token usa “turnos controlados”
- Token elimina colisiones
- Pero introduce latencia
- CSMA/CD es mejor para tráfico variable
- Token es mejor para tráfico constante
- La elección depende del tipo de red
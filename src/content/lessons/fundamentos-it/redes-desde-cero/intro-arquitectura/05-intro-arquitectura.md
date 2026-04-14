---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-arquitectura
lessonSlug: 05-intro-arquitectura
title: 2.5 Apilado de Capas

summary: Comprender cómo las capas del modelo TCP/IP trabajan juntas y cómo se distribuyen entre dispositivos finales y routers.

durationMinutes: 6

objectives:

- Entender cómo se organizan las capas en una pila
- Comprender cómo interactúan entre sí
- Diferenciar qué capas usan los dispositivos finales y los routers
- Entender cómo este modelo simplifica el desarrollo de aplicaciones
order: 11

---

## Representación en capas

### Idea clave

Las capas se representan como una pila donde cada una depende de las demás.

```mermaid
flowchart TD
    A[Aplicación]
    B[Transporte]
    C[Internet]
    D[Acceso]

    A --> B --> C --> D
```

### Explicación

- Aplicación → lo que usa el usuario
- Transporte → controla la comunicación
- Internet → enruta paquetes
- Acceso → mueve bits físicamente

---

## Interacción entre capas

### Idea clave

Cada capa usa los servicios de la capa inferior.

```mermaid
flowchart TD
    A[Aplicación] -->|Usa| B[Transporte]
    B -->|Usa| C[Internet]
    C -->|Usa| D[Acceso]
```

### Explicación

- No trabajan de forma aislada
- Cada capa delega responsabilidades
- Se construyen una sobre otra

---

## Capas en el cliente y el servidor

### Idea clave

Todas las capas existen tanto en el origen como en el destino.

```mermaid
flowchart LR
    subgraph Cliente
        A1[Aplicación]
        B1[Transporte]
        C1[Internet]
        D1[Acceso]
    end

    subgraph Servidor
        A2[Aplicación]
        B2[Transporte]
        C2[Internet]
        D2[Acceso]
    end

    D1 --> D2
```

### Explicación

- Cliente y servidor tienen la misma estructura
- La comunicación ocurre entre capas equivalentes

---

## Qué ve el usuario

### Idea clave

El usuario solo interactúa con la capa de aplicación.

```mermaid
flowchart TD
    U[Usuario] --> A[Aplicación]
    A --> B[Capas inferiores]
```

### Explicación

- Navegador, app, etc.
- Todo lo demás ocurre “debajo”
- Es invisible para el usuario

---

## Qué hacen los routers

### Idea clave

Los routers solo operan en capas inferiores.

```mermaid
flowchart TD
    R[Router]
    R --> C[Internet]
    R --> D[Acceso]
```

### Explicación

- No entienden aplicaciones
- No gestionan transporte
- Solo leen direcciones y reenvían paquetes

---

## Flujo de datos completo

```mermaid
flowchart LR
    A[Aplicación origen]
    A --> B[Transporte]
    B --> C[Internet]
    C --> D[Acceso]
    D --> R[Router]
    R --> D2[Acceso]
    D2 --> C2[Internet]
    C2 --> B2[Transporte]
    B2 --> A2[Aplicación destino]
```

### Idea clave

Los datos bajan por las capas en el origen y suben en el destino.

---

## Encapsulamiento (concepto clave)

### Idea clave

Cada capa agrega información al paquete.

```mermaid
flowchart TD
    A[Datos de aplicación]
    A --> B[+ Cabecera Transporte]
    B --> C[+ Cabecera Internet]
    C --> D[+ Cabecera Acceso]
```

### Explicación

- Cada capa añade información
- Esto permite que cada capa cumpla su función
- El proceso se invierte en el destino

---

## Simplificación para desarrolladores

### Idea clave

Los desarrolladores no necesitan entender todas las capas.

```mermaid
flowchart TD
    Dev[Desarrollador]
    Dev --> T[Transporte]
    T --> X[Capas inferiores abstractas]
```

### Explicación

- Se programa sobre TCP/UDP
- No es necesario manejar routers o cables
- El modelo abstrae la complejidad

---

## Ventaja del modelo por capas

### Idea clave

Permite construir sistemas complejos de forma modular.

```mermaid
flowchart TD
    A[Separación de responsabilidades]
    A --> B[Mayor simplicidad]
    B --> C[Facilidad de desarrollo]
    C --> D[Escalabilidad]
```

### Explicación

- Cada capa resuelve un problema
- Se pueden mejorar de forma independiente
- Facilita evolución del sistema

---

## Insight clave (muy importante)


El modelo en capas permite que Internet sea entendible, escalable y programable.

- Abstrae la complejidad
- Divide responsabilidades
- Permite innovación en cada nivel

> Es una de las ideas más importantes en toda la ingeniería de redes

---

## Resumen

- Las capas se organizan como una pila
- Cada capa depende de la inferior
- Cliente y servidor tienen todas las capas
- El usuario solo interactúa con la capa de aplicación
- Los routers operan en Internet y Acceso
- Los datos bajan y suben por las capas
- El modelo simplifica el desarrollo
- Permite construir sistemas complejos de forma modular
---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-seguridad
lessonSlug: 03-intro-seguridad
title: 8.3 Capa de Sockets Seguros (SSL/TLS)

summary: Entender cómo se añadió seguridad a Internet sin cambiar su arquitectura mediante SSL/TLS.

durationMinutes: 8

objectives:

- Comprender qué es SSL/TLS
- Entender dónde se ubica en el modelo de capas
- Ver cómo permite cifrado sin modificar Internet
- Entender por qué fue una solución elegante
order: 36

---

## Problema inicial

### Idea clave

Internet ya estaba construido cuando surgió la necesidad de seguridad.

```mermaid
flowchart TD
    A[Internet existente]
    B[Protocolos establecidos]
    C[Necesidad de seguridad]

    A --> B --> C
```

---

## Restricción importante

### Idea clave

No se podían cambiar los protocolos existentes.

- Routers ya desplegados
- Infraestructura global
- Millones de dispositivos

```mermaid
flowchart TD
    A[Modificar Internet]
    A --> B[Muy costoso]
    A --> C[Impráctico]
```

---

## Solución clave

### Idea clave

Agregar una nueva capa sin romper lo existente.

```mermaid
flowchart TD
    A[Aplicación]
    B[SSL/TLS]
    C[Transporte]
    D[Internet]
    E[Acceso]

    A --> B --> C --> D --> E
```

---

## Posición en la arquitectura

### Idea clave

SSL/TLS se ubica entre Aplicación y Transporte.

```mermaid
flowchart LR
    APP[Aplicación]
    SSL[SSL/TLS]
    TCP[Transporte]
    IP[Internet]

    APP --> SSL --> TCP --> IP
```

---

## Cómo funciona

### Idea clave

El cifrado ocurre antes de enviar los datos.

```mermaid
flowchart TD
    A[Datos]
    B[Encriptar]
    C[Paquetes]
    D[Red]

    A --> B --> C --> D
```

---

## Flujo completo

```mermaid
sequenceDiagram
    participant App as Aplicación
    participant SSL as SSL/TLS
    participant Net as Red
    participant SSL2 as SSL/TLS destino
    participant App2 as Aplicación destino

    App->>SSL: Datos
    SSL->>SSL: Encriptar
    SSL->>Net: Enviar
    Net->>SSL2: Recibir
    SSL2->>SSL2: Desencriptar
    SSL2->>App2: Datos originales
```

---

## Transparencia para la red

### Idea clave

Las capas inferiores no saben que los datos están cifrados.

```mermaid
flowchart TD
    A[Datos cifrados]
    B[Transporte]
    C[Internet]
    D[Acceso]

    A --> B --> C --> D
```

---

## Ventaja clave

### Idea clave

No fue necesario cambiar nada en la infraestructura.

```mermaid
flowchart TD
    A[SSL/TLS]
    A --> B[Sin cambios en routers]
    A --> C[Sin cambios en hardware]
    A --> D[Compatibilidad total]
```

---

## Impacto en aplicaciones

### Idea clave

Las aplicaciones solo indican si quieren cifrado.

```mermaid
flowchart LR
    A[Aplicación]
    B[Solicita conexión segura]
    C[SSL/TLS activa cifrado]

    A --> B --> C
```

---

## Ejemplo real

### HTTP vs HTTPS

```mermaid
flowchart LR
    A[HTTP] --> B[Sin cifrado]
    C[HTTPS] --> D[Con SSL/TLS]
```

---

## Insight clave

### Idea clave

SSL/TLS es una “capa invisible” de seguridad.

- No rompe Internet
- No cambia protocolos base
- Añade seguridad de forma modular

---

## Por qué fue una solución brillante

```mermaid
flowchart TD
    A[Problema complejo]
    B[Solución simple]
    C[Adopción global]

    A --> B --> C
```

---

## Resumen

- Internet no fue diseñado con seguridad
- No era viable modificar su infraestructura
- Se creó SSL/TLS como capa adicional
- Se ubica entre Aplicación y Transporte
- Encripta datos antes de enviarlos
- Las capas inferiores no cambian
- No requiere cambios en routers ni hardware
- Las aplicaciones solo solicitan conexiones seguras
- Permite seguridad sin romper Internet
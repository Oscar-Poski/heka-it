---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: capa-transporte
lessonSlug: 04-capa-transporte
title: 6.4 Aplicaciones cliente/servidor y puertos

summary: Comprender cómo las aplicaciones se comunican a través de la capa de Transporte usando el modelo cliente/servidor y el concepto de puertos.

durationMinutes: 10

objectives:

- Entender el modelo cliente/servidor
- Comprender el concepto de puertos
- Identificar cómo se conectan aplicaciones específicas
- Conocer puertos comunes y su uso
order: 27

---

## Modelo cliente/servidor

### Idea clave

Las aplicaciones funcionan en pares: cliente y servidor.

```mermaid
flowchart LR
    A[Cliente] --> B[Servidor]
    B --> A
```

### Explicación

- Cliente → inicia la conexión
- Servidor → responde

---

## Ejemplo real

### Idea clave

Tu navegador es un cliente.

```mermaid
flowchart LR
    A[Navegador] --> B[Servidor Web]
    B --> A
```

---

## Qué hace la capa de Transporte

### Idea clave

Hace que la comunicación entre aplicaciones sea confiable.

```mermaid
flowchart TD
    A[Aplicación cliente]
    A --> B[Capa de Transporte]
    B --> C[Red]
    C --> D[Capa de Transporte]
    D --> E[Aplicación servidor]
```

---

## Problema: múltiples aplicaciones en un mismo equipo

### Idea clave

Un servidor puede ejecutar muchas aplicaciones al mismo tiempo.

```mermaid
flowchart TD
    A[Servidor]
    A --> B[Web]
    A --> C[Correo]
    A --> D[Video]
```

---

## Solución: puertos

### Idea clave

Los puertos identifican aplicaciones dentro de un equipo.

```mermaid
flowchart TD
    A[IP: 192.168.1.1]
    A --> B[Puerto 80 - Web]
    A --> C[Puerto 25 - Mail]
    A --> D[Puerto 22 - SSH]
```

---

## Analogía: número telefónico

### Idea clave

IP = número principal, puerto = extensión.

```mermaid
flowchart TD
    A[Número telefónico] --> B[Extensión 1]
    A --> C[Extensión 2]
    A --> D[Extensión 3]
```

---

## Flujo de conexión

```mermaid
sequenceDiagram
    participant C as Cliente
    participant S as Servidor

    C->>S: IP + Puerto
    S->>C: Respuesta
```

---

## Servidor en “escucha”

### Idea clave

El servidor espera conexiones en un puerto específico.

```mermaid
flowchart TD
    A[Servidor] --> B[Escuchando puerto]
    B --> C[Esperando conexión]
```

---

## Puertos más comunes

### Idea clave

Existen puertos estándar conocidos.

```mermaid
flowchart TD
    A[Puertos]
    A --> B[80 - HTTP]
    A --> C[443 - HTTPS]
    A --> D[22 - SSH]
    A --> E[25 - SMTP]
    A --> F[53 - DNS]
```

---

## Ejemplo con URL y puerto

```mermaid
flowchart TD
    A[http://ejemplo.com:8080]
    A --> B[Dominio]
    A --> C[Puerto 8080]
```

### Explicación

- Por defecto → puerto 80
- Aquí → puerto 8080

---

## Puertos no estándar

### Idea clave

Se pueden usar puertos personalizados.

```mermaid
flowchart TD
    A[Servidor Web]
    A --> B[Puerto 80]
    A --> C[Puerto 3000]
    A --> D[Puerto 8080]
```

---

## Flujo completo

```mermaid
flowchart LR
    C[Cliente] --> T[TCP]
    T --> IP[IP]
    IP --> S[Servidor]

    S --> APP[Aplicación correcta]
```

---

## Rol de la capa de Transporte en todo esto

### Idea clave

Permite que las aplicaciones no se preocupen por la red.

```mermaid
flowchart TD
    A[Aplicación]
    A --> B[Transporte]
    B --> C[Internet]
```

### Explicación

- Maneja errores
- Reenvía datos
- Controla flujo

---

## Arquitectura en capas

### Idea clave

Cada capa resuelve una parte del problema.

```mermaid
flowchart TD
    A[Aplicación]
    B[Transporte]
    C[Internet]
    D[Acceso]

    A --> B --> C --> D
```

---

## Insight clave 
IP identifica máquinas, puertos identifican aplicaciones.

- IP → “dónde”
- Puerto → “qué aplicación”

> Ambos son necesarios para comunicar software en red

---

## Resumen

- Las aplicaciones usan el modelo cliente/servidor
- El cliente inicia la conexión
- El servidor responde
- Un mismo equipo puede tener múltiples servicios
- Los puertos identifican cada servicio
- Existen puertos estándar
- Se pueden usar puertos personalizados
- La capa de Transporte hace posible todo esto de forma confiable
- Las capas simplifican el diseño del sistema
---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-seguridad
lessonSlug: 01-intro-seguridad
title: 8.1 Encriptación y seguridad en Internet

summary: Comprender por qué la seguridad es necesaria en Internet y cómo la encriptación protege los datos.

durationMinutes: 10

objectives:

- Entender por qué Internet necesita seguridad
- Conocer los riesgos de transmitir datos sin protección
- Comprender el concepto de encriptación
- Aprender la idea básica del cifrado
order: 34

---

## Evolución del problema

### Idea clave

Internet no fue diseñado originalmente para ser seguro.

```mermaid
flowchart LR
    A[Internet inicial] --> B[Red pequeña]
    B --> C[Entorno confiable]
    C --> D[Sin enfoque en seguridad]
```

---

## Cambio con el crecimiento

### Idea clave

La seguridad se volvió crítica cuando Internet creció.

```mermaid
timeline
    title Evolución de la seguridad en Internet
    1980s : Redes pequeñas
    1990s : Expansión global
    1994 : Nace la Web
    2000s : Comercio electrónico
    Actualidad : Datos sensibles en todo momento
```

---

## Problema de seguridad

### Idea clave

Los datos viajan por medios inseguros.

```mermaid
flowchart LR
    A[Usuario] --> B[Internet]
    B --> C[Servidor]

    D[Atacante] -. escucha .-> B
```

---

## Métodos para proteger datos

### Enfoque 1: Seguridad física

```mermaid
flowchart TD
    A[Proteger routers]
    A --> B[Ubicaciones seguras]
    B --> C[Difícil de implementar]
```

### Problema

- Muchas redes
- Muchos operadores
- WiFi rompe el modelo

---

## Problema con WiFi

### Idea clave

En redes inalámbricas, cualquiera puede escuchar.

```mermaid
flowchart LR
    A[Dispositivo] -->|Señal WiFi| B[Router]
    C[Atacante] -. intercepta .-> A
    C -. intercepta .-> B
```

---

## Solución real

### Idea clave

Encriptar los datos antes de enviarlos.

```mermaid
flowchart LR
    A[Texto original] --> B[Encriptar]
    B --> C[Datos cifrados]
    C --> D[Internet]
    D --> E[Desencriptar]
    E --> F[Texto original]
```

---

## Qué logra la encriptación

### Beneficios

```mermaid
flowchart TD
    A[Encriptación]
    A --> B[Confidencialidad]
    A --> C[Integridad]
    A --> D[Protección contra espías]
```

---

## Conceptos clave

### Definiciones

- **Texto plano**: mensaje original
- **Texto cifrado**: mensaje codificado
- **Encriptar**: convertir a cifrado
- **Desencriptar**: recuperar original

---

## Ejemplo histórico: Cifrado César

### Idea clave

Uno de los primeros métodos de encriptación.

```mermaid
flowchart LR
    A[A] --> B[B]
    B --> C[C]
    C --> D[D]
```

---

## Ejemplo práctico

### Transformación

```mermaid
flowchart TD
    A[Texto plano: Id hacia el río]
    B[Aplicar desplazamiento +1]
    C[Texto cifrado: Je ibdjb fm sjp]

    A --> B --> C
```

---

## Flujo de comunicación segura

```mermaid
sequenceDiagram
    participant Emisor
    participant Internet
    participant Receptor

    Emisor->>Emisor: Encriptar mensaje
    Emisor->>Internet: Enviar datos cifrados
    Internet-->>Receptor: Datos interceptables
    Receptor->>Receptor: Desencriptar mensaje
```

---

## Problema del cifrado simple

### Idea clave

Los métodos simples son fáciles de romper.

```mermaid
flowchart TD
    A[Cifrado simple]
    A --> B[Fácil de descifrar]
    B --> C[Inseguro hoy]
```

---

## Encriptación moderna

### Idea clave

Se basa en claves secretas.

```mermaid
flowchart LR
    A[Clave secreta] --> B[Encriptar]
    A --> C[Desencriptar]
```

---

## Insight clave

Hoy asumimos que la red es insegura.

- Cualquiera puede ver los paquetes
- La seguridad depende de la encriptación
- No del medio físico

---

## Resumen

- Internet no fue diseñado inicialmente con seguridad
- El crecimiento hizo necesaria la protección de datos
- No es viable proteger toda la infraestructura
- En redes inalámbricas, los datos pueden ser interceptados
- La solución es encriptar los datos antes de enviarlos
- El receptor desencripta para recuperar el mensaje
- El cifrado usa claves secretas
- Métodos simples como el Cifrado César ya no son seguros
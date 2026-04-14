---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-seguridad
lessonSlug: 02-intro-seguridad
title: 8.2 Dos tipos de secretos

summary: Entender la diferencia entre cifrado con clave compartida y cifrado asimétrico, y por qué este último hizo posible la seguridad en Internet.

durationMinutes: 10

objectives:

- Comprender el problema del secreto compartido
- Entender por qué no escala en Internet
- Aprender el concepto de clave pública y privada
- Visualizar cómo funciona el cifrado asimétrico
order: 35

---

## Idea general

### Idea clave

Existen dos formas principales de proteger datos con secretos.

```mermaid
flowchart TD
    A[Encriptación]
    A --> B[Clave compartida]
    A --> C[Clave pública/privada]
```

---

## Método tradicional

### Idea clave

Usar un secreto compartido entre emisor y receptor.

```mermaid
flowchart LR
    A[Emisor] -->|Secreto compartido| B[Receptor]
    A -->|Mensaje cifrado| B
```

---

## Problema del secreto compartido

### Idea clave

No escala en Internet.

```mermaid
flowchart TD
    A[Millones de usuarios]
    B[Secreto por cada par]
    C[Imposible de gestionar]

    A --> B --> C
```

---

## Ejemplo del mundo real

### Idea clave

Antes se compartían secretos manualmente.

```mermaid
sequenceDiagram
    participant A as Usuario A
    participant B as Usuario B

    A->>B: Llamada telefónica
    A->>B: Compartir contraseña
```

---

## Problema crítico

### Idea clave

Si el secreto viaja por la red, puede ser interceptado.

```mermaid
flowchart LR
    A[Emisor] -->|Secreto| B[Internet]
    B --> C[Receptor]
    D[Atacante] -. captura .-> B
```

---

## Ataque posible

### Idea clave

Un atacante puede modificar mensajes.

```mermaid
sequenceDiagram
    participant E as Emisor
    participant A as Atacante
    participant R as Receptor

    E->>A: Mensaje cifrado
    A->>A: Desencripta
    A->>A: Modifica
    A->>R: Mensaje alterado
```

---

## Conclusión del problema

### Idea clave

El secreto compartido no es viable a gran escala.

- Difícil de distribuir
- Fácil de interceptar
- Vulnerable a ataques

---

## Solución: cifrado asimétrico

### Idea clave

Usar dos claves diferentes.

```mermaid
flowchart LR
    A[Clave pública] --> B[Encriptar]
    C[Clave privada] --> D[Desencriptar]
```

---

## Funcionamiento

### Paso a paso

```mermaid
flowchart TD
    A[Receptor genera claves]
    B[Comparte clave pública]
    C[Emisor cifra mensaje]
    D[Mensaje viaja]
    E[Receptor descifra]

    A --> B --> C --> D --> E
```

---

## Flujo completo

```mermaid
sequenceDiagram
    participant R as Receptor
    participant E as Emisor

    R->>E: Clave pública
    E->>E: Encripta mensaje
    E->>R: Mensaje cifrado
    R->>R: Desencripta con clave privada
```

---

## Diferencia clave

### Idea clave

Una clave se comparte, la otra no.

```mermaid
flowchart TD
    A[Clave pública]
    B[Clave privada]

    A --> C[Se puede compartir]
    B --> D[Se mantiene secreta]
```

---

## Seguridad del sistema

### Idea clave

No puedes obtener la clave privada fácilmente.

```mermaid
flowchart TD
    A[Clave pública + datos]
    B[Matemática compleja]
    C[Clave privada]

    A --> B --> C
    B --> D[Prácticamente imposible]
```

---

## Beneficio principal

### Idea clave

Permite comunicación segura sin compartir secretos previamente.

```mermaid
flowchart TD
    A[Sin contacto previo]
    B[Intercambio seguro]
    C[Escalable a millones]

    A --> B --> C
```

---

## Insight clave

La clave pública resolvió el problema de Internet.

- No necesitas confiar en la red
- No necesitas compartir secretos previamente
- Escala globalmente

---

## Resumen

- El cifrado tradicional usa un secreto compartido
- Este método no escala en Internet
- Compartir secretos por red es inseguro
- Los atacantes pueden interceptar y modificar mensajes
- El cifrado asimétrico usa dos claves
- La clave pública se comparte
- La clave privada se mantiene secreta
- Es prácticamente imposible derivar la clave privada
- Este modelo permite comunicación segura global
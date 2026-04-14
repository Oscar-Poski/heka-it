---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-seguridad
lessonSlug: 05-intro-seguridad
title: 8.5 Certificados y Autoridades de Certificación

summary: Comprender cómo los certificados digitales permiten confiar en la identidad de los servidores en Internet.

durationMinutes: 10

objectives:

- Entender el problema de autenticidad en Internet
- Comprender el ataque de suplantación
- Aprender qué es un certificado digital
- Entender el rol de las Autoridades de Certificación (CA)
order: 38

---

## Problema fundamental

### Idea clave

El cifrado no garantiza que estás hablando con el servidor correcto.

```mermaid
flowchart LR
    A[Usuario] --> B[Servidor supuesto]
```

---

## Ataque posible

### Idea clave

Un atacante puede hacerse pasar por un servidor legítimo.

```mermaid
flowchart LR
    U[Usuario] --> M[Atacante]
    M --> S[Servidor real]

    M -. se hace pasar por .-> S
```

---

## Escenario de ataque

```mermaid
sequenceDiagram
    participant U as Usuario
    participant A as Atacante

    U->>A: Solicita conexión
    A->>U: Envía clave pública falsa
    U->>A: Datos cifrados
    A->>A: Desencripta datos
```

---

## Problema clave

### Idea clave

¿Cómo saber si una clave pública es legítima?

- No basta con recibir una clave
- Necesitamos verificar su origen

---

## Solución: certificados digitales

### Idea clave

Una clave pública viene acompañada de una firma confiable.

```mermaid
flowchart TD
    A[Clave pública]
    B[Firma digital]
    C[Certificado]

    A --> C
    B --> C
```

---

## Autoridades de Certificación (CA)

### Idea clave

Entidades confiables que validan identidades.

```mermaid
flowchart LR
    CA[Autoridad de Certificación]
    S[Servidor]
    U[Usuario]

    CA -->|Firma| S
    U -->|Confía en| CA
```

---

## Flujo de confianza

```mermaid
sequenceDiagram
    participant U as Navegador
    participant S as Servidor
    participant CA as Autoridad Certificadora

    S->>U: Certificado (clave pública + firma)
    U->>CA: Verifica firma
    CA-->>U: Válido
    U->>S: Conexión segura
```

---

## Qué contiene un certificado

### Elementos

```mermaid
flowchart TD
    A[Certificado]
    A --> B[Clave pública]
    A --> C[Identidad del servidor]
    A --> D[Firma de CA]
```

---

## Qué pasa si no es confiable

### Idea clave

El navegador advierte al usuario.

```mermaid
flowchart TD
    A[Certificado no válido]
    A --> B[Advertencia]
    B --> C[Usuario decide]
```

---

## Indicadores en navegador

### Idea clave

HTTPS + candado indican conexión verificada.

```mermaid
flowchart LR
    A[https://] --> B[Certificado válido]
    B --> C[Confianza]
```

---

## Relación con SSL/TLS

### Idea clave

Los certificados funcionan dentro de SSL/TLS.

```mermaid
flowchart TD
    A[SSL/TLS]
    A --> B[Cifrado]
    A --> C[Verificación de identidad]
```

---

## Importancia en WiFi

### Idea clave

Protege incluso en redes inseguras.

```mermaid
flowchart LR
    A[Usuario] -->|WiFi| B[Internet]
    C[Atacante] -. escucha .-> B

    A -->|HTTPS| B
```

---

## Insight clave

### Idea clave

La seguridad no solo es cifrar… es confiar.

- Cifrado protege datos
- Certificados protegen identidad

---

## Resumen

- El cifrado no garantiza identidad
- Un atacante puede hacerse pasar por un servidor
- Los certificados validan la autenticidad
- Las Autoridades de Certificación (CA) firman claves
- Los navegadores confían en CAs preinstaladas
- Si un certificado no es válido, aparece advertencia
- HTTPS usa certificados + cifrado
- Esto permite comunicación segura a gran escala
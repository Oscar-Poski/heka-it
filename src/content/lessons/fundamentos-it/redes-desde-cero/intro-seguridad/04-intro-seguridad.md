---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-seguridad
lessonSlug: 04-intro-seguridad
title: 8.4 Cifrado del tráfico del navegador web

summary: Comprender cómo los navegadores usan HTTPS para cifrar la comunicación web y por qué hoy se usa en casi todo Internet.

durationMinutes: 6

objectives:

- Entender la diferencia entre HTTP y HTTPS
- Comprender cómo el navegador indica conexiones seguras
- Conocer el costo del cifrado
- Entender la evolución hacia el uso total de HTTPS
order: 37

---

## Idea general

### Idea clave

El navegador puede usar conexiones cifradas o no cifradas.

```mermaid
flowchart LR
    A[Navegador] -->|HTTP| B[Sin cifrado]
    A -->|HTTPS| C[Con cifrado]
```

---

## Diferencia clave

### HTTP vs HTTPS

```mermaid
flowchart TD
    A[HTTP]
    A --> B[Datos visibles]

    C[HTTPS]
    C --> D[Datos cifrados]
```

---

## Indicador visual

### Idea clave

El navegador muestra un candado cuando la conexión es segura.

```mermaid
flowchart LR
    A[URL https://] --> B[Conexión segura]
    B --> C[Icono de candado]
```

---

## Qué ocurre detrás

### Idea clave

HTTPS utiliza SSL/TLS para cifrar los datos.

```mermaid
flowchart TD
    A[Navegador]
    B[SSL/TLS]
    C[Internet]
    D[Servidor]

    A --> B --> C --> B --> D
```

---

## Flujo de datos seguro

```mermaid
sequenceDiagram
    participant N as Navegador
    participant S as Servidor

    N->>S: Solicitud HTTPS (cifrada)
    S->>N: Respuesta cifrada
```

---

## Costo del cifrado

### Idea clave

Cifrar y descifrar consume recursos.

```mermaid
flowchart TD
    A[HTTPS]
    A --> B[Encriptar]
    A --> C[Desencriptar]
    B --> D[Uso de CPU]
    C --> D
```

---

## Uso histórico

### Idea clave

Antes, HTTPS solo se usaba para datos sensibles.

```mermaid
flowchart TD
    A[Inicio]
    A --> B[Login]
    A --> C[Pagos]
    A --> D[Datos bancarios]
```

---

## Evolución

### Idea clave

Hoy casi todo el tráfico web es cifrado.

```mermaid
timeline
    title Evolución del uso de HTTPS
    1990s : Uso limitado
    2000s : Uso en pagos y login
    2010s : Expansión general
    Actualidad : HTTPS por defecto
```

---

## Por qué cambió

### Razones

```mermaid
flowchart TD
    A[Redes más rápidas]
    B[Mejor hardware]
    C[Optimización TLS]
    D[Mayor necesidad de privacidad]

    A --> E[Más uso de HTTPS]
    B --> E
    C --> E
    D --> E
```

---

## Riesgo sin HTTPS

### Idea clave

Los datos pueden ser interceptados.

```mermaid
flowchart LR
    A[Usuario] --> B[Internet]
    B --> C[Servidor]
    D[Atacante] -. lee datos .-> B
```

---

## Seguridad con HTTPS

### Idea clave

Los datos son ilegibles para terceros.

```mermaid
flowchart LR
    A[Usuario] -->|Datos cifrados| B[Internet]
    B --> C[Servidor]
    D[Atacante] -. no puede leer .-> B
```

---

## Insight clave

### Idea clave

Hoy asumimos que TODO debe ir cifrado.

- No solo contraseñas
- También navegación normal
- Privacidad por defecto

---

## Resumen

- HTTP envía datos sin cifrar
- HTTPS usa SSL/TLS para cifrar
- El navegador muestra un candado como indicador
- El cifrado consume recursos, pero cada vez menos
- Antes se usaba solo para datos sensibles
- Hoy se usa prácticamente en todo el tráfico web
- HTTPS protege contra interceptación de datos
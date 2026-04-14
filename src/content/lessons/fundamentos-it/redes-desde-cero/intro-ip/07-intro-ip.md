---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-ip
lessonSlug: 07-intro-ip
title: 4.7 Asignación de direcciones IP globales

summary: Comprender cómo se asignan las direcciones IP a nivel mundial y cómo funciona la jerarquía entre ISPs y registros regionales.

durationMinutes: 8

objectives:

- Entender cómo una red obtiene direcciones IP públicas
- Comprender el rol de los ISP
- Conocer los Registros Regionales de Internet (RIR)
- Entender la transición de IPv4 a IPv6
order: 21

---

## Cómo se obtiene una IP pública

### Idea clave

Para conectarte a Internet necesitas un ISP.

```mermaid
flowchart LR
    A[Organización] --> B[ISP]
    B --> C[Internet]
```

### Explicación

- Contratas conexión
- El ISP te asigna direcciones IP
- Puedes conectar tu red al mundo

---

## Asignación de direcciones

### Idea clave

Las direcciones IP se asignan en forma de bloques.

```mermaid
flowchart TD
    ISP --> NET[Dirección de red]
    NET --> D1[Dispositivo 1]
    NET --> D2[Dispositivo 2]
    NET --> D3[Dispositivo 3]
```

### Explicación

- No se asignan IPs individuales
- Se asignan rangos (redes)
- Tú distribuyes internamente

---

## Jerarquía de asignación

### Idea clave

Las direcciones IP se distribuyen en niveles.

```mermaid
flowchart TD
    RIR[Registro Regional]
    ISP[Proveedor de Internet]
    ORG[Organización]
    DEV[Dispositivos]

    RIR --> ISP
    ISP --> ORG
    ORG --> DEV
```

### Explicación

- Sistema jerárquico
- Evita conflictos
- Permite organización global

---

## Registros Regionales (RIR)

### Idea clave

El mundo se divide en regiones para gestionar IPs.

```mermaid
flowchart TD
    A[ARIN - Norteamérica]
    B[LACNIC - Latinoamérica]
    C[RIPE NCC - Europa]
    D[APNIC - Asia-Pacífico]
    E[AFRINIC - África]
```

---

## Función de los RIR

### Idea clave

Los RIR gestionan direcciones a nivel global.

```mermaid
flowchart TD
    RIR --> A[Asignar bloques IP]
    RIR --> B[Registrar uso]
    RIR --> C[Coordinar Internet global]
```

---

## Ejemplo de flujo completo

```mermaid
flowchart LR
    RIR --> ISP
    ISP --> Empresa
    Empresa --> Router
    Router --> Dispositivos
```

### Explicación

- La IP fluye desde arriba hacia abajo
- Cada nivel distribuye a su escala

---

## Problema histórico

### Idea clave

IPv4 no fue diseñado para la escala actual.

```mermaid
flowchart TD
    A[Diseño inicial]
    A --> B[Pocos dispositivos]
    B --> C[Hoy: miles de millones]
```

---

## Internet de las cosas (IoT)

### Idea clave

Cada vez más dispositivos necesitan IP.

```mermaid
flowchart TD
    A[Dispositivos]
    A --> B[Teléfonos]
    A --> C[Autos]
    A --> D[Refrigeradores]
    A --> E[Lámparas]
```

---

## Solución: IPv6

### Idea clave

IPv6 amplía enormemente el número de direcciones disponibles.

```mermaid
flowchart TD
    A[IPv4 - 32 bits]
    B[IPv6 - 128 bits]

    A --> C[Limitado]
    B --> D[Prácticamente ilimitado]
```

---

## Comparación IPv4 vs IPv6

```mermaid
flowchart TD
    A[IPv4]
    A --> B[4 números]
    A --> C[~4 mil millones direcciones]

    D[IPv6]
    D --> E[Direcciones largas]
    D --> F[Cantidad enorme]
```

---

## Transición IPv4 → IPv6

### Idea clave

Ambos protocolos conviven actualmente.

```mermaid
flowchart LR
    A[IPv4] <---> B[IPv6]
```

### Explicación

- No se puede cambiar todo de golpe
- Sistemas híbridos
- Migración gradual

---

## Rol de los RIR en la transición

### Idea clave

Los RIR impulsan la adopción de IPv6.

```mermaid
flowchart TD
    RIR --> A[Asignar IPv6]
    RIR --> B[Promover adopción]
```

---

## Insight clave 

Internet funciona gracias a una coordinación global jerárquica.

- No es caótico
- Está organizado por niveles
- Permite crecimiento global

> Sin esta estructura, habría conflictos masivos de direcciones

---

## Resumen

- Para conectarte a Internet necesitas un ISP
- Los ISPs asignan bloques de direcciones IP
- Existe una jerarquía global de asignación
- Los RIR gestionan direcciones por región
- IPv4 se está quedando sin espacio
- IPv6 ofrece una solución escalable
- Ambos sistemas conviven actualmente
- La transición será gradual
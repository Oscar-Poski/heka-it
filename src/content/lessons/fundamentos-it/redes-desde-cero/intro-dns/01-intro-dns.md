---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-dns
lessonSlug: 01-intro-dns
title: 5.1 Sistema de Nombres de Dominio (DNS) y asignación de dominios

summary: Comprender cómo el DNS traduce nombres de dominio a direcciones IP y cómo se organiza la asignación de dominios a nivel global.

durationMinutes: 10

objectives:

- Entender qué es DNS y por qué existe
- Comprender cómo se resuelve un dominio a una IP
- Entender la jerarquía de nombres de dominio
- Conocer el rol de ICANN y los TLDs
order: 22

---

## El problema: recordar direcciones IP

### Idea clave

Las direcciones IP no son fáciles de recordar.

```mermaid
flowchart TD
    A[Usuario] --> B[212.78.1.25]
    B --> C[Difícil de recordar]
```

---

## Solución: nombres de dominio

### Idea clave

Usamos nombres fáciles en lugar de números.

```mermaid
flowchart TD
    A[Usuario] --> B[heka-it.org]
    B --> C[Fácil de recordar]
```

---

## Qué es DNS

### Idea clave

DNS traduce nombres de dominio a direcciones IP.

```mermaid
flowchart LR
    D[Dominio] --> DNS
    DNS --> IP[Dirección IP]
```

---

## Ejemplo de resolución

```mermaid
flowchart LR
    A[heka-it.org] --> DNS
    DNS --> B[212.78.1.25]
```

---

## Flujo de conexión

### Idea clave

Primero se resuelve el nombre, luego se conecta.

```mermaid
sequenceDiagram
    participant U as Usuario
    participant D as DNS
    participant S as Servidor

    U->>D: ¿IP de dominio?
    D->>U: Dirección IP
    U->>S: Conexión usando IP
```

---

## Ventaja clave del DNS

### Idea clave

Permite cambiar la IP sin afectar al usuario.

```mermaid
flowchart TD
    A[Dominio]
    A --> B[IP antigua]
    A --> C[IP nueva]
```

### Explicación

- El servidor puede moverse
- Solo se actualiza el DNS
- El usuario no nota el cambio

---

## IP vs dominio

### Idea clave

IP = ubicación, dominio = nombre.

```mermaid
flowchart TD
    A[IP] --> B[Ubicación física]
    C[Dominio] --> D[Nombre lógico]
```

---

## Jerarquía del DNS

### Idea clave

Los dominios están organizados en niveles.

```mermaid
flowchart TD
    ROOT[.]
    ROOT --> COM[.com]
    COM --> EXAMPLE[example.com]
    EXAMPLE --> WWW[www.example.com]
```

---

## Dominios de nivel superior (TLD)

### Idea clave

Son la base de la estructura de nombres.

```mermaid
flowchart TD
    A[TLD]
    A --> B[.com]
    A --> C[.org]
    A --> D[.edu]
    A --> E[.club]
```

---

## Dominios por país (ccTLD)

### Idea clave

Representan países.

```mermaid
flowchart TD
    A[ccTLD]
    A --> B[.mx]
    A --> C[.us]
    A --> D[.jp]
    A --> E[.uk]
```

---

## Subdominios

### Idea clave

Las organizaciones crean sus propios subniveles.

```mermaid
flowchart TD
    A[umich.edu]
    A --> B[cs.umich.edu]
    A --> C[mail.umich.edu]
```

---

## Organización global: ICANN

### Idea clave

ICANN gestiona el sistema global de dominios.

```mermaid
flowchart TD
    ICANN --> TLD[Dominios de nivel superior]
    TLD --> ORG[Organizaciones]
```

---

## Flujo de asignación de dominios

```mermaid
flowchart LR
    ICANN --> TLD
    TLD --> Empresa
    Empresa --> Subdominios
```

---

## Propiedad de dominios

### Idea clave

Los dominios pueden ser gestionados por organizaciones o personas.

```mermaid
flowchart TD
    A[Dominio]
    A --> B[Empresa]
    A --> C[Universidad]
    A --> D[Persona]
```

---

## Insight clave 

DNS desacopla el nombre de la ubicación.

- Los usuarios usan nombres
- Los sistemas usan IPs
- Permite flexibilidad total

> Es una de las piezas más importantes de Internet

---

## Resumen

- DNS traduce nombres a direcciones IP
- Los usuarios usan dominios, no IPs
- Primero se resuelve el nombre, luego se conecta
- Permite mover servidores sin afectar usuarios
- Existe una jerarquía de dominios
- ICANN gestiona los dominios globales
- Los dominios se pueden subdividir
- DNS hace Internet más usable y flexible
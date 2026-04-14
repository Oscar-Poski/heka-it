---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-dns
lessonSlug: 02-intro-dns
title: 5.2 Lectura de nombres de dominio

summary: Comprender cómo se estructuran y leen los nombres de dominio y cómo se comparan con las direcciones IP.

durationMinutes: 6

objectives:

- Entender cómo se leen las direcciones IP
- Comprender cómo se leen los nombres de dominio
- Identificar la jerarquía dentro de un dominio
- Entender por qué DNS mejora la usabilidad de Internet
order: 23

---

## Cómo se leen las direcciones IP

### Idea clave

Las direcciones IP se leen de izquierda a derecha.

```mermaid
flowchart LR
    A[212] --> B[78] --> C[1] --> D[25]
```

### Interpretación

- Izquierda → más general (red)
- Derecha → más específico (dispositivo)

```
212.78.1.25
General ----> Específico
```

---

## Cómo se leen los dominios

### Idea clave

Los nombres de dominio se leen de derecha a izquierda.

```mermaid
flowchart RL
    EDU[.edu] --> UMICH[umich]
    UMICH --> SI[si]
    SI --> PERSONAL[personal]
    PERSONAL --> USER[drchuck]
```

### Interpretación

```
drchuck.personal.si.umich.edu
Específico <--- General
```

---

## Jerarquía de un dominio

### Idea clave

Cada parte del dominio representa un nivel.

```mermaid
flowchart TD
    A[.edu]
    A --> B[umich.edu]
    B --> C[si.umich.edu]
    C --> D[personal.si.umich.edu]
    D --> E[drchuck.personal.si.umich.edu]
```

### Explicación

- `.edu` → tipo de organización
- `umich` → institución
- `si` → suborganización
- `personal` → área específica
- `drchuck` → recurso específico

---

## Comparación IP vs dominio

### Idea clave

IP y dominio organizan la información en sentidos opuestos.

```mermaid
flowchart LR
    IP[IP] --> G1[General → Específico]
    DOM[Dominio] --> G2[Específico → General]
```

---

## Ejemplo práctico

```mermaid
flowchart TD
    A[Usuario] --> B[heka-it.org]
    B --> C[Fácil de recordar]
```

### Idea clave

Los humanos usan nombres, no números.

---

## DNS como traductor

### Idea clave

DNS conecta el mundo humano con el mundo técnico.

```mermaid
flowchart LR
    A[Nombre de dominio] --> DNS
    DNS --> B[Dirección IP]
```

---

## Ventaja clave del sistema

### Idea clave

Permite cambiar la infraestructura sin afectar al usuario.

```mermaid
flowchart TD
    A[Dominio]
    A --> B[IP antigua]
    A --> C[IP nueva]
```

### Explicación

- El usuario sigue usando el mismo nombre
- El sistema redirige automáticamente

---

## Registro de dominios

### Idea clave

Los dominios pueden comprarse y gestionarse.

```mermaid
flowchart TD
    U[Usuario] --> R[Registrador]
    R --> D[Dominio]
```

### Explicación

- Empresas registradoras venden dominios
- Tú controlas tus subdominios

---

## Insight clave 

Los dominios están diseñados para humanos, las IPs para máquinas.

- Dominios → legibles
- IPs → eficientes
- DNS → conecta ambos mundos

> Esta abstracción hace Internet usable

---

## Resumen

- Las IP se leen de izquierda a derecha
- Los dominios se leen de derecha a izquierda
- Los dominios tienen estructura jerárquica
- Cada nivel agrega especificidad
- DNS traduce nombres a IPs
- Permite cambiar servidores sin afectar usuarios
- Los dominios pueden registrarse y gestionarse
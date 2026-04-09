---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: mundo-fisico
lessonSlug: 02-mundo-fisico
title: Cables vs WiFi
summary: Comparar cómo transmiten datos las conexiones por cable y las inalámbricas, y entender sus ventajas y limitaciones.
durationMinutes: 5
objectives:
  - Distinguir entre transmisión por cable y por WiFi
  - Entender cómo cambia el medio físico la comunicación
  - Identificar ventajas y desventajas de cada opción
order: 10
---

# Cables vs WiFi

En la lección anterior vimos que los datos viajan como señales físicas.

Ahora vamos a comparar dos formas comunes de transmitirlos:

- conexiones por cable
- conexiones inalámbricas (WiFi)

---

## La idea clave

Ambos métodos hacen lo mismo:

> transportar bits de un lugar a otro
> 

Pero lo hacen de formas muy distintas.

---

## Transmisión por cable

En una conexión por cable:

- los datos viajan a través de un medio físico (como cobre o fibra)
- las señales están guiadas por ese medio

---

```mermaid
flowchart LR
  A["Dispositivo"] --> B["Cable"] --> C["Router"]
```

---

### Cómo funciona

- en cables de cobre → señales eléctricas
- en fibra óptica → pulsos de luz

---

### Ventajas

- conexión más estable
- menor interferencia
- mayor velocidad en general
- menor latencia

---

### Desventajas

- requiere conexión física
- menos movilidad
- instalación más limitada

---

## Transmisión por WiFi

En WiFi:

- los datos viajan por el aire
- se usan ondas electromagnéticas

---

```mermaid
flowchart LR
  A["Dispositivo"] --> B["Ondas WiFi"] --> C["Router"]
```

---

### Cómo funciona

El dispositivo convierte los bits en señales de radio que se propagan en el espacio.

---

### Ventajas

- no necesita cables
- permite movilidad
- fácil de instalar

---

### Desventajas

- más susceptible a interferencias
- velocidad variable
- mayor latencia en comparación
- depende de distancia y obstáculos

---

## Comparación directa

| Característica | Cable | WiFi |
| --- | --- | --- |
| Medio | Físico | Aire |
| Estabilidad | Alta | Variable |
| Velocidad | Alta | Variable |
| Latencia | Baja | Mayor |
| Movilidad | Baja | Alta |
| Interferencia | Baja | Alta |

---

## Intuición importante

La diferencia principal es el control del medio:

- En cable → el camino está definido
- En WiFi → la señal se dispersa en el aire

Eso hace que el cable sea más predecible.

---

## Ejemplo real

Cuando ves un video en YouTube:

- si usas cable → conexión más estable
- si usas WiFi → puede variar según señal

---

## Idea clave de esta lección

Cables y WiFi transmiten datos de la misma forma (bits como señales), pero el medio físico cambia su estabilidad, velocidad y comportamiento.

---

## Repaso

- Ambos transmiten bits como señales
- Cable usa un medio físico guiado
- WiFi usa ondas en el aire
- Cable es más estable
- WiFi es más flexible
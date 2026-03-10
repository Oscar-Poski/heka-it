---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: gestion-de-procesos
lessonSlug: 09-monitoreo-avanzado-de-recursos
title: "Monitoreo avanzado de recursos"

summary: "Aprender a monitorear recursos del sistema de forma más detallada utilizando herramientas adicionales de Linux."

durationMinutes: 9

objectives:

- "Monitorear CPU, memoria y disco con más detalle"
- "Utilizar herramientas adicionales de diagnóstico"
- "Interpretar información de rendimiento del sistema"
    
order: 9
    

---

# Monitoreo avanzado de recursos

En las lecciones anteriores vimos herramientas básicas para monitorear el sistema, como:

- `top`
- `free`
- `uptime`

Estas herramientas permiten tener **una visión general del estado del sistema**.

Sin embargo, Linux también ofrece herramientas más específicas para analizar con mayor detalle el uso de recursos como:

- CPU
- memoria
- disco
- procesos

Esto es especialmente útil cuando se investigan **problemas de rendimiento**.

---

# El comando `htop`

Una herramienta muy popular para monitoreo avanzado es:

```bash
htop
```

`htop` es una versión mejorada de `top`.

Ofrece una interfaz más visual e interactiva.

Permite:

- ver uso de CPU por núcleo
- ordenar procesos fácilmente
- navegar usando el teclado
- terminar procesos directamente desde la interfaz

En muchas distribuciones se instala con:

```bash
sudo apt install htop
```

---

# Monitorear uso de CPU con `mpstat`

Otra herramienta útil es:

```bash
mpstat
```

Este comando muestra estadísticas de CPU.

Por ejemplo:

```bash
mpstat 1
```

Esto muestra el uso de CPU actualizado cada segundo.

Puede indicar:

- uso por procesos de usuario
- uso por el sistema
- tiempo de CPU inactiva

---

# Monitorear uso de disco con `iostat`

El comando:

```bash
iostat
```

permite analizar actividad de disco.

Ejemplo:

```bash
iostat -x
```

Esto muestra estadísticas como:

- operaciones de lectura y escritura
- tiempo de espera del disco
- utilización del dispositivo

Es útil para detectar **cuellos de botella en almacenamiento**.

---

# Monitorear memoria con `vmstat`

Otra herramienta importante es:

```bash
vmstat
```

Este comando muestra estadísticas del sistema relacionadas con:

- memoria
- procesos
- uso de CPU
- operaciones de entrada/salida

Ejemplo:

```bash
vmstat 2
```

Esto muestra estadísticas actualizadas cada dos segundos.

---

# Identificar procesos que consumen recursos

En muchas situaciones el objetivo del monitoreo es identificar procesos problemáticos.

Herramientas como `top` o `htop` permiten ordenar procesos por:

- uso de CPU
- uso de memoria
- tiempo de ejecución

Esto ayuda a encontrar rápidamente procesos que podrían estar causando problemas.

---

# Interpretar datos del sistema

Al monitorear el sistema conviene observar patrones.

Por ejemplo:

- CPU constantemente alta
- memoria agotándose
- actividad de disco muy intensa
- procesos que consumen recursos de forma inesperada

El objetivo no es solo observar datos, sino **entender el comportamiento del sistema**.

---

# Monitoreo en entornos reales

En servidores y entornos de producción, el monitoreo es una tarea continua.

Los administradores utilizan estas herramientas para:

- detectar problemas antes de que afecten usuarios
- optimizar el uso de recursos
- investigar fallos de rendimiento
- planificar capacidad del sistema

Muchas organizaciones también utilizan plataformas de monitoreo automatizadas para recopilar estas métricas.

---

# Idea clave de esta lección

Linux ofrece herramientas avanzadas como `htop`, `mpstat`, `iostat` y `vmstat` para analizar el uso de recursos del sistema con mayor detalle.

---

# Repaso

- El monitoreo avanzado permite analizar el sistema con mayor precisión.
- `htop` ofrece una vista interactiva de procesos.
- `mpstat` muestra estadísticas de CPU.
- `iostat` analiza actividad de disco.
- `vmstat` muestra estadísticas del sistema y memoria.
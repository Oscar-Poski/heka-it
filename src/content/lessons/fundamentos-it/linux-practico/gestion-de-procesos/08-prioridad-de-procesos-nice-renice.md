---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: gestion-de-procesos
lessonSlug: 08-prioridad-de-procesos-nice-renice
title: "Prioridad de procesos (nice, renice)"

summary: "Aprender cómo Linux asigna prioridad a los procesos y cómo modificarla utilizando los comandos nice y renice."

durationMinutes: 8

objectives:

- "Comprender qué es la prioridad de un proceso"
- "Ejecutar procesos con prioridad modificada usando nice"
- "Cambiar la prioridad de procesos existentes con renice"
    
order: 8
    

---

# Prioridad de procesos (`nice`, `renice`)

En un sistema Linux pueden ejecutarse **muchos procesos al mismo tiempo**.

Todos estos procesos compiten por recursos como:

- CPU
- memoria
- acceso a disco

Para administrar este uso, el sistema utiliza **prioridades de procesos**.

La prioridad ayuda al sistema operativo a decidir **qué proceso debe recibir más tiempo de CPU**.

---

# ¿Qué es la prioridad de un proceso?

La prioridad indica **qué tan importante es un proceso para el sistema**.

Un proceso con mayor prioridad tendrá más oportunidades de utilizar la CPU.

Un proceso con menor prioridad recibirá menos tiempo de CPU.

Linux utiliza un valor llamado **nice value** para representar esta prioridad.

---

# Valores de prioridad (nice)

Los valores de **nice** van desde:

```
-20  (máxima prioridad)
  0  (prioridad normal)
 19  (menor prioridad)
```

Es importante entender que:

- valores **más bajos** significan **mayor prioridad**
- valores **más altos** significan **menor prioridad**

El valor por defecto para la mayoría de los procesos es:

```
0
```

---

# Ver la prioridad de procesos

Puedes ver la prioridad de los procesos usando:

```bash
top
```

En la salida aparecerán columnas como:

- **PR** → prioridad del proceso
- **NI** → valor nice

Esto permite observar cómo el sistema distribuye recursos.

---

# Ejecutar procesos con `nice`

El comando `nice` permite iniciar un proceso con una prioridad diferente.

Ejemplo:

```bash
nice -n 10 comando
```

Esto ejecuta el comando con menor prioridad que la normal.

Por ejemplo:

```bash
nice -n 10 tar -czf respaldo.tar.gz carpeta/
```

Esto permite que el proceso consuma menos CPU si otros procesos la necesitan.

---

# Cuándo usar `nice`

Reducir prioridad puede ser útil cuando ejecutas tareas pesadas como:

- compresión de archivos
- procesamiento de datos
- backups
- scripts largos

De esta forma el proceso **no afecta tanto al resto del sistema**.

---

# Cambiar prioridad con `renice`

El comando `renice` permite modificar la prioridad de un proceso **que ya está en ejecución**.

La estructura es:

```bash
renice valor PID
```

Ejemplo:

```bash
renice 10 2451
```

Esto cambia el valor nice del proceso con PID `2451`.

---

# Usar `sudo` con prioridades altas

Solo el usuario root puede asignar prioridades más altas (valores negativos).

Por ejemplo:

```bash
sudo renice -5 2451
```

Esto aumenta la prioridad del proceso.

Los usuarios normales solo pueden **reducir la prioridad** (valores positivos).

---

# Ejemplo práctico

Supongamos que ejecutas un proceso pesado que consume CPU.

Puedes iniciarlo con menor prioridad:

```bash
nice -n 15 python script_grande.py
```

De esta manera el proceso seguirá ejecutándose, pero el sistema podrá priorizar otros procesos más importantes.

---

# Buenas prácticas

Al trabajar con prioridades conviene recordar:

- no asignar prioridad muy alta a procesos innecesarios
- reducir prioridad para tareas pesadas en servidores
- observar el comportamiento del sistema antes de modificar prioridades

Esto ayuda a mantener el sistema estable y eficiente.

---

# Idea clave de esta lección

Linux utiliza valores **nice** para controlar la prioridad de los procesos.

Los comandos `nice` y `renice` permiten ajustar estas prioridades para gestionar mejor el uso de CPU.

---

# Repaso

- Linux asigna prioridades a los procesos.
- El valor **nice** define la prioridad.
- Valores bajos significan mayor prioridad.
- `nice` inicia procesos con prioridad modificada.
- `renice` cambia la prioridad de procesos existentes.
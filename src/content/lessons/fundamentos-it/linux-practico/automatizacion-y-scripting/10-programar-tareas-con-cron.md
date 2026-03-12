---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: automatizacion-y-scripting
lessonSlug: 10-programar-tareas-con-cron
title: "Programar tareas con cron"

summary: "Aprender a programar tareas automáticas en Linux usando cron."

durationMinutes: 9

objectives:

- "Comprender qué es cron"
- "Programar tareas automáticas"
- "Leer y escribir expresiones de cron"
    
order: 10
    

---

# Programar tareas con cron

En Linux es posible ejecutar tareas **automáticamente en momentos específicos**.

Esto se logra mediante una herramienta llamada:

```
cron
```

`cron` es un servicio del sistema que permite **programar comandos o scripts para que se ejecuten en horarios definidos**.

Es ampliamente utilizado para:

- respaldos automáticos
- limpieza de archivos temporales
- ejecución de scripts de mantenimiento
- tareas periódicas del sistema

---

# Qué es un cron job

Una tarea programada en `cron` se conoce como:

```
cron job
```

Cada cron job especifica:

- cuándo debe ejecutarse
- qué comando o script debe ejecutarse

---

# Editar el cron del usuario

Para programar tareas se utiliza el comando:

```bash
crontab -e
```

Este comando abre el archivo de programación del usuario actual.

Ahí se pueden agregar tareas programadas.

---

# Estructura de una tarea cron

Cada línea del cron tiene cinco campos de tiempo y luego el comando.

```
minuto hora día_mes mes día_semana comando
```

Ejemplo:

```
0 2 * * * /home/usuario/respaldo.sh
```

Esto significa:

- minuto → 0
- hora → 2
- día del mes → cualquiera
- mes → cualquiera
- día de la semana → cualquiera

El script se ejecutará **todos los días a las 2:00 AM**.

---

# Ejemplo simple

Ejecutar un script cada día a las 3 AM:

```
0 3 * * * /home/oscar/script.sh
```

---

# Ejecutar una tarea cada minuto

```
* * * * * comando
```

Esto ejecuta el comando **cada minuto**.

---

# Ejecutar cada hora

```
0 * * * * comando
```

Esto ejecuta el comando **al inicio de cada hora**.

---

# Ver tareas programadas

Para ver las tareas programadas del usuario se utiliza:

```bash
crontab -l
```

Esto muestra todos los cron jobs configurados.

---

# Eliminar tareas programadas

Para eliminar el cron del usuario se utiliza:

```bash
crontab -r
```

Esto borra todas las tareas programadas del usuario.

---

# Buenas prácticas con cron

Al trabajar con cron es recomendable:

- usar rutas completas a scripts
- verificar permisos de ejecución
- probar scripts manualmente antes de programarlos

Esto ayuda a evitar errores en tareas automatizadas.

---

# Idea clave de esta lección

`cron` permite programar la ejecución automática de comandos o scripts en horarios específicos.

---

# Repaso

- `cron` programa tareas automáticas.
- `crontab -e` permite editar tareas programadas.
- Cada cron job define cuándo ejecutar un comando.
- `crontab -l` muestra tareas existentes.
- Es muy utilizado para automatización en servidores Linux.
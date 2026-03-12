---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: administracion-basica-del-sistema
lessonSlug: 03-uso-de-systemctl
title: "Uso de systemctl"

summary: "Aprender a administrar servicios en Linux usando la herramienta systemctl."

durationMinutes: 9

objectives:

- "Comprender qué es systemctl"
- "Iniciar y detener servicios"
- "Ver el estado de servicios del sistema"
    
order: 3
    

---

# Uso de `systemctl`

En la mayoría de las distribuciones Linux modernas, los servicios del sistema se administran mediante un sistema llamado:

```
systemd
```

La herramienta principal para interactuar con `systemd` es:

```
systemctl
```

Este comando permite **controlar servicios del sistema**, incluyendo iniciarlos, detenerlos o consultar su estado.

---

# Ver estado de un servicio

Para verificar el estado de un servicio se utiliza:

```bash
systemctl status nombre_servicio
```

Ejemplo:

```bash
systemctl status ssh
```

Esto muestra información como:

- si el servicio está activo
- cuándo se inició
- si ocurrió algún error

---

# Iniciar un servicio

Para iniciar un servicio manualmente se utiliza:

```bash
sudo systemctl start nombre_servicio
```

Ejemplo:

```bash
sudo systemctl start ssh
```

Esto inicia el servicio si no está en ejecución.

---

# Detener un servicio

Para detener un servicio se usa:

```bash
sudo systemctl stop nombre_servicio
```

Ejemplo:

```bash
sudo systemctl stop ssh
```

Esto detiene el servicio.

---

# Reiniciar un servicio

Si necesitas reiniciar un servicio después de cambiar su configuración puedes usar:

```bash
sudo systemctl restart nombre_servicio
```

Ejemplo:

```bash
sudo systemctl restart ssh
```

Esto detiene y vuelve a iniciar el servicio.

---

# Recargar configuración

Algunos servicios permiten recargar su configuración sin reiniciarse completamente.

```bash
sudo systemctl reload nombre_servicio
```

Esto aplica cambios en la configuración sin detener el servicio.

---

# Ver servicios activos

Para ver los servicios que están ejecutándose se puede usar:

```bash
systemctl list-units --type=service
```

Esto muestra una lista de servicios activos en el sistema.

---

# Habilitar servicio al iniciar el sistema

Para hacer que un servicio se inicie automáticamente al arrancar el sistema se utiliza:

```bash
sudo systemctl enable nombre_servicio
```

Ejemplo:

```bash
sudo systemctl enable ssh
```

---

# Deshabilitar servicio al iniciar

Si no deseas que un servicio se inicie automáticamente puedes usar:

```bash
sudo systemctl disable nombre_servicio
```

Esto evita que el servicio se ejecute al arrancar el sistema.

---

# Idea clave de esta lección

`systemctl` es la herramienta principal para administrar servicios en sistemas Linux que utilizan `systemd`.

---

# Repaso

- `systemctl` administra servicios del sistema.
- `systemctl status` muestra el estado de un servicio.
- `systemctl start` inicia un servicio.
- `systemctl stop` detiene un servicio.
- `systemctl restart` reinicia un servicio.
- `systemctl enable` habilita el servicio al arranque.
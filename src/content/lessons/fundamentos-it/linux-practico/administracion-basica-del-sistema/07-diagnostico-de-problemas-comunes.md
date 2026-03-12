---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: administracion-basica-del-sistema
lessonSlug: 07-diagnostico-de-problemas-comunes
title: "Diagnóstico de problemas comunes"

summary: "Aprender un enfoque básico y ordenado para diagnosticar problemas comunes en sistemas Linux."

durationMinutes: 9

objectives:

- "Comprender cómo abordar problemas del sistema de forma metódica"
- "Usar herramientas básicas para recopilar evidencia"
- "Identificar causas comunes de fallos en Linux"
    
order: 7
    

---

# Diagnóstico de problemas comunes

En administración de sistemas, una parte muy importante del trabajo no es solo configurar Linux, sino también **detectar y resolver problemas**.

Cuando algo falla, es fácil reaccionar con prisa y empezar a cambiar cosas al azar.

Pero ese enfoque suele empeorar el problema.

Lo más importante al diagnosticar en Linux es seguir un proceso **ordenado, simple y basado en evidencia**.

---

# Qué significa diagnosticar

Diagnosticar un problema significa responder preguntas como:

- ¿qué está fallando exactamente?
- ¿cuándo empezó a fallar?
- ¿qué cambió antes del problema?
- ¿el problema afecta a todo el sistema o solo a una parte?
- ¿qué evidencia tenemos?

Diagnosticar no es adivinar.

Es **observar, comprobar y reducir posibilidades**.

---

# Regla básica: primero observar

Antes de cambiar configuraciones o reiniciar servicios, conviene observar el estado del sistema.

Algunas preguntas iniciales útiles son:

- ¿el sistema está lento o no responde?
- ¿hay errores visibles?
- ¿un servicio específico falló?
- ¿hay poco espacio en disco?
- ¿hay problemas de red?

Muchas veces la observación inicial ya da pistas importantes.

---

# Problemas comunes en Linux

Algunos de los problemas más frecuentes en sistemas Linux son:

- servicios que no arrancan
- procesos que consumen demasiados recursos
- disco lleno
- problemas de red
- errores de permisos
- configuraciones incorrectas
- fallos después de una actualización

No todos los problemas se resuelven igual, pero casi siempre se investigan con una lógica parecida.

---

# Revisar el estado del sistema

Un buen primer paso es revisar si el sistema está sano en términos generales.

Por ejemplo:

Ver carga y procesos:

```bash
top
```

Ver memoria:

```bash
free -h
```

Ver espacio en disco:

```bash
df -h
```

Esto ayuda a detectar rápidamente problemas de:

- CPU saturada
- falta de memoria
- almacenamiento lleno

---

# Revisar servicios

Si el problema parece estar relacionado con un servicio, conviene revisar su estado.

Por ejemplo:

```bash
systemctl status nombre_servicio
```

Esto puede mostrar si el servicio:

- está activo
- falló al iniciar
- fue detenido
- tiene errores recientes

Si un servicio no funciona, este comando suele ser uno de los primeros lugares para investigar.

---

# Revisar logs

Los logs son una de las fuentes más importantes de evidencia.

En sistemas con systemd puedes revisar el journal con:

```bash
journalctl -xe
```

O revisar un servicio específico:

```bash
journalctl -u nombre_servicio
```

También puedes revisar archivos dentro de:

```
/var/log
```

Los logs ayudan a responder:

- qué error ocurrió
- cuándo ocurrió
- qué servicio lo reportó

---

# Revisar red

Si el problema parece ser de conectividad, conviene verificar la red paso a paso.

Ver interfaces:

```bash
ip addr
```

Ver rutas:

```bash
ip route
```

Probar conectividad local:

```bash
ping 127.0.0.1
```

Probar gateway o red local:

```bash
ping 192.168.1.1
```

Probar conectividad externa:

```bash
ping google.com
```

Esto permite separar si el problema está en:

- el sistema local
- la red local
- DNS
- internet

---

# Revisar permisos

Muchos errores en Linux ocurren por permisos incorrectos.

Por ejemplo:

- un usuario no puede acceder a un archivo
- un servicio no puede leer una configuración
- un script no puede ejecutarse

Para revisar permisos puedes usar:

```bash
ls -l
```

Y para revisar propietario:

```bash
ls -l archivo
```

A veces el problema no es que “Linux está roto”, sino que el usuario o servicio no tiene permiso correcto.

---

# Pensar en cambios recientes

Una pregunta muy útil en diagnóstico es:

**¿qué cambió antes de que empezara el problema?**

Por ejemplo:

- se editó un archivo de configuración
- se actualizó un paquete
- se reinició un servicio
- se cambió un permiso
- se llenó el disco

Muchas fallas tienen relación directa con un cambio reciente.

---

# Hacer cambios pequeños

Cuando ya tienes una hipótesis, conviene hacer cambios pequeños y comprobar el resultado.

Por ejemplo:

- corregir una línea de configuración
- reiniciar solo el servicio afectado
- liberar algo de espacio en disco
- restaurar un archivo de respaldo

Evita hacer muchos cambios al mismo tiempo, porque después será más difícil saber cuál realmente resolvió el problema.

---

# Flujo básico de diagnóstico

Un flujo práctico y sencillo puede ser este:

1. identificar el síntoma
2. revisar estado general del sistema
3. revisar servicio, recurso o componente afectado
4. consultar logs
5. confirmar una hipótesis
6. aplicar un cambio pequeño
7. volver a probar

Este enfoque ayuda a trabajar con orden.

---

# Idea clave de esta lección

Diagnosticar problemas en Linux consiste en observar el sistema, reunir evidencia y reducir posibilidades antes de hacer cambios.

Un enfoque metódico suele ser mucho más efectivo que intentar arreglar todo por intuición.

---

# Repaso

- Diagnosticar es investigar con evidencia.
- Primero conviene observar el estado general del sistema.
- `top`, `free -h` y `df -h` ayudan a revisar recursos.
- `systemctl status` y `journalctl` ayudan a investigar servicios.
- Muchos problemas se relacionan con red, permisos, disco o cambios recientes.
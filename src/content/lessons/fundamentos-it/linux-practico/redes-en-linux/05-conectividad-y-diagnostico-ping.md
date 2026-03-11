---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: redes-en-linux
lessonSlug: 05-conectividad-y-diagnostico-ping
title: "Conectividad y diagnóstico (ping)"

summary: "Aprender a verificar conectividad de red utilizando la herramienta ping y comprender cómo funciona."

durationMinutes: 7

objectives:

- "Verificar conectividad entre dispositivos"
- "Usar el comando ping para diagnosticar red"
- "Interpretar resultados de ping"
    
order: 5
    

---

# Conectividad y diagnóstico (`ping`)

Cuando un sistema tiene problemas de red, una de las primeras herramientas que se utiliza para diagnosticar el problema es:

```bash
ping
```

El comando `ping` permite verificar si **otro dispositivo en la red está accesible**.

También permite medir el **tiempo que tardan los paquetes en viajar entre dos dispositivos**.

Es una herramienta básica pero muy útil para diagnosticar problemas de conectividad.

---

# Cómo funciona `ping`

`ping` envía pequeños paquetes de datos al destino utilizando el protocolo:

**ICMP (Internet Control Message Protocol)**

Si el dispositivo destino está disponible, responde con un paquete de retorno.

Esto permite verificar que la comunicación entre los dispositivos funciona correctamente.

---

# Ejemplo de uso

Puedes probar conectividad hacia un servidor usando:

```bash
ping google.com
```

La salida podría verse así:

```
64 bytes from 142.250.190.14: icmp_seq=1 ttl=117 time=18.2 ms
64 bytes from 142.250.190.14: icmp_seq=2 ttl=117 time=17.9 ms
```

Esto indica que el sistema pudo comunicarse correctamente con el servidor.

---

# Información mostrada por `ping`

La salida de `ping` incluye varios datos útiles.

**icmp_seq**

Número del paquete enviado.

---

**ttl**

Tiempo de vida del paquete.

Indica cuántos saltos puede hacer el paquete en la red antes de descartarse.

---

**time**

Tiempo que tardó el paquete en viajar al destino y regresar.

Normalmente se mide en milisegundos.

---

# Detener `ping`

Por defecto, `ping` continúa enviando paquetes continuamente.

Para detenerlo puedes usar:

```
Ctrl + C
```

Cuando se detiene, `ping` muestra un resumen de estadísticas.

---

# Enviar un número específico de paquetes

Si deseas enviar solo algunos paquetes puedes usar la opción:

```bash
ping -c4 google.com
```

Esto enviará **4 paquetes** y luego terminará automáticamente.

---

# Diagnóstico básico con `ping`

El comando `ping` se utiliza para verificar diferentes niveles de conectividad.

Por ejemplo:

**Probar la interfaz local**

```bash 
ping 127.0.0.1
```

Esto verifica que el sistema de red local está funcionando.

---

**Probar el router o gateway**

```bash
ping 192.168.1.1
```

Esto verifica conectividad con la red local.

---

**Probar internet**

```bash
ping google.com
```

Esto verifica conectividad con servidores en internet.

---

# Problemas comunes detectados con `ping`

`ping` puede ayudar a identificar problemas como:

- falta de conectividad de red
- problemas con el router
- DNS mal configurado
- latencia alta en la red

Aunque es una herramienta simple, es muy útil para **diagnóstico inicial**.

---

# Idea clave de esta lección

El comando `ping` permite verificar conectividad entre dispositivos enviando paquetes de prueba a través de la red.

---

# Repaso

- `ping` verifica conectividad de red.
- Utiliza el protocolo ICMP.
- Permite medir tiempo de respuesta de la red.
- `ping -c` limita el número de paquetes enviados.
- Es una herramienta básica de diagnóstico de red.
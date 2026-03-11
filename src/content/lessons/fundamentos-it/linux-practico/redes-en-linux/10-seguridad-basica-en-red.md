---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: redes-en-linux
lessonSlug: 10-seguridad-basica-en-red
title: "Seguridad básica en red"

summary: "Comprender principios básicos para proteger sistemas Linux conectados a una red."

durationMinutes: 8

objectives:

- "Comprender riesgos básicos en redes"
- "Aplicar principios básicos de seguridad de red"
- "Reconocer herramientas comunes para proteger sistemas Linux"
    
order: 10
    

---

# Seguridad básica en red

Cuando un sistema Linux está conectado a una red, especialmente a internet, queda expuesto a diferentes riesgos.

Por ejemplo:

- accesos no autorizados
- escaneo de puertos
- intentos de intrusión
- malware o ataques automatizados

Por esta razón es importante aplicar **principios básicos de seguridad de red**.

Incluso en sistemas personales o pequeños servidores.

---

# Principio de mínima exposición

Una de las reglas más importantes de seguridad es:

> exponer solo los servicios que realmente se necesitan.
> 

Esto significa:

- no ejecutar servicios innecesarios
- cerrar puertos que no se utilizan
- limitar acceso remoto

Cuantos más servicios estén expuestos, mayor será la superficie de ataque.

---

# Mantener el sistema actualizado

Las actualizaciones del sistema incluyen **parches de seguridad**.

Estas actualizaciones corrigen vulnerabilidades que podrían ser explotadas por atacantes.

Por esta razón es importante actualizar el sistema regularmente.

Ejemplo en sistemas Debian o Ubuntu:

```bash
sudo apt update
sudo apt upgrade
```

---

# Usar contraseñas seguras

Las contraseñas débiles son una de las formas más comunes de comprometer sistemas.

Para mejorar la seguridad conviene:

- usar contraseñas largas
- evitar contraseñas comunes
- no reutilizar contraseñas en múltiples sistemas

En sistemas críticos se utilizan métodos de autenticación más seguros, como **claves SSH**.

---

# Limitar acceso SSH

SSH es una herramienta poderosa, pero también puede ser un objetivo frecuente de ataques.

Algunas recomendaciones incluyen:

- deshabilitar acceso directo de root
- usar autenticación por clave
- limitar acceso a usuarios específicos

Esto reduce la probabilidad de acceso no autorizado.

---

# Usar firewall

Un **firewall** permite controlar qué conexiones de red están permitidas o bloqueadas.

En Linux existen herramientas como:

```bash
ufw
iptables
nftables
```

Estas herramientas permiten:

- bloquear puertos
- permitir servicios específicos
- limitar conexiones externas

---

# Revisar puertos abiertos

Es importante revisar qué servicios están escuchando en la red.

Puedes verificar esto usando:

```bash
ss -tulnp
```

Esto muestra:

- puertos abiertos
- servicios asociados
- procesos que utilizan la red

Si un servicio no es necesario, conviene desactivarlo.

---

# Monitorear actividad de red

Observar actividad de red puede ayudar a detectar comportamientos sospechosos.

Por ejemplo:

- conexiones inesperadas
- tráfico inusual
- servicios desconocidos

Herramientas de monitoreo permiten analizar estas situaciones.

---

# Seguridad como proceso continuo

La seguridad no es una configuración única.

Es un proceso continuo que implica:

- revisar configuraciones
- aplicar actualizaciones
- monitorear el sistema
- ajustar políticas de acceso

Incluso sistemas pequeños se benefician de aplicar estas prácticas básicas.

---

# Idea clave de esta lección

Proteger un sistema Linux conectado a una red implica reducir servicios expuestos, mantener el sistema actualizado y controlar accesos mediante herramientas como SSH y firewalls.

---

# Repaso

- Los sistemas conectados a redes están expuestos a riesgos.
- Es importante limitar servicios expuestos.
- Mantener el sistema actualizado mejora la seguridad.
- SSH debe configurarse de forma segura.
- Los firewalls ayudan a controlar acceso a la red.
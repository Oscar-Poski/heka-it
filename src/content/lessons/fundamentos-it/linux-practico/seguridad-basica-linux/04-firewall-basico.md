---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: seguridad-basica-linux
lessonSlug: 04-firewall-basico
title: "Firewall básico"

summary: "Comprender qué es un firewall y cómo se utiliza para proteger sistemas Linux en redes."

durationMinutes: 8

objectives:

- "Comprender qué es un firewall"
- "Identificar cómo un firewall protege el sistema"
- "Usar herramientas básicas de firewall en Linux"
    
order: 4
    

---

# Firewall básico

Cuando un sistema Linux está conectado a una red, puede recibir conexiones desde otros sistemas.

Algunas conexiones pueden ser legítimas, pero otras pueden ser **intentos de acceso no autorizado**.

Para controlar estas conexiones se utiliza una herramienta llamada **firewall**.

Un **firewall** permite decidir **qué tráfico de red está permitido y cuál debe bloquearse**.

---

# Qué hace un firewall

Un firewall analiza el tráfico de red que entra o sale del sistema y aplica reglas para decidir si debe permitirse o bloquearse.

Estas reglas pueden basarse en:

- dirección IP
- puerto de red
- protocolo de comunicación

Esto ayuda a proteger el sistema contra accesos no autorizados.

---

# Ejemplo de uso de firewall

Supongamos que un servidor solo necesita permitir acceso a:

- SSH (puerto 22)
- HTTP (puerto 80)
- HTTPS (puerto 443)

El firewall puede bloquear todos los demás puertos.

Esto reduce la **superficie de ataque del sistema**.

---

# Herramientas de firewall en Linux

Linux incluye varias herramientas para administrar firewalls.

Algunas de las más comunes son:

```
iptables
nftables
ufw
```

Estas herramientas permiten definir reglas de red para controlar el tráfico.

---

# UFW (Uncomplicated Firewall)

Una herramienta sencilla para administrar firewall en sistemas basados en Ubuntu es:

```
ufw
```

`ufw` facilita la configuración del firewall mediante comandos simples.

---

# Activar el firewall

Para activar el firewall usando `ufw` se puede utilizar:

```bash
sudo ufw enable
```

Esto activa el firewall con una configuración básica.

---

# Permitir un servicio

Para permitir conexiones SSH se puede usar:

```bash
sudo ufw allow ssh
```

También se puede permitir un puerto específico:

```bash
sudo ufw allow 80
```

Esto permite tráfico HTTP.

---

# Ver estado del firewall

Para ver la configuración actual del firewall se utiliza:

```bash
sudo ufw status
```

Esto muestra:

- reglas activas
- puertos permitidos
- estado del firewall

---

# Importancia del firewall

Un firewall ayuda a:

- bloquear accesos no autorizados
- limitar servicios expuestos
- proteger servidores conectados a internet

Por esta razón, es una herramienta fundamental para mejorar la seguridad del sistema.

---

# Idea clave de esta lección

Un firewall controla el tráfico de red del sistema y ayuda a proteger Linux contra accesos no autorizados.

---

# Repaso

- Un firewall controla el tráfico de red.
- Permite bloquear o permitir conexiones.
- Linux incluye herramientas como `iptables`, `nftables` y `ufw`.
- `ufw enable` activa el firewall.
- `ufw allow` permite conexiones a servicios específicos.
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: seguridad-basica-linux
lessonSlug: 05-seguridad-en-ssh
title: "Seguridad en SSH"

summary: "Aprender prácticas básicas para asegurar el acceso remoto mediante SSH en sistemas Linux."

durationMinutes: 9

objectives:

- "Comprender los riesgos de seguridad en SSH"
- "Aplicar configuraciones básicas para proteger el acceso remoto"
- "Usar autenticación más segura para conexiones SSH"
    
order: 5
    

---

# Seguridad en SSH

SSH es una de las herramientas más utilizadas para administrar sistemas Linux de forma remota.

Sin embargo, debido a su popularidad, también es un **objetivo frecuente de ataques automáticos en internet**.

Muchos atacantes intentan conectarse a servidores usando:

- ataques de fuerza bruta
- contraseñas débiles
- cuentas mal configuradas

Por esta razón, es importante aplicar **buenas prácticas de seguridad al usar SSH**.

---

# Evitar acceso directo de root

Una práctica recomendada es **deshabilitar el acceso directo del usuario root mediante SSH**.

Esto obliga a los usuarios a conectarse primero con su cuenta personal y luego usar `sudo` para tareas administrativas.

Esta configuración se encuentra en el archivo:

```
/etc/ssh/sshd_config
```

Una línea común es:

```
PermitRootLogin no
```

Esto evita que root pueda iniciar sesión directamente.

---

# Usar autenticación por claves

En lugar de usar contraseñas, es recomendable utilizar **claves SSH**.

Las claves SSH utilizan criptografía para autenticar usuarios.

Esto es más seguro porque:

- es mucho más difícil de atacar
- evita ataques de fuerza bruta
- elimina la necesidad de contraseñas

Las claves SSH funcionan con un par de claves:

- **clave privada** (se mantiene en el cliente)
- **clave pública** (se instala en el servidor)

---

# Ubicación de claves SSH

Las claves SSH normalmente se almacenan en el directorio:

```
~/.ssh
```

Ejemplo de archivos comunes:

```
id_rsa
id_rsa.pub
authorized_keys
```

El archivo `authorized_keys` contiene las claves públicas permitidas para acceder al sistema.

---

# Cambiar el puerto de SSH

Por defecto, SSH utiliza el puerto:

```
22
```

Algunos administradores cambian este puerto para reducir escaneos automáticos.

Por ejemplo:

```
Port 2222
```

Esto se configura también en el archivo `sshd_config`.

---

# Limitar usuarios permitidos

También se puede limitar qué usuarios pueden conectarse mediante SSH.

Ejemplo en `sshd_config`:

```
AllowUsers usuario1 usuario2
```

Esto restringe el acceso solo a los usuarios especificados.

---

# Usar firewall junto con SSH

Es recomendable usar un firewall para controlar el acceso a SSH.

Por ejemplo:

```bash
sudo ufw allow ssh
```

O permitir solo conexiones desde ciertas redes.

Esto añade otra capa de seguridad.

---

# Revisar logs de acceso

Es buena práctica revisar los logs relacionados con SSH.

Por ejemplo:

```bash
journalctl -u ssh
```

O revisar:

```bash
cat /var/log/auth.log
```

Esto permite detectar:

- intentos fallidos de acceso
- actividad sospechosa

---

# Idea clave de esta lección

SSH es una herramienta poderosa para administración remota, pero debe configurarse correctamente para evitar accesos no autorizados.

---

# Repaso

- SSH es un objetivo común de ataques automatizados.
- Se recomienda deshabilitar acceso directo de root.
- Las claves SSH son más seguras que las contraseñas.
- El archivo `sshd_config` controla la configuración de SSH.
- Revisar logs ayuda a detectar intentos de acceso.
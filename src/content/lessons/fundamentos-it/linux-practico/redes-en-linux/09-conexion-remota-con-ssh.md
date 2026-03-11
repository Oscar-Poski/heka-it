---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: redes-en-linux
lessonSlug: 09-conexion-remota-con-ssh
title: "Conexión remota con SSH"

summary: "Aprender a conectarse a sistemas Linux de forma remota utilizando el protocolo SSH."

durationMinutes: 9

objectives:

- "Comprender qué es SSH"
- "Conectarse a un servidor remoto"
- "Usar SSH para administración remota"
    
order: 9
    

---

# Conexión remota con SSH

Una de las herramientas más importantes en Linux es **SSH**.

SSH significa:

**Secure Shell**

Permite conectarse a otro sistema a través de la red y **controlarlo desde la terminal**.

Esto es fundamental para:

- administrar servidores
- acceder a máquinas remotas
- ejecutar comandos en otros sistemas
- transferir archivos

SSH es ampliamente utilizado en **administración de sistemas y cloud computing**.

---

# Cómo funciona SSH

SSH establece una conexión **segura y cifrada** entre dos sistemas.

El proceso general es:

1. el cliente SSH inicia una conexión
2. el servidor SSH recibe la solicitud
3. el usuario se autentica
4. se abre una sesión remota

Una vez conectado, puedes ejecutar comandos como si estuvieras usando la terminal del sistema remoto.

---

# El comando `ssh`

La herramienta principal para conectarse es:

```bash
ssh
```

La sintaxis básica es:

```bash
ssh usuario@servidor
```

Ejemplo:

```bash
ssh oscar@192.168.1.50
```

Este comando intenta conectarse al sistema con dirección IP:

```
192.168.1.50
```

usando el usuario:

```
oscar
```

---

# Autenticación

Cuando te conectas a un servidor SSH, el sistema normalmente pedirá la contraseña del usuario remoto.

Después de autenticarse correctamente, se abrirá una sesión de terminal.

Desde ese momento puedes ejecutar comandos en el sistema remoto.

---

# Puerto de SSH

Por defecto, SSH utiliza el puerto:

```
22
```

Si el servidor utiliza un puerto diferente, puedes especificarlo con:

```bash
ssh -p puerto usuario@servidor
```

Ejemplo:

```bash
ssh -p2222 oscar@192.168.1.50
```

---

# Ejecutar comandos remotos

SSH también permite ejecutar comandos sin abrir una sesión interactiva.

Ejemplo:

```bash
ssh usuario@servidor"ls -l"
```

Esto ejecuta el comando `ls -l` en el sistema remoto y muestra el resultado en tu terminal.

---

# Cerrar una sesión SSH

Para cerrar la conexión SSH puedes usar:

```bash
exit
```

o presionar:

```
Ctrl + D
```

Esto termina la sesión remota.

---

# Servidor SSH

Para aceptar conexiones SSH, el sistema remoto debe tener un **servidor SSH** ejecutándose.

En muchos sistemas Linux este servicio se llama:

```bash
sshd
```

Puedes verificar si está activo con:

```bash
sudo systemctl status ssh
```

---

# Seguridad en SSH

SSH es seguro porque:

- cifra toda la comunicación
- utiliza autenticación de usuario
- puede usar claves criptográficas

En entornos profesionales se utilizan **claves SSH** en lugar de contraseñas para mayor seguridad.

---

# Usos comunes de SSH

SSH se utiliza ampliamente para:

- administrar servidores remotos
- trabajar con infraestructura cloud
- desplegar aplicaciones
- ejecutar comandos en sistemas remotos
- automatizar tareas

Es una herramienta esencial para cualquier administrador de sistemas Linux.

---

# Idea clave de esta lección

SSH permite conectarse de forma segura a sistemas Linux remotos y administrarlos desde la terminal.

---

# Repaso

- SSH significa Secure Shell.
- Permite conectarse a sistemas remotos de forma segura.
- `ssh usuario@servidor` inicia una conexión.
- El puerto por defecto de SSH es 22.
- SSH se utiliza ampliamente para administración de servidores.
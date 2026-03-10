---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: usuarios-y-permisos
lessonSlug: 09-cambiar-contrasenas
title: "Cambiar contraseñas"

summary: "Aprender cómo cambiar contraseñas de usuarios en Linux y entender cómo funciona este proceso dentro del sistema."

durationMinutes: 6

objectives:

- "Cambiar la contraseña del usuario actual"
- "Cambiar la contraseña de otros usuarios como administrador"
- "Entender cómo Linux gestiona las contraseñas"
    
order: 9
    

---

# Cambiar contraseñas

Las contraseñas son uno de los elementos más importantes para proteger el acceso a un sistema Linux.

Administrar correctamente las contraseñas ayuda a mantener el sistema seguro y controlar quién puede iniciar sesión.

Linux incluye herramientas sencillas para **cambiar contraseñas de usuarios**.

---

# El comando `passwd`

El comando principal para cambiar contraseñas es:

```bash
passwd
```

Este comando permite modificar la contraseña del usuario actual.

Cuando lo ejecutas, el sistema pedirá:

1. la contraseña actual
2. la nueva contraseña
3. confirmación de la nueva contraseña

Ejemplo:

```bash
passwd
```

Después de ingresar la información, la contraseña se actualizará.

---

# Cambiar la contraseña de otro usuario

Los administradores del sistema pueden cambiar la contraseña de cualquier usuario.

Para hacerlo se utiliza:

```bash
sudo passwd usuario
```

Ejemplo:

```bash
sudo passwd ana
```

El sistema pedirá escribir la nueva contraseña para ese usuario.

Esto es útil cuando:

- un usuario olvidó su contraseña
- se necesita restablecer una cuenta
- se administran múltiples usuarios en un sistema

---

# Qué ocurre cuando se cambia una contraseña

Cuando una contraseña se modifica, Linux actualiza la información almacenada en:

```
/etc/shadow
```

En este archivo se guardan **las contraseñas cifradas (hashes)** de los usuarios.

Esto significa que el sistema no guarda las contraseñas en texto plano.

En su lugar, almacena un valor cifrado que representa la contraseña.

---

# Reglas de contraseñas

En muchos sistemas Linux existen reglas para evitar contraseñas débiles.

Por ejemplo:

- longitud mínima
- combinación de caracteres
- evitar contraseñas comunes
- evitar reutilización de contraseñas antiguas

Estas reglas pueden configurarse mediante herramientas de seguridad del sistema.

---

# Forzar cambio de contraseña

En algunos casos un administrador puede obligar a un usuario a cambiar su contraseña en el próximo inicio de sesión.

Esto se puede hacer con:

```bash
sudo passwd -e usuario
```

Ejemplo:

```bash
sudo passwd -e ana
```

La próxima vez que `ana` inicie sesión, el sistema le pedirá crear una nueva contraseña.

---

# Buenas prácticas

Al trabajar con contraseñas conviene seguir algunas recomendaciones básicas.

- usar contraseñas largas y difíciles de adivinar
- no compartir contraseñas entre usuarios
- cambiar contraseñas periódicamente en sistemas críticos
- utilizar gestores de contraseñas cuando sea necesario

Estas prácticas ayudan a reducir riesgos de seguridad.

---

# Idea clave de esta lección

El comando `passwd` permite cambiar contraseñas de usuarios en Linux.

Los administradores pueden cambiar la contraseña de cualquier usuario utilizando `sudo`.

---

# Repaso

- `passwd` cambia la contraseña del usuario actual.
- `sudo passwd usuario` cambia la contraseña de otro usuario.
- Las contraseñas se almacenan cifradas en `/etc/shadow`.
- Los administradores pueden forzar cambios de contraseña.
- Usar contraseñas seguras es fundamental para la seguridad del sistema.
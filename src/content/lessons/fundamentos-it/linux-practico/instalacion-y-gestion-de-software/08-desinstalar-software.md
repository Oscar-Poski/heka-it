---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: instalacion-y-gestion-de-software
lessonSlug: 08-desinstalar-software
title: "Desinstalar software"

summary: "Aprender cómo eliminar programas instalados en Linux utilizando gestores de paquetes."

durationMinutes: 6

objectives:

- "Eliminar paquetes instalados"
- "Entender la diferencia entre remove y purge"
- "Limpiar dependencias que ya no se utilizan"
    
order: 8
    

---

# Desinstalar software

Así como puedes instalar software en Linux, también puedes **eliminar programas que ya no necesitas**.

Desinstalar software ayuda a:

- liberar espacio en disco
- mantener el sistema organizado
- evitar software innecesario

La eliminación de programas normalmente se realiza usando el **gestor de paquetes**.

---

# Eliminar software con `apt`

En sistemas basados en Debian o Ubuntu, puedes eliminar un programa usando:

```bash
sudo apt remove nombre_paquete
```

Por ejemplo:

```bash
sudo apt remove htop
```

Este comando:

- elimina el programa
- mantiene algunos archivos de configuración

Esto puede ser útil si planeas reinstalar el programa en el futuro.

---

# Eliminar completamente un paquete

Si deseas eliminar también los archivos de configuración del programa, puedes usar:

```bash
sudo apt purge nombre_paquete
```

Ejemplo:

```bash
sudo apt purge htop
```

Esto elimina:

- el programa
- archivos de configuración asociados

---

# Limpiar dependencias innecesarias

Cuando instalas software, a veces se instalan **dependencias adicionales**.

Si eliminas el programa principal, algunas dependencias pueden quedar instaladas aunque ya no se utilicen.

Para limpiar estas dependencias se utiliza:

```bash
sudo apt autoremove
```

Esto elimina paquetes que ya no son necesarios.

---

# Desinstalar software con `dnf`

En sistemas basados en Red Hat, como Fedora o Rocky Linux, el proceso es similar.

Se utiliza:

```bash
sudo dnf remove nombre_paquete
```

Ejemplo:

```
sudo dnf remove htop
```

Esto elimina el programa del sistema.

---

# Verificar paquetes instalados

Antes de eliminar un programa, puedes verificar si está instalado usando:

```bash
apt list--installed
```

También puedes buscar un paquete específico usando:

```bash
apt list--installed |grep nombre
```

Esto ayuda a confirmar que el paquete existe en el sistema.

---

# Buenas prácticas

Al eliminar software conviene recordar algunas recomendaciones:

- eliminar programas que no se utilizan
- limpiar dependencias innecesarias
- revisar qué paquetes se eliminarán antes de confirmar

Esto ayuda a mantener el sistema más limpio y eficiente.

---

# Idea clave de esta lección

Linux permite desinstalar software fácilmente mediante gestores de paquetes como `apt` o `dnf`.

---

# Repaso

- `apt remove` elimina un programa.
- `apt purge` elimina también archivos de configuración.
- `apt autoremove` limpia dependencias innecesarias.
- `dnf remove` elimina paquetes en sistemas Red Hat.
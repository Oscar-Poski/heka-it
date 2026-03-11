---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: redes-en-linux
lessonSlug: 08-transferencia-de-archivos-en-red-scp-rsync
title: "Transferencia de archivos en red (scp, rsync)"

summary: "Aprender a transferir archivos entre sistemas Linux utilizando herramientas como scp y rsync."

durationMinutes: 9

objectives:

- "Transferir archivos entre sistemas usando scp"
- "Sincronizar archivos con rsync"
- "Comprender las ventajas de cada herramienta"
    
order: 8
    

---

# Transferencia de archivos en red (`scp`, `rsync`)

En muchos entornos Linux es común **transferir archivos entre diferentes sistemas**.

Por ejemplo:

- copiar archivos a un servidor
- descargar datos desde otro sistema
- sincronizar directorios entre máquinas
- realizar respaldos remotos

Linux incluye herramientas muy útiles para estas tareas, entre ellas:

- **scp**
- **rsync**

Ambas permiten transferir archivos a través de la red.

---

# El comando `scp`

`scp` significa:

**secure copy**

Permite copiar archivos entre sistemas utilizando el protocolo **SSH**.

Esto significa que la transferencia está **cifrada y segura**.

---

# Copiar archivo a un servidor

Ejemplo:

```bash
scp archivo.txt usuario@servidor:/ruta/destino/
```

Ejemplo real:

```bash
scp archivo.txt oscar@192.168.1.50:/home/oscar/
```

Este comando:

1. se conecta al servidor remoto
2. copia el archivo
3. lo guarda en el destino especificado

---

# Copiar archivo desde un servidor

También puedes copiar archivos desde un sistema remoto hacia tu máquina.

Ejemplo:

```bash
scp usuario@servidor:/ruta/archivo.txt .
```

Ejemplo real:

```bash
scp oscar@192.168.1.50:/home/oscar/archivo.txt .
```

El punto `.` indica **el directorio actual**.

---

# Copiar directorios

Para copiar directorios completos se utiliza la opción:

```
-r
```

Ejemplo:

```bash
scp -r carpeta usuario@servidor:/home/oscar/
```

Esto copia toda la carpeta y su contenido.

---

# El comando `rsync`

Otra herramienta muy utilizada es:

```bash
rsync
```

`rsync` se utiliza principalmente para **sincronizar archivos o directorios entre sistemas**.

Tiene varias ventajas:

- solo transfiere archivos modificados
- puede reanudar transferencias
- es eficiente para grandes volúmenes de datos

---

# Ejemplo básico de `rsync`

```bash
rsync archivo.txt usuario@servidor:/home/oscar/
```

Esto copia el archivo al servidor remoto.

---

# Sincronizar directorios

Un uso común de `rsync` es sincronizar directorios completos.

Ejemplo:

```bash
rsync -av carpeta/ usuario@servidor:/home/oscar/carpeta/
```

Opciones usadas:

```bash
-a  modo archivo (preserva permisos)
-v  modo verbose (muestra información)
```

Esto sincroniza el contenido del directorio.

---

# Transferencia segura

Cuando se usa con servidores remotos, `rsync` también utiliza **SSH**.

Ejemplo:

```bash
rsync -av carpeta/ usuario@servidor:/home/oscar/
```

Esto cifra la comunicación de la misma forma que `scp`.

---

# Diferencia entre `scp` y `rsync`

Ambas herramientas transfieren archivos, pero tienen diferencias importantes.

**scp**

- copia archivos directamente
- simple de usar
- siempre transfiere el archivo completo

---

**rsync**

- sincroniza archivos
- solo transfiere cambios
- más eficiente para respaldos y grandes directorios

Por esta razón, `rsync` se utiliza frecuentemente para **backups y sincronización de servidores**.

---

# Cuándo usar estas herramientas

`scp` y `rsync` se utilizan frecuentemente en entornos Linux como:

- administración de servidores
- despliegue de aplicaciones
- transferencia de archivos entre máquinas
- copias de seguridad

Son herramientas fundamentales para trabajar con sistemas remotos.

---

# Idea clave de esta lección

`scp` y `rsync` permiten transferir archivos entre sistemas Linux a través de la red de forma segura y eficiente.

---

# Repaso

- `scp` copia archivos mediante SSH.
- `scp -r` permite copiar directorios.
- `rsync` sincroniza archivos y directorios.
- `rsync` solo transfiere cambios, lo que lo hace más eficiente.
- Ambas herramientas se utilizan ampliamente en administración de sistemas.
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: sistema-archivos-linux
lessonSlug: 12-montaje-de-sistemas-de-archivos
title: "Montaje de sistemas de archivos"

summary: "Entender cómo Linux conecta discos y dispositivos de almacenamiento al sistema mediante el proceso de montaje."

durationMinutes: 8

objectives:

- "Comprender qué significa montar un sistema de archivos"
- "Entender cómo Linux accede a discos y dispositivos"
- "Aprender los conceptos básicos del comando mount"
    
order: 12
    

---

# Montaje de sistemas de archivos

En Linux, los discos y dispositivos de almacenamiento no aparecen automáticamente como carpetas independientes.

Para poder acceder a ellos, el sistema utiliza un proceso llamado **montaje**.

Montar un sistema de archivos significa **conectar un dispositivo de almacenamiento a la estructura del sistema de archivos de Linux**.

Esto permite que el sistema y los usuarios puedan acceder a los datos que contiene.

---

# Cómo funciona el montaje

En Linux, todo el sistema de archivos está organizado bajo el directorio raíz:

```
/
```

Cuando se monta un dispositivo, su contenido se **conecta a un punto dentro de esta estructura**.

Por ejemplo:

```
/
├── home
├── var
├── usr
└── media
```

Un dispositivo USB podría montarse dentro de:

```
/media/usb
```

Después de montarlo, el contenido del dispositivo aparece como si fuera una carpeta normal dentro del sistema.

---

# Qué es un punto de montaje

El **punto de montaje** es el directorio donde se conecta el sistema de archivos del dispositivo.

Por ejemplo:

```
/mnt/disco
```

o

```
/media/usb
```

Una vez montado el dispositivo, puedes acceder a sus archivos simplemente entrando a ese directorio.

---

# Dispositivos en Linux

En Linux, los discos y particiones se representan como **archivos dentro del directorio `/dev`**.

Por ejemplo:

```
/dev/sda
/dev/sda1
/dev/sdb1
```

Estos nombres representan:

- discos
- particiones
- dispositivos de almacenamiento

Cuando montas un sistema de archivos, normalmente conectas uno de estos dispositivos a un punto de montaje.

---

# Ver sistemas montados

Para ver qué sistemas de archivos están montados puedes usar:

```bash
mount
```

Este comando muestra una lista de los dispositivos conectados al sistema.

Otra forma común es usar:

```bash
df -h
```

Además de mostrar espacio disponible, también indica **dónde está montado cada sistema de archivos**.

---

# Montar un dispositivo manualmente

Para montar un dispositivo se utiliza el comando:

```bash
mount
```

La estructura básica es:

```bash
mount dispositivo punto_de_montaje
```

Ejemplo:

```bash
sudo mount /dev/sdb1 /mnt/usb
```

Esto conecta la partición `/dev/sdb1` al directorio `/mnt/usb`.

Después de esto, puedes acceder al contenido entrando en:

```
/mnt/usb
```

---

# Desmontar un dispositivo

Cuando terminas de usar un dispositivo, es importante **desmontarlo correctamente**.

Esto asegura que todos los datos se hayan escrito correctamente en el disco.

El comando para hacerlo es:

```bash
umount
```

Ejemplo:

```bash
sudo umount /mnt/usb
```

Después de desmontarlo, el sistema deja de acceder al dispositivo.

---

# Montaje automático

En muchos sistemas modernos, los dispositivos como USB se montan automáticamente cuando se conectan.

Esto ocurre gracias a herramientas del sistema y al entorno gráfico.

Sin embargo, en servidores o sistemas sin interfaz gráfica, es común montar dispositivos manualmente.

---

# Dónde suelen montarse dispositivos

Algunos directorios comunes para montar dispositivos son:

```
/mnt
/media
```

`/mnt` suele usarse para montajes temporales o manuales.

`/media` suele usarse para dispositivos extraíbles como USB.

---

# Idea clave de esta lección

Montar un sistema de archivos significa conectar un dispositivo de almacenamiento a la estructura del sistema de archivos de Linux.

Una vez montado, el contenido del dispositivo se puede acceder como si fuera parte del sistema.

---

# Repaso

- Linux accede a discos mediante el proceso de montaje.
- Los dispositivos aparecen como archivos dentro de `/dev`.
- Un punto de montaje es el directorio donde se conecta el dispositivo.
- `mount` conecta un sistema de archivos.
- `umount` lo desconecta de forma segura.
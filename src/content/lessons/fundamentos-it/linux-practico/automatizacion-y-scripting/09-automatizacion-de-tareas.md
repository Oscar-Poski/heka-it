---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: automatizacion-y-scripting
lessonSlug: 09-automatizacion-de-tareas
title: "Automatización de tareas"

summary: "Aprender cómo usar scripts de Bash para automatizar tareas comunes en Linux."

durationMinutes: 9

objectives:

- "Comprender el concepto de automatización en Linux"
- "Identificar tareas que pueden automatizarse"
- "Crear scripts simples para automatizar procesos"
    
order: 9
    

---

# Automatización de tareas

Una de las mayores ventajas de Linux es la capacidad de **automatizar tareas**.

La automatización consiste en crear scripts o programas que ejecutan tareas automáticamente sin intervención constante del usuario.

Esto permite:

- ahorrar tiempo
- evitar errores humanos
- repetir procesos de forma consistente

Bash es una herramienta muy utilizada para automatizar tareas en sistemas Linux.

---

# Qué tipo de tareas se pueden automatizar

Muchas tareas del sistema pueden automatizarse.

Por ejemplo:

- respaldos de archivos
- limpieza de archivos temporales
- actualización del sistema
- procesamiento de múltiples archivos
- monitoreo del sistema

En lugar de ejecutar estos comandos manualmente, se pueden colocar dentro de un script.

---

# Ejemplo simple de automatización

Supongamos que queremos ver el espacio en disco y luego listar archivos.

Podemos crear un script como este:

```bash
#!/bin/bash

echo "Espacio en disco:"
df -h

echo ""
echo "Archivos en el directorio actual:"
ls -lh
```

Cuando ejecutamos este script, ambos comandos se ejecutan automáticamente.

---

# Automatizar procesos repetitivos

Un ejemplo común es procesar múltiples archivos.

```bash
#!/bin/bash

for archivoin *.log
do
echo "Procesando $archivo"
done
```

Este script recorre todos los archivos `.log` y ejecuta acciones sobre ellos.

---

# Automatización en administración de sistemas

En entornos profesionales, la automatización es esencial.

Administradores de sistemas utilizan scripts para:

- configurar servidores
- instalar software
- crear usuarios
- desplegar aplicaciones
- realizar copias de seguridad

Esto permite administrar **muchos sistemas de forma eficiente**.

---

# Automatización y DevOps

En prácticas modernas de **DevOps**, la automatización es fundamental.

Muchas herramientas de infraestructura y despliegue utilizan scripts para:

- configurar entornos
- ejecutar pipelines
- administrar contenedores
- automatizar despliegues

Por esta razón, saber escribir scripts de Bash es una habilidad muy valiosa.

---

# Ejemplo práctico

Un script simple para mostrar información del sistema:

```bash
#!/bin/bash

echo "Usuario actual:"
whoami

echo "Directorio actual:"
pwd

echo "Fecha actual:"
date
```

Este script reúne información del sistema en un solo comando.

---

# Idea clave de esta lección

Los scripts de Bash permiten automatizar tareas repetitivas en Linux, facilitando la administración del sistema.

---

# Repaso

- Automatizar significa ejecutar tareas automáticamente.
- Los scripts permiten agrupar múltiples comandos.
- La automatización reduce errores humanos.
- Bash se utiliza ampliamente para automatización en Linux.
- Es una habilidad clave en administración de sistemas y DevOps.
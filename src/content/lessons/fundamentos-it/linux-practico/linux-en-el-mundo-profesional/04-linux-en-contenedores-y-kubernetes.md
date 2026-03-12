---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: linux-en-el-mundo-profesional
lessonSlug: 04-linux-en-contenedores-y-kubernetes
title: "Linux en contenedores y Kubernetes"

summary: "Comprender cómo Linux es la base tecnológica de los contenedores y plataformas de orquestación como Kubernetes."

durationMinutes: 9

objectives:

- "Comprender qué son los contenedores"
- "Entender el papel de Linux en tecnologías de contenedores"
- "Identificar cómo Kubernetes utiliza Linux para administrar aplicaciones"
    
order: 4
    

---

# Linux en contenedores y Kubernetes

En la infraestructura moderna, muchas aplicaciones ya no se ejecutan directamente en servidores tradicionales.

En su lugar, se utilizan **contenedores**.

Los contenedores permiten ejecutar aplicaciones de forma **aislada, ligera y portátil**.

Estas tecnologías están fuertemente basadas en **capacidades del kernel de Linux**.

---

# Qué es un contenedor

Un **contenedor** es un entorno aislado donde se ejecuta una aplicación junto con sus dependencias.

Esto permite que una aplicación funcione de forma consistente en diferentes sistemas.

Un contenedor incluye:

- la aplicación
- bibliotecas necesarias
- dependencias del entorno

Pero comparte el mismo kernel del sistema host.

---

# Contenedores vs máquinas virtuales

Los contenedores son diferentes de las máquinas virtuales.

Una máquina virtual incluye:

- sistema operativo completo
- kernel propio
- aplicaciones

En cambio, un contenedor:

- comparte el kernel del sistema host
- utiliza menos recursos
- inicia mucho más rápido

Esto hace que los contenedores sean muy eficientes.

---

# Linux como base de contenedores

Los contenedores funcionan gracias a características del kernel de Linux como:

- **namespaces** (aislamiento de procesos)
- **cgroups** (control de recursos)
- sistemas de archivos en capas

Estas características permiten ejecutar aplicaciones aisladas dentro del mismo sistema.

---

# Docker

Una de las herramientas más populares para trabajar con contenedores es:

```
Docker
```

Docker permite:

- crear imágenes de contenedores
- ejecutar contenedores
- distribuir aplicaciones empaquetadas

Muchas aplicaciones modernas se distribuyen como **imágenes Docker**.

---

# Qué es Kubernetes

Cuando una empresa ejecuta cientos o miles de contenedores, necesita una forma de administrarlos.

Aquí es donde entra **Kubernetes**.

Kubernetes es una plataforma que permite:

- ejecutar contenedores en múltiples servidores
- escalar aplicaciones automáticamente
- reiniciar contenedores que fallan
- distribuir carga entre servicios

---

# Kubernetes y Linux

Kubernetes se ejecuta principalmente en sistemas Linux.

Esto ocurre porque:

- los contenedores dependen del kernel de Linux
- muchas herramientas de infraestructura están diseñadas para Linux
- Linux es estable para entornos de gran escala

Por esta razón, muchos **clusters de Kubernetes están formados por nodos Linux**.

---

# Linux en infraestructura moderna

Hoy en día, gran parte de la infraestructura moderna utiliza:

- Linux
- contenedores
- Kubernetes
- plataformas cloud

Estas tecnologías permiten ejecutar aplicaciones de forma escalable y eficiente.

---

# Idea clave de esta lección

Los contenedores y Kubernetes dependen fuertemente de tecnologías del kernel de Linux, lo que convierte a Linux en la base de gran parte de la infraestructura moderna.

---

# Repaso

- Los contenedores permiten ejecutar aplicaciones aisladas.
- Los contenedores comparten el kernel del sistema host.
- Docker es una herramienta popular para contenedores.
- Kubernetes administra grandes cantidades de contenedores.
- Linux es la base tecnológica de muchas plataformas de contenedores.
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: instalacion-y-gestion-de-software
lessonSlug: 02-repositorios-de-software
title: "Repositorios de software"

summary: "Entender qué son los repositorios de software en Linux y cómo permiten distribuir e instalar programas de forma segura."

durationMinutes: 7

objectives:

- "Comprender qué es un repositorio de software"
- "Entender cómo Linux utiliza repositorios para distribuir programas"
- "Reconocer las ventajas del modelo de repositorios"
    
order: 3
    

---

# Repositorios de software

En Linux, la mayoría del software se instala desde **repositorios**.

Un **repositorio de software** es un servidor que contiene una colección organizada de paquetes disponibles para instalar en el sistema.

Estos repositorios son mantenidos normalmente por:

- la distribución Linux
- comunidades de desarrollo
- organizaciones que distribuyen software

Esto permite que el sistema obtenga programas de **fuentes confiables y verificadas**.

---

# Qué contiene un repositorio

Un repositorio normalmente incluye:

- miles de paquetes de software
- versiones actualizadas de programas
- información sobre dependencias
- firmas de seguridad

Los gestores de paquetes utilizan esta información para:

- buscar software
- descargar paquetes
- resolver dependencias
- instalar programas correctamente

---

# Cómo interactúa el sistema con los repositorios

Cuando ejecutas un comando como:

```bash
sudo apt install htop
```

el gestor de paquetes hace varias cosas:

1. consulta la lista de paquetes disponibles en los repositorios
2. encuentra el paquete solicitado
3. descarga el paquete desde el servidor
4. instala el software junto con sus dependencias

Todo este proceso ocurre de forma automática.

---

# Repositorios oficiales

Cada distribución Linux mantiene **repositorios oficiales**.

Estos repositorios contienen software que ha sido:

- probado
- empaquetado para esa distribución
- verificado por mantenedores

Por ejemplo, distribuciones como Ubuntu o Debian tienen repositorios con miles de paquetes listos para instalar.

Esto garantiza que el software sea compatible con el sistema.

---

# Repositorios adicionales

Además de los repositorios oficiales, también existen **repositorios adicionales**.

Estos pueden incluir:

- software más reciente
- herramientas especializadas
- aplicaciones de terceros

Sin embargo, es importante usar repositorios adicionales con cuidado, ya que no todos tienen el mismo nivel de seguridad o mantenimiento.

---

# Actualizar la lista de paquetes

Antes de instalar software, es común actualizar la lista de paquetes disponibles.

Esto se hace con:

```bash
sudo apt update
```

Este comando no instala software.

Lo que hace es **actualizar la información del sistema sobre los paquetes disponibles en los repositorios**.

---

# Buscar software en repositorios

También es posible buscar programas dentro de los repositorios.

Por ejemplo:

```bash
apt search nombre_programa
```

Esto muestra los paquetes disponibles que coinciden con el nombre buscado.

Esto facilita encontrar software directamente desde la terminal.

---

# Seguridad en repositorios

Una de las ventajas del sistema de repositorios es la seguridad.

Los paquetes suelen estar:

- firmados digitalmente
- verificados por la distribución
- distribuidos desde servidores confiables

Esto reduce el riesgo de instalar software malicioso.

---

# Ventajas del modelo de repositorios

El modelo de repositorios ofrece varias ventajas importantes.

- instalación rápida y sencilla
- actualizaciones centralizadas
- control automático de dependencias
- mayor seguridad en la distribución de software

Por esta razón, es el método preferido para instalar software en Linux.

---

# Idea clave de esta lección

Los repositorios son servidores que almacenan paquetes de software listos para instalar.

Los gestores de paquetes utilizan estos repositorios para buscar, descargar e instalar programas de forma segura.

---

# Repaso

- Un repositorio es un servidor que contiene paquetes de software.
- Las distribuciones Linux mantienen repositorios oficiales.
- Los gestores de paquetes descargan software desde estos repositorios.
- `apt update` actualiza la lista de paquetes disponibles.
- Los repositorios ayudan a distribuir software de forma segura.
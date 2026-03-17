---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: intro-linux
lessonSlug: 09-instalacion-de-linux-en-hardware-fisico
title: "Linux en Hardware Físico"

summary: "Entender cómo se instala Linux directamente en una computadora real, qué decisiones hay que tomar antes de comenzar y qué precauciones operativas conviene seguir."

durationMinutes: 8

objectives:

- "Entender qué significa instalar Linux en hardware físico"
- "Conocer las decisiones básicas antes de instalar"
- "Comprender el flujo general de una instalación real"
    
order: 9
    

---

# Instalación de Linux en hardware físico

Instalar Linux en una **máquina virtual** es una forma excelente de aprender sin riesgos.

Pero llega un momento en el que muchas personas quieren dar el siguiente paso:

**instalar Linux directamente en una computadora real**.

A esto le llamamos instalar Linux en **hardware físico**.

En esta modalidad, Linux deja de ejecutarse dentro de otro sistema y pasa a ser el sistema que corre directamente sobre la máquina.

---

## ¿Qué significa instalar Linux en hardware físico?

Significa que Linux se instalará directamente en el disco de una computadora real y utilizará de forma directa componentes como:

- procesador
- memoria RAM
- disco
- tarjeta de red
- teclado
- pantalla
- puertos USB

Esto permite una experiencia más completa y generalmente con mejor rendimiento que una máquina virtual.

---

## ¿Por qué instalar Linux directamente?

Instalar Linux en hardware físico tiene varias ventajas.

**Mejor rendimiento**

Linux puede usar directamente los recursos de la computadora.

**Experiencia real**

Permite aprender cómo se comporta el sistema en un entorno más cercano al uso diario o profesional.

**Acceso completo al hardware**

Esto incluye mejor interacción con almacenamiento, red, periféricos y aceleración gráfica, dependiendo del equipo.

**Uso continuo**

Si quieres usar Linux como tu sistema principal, esta es la forma correcta.

---

## Antes de instalar: decisiones importantes

Antes de comenzar, hay que tomar algunas decisiones operativas.

Estas decisiones son más importantes aquí que en una máquina virtual, porque ahora sí estás trabajando sobre una computadora real.

---

## Opción 1: Linux como único sistema operativo

En este escenario, Linux ocupará todo el disco o la parte destinada para él, y será el sistema principal de la computadora.

Esta opción suele ser la más simple desde el punto de vista técnico.

Ventajas:

- instalación más limpia
- menos complejidad
- administración más sencilla

Es buena opción si esa computadora será dedicada a Linux.

---

## Opción 2: Dual boot

En un esquema de **dual boot**, la computadora tendrá dos sistemas operativos instalados, por ejemplo:

- Windows y Linux
- macOS y Linux en escenarios muy específicos y menos comunes

Al encender la computadora, podrás elegir cuál sistema arrancar.

Esto permite aprender Linux sin abandonar completamente el sistema anterior.

Pero también implica más cuidado, porque hay que administrar mejor el espacio en disco y el proceso de arranque.

---

## Opción 3: Linux en una computadora dedicada

Otra opción práctica es instalar Linux en una máquina separada, por ejemplo:

- una laptop vieja
- una computadora secundaria
- una mini PC de laboratorio

Esta opción es muy útil para aprender sin tocar tu equipo principal.

---

## Precaución más importante: respaldo

Antes de instalar Linux en hardware físico, hay una regla básica:

**haz respaldo de tu información importante**.

Aunque muchas instalaciones salen bien, siempre existe riesgo cuando se modifica:

- el disco
- las particiones
- el sistema de arranque

Por eso conviene respaldar documentos, fotos, archivos de trabajo y cualquier dato importante antes de comenzar.

---

## Qué necesitas para instalar Linux en una computadora real

Normalmente necesitas lo siguiente:

### 1. Una imagen ISO de Linux

Es el archivo del instalador del sistema.

Distribuciones comunes para empezar:

- Ubuntu
- Linux Mint
- Fedora

### 2. Una memoria USB booteable

La imagen ISO se graba en una memoria USB para arrancar la computadora desde ahí.

A esto a veces se le llama crear un **USB de arranque** o **USB booteable**.

### 3. Una computadora compatible

La mayoría de las computadoras modernas pueden ejecutar Linux, aunque algunas pueden requerir configuraciones adicionales para temas como:

- Wi-Fi
- gráficos
- arranque seguro
- controladores

---

## Flujo general de instalación

A nivel operativo, la instalación en hardware físico suele seguir este flujo.

### Paso 1: Descargar la ISO

Primero descargas la imagen ISO de la distribución elegida.

### Paso 2: Crear el USB de arranque

Luego grabas esa ISO en una memoria USB con una herramienta adecuada.

### Paso 3: Arrancar desde el USB

Después reinicias la computadora y eliges arrancar desde la memoria USB.

Esto hace que cargue el instalador de Linux.

### Paso 4: Probar o instalar

Muchas distribuciones permiten primero probar Linux sin instalarlo.

Esto sirve para verificar si:

- detecta bien el teclado
- funciona el Wi-Fi
- se ve correctamente la pantalla
- el sistema responde bien

### Paso 5: Elegir tipo de instalación

Aquí normalmente decides si:

- borrar todo e instalar Linux
- instalar junto a otro sistema
- hacer particionado manual

### Paso 6: Configurar datos básicos

El instalador pedirá cosas como:

- idioma
- zona horaria
- usuario
- contraseña
- nombre del equipo

### Paso 7: Instalar y reiniciar

Al terminar, el sistema copia archivos al disco, configura el arranque y luego reinicia.

Después de eso, Linux ya arranca desde el disco interno del equipo.

---

## Diferencia importante respecto a una máquina virtual

En una máquina virtual, si algo sale mal, normalmente basta con borrar la VM.

En hardware físico, el impacto es mayor, porque estás trabajando sobre:

- el disco real
- el arranque real
- los datos reales del equipo

Por eso aquí importa más actuar con orden y entender qué estás haciendo.

---

## Qué puede cambiar al instalar en una computadora real

Cuando Linux se instala directamente en hardware físico, pueden aparecer temas prácticos que en una VM casi no se notan, por ejemplo:

- compatibilidad de drivers
- configuración de Wi-Fi
- particiones de disco
- UEFI y BIOS
- gestión de energía
- resolución de pantalla
- audio y periféricos

Esto no debe asustarte.

Solo significa que el entorno real tiene más variables que una máquina virtual.

---

## ¿Es mejor empezar con máquina virtual o con hardware físico?

Para aprender desde cero, normalmente conviene este orden:

1. primero una **máquina virtual**
2. después una **instalación en hardware físico**

La máquina virtual ayuda a entender el sistema sin riesgo.

La instalación real ayuda a dar el salto hacia una experiencia operativa completa.

---

## Idea clave de esta lección

Instalar Linux en hardware físico significa ejecutar el sistema directamente sobre una computadora real.

Esto ofrece una experiencia más completa y mejor rendimiento, pero también requiere más cuidado, especialmente con el disco, el arranque y los respaldos.

---

## Repaso

- Linux en hardware físico corre directamente sobre la computadora real.
- Puede instalarse como sistema único, en dual boot o en una máquina dedicada.
- Antes de comenzar, es importante respaldar la información.
- Normalmente se necesita una ISO y una memoria USB booteable.
- La instalación real exige más cuidado que una máquina virtual.
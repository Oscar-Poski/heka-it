---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: seguridad-basica-linux
lessonSlug: 08-copias-de-seguridad
title: "Repaso: Copias de seguridad"

summary: "Comprender la importancia de las copias de seguridad y aprender formas básicas de respaldar datos en Linux."

durationMinutes: 9

objectives:

- "Comprender por qué las copias de seguridad son esenciales"
- "Identificar qué información debe respaldarse"
- "Usar herramientas básicas de Linux para realizar respaldos"
    
order: 8
    

---

# Repaso: Copias de seguridad

Una **copia de seguridad** (backup) es una copia de datos importantes que se guarda en otro lugar para poder recuperarlos en caso de pérdida.

Las pérdidas de datos pueden ocurrir por muchas razones, por ejemplo:

- fallos de hardware
- errores humanos
- malware o ataques informáticos
- problemas durante actualizaciones
- borrado accidental de archivos

Las copias de seguridad permiten **recuperar información cuando algo sale mal**.

---

# Qué datos conviene respaldar

No siempre es necesario respaldar todo el sistema.

En muchos casos es más importante respaldar:

- archivos personales
- datos de aplicaciones
- bases de datos
- archivos de configuración
- scripts importantes

Por ejemplo, muchos archivos de configuración en Linux se encuentran en:

```
/etc
```

Respaldar esta información puede ser muy útil para reconstruir un sistema.

---

# Ubicación de los respaldos

Las copias de seguridad deben almacenarse en **un lugar diferente al sistema principal**.

Por ejemplo:

- discos externos
- servidores de respaldo
- almacenamiento en red
- servicios de almacenamiento en la nube

Guardar el respaldo en el mismo disco que el sistema original no protege contra fallos de hardware.

---

# Copiar archivos con `cp`

Una forma simple de crear un respaldo es copiar archivos a otra ubicación.

Ejemplo:

```bash
cp archivo.txt /ruta/respaldo/
```

También se pueden copiar directorios completos usando:

```bash
cp -r directorio /ruta/respaldo/
```

---

# Usar `rsync` para respaldos

Una herramienta muy utilizada para copias de seguridad en Linux es:

```
rsync
```

`rsync` permite copiar archivos de forma eficiente.

Ejemplo:

```bash
rsync -av /home/usuario /ruta/respaldo
```

Las opciones usadas aquí significan:

- `a` modo archivo (preserva permisos y estructura)
- `v` modo detallado (muestra progreso)

---

# Automatizar respaldos

Las copias de seguridad pueden automatizarse utilizando tareas programadas.

Por ejemplo, un script de respaldo puede ejecutarse diariamente mediante `cron`.

Esto asegura que los respaldos se realicen regularmente.

---

# Verificar los respaldos

Crear respaldos no es suficiente.

También es importante **verificar que los respaldos funcionen correctamente**.

Por ejemplo:

- comprobar que los archivos existen
- probar restaurar algunos archivos
- revisar que los permisos se mantengan

Esto asegura que los respaldos realmente serán útiles si ocurre un problema.

---

# Buenas prácticas de respaldo

Al trabajar con copias de seguridad es recomendable:

- realizar respaldos regularmente
- almacenar respaldos en ubicaciones diferentes
- automatizar el proceso cuando sea posible
- verificar periódicamente que los respaldos funcionen

Estas prácticas ayudan a proteger datos importantes.

---

# Idea clave de esta lección

Las copias de seguridad permiten recuperar información en caso de pérdida de datos y son una parte esencial de la seguridad del sistema.

---

# Repaso

- Un respaldo es una copia de datos importantes.
- Los respaldos protegen contra pérdida de información.
- `cp` y `rsync` permiten copiar archivos para respaldos.
- Es recomendable almacenar respaldos en otro dispositivo.
- Automatizar respaldos mejora la protección de datos.
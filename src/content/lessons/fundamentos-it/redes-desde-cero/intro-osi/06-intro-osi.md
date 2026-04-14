---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: intro-osi
lessonSlug: 06-intro-osi
title: 9.6 Presentación (Capa 6)

summary: Entender cómo se transforman, codifican y protegen los datos antes de ser enviados o interpretados.

durationMinutes: 7

objectives:

- Comprender el rol de la capa de Presentación
- Entender cómo se codifican los datos
- Aprender sobre formatos de datos
- Entender el rol del cifrado

order: 44

---

## Idea general

### Idea clave

La capa de Presentación se encarga de que los datos **tengan el formato correcto para ser entendidos por ambos extremos**.

```mermaid
flowchart LR
    A[Datos originales] --> B[Transformación] --> C[Datos transmitidos]
```

---

## Qué problema resuelve

Aunque los datos ya llegan:

- ¿En qué formato están?
- ¿Cómo interpretarlos correctamente?
- ¿Cómo protegerlos?

---

## Formato de datos

### Idea clave

Define cómo se representan los datos.

Ejemplos:

- Texto → UTF-8
- Imágenes → JPEG, PNG
- Video → MP4

```mermaid
flowchart TD
    A[Datos]
    A --> B[Texto]
    A --> C[Imagen]
    A --> D[Video]
```

---

## Codificación

### Idea clave

Convierte datos a un formato estándar.

```mermaid
flowchart LR
    A[Imagen original] --> B[Codificación] --> C[Bits transmitidos]
```

---

## Decodificación

### Idea clave

El receptor reconstruye los datos.

```mermaid
flowchart LR
    A[Bits recibidos] --> B[Decodificación] --> C[Imagen visible]
```

---

## Ejemplo: imágenes

### Idea clave

Un archivo de imagen no se envía como imagen, sino como datos codificados.

```mermaid
flowchart LR
    A[Foto] --> B[Codificada JPEG] --> C[Bits] --> D[Decodificada] --> E[Foto]
```

---

## Encriptación

### Idea clave

Protege los datos antes de enviarlos.

```mermaid
flowchart LR
    A[Texto plano] --> B[Encriptación] --> C[Texto cifrado]
```

---

## Desencriptación

### Idea clave

Recupera los datos originales.

```mermaid
flowchart LR
    A[Texto cifrado] --> B[Desencriptación] --> C[Texto plano]
```

---

## Relación con seguridad

### Idea clave

Aquí ocurre gran parte del procesamiento de datos seguros.

- Cifrado
- Compresión (a veces)
- Formatos estándar

---

## Relación con TCP/IP

### Idea clave

No existe como capa separada.

- Sus funciones están en:
    - Aplicación
    - Transporte (TLS/SSL)

```mermaid
flowchart LR
    A[OSI]
    A --> B[Presentación]

    C[TCP/IP]
    C --> D[Aplicación + TLS]
```

---

## Insight clave

### Idea clave

La capa de Presentación traduce los datos.

- Hace que ambos lados "hablen el mismo idioma"
- Asegura que los datos tengan sentido
- Protege la información

---

## Resumen

- Define cómo se representan los datos
- Codifica y decodifica información
- Maneja formatos (texto, imagen, video)
- Implementa encriptación y desencriptación
- En TCP/IP sus funciones están integradas en otras capas
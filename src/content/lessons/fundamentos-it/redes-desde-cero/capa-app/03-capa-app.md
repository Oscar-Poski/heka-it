---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: capa-app
lessonSlug: 03-capa-app
title: 7.3 Exploración del protocolo HTTP

summary: Comprender cómo funciona HTTP a bajo nivel mediante el uso de telnet y analizar la estructura real de una petición y respuesta HTTP.

durationMinutes: 12

objectives:

- Entender cómo funciona HTTP internamente
- Aprender a hacer una petición manual
- Identificar cabeceras y códigos de estado
- Comprender la importancia de seguir el protocolo correctamente
order: 30

---

## Idea general

### Idea clave

HTTP puede usarse manualmente, sin navegador.

```mermaid
flowchart LR
    U[Usuario] --> T[Telnet]
    T --> S[Servidor Web]
```

---

## Qué es telnet

### Idea clave

Telnet permite conectarse directamente a un servidor.

```mermaid
flowchart TD
    A[Telnet]
    A --> B[Conexión TCP]
    B --> C[Servidor]
```

---

## Conexión básica

```
telnet www.dr-chuck.com 80
```

### Idea clave

- Dominio → servidor
- Puerto 80 → HTTP

---

## Qué ocurre al conectar

```mermaid
sequenceDiagram
    participant C as Cliente (telnet)
    participant S as Servidor

    C->>S: Conexión TCP
    S->>C: Espera comando HTTP
```

---

## Error por protocolo incorrecto

### Idea clave

Si no sigues el protocolo, el servidor no responde correctamente.

```mermaid
sequenceDiagram
    participant C as Cliente
    participant S as Servidor

    C->>S: HELP
    S->>C: Error 501
    S->>C: Cierra conexión
```

---

## Ejemplo de error

```
501 Method Not Implemented
```

### Explicación

- El servidor no entiende el comando
- La conexión termina

---

## Petición HTTP correcta

```
GET http://www.dr-chuck.com/page1.htm HTTP/1.0
```

### Idea clave

Una petición debe seguir reglas exactas.

---

## Flujo completo HTTP

```mermaid
sequenceDiagram
    participant C as Cliente
    participant S as Servidor

    C->>S: GET /recurso
    S->>C: Cabeceras + contenido
```

---

## Estructura de la respuesta

### Idea clave

El servidor responde en dos partes.

```mermaid
flowchart TD
    A[Respuesta]
    A --> B[Cabeceras]
    A --> C[Contenido]
```

---

## Ejemplo de respuesta

```
HTTP/1.1 200 OK
Content-Type: text/html

<h1>Page</h1>
```

---

## Cabeceras HTTP

### Idea clave

Son metadatos sobre el contenido.

```mermaid
flowchart TD
    A[Cabeceras]
    A --> B[Content-Type]
    A --> C[Content-Length]
    A --> D[Last-Modified]
```

---

## Línea de estado

### Idea clave

Indica el resultado de la petición.

```mermaid
flowchart TD
    A[HTTP/1.1 200 OK]
    A --> B[Versión]
    A --> C[Código]
    A --> D[Mensaje]
```

---

## Códigos de estado

### Idea clave

Los códigos indican qué ocurrió.

```mermaid
flowchart TD
    A[2XX] --> B[Éxito]
    C[3XX] --> D[Redirección]
    E[4XX] --> F[Error cliente]
    G[5XX] --> H[Error servidor]
```

---

## Ejemplos comunes

```mermaid
flowchart TD
    A[200 OK]
    B[404 Not Found]
    C[301 Moved]

    A --> D[Todo bien]
    B --> E[No existe]
    C --> F[Redirigido]
```

---

## HTML en la respuesta

### Idea clave

El servidor envía contenido en formato HTML.

```mermaid
flowchart TD
    A[Servidor]
    A --> B[HTML]
    B --> C[Navegador interpreta]
```

---

## Qué hace el navegador

### Idea clave

Convierte HTML en una página visual.

```mermaid
flowchart TD
    A[HTML]
    A --> B[Renderizado]
    B --> C[Página web]
```

---

## Insight clave 

HTTP es texto simple pero extremadamente poderoso.

- Basado en texto
- Fácil de depurar
- Altamente extensible

> Toda la web funciona sobre estas reglas simples

---

## Resumen

- HTTP puede usarse manualmente con telnet
- Se conecta al puerto 80
- El servidor espera comandos válidos
- Una petición mal formada genera error
- Una petición correcta devuelve datos
- La respuesta incluye cabeceras y contenido
- Los códigos indican el resultado
- El contenido suele ser HTML
- El navegador interpreta ese HTML
---
trackSlug: fundamentos-it
courseSlug: redes-desde-cero
moduleSlug: capa-app
lessonSlug: 06-capa-app
title: 7.6 Creación de aplicaciones en red

summary: Entender cómo los desarrolladores crean aplicaciones que usan Internet sin preocuparse por la complejidad de la red.

durationMinutes: 8

objectives:

- Comprender cómo se construyen aplicaciones de red
- Entender el papel de las librerías
- Ver un ejemplo real de conexión cliente-servidor
- Entender por qué es “fácil” programar sobre Internet
order: 33

---

## Idea general

### Idea clave

Crear aplicaciones en red es más fácil de lo que parece.

```mermaid
flowchart LR
    A[Aplicación] --> B[Librerías]
    B --> C[Red]
```

---

## Abstracción de complejidad

### Idea clave

Las capas inferiores ocultan la complejidad de la red.

```mermaid
flowchart TD
    A[Aplicación]
    B[Transporte]
    C[Internet]
    D[Acceso]

    A --> B --> C --> D
```

### Explicación

- La aplicación no maneja:
    - paquetes
    - rutas
    - retransmisiones
- Todo eso lo hacen las capas inferiores

---

## Uso de librerías

### Idea clave

Los lenguajes ya incluyen herramientas para conectarse a la red.

```mermaid
flowchart TD
    A[Programador]
    A --> B[Librería de red]
    B --> C[Socket]
    C --> D[Internet]
```

### Beneficio

- No necesitas construir la red desde cero
- Solo usas funciones ya existentes

---

## Modelo mental

### Idea clave

Conectarse a un servidor es similar a leer un archivo.

```mermaid
flowchart LR
    A[Archivo local] --> B[Leer datos]
    C[Servidor remoto] --> D[Leer datos]
```

---

## Ejemplo real en Python

### Código

```py
importsocket

mysock=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
mysock.connect(('www.py4inf.com',80))
mysock.send('GET http://www.py4inf.com/code/romeo.txt HTTP/1.0\n\n')

whileTrue:
data=mysock.recv(512)
if (len(data)<1):
break
print(data)

mysock.close()
```

---

## Flujo de la conexión

```mermaid
sequenceDiagram
    participant Cliente
    participant Servidor

    Cliente->>Servidor: Conexión (puerto 80)
    Cliente->>Servidor: GET archivo
    Servidor->>Cliente: Datos
    Cliente->>Cliente: Mostrar datos
```

---

## Qué está pasando realmente

### Paso a paso

```mermaid
flowchart TD
    A[Crear socket]
    B[Conectar al servidor]
    C[Enviar petición HTTP]
    D[Recibir datos]
    E[Mostrar datos]
    F[Cerrar conexión]

    A --> B --> C --> D --> E --> F
```

---

## Importancia del puerto

### Idea clave

El puerto define qué aplicación estás usando.

```mermaid
flowchart LR
    A[Cliente] -->|Puerto 80| B[Servidor Web]
    A -->|Puerto 25| C[Servidor Mail]
```

---

## Simplicidad engañosa

### Idea clave

El código es corto porque la complejidad está oculta.

```mermaid
flowchart TD
    A[10 líneas de código]
    A --> B[Capas de red]
    B --> C[Gran complejidad interna]
```

---

## Rol de las capas

### Idea clave

Cada capa resuelve un problema distinto.

```mermaid
flowchart TD
    A[Aplicación: lógica]
    B[Transporte: confiabilidad]
    C[Internet: rutas]
    D[Acceso: medio físico]

    A --> B --> C --> D
```

---

## Impacto en el desarrollo

### Idea clave

Esto permite crear aplicaciones rápidamente.

```mermaid
flowchart TD
    A[Infraestructura compleja]
    B[Abstracción]
    C[Desarrollo rápido]

    A --> B --> C
```

---

## Tipos de aplicaciones posibles

### Ejemplos

```mermaid
flowchart TD
    A[Aplicaciones de red]
    A --> B[Navegadores]
    A --> C[Correo]
    A --> D[Videojuegos]
    A --> E[Streaming]
    A --> F[Apps móviles]
```

---

## Insight clave


Internet es una plataforma de innovación.

- Cualquiera puede crear aplicaciones
- No necesitas entender toda la red
- Solo necesitas usar sus interfaces

---

## Resumen

- Las aplicaciones de red usan librerías para comunicarse
- Conectarse a un servidor es sencillo (ej. sockets)
- El puerto define el tipo de servicio
- Las capas inferiores manejan toda la complejidad
- El código de red puede ser muy corto
- Esto permite crear aplicaciones rápidamente
- Internet funciona como una plataforma para innovación
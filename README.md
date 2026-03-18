# Hekademos IT

Plataforma educativa construida con Astro + React para aprender fundamentos de IT (Linux, redes, cloud y desarrollo) con rutas, cursos, módulos y lecciones en español.

## Stack

- `Astro 5`
- `React 18`
- `Tailwind CSS`
- `astro:content` para gestionar lecciones en Markdown

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura principal

```text
src/
  content/
    lessons/                 # Lecciones en Markdown
  lib/
    curriculum/
      catalog.ts             # Catálogo de tracks/cursos/módulos
      index.ts               # Carga lecciones + lógica de navegación/progreso
      types.ts
  pages/
    cursos/[track]/[course]/[module]/[lesson].astro
```

## Modelo de contenido

Las lecciones viven en `src/content/lessons/**.md` y usan este frontmatter (validado en `src/content.config.ts`):

```yaml
---
trackSlug: fundamentos-it
courseSlug: linux-practico
moduleSlug: uso-linux
lessonSlug: 01-primeros-comandos
title: Primeros comandos en Linux
summary: Comandos esenciales para empezar en terminal.
durationMinutes: 22
objectives:
  - Entender comandos base.
  - Navegar por el sistema de archivos.
order: 1
---
```

## Cómo agregar un módulo nuevo

1. Agrega el módulo en `src/lib/curriculum/catalog.ts` dentro del curso correspondiente (`slug`, `title`, `summary`).
2. Crea su carpeta en `src/content/lessons/<trackSlug>/<courseSlug>/<moduleSlug>/`.
3. Agrega las lecciones `.md` con frontmatter completo.
4. Ejecuta `npm run build` para validar rutas y contenido.

## Cómo escribir bloques de código en lecciones

Escribe Markdown estándar:

````markdown
```bash
pwd
```
````

El proyecto ya incluye estilos para:

- Encabezados y listas en `.markdown-content`
- Bloques `pre > code`
- Código inline
- Etiqueta visual para `bash/sh/shell`
- Texto en **negritas** en color teal oscuro dentro de contenido Markdown

## Mini-labs con terminal interactiva (xterm.js)

Puedes insertar un laboratorio interactivo en cualquier lección con un bloque `terminal`:

````markdown
```terminal
Goal: practice basic commands
Try: pwd, ls, cd, cat, mkdir, touch, rm, cp, mv, clear, help
```
````

Notas:
- Cada bloque `terminal` crea una sesión independiente.
- Es una terminal **simulada** (no ejecuta comandos reales del sistema).
- Comandos no soportados responden con `command not found` y sugerencia de `help`.
- No hay persistencia entre recargas.

## Notas importantes

- `lessonSlug` debe ser único dentro de cada ruta `track/course/module` para evitar warnings de IDs duplicados en Astro content.
- La vista de lección muestra progreso por **módulo** en el sidebar izquierdo.
- El sitio está configurado para GitHub Pages con base path `'/heka-it'` en `astro.config.js`.

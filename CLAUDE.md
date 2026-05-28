# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # static export to /out (next build)
npm run lint     # ESLint via Next.js
```

There is no test suite. The app is statically exported (`output: "export"` in `next.config.js`), so there is no server-side runtime.

## Architecture

**Heka IT** is a Spanish-language IT education platform built with Next.js 14 App Router. It renders entirely as a static site. User progress is persisted in `localStorage` under the key `hekademos:progreso:v1`.

### Routing

```
/                         → app/page.tsx (landing, shows both course tracks)
/tema/[slug]              → app/tema/[slug]/TemaPageClient.tsx
/tema/[slug]/[capitulo]   → app/tema/[slug]/[capitulo]/CapituloPageClient.tsx
```

Static params for capítulo pages are generated from `content/index.ts → getCapituloStaticParams()`, which reads `temas` and `temasAutomatizacion` from `content/temas.ts`.

### Content model (`lib/types.ts`)

```
Tema          → metadata (slug, nombre, totalCapitulos, …)
└─ Capitulo   → slug, numero, titulo, pasos[]
   └─ Paso    → titulo?, secciones[]
      └─ Seccion (discriminated union on `tipo`):
           texto | analogia | anatomia | pasos | visual | highlight | quiz
```

### Content files

- `content/temas.ts` — two arrays: `temas` (Fundamentos de IT) and `temasAutomatizacion` (IA para Automatización). Only the slugs that have matching files in `content/{slug}/` are playable.
- `content/index.ts` — aggregates all capítulo files into the `capitulos` map and exports `getCapitulo(slug, numero)`.
- `content/{slug}/{n}.ts` — one file per capítulo, exports a `Capitulo` object as default.

Currently implemented content: `redes` (6 caps), `linux` (6 caps), `claude_cowork` (4 caps), `n8n` (4 caps), `zapier` (4 caps). The remaining temas in `temas.ts` (git, seguridad, bases-de-datos, docker, cloud, terraform, kubernetes) have no content files yet.

### Visual/interactive sections

`tipo: "visual"` sections reference a component by string key via `COMPONENT_MAP` in `components/sections/SectionRenderer.tsx`. To add a new interactive component:
1. Create `components/sections/MyComponent.tsx`
2. Add it to `COMPONENT_MAP` with a kebab-case key
3. Use `{ tipo: "visual", componente: "my-component" }` in a content file

`SectionRenderer` also handles routing quiz sections: `tipo: "quiz"` sections return `null` from the renderer and are extracted separately by `CapituloPageClient`, which wires them to `useProgress` and navigation.

### Design system

Tailwind config (`tailwind.config.ts`) defines the brand tokens:

| Token | Value | Usage |
|---|---|---|
| `bg` | `#F5F0E8` | Page background (warm sand) |
| `accent` | `#00A896` | Primary CTA, active states |
| `teal` | `#00857A` | Secondary teal |
| `ink` | `#0F1923` | Display headings |
| `font-sans` | DM Sans | Body text |
| `font-display` | DM Serif Display | Hero/display headings |
| `font-mono` | JetBrains Mono | Code/terminal |
| `rounded-card` | 14px | Standard card radius |

### Progress hook (`hooks/useProgress.ts`)

`useProgress()` returns `{ progress, hydrated, setActive, completarCapitulo, reset, isCapituloCompletado, capitulosCompletadosDe }`. The `hydrated` flag guards against SSR/hydration mismatches — always check it before rendering progress-dependent UI.

### Adding a new tema

1. Add a `Tema` entry to `temas` or `temasAutomatizacion` in `content/temas.ts`
2. Create `content/{slug}/1.ts … content/{slug}/N.ts` (one per capítulo)
3. Import and register them in `content/index.ts`

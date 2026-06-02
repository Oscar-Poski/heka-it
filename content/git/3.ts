import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "git",
  numero: 3,
  titulo: "Nivel 3 · Commits y la historia",
  pasos: [
    {
      titulo: "Qué es un commit",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "La unidad básica del historial",
          texto:
            "Un commit es una foto del proyecto en un momento concreto + metadata: quién lo hizo, cuándo, mensaje descriptivo y un hash único (SHA-1). Cada commit apunta al commit anterior, formando una cadena: el historial. HEAD es un puntero a tu commit actual.",
        },
        {
          tipo: "anatomia",
          eyebrow: "Anatomía de un commit",
          texto:
            "Cada commit tiene cuatro piezas. Toca cada una.",
          partes: [
            {
              id: "hash",
              label: "Hash (SHA-1)",
              color: "#FF5C5C",
              detalle:
                "Identificador único de 40 caracteres calculado a partir del contenido + autor + fecha + padre. Suele abreviarse a 7: `a3f9c1b`. Si cambia un solo byte, el hash cambia entero.",
            },
            {
              id: "autor",
              label: "Autor y fecha",
              color: "#3A8DFF",
              detalle:
                "Quién hizo el commit y cuándo. Se configura con git config user.name / user.email. Aparece en git log y en GitHub.",
            },
            {
              id: "msg",
              label: "Mensaje",
              color: "#FF9F43",
              detalle:
                "Una línea corta (≤72 chars) que explica QUÉ y POR QUÉ cambió. Opcionalmente un cuerpo más largo. Este texto es lo que tus colegas leerán dentro de 6 meses cuando intenten entender por qué hiciste algo.",
            },
            {
              id: "parent",
              label: "Padre(s)",
              color: "#00A896",
              detalle:
                "Apunta al commit anterior. Un commit normal tiene 1 padre. Un commit de merge tiene 2 (uno por rama fusionada). El primer commit del repo no tiene padre.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Buenos mensajes",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Mensaje mediocre vs mensaje útil",
          texto:
            "El mensaje de commit es lo único que verán tus colegas (y tú en 6 meses) al revisar el historial. Vale la pena escribirlo bien.",
          columnas: [
            {
              titulo: "Mensaje mediocre",
              subtitulo: "No ayuda a nadie",
              items: [
                "«fix»",
                "«cambios»",
                "«wip»",
                "«update»",
                "«asdf»",
                "Obliga a abrir el diff para entender qué pasó",
              ],
            },
            {
              titulo: "Mensaje útil",
              subtitulo: "Cuenta qué y por qué",
              destacada: true,
              items: [
                "«fix: corrige cálculo de IVA en facturas con descuento»",
                "«feat: añade login con Google»",
                "«refactor: extrae validación a módulo aparte»",
                "Verbo en imperativo, presente",
                "≤72 chars en la primera línea",
                "Cuerpo opcional con motivo y contexto",
              ],
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Convención popular (Conventional Commits): empieza con feat:, fix:, refactor:, docs:, test:, chore:. Hace los mensajes scannables y permite generar changelogs automáticos.",
        },
      ],
    },
    {
      titulo: "Navegar el historial",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Comandos para leer y deshacer",
          texto:
            "El historial es tu red de seguridad: aprende a leerlo y a moverte por él.",
          items: [
            {
              titulo: "git log",
              descripcion:
                "Lista los commits desde el más reciente. git log --oneline da una línea por commit. git log --graph dibuja las ramas.",
              icono: "List",
            },
            {
              titulo: "git show <hash>",
              descripcion:
                "Muestra el commit completo: mensaje, autor, fecha y todos los cambios (diff) que introdujo.",
              icono: "FileSearch",
            },
            {
              titulo: "git diff <hash1> <hash2>",
              descripcion:
                "Compara dos commits cualquiera. Útil para ver «qué cambió entre la versión que funcionaba y la que se rompió».",
              icono: "GitCompare",
            },
            {
              titulo: "git revert <hash>",
              descripcion:
                "Crea un commit nuevo que deshace los cambios de uno antiguo. Seguro y no reescribe historial. Ideal en ramas compartidas.",
              icono: "Undo2",
            },
            {
              titulo: "git reset --soft HEAD~1",
              descripcion:
                "Deshace el último commit pero mantiene los cambios en staging. Útil para reformular un commit antes de pushear.",
              icono: "Edit",
            },
            {
              titulo: "git checkout <hash> -- <archivo>",
              descripcion:
                "Trae un archivo desde una versión anterior sin tocar nada más. Útil para «recuperar» una versión vieja de un único archivo.",
              icono: "FileDown",
            },
          ],
          nota:
            "Regla de oro: NUNCA reescribas historial (reset --hard, rebase, force push) en ramas compartidas con otros. Solo en ramas tuyas que aún no has pusheado.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Hiciste 5 commits y descubres que el segundo introdujo un bug. ¿Cuál es la forma SEGURA de deshacerlo en una rama compartida?",
          opciones: [
            { texto: "git reset --hard <hash anterior>: borra del historial.", correcta: false },
            { texto: "Borrar la carpeta .git y empezar de cero.", correcta: false },
            { texto: "git revert <hash del bug>: crea un commit nuevo que deshace los cambios.", correcta: true },
            { texto: "Editar manualmente los archivos para revertir.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. git revert añade un commit que aplica el cambio inverso del commit problemático. NO reescribe historial: seguro en ramas compartidas. git reset --hard borraría commits que tus colegas ya tienen.",
          feedbackIncorrecto:
            "En ramas compartidas NUNCA reescribas historial (reset --hard, force push) — rompes la copia de todos los demás. git revert es seguro: crea un commit nuevo que deshace al malo. El historial crece pero queda consistente.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Qué hace el comando `git log --oneline`?",
          opciones: [
            { texto: "Lista los archivos del repo.", correcta: false },
            { texto: "Borra el log de Git.", correcta: false },
            { texto: "Exporta el log a un archivo.", correcta: false },
            { texto: "Muestra el historial de commits, uno por línea (hash corto + mensaje).", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. git log --oneline es la vista compacta del historial: hash corto + mensaje, un commit por línea. Ideal para escanear rápido. git log a secas muestra autor, fecha y mensaje completo.",
          feedbackIncorrecto:
            "git log muestra el historial de commits. --oneline lo compacta a una línea por commit (hash corto + mensaje). Combina con --graph para ver ramas: git log --oneline --graph --all.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Qué hace que dos commits tengan hashes distintos?",
          opciones: [
            { texto: "Tener distinto autor.", correcta: false },
            { texto: "Cualquier cambio en contenido, autor, fecha o commit padre cambia el hash entero.", correcta: true },
            { texto: "Solo el mensaje del commit.", correcta: false },
            { texto: "Git asigna hashes al azar.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El hash SHA-1 es una huella criptográfica de TODO el commit (contenido + metadata + padre). Un byte distinto en cualquier parte = hash totalmente distinto. Esto garantiza que el historial es inmutable: nadie puede cambiar un commit sin que el cambio se note.",
          feedbackIncorrecto:
            "El hash es una huella criptográfica del commit completo: contenido + metadata (autor, fecha, mensaje) + hash del padre. Cualquier byte distinto produce un hash totalmente distinto. Por eso Git puede detectar cualquier alteración del historial.",
        },
      ],
    },
  ],
};

export default capitulo;

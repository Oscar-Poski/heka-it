import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "git",
  numero: 2,
  titulo: "Nivel 2 · Los tres estados",
  pasos: [
    {
      titulo: "Working dir, staging, repo",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Git tiene tres zonas, no dos",
          texto:
            "La mayoría de sistemas de versiones tienen dos estados: «archivo modificado» y «archivo guardado». Git añade una zona intermedia: el staging area. Esa zona es la que te deja elegir QUÉ cambios van al próximo commit y cuáles no. Es el secreto de los commits limpios.",
        },
        {
          tipo: "anatomia",
          eyebrow: "Las tres zonas",
          texto:
            "Cada archivo en un repo Git vive en una de estas tres zonas. Toca cada una.",
          partes: [
            {
              id: "wd",
              label: "Working directory",
              color: "#FF9F43",
              detalle:
                "Tu carpeta de trabajo. Los archivos que estás editando ahora mismo en el editor. Los cambios aquí NO están guardados en Git todavía: si borras la carpeta, los pierdes.",
            },
            {
              id: "staging",
              label: "Staging area (index)",
              color: "#00A896",
              detalle:
                "Una zona de espera. Cuando haces `git add`, mueves cambios aquí: estás diciendo «esto va al próximo commit». Te deja preparar el commit con precisión, archivo por archivo, hunk por hunk.",
            },
            {
              id: "repo",
              label: "Repository (.git/)",
              color: "#00857A",
              detalle:
                "El historial permanente. Cuando haces `git commit`, los cambios de staging se vuelven una foto inmutable en el historial. A partir de aquí, son recuperables siempre.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Las tres zonas en acción",
      secciones: [
        {
          tipo: "visual",
          eyebrow: "Mueve los archivos",
          texto:
            "Haz clic en los archivos o usa los botones de comando para verlos viajar entre Working dir → Staging → Repository.",
          componente: "git-three-states",
        },
        {
          tipo: "highlight",
          texto:
            "El staging area es lo que distingue a Git de sistemas más simples. Te deja hacer commits «temáticos»: aunque hayas tocado 10 archivos, puedes stagear solo los 3 relacionados con el bug del login, commitear ese fix, y luego stagear los otros 7 para otro commit. Cada commit cuenta una historia limpia.",
        },
      ],
    },
    {
      titulo: "Comandos por zona",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Comandos para moverte entre zonas",
          texto:
            "Cada zona tiene comandos para añadir, quitar y revertir cambios.",
          items: [
            {
              titulo: "git add <archivo>",
              descripcion:
                "Working dir → Staging. Marca archivos para el próximo commit. git add -p deja elegir trozos específicos del archivo.",
              icono: "ArrowRight",
            },
            {
              titulo: "git commit -m \"...\"",
              descripcion:
                "Staging → Repository. Sella la foto. Crea un commit con todos los archivos staged y un mensaje descriptivo.",
              icono: "GitCommit",
            },
            {
              titulo: "git restore --staged <archivo>",
              descripcion:
                "Staging → Working dir. Quita un archivo del próximo commit sin perder sus cambios. Lo «desestagea».",
              icono: "Undo2",
            },
            {
              titulo: "git restore <archivo>",
              descripcion:
                "Descarta los cambios del working dir y vuelve a la última versión commiteada. ⚠️ Destructivo: los cambios sin commitear se pierden.",
              icono: "RotateCcw",
            },
            {
              titulo: "git diff",
              descripcion:
                "Muestra qué cambió en working dir vs staging. Con --staged muestra lo que cambió entre staging y el último commit.",
              icono: "FileText",
            },
            {
              titulo: "git status",
              descripcion:
                "Tu mapa: qué hay en cada zona, en qué rama estás, qué falta por hacer. Ejecútalo todo el tiempo.",
              icono: "Info",
            },
          ],
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Modificaste 10 archivos pero solo quieres incluir 3 en este commit. ¿Cómo lo haces?",
          opciones: [
            { texto: "git commit los incluye automáticamente todos.", correcta: false },
            { texto: "git add solo los 3 archivos que quieres, luego git commit.", correcta: true },
            { texto: "Hay que commitear los 10 juntos, no se puede separar.", correcta: false },
            { texto: "Borrar los 7 archivos sobrantes primero.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El staging te deja elegir qué va al commit. `git add archivo1 archivo2 archivo3` solo stagea esos tres. `git commit` los sella. Los otros 7 quedan modificados en working dir esperando su propio commit.",
          feedbackIncorrecto:
            "El staging area existe exactamente para esto. git add solo los archivos que quieres, git commit solo incluye lo staged. Los otros 7 quedan modificados, listos para un commit aparte. Eso son «commits temáticos».",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Hiciste `git add archivo.txt` pero ya no quieres incluirlo en el próximo commit. ¿Qué comando lo saca de staging sin perder los cambios?",
          opciones: [
            { texto: "git restore --staged archivo.txt", correcta: true },
            { texto: "git delete archivo.txt", correcta: false },
            { texto: "git commit --no archivo.txt", correcta: false },
            { texto: "Borrar el archivo manualmente.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. git restore --staged saca el archivo de staging y lo deja en working dir con sus cambios intactos. Es el «deshacer» del staging. (En Git viejos: git reset HEAD archivo.txt hacía lo mismo.)",
          feedbackIncorrecto:
            "git restore --staged es el comando moderno para desestagear: el archivo vuelve a estar solo en working dir, sin perder cambios. NO uses borrar ni reset --hard: eso destruye los cambios.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Cuándo se vuelven «permanentes» tus cambios en Git (recuperables siempre)?",
          opciones: [
            { texto: "Al guardar el archivo en el editor.", correcta: false },
            { texto: "Al hacer git add.", correcta: false },
            { texto: "Al hacer git commit: el cambio entra al historial inmutable.", correcta: true },
            { texto: "Al cerrar la terminal.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Solo después de git commit el cambio existe en el historial de Git. Guardar en el editor → working dir. git add → staging. git commit → repositorio. Antes del commit, los cambios pueden perderse.",
          feedbackIncorrecto:
            "Hasta que no haces git commit, los cambios viven solo en working dir o staging, y se pueden perder (borrar carpeta, reset --hard). git commit los sella en el historial inmutable, recuperables siempre.",
        },
      ],
    },
  ],
};

export default capitulo;

import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "git",
  numero: 1,
  titulo: "Nivel 1 · ¿Qué es Git?",
  pasos: [
    {
      titulo: "El problema",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "50 personas tocando el mismo código",
          texto:
            "Imagina escribir un libro con 50 autores que editan a la vez, todos sobre el mismo archivo, sin pisarse, sin perder cambios y con la posibilidad de volver a cualquier versión anterior. Sin un sistema, sería el caos. Git es el sistema que resuelve ese problema para el código (y para cualquier texto). Es lo que permite que miles de personas colaboren en Linux, en Wikipedia o en tu empresa.",
        },
        {
          tipo: "analogia",
          eyebrow: "Como Google Docs, pero serio",
          texto:
            "Git guarda fotos del proyecto en momentos clave (commits) y deja moverte entre ellas. A diferencia de Google Docs, tú decides cuándo se guarda una versión y qué nombre tiene.",
          items: [
            { label: "Foto de un instante", valor: "Commit (snapshot)", icono: "Camera" },
            { label: "Álbum de fotos", valor: "Historial del proyecto", icono: "Layers" },
          ],
        },
      ],
    },
    {
      titulo: "Qué Git NO es",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Confusiones comunes",
          texto:
            "Mucha gente mezcla conceptos. Aquí la diferencia real.",
          columnas: [
            {
              titulo: "Git",
              subtitulo: "La herramienta",
              destacada: true,
              items: [
                "Software de control de versiones",
                "Funciona 100% offline en tu máquina",
                "Lo creó Linus Torvalds en 2005",
                "Gestiona historial, ramas, merges",
                "Línea de comandos (también hay GUIs)",
              ],
            },
            {
              titulo: "GitHub / GitLab / Bitbucket",
              subtitulo: "Servicios en la nube",
              items: [
                "Plataformas que alojan repositorios Git",
                "Necesitan internet",
                "Añaden colaboración: pull requests, issues, CI/CD",
                "Existen otros: GitLab, Bitbucket, Gitea, Codeberg",
                "Puedes usar Git sin GitHub perfectamente",
              ],
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Git es como un libro de contabilidad inmutable: cada cambio queda registrado con autor, fecha y razón. Nunca se borra realmente nada. Eso lo convierte en la red de seguridad más útil que puedes tener al escribir código.",
        },
      ],
    },
    {
      titulo: "Tu primer repositorio",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "De cero a versionado en 4 comandos",
          texto:
            "Para empezar a versionar cualquier carpeta solo necesitas esto.",
          pasos: [
            {
              titulo: "git init",
              descripcion:
                "Convierte la carpeta actual en un repositorio Git. Crea una carpeta oculta .git/ donde Git guarda todo el historial. Ese es el repo: una carpeta normal con un .git dentro.",
            },
            {
              titulo: "git status",
              descripcion:
                "Muestra qué archivos tienes modificados, cuáles están listos para guardar y en qué rama estás. El comando que más vas a ejecutar en tu vida.",
            },
            {
              titulo: "git add <archivo>",
              descripcion:
                "Marca un archivo para incluirlo en el próximo commit. git add . marca todo lo modificado. Es como elegir qué fotos van al próximo álbum.",
            },
            {
              titulo: "git commit -m \"mensaje\"",
              descripcion:
                "Crea una foto permanente del estado actual con un mensaje descriptivo. A partir de aquí, puedes volver a este punto siempre que quieras.",
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
          pregunta: "¿Cuál es la diferencia entre Git y GitHub?",
          opciones: [
            { texto: "Son lo mismo con distinto nombre.", correcta: false },
            { texto: "Git es la herramienta de control de versiones; GitHub es un servicio en la nube que aloja repositorios Git.", correcta: true },
            { texto: "Git es la versión gratis y GitHub la versión paga.", correcta: false },
            { texto: "Git es para Linux y GitHub para Windows.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Git es software local que gestiona el historial sin necesitar internet. GitHub (y GitLab, Bitbucket) son plataformas que hospedan repos Git y añaden colaboración. Puedes usar Git sin GitHub.",
          feedbackIncorrecto:
            "Git es la herramienta que corre en tu máquina (versiona, ramifica, mergea). GitHub es un servicio en la nube que aloja repos Git y añade pull requests, issues, CI. Son cosas distintas que se usan juntas.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Acabas de crear un repositorio con `git init`. ¿Qué se creó en la carpeta?",
          opciones: [
            { texto: "Un archivo git.txt", correcta: false },
            { texto: "Una carpeta oculta .git/ que guarda todo el historial", correcta: true },
            { texto: "Una conexión con GitHub", correcta: false },
            { texto: "Nada visible: hay que ejecutar otro comando", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Git almacena todo (commits, ramas, config) en una carpeta oculta .git/ dentro del repo. Borrarla = perder el historial completo. Por eso un repo Git es solo «carpeta normal + .git dentro».",
          feedbackIncorrecto:
            "git init crea una carpeta oculta .git/ en tu directorio actual. Ahí vive todo el historial, las ramas y la config. Si borras .git, sigue siendo una carpeta normal pero ya no es un repo.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Cuál es el comando que más vas a ejecutar al trabajar con Git?",
          opciones: [
            { texto: "git commit", correcta: false },
            { texto: "git push", correcta: false },
            { texto: "git status (te dice dónde estás y qué cambió)", correcta: true },
            { texto: "git init", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. git status es el comando de orientación: te dice en qué rama estás, qué archivos cambiaste, qué está en staging y qué falta por commitear. Ejecútalo antes y después de cada operación.",
          feedbackIncorrecto:
            "git status es tu orientación constante. Te dice rama actual, archivos modificados, qué está staged. Ejecútalo todo el tiempo: antes de add, antes de commit, antes de cambiar de rama. Evita errores caros.",
        },
      ],
    },
  ],
};

export default capitulo;

import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "git",
  numero: 5,
  titulo: "Nivel 5 · Remotos y colaboración",
  pasos: [
    {
      titulo: "Local vs remoto",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Una copia para cada quien",
          texto:
            "Git es distribuido: cada copia del repo es completa. Tu copia local tiene todo el historial. Un «remoto» es otra copia (típicamente en GitHub) con la que sincronizas. Llamamos `origin` al remoto principal por convención, pero puedes tener varios.",
        },
        {
          tipo: "anatomia",
          eyebrow: "Los cuatro comandos del día a día",
          texto:
            "Para colaborar con cualquier otra copia del repo. Toca cada uno.",
          partes: [
            {
              id: "clone",
              label: "git clone",
              color: "#3A8DFF",
              detalle:
                "Descarga un repo remoto entero (todo el historial, todas las ramas) a tu máquina. Lo usas una vez, al inicio. Establece automáticamente el remoto como `origin`.",
            },
            {
              id: "pull",
              label: "git pull",
              color: "#00A896",
              detalle:
                "Trae los commits nuevos del remoto y los mergea en tu rama actual. Es fetch + merge en un comando. Ejecútalo antes de empezar a trabajar para arrancar con lo último.",
            },
            {
              id: "push",
              label: "git push",
              color: "#FF9F43",
              detalle:
                "Sube tus commits locales al remoto. Si la rama remota tiene commits que no tienes, falla y te obliga a pull primero. Eso protege el historial compartido.",
            },
            {
              id: "fetch",
              label: "git fetch",
              color: "#8B5CF6",
              detalle:
                "Descarga los commits nuevos del remoto pero NO los mergea. Útil para revisar qué cambió antes de integrar. git pull = git fetch + git merge.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Flujo de trabajo típico",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "El día a día con GitHub",
          texto:
            "Esta secuencia es la que usan equipos de software en todo el mundo (GitHub flow).",
          pasos: [
            {
              titulo: "1. git pull (en main)",
              descripcion:
                "Empiezas el día actualizando main con lo último del remoto. Así arrancas tu trabajo desde el estado más reciente.",
            },
            {
              titulo: "2. git switch -c feature/X",
              descripcion:
                "Creas una rama nueva para tu trabajo. NUNCA trabajes directo en main. La rama te aísla y permite revisión antes de mezclar.",
            },
            {
              titulo: "3. Trabajas + commits",
              descripcion:
                "Editas, git add, git commit con mensajes claros. Varios commits pequeños son mejores que uno gigante.",
            },
            {
              titulo: "4. git push -u origin feature/X",
              descripcion:
                "Subes tu rama al remoto. El -u solo se usa la primera vez: establece el «upstream». Luego basta con git push.",
            },
            {
              titulo: "5. Abres Pull Request",
              descripcion:
                "En GitHub creas un PR de feature/X a main. Tus colegas revisan, comentan, sugieren cambios. Iteras hasta aprobar.",
            },
            {
              titulo: "6. Merge a main + delete rama",
              descripcion:
                "Cuando se aprueba, mergeas el PR en GitHub. Borras la rama (local y remota). Vuelves a paso 1 para el siguiente trabajo.",
            },
          ],
        },
      ],
    },
    {
      titulo: ".gitignore y otros básicos",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Archivos y conceptos que vas a usar siempre",
          texto:
            "Estos no son comandos sino convenciones del ecosistema.",
          items: [
            {
              titulo: ".gitignore",
              descripcion:
                "Archivo en la raíz del repo que lista qué NO versionar: node_modules/, .env, archivos compilados, secretos. Plantillas en github.com/github/gitignore.",
              icono: "FileX",
            },
            {
              titulo: "README.md",
              descripcion:
                "Lo primero que ve quien clona tu repo. Explica qué hace el proyecto, cómo instalarlo y cómo contribuir. GitHub lo muestra en la portada.",
              icono: "FileText",
            },
            {
              titulo: "Pull Request (PR)",
              descripcion:
                "Propuesta de mergear una rama en otra. Permite revisión, comentarios, tests automáticos antes de integrar. Es la unidad de colaboración.",
              icono: "GitPullRequest",
            },
            {
              titulo: "Fork",
              descripcion:
                "Copia un repo ajeno en tu cuenta para experimentar sin tocar el original. Cuando tu cambio está listo, abres un PR al repo original.",
              icono: "GitFork",
            },
          ],
          nota:
            "NUNCA commites secretos (claves API, contraseñas, .env). Aunque borres el commit, el secreto vive en el historial para siempre. Si pasa: rota el secreto INMEDIATAMENTE.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Estás a punto de empezar a trabajar en una nueva feature. ¿Cuál es el primer comando?",
          opciones: [
            { texto: "git push origin main", correcta: false },
            { texto: "git pull (para tener main al día antes de ramificar)", correcta: true },
            { texto: "git commit -m \"empieza feature\"", correcta: false },
            { texto: "git reset --hard", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Siempre arranca con git pull en main para tener lo más reciente. Si ramificas desde una versión vieja, vas a tener que mergear cambios después y arriesgar conflictos innecesarios.",
          feedbackIncorrecto:
            "Antes de crear una rama, asegúrate de que main está al día. git pull trae los commits nuevos del remoto. Si ramificas desde una versión vieja, generas conflictos al integrar después.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Haces `git push` y Git te rechaza con «updates were rejected». ¿Qué pasó?",
          opciones: [
            { texto: "La rama remota tiene commits que tú no tienes. Hay que git pull primero para integrarlos.", correcta: true },
            { texto: "Perdiste internet.", correcta: false },
            { texto: "Tu commit es demasiado grande.", correcta: false },
            { texto: "GitHub está caído.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Git rechaza pushes que sobrescribirían commits remotos para proteger el trabajo de tus colegas. Solución: git pull (trae los commits remotos, posiblemente mergea), resuelves conflictos si hay, y git push de nuevo.",
          feedbackIncorrecto:
            "El push fue rechazado porque hay commits en el remoto que tú no tienes. Pushear sobrescribiría el trabajo de otros. Solución: git pull primero (descarga + mergea), resuelve conflictos si los hay, y push de nuevo. NUNCA uses --force en ramas compartidas.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Por error commiteaste un archivo `.env` con tu clave de API. Lo borraste en el siguiente commit. ¿La clave está segura?",
          opciones: [
            { texto: "Sí, ya no aparece en el código.", correcta: false },
            { texto: "Sí, mientras el repo sea privado.", correcta: false },
            { texto: "Solo si pusheaste con --force.", correcta: false },
            { texto: "No: vive en el historial para siempre. Rota la clave INMEDIATAMENTE y purga el commit del historial.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Git nunca borra realmente: el archivo sigue en el historial accesible con git log/show. Cualquiera con acceso al repo (o cualquiera siempre, si es público) puede recuperar la clave. Acción inmediata: rota la clave en el proveedor. Después, purga el commit con git filter-repo o BFG.",
          feedbackIncorrecto:
            "Borrar el archivo en un commit posterior NO lo elimina del historial. Cualquier persona con acceso al repo puede recuperarlo con git log. Lo único urgente: ROTA la clave en el servicio (AWS, OpenAI, lo que sea). Luego limpia el historial con git filter-repo o BFG. NUNCA confíes en «lo borré, está bien».",
        },
      ],
    },
  ],
};

export default capitulo;

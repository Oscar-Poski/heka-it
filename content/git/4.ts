import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "git",
  numero: 4,
  titulo: "Nivel 4 · Ramas y merge",
  pasos: [
    {
      titulo: "Qué es una rama",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Una línea de trabajo paralela",
          texto:
            "Una rama (branch) es solo un puntero móvil a un commit. Crear una rama es CASI gratis: no copia archivos, no duplica nada, solo crea un puntero nuevo. Esto te deja experimentar, hacer features y arreglar bugs sin tocar la rama principal hasta que el trabajo esté listo.",
        },
        {
          tipo: "analogia",
          eyebrow: "Como universos paralelos del código",
          texto:
            "Imagina que cada rama es un universo donde tu código evoluciona de forma distinta. Puedes saltar entre universos, y cuando uno funciona, lo fusionas con el principal.",
          items: [
            { label: "Universo principal", valor: "Rama main (estable)", icono: "Globe" },
            { label: "Universos experimentales", valor: "Ramas feature, fix, etc.", icono: "GitBranch" },
          ],
        },
      ],
    },
    {
      titulo: "Ramas y merge en acción",
      secciones: [
        {
          tipo: "visual",
          eyebrow: "Sigue una historia de ramificación",
          texto:
            "Avanza paso a paso por una historia real: estado inicial, crear rama, commits paralelos, merge final con dos padres.",
          componente: "git-graph",
        },
        {
          tipo: "highlight",
          texto:
            "Una rama NO es una carpeta separada. Es solo un puntero a un commit. Cambiar de rama (`git switch feature`) actualiza los archivos de tu working dir para reflejar el commit al que apunta esa rama. Todo en la misma carpeta, sin duplicaciones.",
        },
      ],
    },
    {
      titulo: "Comandos clave",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Crear, cambiar y combinar ramas",
          texto:
            "Lo que necesitas para trabajar en paralelo con seguridad.",
          items: [
            {
              titulo: "git branch",
              descripcion:
                "Lista las ramas locales. La actual va marcada con *. git branch <nombre> crea una nueva (sin cambiarte a ella).",
              icono: "List",
            },
            {
              titulo: "git switch <rama>",
              descripcion:
                "Te mueve a una rama existente. Con -c (git switch -c feature/login) crea y te cambia de una vez. Reemplaza al antiguo git checkout.",
              icono: "ArrowRightLeft",
            },
            {
              titulo: "git merge <rama>",
              descripcion:
                "Estando en la rama destino (ej. main), trae los cambios de otra rama. Si las historias divergen, crea un commit de merge con dos padres.",
              icono: "GitMerge",
            },
            {
              titulo: "git rebase <rama>",
              descripcion:
                "Alternativa a merge: «reescribe» tus commits encima de los de otra rama. Historial más lineal, pero NO usar en ramas compartidas.",
              icono: "GitPullRequest",
            },
            {
              titulo: "git branch -d <rama>",
              descripcion:
                "Borra una rama local (solo si ya está mergeada). git branch -D fuerza el borrado aunque no esté mergeada.",
              icono: "Trash2",
            },
            {
              titulo: "git log --all --oneline --graph",
              descripcion:
                "El comando más útil para ver el árbol completo: todos los commits, todas las ramas, dibujado en ASCII.",
              icono: "Network",
            },
          ],
        },
      ],
    },
    {
      titulo: "Conflictos de merge",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Cuando dos ramas tocan la misma línea",
          texto:
            "Si dos ramas modifican la misma línea de la misma forma, Git no puede decidir cuál vale. Marca el archivo como «en conflicto» con marcadores <<<<<<<, ======= y >>>>>>>. Tú decides qué versión queda. No es un error: es una pregunta de Git al humano.",
        },
        {
          tipo: "visual",
          eyebrow: "Resuélvelo tú",
          texto:
            "Mira cómo se ve un conflicto real y elige cómo resolverlo. Las opciones son: quedarte con main, con feature o combinar ambas.",
          componente: "git-conflict",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Quieres trabajar en una nueva funcionalidad sin romper main. ¿Qué haces?",
          opciones: [
            { texto: "Crear una rama nueva (git switch -c feature/X), trabajar ahí, y mergear a main cuando esté lista.", correcta: true },
            { texto: "Cambiar main directamente: si rompo algo, lo arreglo después.", correcta: false },
            { texto: "Hacer una copia de la carpeta entera del proyecto.", correcta: false },
            { texto: "Crear un fork del repositorio.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Es el patrón estándar: una rama feature por trabajo. Main siempre queda estable; experimentas en tu rama; cuando funciona, mergeas. Permite revisión en PR antes de tocar main.",
          feedbackIncorrecto:
            "Trabajar directo en main es riesgoso y bloquea a otros. Copiar la carpeta pierde el versionado. Forks son para colaborar con repos ajenos. La respuesta es ramas: ligeras, baratas, hechas para esto.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Estás en main y haces `git merge feature`. Git dice «CONFLICT: Merge conflict in archivo.js». ¿Qué pasa?",
          opciones: [
            { texto: "Git canceló el merge automáticamente.", correcta: false },
            { texto: "El archivo se perdió.", correcta: false },
            { texto: "Git pausó el merge y marcó el archivo en conflicto. Tú debes editarlo, eliminar los marcadores y commitear.", correcta: true },
            { texto: "Hay que reiniciar el repositorio.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Git no puede decidir entre dos cambios sobre la misma línea y te pasa la decisión. Edita el archivo (con la versión que quieras o combinando), git add archivo.js, git commit. Si quieres abortar el merge: git merge --abort.",
          feedbackIncorrecto:
            "Un conflicto NO es un error: es Git pidiéndote que decidas. El archivo lleva marcadores <<<<<<< ======= >>>>>>> mostrando ambas versiones. Edita a tu gusto, elimina los marcadores, git add, git commit. Para cancelar: git merge --abort.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Cuál es la diferencia entre git merge y git rebase?",
          opciones: [
            { texto: "Merge es más lento.", correcta: false },
            { texto: "Son lo mismo.", correcta: false },
            { texto: "Rebase solo funciona en GitHub.", correcta: false },
            { texto: "Merge fusiona historias creando un commit nuevo con dos padres; rebase reescribe los commits de una rama encima de otra para historial lineal.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Merge preserva la historia tal cual ocurrió (con commit de merge y dos padres). Rebase reescribe tus commits para que parezcan haber salido en línea recta desde el último commit de la otra rama. Historial más limpio, pero NO usar rebase en ramas compartidas: rompes la copia de los demás.",
          feedbackIncorrecto:
            "Merge = preserva historia real, crea commit de merge con dos padres. Rebase = reescribe historia, reaplica tus commits encima de la otra rama (lineal). Rebase queda más limpio pero reescribe historial: NO usar en ramas compartidas.",
        },
      ],
    },
  ],
};

export default capitulo;

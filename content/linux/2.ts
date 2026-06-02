import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "linux",
  numero: 2,
  titulo: "Nivel 2 · La terminal",
  pasos: [
    {
      titulo: "Por qué usar terminal",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Donde los botones se quedan cortos",
          texto:
            "Las interfaces gráficas son cómodas pero limitadas. Cuando necesitas renombrar mil archivos, conectarte a un servidor remoto o automatizar una tarea repetitiva, los botones se quedan cortos. La terminal te da control total: cada operación es un comando, cada comando se puede combinar y todo se puede automatizar.",
        },
        {
          tipo: "analogia",
          eyebrow: "Menú fijo vs cocina",
          texto:
            "Una interfaz gráfica es como pedir de un menú: rápido y simple, pero limitado a lo que alguien ya decidió. La terminal es la cocina: pides exactamente lo que quieres, combinas como quieras y escalas a lo que necesites.",
          items: [
            { label: "Menú fijo", valor: "Interfaz gráfica (GUI)", icono: "AppWindow" },
            { label: "La cocina entera", valor: "Terminal (CLI)", icono: "TerminalSquare" },
          ],
        },
      ],
    },
    {
      titulo: "Anatomía de un comando",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Tres piezas",
          texto:
            "Cada línea que escribes en la terminal tiene la misma estructura. Toca cada parte.",
          partes: [
            {
              id: "comando",
              label: "Comando",
              color: "#FF5C5C",
              detalle:
                "El programa que vas a ejecutar. Ej: ls lista archivos, cp copia, grep busca. Son ejecutables que viven en /usr/bin, /bin u otros directorios del PATH.",
            },
            {
              id: "opciones",
              label: "Opciones / Flags",
              color: "#3A8DFF",
              detalle:
                "Modifican el comportamiento. Empiezan con - (cortas) o -- (largas). Ej: ls -la combina -l (formato largo) y -a (incluye ocultos).",
            },
            {
              id: "argumentos",
              label: "Argumentos",
              color: "#00A896",
              detalle:
                "Los datos sobre los que opera el comando: un archivo, una ruta, un patrón. En cp origen.txt /tmp/, los argumentos son origen y destino.",
            },
          ],
        },
        {
          tipo: "visual",
          eyebrow: "Velo en acción",
          texto:
            "Sigue paso a paso qué pasa desde que escribes ls -la /etc hasta que ves la salida en pantalla.",
          componente: "terminal-flow",
        },
      ],
    },
    {
      titulo: "Comandos esenciales",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "El 80/20 de la terminal",
          texto:
            "Con estos cinco comandos resuelves la mayoría de tareas diarias.",
          items: [
            {
              titulo: "pwd — ¿Dónde estoy?",
              descripcion:
                "Print Working Directory. Te dice en qué carpeta estás parado. Tu punto de referencia siempre.",
              icono: "MapPin",
            },
            {
              titulo: "ls — ¿Qué hay aquí?",
              descripcion:
                "Lista archivos y carpetas. ls -la muestra detalles, permisos y archivos ocultos.",
              icono: "List",
            },
            {
              titulo: "cd — Moverse",
              descripcion:
                "Change Directory. cd .. sube un nivel, cd ~ va a tu home, cd /ruta va directo.",
              icono: "ArrowRightLeft",
            },
            {
              titulo: "man — Manual",
              descripcion:
                "man ls abre la documentación completa del comando ls. Tu primera parada cuando no sabes una opción.",
              icono: "BookOpen",
            },
            {
              titulo: "Ctrl+C / Ctrl+Z",
              descripcion:
                "Ctrl+C detiene un proceso. Ctrl+Z lo pausa y lo manda al fondo. Tus frenos de emergencia.",
              icono: "Square",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "La terminal no es solo para expertos. Con diez comandos bien aprendidos puedes automatizar tareas que a mano te llevarían horas. Y todo lo que aprendes funciona idéntico en cualquier servidor Linux del mundo.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta: "En el comando `ls -la /home`, ¿qué parte son las opciones?",
          opciones: [
            { texto: "`ls`", correcta: false },
            { texto: "`-la`", correcta: true },
            { texto: "`/home`", correcta: false },
            { texto: "Todo junto es una sola pieza.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. -la son dos flags combinados: -l (formato largo) y -a (incluye ocultos). ls es el comando y /home es el argumento.",
          feedbackIncorrecto:
            "Un comando tiene tres partes: programa (ls), opciones que modifican comportamiento (-la), argumentos (/home). Las opciones casi siempre empiezan con guión.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Estás perdido en la terminal y no sabes en qué carpeta estás. ¿Qué comando usas?",
          opciones: [
            { texto: "ls", correcta: false },
            { texto: "cd", correcta: false },
            { texto: "pwd", correcta: true },
            { texto: "man", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. pwd (Print Working Directory) imprime la ruta absoluta de la carpeta actual. Es lo primero que ejecutas cuando te desorientas.",
          feedbackIncorrecto:
            "ls lista archivos, cd te mueve, man abre manuales. Para saber tu ubicación actual: pwd. Imprime la ruta absoluta como /home/oscar/proyectos.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Lanzaste un proceso por error y la terminal queda colgada. ¿Cómo lo detienes?",
          opciones: [
            { texto: "Cerrando la ventana de la terminal.", correcta: false },
            { texto: "Ctrl+S", correcta: false },
            { texto: "Reiniciando el equipo.", correcta: false },
            { texto: "Ctrl+C: envía SIGINT al proceso en primer plano para que termine.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Ctrl+C manda SIGINT al proceso en primer plano y normalmente lo termina limpiamente. Si no responde, prueba Ctrl+\\ (SIGQUIT) o kill -9 PID desde otra terminal.",
          feedbackIncorrecto:
            "Cerrar la ventana mata todo sin limpiar; reiniciar es extremo. Ctrl+C envía SIGINT al proceso en primer plano y lo termina de forma controlada en la mayoría de casos.",
        },
      ],
    },
  ],
};

export default capitulo;

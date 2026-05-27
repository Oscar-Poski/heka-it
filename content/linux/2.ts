import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "la-terminal",
  numero: 2,
  titulo: "La terminal",
  //preguntaGancho:
    //"¿Por qué los mejores programadores del mundo prefieren escribir comandos en lugar de hacer clic en botones?",
  pasos: [
    {
      titulo: "El problema",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "El problema",
          texto:
            "Las interfaces gráficas son cómodas, pero tienen un límite. Cuando necesitas renombrar mil archivos de golpe, conectarte a un servidor remoto o automatizar una tarea repetitiva, los botones y menús se quedan cortos. La terminal existe para hacer exactamente eso: darte control total sobre el sistema sin restricciones.",
        },
        {
          tipo: "analogia",
          eyebrow: "La analogía",
          texto:
            "Usar una interfaz gráfica es como pedir comida en un restaurante con menú fijo: rápido y fácil, pero solo puedes elegir lo que alguien ya decidió por ti. La terminal es la cocina: puedes pedir exactamente lo que quieres, combinarlo como quieras y hacerlo a cualquier escala. Más curva de aprendizaje, poder infinitamente mayor.",
          items: [
            { label: "Menú fijo", valor: "Interfaz gráfica (GUI)", icono: "AppWindow" },
            { label: "La cocina", valor: "Terminal (CLI)", icono: "TerminalSquare" },
          ],
        },
      ],
    },
    {
      titulo: "Anatomía de un comando",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Anatomía de un comando",
          texto:
            "Cada línea que escribes en la terminal tiene una estructura. Toca cada parte para entender qué hace.",
          partes: [
            {
              id: "comando",
              label: "Comando",
              color: "#FF5C5C",
              detalle:
                "Es el programa que quieres ejecutar. Por ejemplo, `ls` lista archivos, `cp` copia, `grep` busca texto. Son ejecutables que viven en directorios como /usr/bin.",
            },
            {
              id: "opciones",
              label: "Opciones / Flags",
              color: "#4A9EFF",
              detalle:
                "Modifican el comportamiento del comando. Suelen empezar con `-` o `--`. Por ejemplo, `ls -la` activa el modo largo (`-l`) y muestra archivos ocultos (`-a`).",
            },
            {
              id: "argumentos",
              label: "Argumentos",
              color: "#00A896",
              detalle:
                "Son los datos sobre los que opera el comando: un archivo, una ruta, un texto. En `cp archivo.txt /tmp/`, los argumentos son el origen y el destino.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "La terminal no es solo para expertos. Es para cualquiera que quiera dejar de depender de que alguien más diseñe el botón correcto. Con diez comandos bien aprendidos, puedes automatizar tareas que a mano te tomarían horas.",
        },
      ],
    },
    {
      titulo: "Comandos esenciales",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Comandos esenciales para empezar",
          texto:
            "Estos son los comandos que usarás el 80% del tiempo desde el primer día.",
          pasos: [
            {
              titulo: "pwd — ¿Dónde estoy?",
              descripcion:
                "Print Working Directory. Te dice en qué carpeta estás parado en este momento. Es tu punto de referencia siempre.",
            },
            {
              titulo: "ls — ¿Qué hay aquí?",
              descripcion:
                "Lista los archivos y carpetas del directorio actual. Con `ls -la` ves también los archivos ocultos y los permisos de cada uno.",
            },
            {
              titulo: "cd — Moverse",
              descripcion:
                "Change Directory. Te mueve entre carpetas. `cd ..` sube un nivel, `cd ~` te lleva a tu carpeta de usuario, `cd /ruta/exacta` va directo.",
            },
            {
              titulo: "man — El manual",
              descripcion:
                "Manual. `man ls` te abre la documentación completa del comando `ls`. Si alguna vez no sabes qué hace una opción, aquí está la respuesta.",
            },
            {
              titulo: "Ctrl+C y Ctrl+Z",
              descripcion:
                "Ctrl+C detiene un proceso en ejecución. Ctrl+Z lo pausa y lo manda al fondo. Son tus frenos de emergencia cuando algo no va como esperabas.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Visualización",
      secciones: [
        {
          tipo: "visual",
          eyebrow: "Visualización",
          texto:
            "Así fluye una instrucción desde que la escribes hasta que el sistema la ejecuta.",
          componente: "terminal-flow",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta: "¿Qué parte de un comando como `ls -la /home` son las opciones?",
          opciones: [
            { texto: "`ls`", correcta: false },
            { texto: "`-la`", correcta: true },
            { texto: "`/home`", correcta: false },
            { texto: "Todo junto es una sola unidad sin partes.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. `-la` son dos flags combinados: `-l` activa el formato largo con permisos y tamaños, y `-a` incluye los archivos ocultos (los que empiezan con punto). `ls` es el comando y `/home` es el argumento sobre el que opera.",
          feedbackIncorrecto:
            "Un comando tiene tres partes: el programa (`ls`), las opciones que modifican su comportamiento (`-la`) y los argumentos sobre los que opera (`/home`). Las opciones casi siempre empiezan con un guión.",
        },
      ],
    },
  ],
};

export default capitulo;

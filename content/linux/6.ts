import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "linux",
  numero: 6,
  titulo: "Nivel 6 · Pipes y redireccionamiento",
  pasos: [
    {
      titulo: "La filosofía Unix",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Una herramienta, una tarea, bien hecha",
          texto:
            "La filosofía original de Unix dice que cada herramienta debe hacer una sola cosa y hacerla bien. grep busca texto. sort ordena. wc cuenta. Ninguna por sí sola es espectacular. El poder está en conectarlas: la salida de una se convierte en la entrada de la siguiente, formando cadenas que procesan millones de líneas en segundos sin escribir código.",
        },
        {
          tipo: "analogia",
          eyebrow: "Línea de ensamblaje",
          texto:
            "Imagina una fábrica con estaciones especialistas. Cada estación toma lo que llega, hace su parte y lo pasa a la siguiente. El pipe (`|`) es la cinta transportadora.",
          items: [
            { label: "Estación especialista", valor: "Un comando (grep, sort, wc)", icono: "Wrench" },
            { label: "Cinta transportadora", valor: "Pipe `|`", icono: "ArrowRight" },
          ],
        },
      ],
    },
    {
      titulo: "Los tres flujos",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Stdin, stdout, stderr",
          texto:
            "Todo proceso en Linux nace con tres canales de comunicación abiertos. Toca cada uno.",
          partes: [
            {
              id: "stdin",
              label: "stdin (0)",
              color: "#3A8DFF",
              detalle:
                "Standard Input. Por donde el proceso recibe datos. Por defecto, el teclado. Redirígelo desde un archivo con `<` o desde otro proceso con `|`.",
            },
            {
              id: "stdout",
              label: "stdout (1)",
              color: "#00A896",
              detalle:
                "Standard Output. Por donde el proceso emite resultados. Por defecto, la terminal. Redirígelo a archivo con `>` (sobrescribe) o `>>` (añade al final).",
            },
            {
              id: "stderr",
              label: "stderr (2)",
              color: "#FF5C5C",
              detalle:
                "Standard Error. Un canal separado solo para errores. Por defecto se mezcla con stdout en la terminal. Redirígelo independiente con `2>` para separar errores de resultados normales.",
            },
          ],
        },
        {
          tipo: "visual",
          eyebrow: "Velo en un pipeline real",
          texto:
            "Sigue cómo viajan los datos a través de tres comandos encadenados con pipes.",
          componente: "pipeline-flow",
        },
        {
          tipo: "highlight",
          texto:
            "Un pipeline bien construido reemplaza scripts de 50 líneas. `cat access.log | grep '404' | awk '{print $7}' | sort | uniq -c | sort -rn | head -10` lee un log, filtra 404s, extrae URLs, las cuenta, ordena por frecuencia y muestra las 10 peores. Una línea, ningún script.",
        },
      ],
    },
    {
      titulo: "Operadores esenciales",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Cinco símbolos que cambian todo",
          texto:
            "Memorízalos: aparecen en cada script y cada terminal de producción.",
          items: [
            {
              titulo: "| (pipe)",
              descripcion:
                "Conecta stdout de un comando con stdin del siguiente. ls | grep log lista archivos y filtra los que contienen «log».",
              icono: "ArrowRight",
            },
            {
              titulo: "> (sobrescribir)",
              descripcion:
                "Redirige stdout a un archivo, borrando lo que había. echo hola > saludo.txt crea o sobrescribe. Cuidado: el contenido previo desaparece.",
              icono: "FilePlus",
            },
            {
              titulo: ">> (añadir)",
              descripcion:
                "Redirige stdout a un archivo añadiendo al final. echo línea >> log.txt acumula. Ideal para logs.",
              icono: "Plus",
            },
            {
              titulo: "2>&1",
              descripcion:
                "Une stderr con stdout. comando > salida.txt 2>&1 captura tanto resultados como errores en el mismo archivo. Imprescindible en scripts automatizados.",
              icono: "Combine",
            },
            {
              titulo: "/dev/null",
              descripcion:
                "Agujero negro. comando > /dev/null 2>&1 descarta toda la salida. Útil para ejecutar algo sin ensuciar la terminal.",
              icono: "Trash2",
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
          pregunta: "¿Qué hace `cat errores.log | grep 'FATAL' | wc -l`?",
          opciones: [
            { texto: "Abre el archivo, busca FATAL y borra esas líneas.", correcta: false },
            { texto: "Lee el archivo, filtra líneas con «FATAL» y cuenta cuántas hay.", correcta: true },
            { texto: "Copia las líneas con FATAL a un archivo llamado wc.", correcta: false },
            { texto: "Muestra el archivo e indica en qué líneas aparece FATAL.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. cat lee y emite; grep filtra solo líneas con FATAL; wc -l cuenta. Tres herramientas especializadas, un resultado preciso. Ningún paso modifica el archivo: solo procesan en memoria.",
          feedbackIncorrecto:
            "Sigue el flujo: cat emite todas las líneas, grep filtra las que contienen FATAL, wc -l cuenta las resultantes. Nada modifica ni copia archivos. El número final es cuántas líneas FATAL hay.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Quieres añadir una línea a un log existente sin borrar lo que ya tenía. ¿Qué operador usas?",
          opciones: [
            { texto: "`>`", correcta: false },
            { texto: "`>>`", correcta: true },
            { texto: "`|`", correcta: false },
            { texto: "`2>`", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. `>>` añade al final del archivo sin borrar. `>` sobrescribiría todo el contenido previo, lo que es desastroso para logs. Para logs, siempre `>>`.",
          feedbackIncorrecto:
            "`>` sobrescribe (borra lo que había). `>>` añade al final preservando el contenido previo. Para logs, scripts de auditoría o cualquier acumulación, usa `>>`.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Ejecutas un cron job y quieres capturar TANTO la salida normal COMO los errores en el mismo archivo. ¿Cómo?",
          opciones: [
            { texto: "comando > log.txt", correcta: false },
            { texto: "comando 2> log.txt", correcta: false },
            { texto: "comando > log.txt 2>&1", correcta: true },
            { texto: "comando | log.txt", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. > log.txt redirige stdout al archivo. 2>&1 redirige stderr al mismo destino que stdout (que ya apunta al archivo). Resultado: ambos se capturan juntos. Es el patrón clásico para logs de cron y servicios.",
          feedbackIncorrecto:
            "stdout y stderr son canales separados. > log.txt solo captura stdout. 2> log.txt solo captura stderr. Para juntar ambos: > log.txt 2>&1 (primero redirige stdout al archivo, luego stderr al mismo destino que stdout).",
        },
      ],
    },
  ],
};

export default capitulo;

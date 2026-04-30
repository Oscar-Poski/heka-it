import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "pipes-y-redireccionamiento",
  numero: 6,
  titulo: "Pipes y redireccionamiento",
  descripcion:
    "Programas pequeños que se combinan para hacer cosas extraordinarias.",
  tiempoMin: 7,
  preguntaGancho:
    "¿Y si pudieras combinar comandos simples como piezas de Lego para resolver problemas complejos en una sola línea?",
  secciones: [
    {
      tipo: "texto",
      eyebrow: "El problema",
      texto:
        "La filosofía original de Unix —y por extensión Linux— dice que cada herramienta debe hacer una sola cosa y hacerla bien. `grep` busca texto. `sort` ordena líneas. `wc` cuenta palabras. Ninguno por sí solo es espectacular. El poder está en conectarlos: la salida de uno se convierte en la entrada del siguiente, formando cadenas que pueden procesar millones de líneas en segundos sin escribir ni una línea de código.",
    },
    {
      tipo: "analogia",
      eyebrow: "La analogía",
      texto:
        "Imagina una línea de ensamblaje en una fábrica. La primera estación toma la materia prima, le hace algo y pasa el resultado a la siguiente. Cada estación es especialista en su tarea. El pipe (`|`) es la cinta transportadora que conecta las estaciones. Puedes reorganizar las estaciones, agregar nuevas o sacar las que no necesitas, sin rediseñar la fábrica entera.",
      items: [
        { label: "Estación de ensamblaje", valor: "Comando individual", icono: "Wrench" },
        { label: "Cinta transportadora", valor: "Pipe `|`", icono: "ArrowRight" },
      ],
    },
    {
      tipo: "anatomia",
      eyebrow: "Los tres flujos estándar",
      texto:
        "Todo proceso en Linux nace con tres canales de comunicación abiertos. Toca cada uno para entender qué hace.",
      partes: [
        {
          id: "stdin",
          label: "stdin (0)",
          color: "#4A9EFF",
          detalle:
            "Standard Input. El canal por donde un proceso recibe datos. Por defecto es el teclado. Puedes redirigirlo desde un archivo con `<` o desde otro proceso con `|`. Es la entrada de la fábrica.",
        },
        {
          id: "stdout",
          label: "stdout (1)",
          color: "#00FFBF",
          detalle:
            "Standard Output. El canal por donde un proceso manda sus resultados. Por defecto aparece en la terminal. Puedes redirigirlo a un archivo con `>` (sobreescribe) o `>>` (agrega al final).",
        },
        {
          id: "stderr",
          label: "stderr (2)",
          color: "#FF5C5C",
          detalle:
            "Standard Error. Un canal separado solo para mensajes de error. Por defecto también aparece en la terminal, mezclado con stdout. Puedes redirigirlo de forma independiente con `2>` para separar errores de resultados normales.",
        },
      ],
    },
    {
      tipo: "highlight",
      texto:
        "Un pipeline bien construido puede reemplazar un script de 50 líneas. `cat access.log | grep '404' | awk '{print $7}' | sort | uniq -c | sort -rn | head -10` — esa única línea lee un log de servidor, filtra los errores 404, extrae las URLs fallidas, las cuenta, las ordena por frecuencia y muestra las diez peores. Todo sin abrir un editor.",
    },
    {
      tipo: "pasos",
      eyebrow: "Operadores esenciales de redirección",
      texto:
        "Estos son los símbolos que conectan comandos y controlan hacia dónde van los datos.",
      pasos: [
        {
          titulo: "`|` — El pipe",
          descripcion:
            "Conecta la salida estándar de un comando con la entrada estándar del siguiente. `ls -la | grep '.log'` lista archivos y filtra solo los que terminan en `.log`.",
        },
        {
          titulo: "`>` — Redirigir a archivo (sobreescribir)",
          descripcion:
            "`echo 'hola' > saludo.txt` crea el archivo o lo sobreescribe completamente. Cuidado: si el archivo tenía contenido, desaparece sin advertencia.",
        },
        {
          titulo: "`>>` — Redirigir a archivo (agregar)",
          descripcion:
            "`echo 'nueva línea' >> log.txt` agrega el contenido al final del archivo sin borrar lo que había. Ideal para logs y registros acumulativos.",
        },
        {
          titulo: "`2>&1` — Unir stderr y stdout",
          descripcion:
            "Redirige stderr al mismo destino que stdout. `comando > salida.txt 2>&1` captura tanto los resultados como los errores en un solo archivo. Imprescindible para logs de procesos automatizados.",
        },
        {
          titulo: "`/dev/null` — El agujero negro",
          descripcion:
            "`comando > /dev/null 2>&1` descarta absolutamente toda la salida del comando. Útil cuando quieres ejecutar algo sin que llene la terminal de output que no te importa.",
        },
      ],
    },
    {
      tipo: "visual",
      eyebrow: "Visualización",
      texto:
        "Así fluyen los datos a través de un pipeline de tres comandos.",
      componente: "pipeline-flow",
    },
    {
      tipo: "quiz",
      pregunta: "¿Qué hace el comando `cat errores.log | grep 'FATAL' | wc -l`?",
      opciones: [
        {
          texto: "Abre el archivo, busca la palabra FATAL y borra esas líneas.",
          correcta: false,
        },
        {
          texto: "Lee el archivo, filtra las líneas que contienen 'FATAL' y cuenta cuántas hay.",
          correcta: true,
        },
        {
          texto: "Copia las líneas con 'FATAL' a un nuevo archivo llamado `wc`.",
          correcta: false,
        },
        {
          texto: "Muestra el archivo completo e indica en qué líneas aparece 'FATAL'.",
          correcta: false,
        },
      ],
      feedbackCorrecto:
        "Correcto. `cat` lee el archivo y lo manda por stdout. `grep 'FATAL'` recibe eso por stdin y filtra solo las líneas que contienen esa palabra. `wc -l` recibe esas líneas y las cuenta. Tres herramientas especializadas, un resultado preciso.",
      feedbackIncorrecto:
        "Sigue el flujo de datos: `cat` lee y emite, `grep` filtra las líneas que contienen 'FATAL', `wc -l` cuenta las líneas resultantes. Ningún paso modifica ni copia archivos: solo procesan datos en memoria y muestran el resultado.",
    },
  ],
};

export default capitulo;
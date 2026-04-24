import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "que-es-linux",
  numero: 1,
  titulo: "Linux: El sistema que mueve el mundo",
  descripcion:
    "El sistema operativo que nadie ve pero que mueve todo: servidores, la nube, tu teléfono.",
  tiempoMin: 7,
  preguntaGancho:
    "El 96% de los servidores del mundo, incluyendo los de Google, Netflix y Amazon, corren Linux. Tu teléfono Android también. ¿Cómo es que el sistema operativo más poderoso del planeta lo creó un estudiante universitario en su cuarto?",
  secciones: [
    {
      tipo: "texto",
      eyebrow: "El problema",
      texto:
        "En los años 90, los sistemas operativos serios —los que corrían en servidores y universidades— eran caros y cerrados. Unix costaba miles de dólares en licencias. Un estudiante finlandés llamado Linus Torvalds quería un sistema así para su computadora personal, pero no podía pagarlo. Así que decidió construir uno desde cero.",
    },
    {
      tipo: "analogia",
      eyebrow: "La analogía",
      texto:
        "Un sistema operativo es como el gerente de un edificio. Las aplicaciones son los inquilinos: cada uno necesita electricidad, agua, acceso al elevador. El gerente coordina todo para que nadie se pise los cables. Linux es ese gerente, solo que además es de código abierto: cualquiera puede leer el manual, proponer mejoras o construir su propia versión.",
      items: [
        { label: "Gerente del edificio", valor: "Sistema operativo", icono: "Building2" },
        { label: "Inquilinos", valor: "Aplicaciones", icono: "AppWindow" },
      ],
    },
    {
      tipo: "anatomia",
      eyebrow: "Anatomía de Linux",
      texto:
        "Linux no es un solo bloque. Tiene capas. Toca cada una para entender qué hace.",
      partes: [
        {
          id: "kernel",
          label: "Kernel",
          color: "#FF5C5C",
          detalle:
            "Es el núcleo real: el código que Linus Torvalds escribió. Habla directamente con el hardware — CPU, memoria, discos. Ninguna aplicación puede tocar el hardware sin pasar por él.",
        },
        {
          id: "shell",
          label: "Shell",
          color: "#4A9EFF",
          detalle:
            "Es la terminal que ves cuando usas Linux. Interpreta los comandos que escribes y se los pasa al kernel. Bash, Zsh y Fish son ejemplos de shells distintos.",
        },
        {
          id: "userspace",
          label: "Espacio de usuario",
          color: "#00FFBF",
          detalle:
            "Todo lo demás: aplicaciones, herramientas, la interfaz gráfica. Aquí viven tu navegador, tu editor de texto y los servicios del servidor. Se ejecutan en un espacio separado del kernel por seguridad.",
        },
      ],
    },
    {
      tipo: "highlight",
      texto:
        "El kernel de Linux tiene hoy más de 30 millones de líneas de código y más de 15,000 desarrolladores lo han tocado. Linus Torvalds lo lanzó en 1991 con un mensaje en un foro: 'Estoy haciendo un sistema operativo (libre), solo un hobby, no será grande ni profesional'. Fue el hobby más influyente de la historia.",
    },
    {
      tipo: "pasos",
      eyebrow: "¿Qué pasa cuando enciendes un servidor Linux?",
      texto:
        "En segundos, ocurren varias capas de arranque antes de que tu aplicación pueda correr.",
      pasos: [
        {
          titulo: "BIOS / UEFI",
          descripcion:
            "El firmware del hardware hace una prueba básica de los componentes y busca dónde está el sistema operativo para arrancarlo.",
        },
        {
          titulo: "Bootloader",
          descripcion:
            "Un pequeño programa (generalmente GRUB) carga el kernel de Linux en la memoria y le pasa el control.",
        },
        {
          titulo: "Kernel se inicializa",
          descripcion:
            "El kernel detecta el hardware disponible, monta el sistema de archivos raíz y prepara el entorno para que puedan correr procesos.",
        },
        {
          titulo: "PID 1: el primer proceso",
          descripcion:
            "El kernel lanza el primer proceso de usuario, generalmente systemd. Este se encarga de arrancar todos los demás servicios del sistema.",
        },
        {
          titulo: "Tu aplicación corre",
          descripcion:
            "Una vez que el sistema está listo, tus aplicaciones —un servidor web, una base de datos, una API— arrancan y quedan a la escucha.",
        },
      ],
    },
    {
      tipo: "visual",
      eyebrow: "Visualización",
      texto:
        "Así se relacionan el hardware, el kernel y las aplicaciones en Linux.",
      componente: "linux-layers",
    },
    {
      tipo: "quiz",
      pregunta: "¿Cuál es la función del kernel en Linux?",
      opciones: [
        { texto: "Mostrar la interfaz gráfica al usuario.", correcta: false },
        {
          texto: "Interpretar los comandos que escribe el usuario en la terminal.",
          correcta: false,
        },
        {
          texto:
            "Gestionar el acceso al hardware y coordinar los recursos entre los procesos.",
          correcta: true,
        },
        {
          texto: "Instalar y actualizar las aplicaciones del sistema.",
          correcta: false,
        },
      ],
      feedbackCorrecto:
        "Correcto. El kernel es la capa más baja: habla con el hardware directamente y decide qué proceso puede usar la CPU, la memoria o el disco en cada momento. Todo lo demás —la terminal, las apps— opera sobre él.",
      feedbackIncorrecto:
        "La interfaz gráfica y la terminal son partes del espacio de usuario, no del kernel. El kernel trabaja por debajo de todo eso: es el árbitro entre el software y el hardware, invisible pero esencial.",
    },
  ],
};

export default capitulo;
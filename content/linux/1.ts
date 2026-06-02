import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "linux",
  numero: 1,
  titulo: "Nivel 1 · Linux, el sistema que mueve el mundo",
  pasos: [
    {
      titulo: "Cómo nació",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Un hobby que se comió el mundo",
          texto:
            "En los 90, los sistemas operativos «serios» costaban miles de dólares en licencias. Unix era caro y cerrado. Un estudiante finlandés llamado Linus Torvalds quería uno para su PC, no podía pagarlo y decidió escribirlo él mismo. En 1991 publicó la primera versión con un mensaje en un foro: «Solo un hobby, no será grande ni profesional». Hoy corre el 96% de los servidores del mundo, todos los Androids, Netflix, Google y Amazon.",
        },
        {
          tipo: "analogia",
          eyebrow: "El gerente del edificio",
          texto:
            "Un sistema operativo es el coordinador entre las apps y el hardware. Linux es ese coordinador, pero de código abierto: cualquiera puede leerlo, mejorarlo o adaptarlo.",
          items: [
            { label: "Gerente del edificio", valor: "Sistema operativo", icono: "Building2" },
            { label: "Inquilinos", valor: "Aplicaciones que piden recursos", icono: "AppWindow" },
          ],
        },
      ],
    },
    {
      titulo: "Las capas de Linux",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "De lo más cercano al hardware a lo más cercano al usuario",
          texto:
            "Linux no es un solo bloque. Tiene capas que solo hablan con su vecina. Toca cada una.",
          partes: [
            {
              id: "kernel",
              label: "Kernel",
              color: "#FF5C5C",
              detalle:
                "El núcleo. Es el código que escribió Linus. Habla directamente con CPU, memoria y disco. Ninguna app toca el hardware sin pasar por él.",
            },
            {
              id: "shell",
              label: "Shell",
              color: "#3A8DFF",
              detalle:
                "La terminal que ves cuando usas Linux. Interpreta tus comandos y los traduce en llamadas al kernel. Bash, Zsh y Fish son shells distintos.",
            },
            {
              id: "userspace",
              label: "Espacio de usuario",
              color: "#00A896",
              detalle:
                "Todo lo demás: apps, herramientas, interfaz gráfica. Vive aislado del kernel por seguridad: si una app se cae, el sistema sigue.",
            },
          ],
        },
        {
          tipo: "visual",
          eyebrow: "Toca cada capa",
          texto:
            "Mira qué hace cada nivel y por qué nada salta capas en Linux.",
          componente: "linux-layers",
        },
        {
          tipo: "highlight",
          texto:
            "El kernel de Linux tiene más de 30 millones de líneas de código y 15.000+ desarrolladores lo han tocado. Empezó como hobby en 1991 y se convirtió en el software más usado del planeta.",
        },
      ],
    },
    {
      titulo: "Qué pasa al arrancar",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "De pulsar el botón a tu app corriendo",
          texto:
            "En segundos pasan cinco etapas. Saber cuáles son te ayuda a diagnosticar problemas de arranque.",
          pasos: [
            {
              titulo: "1. BIOS / UEFI",
              descripcion:
                "El firmware prueba los componentes (POST) y busca dónde está el bootloader del sistema operativo.",
            },
            {
              titulo: "2. Bootloader (GRUB)",
              descripcion:
                "Un pequeño programa carga el kernel de Linux en memoria y le pasa el control. Aquí eliges qué versión arrancar si tienes varias.",
            },
            {
              titulo: "3. Inicialización del kernel",
              descripcion:
                "El kernel detecta hardware, monta el sistema de archivos raíz y prepara el entorno para procesos.",
            },
            {
              titulo: "4. PID 1 (systemd)",
              descripcion:
                "El primer proceso de usuario. Arranca todos los servicios del sistema: red, SSH, base de datos, web. Cualquier otro proceso desciende de él.",
            },
            {
              titulo: "5. Tu app corre",
              descripcion:
                "Cuando systemd termina de levantar servicios, las aplicaciones quedan a la escucha y el sistema está listo.",
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
          pregunta: "¿Cuál es la función del kernel en Linux?",
          opciones: [
            { texto: "Mostrar la interfaz gráfica al usuario.", correcta: false },
            { texto: "Interpretar los comandos de la terminal.", correcta: false },
            { texto: "Gestionar el acceso al hardware y coordinar recursos entre procesos.", correcta: true },
            { texto: "Instalar y actualizar aplicaciones.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El kernel es la capa más baja: habla con el hardware directamente y decide qué proceso usa CPU, memoria o disco en cada momento. Todo lo demás opera sobre él.",
          feedbackIncorrecto:
            "La interfaz gráfica y la terminal son espacio de usuario, no kernel. El kernel trabaja por debajo: es el árbitro entre el software y el hardware.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Estás en Linux y ejecutas un comando en bash. ¿Quién termina hablándole al hardware?",
          opciones: [
            { texto: "Tu app directamente.", correcta: false },
            { texto: "Bash habla directamente con el disco y la CPU.", correcta: false },
            { texto: "El kernel. Bash le pide al kernel y el kernel ejecuta sobre el hardware.", correcta: true },
            { texto: "El BIOS interviene en cada comando.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Ningún programa toca hardware directamente en Linux. Bash hace syscalls (llamadas al sistema) y el kernel ejecuta esas operaciones sobre el hardware en su lugar. Es lo que protege al sistema de procesos rotos o maliciosos.",
          feedbackIncorrecto:
            "Por seguridad, en Linux solo el kernel toca el hardware. Bash (y cualquier app) hace syscalls que delegan en el kernel. Si una app pudiera tocar memoria o disco directamente, un bug podría romper todo el sistema.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Qué proceso tiene siempre PID 1 en Linux moderno?",
          opciones: [
            { texto: "bash", correcta: false },
            { texto: "init / systemd: el primer proceso que arranca, padre de todos los demás.", correcta: true },
            { texto: "El kernel mismo.", correcta: false },
            { texto: "GRUB", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. PID 1 es systemd (o init en sistemas antiguos). Es el primer proceso de usuario, lo lanza el kernel y de él descienden todos los demás. Si systemd muere, el sistema cae.",
          feedbackIncorrecto:
            "PID 1 lo ocupa el primer proceso de usuario, que arranca el kernel. En distros modernas es systemd. De ahí cuelga todo el árbol de procesos: cuando un proceso queda huérfano, systemd lo adopta.",
        },
      ],
    },
  ],
};

export default capitulo;

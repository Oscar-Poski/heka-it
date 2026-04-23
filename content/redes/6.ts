import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "redes",
  numero: 6,
  titulo: "El modelo OSI",
  descripcion: "El mapa completo de cómo se comunican las redes.",
  tiempoMin: 8,
  preguntaGancho:
    "Ya viste paquetes, IPs, DNS, TCP y HTTP por separado. ¿Cómo encajan todas estas piezas en un solo sistema coherente?",
  secciones: [
    {
      tipo: "texto",
      eyebrow: "El problema",
      texto:
        "Construir una red de comunicaciones es un problema enorme. Hay que manejar cables físicos, señales eléctricas, direcciones, rutas, errores, cifrado y aplicaciones, todo al mismo tiempo. En los años 80, la ISO propuso dividir ese problema en siete capas independientes. Cada capa resuelve un problema específico y solo habla con la capa de arriba y la de abajo. A ese modelo se le llama OSI.",
    },
    {
      tipo: "analogia",
      eyebrow: "La analogía",
      texto:
        "Imagina enviar una carta por mensajería internacional. Tú escribes el contenido (aplicación). Alguien la mete en un sobre con tu nombre (presentación). La ponen en una caja con número de rastreo (sesión). La caja sube a un camión que sabe la ruta (transporte). El camión toma autopistas y carreteras (red). Llega a la paquetería local que gestiona la entrega de último kilómetro (enlace). Finalmente, el repartidor toca tu puerta (físico).",
      items: [
        { label: "Tu carta", valor: "Datos de la aplicación", icono: "FileText" },
        { label: "Sistema de mensajería", valor: "Las 7 capas OSI", icono: "Layers" },
      ],
    },
    {
      tipo: "anatomia",
      eyebrow: "Las 7 capas del modelo OSI",
      texto:
        "De arriba hacia abajo: las capas superiores están cerca del usuario, las inferiores cerca del hardware. Toca cada una.",
      partes: [
        {
          id: "capa7",
          label: "7 Aplicación",
          color: "#3A8DFF",
          detalle:
            "La capa con la que interactúa el usuario. Define los protocolos que usan las apps: HTTP para la web, SMTP para el correo, FTP para archivos, DNS para resolver nombres. Es el punto de entrada de los datos.",
        },
        {
          id: "capa6",
          label: "6 Presentación",
          color: "#5bb8ff",
          detalle:
            "Traduce los datos a un formato que ambos extremos entiendan. Maneja cifrado (TLS), compresión y codificación de caracteres (UTF-8). Es el intérprete entre aplicaciones.",
        },
        {
          id: "capa5",
          label: "5 Sesión",
          color: "#00FFBF",
          detalle:
            "Gestiona el inicio, mantenimiento y cierre de sesiones entre dos dispositivos. Permite que una conexión se reanude si se interrumpe. Los tokens de sesión y los checkpoints viven aquí.",
        },
      ],
    },
    {
      tipo: "anatomia",
      eyebrow: "",
      texto:
        "",
      partes: [
        {
          id: "capa4",
          label: "4 Transporte",
          color: "#94d400",
          detalle:
            "Segmenta los datos en unidades manejables y garantiza (o no) su entrega. Aquí viven TCP y UDP. Gestiona el control de flujo, la corrección de errores y los números de puerto.",
        },
        {
          id: "capa3",
          label: "3 Red",
          color: "#FFD700",
          detalle:
            "Decide el camino que toman los datos de origen a destino a través de múltiples redes. Aquí vive el protocolo IP y los routers. Los paquetes y las direcciones IP son conceptos de esta capa.",
        },
        {
          id: "capa2",
          label: "2 Enlace",
          color: "#FF9F43",
          detalle:
            "Gestiona la transferencia de datos entre dos nodos directamente conectados. Detecta y corrige errores del nivel físico. Aquí viven Ethernet, Wi-Fi y las direcciones MAC.",
        },
        {
          id: "capa1",
          label: "1 Física",
          color: "#FF5C5C",
          detalle:
            "Transmite bits crudos a través del medio físico: cable de cobre, fibra óptica o señales de radio. Define voltajes, frecuencias, conectores y velocidades de transmisión. No entiende de paquetes ni direcciones.",
        },
      ],
    },
    {
      tipo: "highlight",
      texto:
        "Un truco para recordar las capas de arriba hacia abajo: 'All People Seem To Need Data Processing' (Application, Presentation, Session, Transport, Network, Data Link, Physical). De abajo hacia arriba: 'Please Do Not Throw Sausage Pizza Away'.",
    },
    {
      tipo: "pasos",
      eyebrow: "¿Qué pasa cuando envías un mensaje?",
      texto:
        "Los datos descienden por las capas en el origen, y ascienden por las capas en el destino. Cada capa añade su propio encabezado al bajar, y lo retira al subir.",
      pasos: [
        {
          titulo: "Encapsulación (origen)",
          descripcion:
            "Tu mensaje baja de la capa 7 a la capa 1. En cada nivel, la capa añade su propia cabecera con información de control: puerto TCP, IP de destino, dirección MAC. Al final son bits que viajan por el cable.",
        },
        {
          titulo: "Transmisión física",
          descripcion:
            "Los bits viajan como señales eléctricas, ópticas o de radio por el medio físico. Routers y switches intermedios solo procesan las capas que necesitan: un router trabaja hasta la capa 3.",
        },
        {
          titulo: "Desencapsulación (destino)",
          descripcion:
            "El dispositivo receptor sube por las capas de 1 a 7. Cada capa lee y retira su cabecera. Al llegar a la capa 7, la aplicación recibe exactamente el mensaje original.",
        },
      ],
    },
    {
      tipo: "visual",
      eyebrow: "Visualización",
      texto:
        "Observa cómo los datos se encapsulan capa por capa al salir y se desencapsulan al llegar.",
      componente: "osi-encapsulation",
    },
    {
      tipo: "texto",
      eyebrow: "OSI vs TCP/IP",
      texto:
        "En la práctica, internet no usa OSI directamente. Usa el modelo TCP/IP, que colapsa las 7 capas en 4: Acceso a red (capas 1-2), Internet (capa 3), Transporte (capa 4) y Aplicación (capas 5-7). El modelo OSI sigue siendo el marco conceptual de referencia para entender y diagnosticar redes, aunque el modelo TCP/IP sea el que realmente se implementa.",
    },
    {
      tipo: "quiz",
      pregunta: "Un ingeniero dice que encontró un problema en 'capa 3'. ¿Dónde está el fallo?",
      opciones: [
        {
          texto: "En el cable físico o la señal de radio.",
          correcta: false,
        },
        {
          texto: "En el enrutamiento IP entre redes.",
          correcta: true,
        },
        {
          texto: "En el protocolo HTTP de la aplicación.",
          correcta: false,
        },
        {
          texto: "En la gestión de sesiones entre dispositivos.",
          correcta: false,
        },
      ],
      feedbackCorrecto:
        "Correcto. La capa 3 es la capa de Red, donde vive el protocolo IP y los routers. Un problema en capa 3 implica fallos de enrutamiento, direccionamiento IP o fragmentación de paquetes.",
      feedbackIncorrecto:
        "La capa 1 es la física (cables y señales), la capa 7 es la de aplicación (HTTP, DNS) y la capa 5 gestiona sesiones. La capa 3 —Red— es donde los routers deciden cómo llevar los paquetes de un punto a otro usando direcciones IP.",
    },
  ],
};

export default capitulo;
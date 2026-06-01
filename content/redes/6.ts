import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "redes",
  numero: 6,
  titulo: "Nivel 6 · El modelo OSI",
  pasos: [
    {
      titulo: "Por qué dividir en capas",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Un problema gigante partido en 7 pequeños",
          texto:
            "Construir una red de comunicaciones es enorme: hay que manejar cables físicos, señales eléctricas, direcciones, rutas, errores, cifrado y aplicaciones, todo a la vez. En los 80, la ISO propuso dividirlo en 7 capas independientes. Cada capa resuelve un problema concreto y solo habla con la capa de arriba y la de abajo. Ese modelo se llama OSI.",
        },
        {
          tipo: "analogia",
          eyebrow: "Como mandar una carta internacional",
          texto:
            "Tú escribes el contenido. Alguien lo mete en un sobre. La paquetería le pone un código de rastreo. Sube a un camión. Toma autopistas. Llega a la oficina local. El repartidor toca tu puerta. Cada paso lo resuelve un especialista distinto.",
          items: [
            { label: "Tu carta", valor: "Los datos de la aplicación", icono: "FileText" },
            { label: "La cadena de logística", valor: "Las 7 capas OSI", icono: "Layers" },
          ],
        },
      ],
    },
    {
      titulo: "Las 7 capas",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Capas superiores (cerca del usuario)",
          texto:
            "Las capas altas son las que tocas cuando programas o configuras una app. Toca cada una.",
          partes: [
            {
              id: "capa7",
              label: "L7 Aplicación",
              color: "#3A8DFF",
              detalle:
                "Define los protocolos de las apps: HTTP para web, SMTP para correo, FTP para archivos, DNS para resolver nombres. Es el punto de entrada de tus datos.",
            },
            {
              id: "capa6",
              label: "L6 Presentación",
              color: "#5BB8FF",
              detalle:
                "Traduce los datos a un formato común: cifrado (TLS), compresión (gzip) y codificación de caracteres (UTF-8). El «intérprete» entre apps.",
            },
            {
              id: "capa5",
              label: "L5 Sesión",
              color: "#7FB8E6",
              detalle:
                "Abre, mantiene y cierra sesiones entre dos dispositivos. Permite reanudar una conexión si se interrumpe. Tokens de sesión y checkpoints viven aquí.",
            },
          ],
        },
        {
          tipo: "anatomia",
          eyebrow: "Capas inferiores (cerca del hardware)",
          texto:
            "Las capas bajas mueven bits por cables y aire. Toca cada una.",
          partes: [
            {
              id: "capa4",
              label: "L4 Transporte",
              color: "#00A896",
              detalle:
                "Segmenta los datos y garantiza (o no) su entrega. Aquí viven TCP y UDP. Maneja control de flujo, corrección de errores y números de puerto.",
            },
            {
              id: "capa3",
              label: "L3 Red",
              color: "#FF9F43",
              detalle:
                "Decide el camino de los datos entre redes. Aquí vive el protocolo IP y los routers. Los paquetes y las IPs son conceptos de esta capa.",
            },
            {
              id: "capa2",
              label: "L2 Enlace",
              color: "#FF7F50",
              detalle:
                "Transfiere datos entre nodos directamente conectados. Detecta errores físicos. Aquí viven Ethernet, Wi-Fi y las direcciones MAC.",
            },
            {
              id: "capa1",
              label: "L1 Física",
              color: "#FF5C5C",
              detalle:
                "Bits crudos por el medio físico: cobre, fibra o radio. Define voltajes, frecuencias y velocidades. No entiende de paquetes ni direcciones.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Truco para memorizar de arriba a abajo: «All People Seem To Need Data Processing». De abajo a arriba: «Please Do Not Throw Sausage Pizza Away». Es feo pero funciona.",
        },
      ],
    },
    {
      titulo: "Encapsulación y desencapsulación",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Cada capa pone (o quita) una etiqueta",
          texto:
            "Los datos descienden por las capas en el origen y ascienden en el destino. Cada capa añade su cabecera al bajar y la quita al subir.",
          pasos: [
            {
              titulo: "Encapsulación (origen)",
              descripcion:
                "Tu mensaje baja de L7 a L1. En cada capa se añade una cabecera con info de control: número de puerto (L4), IP destino (L3), dirección MAC (L2). Al final, son bits que viajan por el cable.",
            },
            {
              titulo: "Transmisión física",
              descripcion:
                "Los bits viajan como señales eléctricas, ópticas o de radio. Routers y switches intermedios solo procesan las capas que necesitan: un router trabaja hasta L3, un switch hasta L2.",
            },
            {
              titulo: "Desencapsulación (destino)",
              descripcion:
                "El receptor sube de L1 a L7. Cada capa lee y retira su cabecera. Cuando llega a L7, la aplicación recibe exactamente el mensaje original.",
            },
          ],
        },
        {
          tipo: "visual",
          eyebrow: "Velo en vivo",
          texto:
            "Pulsa «Siguiente» para ver bajar el mensaje capa por capa, y luego subir en el destino. Cada cabecera se ilumina al añadirse o retirarse.",
          componente: "osi-encapsulation",
        },
      ],
    },
    {
      titulo: "OSI vs TCP/IP",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Marco teórico vs implementación real",
          texto:
            "OSI es el modelo conceptual. En la práctica, internet usa el modelo TCP/IP, más simple.",
          columnas: [
            {
              titulo: "OSI (7 capas)",
              subtitulo: "Marco didáctico",
              items: [
                "L7 Aplicación / L6 Presentación / L5 Sesión",
                "L4 Transporte",
                "L3 Red",
                "L2 Enlace / L1 Física",
                "Útil para diagnosticar: «esto falla en capa N»",
              ],
            },
            {
              titulo: "TCP/IP (4 capas)",
              subtitulo: "Lo que realmente corre internet",
              destacada: true,
              items: [
                "Aplicación (colapsa L5-L7 de OSI)",
                "Transporte (= L4)",
                "Internet (= L3)",
                "Acceso a red (colapsa L1-L2)",
                "Más práctico, menos jerarquía",
              ],
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
          pregunta: "Un ingeniero dice que encontró un problema en «capa 3». ¿Dónde está el fallo?",
          opciones: [
            { texto: "En el cable físico o la señal de radio.", correcta: false },
            { texto: "En el enrutamiento IP entre redes.", correcta: true },
            { texto: "En el protocolo HTTP de la aplicación.", correcta: false },
            { texto: "En la gestión de sesiones entre dispositivos.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. L3 es la capa de Red, donde vive IP y los routers. Un problema en L3 implica fallos de enrutamiento, direccionamiento IP o fragmentación de paquetes.",
          feedbackIncorrecto:
            "L1 es física (cables), L7 es aplicación (HTTP, DNS), L5 gestiona sesiones. L3 — Red — es donde los routers deciden el camino de los paquetes usando direcciones IP.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Un router típicamente trabaja hasta la capa…",
          opciones: [
            { texto: "L1 (Física).", correcta: false },
            { texto: "L2 (Enlace).", correcta: false },
            { texto: "L3 (Red).", correcta: true },
            { texto: "L7 (Aplicación).", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Un router opera hasta L3 porque su trabajo es leer la IP destino y decidir el siguiente salto. No le importa el contenido del paquete (capas superiores) ni cómo viaja por el cable (capa física). Los switches solo llegan a L2.",
          feedbackIncorrecto:
            "Cada dispositivo de red opera hasta cierta capa. Un switch llega a L2 (lee direcciones MAC). Un router llega a L3 (lee IPs y enruta). Para procesar contenido de aplicación necesitarías un proxy o un firewall L7.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Qué hace la encapsulación cuando un mensaje baja por las capas?",
          opciones: [
            { texto: "Cifra el contenido en cada capa.", correcta: false },
            { texto: "Cada capa borra parte del mensaje para hacerlo más pequeño.", correcta: false },
            { texto: "Nada: el mensaje pasa intacto por las 7 capas.", correcta: false },
            { texto: "Cada capa añade su propia cabecera con información de control antes de pasarlo a la capa de abajo.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Cada capa envuelve los datos de la capa de arriba con su propia cabecera. Al final, lo que viaja por el cable es: cabecera L2 + cabecera L3 + cabecera L4 + datos de aplicación. El receptor desempaca en orden inverso.",
          feedbackIncorrecto:
            "Encapsular = envolver. Cada capa añade su cabecera con info de control (puerto, IP, MAC) antes de pasar a la siguiente. El paquete final lleva todas las cabeceras anidadas, y el destino las desempaca de abajo a arriba.",
        },
      ],
    },
  ],
};

export default capitulo;

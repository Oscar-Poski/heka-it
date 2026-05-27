import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "redes",
  numero: 4,
  titulo: "TCP vs UDP",
 // preguntaGancho:
   // "Cuando ves un video en YouTube nunca se 'pierde' ningún fotograma, pero en una videollamada a veces se congela la imagen. Ambos usan internet. ¿Por qué se comportan tan diferente?",
  pasos: [
    {
      titulo: "El problema",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "El problema",
          texto:
            "Internet entrega paquetes, pero no garantiza que lleguen todos, ni en orden, ni sin errores. A veces un paquete se pierde en el camino. Para algunas aplicaciones eso es catastrófico —imagina descargar un archivo donde faltan bytes—. Para otras, no importa tanto —si en una videollamada se pierde un fotograma, prefieres seguir en tiempo real que esperar a recibirlo tarde—. TCP y UDP son dos protocolos que resuelven este problema de maneras opuestas.",
        },
        {
          tipo: "analogia",
          eyebrow: "La analogía",
          texto:
            "Imagina que tienes que enviar documentos importantes versus hablar por teléfono. Para los documentos, usas mensajería certificada: confirmas que llegaron, y si no, los reenvías. Por teléfono, no puedes 'reenviar' lo que ya dijiste —la conversación sigue aunque se haya cortado un segundo—.",
          items: [
            { label: "Mensajería certificada", valor: "TCP", icono: "PackageCheck" },
            { label: "Llamada telefónica", valor: "UDP", icono: "Phone" },
          ],
        },
      ],
    },
    {
      titulo: "TCP y UDP",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "¿Qué garantiza cada uno?",
          texto:
            "TCP y UDP tienen compromisos distintos. Toca cada uno para entender qué ofrece.",
          partes: [
            {
              id: "tcp",
              label: "TCP",
              color: "#3A8DFF",
              detalle:
                "Transmission Control Protocol. Establece una conexión antes de enviar datos (el famoso 'handshake' de tres pasos). Garantiza que todos los paquetes lleguen, en orden y sin errores. Si uno se pierde, lo pide de nuevo. A cambio, es más lento y consume más recursos.",
            },
            {
              id: "udp",
              label: "UDP",
              color: "#00A896",
              detalle:
                "User Datagram Protocol. No establece conexión previa: simplemente dispara paquetes y no verifica si llegaron. No garantiza orden ni entrega. A cambio, es mucho más rápido y tiene menos latencia. La aplicación decide qué hacer si falta algo.",
            },
          ],
        },
        {
          tipo: "pasos",
          eyebrow: "El handshake de TCP",
          texto:
            "Antes de enviar un solo byte de datos, TCP realiza un ritual de tres pasos para asegurarse de que ambos extremos estén listos.",
          pasos: [
            {
              titulo: "SYN",
              descripcion:
                "Tu dispositivo envía un paquete SYN (synchronize) al servidor: 'Quiero conectarme, ¿estás disponible?'",
            },
            {
              titulo: "SYN-ACK",
              descripcion:
                "El servidor responde con SYN-ACK (synchronize-acknowledge): 'Sí, estoy aquí. Confirmo que recibí tu solicitud.'",
            },
            {
              titulo: "ACK",
              descripcion:
                "Tu dispositivo responde con ACK (acknowledge): 'Confirmado. Empecemos.' La conexión está establecida y los datos pueden fluir.",
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
            "Compara cómo TCP y UDP manejan la pérdida de un paquete en tiempo real.",
          componente: "tcp-udp-compare",
        },
      ],
    },
    {
      titulo: "Cuándo usar cada uno",
      secciones: [
        {
          tipo: "highlight",
          texto:
            "TCP no es 'mejor' que UDP ni viceversa. Son herramientas distintas para problemas distintos. HTTP, los correos y las descargas usan TCP porque no pueden permitirse perder ni un byte. El streaming en vivo, los videojuegos online y las videollamadas usan UDP porque prefieren velocidad sobre perfección.",
        },
        {
          tipo: "texto",
          eyebrow: "¿Cuándo usar cada uno?",
          texto:
            "La elección entre TCP y UDP depende de qué importa más para tu aplicación: integridad o velocidad. Si perder datos rompe la experiencia —una página web incompleta, un archivo corrupto, una transacción bancaria a medias— usas TCP. Si el retraso rompe la experiencia más que la pérdida ocasional de datos —un juego online que congela, una videollamada con eco— usas UDP.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta: "¿Qué protocolo usaría una aplicación de videollamadas y por qué?",
          opciones: [
            { texto: "TCP, porque garantiza que el audio llegue sin errores.", correcta: false },
            {
              texto: "UDP, porque es más importante tener baja latencia que recibir cada paquete.",
              correcta: true,
            },
            { texto: "TCP, porque establece una conexión segura antes de hablar.", correcta: false },
            { texto: "UDP, porque cifra los datos mejor que TCP.", correcta: false },
          ],
          feedbackCorrecto:
            "Exacto. En una videollamada, si un paquete de audio llega tarde es peor que si simplemente no llega. UDP permite que la conversación siga fluyendo sin esperar reenvíos de paquetes perdidos. La pequeña pérdida ocasional es imperceptible para el oído humano.",
          feedbackIncorrecto:
            "TCP reenvía paquetes perdidos, lo que introduce retrasos. En una videollamada, escuchar audio de hace dos segundos porque 'llegó tarde' es peor que un leve corte. El cifrado tampoco es función de TCP ni UDP —eso lo maneja TLS por encima de ambos—.",
        },
      ],
    },
  ],
};

export default capitulo;

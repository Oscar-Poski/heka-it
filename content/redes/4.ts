import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "redes",
  numero: 4,
  titulo: "Nivel 4 · TCP vs UDP",
  pasos: [
    {
      titulo: "El problema",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Dos formas de mover paquetes",
          texto:
            "Internet entrega paquetes, pero no garantiza que lleguen todos, ni en orden, ni sin errores. Algunas aplicaciones no toleran ni un byte perdido (descargar un archivo). Otras prefieren velocidad aunque se pierda algo (una videollamada). TCP y UDP son los dos protocolos que resuelven este problema de maneras opuestas.",
        },
        {
          tipo: "analogia",
          eyebrow: "Mensajería certificada vs llamada telefónica",
          texto:
            "Para documentos importantes usas mensajería con acuse de recibo. Por teléfono no puedes «reenviar» lo que ya dijiste: la conversación sigue.",
          items: [
            { label: "Mensajería certificada", valor: "TCP — confiable, más lento", icono: "PackageCheck" },
            { label: "Llamada telefónica", valor: "UDP — rápido, sin reenvíos", icono: "Phone" },
          ],
        },
      ],
    },
    {
      titulo: "Qué garantiza cada uno",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Compromisos opuestos",
          texto:
            "Cada protocolo elige un trade-off distinto entre integridad y velocidad.",
          columnas: [
            {
              titulo: "TCP",
              subtitulo: "Confiable y ordenado",
              destacada: true,
              items: [
                "Establece conexión antes de enviar (handshake)",
                "Confirma cada paquete con un ACK",
                "Reenvía si se pierde algo",
                "Reordena al llegar",
                "Más lento, más overhead, garantiza entrega",
              ],
            },
            {
              titulo: "UDP",
              subtitulo: "Rápido y sin garantías",
              items: [
                "Sin conexión previa: dispara y olvida",
                "No confirma ni reenvía",
                "No reordena: lo que llega, llega",
                "Mucho menos overhead",
                "Más rápido, app decide qué hacer si falta algo",
              ],
            },
          ],
        },
        {
          tipo: "pasos",
          eyebrow: "El handshake TCP",
          texto:
            "Antes de mandar un solo byte de datos, TCP hace un ritual de 3 pasos para asegurarse de que ambos extremos están listos.",
          pasos: [
            {
              titulo: "SYN",
              descripcion:
                "Tu dispositivo manda un paquete SYN (synchronize): «Quiero conectarme, ¿estás disponible?».",
            },
            {
              titulo: "SYN-ACK",
              descripcion:
                "El servidor responde SYN-ACK (synchronize-acknowledge): «Sí, recibí tu solicitud, listo».",
            },
            {
              titulo: "ACK",
              descripcion:
                "Tu dispositivo confirma con ACK (acknowledge): «Confirmado, empecemos». A partir de aquí fluyen los datos.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Pruébalo con paquetes perdidos",
      secciones: [
        {
          tipo: "visual",
          eyebrow: "Comportamiento bajo pérdida",
          texto:
            "Envía paquetes uno a uno. Prueba el botón «Perder paquete» y mira cómo reacciona cada protocolo.",
          componente: "tcp-udp-compare",
        },
        {
          tipo: "highlight",
          texto:
            "TCP no es «mejor» que UDP ni al revés. HTTP, correo y descargas usan TCP porque no pueden permitirse perder bytes. Streaming en vivo, videojuegos online y videollamadas usan UDP porque prefieren velocidad sobre perfección.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta: "¿Qué protocolo usaría una app de videollamadas y por qué?",
          opciones: [
            { texto: "TCP, porque garantiza que el audio llegue completo.", correcta: false },
            { texto: "UDP, porque importa más la baja latencia que recibir cada paquete.", correcta: true },
            { texto: "TCP, porque establece una conexión segura primero.", correcta: false },
            { texto: "UDP, porque cifra los datos automáticamente.", correcta: false },
          ],
          feedbackCorrecto:
            "Exacto. Si un paquete de audio llega tarde, es peor que si simplemente no llega. UDP permite que la conversación siga fluyendo sin esperar reenvíos. Una pérdida ocasional es imperceptible para el oído.",
          feedbackIncorrecto:
            "TCP reenvía paquetes perdidos, lo que añade retraso. Escuchar audio de hace 2 segundos por «llegar tarde» es peor que un microcorte. El cifrado no lo hace ninguno de los dos: eso es TLS por encima.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Estás descargando un archivo ZIP. ¿Qué protocolo usa y por qué?",
          opciones: [
            { texto: "TCP, porque un archivo con bytes faltantes está corrupto: necesitas entrega completa.", correcta: true },
            { texto: "UDP, porque es más rápido.", correcta: false },
            { texto: "Ninguno: las descargas no usan protocolos.", correcta: false },
            { texto: "Cualquiera de los dos, da igual.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Una descarga exige integridad total: si falta un byte en medio del ZIP, el archivo no abre. TCP garantiza que todos los paquetes llegan y en orden, reenviando los perdidos.",
          feedbackIncorrecto:
            "Velocidad no compensa archivos corruptos. Las descargas siempre usan TCP (vía HTTP/HTTPS) porque exigen integridad: cada byte debe llegar exactamente como salió del servidor.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Cuántos paquetes intercambia TCP antes de enviar el primer byte de datos?",
          opciones: [
            { texto: "Ninguno: empieza directamente.", correcta: false },
            { texto: "Uno: solo SYN.", correcta: false },
            { texto: "Tres: SYN, SYN-ACK, ACK.", correcta: true },
            { texto: "Cinco: hace un ping completo antes.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Es el famoso «three-way handshake»: SYN del cliente, SYN-ACK del servidor, ACK del cliente. Establece que ambos están listos antes de enviar datos. Por eso TCP añade latencia al inicio de cada conexión.",
          feedbackIncorrecto:
            "TCP siempre hace el three-way handshake antes del primer byte: SYN → SYN-ACK → ACK. Tres paquetes ida y vuelta. Es lo que añade latencia al abrir una conexión TCP y es el motivo por el que se reutilizan conexiones (keep-alive).",
        },
      ],
    },
  ],
};

export default capitulo;

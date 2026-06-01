import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "redes",
  numero: 1,
  titulo: "Nivel 1 · ¿Qué es un paquete?",
  pasos: [
    {
      titulo: "La idea base",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Internet mueve trocitos, no mensajes enteros",
          texto:
            "Ahora mismo tu dispositivo está recibiendo miles de fragmentos de información de servidores a miles de kilómetros. Ningún video, foto o mensaje viaja completo: viaja partido en piezas pequeñas llamadas paquetes. Entender esa idea es la base de todo lo demás.",
        },
        {
          tipo: "analogia",
          eyebrow: "Como un paquete de mensajería",
          texto:
            "Piensa en un paquete que mandas por correo. Tiene una etiqueta con direcciones, un contenido y alguien que lo lleva de punto en punto. Internet hace lo mismo, solo que en milisegundos y con millones de piezas a la vez.",
          items: [
            { label: "Mundo físico", valor: "Paquete con etiqueta y contenido", icono: "Package" },
            { label: "Internet", valor: "Paquete de red con cabecera y payload", icono: "Mail" },
          ],
        },
      ],
    },
    {
      titulo: "Anatomía de un paquete",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Las tres partes",
          texto:
            "Toca cada parte para ver qué hace dentro de un paquete.",
          partes: [
            {
              id: "header",
              label: "Cabecera",
              color: "#3A8DFF",
              detalle:
                "La «etiqueta» del paquete. Lleva la IP de origen, la IP de destino, un número de orden y el TTL (Time To Live). Es lo que leen los routers para saber a dónde mandarlo.",
            },
            {
              id: "payload",
              label: "Payload",
              color: "#00A896",
              detalle:
                "El contenido real: un pedazo de la foto, del texto, del audio. Para la red es opaco — no le importa qué hay dentro, solo mueve bytes.",
            },
            {
              id: "trailer",
              label: "Cola",
              color: "#FF5C5C",
              detalle:
                "Bits de control de errores. Si el paquete se corrompió en el camino, la cola permite detectarlo y pedir que lo reenvíen.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "El TTL es un contador que baja 1 en cada router. Si llega a 0, el paquete se descarta. Sirve para que un paquete perdido no viaje para siempre por internet.",
        },
      ],
    },
    {
      titulo: "Cómo viaja un mensaje",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Fragmentación, ruteo y reensamble",
          texto:
            "Tu mensaje original no llega completo. Pasa por estas tres etapas sin que tú lo notes.",
          pasos: [
            {
              titulo: "Fragmentación",
              descripcion:
                "El mensaje grande se parte en paquetes pequeños. A cada uno se le asigna un número de orden y la dirección IP del destino.",
            },
            {
              titulo: "Ruteo independiente",
              descripcion:
                "Cada paquete puede tomar un camino distinto a través de routers. No importa: todos llevan la misma IP de destino, así que todos terminan ahí.",
            },
            {
              titulo: "Reensamble",
              descripcion:
                "Cuando llegan al destino, se ordenan por número y se reconstruye el mensaje original. Si falta alguno, se pide de nuevo.",
            },
          ],
        },
        {
          tipo: "visual",
          eyebrow: "Velo paso a paso",
          texto:
            "Avanza por las 4 fases del viaje de un mensaje desde tu dispositivo hasta el servidor.",
          componente: "packet-journey",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta: "¿Qué parte del paquete contiene la dirección de destino?",
          opciones: [
            { texto: "El payload", correcta: false },
            { texto: "La cola (trailer)", correcta: false },
            { texto: "El offset", correcta: false },
            { texto: "La cabecera (header)", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. La cabecera lleva las IPs de origen y destino, el número de orden y el TTL. Es el «sobre» del paquete.",
          feedbackIncorrecto:
            "El payload es el contenido real; la cola son bits de control de errores. La cabecera es la que lleva las direcciones y los metadatos del viaje.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Por qué internet trocea los mensajes en paquetes en lugar de enviarlos completos?",
          opciones: [
            { texto: "Para que sea más fácil cifrarlos.", correcta: false },
            { texto: "Para que cada paquete pueda viajar por la mejor ruta disponible y, si uno falla, solo se reenvíe ese.", correcta: true },
            { texto: "Porque los servidores no pueden recibir archivos grandes.", correcta: false },
            { texto: "Para ahorrar electricidad.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Trocear permite ruteo flexible y resiliencia: si un paquete se pierde, solo se reenvía ese, no el mensaje entero. Y la red puede balancear carga entre rutas.",
          feedbackIncorrecto:
            "El motivo no es cifrado ni ahorro. La fragmentación da flexibilidad de ruteo y tolerancia a fallos: si un paquete falla, solo ese se reenvía, no todo el mensaje.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Un paquete tiene un TTL inicial de 5 y atraviesa 6 routers para llegar al destino. ¿Qué pasa?",
          opciones: [
            { texto: "Llega sin problema.", correcta: false },
            { texto: "El TTL se reinicia automáticamente al pasar cada router.", correcta: false },
            { texto: "El TTL llega a 0 en el quinto router y el paquete se descarta.", correcta: true },
            { texto: "Los routers ignoran el TTL.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El TTL baja 1 por router. Si llega a 0 antes de alcanzar el destino, el paquete se descarta (y normalmente se devuelve un mensaje ICMP «time exceeded»). El origen entonces sabe que la ruta es demasiado larga.",
          feedbackIncorrecto:
            "El TTL es un contador que baja en cada salto y nunca se reinicia. Si llega a 0 antes del destino, el paquete se descarta. Sirve para evitar que paquetes perdidos circulen para siempre.",
        },
      ],
    },
  ],
};

export default capitulo;

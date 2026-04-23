import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "redes",
  numero: 1,
  titulo: "¿Qué es un paquete?",
  descripcion:
    "La unidad mínima con la que viaja la información por internet, explicada con una carta postal.",
  tiempoMin: 7,
  preguntaGancho:
    "Ahora mismo, mientras lees esto, tu teléfono está recibiendo miles de pedazos de información de servidores a miles de kilómetros. ¿Cómo sabe cuáles son tuyos?",
  secciones: [
    {
      tipo: "analogia",
      eyebrow: "La analogía",
      texto:
        "Para entender un paquete de red, piensa en algo que ya conoces: una carta que mandas por correo. Tiene un sobre con la dirección, un contenido adentro, y alguien que la lleva de punto en punto hasta el destino. Internet funciona exactamente igual, solo que en milisegundos y en millones de pedazos al mismo tiempo.",
      items: [
        { label: "Mundo físico", valor: "Carta postal", icono: "Mail" },
        { label: "Internet", valor: "Paquete de red", icono: "Network" },
      ],
    },
    {
      tipo: "anatomia",
      eyebrow: "Anatomía de un paquete",
      texto:
        "Un paquete tiene tres partes. Toca cada una para ver qué guarda.",
      partes: [
        {
          id: "header",
          label: "Cabecera",
          color: "#3A8DFF",
          detalle:
            "Es el sobre de la carta. Lleva la IP de origen, la IP de destino y un offset que indica dónde encaja este fragmento en el mensaje completo. También lleva el TTL, un contador que verás en detalle abajo.",
        },
        {
          id: "payload",
          label: "Payload",
          color: "#00FFBF",
          detalle:
            "Es el contenido real: un pedazo de la foto, del texto, del audio. Para la red es opaco — no le importa qué hay ahí, solo mueve bytes.",
        },
        {
          id: "trailer",
          label: "Cola",
          color: "#FF5C5C",
          detalle:
            "Son bits de control de errores. Si el paquete se corrompe en el camino, la cola permite detectarlo y pedir que lo reenvíen.",
        },
      ],
    },
    {
      tipo: "highlight",
      texto:
        "El TTL (Time To Live) es un contador dentro de la cabecera que se reduce en cada router. Si llega a cero, el paquete se descarta. Así se evita que un paquete perdido viaje para siempre por internet.",
    },
    {
      tipo: "pasos",
      eyebrow: "¿Cómo viaja un paquete?",
      texto:
        "Tu mensaje no viaja completo. Se divide, cada fragmento viaja por su cuenta, y al final se vuelve a armar.",
      pasos: [
        {
          titulo: "Fragmentación",
          descripcion:
            "El mensaje grande se divide en paquetes pequeños. A cada uno se le asigna un número de orden.",
        },
        {
          titulo: "Ruteo independiente",
          descripcion:
            "Cada paquete puede tomar un camino distinto: diferentes routers, diferentes rutas. No importa, todos llevan la dirección de destino.",
        },
        {
          titulo: "Reensamble",
          descripcion:
            "Cuando todos llegan, el destino los ordena por su número y reconstruye el mensaje original. Si falta alguno, se pide de nuevo.",
        },
      ],
    },
    {
      tipo: "visual",
      eyebrow: "Visualización",
      texto:
        "Así se ve un paquete saltando entre routers hasta llegar a su destino.",
      componente: "packet-journey",
    },
    {
      tipo: "quiz",
      pregunta: "¿Qué parte del paquete contiene la dirección de destino?",
      opciones: [
        { texto: "El payload", correcta: false },
        { texto: "La cabecera (header)", correcta: true },
        { texto: "La cola (trailer)", correcta: false },
        { texto: "El offset", correcta: false },
      ],
      feedbackCorrecto:
        "Correcto. La cabecera contiene la IP de origen, la IP de destino, el offset y el TTL. Es el 'sobre' del paquete.",
      feedbackIncorrecto:
        "El payload es el contenido real y la cola son bits de control de errores. La cabecera es la parte que actúa como el sobre: lleva las direcciones y los metadatos del viaje.",
    },
  ],
};

export default capitulo;
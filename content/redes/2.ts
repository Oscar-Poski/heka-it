import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "redes",
  numero: 2,
  titulo: "IP y Direccionamiento",
  descripcion: "Cómo sabe la red a dónde enviar algo.",
  tiempoMin: 8,
  preguntaGancho:
    "¿Cómo sabe internet exactamente a cuál de los 15,000 millones de dispositivos conectados debe entregar tu mensaje?",
  secciones: [
    {
      tipo: "texto",
      eyebrow: "El problema",
      texto:
        "Imagina una ciudad sin calles con nombre y sin números en las casas. Imposible repartir correo, ¿verdad? Internet tuvo el mismo problema al nacer. La solución fue simple: darle a cada dispositivo una dirección única. Esa dirección es la IP.",
    },
    {
      tipo: "analogia",
      items: [
        {
          label: "Dirección postal",
          valor: "Calle Reforma 42, CDMX",
          icono: "House",
        },
        {
          label: "Dirección IP",
          valor: "192.168.1.42",
          icono: "Laptop",
        },
      ],
    },
    {
      tipo: "texto",
      eyebrow: "Anatomía de una IP",
      texto:
        "Una dirección IPv4 son 4 números separados por puntos. Cada número puede ir del 0 al 255. No es un número aleatorio: cada parte tiene un rol.",
    },
    {
      tipo: "anatomia",
      partes: [
        {
          id: "octet1",
          label: "192",
          color: "#00FFBF",
          detalle:
            "Primer octeto. Junto con el segundo, identifica la red grande. Piensa en él como el país o la ciudad.",
        },
        {
          id: "octet2",
          label: "168",
          color: "#00d4a0",
          detalle:
            "Segundo octeto. Refina la red. Es como la colonia o el barrio dentro de la ciudad.",
        },
        {
          id: "octet3",
          label: "1",
          color: "#00aa80",
          detalle:
            "Tercer octeto. Identifica la subred, como la manzana dentro del barrio.",
        },
        {
          id: "octet4",
          label: "42",
          color: "#007a5c",
          detalle:
            "Cuarto octeto. Este es el dispositivo específico: tu computadora, tu celular, tu router.",
        },
      ],
    },
    {
      tipo: "texto",
      eyebrow: "IPs públicas vs privadas",
      texto:
        "No todas las IPs son iguales. Las IPs privadas viven dentro de tu casa o empresa: tu router las asigna y nadie en internet las ve directamente. Las IPs públicas son las que usa tu router para hablar con el mundo exterior. Es como tener una dirección interna en un edificio (depto 4B) y una dirección del edificio completo (Av. Juárez 10).",
    },
    {
      tipo: "pasos",
      pasos: [
        {
          titulo: "Tu dispositivo pregunta al DNS",
          descripcion:
            "El DNS es como una agenda telefónica. Tu compu pregunta: '¿Cuál es la IP de google.com?' y recibe algo como 142.250.80.46.",
        },
        {
          titulo: "Se construye el paquete con esa IP",
          descripcion:
            "Ahora que sabe el destino, el paquete sale de tu dispositivo con la IP de Google en la cabecera.",
        },
        {
          titulo: "Los routers leen la IP y enrutan",
          descripcion:
            "Cada router en el camino lee la IP destino y decide cuál es el siguiente salto. Como preguntar en cada esquina: '¿por dónde sigo?'",
        },
        {
          titulo: "Google responde a tu IP pública",
          descripcion:
            "La respuesta viaja de regreso hasta tu router, que sabe que esa respuesta era para ti.",
        },
      ],
    },
    {
      tipo: "highlight",
      texto:
        "IPv4 permite ~4,300 millones de direcciones únicas. Parecía suficiente en los años 80. Hoy hay más de 15,000 millones de dispositivos conectados. Por eso existe IPv6, que usa 128 bits en lugar de 32 y ofrece más direcciones que átomos hay en la Tierra.",
    },
    {
      tipo: "visual",
      eyebrow: "Visualización",
      texto:
        "Así se ve un paquete saltando entre routers hasta llegar a su destino.",
      componente: "ipv4-animation",
    },
    {
      tipo: "quiz",
      pregunta: "¿Cuál es la diferencia entre una IP privada y una IP pública?",
      opciones: [
        {
          texto: "La IP privada es más rápida que la pública.",
          correcta: false,
        },
        {
          texto:
            "La IP privada solo existe dentro de tu red local; la pública es visible en internet.",
          correcta: true,
        },
        {
          texto:
            "La IP pública la asigna tu router; la privada la asigna Google.",
          correcta: false,
        },
        {
          texto: "Son lo mismo, solo cambia el nombre según el país.",
          correcta: false,
        },
      ],
      feedbackCorrecto:
        "Exacto. Tu router maneja IPs privadas para los dispositivos de casa y usa una sola IP pública para representarlos a todos frente a internet. Eso se llama NAT.",
      feedbackIncorrecto:
        "La distinción no tiene que ver con velocidad ni geografía. Es sobre visibilidad: las IPs privadas son internas (solo tu red las ve), las públicas son las que internet conoce. Tu router hace la traducción entre ambas.",
    },
  ],
};

export default capitulo;
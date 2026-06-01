import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "redes",
  numero: 2,
  titulo: "Nivel 2 · IP y direccionamiento",
  pasos: [
    {
      titulo: "Por qué existe la IP",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Una dirección única por dispositivo",
          texto:
            "Imagina una ciudad sin nombres de calle ni números de casa. Imposible repartir correo. Internet tuvo el mismo problema al nacer. La solución fue darle a cada dispositivo una dirección única: la IP.",
        },
        {
          tipo: "analogia",
          eyebrow: "Como una dirección postal",
          texto:
            "Cada dispositivo conectado tiene una dirección que lo identifica de forma única en su red.",
          items: [
            { label: "Dirección postal", valor: "Calle Reforma 42, CDMX", icono: "House" },
            { label: "Dirección IP", valor: "192.168.1.42", icono: "Laptop" },
          ],
        },
      ],
    },
    {
      titulo: "Anatomía de una IPv4",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "4 octetos, 4 niveles de detalle",
          texto:
            "Una IPv4 son 4 números (octetos) separados por puntos, cada uno de 0 a 255. No son aleatorios: cada octeto refina el destino.",
          partes: [
            {
              id: "octet1",
              label: "192",
              color: "#00A896",
              detalle: "Primer octeto. Identifica el bloque grande de red. Piensa en él como el país.",
            },
            {
              id: "octet2",
              label: "168",
              color: "#00C8A0",
              detalle: "Segundo octeto. Refina la red. Como la ciudad dentro del país.",
            },
            {
              id: "octet3",
              label: "1",
              color: "#3DD9B5",
              detalle: "Tercer octeto. Identifica la subred. Como la colonia o manzana dentro de la ciudad.",
            },
            {
              id: "octet4",
              label: "42",
              color: "#7FE3CA",
              detalle: "Cuarto octeto. El dispositivo concreto: tu computadora, tu celular, tu router.",
            },
          ],
        },
        {
          tipo: "visual",
          eyebrow: "Pruébalo",
          texto:
            "Cambia los octetos o usa los presets. Mira cómo la clasificación cambia entre pública, privada, loopback y reservada.",
          componente: "ipv4-animation",
        },
      ],
    },
    {
      titulo: "Pública vs privada",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Dos mundos de direcciones",
          texto:
            "No todas las IPs son iguales. Las privadas viven dentro de tu red local; las públicas son visibles en internet.",
          columnas: [
            {
              titulo: "IP privada",
              subtitulo: "Solo dentro de tu red",
              items: [
                "Rangos: 10.x.x.x, 172.16-31.x.x, 192.168.x.x",
                "Las asigna tu router con DHCP",
                "Nadie en internet la ve directamente",
                "Se reutilizan: tu 192.168.1.5 y el de tu vecino son ambos válidos",
              ],
            },
            {
              titulo: "IP pública",
              subtitulo: "Visible en internet",
              destacada: true,
              items: [
                "La asigna tu proveedor de internet (ISP)",
                "Única globalmente: solo un dispositivo en el mundo la tiene",
                "Tu router la usa para hablar con servidores externos",
                "NAT traduce entre tus IPs privadas y esa única pública",
              ],
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "IPv4 permite ~4.300 millones de direcciones. Hoy hay 15.000+ millones de dispositivos conectados. Por eso existe IPv6 (128 bits): ofrece más direcciones que átomos hay en la Tierra.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta: "¿Cuál es la diferencia clave entre una IP privada y una pública?",
          opciones: [
            { texto: "La privada es más rápida.", correcta: false },
            { texto: "La pública la asigna tu router; la privada el ISP.", correcta: false },
            { texto: "Son lo mismo con distinto nombre.", correcta: false },
            { texto: "La privada solo existe dentro de tu red local; la pública es visible en internet.", correcta: true },
          ],
          feedbackCorrecto:
            "Exacto. Tu router maneja IPs privadas internamente y usa una sola IP pública para representarlas a todas frente a internet. Esa traducción se llama NAT.",
          feedbackIncorrecto:
            "No tiene que ver con velocidad ni con quién asigna qué. La distinción es visibilidad: privadas solo viajan dentro de tu red; públicas son las que internet conoce.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Ves la IP 192.168.0.10 en tu portátil. ¿Qué deducimos?",
          opciones: [
            { texto: "Es una IP pública, alguien en internet puede conectarse a ti directamente.", correcta: false },
            { texto: "Es una IP de tipo loopback.", correcta: false },
            { texto: "Es una IP privada: estás detrás de un router que hace NAT.", correcta: true },
            { texto: "El portátil está mal configurado.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El rango 192.168.x.x es privado por definición. Tu router te asignó esa IP local y traduce tus peticiones a su única IP pública cuando salen a internet.",
          feedbackIncorrecto:
            "192.168.x.x es uno de los tres rangos privados reservados. No es pública (nadie en internet la ve), no es loopback (eso es 127.x.x.x), y no es un error: es lo normal en redes domésticas.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Por qué fue necesario crear IPv6 si IPv4 ofrece ~4.300 millones de direcciones?",
          opciones: [
            { texto: "Porque IPv4 era inseguro.", correcta: false },
            { texto: "Porque hoy hay más dispositivos conectados que direcciones IPv4 disponibles.", correcta: true },
            { texto: "Porque IPv4 no soporta cifrado.", correcta: false },
            { texto: "Porque los routers nuevos no entienden IPv4.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Hay más de 15.000 millones de dispositivos conectados y solo 4.300 millones de IPv4. IPv6 usa 128 bits y ofrece tantas direcciones que prácticamente no se agotará.",
          feedbackIncorrecto:
            "El motivo es agotamiento de direcciones, no seguridad. Hoy hay más dispositivos que IPv4 disponibles. IPv6 expande el espacio de 32 a 128 bits para que no se agote.",
        },
      ],
    },
  ],
};

export default capitulo;

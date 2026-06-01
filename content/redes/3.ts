import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "redes",
  numero: 3,
  titulo: "Nivel 3 · DNS, la agenda de internet",
  pasos: [
    {
      titulo: "El problema",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Humanos recuerdan nombres, máquinas usan IPs",
          texto:
            "Las computadoras se hablan con números (142.250.80.46). Los humanos recordamos nombres (google.com). Alguien tiene que traducir entre los dos mundos. Ese alguien es el DNS: el Domain Name System.",
        },
        {
          tipo: "analogia",
          eyebrow: "Una agenda telefónica gigante",
          texto:
            "Como buscar un contacto por nombre y obtener su número, DNS busca un dominio y devuelve su IP.",
          items: [
            { label: "Agenda telefónica", valor: "Nombre → Número", icono: "BookOpen" },
            { label: "DNS", valor: "Dominio → IP", icono: "Globe" },
          ],
        },
      ],
    },
    {
      titulo: "Cómo se resuelve un dominio",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Cinco preguntas en milisegundos",
          texto:
            "Cuando escribes una URL y presionas Enter, ocurre una cadena de preguntas y respuestas. Si nadie tiene la respuesta cacheada, se recorren todas.",
          pasos: [
            {
              titulo: "Caché local",
              descripcion:
                "Tu sistema operativo revisa si ya tiene la respuesta guardada de una consulta reciente. Si sí, termina aquí en <1ms.",
            },
            {
              titulo: "Resolver del ISP",
              descripcion:
                "Tu dispositivo pregunta al DNS de tu proveedor de internet. Este suele tener caché propia y resuelve la mayoría de consultas sin pasar a las siguientes etapas.",
            },
            {
              titulo: "Servidor raíz",
              descripcion:
                "Si nadie tiene la respuesta, el resolver consulta a uno de los 13 conjuntos de servidores raíz del mundo. No conocen IPs, pero saben quién maneja cada TLD.",
            },
            {
              titulo: "Servidor TLD",
              descripcion:
                "El TLD (Top-Level Domain) sabe quién es el dueño autoritativo del dominio. .com lo maneja Verisign; .mx lo maneja NIC México.",
            },
            {
              titulo: "Servidor autoritativo",
              descripcion:
                "Aquí vive la respuesta definitiva. Devuelve la IP exacta y un TTL (cuánto tiempo cachearla). La respuesta sube de vuelta hasta tu navegador.",
            },
          ],
        },
        {
          tipo: "visual",
          eyebrow: "Sigue el viaje",
          texto:
            "Avanza por las 5 etapas y mira qué pregunta y qué responde cada servidor en una consulta DNS real.",
          componente: "dns-lookup",
        },
      ],
    },
    {
      titulo: "Anatomía de un dominio",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Se lee de derecha a izquierda",
          texto:
            "Toma maps.google.com. Cada pieza tiene un dueño y una jerarquía. Toca cada parte.",
          partes: [
            {
              id: "tld",
              label: ".com",
              color: "#3A8DFF",
              detalle:
                "El TLD (Top-Level Domain). Puede ser genérico (.com, .org, .net) o geográfico (.mx, .es, .uk). Lo administra la ICANN a través de registradores como Verisign.",
            },
            {
              id: "dominio",
              label: "google",
              color: "#00A896",
              detalle:
                "El dominio de segundo nivel. Es el nombre que registra una empresa o persona. Google paga anualmente para mantenerlo y nadie más puede usarlo mientras renueve.",
            },
            {
              id: "subdominio",
              label: "maps",
              color: "#FF9F43",
              detalle:
                "El subdominio. El dueño del dominio decide cuántos crear y a dónde apuntan. maps.google.com, mail.google.com y drive.google.com pueden apuntar a servidores totalmente distintos.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "El TTL (Time To Live) en DNS es cuánto tiempo puede cachearse una respuesta. Un TTL de 3600 = 1 hora sin volver a preguntar. Por eso a veces un cambio de dominio tarda en propagarse: hasta que vencen los TTLs en las cachés.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta: "¿Cuál es la función principal del DNS?",
          opciones: [
            { texto: "Cifrar la conexión entre tu navegador y el servidor.", correcta: false },
            { texto: "Traducir nombres de dominio en direcciones IP.", correcta: true },
            { texto: "Asignar IPs privadas a los dispositivos de tu red.", correcta: false },
            { texto: "Dividir los datos en paquetes.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El DNS convierte nombres legibles por humanos (google.com) en direcciones legibles por máquinas (142.250.80.46). Sin él, tendrías que memorizar IPs para navegar.",
          feedbackIncorrecto:
            "El cifrado lo maneja TLS/HTTPS, las IPs privadas las asigna DHCP en tu router, los paquetes los gestiona IP. El DNS tiene una sola misión: nombre → IP.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Cambias la IP de un servidor y aunque ya actualizaste el DNS, algunos usuarios siguen yendo a la IP vieja durante horas. ¿Por qué?",
          opciones: [
            { texto: "Tu cambio aún no se guardó.", correcta: false },
            { texto: "El navegador está roto.", correcta: false },
            { texto: "Hay que reiniciar todos los routers del mundo.", correcta: false },
            { texto: "Sus resolvers y dispositivos tienen la respuesta cacheada y el TTL no ha vencido.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. Las respuestas DNS se cachean según su TTL. Si el TTL era 24 horas, hasta que venza, los clientes seguirán usando la IP vieja. Por eso, antes de migrar un servidor, conviene bajar el TTL del registro.",
          feedbackIncorrecto:
            "El motivo es el caché DNS. Cada respuesta lleva un TTL: hasta que vence, resolvers y dispositivos siguen usando la IP cacheada. Bajar el TTL antes de una migración acelera la propagación.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "En el dominio mail.empresa.mx, ¿cuál es el TLD?",
          opciones: [
            { texto: ".mx", correcta: true },
            { texto: "mail", correcta: false },
            { texto: "empresa", correcta: false },
            { texto: "empresa.mx", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El TLD (Top-Level Domain) es la parte más a la derecha: .mx en este caso. «empresa» es el dominio de segundo nivel y «mail» es un subdominio.",
          feedbackIncorrecto:
            "El TLD es siempre la parte más a la derecha del dominio: .com, .org, .mx, .es. «empresa» es el dominio de segundo nivel y «mail» es un subdominio dentro de empresa.mx.",
        },
      ],
    },
  ],
};

export default capitulo;

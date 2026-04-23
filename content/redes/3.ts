import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "redes",
  numero: 3,
  titulo: "DNS: La Agenda del Internet",
  descripcion: "¿Cómo sabe tu navegador dónde está google.com?",
  tiempoMin: 7,
  preguntaGancho:
    "Escribes 'google.com' y en menos de un segundo tu navegador sabe exactamente a cuál de los millones de servidores del mundo conectarse. ¿Cómo lo hace si nunca le diste ninguna dirección?",
  secciones: [
    {
      tipo: "texto",
      eyebrow: "El problema",
      texto:
        "Las computadoras se comunican con números: IPs como 142.250.80.46. Pero los humanos recordamos nombres: google.com, wikipedia.org, youtube.com. Alguien tiene que traducir entre estos dos mundos. Ese alguien es el DNS.",
    },
    {
      tipo: "analogia",
      eyebrow: "La analogía",
      texto:
        "El DNS funciona exactamente como una agenda telefónica. Antes de los smartphones, si querías llamarle a alguien, buscabas su nombre en la agenda y encontrabas su número. El DNS hace lo mismo: buscas un nombre de dominio y te devuelve su dirección IP.",
      items: [
        { label: "Agenda telefónica", valor: "Nombre → Número", icono: "BookOpen" },
        { label: "DNS", valor: "Dominio → IP", icono: "Globe" },
      ],
    },
    {
      tipo: "pasos",
      eyebrow: "¿Cómo funciona una consulta DNS?",
      texto:
        "Cuando escribes una URL, ocurre una cadena de preguntas y respuestas en milisegundos.",
      pasos: [
        {
          titulo: "Caché local",
          descripcion:
            "Tu computadora primero revisa si ya tiene guardada la respuesta de una consulta anterior. Si la tiene, termina aquí. Si no, empieza el viaje.",
        },
        {
          titulo: "Resolver del ISP",
          descripcion:
            "Tu dispositivo le pregunta al servidor DNS de tu proveedor de internet. Este también puede tener la respuesta en caché y devolvértela al instante.",
        },
        {
          titulo: "Servidor raíz",
          descripcion:
            "Si nadie tiene la respuesta, el resolver consulta a uno de los 13 servidores raíz del mundo. Estos no conocen la IP, pero saben quién sí: el servidor TLD.",
        },
        {
          titulo: "Servidor TLD",
          descripcion:
            "El servidor de dominio de nivel superior (TLD) maneja extensiones como .com, .org o .mx. Sabe qué servidor autoritativo es responsable del dominio que buscas.",
        },
        {
          titulo: "Servidor autoritativo",
          descripcion:
            "Este es el servidor que realmente tiene la respuesta definitiva. Devuelve la IP exacta del dominio, que viaja de regreso hasta tu navegador.",
        },
      ],
    },
    {
      tipo: "visual",
      eyebrow: "Visualización",
      texto:
        "Así viaja tu consulta DNS hasta encontrar la IP del dominio. Escribe un dominio y avanza paso a paso para verlo.",
      componente: "dns-lookup",
    },
    {
      tipo: "highlight",
      texto:
        "Todo este proceso —caché local, resolver, servidor raíz, TLD, autoritativo— suele ocurrir en menos de 100 milisegundos. Es una de las infraestructuras más rápidas y críticas de internet, y la mayoría de la gente nunca sabe que existe.",
    },
    {
      tipo: "anatomia",
      eyebrow: "Anatomía de un dominio",
      texto:
        "Un nombre de dominio no es una cadena aleatoria. Tiene una jerarquía que se lee de derecha a izquierda. Ejemplo: maps.google.com",
      partes: [
        {
          id: "tld",
          label: ".com",
          color: "#0088ff",
          detalle:
            "El TLD (Top-Level Domain) es la extensión. Puede ser genérico (.com, .org, .net) o geográfico (.mx, .es, .uk). Lo administra la ICANN.",
        },
        {
          id: "dominio",
          label: "google",
          color: "#00ddff",
          detalle:
            "El dominio de segundo nivel es el nombre que registra una empresa o persona. Google pagó para tener este nombre y nadie más puede usarlo mientras lo renueve.",
        },
        {
          id: "subdominio",
          label: "maps",
          color: "#00FFBF",
          detalle:
            "El subdominio es opcional y lo controla el dueño del dominio. maps.google.com, mail.google.com y drive.google.com pueden apuntar a servidores completamente distintos.",
        },
      ],
    },
    {
      tipo: "texto",
      eyebrow: "TTL y caché",
      texto:
        "Cada respuesta DNS viene con un TTL (Time To Live): un número en segundos que indica cuánto tiempo puede guardarse en caché esa respuesta. Un TTL de 3600 significa que durante una hora no hace falta preguntar de nuevo. Esto reduce la carga en los servidores y acelera la experiencia para los usuarios.",
    },
    {
      tipo: "quiz",
      pregunta: "¿Cuál es la función principal del DNS?",
      opciones: [
        {
          texto: "Cifrar la conexión entre tu navegador y el servidor.",
          correcta: false,
        },
        {
          texto: "Traducir nombres de dominio en direcciones IP.",
          correcta: true,
        },
        {
          texto: "Asignar IPs privadas a los dispositivos de tu red.",
          correcta: false,
        },
        {
          texto: "Dividir los datos en paquetes para su transmisión.",
          correcta: false,
        },
      ],
      feedbackCorrecto:
        "Exacto. El DNS es el sistema que convierte nombres legibles por humanos (google.com) en direcciones numéricas legibles por máquinas (142.250.80.46). Sin él, tendrías que memorizar IPs para navegar.",
      feedbackIncorrecto:
        "El cifrado lo maneja TLS/HTTPS, las IPs privadas las asigna tu router con DHCP, y los paquetes los gestiona el protocolo IP. El DNS tiene una sola misión: traducir nombres en IPs.",
    },
  ],
};

export default capitulo;

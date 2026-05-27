import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "redes",
  numero: 5,
  titulo: "HTTP y HTTPS",
  descripcion: "El lenguaje que hablan navegadores y servidores.",
  tiempoMin: 7,
  preguntaGancho:
    "Cada vez que abres una página web, tu navegador y el servidor mantienen una conversación muy precisa. ¿Cómo saben ambos qué pedir, qué responder y si algo salió mal?",
  pasos: [
    {
      titulo: "El problema",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "El problema",
          texto:
            "Ya sabemos que los datos viajan en paquetes y que las IPs los dirigen al destino correcto. Pero cuando tu navegador llega al servidor de Wikipedia, ¿cómo le dice exactamente qué página quiere? ¿Y cómo le responde el servidor? Necesitan un idioma común. Ese idioma es HTTP.",
        },
        {
          tipo: "analogia",
          eyebrow: "La analogía",
          texto:
            "HTTP funciona como pedir comida en un restaurante. Tú haces un pedido específico (GET, POST), el mesero lo lleva a la cocina, y la cocina responde con lo que pediste —o con un mensaje de que no está disponible.",
          items: [
            { label: "Cliente (navegador)", valor: "El comensal", icono: "UtensilsCrossed" },
            { label: "Servidor", valor: "La cocina", icono: "ChefHat" },
          ],
        },
      ],
    },
    {
      titulo: "Anatomía de una petición",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Anatomía de una petición HTTP",
          texto:
            "Cada petición HTTP tiene partes bien definidas. Toca cada una para ver qué contiene.",
          partes: [
            {
              id: "method",
              label: "Método",
              color: "#3A8DFF",
              detalle:
                "Indica qué quiere hacer el cliente. GET pide datos, POST envía datos nuevos, PUT actualiza, DELETE borra. Es el verbo de la acción.",
            },
            {
              id: "url",
              label: "URL",
              color: "#00A896",
              detalle:
                "La dirección exacta del recurso que se solicita: el dominio, la ruta y los parámetros opcionales. Por ejemplo: /articulo?id=42.",
            },
            {
              id: "headers",
              label: "Cabeceras",
              color: "#FF9F43",
              detalle:
                "Metadatos de la petición: qué tipo de contenido acepta el cliente, en qué idioma, si tiene cookies de sesión, el tipo de navegador, etc.",
            },
            {
              id: "body",
              label: "Cuerpo",
              color: "#FF5C5C",
              detalle:
                "El contenido que se envía al servidor, presente solo en métodos como POST o PUT. Por ejemplo, el formulario de registro que acabas de llenar.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Cómo funciona",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "¿Cómo funciona una petición y respuesta?",
          texto:
            "Cuando escribes una URL y presionas Enter, ocurre este intercambio en milisegundos.",
          pasos: [
            {
              titulo: "El navegador construye la petición",
              descripcion:
                "Tu navegador arma un mensaje HTTP: 'GET /index.html HTTP/1.1, Host: wikipedia.org'. Le está diciendo al servidor exactamente qué quiere.",
            },
            {
              titulo: "El servidor recibe y procesa",
              descripcion:
                "El servidor lee la petición, busca el recurso solicitado (un archivo HTML, datos de una base de datos, una imagen) y prepara la respuesta.",
            },
            {
              titulo: "El servidor responde con un código de estado",
              descripcion:
                "La respuesta siempre incluye un código: 200 significa éxito, 404 que no se encontró el recurso, 500 que el servidor tuvo un error interno.",
            },
            {
              titulo: "El navegador renderiza",
              descripcion:
                "Con el HTML recibido, el navegador hace nuevas peticiones para los recursos adicionales: imágenes, CSS, JavaScript. Cada uno es una petición HTTP separada.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Los códigos de estado HTTP se agrupan por centenas: 2xx es éxito, 3xx es redirección, 4xx es error del cliente (tú pediste algo mal), 5xx es error del servidor (ellos fallaron). El famoso 404 significa que el recurso no existe en esa URL.",
        },
      ],
    },
    {
      titulo: "De HTTP a HTTPS",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "De HTTP a HTTPS",
          texto:
            "HTTP tiene un problema grave: todo viaja en texto plano. Cualquier router en el camino puede leer tus contraseñas, tus mensajes, tu número de tarjeta. HTTPS soluciona esto añadiendo una capa de cifrado llamada TLS (Transport Layer Security) por encima de HTTP. El contenido viaja cifrado de extremo a extremo: solo tú y el servidor pueden leerlo.",
        },
        {
          tipo: "anatomia",
          eyebrow: "HTTP vs HTTPS",
          texto: "La diferencia no es solo un candado en el navegador.",
          partes: [
            {
              id: "http",
              label: "HTTP",
              color: "#FF5C5C",
              detalle:
                "Texto plano. Rápido de implementar, pero cualquier intermediario puede interceptar y leer los datos. Hoy solo aceptable para contenido completamente público sin interacción del usuario.",
            },
            {
              id: "https",
              label: "HTTPS",
              color: "#00A896",
              detalle:
                "HTTP + TLS. El servidor tiene un certificado digital que prueba su identidad. Los datos se cifran antes de salir de tu dispositivo y solo el servidor puede descifrarlos. Obligatorio para cualquier sitio que maneje datos de usuarios.",
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
            "Compara una petición HTTP y una HTTPS. Observa qué ve un intermediario en cada caso.",
          componente: "http-vs-https",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta: "Recibes un error 403 al intentar acceder a una página. ¿Qué significa?",
          opciones: [
            { texto: "El servidor tuvo un error interno y no pudo responder.", correcta: false },
            { texto: "La página no existe en esa URL.", correcta: false },
            { texto: "No tienes permiso para acceder a ese recurso.", correcta: true },
            { texto: "La petición fue exitosa pero el contenido está vacío.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. 403 Forbidden significa que el servidor entendió tu petición pero se niega a cumplirla por falta de permisos. Distinto al 404 (no existe) o al 500 (error del servidor).",
          feedbackIncorrecto:
            "Los errores 5xx son del servidor, el 404 es 'no encontrado' y el 204 es éxito sin contenido. El 403 Forbidden significa específicamente que no tienes autorización para acceder a ese recurso, aunque exista.",
        },
      ],
    },
  ],
};

export default capitulo;

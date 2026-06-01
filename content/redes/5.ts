import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "redes",
  numero: 5,
  titulo: "Nivel 5 · HTTP y HTTPS",
  pasos: [
    {
      titulo: "El idioma de la web",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Cliente y servidor se entienden con HTTP",
          texto:
            "Ya sabemos que los paquetes viajan y que las IPs los dirigen. Pero cuando tu navegador habla con un servidor, ¿cómo le dice qué página quiere? ¿Cómo responde el servidor? Necesitan un idioma común. Ese idioma es HTTP (HyperText Transfer Protocol).",
        },
        {
          tipo: "analogia",
          eyebrow: "Como pedir en un restaurante",
          texto:
            "Tú haces un pedido específico, el mesero lo lleva a la cocina y la cocina responde con lo que pediste — o con un mensaje de que no está disponible.",
          items: [
            { label: "Cliente (navegador)", valor: "El comensal hace un pedido", icono: "UtensilsCrossed" },
            { label: "Servidor", valor: "La cocina prepara y responde", icono: "ChefHat" },
          ],
        },
      ],
    },
    {
      titulo: "Anatomía de una petición",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Cuatro piezas",
          texto:
            "Cada petición HTTP tiene cuatro partes claras. Toca cada una.",
          partes: [
            {
              id: "method",
              label: "Método",
              color: "#3A8DFF",
              detalle:
                "El verbo de la acción. GET pide datos, POST envía datos nuevos, PUT actualiza, DELETE borra. Define la intención de la petición.",
            },
            {
              id: "url",
              label: "URL",
              color: "#00A896",
              detalle:
                "La dirección del recurso: dominio + ruta + parámetros opcionales. Ej: /api/usuarios?id=42",
            },
            {
              id: "headers",
              label: "Cabeceras",
              color: "#FF9F43",
              detalle:
                "Metadatos: qué tipo de contenido aceptas, en qué idioma, cookies de sesión, tipo de navegador, autenticación.",
            },
            {
              id: "body",
              label: "Cuerpo",
              color: "#FF5C5C",
              detalle:
                "El contenido enviado al servidor. Solo aparece en métodos como POST o PUT. Ej: el JSON del formulario que llenaste.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Códigos de respuesta",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Las familias 2xx, 3xx, 4xx, 5xx",
          texto:
            "Cada respuesta HTTP lleva un código que dice si todo salió bien y, si no, de quién es el problema.",
          items: [
            {
              titulo: "2xx · Éxito",
              descripcion:
                "Todo bien. 200 OK es el clásico (recurso devuelto). 201 Created cuando creas algo. 204 No Content cuando no hay nada que devolver.",
              icono: "CheckCircle2",
            },
            {
              titulo: "3xx · Redirección",
              descripcion:
                "Mira en otro lado. 301 Moved Permanently (mudanza definitiva). 302 Found (mudanza temporal). 304 Not Modified (usa tu caché).",
              icono: "ArrowRightLeft",
            },
            {
              titulo: "4xx · Error del cliente",
              descripcion:
                "Tú pediste algo mal. 400 Bad Request (sintaxis rota). 401 Unauthorized (falta login). 403 Forbidden (sí estás logueado pero no puedes). 404 Not Found (no existe).",
              icono: "XCircle",
            },
            {
              titulo: "5xx · Error del servidor",
              descripcion:
                "Ellos fallaron. 500 Internal Server Error (algo se rompió). 502 Bad Gateway. 503 Service Unavailable (caído o saturado). 504 Gateway Timeout.",
              icono: "ServerCrash",
            },
          ],
          nota:
            "Regla mnemotécnica: si el código empieza con 4, es tu culpa; si empieza con 5, es del servidor.",
        },
      ],
    },
    {
      titulo: "De HTTP a HTTPS",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "El problema del texto plano",
          texto:
            "HTTP tiene un problema serio: todo viaja sin cifrar. Cualquier router en el camino puede leer tus contraseñas, mensajes y datos de tarjeta. HTTPS resuelve esto añadiendo TLS (Transport Layer Security) por encima de HTTP: el contenido viaja cifrado de extremo a extremo.",
        },
        {
          tipo: "visual",
          eyebrow: "Pruébalo",
          texto:
            "Alterna entre HTTP y HTTPS. Mira qué ve un intermediario (Wi-Fi público, ISP, router) en cada caso cuando envías un login.",
          componente: "http-vs-https",
        },
        {
          tipo: "highlight",
          texto:
            "Hoy HTTP sin cifrar solo es aceptable para contenido completamente público sin interacción del usuario. Los navegadores modernos marcan los sitios HTTP como «No seguro». HTTPS es obligatorio para cualquier sitio que maneje datos de usuarios.",
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
            { texto: "El servidor tuvo un error interno.", correcta: false },
            { texto: "La página no existe en esa URL.", correcta: false },
            { texto: "No tienes permiso para acceder a ese recurso, aunque exista.", correcta: true },
            { texto: "La petición fue exitosa pero sin contenido.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. 403 Forbidden significa que el servidor entendió la petición pero se niega a cumplirla por falta de permisos. Distinto al 404 (no existe) o al 500 (error del servidor).",
          feedbackIncorrecto:
            "Los 5xx son del servidor; el 404 es «no encontrado»; el 204 es éxito sin contenido. 403 significa específicamente que el recurso existe pero no tienes autorización para verlo.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Estás conectado a una Wi-Fi pública y abres un sitio que usa HTTP (sin la 'S'). ¿Qué riesgo tienes?",
          opciones: [
            { texto: "Ninguno: las contraseñas siempre se cifran.", correcta: false },
            { texto: "El sitio cargará más lento pero seguro.", correcta: false },
            { texto: "Solo Google ve tus datos.", correcta: false },
            { texto: "Cualquier nodo de la red (otro usuario, el router del café, el ISP) puede leer en texto plano tus contraseñas y datos.", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. HTTP envía todo en texto plano: cualquier intermediario en la red puede capturar y leer el contenido. En Wi-Fi pública es trivial montar un sniffer. Por eso HTTPS es obligatorio para cualquier dato sensible.",
          feedbackIncorrecto:
            "HTTP NO cifra nada: usuario, contraseña y contenido viajan visibles. En una Wi-Fi pública, cualquier persona conectada puede capturar el tráfico con herramientas básicas. HTTPS resuelve esto cifrando con TLS.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Tu API responde con código 500. ¿De quién es el problema?",
          opciones: [
            { texto: "Tuyo: enviaste mal la petición.", correcta: false },
            { texto: "Del servidor: algo falló al procesar la petición.", correcta: true },
            { texto: "De DNS: el dominio no resuelve.", correcta: false },
            { texto: "De tu navegador.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Los códigos 5xx son errores del servidor: tu petición llegó bien, pero algo dentro del servidor falló (excepción, base de datos caída, bug). No es tu culpa: hay que revisar logs del servidor.",
          feedbackIncorrecto:
            "Si el código empieza con 4 (4xx) es problema del cliente. Si empieza con 5 (5xx) es problema del servidor. 500 Internal Server Error significa que tu petición llegó bien pero el servidor falló al procesarla.",
        },
      ],
    },
  ],
};

export default capitulo;

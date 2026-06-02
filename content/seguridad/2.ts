import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "seguridad",
  numero: 2,
  titulo: "Nivel 2 · Autenticación: contraseñas, hashing y MFA",
  pasos: [
    {
      titulo: "¿Qué es autenticación?",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Demostrar quién eres",
          texto:
            "Autenticación es probar tu identidad ante un sistema. Hay tres tipos de pruebas: algo que sabes (contraseña), algo que tienes (teléfono, llave física) y algo que eres (huella, cara). Cada una es atacable de forma distinta; combinarlas (MFA) multiplica la dificultad para el atacante.",
        },
        {
          tipo: "anatomia",
          eyebrow: "Los tres factores",
          texto:
            "Combínalos siempre que puedas. Toca cada uno.",
          partes: [
            {
              id: "saber",
              label: "Algo que sabes",
              color: "#3A8DFF",
              detalle:
                "Contraseña, PIN, respuesta secreta. Lo más común y lo más débil: se filtra, se adivina, se phishea. Por sí solo, NUNCA es suficiente para datos importantes.",
            },
            {
              id: "tener",
              label: "Algo que tienes",
              color: "#00A896",
              detalle:
                "Teléfono con app autenticadora, llave física (YubiKey), tarjeta inteligente. Aumenta mucho la seguridad: un atacante remoto necesita acceso físico a tu dispositivo.",
            },
            {
              id: "ser",
              label: "Algo que eres",
              color: "#FF9F43",
              detalle:
                "Huella digital, reconocimiento facial, iris. Cómodo, pero no se puede «cambiar» si te lo roban (a diferencia de una contraseña). Mejor como complemento, no como factor único.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Las contraseñas y por qué fallan",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Lo que pasa cuando un sitio se filtra",
          texto:
            "Cuando una base de datos de contraseñas se filtra, los atacantes no obtienen las contraseñas directamente (si el sitio fue serio): obtienen sus hashes. Un hash es una huella matemática de la contraseña, calculada en un sentido (de contraseña a hash sí, de hash a contraseña no). Para «romper» un hash hay que probar millones de contraseñas hasta encontrar una que produzca el mismo hash.",
        },
        {
          tipo: "visual",
          eyebrow: "Pruébalo",
          texto:
            "Escribe contraseñas distintas y mira cuánto tardaría un GPU moderno en romperlas. La diferencia entre 6 y 16 caracteres es brutal.",
          componente: "password-strength",
        },
        {
          tipo: "highlight",
          texto:
            "Regla mental: longitud > complejidad. Una frase larga («perro-azul-corre-rápido-2025») es mucho más segura y más fácil de recordar que «P@s$w0rd». La longitud sube la entropía exponencialmente.",
        },
      ],
    },
    {
      titulo: "Hashing y salt",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Almacenamiento correcto vs incorrecto",
          texto:
            "Si un sitio guarda tus contraseñas mal, no importa qué tan buenas sean. Compara.",
          columnas: [
            {
              titulo: "Mal: texto plano o hash débil",
              subtitulo: "Lo que NO debe pasar",
              items: [
                "Guardar contraseñas tal cual: cualquier admin las lee, cualquier filtración las expone",
                "Hash con MD5 o SHA-1 sin salt: tablas precomputadas (rainbow tables) los rompen en segundos",
                "Mismo hash para mismas contraseñas → si filtran 1M de hashes, los repetidos delatan contraseñas comunes",
                "Resultado: 100M de cuentas comprometidas al instante",
              ],
            },
            {
              titulo: "Bien: hash lento + salt único",
              subtitulo: "Estado del arte",
              destacada: true,
              items: [
                "Funciones diseñadas para ser lentas: bcrypt, argon2, scrypt",
                "Salt único por usuario: cada hash es distinto aunque la contraseña sea la misma",
                "Romper UN hash toma horas o días",
                "Incluso si filtran la BD, el atacante solo puede romper pocas cuentas",
              ],
            },
          ],
        },
      ],
    },
    {
      titulo: "MFA: el multiplicador",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Tipos de segundo factor, ordenados por seguridad",
          texto:
            "Si pudieras añadir una sola cosa a tu seguridad personal hoy, sería MFA. Aquí cuál elegir.",
          items: [
            {
              titulo: "Llave física (FIDO2/YubiKey)",
              descripcion:
                "El más seguro. Resistente a phishing porque el dominio del sitio se verifica en hardware. Lo que usan Google, GitHub, Cloudflare para sus empleados.",
              icono: "KeyRound",
            },
            {
              titulo: "App autenticadora (TOTP)",
              descripcion:
                "Google Authenticator, Authy, 1Password. Códigos de 6 dígitos que rotan cada 30s. Funcionan offline. La opción accesible y robusta.",
              icono: "Smartphone",
            },
            {
              titulo: "Push notifications",
              descripcion:
                "Aprobar en una app (Duo, Microsoft Authenticator). Cómodo pero vulnerable a «MFA fatigue»: el atacante manda 100 pushes esperando que apruebes uno por error.",
              icono: "Bell",
            },
            {
              titulo: "SMS",
              descripcion:
                "El más débil, pero mejor que nada. Vulnerable a SIM swap (el atacante porta tu número). Úsalo solo si no hay alternativa.",
              icono: "MessageSquare",
            },
          ],
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Te filtran la base de datos de un sitio donde tienes cuenta. Si guardaban tu contraseña como `bcrypt + salt`, ¿qué tan grave es?",
          opciones: [
            { texto: "Catastrófico: tu contraseña se ve al instante.", correcta: false },
            { texto: "Mucho menos grave: romper bcrypt con salt único toma horas/días por contraseña. Cambia la contraseña por seguridad, pero no es emergencia inmediata.", correcta: true },
            { texto: "Da igual: bcrypt no protege nada.", correcta: false },
            { texto: "Solo es grave si usabas mayúsculas.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. bcrypt + salt es lento por diseño: romper UN hash toma horas o días en GPU. Aun así, cambia la contraseña en ese sitio y en cualquier otro donde la hayas reusado. El sitio hizo bien su parte; tú haz la tuya.",
          feedbackIncorrecto:
            "bcrypt + salt es el estado del arte: cada hash toma horas/días romper. El atacante solo recupera contraseñas comunes (qwerty, 123456) o mediante diccionarios. Si la tuya era fuerte y única, probablemente está bien. Aún así, cámbiala por precaución.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Qué contraseña aguanta más tiempo contra un ataque por fuerza bruta?",
          opciones: [
            { texto: "P@s$w0rd! (8 caracteres con símbolos)", correcta: false },
            { texto: "Una frase de 4-5 palabras inconexas como «taza-volcán-violín-eléctrico»", correcta: true },
            { texto: "Tu cumpleaños en formato DDMMAAAA", correcta: false },
            { texto: "El nombre de tu mascota repetido 3 veces", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Longitud > complejidad. Una frase de 4-5 palabras inconexas tiene entropía altísima (~70-80 bits) y es fácil de recordar. P@s$w0rd! tiene menos entropía y es predecible (los humanos sustituyen letras por símbolos de forma predecible).",
          feedbackIncorrecto:
            "P@s$w0rd! es muy predecible: los atacantes prueban estas variaciones primero. Cumpleaños y nombres de mascotas se sacan de redes sociales. Las frases largas inconexas son la mejor opción: alta entropía + fácil de recordar.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Cuál es el segundo factor MÁS resistente al phishing?",
          opciones: [
            { texto: "SMS con código", correcta: false },
            { texto: "Llave física FIDO2 (YubiKey): verifica el dominio en hardware, no se engaña por sitios falsos", correcta: true },
            { texto: "Pregunta de seguridad", correcta: false },
            { texto: "Push notifications", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. FIDO2 verifica el dominio del sitio criptográficamente en el hardware: si visitas paypa1.com (falso) en vez de paypal.com, la llave NO se activa. Es la única defensa fuerte contra phishing avanzado. SMS y push se pueden manipular.",
          feedbackIncorrecto:
            "FIDO2 es lo único que neutraliza el phishing realmente. La llave verifica criptográficamente el dominio del sitio: si es falso, no responde. SMS, TOTP y push se pueden phishear (el usuario teclea el código en la página falsa). Las preguntas de seguridad son las peores.",
        },
      ],
    },
  ],
};

export default capitulo;

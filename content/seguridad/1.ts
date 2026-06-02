import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "seguridad",
  numero: 1,
  titulo: "Nivel 1 · Por qué importa la seguridad",
  pasos: [
    {
      titulo: "Tres garantías que proteger",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "La tríada CIA",
          texto:
            "Toda la seguridad informática gira en torno a tres garantías que tu sistema le da a quien lo usa. Si una se rompe, hay un incidente. Memorízalas: Confidencialidad, Integridad y Disponibilidad. En inglés se les llama «CIA triad» (no la agencia).",
        },
        {
          tipo: "anatomia",
          eyebrow: "Las tres garantías",
          texto:
            "Cada una resuelve un tipo distinto de amenaza. Toca cada una.",
          partes: [
            {
              id: "c",
              label: "Confidencialidad",
              color: "#3A8DFF",
              detalle:
                "Solo quien debe ver la información la ve. Romperla = fuga de datos: alguien lee correos privados, números de tarjeta, expedientes médicos. Defensa típica: cifrado + control de acceso.",
            },
            {
              id: "i",
              label: "Integridad",
              color: "#00A896",
              detalle:
                "La información no se altera sin autorización. Romperla = un atacante modifica una transferencia bancaria, falsifica un correo o cambia un registro médico. Defensa: firmas digitales, checksums, control de versiones.",
            },
            {
              id: "a",
              label: "Disponibilidad",
              color: "#FF9F43",
              detalle:
                "El sistema está accesible cuando se necesita. Romperla = un ataque DDoS tumba tu web, un ransomware cifra tus archivos y no puedes operar. Defensa: backups, redundancia, monitoreo.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Modelo de amenazas",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "No defiendes todo, defiendes lo que importa",
          texto:
            "Modelar amenazas es responder cuatro preguntas: ¿Qué quiero proteger? ¿De quién? ¿Qué tan grave es si lo pierdo? ¿Cuánto esfuerzo vale defender esto? La seguridad perfecta no existe: la práctica consiste en gastar tu presupuesto en los riesgos más grandes.",
        },
        {
          tipo: "comparacion",
          eyebrow: "Caso personal vs caso empresarial",
          texto:
            "El mismo marco aplica para tu cuenta de Instagram y para un banco. Cambian los activos y los atacantes.",
          columnas: [
            {
              titulo: "Tu vida personal",
              subtitulo: "Activos pequeños, atacantes oportunistas",
              items: [
                "Activo: tu cuenta de email (puerta a todo lo demás)",
                "Amenaza: phishing masivo, credenciales filtradas",
                "Impacto: robo de identidad, dinero, fotos",
                "Defensa básica: MFA + gestor de contraseñas",
              ],
            },
            {
              titulo: "Una empresa",
              subtitulo: "Activos grandes, atacantes profesionales",
              destacada: true,
              items: [
                "Activos: base de datos de clientes, sistemas de pago, propiedad intelectual",
                "Amenazas: ransomware, espionaje, insider mal intencionado",
                "Impacto: multas, demandas, pérdida de reputación",
                "Defensa: capas (firewall, MFA, segmentación, logs, IR plan)",
              ],
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Pregunta clave: «¿Quién querría atacarme y por qué?». Si tu respuesta es «nadie», estás equivocado. El 99% de los ataques son automatizados y oportunistas: no eligen víctimas, escanean internet y atacan lo que encuentran vulnerable.",
        },
      ],
    },
    {
      titulo: "Defensa en profundidad",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Capas: si una falla, las otras aguantan",
          texto:
            "El principio más importante de seguridad: nunca confiar en una sola defensa. Si un atacante salta una, debe encontrarse otra detrás. Y otra.",
          pasos: [
            {
              titulo: "Perímetro",
              descripcion:
                "Firewall, WAF, segmentación de red. La primera barrera: bloquea conexiones sospechosas antes de que toquen tus sistemas.",
            },
            {
              titulo: "Acceso e identidad",
              descripcion:
                "Autenticación fuerte (MFA), gestión de usuarios, principio del menor privilegio. Cada cuenta tiene SOLO los permisos que necesita.",
            },
            {
              titulo: "Datos",
              descripcion:
                "Cifrado en reposo y en tránsito, backups regulares y probados. Si un atacante llega aquí, lo que se lleva debe ser ilegible.",
            },
            {
              titulo: "Monitoreo y respuesta",
              descripcion:
                "Logs, alertas, detección de anomalías y un plan de respuesta a incidentes. Asume que algo va a fallar: prepárate para detectar y contener rápido.",
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
            "Un ransomware cifra todos los archivos de tu empresa y exige rescate. ¿Qué garantía de la tríada CIA se rompe principalmente?",
          opciones: [
            { texto: "Confidencialidad", correcta: false },
            { texto: "Integridad", correcta: false },
            { texto: "Disponibilidad: ya no puedes acceder a tus archivos.", correcta: true },
            { texto: "Ninguna", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Ransomware ataca disponibilidad: los archivos siguen ahí, pero no puedes usarlos. Por eso los backups offline son la defensa principal — si tienes una copia limpia, recuperas sin pagar.",
          feedbackIncorrecto:
            "Ransomware no necesariamente roba ni modifica datos (eso es confidencialidad e integridad). Lo que rompe es la disponibilidad: cifra todo y te bloquea el acceso. Por eso los backups regulares y probados son la mejor defensa.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "«Yo no tengo nada que esconder ni nada valioso, no me van a atacar». ¿Por qué es incorrecto este razonamiento?",
          opciones: [
            { texto: "Es correcto: solo atacan a empresas grandes.", correcta: false },
            { texto: "El 99% de los ataques son automatizados y oportunistas: no eligen víctimas, escanean internet.", correcta: true },
            { texto: "Los atacantes son educados.", correcta: false },
            { texto: "Solo hay riesgo si usas Windows.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. La mayoría de ataques los lanza un bot que escanea internet buscando puertos abiertos, versiones viejas o credenciales filtradas. Si tu servidor expone algo vulnerable, te van a atacar aunque no sepan quién eres.",
          feedbackIncorrecto:
            "La mayoría de ataques no son personales: son bots escaneando internet 24/7 buscando víctimas vulnerables. No importa si crees que «no tienes nada valioso»: tu cuenta, tu servidor o tu identidad sirven para algo (spam, lavar dinero, atacar a otros).",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Por qué se habla de «defensa en profundidad» en vez de poner toda la inversión en un firewall potente?",
          opciones: [
            { texto: "Porque los firewalls son caros.", correcta: false },
            { texto: "Porque ninguna defensa única es perfecta: si falla, las otras capas deben aguantar.", correcta: true },
            { texto: "Porque a los hackers les gustan los firewalls.", correcta: false },
            { texto: "Es solo un argumento de marketing.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Toda defensa tiene vulnerabilidades. Si confías en una sola y falla, el atacante entra. Capas (firewall + MFA + cifrado + monitoreo) hacen que aunque salte una, las otras lo detengan o al menos lo detecten.",
          feedbackIncorrecto:
            "Defensa en profundidad asume que cualquier capa puede fallar. Si confías solo en un firewall y alguien lo evade, no hay nada más. Con capas (perímetro + identidad + datos + monitoreo), un atacante que pase la primera se encuentra con la siguiente.",
        },
      ],
    },
  ],
};

export default capitulo;

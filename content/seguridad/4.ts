import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "seguridad",
  numero: 4,
  titulo: "Nivel 4 · Ataques comunes",
  pasos: [
    {
      titulo: "El panorama",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Conocer al enemigo",
          texto:
            "La mayoría de incidentes en empresas no vienen de hackers genios rompiendo cifrados modernos. Vienen de cinco familias de ataques que llevan décadas funcionando porque siguen explotando las mismas debilidades: humanos distraídos, software desactualizado y código mal escrito. Saber cómo funcionan es la mitad de la defensa.",
        },
        {
          tipo: "analogia",
          eyebrow: "Como vacunarse",
          texto:
            "No te vacunas para que te enfermes: te vacunas para que tu sistema reconozca al patógeno cuando llegue. Igual con los ataques: aprender a verlos venir es lo que evita caer en ellos.",
          items: [
            { label: "Vacuna", valor: "Reconocer patrones de ataque", icono: "ShieldCheck" },
            { label: "Patógeno", valor: "Phishing, MITM, inyecciones", icono: "Bug" },
          ],
        },
      ],
    },
    {
      titulo: "Cinco ataques que debes reconocer",
      secciones: [
        {
          tipo: "visual",
          eyebrow: "Recorre paso a paso",
          texto:
            "Elige un ataque y avanza fase por fase. Verás exactamente qué hace el atacante y, al final, cómo mitigarlo.",
          componente: "attack-flow",
        },
        {
          tipo: "highlight",
          texto:
            "Patrón común en los cinco ataques: aprovechar una capa débil. Phishing e ingeniería social explotan al humano. SQL injection y XSS explotan al desarrollador. MITM explota una red insegura. La defensa también es por capas: humano formado + código robusto + red cifrada.",
        },
      ],
    },
    {
      titulo: "Más vectores que conviene conocer",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "El resto del catálogo",
          texto:
            "Estos no son menos importantes; simplemente no caben todos en un solo nivel. Reconoce sus nombres: vas a oírlos.",
          items: [
            {
              titulo: "Ransomware",
              descripcion:
                "Malware que cifra tus archivos y exige rescate para descifrarlos. Llega por email malicioso, RDP expuesto o vulnerabilidades sin parchear. Defensa: backups offline + parches + capacitación.",
              icono: "Lock",
            },
            {
              titulo: "DDoS",
              descripcion:
                "Distributed Denial of Service. Miles de equipos atacan tu sitio para saturarlo y tumbarlo. Defensa: CDN con protección DDoS (Cloudflare, AWS Shield).",
              icono: "Wifi",
            },
            {
              titulo: "Brute force / Credential stuffing",
              descripcion:
                "Bots prueban miles de combinaciones usuario/contraseña filtradas de otros sitios. Defensa: rate limiting, MFA, detección de logins anómalos.",
              icono: "KeyRound",
            },
            {
              titulo: "Supply chain attack",
              descripcion:
                "Comprometen una librería o proveedor que tú usas, infectando indirectamente a todos sus clientes (ej. SolarWinds 2020). Defensa: auditoría de dependencias, lock files, SBOM.",
              icono: "Boxes",
            },
            {
              titulo: "Zero-day",
              descripcion:
                "Vulnerabilidad nueva sin parche disponible. Caro y raro: lo usan atacantes profesionales contra blancos específicos. Defensa: defensa en profundidad y monitoreo de comportamiento.",
              icono: "Bug",
            },
            {
              titulo: "Insider threat",
              descripcion:
                "Empleado descontento, sobornado o descuidado. La defensa técnica casi no aplica: tiene credenciales legítimas. Defensa: principio del menor privilegio, separación de funciones, auditoría.",
              icono: "User",
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
            "Recibes un email de «Microsoft» diciendo que tu cuenta será suspendida en 24h. Hay un botón «Verificar ahora». ¿Qué haces?",
          opciones: [
            { texto: "Hago clic y reviso. Si pide login, llené mis datos: si era falso, los cambio después.", correcta: false },
            { texto: "NO hago clic. Si me preocupa, abro el navegador y entro a microsoft.com tecleando la URL yo mismo, sin pasar por el email.", correcta: true },
            { texto: "Reenvío el email a mi equipo para preguntar.", correcta: false },
            { texto: "Lo ignoro y borro todos los emails de Microsoft para siempre.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. NUNCA navegues por enlaces de emails inesperados. Si te preocupa, abre el navegador y teclea la URL tú mismo. Si la cuenta realmente estuviera en problemas, lo verías al loguearte directo. La urgencia es el truco principal del phishing.",
          feedbackIncorrecto:
            "El phishing depende de que hagas clic en su enlace. Una vez en su página falsa, las credenciales se las quedan ANTES de que puedas cambiarlas. Regla: emails con urgencia + botón = abrir el sitio real tecleando la URL tú mismo, jamás por el enlace.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Tu app web construye una query así: `SELECT * FROM users WHERE email='` + emailInput + `'`. ¿Qué problema tiene?",
          opciones: [
            { texto: "Ninguno: funciona bien.", correcta: false },
            { texto: "SQL injection: un atacante puede meter `' OR '1'='1` y manipular la query entera.", correcta: true },
            { texto: "Es lento.", correcta: false },
            { texto: "Solo funciona en MySQL.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Concatenar input del usuario en una query SQL es vulnerable a SQL injection. Solución: queries parametrizadas / prepared statements. Cualquier framework moderno (Django ORM, Prisma, Rails) lo hace por defecto. NUNCA concatenes input crudo.",
          feedbackIncorrecto:
            "Concatenar input del usuario en SQL = SQL injection lista. Con `' OR '1'='1` un atacante hace que la condición siempre sea verdadera y entra sin contraseña. Solución: queries parametrizadas (prepared statements). Todo framework moderno tiene esto built-in.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Cuál es el patrón común que comparten phishing e ingeniería social?",
          opciones: [
            { texto: "Usan virus muy sofisticados.", correcta: false },
            { texto: "Atacan al humano, no al sistema. Generan urgencia o autoridad para que la víctima actúe sin pensar.", correcta: true },
            { texto: "Solo funcionan contra Windows.", correcta: false },
            { texto: "Necesitan acceso físico al equipo.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Ambos saltan toda la seguridad técnica atacando al humano: el eslabón más débil. Crean urgencia («en 24h», «el CEO lo pidió»), autoridad (suplantan al IT, al banco, al jefe) o miedo. La defensa principal es cultura y capacitación, no software.",
          feedbackIncorrecto:
            "Phishing e ingeniería social no son ataques técnicos: explotan psicología. Urgencia, autoridad, miedo, simpatía. Por eso ni el mejor firewall los detiene: necesitas formar a las personas y crear procesos que NO dependan de confianza ciega.",
        },
      ],
    },
  ],
};

export default capitulo;

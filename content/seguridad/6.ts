import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "seguridad",
  numero: 6,
  titulo: "Nivel 6 · Buenas prácticas y respuesta a incidentes",
  pasos: [
    {
      titulo: "Higiene digital personal",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Lo que cualquier profesional hace ya",
          texto:
            "Antes de pensar en seguridad corporativa, asegura tu vida digital personal. La mayoría de breaches en empresas empiezan por la cuenta personal de un empleado. Si tú estás expuesto, expones a tu trabajo.",
        },
        {
          tipo: "grid",
          eyebrow: "Siete hábitos no negociables",
          texto:
            "Si haces estos siete bien, ya estás en el top 5% de usuarios en seguridad.",
          items: [
            {
              titulo: "Gestor de contraseñas",
              descripcion:
                "1Password, Bitwarden, KeePass. Una contraseña única y aleatoria por sitio. Tú solo recuerdas la maestra. Indispensable.",
              icono: "KeyRound",
            },
            {
              titulo: "MFA en todo lo que puedas",
              descripcion:
                "Email, banco, redes sociales, GitHub, repos de trabajo. App autenticadora > SMS. FIDO2 > app autenticadora.",
              icono: "ShieldCheck",
            },
            {
              titulo: "Actualizaciones automáticas",
              descripcion:
                "SO, navegador, apps. Los parches arreglan vulnerabilidades reales. «Lo actualizo mañana» = «lo actualizo nunca».",
              icono: "RefreshCw",
            },
            {
              titulo: "Cifrado de disco",
              descripcion:
                "BitLocker (Windows), FileVault (macOS), LUKS (Linux). Si pierdes el equipo, los datos van cifrados. Configúralo una vez y olvida.",
              icono: "HardDrive",
            },
            {
              titulo: "Backups automáticos",
              descripcion:
                "Backblaze, Time Machine, Restic. Configurar una vez. Lo que NO está en backup, no existe el día que falle el disco.",
              icono: "Database",
            },
            {
              titulo: "Cuidado con apps y permisos",
              descripcion:
                "No instales lo que no necesitas. Revisa qué permisos pides apps móviles. Una linterna NO necesita acceso a tus contactos.",
              icono: "AppWindow",
            },
            {
              titulo: "Revisa filtraciones",
              descripcion:
                "haveibeenpwned.com te dice si tu email apareció en filtraciones. Si sí, cambia esa contraseña en todos los sitios donde la reusaste.",
              icono: "Search",
            },
          ],
        },
      ],
    },
    {
      titulo: "Qué hacer cuando algo falla",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "El ciclo de respuesta a incidentes (IR)",
          texto:
            "Cuando detectes algo raro, sigue este flujo. La velocidad y la calma son lo que limita el daño.",
          pasos: [
            {
              titulo: "1. Detectar",
              descripcion:
                "Alguna señal: alerta del SIEM, comportamiento extraño, login imposible, archivos cifrados. NO ignores: investiga.",
            },
            {
              titulo: "2. Contener",
              descripcion:
                "Aísla el sistema afectado: desconectar de la red, cambiar credenciales comprometidas, deshabilitar la cuenta. NO apagues si puedes evitarlo: pierdes evidencia en RAM.",
            },
            {
              titulo: "3. Erradicar",
              descripcion:
                "Identifica la causa raíz y elimínala: parche aplicado, malware borrado, vulnerabilidad cerrada, accesos rotados. Si solo limpias sin erradicar, vuelve.",
            },
            {
              titulo: "4. Recuperar",
              descripcion:
                "Restaura desde backups limpios (probados). Monitorea de cerca para detectar reactivación. Vuelves a producción gradualmente.",
            },
            {
              titulo: "5. Aprender",
              descripcion:
                "Post-mortem sin culpar: ¿cómo entró? ¿qué detectó/falló? ¿qué controles añadir para que no se repita? Sin esta fase, vuelves a caer.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Si manejas datos personales (clientes, empleados, pacientes), tu jurisdicción casi seguro exige notificar a la autoridad y a los afectados en plazo corto (72h en UE bajo GDPR, similar en LATAM). Conocer tus obligaciones legales ANTES del incidente es parte de la preparación.",
        },
      ],
    },
    {
      titulo: "Errores caros que verás en la vida real",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Lo que hace cualquier víctima vs lo que debería hacer",
          texto:
            "En medio de un incidente, la presión empuja a tomar decisiones malas. Reconoce las trampas comunes.",
          columnas: [
            {
              titulo: "Reacción instintiva",
              subtitulo: "Lo que empeora todo",
              items: [
                "Apagar el servidor afectado → pierdes evidencia en memoria",
                "Restaurar backup encima sin saber por dónde entraron → vuelve el ataque",
                "Pagar el rescate del ransomware → financias al atacante, no garantiza recuperación",
                "Ocultarlo internamente → multas más graves cuando se descubra",
                "Buscar al culpable interno antes que la causa raíz → enemistas al equipo",
              ],
            },
            {
              titulo: "Respuesta profesional",
              subtitulo: "Lo que limita el daño",
              destacada: true,
              items: [
                "Desconectar de red sin apagar → preserva evidencia",
                "Identificar vector de entrada ANTES de restaurar",
                "Notificar a aseguradora ciber y autoridades correspondientes",
                "Comunicar a clientes con transparencia",
                "Post-mortem culpando al PROCESO, no a la persona",
              ],
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
            "Detectas en logs que una cuenta de empleado está haciendo descargas masivas desde una IP rara a las 3am. ¿Primer paso?",
          opciones: [
            { texto: "Llamar al empleado a esa hora para preguntar.", correcta: false },
            { texto: "Apagar todos los servidores.", correcta: false },
            { texto: "Contener: deshabilitar la cuenta, rotar sus credenciales, aislar al equipo. Luego investigar.", correcta: true },
            { texto: "Esperar a mañana para hablarlo en reunión.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El orden es Detectar → Contener → Erradicar → Recuperar → Aprender. Contener primero (deshabilitar cuenta, aislar) corta el daño en curso. LUEGO investigas con calma si era el empleado, un atacante con sus credenciales o un compromiso del equipo.",
          feedbackIncorrecto:
            "Esperar al día siguiente da horas extra al atacante. Apagar todo destruye evidencia en RAM. Llamar al empleado puede avisar al atacante (si es insider o si ya tomó el dispositivo). Primer paso: contener — deshabilitar cuenta, rotar credenciales, aislar de la red.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Caes víctima de ransomware en tu empresa. Tienes backups recientes y limpios. ¿Pagar el rescate?",
          opciones: [
            { texto: "Sí, lo más rápido para recuperar.", correcta: false },
            { texto: "NO: financias al atacante, no garantiza nada, y muchas jurisdicciones lo prohíben o lo penalizan. Restaura desde backups, identifica el vector y refuerza.", correcta: true },
            { texto: "Solo si el rescate es bajo.", correcta: false },
            { texto: "Pagar y denunciar después.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Pagar tiene tres problemas: financias al ecosistema criminal (te ponen en lista «paga fácil»), no hay garantía de recuperación (muchos no entregan la llave), y varios países lo prohíben o lo regulan estrictamente. Con backups limpios, restauras y refuerzas.",
          feedbackIncorrecto:
            "Pagar te marca como «paga fácil» y te volverán a atacar. El 30%+ de quien paga no recibe la llave o recibe una rota. Y varias jurisdicciones lo prohíben (sanciones OFAC en EE.UU., regulaciones similares en UE). Con backups, restaura desde cero y arregla el agujero de entrada.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Después de un incidente, ¿qué hace un post-mortem útil?",
          opciones: [
            { texto: "Identificar al empleado culpable y despedirlo.", correcta: false },
            { texto: "Reconstruir la línea de tiempo, identificar la causa raíz y añadir controles para que NO vuelva a pasar. Culpa al proceso, no a la persona.", correcta: true },
            { texto: "Borrar los logs para evitar problemas legales.", correcta: false },
            { texto: "No hacer nada: ya pasó.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Un buen post-mortem es «blameless» (sin culpar): si una persona pudo causar el incidente sola, el problema es el proceso, no la persona. Reconstruye la línea de tiempo, identifica la causa raíz, añade controles (monitoreo, validaciones, segundo par de ojos) para que no se repita.",
          feedbackIncorrecto:
            "Culpar a la persona destruye la cultura de reporte: la próxima vez, nadie levantará la mano cuando vea algo raro. Borrar logs es ilegal y autodestructivo. No hacer post-mortem garantiza que el incidente se repita. Lo correcto: post-mortem blameless con foco en el proceso.",
        },
      ],
    },
  ],
};

export default capitulo;

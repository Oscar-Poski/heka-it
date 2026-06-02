import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "seguridad",
  numero: 5,
  titulo: "Nivel 5 · Defensas",
  pasos: [
    {
      titulo: "Los pilares de la defensa",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Cinco controles que mueven la aguja",
          texto:
            "No vas a implementar 100 controles de seguridad de golpe. Pero cinco te quitan el 80% del riesgo en cualquier infraestructura: firewall, principio del menor privilegio, segmentación, parches al día y logs centralizados. Si solo puedes hacer estos cinco, hazlos bien.",
        },
        {
          tipo: "anatomia",
          eyebrow: "Toca cada pilar",
          texto:
            "Cada uno ataca un tipo distinto de amenaza. Juntos son la base de cualquier programa de seguridad serio.",
          partes: [
            {
              id: "firewall",
              label: "Firewall",
              color: "#3A8DFF",
              detalle:
                "Filtra qué tráfico entra y sale. Regla por defecto: denegar todo, permitir solo lo necesario. WAF (Web Application Firewall) añade filtros específicos contra ataques web (SQLi, XSS).",
            },
            {
              id: "lp",
              label: "Menor privilegio",
              color: "#00A896",
              detalle:
                "Cada usuario, cada servicio, cada API key tiene SOLO los permisos que necesita. Nada más. Si una cuenta se compromete, el daño está limitado. Auditar permisos regularmente: tienden a crecer con el tiempo.",
            },
            {
              id: "seg",
              label: "Segmentación",
              color: "#FF9F43",
              detalle:
                "Divide tu red en zonas: prod, dev, oficinas, IoT. Una zona comprometida no contamina las demás. La base de datos NO debería ser accesible desde la red de oficinas.",
            },
            {
              id: "patch",
              label: "Parches al día",
              color: "#8B5CF6",
              detalle:
                "El 60% de los breaches explotan vulnerabilidades con parche disponible hace meses. Automatiza actualizaciones donde puedas, prioriza CVEs críticos. Cuidado especial con dependencias (npm, pip, etc).",
            },
            {
              id: "logs",
              label: "Logs + monitoreo",
              color: "#FF5C5C",
              detalle:
                "Sin logs no hay forensia ni detección. Centraliza logs (SIEM: Splunk, ELK, Wazuh), alerta sobre anomalías (logins desde nuevas geografías, picos de tráfico, comandos sospechosos). Si no lo ves, no lo paras.",
            },
          ],
        },
      ],
    },
    {
      titulo: "Menor privilegio: ejemplos concretos",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Mal vs bien",
          texto:
            "El principio es fácil de decir y difícil de aplicar. Compara qué se ve antes y después.",
          columnas: [
            {
              titulo: "Permisos generosos",
              subtitulo: "Lo cómodo pero peligroso",
              items: [
                "Todos los desarrolladores son admin en prod",
                "La app web corre como root",
                "API key con acceso TOTAL a S3 / DB",
                "Empleados conservan accesos al cambiar de equipo",
                "MFA opcional",
              ],
            },
            {
              titulo: "Principio del menor privilegio",
              subtitulo: "Estado del arte",
              destacada: true,
              items: [
                "Acceso a prod solo cuando se necesita (just-in-time)",
                "App corre como usuario sin shell ni sudo",
                "API key con permisos mínimos (solo este bucket, solo lectura)",
                "Revisión trimestral de accesos",
                "MFA obligatorio para todo lo sensible",
              ],
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Pregunta de auditoría útil: «Si esta credencial se filtrara HOY, ¿qué podría hacer un atacante?». Si la respuesta es «destruir media empresa», la credencial tiene demasiados permisos. Recórtalos.",
        },
      ],
    },
    {
      titulo: "Backups: tu última red",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "La regla 3-2-1",
          texto:
            "Un backup que no probaste no es un backup, es un deseo. Sigue esta regla y vas a recuperarte de casi cualquier desastre, incluido ransomware.",
          pasos: [
            {
              titulo: "3 copias de los datos",
              descripcion:
                "La original + dos copias. Si una falla o se corrompe, sigues teniendo dos. Suena obvio pero la mayoría de empresas no llegan ni a esto.",
            },
            {
              titulo: "2 medios distintos",
              descripcion:
                "No todas las copias en el mismo tipo de almacenamiento. Disco local + nube. SSD + cinta. Un fallo del medio (firmware bug, batch defectuoso) no se lleva todas las copias.",
            },
            {
              titulo: "1 copia offsite y offline",
              descripcion:
                "Al menos una copia en otra ubicación física Y desconectada (o inmutable). Esto es lo que sobrevive a incendios, robos y ransomware. Si el ransomware llega a tus servidores, esta copia sigue intacta.",
            },
            {
              titulo: "PROBAR la restauración",
              descripcion:
                "Mínimo cada trimestre. Restaura un backup real a un entorno aparte y verifica que los datos están completos y usables. Más de la mitad de los backups «funcionan» hasta que toca usarlos.",
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
            "¿Cuál es la mejor regla por defecto para configurar un firewall?",
          opciones: [
            { texto: "Permitir todo y bloquear lo malo cuando aparezca.", correcta: false },
            { texto: "Denegar todo por defecto y permitir solo el tráfico explícitamente necesario.", correcta: true },
            { texto: "Permitir todo el tráfico desde la oficina.", correcta: false },
            { texto: "Apagar el firewall: ralentiza la red.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. «Deny by default, allow by exception» es la regla de oro. Solo lo que sabes que es necesario pasa. Cualquier puerto nuevo o servicio expuesto sin permiso explícito queda bloqueado, lo cual reduce drásticamente la superficie de ataque.",
          feedbackIncorrecto:
            "«Permitir todo y bloquear lo malo» = perder. Cada día aparecen vulnerabilidades nuevas y nunca alcanzas a bloquearlas todas. «Denegar todo por defecto» es la regla profesional: solo lo necesario pasa, todo lo demás queda fuera por defecto.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Tienes una API key de AWS para que tu app guarde imágenes en un bucket S3. ¿Qué permisos debe tener esa key?",
          opciones: [
            { texto: "AdministratorAccess: por si acaso.", correcta: false },
            { texto: "Solo PutObject sobre el bucket específico. Nada más.", correcta: true },
            { texto: "Todos los permisos sobre todos los buckets de la cuenta.", correcta: false },
            { texto: "PutObject + DeleteObject + IAM admin.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Principio del menor privilegio en acción. La app solo necesita subir archivos al bucket de imágenes, entonces solo PutObject sobre ese bucket. Si la key se filtra (por bug, por log expuesto, por commit en git), el atacante solo puede subir basura a UN bucket. Daño contenido.",
          feedbackIncorrecto:
            "Cada permiso extra es un agujero más cuando la key se filtra (y las API keys se filtran muchísimo: bots escanean GitHub buscándolas 24/7). Da solo lo mínimo: PutObject sobre el bucket específico, nada más. AdministratorAccess o IAM admin es regalarle las llaves de tu cuenta a quien las encuentre.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Tienes backups diarios en un disco USB conectado siempre al servidor. Cae un ransomware. ¿Qué pasa?",
          opciones: [
            { texto: "Te salvas: los backups están intactos.", correcta: false },
            { texto: "El ransomware cifra también el USB, porque está montado y accesible. Los backups quedan inservibles.", correcta: true },
            { texto: "Solo se afectan los archivos del último día.", correcta: false },
            { texto: "El USB activa una alerta automática.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. El ransomware cifra TODO lo que el equipo puede escribir, incluido cualquier disco montado, nube sincronizada (Dropbox, OneDrive) o NAS accesible. Por eso la regla 3-2-1 exige al menos una copia offsite y OFFLINE (o inmutable): es la única que sobrevive.",
          feedbackIncorrecto:
            "Si el USB está montado, el ransomware lo trata como otro disco más y lo cifra. Lo mismo con servicios cloud sincronizados (Dropbox, OneDrive). La única defensa real es backup offline (desconectado) o inmutable (S3 Object Lock, copias write-once). Regla 3-2-1.",
        },
      ],
    },
  ],
};

export default capitulo;

import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "linux",
  numero: 5,
  titulo: "Nivel 5 · Procesos",
  pasos: [
    {
      titulo: "Qué es un proceso",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Un programa cobrando vida",
          texto:
            "Un programa en disco es un archivo inerte. Cuando lo ejecutas, el kernel crea un proceso: una entidad viva con su propio espacio de memoria, sus recursos asignados y un ID único (PID). En un servidor pueden estar corriendo cientos a la vez, todos coordinados por el kernel.",
        },
        {
          tipo: "analogia",
          eyebrow: "Receta vs preparación activa",
          texto:
            "Un programa es el libro de recetas: texto inerte. Un proceso es la preparación activa en la cocina: tiene fuego, ingredientes en la encimera y un chef asignado. Puedes tener diez procesos del mismo programa, igual que diez cocineros preparando la misma receta a la vez.",
          items: [
            { label: "Libro de recetas", valor: "Programa en disco", icono: "BookOpen" },
            { label: "Preparación activa", valor: "Proceso en memoria", icono: "FlameKindling" },
          ],
        },
      ],
    },
    {
      titulo: "Anatomía de un proceso",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Cuatro atributos clave",
          texto:
            "Cada proceso tiene metadata que el kernel usa para gestionarlo. Toca cada atributo.",
          partes: [
            {
              id: "pid",
              label: "PID",
              color: "#FF5C5C",
              detalle:
                "Process ID. Número único mientras el proceso está vivo. PID 1 es systemd: el primer proceso del sistema, padre de todos los demás.",
            },
            {
              id: "ppid",
              label: "PPID",
              color: "#3A8DFF",
              detalle:
                "Parent Process ID. Todo proceso tiene un padre (el que lo creó con fork). Si el padre muere antes que el hijo, systemd adopta al huérfano.",
            },
            {
              id: "estado",
              label: "Estado",
              color: "#FF9F43",
              detalle:
                "Running (usando CPU), Sleeping (esperando algo), Stopped (pausado), Zombie (terminó pero su padre no recogió su estado). Los zombies indican un bug en el padre.",
            },
            {
              id: "nice",
              label: "nice / prioridad",
              color: "#00A896",
              detalle:
                "De -20 a 19. Valores bajos piden más CPU, altos ceden paso. Solo root puede bajar a negativo. Útil para procesos pesados que no quieres que monopolicen la máquina.",
            },
          ],
        },
        {
          tipo: "visual",
          eyebrow: "Inspecciona el árbol",
          texto:
            "Recorre un árbol de procesos típico. Toca cualquier PID para ver su padre, hijos, estado y consumo de CPU.",
          componente: "process-tree",
        },
        {
          tipo: "highlight",
          texto:
            "Ningún proceso nace de la nada. Todos se crean con fork() (el padre se clona) y opcionalmente exec() (el hijo se reemplaza con otro programa). Cada terminal, navegador y servicio existe gracias a esa cadena que arrancó en PID 1.",
        },
      ],
    },
    {
      titulo: "Gestionar procesos",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Cuatro herramientas para ver y controlar",
          texto:
            "Lo que necesitas para diagnosticar qué está corriendo y matar lo que sobra.",
          items: [
            {
              titulo: "ps aux",
              descripcion:
                "Instantánea de TODOS los procesos: PID, usuario, %CPU, %MEM, comando. Foto del sistema en este momento.",
              icono: "Camera",
            },
            {
              titulo: "top / htop",
              descripcion:
                "Vista en tiempo real ordenada por consumo. htop es la versión moderna, interactiva y con colores. Imprescindible para diagnosticar.",
              icono: "Activity",
            },
            {
              titulo: "kill / kill -9",
              descripcion:
                "kill PID envía SIGTERM (termina limpio). kill -9 PID envía SIGKILL (forzado, sin limpieza). Usa -9 solo si el primero no responde.",
              icono: "Square",
            },
            {
              titulo: "&, jobs, fg",
              descripcion:
                "Añade & al final para ejecutar en segundo plano: ./servidor &. jobs lista los tuyos. fg trae uno al frente.",
              icono: "Layers",
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
          pregunta: "¿Qué significa que un proceso esté en estado «Zombie»?",
          opciones: [
            { texto: "Consume demasiada memoria y el sistema lo suspendió.", correcta: false },
            { texto: "Terminó pero su padre no recogió su código de salida con wait().", correcta: true },
            { texto: "Está esperando acceso al disco y bloqueó a otros.", correcta: false },
            { texto: "Fue matado con kill -9 y no pudo limpiar.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Un zombie ya terminó, pero sigue ocupando una entrada en la tabla de procesos porque su padre no ha llamado a wait() para recoger su estado. Inofensivos en pequeña cantidad, indican un bug en el padre.",
          feedbackIncorrecto:
            "Un zombie no consume CPU ni memoria activa: ya murió. Sigue en la tabla de procesos porque su acta de defunción (código de salida) no ha sido recogida por su padre. Si ves muchos, hay un bug en el proceso padre.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Tu servidor está al 100% de CPU y no sabes qué proceso es. ¿Qué comando usas para diagnosticar en vivo?",
          opciones: [
            { texto: "ls /proc", correcta: false },
            { texto: "kill -9 todo", correcta: false },
            { texto: "ps aux y rezar.", correcta: false },
            { texto: "top o htop (vista en tiempo real ordenada por consumo)", correcta: true },
          ],
          feedbackCorrecto:
            "Correcto. top (o mejor htop) te da una vista en vivo de los procesos ordenados por consumo de CPU/memoria. Identificas al culpable en segundos. ps aux da una foto puntual, top actualiza en tiempo real.",
          feedbackIncorrecto:
            "Para diagnóstico en vivo: top o htop. Te muestran procesos ordenados por consumo y se actualizan automáticamente. ps aux es una foto fija; matar a ciegas es destructivo.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Le mandas SIGTERM (kill PID) a un proceso y no responde. ¿Qué señal usar a continuación?",
          opciones: [
            { texto: "kill -9 PID (SIGKILL, forzado sin posibilidad de ignorar)", correcta: true },
            { texto: "kill -1 PID (SIGHUP, recargar config)", correcta: false },
            { texto: "Reiniciar el servidor.", correcta: false },
            { texto: "Esperar 24 horas.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. SIGKILL (-9) no se puede ignorar ni capturar: el kernel termina el proceso de inmediato sin darle oportunidad de limpiar. Es el último recurso. Riesgo: archivos abiertos sin cerrar, datos sin volcar al disco.",
          feedbackIncorrecto:
            "Si SIGTERM no funciona, escala a SIGKILL (-9). Es la única señal que el proceso NO puede ignorar: el kernel lo mata directamente. Reiniciar el servidor es excesivo para un proceso colgado.",
        },
      ],
    },
  ],
};

export default capitulo;

import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "procesos",
  numero: 5,
  titulo: "Procesos",
 // preguntaGancho:
   // "¿Cuántos programas crees que están corriendo en tu computadora en este momento? La respuesta te va a sorprender.",
  pasos: [
    {
      titulo: "El problema",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "El problema",
          texto:
            "Cuando abres un programa, no solo 'se abre': el sistema operativo crea una entidad nueva con su propio espacio de memoria, sus recursos asignados y un identificador único. Eso es un proceso. En un servidor Linux en producción, pueden estar corriendo cientos o miles de procesos simultáneamente — bases de datos, servidores web, tareas programadas, monitores de sistema — y el kernel tiene que coordinarlos todos sin que se interfieran entre sí.",
        },
        {
          tipo: "analogia",
          eyebrow: "La analogía",
          texto:
            "Un proceso es como una receta que está siendo cocinada. El programa en disco es el libro de recetas: texto inerte, sin vida. Cuando lo ejecutas, el sistema toma esa receta y la convierte en una preparación activa con su propio fuego, sus propios ingredientes en la memoria y su propio chef asignado. Puedes tener diez instancias del mismo programa corriendo a la vez, igual que diez cocineros preparando la misma receta simultáneamente.",
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
          eyebrow: "Anatomía de un proceso",
          texto:
            "Cada proceso en Linux tiene atributos que el sistema usa para gestionarlo. Toca cada uno para entenderlo.",
          partes: [
            {
              id: "pid",
              label: "PID",
              color: "#FF5C5C",
              detalle:
                "Process ID. Un número único que identifica al proceso mientras está corriendo. El primer proceso que arranca el sistema (systemd) siempre tiene PID 1. Todos los demás son hijos o descendientes suyos.",
            },
            {
              id: "ppid",
              label: "PPID",
              color: "#4A9EFF",
              detalle:
                "Parent Process ID. Todo proceso tiene un padre: el proceso que lo creó. Esto forma un árbol de procesos. Si un padre muere sin esperar a sus hijos, esos quedan 'huérfanos' y los adopta systemd.",
            },
            {
              id: "estado",
              label: "Estado",
              color: "#FFB830",
              detalle:
                "Un proceso puede estar en varios estados: Running (usando CPU), Sleeping (esperando algo), Stopped (pausado) o Zombie (terminó pero su padre no lo recogió). Los zombies son inofensivos pero indican un problema en el proceso padre.",
            },
            {
              id: "prioridad",
              label: "Prioridad (nice)",
              color: "#00A896",
              detalle:
                "El kernel decide qué proceso usa la CPU en cada momento. El valor 'nice' (de -20 a 19) indica qué tan 'amable' es un proceso con los demás: valores bajos piden más CPU, valores altos ceden paso. Solo root puede bajar el valor a negativo.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "En Linux, ningún proceso nace de la nada. Todos se crean con una llamada al sistema llamada `fork()`: el proceso padre se clona a sí mismo, y el hijo resultante puede luego reemplazarse con un programa diferente usando `exec()`. Incluso tu terminal y tu navegador existen gracias a esa cadena de forks que empezó con PID 1.",
        },
      ],
    },
    {
      titulo: "Gestionar procesos",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Comandos para gestionar procesos",
          texto:
            "Estos comandos te dan visibilidad y control sobre todo lo que está corriendo en el sistema.",
          pasos: [
            {
              titulo: "ps aux — Instantánea de procesos",
              descripcion:
                "`ps aux` lista todos los procesos en ejecución con su PID, usuario, uso de CPU y memoria, y el comando que los inició. Es una foto del sistema en ese momento exacto.",
            },
            {
              titulo: "top / htop — Vista en vivo",
              descripcion:
                "`top` muestra los procesos en tiempo real, ordenados por consumo de recursos. `htop` es una versión más visual e interactiva. Imprescindible para diagnosticar qué está consumiendo tu servidor.",
            },
            {
              titulo: "kill — Terminar un proceso",
              descripcion:
                "`kill PID` envía una señal al proceso. La señal por defecto (`SIGTERM`) pide que termine limpiamente. `kill -9 PID` envía `SIGKILL`, que lo fuerza a morir sin posibilidad de limpieza.",
            },
            {
              titulo: "& y jobs — Procesos en segundo plano",
              descripcion:
                "Agrega `&` al final de un comando para ejecutarlo en segundo plano: `servidor &`. Luego usa `jobs` para ver qué tienes corriendo y `fg` para traerlo de vuelta al frente.",
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
            "Así luce el árbol de procesos que nace de PID 1 en un sistema Linux típico.",
          componente: "process-tree",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta: "¿Qué significa que un proceso esté en estado 'Zombie'?",
          opciones: [
            {
              texto: "Está consumiendo demasiada memoria y el sistema lo suspendió.",
              correcta: false,
            },
            {
              texto:
                "Terminó su ejecución pero su proceso padre aún no recogió su código de salida.",
              correcta: true,
            },
            {
              texto: "Está esperando acceso al disco y bloqueó otros procesos.",
              correcta: false,
            },
            {
              texto: "Fue detenido con `kill -9` y no pudo limpiar sus recursos.",
              correcta: false,
            },
          ],
          feedbackCorrecto:
            "Correcto. Un proceso zombie ya terminó de ejecutarse, pero sigue en la tabla de procesos porque su padre no ha llamado a `wait()` para recoger su estado de salida. Son inofensivos en pequeña cantidad, pero indican un bug en el proceso padre.",
          feedbackIncorrecto:
            "Un zombie no está activo ni consumiendo recursos. Es un proceso que ya terminó pero cuyo 'acta de defunción' (el código de salida) no ha sido recogida por su proceso padre. Ocupa una entrada en la tabla de procesos y nada más.",
        },
      ],
    },
  ],
};

export default capitulo;

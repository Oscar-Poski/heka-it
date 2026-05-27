import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "sistema-de-archivos",
  numero: 3,
  titulo: "El sistema de archivos",
  //preguntaGancho:
    //"¿Qué tienen en común tu teclado, tu conexión a internet y un documento de texto? En Linux, los tres son archivos.",
  pasos: [
    {
      titulo: "El problema",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "El problema",
          texto:
            "En Windows, cada dispositivo tiene su propia lógica: los discos tienen letras (C:, D:), los dispositivos se gestionan por paneles especiales y las rutas cambian según la máquina. Linux adoptó una filosofía radicalmente distinta: todo —archivos, discos, dispositivos de red, procesos— se representa como un archivo dentro de un único árbol de directorios. Una sola interfaz para controlar el mundo entero.",
        },
        {
          tipo: "analogia",
          eyebrow: "La analogía",
          texto:
            "El sistema de archivos de Linux es como un edificio con una sola entrada: la raíz (`/`). Desde ahí, todo está organizado en pasillos y habitaciones. No importa si la habitación contiene un documento, un disco duro externo o la configuración de tu tarjeta de red: todas están en el mismo edificio, con el mismo tipo de llave.",
          items: [
            { label: "Entrada del edificio", valor: "Directorio raíz `/`", icono: "DoorOpen" },
            { label: "Habitaciones", valor: "Archivos y dispositivos", icono: "FolderOpen" },
          ],
        },
      ],
    },
    {
      titulo: "Directorios clave",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Directorios clave del sistema",
          texto:
            "El árbol de Linux tiene convenciones estrictas. Toca cada directorio para saber qué vive ahí.",
          partes: [
            {
              id: "bin",
              label: "/bin y /usr/bin",
              color: "#FF5C5C",
              detalle:
                "Aquí viven los ejecutables esenciales: `ls`, `cp`, `grep`, `bash`. Son los comandos que el sistema necesita incluso antes de montar otros discos. Sin este directorio, no hay terminal.",
            },
            {
              id: "etc",
              label: "/etc",
              color: "#4A9EFF",
              detalle:
                "Configuración del sistema. Aquí están los archivos que definen cómo se comporta cada servicio: `/etc/hosts` para resolución de nombres, `/etc/ssh/sshd_config` para el servidor SSH, `/etc/fstab` para los discos montados.",
            },
            {
              id: "var",
              label: "/var",
              color: "#FFB830",
              detalle:
                "Datos variables: logs, bases de datos de paquetes, colas de correo. Es el directorio que más crece con el tiempo. `/var/log` es tu primera parada cuando algo falla.",
            },
            {
              id: "dev",
              label: "/dev",
              color: "#00A896",
              detalle:
                "Aquí está la magia de 'todo es un archivo'. `/dev/sda` es tu disco duro. `/dev/null` es un agujero negro que descarta todo lo que le mandes. `/dev/urandom` genera números aleatorios. Son archivos que representan hardware.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "La filosofía 'todo es un archivo' no es un capricho de diseño. Es lo que permite que en Linux puedas leer la temperatura de tu CPU con `cat`, monitorear el tráfico de red con las mismas herramientas con las que lees texto, y redirigir la salida de cualquier programa a cualquier destino con un solo símbolo: `>`.",
        },
      ],
    },
    {
      titulo: "Rutas",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Rutas: absolutas y relativas",
          texto:
            "Hay dos formas de indicarle al sistema dónde está algo. Entender la diferencia te ahorra confusión constante.",
          pasos: [
            {
              titulo: "Ruta absoluta",
              descripcion:
                "Empieza siempre desde la raíz (`/`). No importa dónde estés parado: `/home/usuario/documentos/archivo.txt` siempre apunta al mismo lugar.",
            },
            {
              titulo: "Ruta relativa",
              descripcion:
                "Parte desde tu directorio actual. Si estás en `/home/usuario`, puedes escribir `documentos/archivo.txt` y el sistema entiende dónde buscar.",
            },
            {
              titulo: "El punto `.` y el doble punto `..`",
              descripcion:
                "`.` significa 'aquí mismo' (el directorio actual). `..` significa 'un nivel arriba'. Puedes encadenarlos: `../../etc` sube dos niveles y entra a `/etc`.",
            },
            {
              titulo: "La virgulilla `~`",
              descripcion:
                "Es un atajo para tu directorio de usuario. `~/documentos` es equivalente a `/home/tu_usuario/documentos`. Funciona en cualquier contexto.",
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
          texto: "Así luce el árbol de directorios de Linux desde la raíz.",
          componente: "filesystem-tree",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Dónde buscarías primero si un servicio de Linux está fallando y quieres saber por qué?",
          opciones: [
            { texto: "En `/bin`, porque ahí están los ejecutables del sistema.", correcta: false },
            { texto: "En `/etc`, porque ahí está la configuración.", correcta: false },
            {
              texto: "En `/var/log`, porque ahí se guardan los registros de eventos.",
              correcta: true,
            },
            {
              texto: "En `/dev`, porque los dispositivos reportan sus errores ahí.",
              correcta: false,
            },
          ],
          feedbackCorrecto:
            "Correcto. `/var/log` es el archivo médico del sistema. Cada servicio escribe ahí su historial de actividad y errores. `journalctl` y archivos como `syslog` o `auth.log` son tu punto de partida para cualquier diagnóstico.",
          feedbackIncorrecto:
            "Los logs viven en `/var/log`. Es el directorio de datos variables del sistema, y los registros de eventos son el tipo de dato más variable que existe: crecen constantemente mientras el sistema corre.",
        },
      ],
    },
  ],
};

export default capitulo;

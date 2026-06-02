import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "linux",
  numero: 3,
  titulo: "Nivel 3 · El sistema de archivos",
  pasos: [
    {
      titulo: "Todo es un archivo",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Una sola interfaz para todo",
          texto:
            "En Windows cada disco tiene letra (C:, D:) y los dispositivos viven en paneles separados. Linux adoptó una filosofía radical: todo —archivos, discos, dispositivos, procesos— se representa como un archivo dentro de un único árbol que arranca en `/`. Una sola interfaz para controlar todo.",
        },
        {
          tipo: "analogia",
          eyebrow: "Un edificio con una sola entrada",
          texto:
            "Imagina un edificio con una sola puerta principal (la raíz `/`). Todo está organizado en pasillos y habitaciones que cuelgan de ella. No importa si una habitación contiene un documento, un disco duro o tu tarjeta de red: están en el mismo edificio, con la misma llave maestra.",
          items: [
            { label: "Entrada principal", valor: "Directorio raíz `/`", icono: "DoorOpen" },
            { label: "Habitaciones", valor: "Archivos y dispositivos", icono: "FolderOpen" },
          ],
        },
      ],
    },
    {
      titulo: "Directorios clave",
      secciones: [
        {
          tipo: "visual",
          eyebrow: "Recorre el árbol",
          texto:
            "Toca cada directorio para ver qué vive ahí y cuándo te toparás con él.",
          componente: "filesystem-tree",
        },
        {
          tipo: "highlight",
          texto:
            "La filosofía «todo es un archivo» no es capricho. Es lo que te permite leer la temperatura de tu CPU con cat, monitorear tráfico con las mismas herramientas con las que lees texto y redirigir la salida de cualquier programa a cualquier destino con un solo símbolo: `>`.",
        },
      ],
    },
    {
      titulo: "Rutas absolutas y relativas",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Dos formas de apuntar a un archivo",
          texto:
            "Saber la diferencia te ahorra confusión constante.",
          columnas: [
            {
              titulo: "Ruta absoluta",
              subtitulo: "Empieza desde /",
              destacada: true,
              items: [
                "Siempre apunta al mismo lugar, estés donde estés",
                "Ejemplo: /home/oscar/notas.txt",
                "Empieza siempre con /",
                "Útil en scripts y configs",
              ],
            },
            {
              titulo: "Ruta relativa",
              subtitulo: "Parte desde donde estás",
              items: [
                "Depende de tu directorio actual (pwd)",
                "Ejemplo: notas.txt o ../config/app.conf",
                "No empieza con /",
                "Más corta para uso diario",
              ],
            },
          ],
        },
        {
          tipo: "pasos",
          eyebrow: "Atajos útiles",
          texto:
            "Estos símbolos aparecen en rutas todo el tiempo. Memorízalos.",
          pasos: [
            {
              titulo: ". (un punto)",
              descripcion:
                "Significa «aquí mismo», el directorio actual. ./script.sh ejecuta script.sh desde donde estás (a veces necesario por seguridad).",
            },
            {
              titulo: ".. (dos puntos)",
              descripcion:
                "Significa «un nivel arriba». Puedes encadenarlos: ../../etc sube dos niveles y entra a /etc.",
            },
            {
              titulo: "~ (virgulilla)",
              descripcion:
                "Atajo a tu carpeta de usuario. ~/Documents es equivalente a /home/tu_usuario/Documents.",
            },
            {
              titulo: "- (guión, solo en cd)",
              descripcion:
                "cd - te lleva al directorio anterior. Útil para saltar entre dos rutas: cd /etc, trabajas, cd - vuelve a donde estabas.",
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
            "Un servicio en tu servidor está fallando y quieres saber por qué. ¿Dónde miras primero?",
          opciones: [
            { texto: "/bin, donde viven los ejecutables.", correcta: false },
            { texto: "/etc, donde está la configuración.", correcta: false },
            { texto: "/var/log, donde se guardan los registros de eventos.", correcta: true },
            { texto: "/dev, donde aparecen los dispositivos.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. /var/log es el archivo médico del sistema. Cada servicio escribe ahí su historial. journalctl, syslog y auth.log son tu punto de partida para cualquier diagnóstico.",
          feedbackIncorrecto:
            "Los logs viven en /var/log. Es el directorio de datos variables del sistema, y los registros son el tipo de dato más variable que existe: crecen mientras el sistema corre.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Estás en /home/oscar y quieres ir a /etc. ¿Qué comando es más portable (funciona desde cualquier lado)?",
          opciones: [
            { texto: "cd ../../etc", correcta: false },
            { texto: "cd /etc", correcta: true },
            { texto: "cd etc", correcta: false },
            { texto: "cd ~/etc", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. cd /etc es una ruta absoluta: te lleva al mismo lugar sin importar dónde estés parado. cd ../../etc solo funciona si estás dos niveles abajo de /. En scripts, usa siempre rutas absolutas.",
          feedbackIncorrecto:
            "Para scripts y portabilidad, siempre rutas absolutas (/etc). Las relativas (../../etc, etc, ~/etc) dependen de dónde estás parado y rompen al moverte. /etc funciona desde cualquier lado.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Qué hace `comando > /dev/null`?",
          opciones: [
            { texto: "Guarda la salida en un archivo llamado null.", correcta: false },
            { texto: "Descarta toda la salida del comando: /dev/null es un «agujero negro».", correcta: true },
            { texto: "Cambia el comando a modo silencioso.", correcta: false },
            { texto: "Borra el comando del sistema.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. /dev/null es un archivo especial que descarta todo lo que le escriben. Útil cuando quieres ejecutar algo sin que llene tu terminal de output que no te importa. Con `2>&1` además descartas errores.",
          feedbackIncorrecto:
            "/dev/null es un dispositivo especial: todo lo que se escribe ahí desaparece. Redirigir con > /dev/null silencia la salida del comando. Es la filosofía «todo es un archivo» en acción.",
        },
      ],
    },
  ],
};

export default capitulo;

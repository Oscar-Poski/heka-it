import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "usuarios-y-permisos",
  numero: 4,
  titulo: "Usuarios y permisos",
  descripcion: "¿Quién puede leer qué? ¿Quién puede borrar qué?",
  tiempoMin: 6,
  preguntaGancho:
    "¿Alguna vez borraste algo que no debías? En Linux existe un sistema que evita exactamente eso — y entenderlo te hace mejor profesional.",
  pasos: [
    {
      titulo: "El problema",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "El problema",
          texto:
            "En un servidor real, no hay un solo usuario: hay aplicaciones corriendo como procesos, administradores con acceso total, desarrolladores que solo deberían tocar ciertas carpetas y usuarios finales que no deberían ver nada de lo anterior. Linux resuelve esto con un sistema de permisos que lleva décadas siendo el estándar: cada archivo tiene un dueño, un grupo, y reglas claras sobre quién puede hacer qué.",
        },
        {
          tipo: "analogia",
          eyebrow: "La analogía",
          texto:
            "Imagina un edificio de oficinas. Hay llaves maestras (root), llaves de piso (grupos) y llaves de habitación individual (usuario propietario). Cada puerta tiene tres cerraduras independientes. Linux funciona igual: para cada archivo defines qué puede hacer su dueño, qué puede hacer su grupo, y qué puede hacer cualquier otro.",
          items: [
            { label: "Llave maestra", valor: "Usuario root", icono: "KeyRound" },
            { label: "Llave de piso", valor: "Grupo", icono: "Users" },
            { label: "Llave individual", valor: "Usuario propietario", icono: "User" },
          ],
        },
      ],
    },
    {
      titulo: "Anatomía de los permisos",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Anatomía de los permisos",
          texto:
            "Cuando ejecutas `ls -la`, cada línea empieza con algo como `-rwxr-xr--`. Toca cada parte para decodificarla.",
          partes: [
            {
              id: "tipo",
              label: "Tipo de archivo",
              color: "#FF5C5C",
              detalle:
                "El primer carácter indica qué es: `-` es un archivo regular, `d` es un directorio, `l` es un enlace simbólico, `c` es un dispositivo de caracteres. Este carácter es fundamental antes de asumir qué tienes enfrente.",
            },
            {
              id: "owner",
              label: "Permisos del dueño",
              color: "#4A9EFF",
              detalle:
                "Los siguientes tres caracteres (`rwx`) son los permisos del propietario del archivo: `r` para leer, `w` para escribir, `x` para ejecutar. Un `-` significa que ese permiso no está activo.",
            },
            {
              id: "group",
              label: "Permisos del grupo",
              color: "#FFB830",
              detalle:
                "Los tres caracteres del medio aplican a cualquier usuario que pertenezca al grupo asignado al archivo. Útil para dar acceso a un equipo sin abrir el archivo a todo el mundo.",
            },
            {
              id: "others",
              label: "Permisos de otros",
              color: "#00A896",
              detalle:
                "Los últimos tres caracteres aplican a cualquier usuario del sistema que no sea el dueño ni miembro del grupo. En servidores de producción, esta sección suele ser `---` por seguridad.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Root no es solo otro usuario con muchos permisos. Root puede hacer literalmente cualquier cosa: borrar archivos del sistema, leer correos privados, detener servicios críticos. Por eso los profesionales usan `sudo` para elevar privilegios solo cuando es necesario, en lugar de trabajar siempre como root. El menor privilegio posible es el principio de seguridad más básico.",
        },
      ],
    },
    {
      titulo: "Comandos clave",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Comandos clave para gestionar permisos",
          texto:
            "Con estos cuatro comandos controlas quién puede hacer qué en cualquier archivo o directorio.",
          pasos: [
            {
              titulo: "chmod — Cambiar permisos",
              descripcion:
                "`chmod 755 script.sh` da permisos de ejecución al dueño y lectura/ejecución al resto. También puedes usar notación simbólica: `chmod u+x script.sh` agrega ejecución solo al dueño.",
            },
            {
              titulo: "chown — Cambiar propietario",
              descripcion:
                "`chown usuario:grupo archivo.txt` cambia quién es el dueño del archivo y a qué grupo pertenece. Necesitas privilegios de root para cambiar el dueño de un archivo que no es tuyo.",
            },
            {
              titulo: "sudo — Ejecutar como root",
              descripcion:
                "`sudo comando` ejecuta ese comando con privilegios de superusuario. Linux registra cada uso de sudo en los logs. Es un mecanismo de poder con trazabilidad.",
            },
            {
              titulo: "id — ¿Quién soy?",
              descripcion:
                "`id` muestra tu usuario actual, tu UID numérico y los grupos a los que perteneces. Es el primer comando a ejecutar cuando algo falla por permisos.",
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
          texto: "Así se lee una cadena de permisos completa en Linux.",
          componente: "permissions-decoder",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Un archivo tiene permisos `rw-r--r--`. ¿Qué puede hacer un usuario que no es el dueño ni está en el grupo?",
          opciones: [
            { texto: "Leer y escribir el archivo.", correcta: false },
            { texto: "Solo leer el archivo.", correcta: true },
            { texto: "Ejecutar el archivo.", correcta: false },
            { texto: "No puede hacer nada con el archivo.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Los últimos tres caracteres (`r--`) son los permisos para 'otros': `r` permite leer, el primer `-` niega escritura y el segundo `-` niega ejecución. Solo pueden leer.",
          feedbackIncorrecto:
            "Lee los permisos en bloques de tres: dueño (`rw-`), grupo (`r--`), otros (`r--`). Para 'otros', solo el primer carácter es `r`, los demás son `-`. Eso significa solo lectura.",
        },
      ],
    },
  ],
};

export default capitulo;

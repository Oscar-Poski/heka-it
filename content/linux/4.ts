import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "linux",
  numero: 4,
  titulo: "Nivel 4 · Usuarios y permisos",
  pasos: [
    {
      titulo: "El problema",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "Quién puede hacer qué",
          texto:
            "En un servidor real conviven aplicaciones, administradores, desarrolladores y usuarios finales. Cada uno necesita acceso a cosas distintas y cero acceso al resto. Linux resuelve esto con un sistema que lleva décadas siendo el estándar: cada archivo tiene un dueño, un grupo y reglas claras sobre quién puede leer, escribir o ejecutar.",
        },
        {
          tipo: "analogia",
          eyebrow: "Llaves maestras, de piso y de habitación",
          texto:
            "Imagina un edificio de oficinas con tres niveles de acceso. Cada puerta tiene tres cerraduras independientes que se abren según qué tipo de llave tienes.",
          items: [
            { label: "Llave maestra", valor: "Usuario root", icono: "KeyRound" },
            { label: "Llave de habitación", valor: "Usuario propietario", icono: "User" },
          ],
        },
      ],
    },
    {
      titulo: "Anatomía de los permisos",
      secciones: [
        {
          tipo: "anatomia",
          eyebrow: "Cuatro piezas en `-rwxr-xr--`",
          texto:
            "Cuando ejecutas `ls -la`, cada línea empieza con algo como `-rwxr-xr--`. Toca cada parte para decodificarla.",
          partes: [
            {
              id: "tipo",
              label: "Tipo",
              color: "#FF5C5C",
              detalle:
                "Primer carácter: `-` archivo regular, `d` directorio, `l` enlace simbólico, `c` dispositivo de caracteres, `b` de bloques.",
            },
            {
              id: "owner",
              label: "Dueño",
              color: "#3A8DFF",
              detalle:
                "Tres caracteres siguientes: permisos del propietario. r=leer, w=escribir, x=ejecutar. Un guión significa permiso desactivado.",
            },
            {
              id: "group",
              label: "Grupo",
              color: "#FF9F43",
              detalle:
                "Siguientes tres: permisos para cualquier miembro del grupo asignado. Útil para dar acceso a un equipo sin abrir el archivo a todos.",
            },
            {
              id: "others",
              label: "Otros",
              color: "#00A896",
              detalle:
                "Últimos tres: permisos para cualquier otro usuario del sistema. En producción suelen ser `---` por seguridad.",
            },
          ],
        },
        {
          tipo: "visual",
          eyebrow: "Pruébalo",
          texto:
            "Cambia los bits o usa los presets. Mira cómo cambia la cadena de permisos y su equivalente octal para chmod.",
          componente: "permissions-decoder",
        },
        {
          tipo: "highlight",
          texto:
            "Root no es solo un usuario con muchos permisos: puede hacer literalmente cualquier cosa, incluido romper el sistema. Por eso los profesionales usan `sudo` para elevar privilegios solo cuando es necesario. Principio del menor privilegio: por defecto, lo mínimo.",
        },
      ],
    },
    {
      titulo: "Comandos clave",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Cuatro herramientas para gestionar permisos",
          texto:
            "Con estas controlas todo el modelo de seguridad de archivos en Linux.",
          items: [
            {
              titulo: "chmod",
              descripcion:
                "Cambia permisos. chmod 755 script.sh (notación octal) o chmod u+x script.sh (notación simbólica).",
              icono: "Settings",
            },
            {
              titulo: "chown",
              descripcion:
                "Cambia propietario y grupo. chown oscar:devs archivo.txt. Solo root puede cambiar dueños de archivos ajenos.",
              icono: "UserCog",
            },
            {
              titulo: "sudo",
              descripcion:
                "Ejecuta un comando como root. Cada uso se registra en logs (/var/log/auth.log). Trazable y reversible.",
              icono: "ShieldCheck",
            },
            {
              titulo: "id",
              descripcion:
                "Muestra tu usuario, UID y grupos. El primer comando cuando algo falla por permisos.",
              icono: "Fingerprint",
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
            "Un archivo tiene permisos `rw-r--r--`. ¿Qué puede hacer un usuario que no es el dueño ni está en el grupo?",
          opciones: [
            { texto: "Leer y escribir.", correcta: false },
            { texto: "Solo leer.", correcta: true },
            { texto: "Ejecutar.", correcta: false },
            { texto: "Nada.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Los últimos tres caracteres (`r--`) son los permisos para «otros»: r permite leer, los guiones niegan escritura y ejecución. Solo lectura.",
          feedbackIncorrecto:
            "Lee en bloques de tres: dueño (rw-), grupo (r--), otros (r--). Para «otros», solo r está activo: solo lectura.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "Quieres que un script sea ejecutable por todos. ¿Qué comando usas?",
          opciones: [
            { texto: "chmod 644 script.sh", correcta: false },
            { texto: "chmod +x script.sh (añade ejecución para todos)", correcta: true },
            { texto: "chown +x script.sh", correcta: false },
            { texto: "sudo script.sh", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. chmod +x añade el bit de ejecución a todos los bloques (dueño, grupo, otros). Equivalente a chmod 755 si los permisos previos eran rw-r--r--. chown cambia dueño, sudo eleva privilegios pero no cambia permisos.",
          feedbackIncorrecto:
            "Para cambiar permisos: chmod. +x significa «añadir bit de ejecución». chown es para cambiar dueño, sudo es para elevar privilegios al ejecutar. 644 significaría rw-r--r--, que NO es ejecutable.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Por qué se recomienda NO trabajar siempre como root?",
          opciones: [
            { texto: "Porque root no puede ejecutar la mayoría de comandos.", correcta: false },
            { texto: "Porque cualquier error o comando malicioso ejecutado como root puede romper el sistema entero sin pedir confirmación.", correcta: true },
            { texto: "Porque root no tiene acceso a la terminal.", correcta: false },
            { texto: "Porque root no puede instalar software.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Root puede hacer literalmente cualquier cosa: borrar /, leer secretos, detener servicios críticos. Un comando mal escrito o un script malicioso ejecutado como root puede destruir todo. Por eso se usa sudo solo cuando es necesario.",
          feedbackIncorrecto:
            "Root puede ejecutar todo y tiene acceso completo: ese es justo el problema. Cualquier error, comando mal escrito o script malicioso ejecutado como root hace daño total. Principio del menor privilegio: trabaja como usuario normal y eleva solo cuando hace falta.",
        },
      ],
    },
  ],
};

export default capitulo;

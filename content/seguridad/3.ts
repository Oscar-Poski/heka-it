import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "seguridad",
  numero: 3,
  titulo: "Nivel 3 · Cifrado",
  pasos: [
    {
      titulo: "Por qué cifrar",
      secciones: [
        {
          tipo: "texto",
          eyebrow: "El problema",
          texto:
            "Internet es una red abierta: cualquier mensaje pasa por decenas de routers, redes Wi-Fi e ISPs antes de llegar a destino. Sin cifrado, cualquier intermediario podría leer tus contraseñas, mensajes y datos bancarios. El cifrado convierte el mensaje en ruido ininteligible para quien no tenga la llave correcta.",
        },
        {
          tipo: "analogia",
          eyebrow: "Una caja con candado",
          texto:
            "Cifrar es meter tu mensaje en una caja con candado. Cualquiera puede ver la caja viajar, pero solo quien tiene la llave correcta puede abrirla y leer.",
          items: [
            { label: "Caja con candado", valor: "Mensaje cifrado", icono: "Lock" },
            { label: "La llave", valor: "Clave criptográfica", icono: "Key" },
          ],
        },
      ],
    },
    {
      titulo: "Dos tipos de cifrado",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Simétrico vs asimétrico",
          texto:
            "Los dos paradigmas. Cada uno resuelve un problema distinto.",
          columnas: [
            {
              titulo: "Simétrico",
              subtitulo: "Una sola llave",
              items: [
                "Misma llave cifra y descifra",
                "Ejemplos: AES, ChaCha20",
                "Rápido y eficiente (cifra GB/s)",
                "Problema: ¿cómo compartes la llave sin que la intercepten?",
                "Uso típico: cifrar datos en reposo (disco, BD)",
              ],
            },
            {
              titulo: "Asimétrico (clave pública)",
              subtitulo: "Dos llaves: pública + privada",
              destacada: true,
              items: [
                "Una llave cifra, la otra descifra",
                "Ejemplos: RSA, ECC, Curve25519",
                "Lento (1000x más que simétrico)",
                "Resuelve la distribución de llaves",
                "Uso típico: establecer conexión segura, firma digital",
              ],
            },
          ],
        },
        {
          tipo: "visual",
          eyebrow: "Pruébalo",
          texto:
            "Cambia entre simétrico y asimétrico. Mueve la llave del César y mira cómo cambia el cifrado. Compara con el modelo de llave pública/privada.",
          componente: "cifrado-demo",
        },
      ],
    },
    {
      titulo: "TLS: lo mejor de ambos",
      secciones: [
        {
          tipo: "pasos",
          eyebrow: "Cómo HTTPS combina los dos cifrados",
          texto:
            "TLS (lo que pone la «S» en HTTPS) usa asimétrico para acordar una llave secreta, luego cambia a simétrico para los datos. Eso te da seguridad y velocidad.",
          pasos: [
            {
              titulo: "1. Cliente Hello",
              descripcion:
                "Tu navegador se conecta al servidor y manda la lista de algoritmos de cifrado que soporta + un número aleatorio.",
            },
            {
              titulo: "2. Server Hello + certificado",
              descripcion:
                "El servidor elige un algoritmo, manda su certificado (llave pública + firma de una CA) y un número aleatorio. Tu navegador verifica que el certificado lo firmó una autoridad confiable.",
            },
            {
              titulo: "3. Intercambio de llave",
              descripcion:
                "Usando criptografía asimétrica (Diffie-Hellman moderno), ambos calculan una llave secreta común sin haberla intercambiado nunca por la red. Magia matemática.",
            },
            {
              titulo: "4. Cifrado simétrico AES",
              descripcion:
                "A partir de aquí, toda la comunicación se cifra con AES usando la llave secreta. Rápido, seguro y nadie en el camino puede leer nada.",
            },
          ],
        },
        {
          tipo: "highlight",
          texto:
            "Una autoridad certificadora (CA) es como un notario digital: firma certificados de servidores confirmando «sí, este servidor es realmente paypal.com». Tu navegador trae preinstaladas las firmas de las CAs reconocidas (Let's Encrypt, DigiCert, etc.). Si una CA es comprometida, todo el sistema se tambalea.",
        },
      ],
    },
    {
      titulo: "Hashing ≠ Cifrado",
      secciones: [
        {
          tipo: "comparacion",
          eyebrow: "Dos cosas que se confunden",
          texto:
            "Cifrado es reversible. Hashing NO. Confundirlos lleva a errores graves de diseño.",
          columnas: [
            {
              titulo: "Cifrado",
              subtitulo: "Dos vías: cifrar y descifrar",
              items: [
                "Mensaje → cifrado → mensaje original",
                "Con la llave correcta recuperas el original",
                "Para datos que necesitas leer luego: BD, mensajes, archivos",
                "AES, RSA, ChaCha20",
              ],
            },
            {
              titulo: "Hashing",
              subtitulo: "Una sola vía",
              destacada: true,
              items: [
                "Mensaje → hash (no se puede revertir)",
                "Mismo input → mismo hash siempre",
                "Para verificar integridad y guardar contraseñas",
                "SHA-256, bcrypt, argon2",
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
            "Quieres mandarle un archivo confidencial a un colega. Tienes su llave pública. ¿Qué llave usas para cifrar?",
          opciones: [
            { texto: "Tu llave privada.", correcta: false },
            { texto: "Tu llave pública.", correcta: false },
            { texto: "La llave pública de tu colega: solo su llave privada podrá descifrar.", correcta: true },
            { texto: "Tu contraseña.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. En cifrado asimétrico, cifras con la llave PÚBLICA del destinatario. Solo su llave PRIVADA puede descifrarlo. Es lo que permite enviar secretos sin haber compartido nada previamente.",
          feedbackIncorrecto:
            "Para enviar algo cifrado: usa la llave PÚBLICA del destinatario. Solo su llave PRIVADA descifra. Si usaras tu llave (cualquiera), tu colega no podría leerlo. Tu privada se usa para firmar (probar que tú lo enviaste).",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Por qué HTTPS usa cifrado asimétrico SOLO al inicio de la conexión y luego cambia a simétrico?",
          opciones: [
            { texto: "Porque el simétrico es más seguro.", correcta: false },
            { texto: "Porque el asimétrico resuelve la distribución de llaves pero es lentísimo; el simétrico es rápido pero necesita una llave previamente compartida. Combinarlos da lo mejor de ambos.", correcta: true },
            { texto: "Porque los servidores no soportan asimétrico.", correcta: false },
            { texto: "Por capricho histórico.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Asimétrico es lento (1000x más que simétrico) pero deja a dos extraños acordar una llave secreta. Simétrico es rápido pero necesita esa llave compartida. TLS usa asimétrico en el handshake para acordar la llave, luego cifra todo con simétrico (AES). Veloz + seguro.",
          feedbackIncorrecto:
            "Asimétrico permite establecer una llave sin haberla compartido antes (resuelve el problema clásico), pero es muy lento. Simétrico es muy rápido pero requiere llave compartida. HTTPS combina: usa asimétrico para acordar una llave secreta, luego cambia a simétrico (AES) para mover los datos.",
        },
      ],
    },
    {
      titulo: "Verifica",
      secciones: [
        {
          tipo: "quiz",
          pregunta:
            "¿Cuál es la diferencia clave entre cifrado y hashing?",
          opciones: [
            { texto: "Son sinónimos.", correcta: false },
            { texto: "Cifrado es reversible (con la llave correcta puedes recuperar el original); hashing es una vía (de hash NO se puede recuperar el original).", correcta: true },
            { texto: "Cifrado es para texto, hashing para números.", correcta: false },
            { texto: "Hashing es más rápido pero menos seguro.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Cifrado: mensaje → cifrado → mensaje original (reversible con llave). Hashing: mensaje → hash (NO se puede revertir). Por eso las contraseñas se guardan con hash (bcrypt), no cifradas: si te roban la BD, no recuperan los originales. Para emails o BD que necesitas leer, sí usas cifrado.",
          feedbackIncorrecto:
            "Cifrado es de dos vías (descifras con la llave). Hashing es de una sola: del hash no recuperas el original ni con cien millones de años. Por eso las contraseñas se hashean: ni el sitio puede verlas, solo verificar si lo que escribes produce el mismo hash.",
        },
      ],
    },
  ],
};

export default capitulo;

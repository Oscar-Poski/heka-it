import type { Capitulo } from "@/lib/types";

const capitulo: Capitulo = {
  slug: "llm",
  numero: 4,
  titulo: "Nivel 4 · Los parámetros que controlas",
  pasos: [
    {
      titulo: "Los tres botones",
      secciones: [
        {
          tipo: "grid",
          eyebrow: "Controles que cambian el resultado",
          texto:
            "Más allá del prompt, hay tres ajustes que cambian cómo responde el modelo.",
          items: [
            {
              titulo: "Temperature",
              descripcion:
                "Qué tan creativa es la respuesta. 0 = predecible y determinista. Alto = creativo y arriesgado.",
              icono: "Flame",
            },
            {
              titulo: "Max tokens",
              descripcion:
                "Límite máximo de longitud de la respuesta. Útil para controlar coste y para forzar respuestas concisas.",
              icono: "Ruler",
            },
            {
              titulo: "System prompt",
              descripcion:
                "Instrucción persistente que define el rol, el tono y las reglas. El usuario no lo ve, pero el modelo siempre lo respeta.",
              icono: "Settings",
            },
          ],
        },
      ],
    },
    {
      titulo: "Temperatura en acción",
      secciones: [
        {
          tipo: "visual",
          eyebrow: "Mueve el deslizador",
          texto:
            "Mismo prompt, distintas temperaturas. Fíjate cómo la respuesta pasa de segura y conservadora a creativa e impredecible.",
          componente: "temperature-slider",
        },
        {
          tipo: "highlight",
          texto:
            "Regla práctica: temperatura baja (0.0-0.3) para tareas factuales (clasificar, extraer datos, código). Media (0.5-0.8) para conversación general. Alta (1.0+) para escritura creativa, ideas, brainstorming.",
        },
      ],
    },
    {
      titulo: "System prompt vs user prompt",
      secciones: [
        {
          tipo: "chat",
          eyebrow: "Mismo user prompt, distinto rol",
          texto:
            "El system prompt enfoca todo el comportamiento del modelo. Compara estas dos respuestas: el user prompt es idéntico, pero el system prompt cambia.",
          mensajes: [
            {
              rol: "user",
              texto:
                "(System: «Eres un profesor universitario de física. Responde con rigor y precisión.»)\n\nUser: ¿Por qué el cielo es azul?",
            },
            {
              rol: "claude",
              texto:
                "El cielo se ve azul por la dispersión de Rayleigh: la luz solar interactúa con las moléculas de la atmósfera y las longitudes de onda más cortas (azul, ~470 nm) se dispersan con mayor intensidad que las largas (rojo, ~620 nm), proporcionalmente a 1/λ⁴.",
            },
            {
              rol: "user",
              texto:
                "(System: «Eres un cuentacuentos infantil. Responde como si hablaras con un niño de 5 años.»)\n\nUser: ¿Por qué el cielo es azul?",
            },
            {
              rol: "claude",
              texto:
                "¡Buena pregunta! Imagina que el sol manda muchos colores como si fueran pelotitas saltarinas. Cuando llegan al aire, las pelotitas azules son más juguetonas y rebotan por todos lados, así que las vemos en todo el cielo. Por eso el cielo se ve azul. ✨",
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
            "Necesitas que el modelo clasifique tickets de soporte en 4 categorías fijas, siempre igual. ¿Qué temperatura usas?",
          opciones: [
            { texto: "Alta (≥ 1.0) para que sea más inteligente.", correcta: false },
            { texto: "Baja (cerca de 0) para máxima consistencia.", correcta: true },
            { texto: "Media (0.7) porque es el valor por defecto.", correcta: false },
            { texto: "Da igual: la temperatura no afecta tareas de clasificación.", correcta: false },
          ],
          feedbackCorrecto:
            "Correcto. Para tareas factuales y de clasificación quieres consistencia: que el mismo input dé el mismo output. Temperatura cerca de 0 minimiza la aleatoriedad. La creatividad alta ahí solo introduce errores.",
          feedbackIncorrecto:
            "Para clasificar quieres consistencia, no creatividad. Temperatura cerca de 0 hace que el modelo elija siempre la palabra más probable y dé la misma respuesta al mismo input. Temperaturas altas introducen variabilidad innecesaria.",
        },
      ],
    },
  ],
};

export default capitulo;

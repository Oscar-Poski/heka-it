import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito estudiar una carrera en computación para aprender con Hekademos IT?",
    answer:
      "No. Hekademos IT está diseñado precisamente para personas que no vienen de una carrera técnica. La plataforma explica los fundamentos de la industria tecnológica desde cero, de manera clara y accesible, para que cualquier persona con curiosidad y disciplina pueda comenzar a aprender.",
  },
  {
    question: "¿Necesito saber programar antes de empezar?",
    answer:
      "No necesariamente. Muchos de los conceptos fundamentales de la industria —como Linux, redes, cloud computing o cómo funcionan los sistemas— pueden entenderse sin experiencia previa en programación. El objetivo es construir una base sólida que te permita entender cómo funciona el mundo del software.",
  },
  {
    question: "¿Por qué aprender en español?",
    answer:
      "Porque aprender conceptos complejos en tu segundo idioma puede generar una fricción mental innecesaria, especialmente cuando estás empezando. Cuando estudias en tu lengua materna puedes concentrarte completamente en entender las ideas y los sistemas, en lugar de gastar energía traduciendo conceptos constantemente.",
  },
  {
    question: "¿El contenido es gratuito?",
    answer:
      "Sí. La misión de Hekademos IT es que cualquier persona con acceso a internet y una computadora pueda aprender lo suficiente para comenzar en la industria tecnológica. Por eso el contenido está pensado para ser accesible y abierto para quienes quieran empezar.",
  },
  {
    question: "¿Este contenido reemplaza una carrera universitaria?",
    answer:
      "No. Una carrera universitaria puede ofrecer una formación profunda en teoría y fundamentos académicos. Hekademos IT tiene un objetivo diferente: explicar de manera clara y práctica los conocimientos que son más útiles para entender la industria y dar los primeros pasos en ella.",
  },
  {
    question: "¿Para quién es este contenido?",
    answer:
      "Para personas que quieren descubrir si la industria tecnológica es para ellos, personas que quieren conseguir su primer trabajo y personas que quieren darel un giro a su carrera. Una de las ideas detrás de Hekademos IT es permitir que cualquier persona pueda explorar los temas fundamentales de la industria rápidamente. De esta forma puedes tener un primer contacto con los conceptos importantes y decidir si este camino profesional realmente te interesa.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Preguntas y {" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient">
              respuestas
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Lo que necesitas saber sobre nuestra plataforma
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

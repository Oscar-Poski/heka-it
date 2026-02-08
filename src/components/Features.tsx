import { motion } from "framer-motion";
import {
  Brain,
  Zap,
  Shield,
  Code,
  Globe,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Lecciones Digeribles",
    description:
      "Dividimos el material en partes digeribles para facilitar la comprensión del contenido.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Pequeños Pasos",
    description:
      "Esto permite que cualquiera pueda empezar con una sola lección y avanzar paso a paso.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Habilidades Adquiridas",
    description:
      "El avance reafirma los conocimientos adquiridos a través de los módulos y los convierte en habilidades adquiridas.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Code,
    title: "Camino",
    description:
      "El bloque de aprendizaje más grande es un Camino.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Módulo",
    description:
      "El Camino se divide en varios módulos, cada uno de los cuales cubre un tema específico e independiente.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Sparkles,
    title: "Lección",
    description:
      "Los módilos de dividen en lecciones digeribles y fáciles de aprender.",
    gradient: "from-pink-500 to-rose-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Cualquier persona puede{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Aprender
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Las grandes cosas no se logran por impulso, sino mediante una serie de pequeños actos de disciplina.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

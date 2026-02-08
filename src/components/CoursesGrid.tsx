import { motion } from "framer-motion";
import { Code2, Database, Bot, BarChart3, ShieldCheck, Rocket } from "lucide-react";

const courses = [
  {
    icon: Code2,
    title: "Linux Básico",
    description:
      "Aprende los fundamentos de Linux y construye tus primeros scripts paso a paso.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "SQL para Analisis",
    description:
      "Domina consultas SQL para explorar, limpiar y analizar datos reales.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Bot,
    title: "IA Generativa",
    description:
      "Crea aplicaciones con modelos de IA y flujos de trabajo asistidos por prompts.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Visualizacion de Datos",
    description:
      "Disena dashboards claros e interactivos para comunicar hallazgos con impacto.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Ciberseguridad Basica",
    description:
      "Entiende amenazas comunes y aplica buenas practicas de seguridad digital.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Desarrollo Web Moderno",
    description:
      "Construye sitios y apps con herramientas actuales y enfoque en rendimiento.",
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

export function CoursesGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {courses.map((course, index) => {
        const Icon = course.icon;
        return (
          <motion.article
            key={index}
            variants={item}
            className="group relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br p-3 ${course.gradient}`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">{course.title}</h2>
            <p className="text-muted-foreground">{course.description}</p>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

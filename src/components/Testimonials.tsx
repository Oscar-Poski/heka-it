import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Luis Martínez",
    role: "Estudiante autodidacta",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luis",
    content:
      "Siempre pensé que la tecnología era solo para ingenieros. Aquí entendí por primera vez cómo funcionan realmente Linux y el cloud. Todo está explicado de forma clara y sin asumir que ya sabes del tema.",
    rating: 5,
  },
  {
    name: "Ana Torres",
    role: "En transición a carrera tech",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    content:
      "Lo que más me gusta es que el contenido está en español y va directo a lo importante. Me ayudó a entender conceptos que antes me parecían imposibles cuando intentaba aprender con cursos en inglés.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Junior QA Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    content:
      "Gracias a esta plataforma pude entender los fundamentos de cómo funcionan los sistemas y el mundo del software. Me dio la confianza para aplicar a mi primer trabajo en tecnología.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Los {" "} 
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient">
              estudiantes
            </span>
            {" "} nos aman!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            ¿Qué piensan ellos de Hekademos?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card p-6 rounded-2xl border bg-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

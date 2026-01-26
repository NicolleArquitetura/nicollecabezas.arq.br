import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    id: 1,
    quote:
      "Nicolle transformou nossa casa em um lar. Desde o primeiro encontro, ela entendeu exatamente o que precisávamos e nos guiou por todo o processo com clareza e profissionalismo.",
    author: "Marina & Rafael Oliveira",
    project: "Residência Serra Verde",
  },
  {
    id: 2,
    quote:
      "O que mais me impressionou foi a transparência. Nunca tivemos surpresas com orçamento ou prazos. Nicolle é uma parceira de verdade, não apenas uma prestadora de serviço.",
    author: "Carlos Mendes",
    project: "Casa Praia do Forte",
  },
  {
    id: 3,
    quote:
      "A atenção aos detalhes é extraordinária. Cada espaço foi pensado para funcionar perfeitamente para nossa família. Superou todas as expectativas.",
    author: "Fernanda Costa",
    project: "Apartamento Ipanema",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-widest-xl uppercase text-accent font-body font-medium mb-4"
          >
            Depoimentos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight"
          >
            O que nossos clientes dizem
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-primary-foreground/5 p-8 lg:p-10"
            >
              {/* Quote Icon */}
              <Quote
                size={32}
                className="text-accent mb-6 opacity-50"
              />

              {/* Quote Text */}
              <blockquote className="font-body text-lg leading-relaxed mb-8 opacity-90">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <footer>
                <cite className="not-italic">
                  <span className="block font-display text-lg font-medium">
                    {testimonial.author}
                  </span>
                  <span className="text-sm opacity-60 font-body">
                    {testimonial.project}
                  </span>
                </cite>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

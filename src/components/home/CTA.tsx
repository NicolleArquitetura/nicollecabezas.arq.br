import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-xs tracking-widest-xl uppercase text-accent font-body font-medium mb-6">
            Vamos Conversar
          </span>

          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-medium text-foreground leading-tight mb-6">
            Pronto para transformar
            <br />
            seu espaço?
          </h2>

          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            O primeiro passo é uma conversa. Sem compromisso, podemos discutir
            suas ideias, esclarecer dúvidas sobre orçamento e processo, e
            descobrir se somos a parceria ideal para seu projeto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contato"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 font-body text-sm font-medium tracking-wide transition-all duration-300"
            >
              Agende uma Consulta Gratuita
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/como-trabalhamos"
              className="inline-flex items-center gap-2 text-foreground font-body font-medium group"
            >
              Entenda Nosso Processo
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

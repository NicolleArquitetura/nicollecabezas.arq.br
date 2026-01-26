import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import architectPortrait from "@/assets/architect-portrait.jpg";

export const AboutPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={architectPortrait}
                alt="Nicolle Cabezas - Arquiteta"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/30 -z-10 hidden lg:block" />
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              label="Sobre"
              title="Arquitetura com propósito e sensibilidade"
              description="Acredito que cada espaço tem uma história para contar. Meu papel é traduzir sonhos e necessidades em ambientes que funcionam, inspiram e resistem ao tempo."
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 space-y-6"
            >
              <p className="text-muted-foreground font-body leading-relaxed">
                Com mais de 10 anos de experiência em projetos residenciais e
                comerciais, construí minha prática sobre pilares de
                transparência, colaboração e excelência técnica. Cada cliente é
                um parceiro, cada projeto uma oportunidade de criar algo
                verdadeiramente único.
              </p>

              <div className="grid grid-cols-3 gap-6 py-8 border-y border-border">
                <div>
                  <span className="block font-display text-3xl lg:text-4xl font-medium text-foreground">
                    10+
                  </span>
                  <span className="text-sm text-muted-foreground font-body">
                    Anos de Experiência
                  </span>
                </div>
                <div>
                  <span className="block font-display text-3xl lg:text-4xl font-medium text-foreground">
                    85+
                  </span>
                  <span className="text-sm text-muted-foreground font-body">
                    Projetos Concluídos
                  </span>
                </div>
                <div>
                  <span className="block font-display text-3xl lg:text-4xl font-medium text-foreground">
                    100%
                  </span>
                  <span className="text-sm text-muted-foreground font-body">
                    Clientes Satisfeitos
                  </span>
                </div>
              </div>

              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-foreground font-body font-medium group"
              >
                Conheça Minha História
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

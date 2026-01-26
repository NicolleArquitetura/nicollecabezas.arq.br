import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Compass, Ruler, Hammer } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulta Inicial",
    description:
      "Conversamos sobre seus sonhos, necessidades e orçamento. Uma primeira conversa sem compromisso para entender sua visão.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Conceituação",
    description:
      "Desenvolvemos conceitos e apresentamos estudos preliminares que capturam a essência do que você imaginou.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Desenvolvimento",
    description:
      "Detalhamos o projeto com plantas, cortes e especificações técnicas, sempre com sua aprovação em cada etapa.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Acompanhamento",
    description:
      "Supervisionamos a execução para garantir que cada detalhe seja implementado conforme planejado.",
  },
];

export const Process = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeader
            label="Processo"
            title="Transparência em cada etapa"
            description="Acreditamos que um processo claro é fundamental para um projeto bem-sucedido. Você sempre saberá onde estamos e o que vem a seguir."
          />
          <Link
            to="/como-trabalhamos"
            className="inline-flex items-center gap-2 text-foreground font-body font-medium group shrink-0"
          >
            Saiba Mais
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
                )}

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                  <step.icon
                    size={24}
                    className="text-foreground group-hover:text-accent transition-colors duration-300"
                  />
                </div>

                {/* Number */}
                <span className="absolute top-0 right-0 font-display text-6xl font-medium text-muted/50">
                  {step.number}
                </span>

                {/* Content */}
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

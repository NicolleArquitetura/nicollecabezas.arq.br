import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/home/CTA";
import {
  MessageSquare,
  Compass,
  PenTool,
  FileText,
  Hammer,
  Key,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

const phases = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulta Inicial",
    duration: "1-2 horas",
    description:
      "Uma conversa sem compromisso para conhecer você, entender suas necessidades e apresentar como trabalhamos. É o momento de tirar todas as dúvidas sobre orçamento, prazos e processo.",
    deliverables: [
      "Análise preliminar de viabilidade",
      "Estimativa inicial de investimento",
      "Cronograma macro do projeto",
    ],
  },
  {
    number: "02",
    icon: Compass,
    title: "Estudo Preliminar",
    duration: "2-4 semanas",
    description:
      "Desenvolvemos conceitos e estudos volumétricos que traduzem sua visão em propostas espaciais. Apresentamos opções e refinamos juntos até encontrar a direção ideal.",
    deliverables: [
      "Estudos de layout e volumetria",
      "Moodboards de materiais e referências",
      "Estimativa detalhada de custos",
    ],
  },
  {
    number: "03",
    icon: PenTool,
    title: "Anteprojeto",
    duration: "3-6 semanas",
    description:
      "Aprofundamos o conceito aprovado com plantas, cortes e elevações em escala. Definimos materiais, acabamentos e especificações técnicas iniciais.",
    deliverables: [
      "Plantas baixas humanizadas",
      "Cortes e elevações",
      "Especificação preliminar de materiais",
    ],
  },
  {
    number: "04",
    icon: FileText,
    title: "Projeto Executivo",
    duration: "4-8 semanas",
    description:
      "Produzimos toda a documentação técnica necessária para execução: plantas detalhadas, projetos complementares e caderno de especificações.",
    deliverables: [
      "Plantas técnicas detalhadas",
      "Projetos complementares coordenados",
      "Caderno de especificações e quantitativos",
    ],
  },
  {
    number: "05",
    icon: Hammer,
    title: "Acompanhamento de Obra",
    duration: "Variável",
    description:
      "Supervisionamos a execução do projeto com visitas regulares, garantindo que cada detalhe seja implementado conforme especificado.",
    deliverables: [
      "Visitas semanais à obra",
      "Relatórios de acompanhamento",
      "Resolução de interferências",
    ],
  },
  {
    number: "06",
    icon: Key,
    title: "Entrega",
    duration: "1 semana",
    description:
      "Realizamos a vistoria final, verificando todos os itens do projeto. Entregamos seu espaço pronto para ser vivido.",
    deliverables: [
      "Vistoria final de qualidade",
      "Manual de uso e manutenção",
      "Registro fotográfico profissional",
    ],
  },
];

const pricing = [
  {
    title: "Taxa Fixa",
    description:
      "Valor fechado para todo o projeto, definido após análise inicial. Ideal para quem busca previsibilidade total de custos.",
    ideal: "Projetos residenciais e comerciais de escopo definido",
  },
  {
    title: "Percentual da Obra",
    description:
      "Honorários calculados como percentual do custo total da construção. Alinha nosso sucesso ao resultado final do projeto.",
    ideal: "Obras de maior porte e projetos integrados",
  },
  {
    title: "Por Etapa",
    description:
      "Pagamento conforme conclusão de cada fase do projeto. Flexibilidade para adaptar o processo às suas necessidades.",
    ideal: "Clientes que preferem aprovar etapa por etapa",
  },
];

const faqs = [
  {
    question: "Qual o investimento médio para um projeto residencial?",
    answer:
      "Os honorários variam conforme escopo e complexidade. Para projetos residenciais, trabalhamos com valores a partir de R$ 150/m². Oferecemos uma consulta inicial gratuita onde apresentamos uma estimativa personalizada para seu projeto.",
  },
  {
    question: "Quanto tempo leva um projeto completo?",
    answer:
      "Um projeto residencial típico leva de 3 a 6 meses, dependendo do tamanho e complexidade. A construção é uma etapa separada, que acompanhamos mas depende da construtora e cronograma da obra.",
  },
  {
    question: "Vocês trabalham com projetos de interiores?",
    answer:
      "Sim! Oferecemos tanto projetos arquitetônicos completos quanto projetos focados em interiores e reformas. O processo é similar, adaptado à escala e necessidades específicas.",
  },
  {
    question: "Como funciona a comunicação durante o projeto?",
    answer:
      "Mantemos comunicação constante através de reuniões semanais (presenciais ou online), grupo de WhatsApp para questões rápidas, e acesso a uma pasta compartilhada com todo o material do projeto atualizado em tempo real.",
  },
  {
    question: "O que está incluído nos honorários?",
    answer:
      "Nossos honorários cobrem todo o desenvolvimento do projeto arquitetônico e de interiores. Projetos complementares (estrutural, elétrica, hidráulica) são orçados separadamente, mas coordenamos todos os profissionais envolvidos.",
  },
];

const ComoTrabalhamos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-xs tracking-widest-xl uppercase text-accent font-body font-medium mb-6"
            >
              Nosso Processo
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground leading-tight mb-6"
            >
              Transparência em
              <br />
              <span className="text-accent">cada etapa</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground font-body text-lg leading-relaxed"
            >
              Acreditamos que você deve ter total clareza sobre o processo,
              custos e prazos do seu projeto. Aqui, explicamos exatamente como
              trabalhamos — sem surpresas, sem jargões, sem letras miúdas.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            label="Etapas"
            title="A jornada do seu projeto"
            description="Do primeiro encontro à entrega das chaves, cada fase tem um propósito claro e entregas definidas."
            className="mb-16"
          />

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-background p-8 lg:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left */}
                  <div className="lg:col-span-4 flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <phase.icon size={24} className="text-accent" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-body">
                        Fase {phase.number}
                      </span>
                      <h3 className="font-display text-2xl font-medium text-foreground">
                        {phase.title}
                      </h3>
                      <span className="text-sm text-accent font-body font-medium">
                        {phase.duration}
                      </span>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-8">
                    <p className="text-muted-foreground font-body leading-relaxed mb-6">
                      {phase.description}
                    </p>
                    <div>
                      <span className="text-xs text-foreground font-body font-medium uppercase tracking-wide mb-3 block">
                        Entregas desta fase:
                      </span>
                      <ul className="space-y-2">
                        {phase.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-sm text-muted-foreground font-body"
                          >
                            <CheckCircle
                              size={16}
                              className="text-accent flex-shrink-0"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            label="Investimento"
            title="Modelos de precificação"
            description="Oferecemos flexibilidade para se adaptar às suas necessidades. Todas as opções incluem total transparência sobre o que está incluso."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary p-8 lg:p-10"
              >
                <h3 className="font-display text-2xl font-medium text-foreground mb-4">
                  {model.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  {model.description}
                </p>
                <div className="pt-6 border-t border-border">
                  <span className="text-xs text-accent font-body font-medium uppercase tracking-wide">
                    Ideal para:
                  </span>
                  <p className="text-sm text-foreground font-body mt-1">
                    {model.ideal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs tracking-widest-xl uppercase text-accent font-body font-medium mb-4"
            >
              Para Parceiros
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl lg:text-4xl font-medium mb-6"
            >
              Profissionais AEC
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg opacity-80 font-body leading-relaxed mb-12"
            >
              Trabalhamos com construtoras, incorporadoras e escritórios de
              engenharia que buscam parceiros confiáveis para projetos de
              arquitetura.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {["Revit/BIM", "AutoCAD", "SketchUp", "Bluebeam"].map((tool) => (
                <div
                  key={tool}
                  className="bg-primary-foreground/10 py-4 px-6 font-body text-sm"
                >
                  {tool}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            label="FAQ"
            title="Perguntas frequentes"
            description="Respostas diretas para as dúvidas mais comuns sobre nosso processo e serviços."
            align="center"
            className="mb-16"
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-background group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-display text-lg text-foreground pr-4">
                    {faq.question}
                  </span>
                  <HelpCircle
                    size={20}
                    className="text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default ComoTrabalhamos;

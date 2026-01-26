import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/home/CTA";
import { Award, Heart, Lightbulb, Users } from "lucide-react";
import architectPortrait from "@/assets/architect-portrait.jpg";

const values = [
  {
    icon: Heart,
    title: "Empatia",
    description:
      "Cada projeto começa com escuta ativa. Entender suas necessidades, medos e sonhos é o primeiro passo para criar algo verdadeiramente seu.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Busco constantemente soluções criativas que equilibram estética, funcionalidade e sustentabilidade.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description:
      "Você é parte integral do processo criativo. Suas ideias e feedback moldam cada decisão de design.",
  },
  {
    icon: Award,
    title: "Excelência",
    description:
      "Do primeiro esboço ao último acabamento, cada detalhe recebe atenção minuciosa para garantir resultados excepcionais.",
  },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-xs tracking-widest-xl uppercase text-accent font-body font-medium mb-6">
                Sobre Mim
              </span>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground leading-tight mb-6">
                Arquitetura é
                <br />
                <span className="text-accent">conexão humana</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Olá, sou Nicolle Cabezas. Há mais de uma década, dedico minha
                carreira a criar espaços que vão além da estética — espaços que
                funcionam, acolhem e contam histórias.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={architectPortrait}
                  alt="Nicolle Cabezas - Arquiteta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent/30 -z-10 hidden lg:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              label="Minha Jornada"
              title="O porquê por trás da arquitetura"
              align="center"
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12 space-y-6 text-muted-foreground font-body text-lg leading-relaxed"
            >
              <p>
                Cresci em uma casa onde cada cômodo tinha uma história. Minha avó
                cozinhava receitas de família em uma cozinha pequena mas
                acolhedora, e foi ali que entendi que espaços não são apenas
                paredes — são cenários de momentos que importam.
              </p>
              <p>
                Formei-me em Arquitetura com uma convicção: bons projetos nascem
                da escuta. Antes de desenhar uma linha, preciso entender quem
                você é, como você vive, o que você sonha.
              </p>
              <p>
                Ao longo de mais de 85 projetos, descobri que meus clientes não
                querem apenas um espaço bonito — eles querem um parceiro que
                entenda suas ansiedades sobre orçamento, prazos e decisões
                complexas. Querem transparência, comunicação clara e a segurança
                de saber que cada centavo investido está gerando valor real.
              </p>
              <p>
                É por isso que construí minha prática sobre pilares de
                transparência radical, processos claros e comunicação constante.
                Acredito que você deve ter total visibilidade sobre seu projeto,
                do primeiro esboço até a chave na mão.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            label="Valores"
            title="O que guia meu trabalho"
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                  <value.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-xs tracking-widest-xl uppercase text-accent font-body font-medium mb-4">
                Formação & Reconhecimento
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-medium">
                Experiência que inspira confiança
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-primary-foreground/5"
              >
                <span className="block font-display text-4xl font-medium text-accent mb-2">
                  USP
                </span>
                <span className="text-sm opacity-70 font-body">
                  Graduação em Arquitetura e Urbanismo
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 bg-primary-foreground/5"
              >
                <span className="block font-display text-4xl font-medium text-accent mb-2">
                  CAU
                </span>
                <span className="text-sm opacity-70 font-body">
                  Registro Profissional Ativo
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 bg-primary-foreground/5"
              >
                <span className="block font-display text-4xl font-medium text-accent mb-2">
                  LEED
                </span>
                <span className="text-sm opacity-70 font-body">
                  Certificação em Design Sustentável
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default Sobre;

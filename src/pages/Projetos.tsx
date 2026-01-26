import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const categories = ["Todos", "Residencial", "Interiores", "Comercial"];

const projects = [
  {
    id: 1,
    title: "Residência Serra Verde",
    category: "Residencial",
    location: "São Paulo, SP",
    year: "2024",
    area: "450m²",
    description:
      "Uma casa que dialoga com a natureza, onde espaços internos e externos se fundem em uma experiência de vida integrada.",
    image: project1,
  },
  {
    id: 2,
    title: "Apartamento Ipanema",
    category: "Interiores",
    location: "Rio de Janeiro, RJ",
    year: "2023",
    area: "180m²",
    description:
      "Reforma completa que transformou um apartamento tradicional em um espaço contemporâneo, luminoso e funcional.",
    image: project2,
  },
  {
    id: 3,
    title: "Casa Praia do Forte",
    category: "Residencial",
    location: "Bahia",
    year: "2023",
    area: "520m²",
    description:
      "Residência de praia que celebra a conexão com o mar através de amplas aberturas e materiais naturais.",
    image: project3,
  },
  {
    id: 4,
    title: "Refúgio Montanha",
    category: "Residencial",
    location: "Campos do Jordão, SP",
    year: "2024",
    area: "380m²",
    description:
      "Um refúgio acolhedor nas montanhas, onde a madeira e a pedra criam uma atmosfera de calor e conforto.",
    image: project4,
  },
  {
    id: 5,
    title: "Studio Jardins",
    category: "Interiores",
    location: "São Paulo, SP",
    year: "2023",
    area: "65m²",
    description:
      "Transformação de um pequeno studio em um espaço multifuncional com soluções criativas de armazenamento.",
    image: project2,
  },
  {
    id: 6,
    title: "Escritório Criativo",
    category: "Comercial",
    location: "São Paulo, SP",
    year: "2024",
    area: "320m²",
    description:
      "Espaço de trabalho que promove colaboração e bem-estar, com áreas flexíveis e design biofílico.",
    image: project1,
  },
];

const Projetos = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeader
            label="Portfólio"
            title="Projetos que contam histórias"
            description="Cada projeto é uma narrativa única de colaboração, desafios superados e sonhos realizados. Explore nosso trabalho e descubra como transformamos visões em espaços."
          />
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-body font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <Link to={`/projetos/${project.id}`}>
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500" />
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <ArrowUpRight size={20} className="text-accent-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs tracking-widest uppercase text-accent font-body font-medium">
                        {project.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="text-xs text-muted-foreground font-body">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body mb-3">
                      {project.location} · {project.area}
                    </p>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projetos;

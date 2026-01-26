import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    id: 1,
    title: "Residência Serra Verde",
    category: "Residencial",
    location: "São Paulo, SP",
    image: project1,
    size: "large",
  },
  {
    id: 2,
    title: "Apartamento Ipanema",
    category: "Interiores",
    location: "Rio de Janeiro, RJ",
    image: project2,
    size: "small",
  },
  {
    id: 3,
    title: "Casa Praia do Forte",
    category: "Residencial",
    location: "Bahia",
    image: project3,
    size: "small",
  },
  {
    id: 4,
    title: "Refúgio Montanha",
    category: "Residencial",
    location: "Campos do Jordão, SP",
    image: project4,
    size: "large",
  },
];

export const ProjectsPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeader
            label="Portfólio"
            title="Projetos que contam histórias"
            description="Cada projeto é uma narrativa única de colaboração, desafios superados e sonhos realizados."
          />
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-foreground font-body font-medium group shrink-0"
          >
            Ver Todos os Projetos
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden ${
                project.size === "large" ? "lg:row-span-2" : ""
              }`}
            >
              <Link to={`/projetos/${project.id}`} className="block">
                <div
                  className={`relative overflow-hidden ${
                    project.size === "large"
                      ? "aspect-[4/5]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                    {/* Always visible info */}
                    <div className="transform translate-y-0 lg:translate-y-8 lg:group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block text-xs tracking-widest uppercase text-accent font-body font-medium mb-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                        {project.category}
                      </span>
                      <h3 className="font-display text-xl lg:text-2xl text-primary-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-primary-foreground/70 text-sm font-body opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                        {project.location}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-6 right-6 lg:top-8 lg:right-8 w-12 h-12 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight size={20} className="text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

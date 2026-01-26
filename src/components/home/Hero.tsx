import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end lg:items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="Arquitetura moderna com design minimalista"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/10 lg:bg-gradient-to-r lg:from-foreground/80 lg:via-foreground/40 lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pb-20 lg:pb-0 pt-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-block text-xs tracking-widest-xl uppercase text-accent font-body font-medium mb-6 lg:mb-8">
              Arquitetura & Design de Interiores
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium text-primary-foreground leading-tight mb-6"
          >
            Criando espaços que
            <br />
            <span className="text-accent">transformam vidas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-primary-foreground/80 font-body text-lg lg:text-xl leading-relaxed mb-10 max-w-lg"
          >
            Cada projeto é uma jornada única de descoberta e colaboração, onde
            sua visão se transforma em espaços que inspiram e acolhem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/projetos"
              className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 font-body text-sm font-medium tracking-wide transition-all duration-300"
            >
              Ver Projetos
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-3 bg-transparent border border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground px-8 py-4 font-body text-sm font-medium tracking-wide transition-all duration-300"
            >
              Agende uma Consulta
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-primary-foreground/50 text-xs tracking-widest uppercase font-body">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-primary-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

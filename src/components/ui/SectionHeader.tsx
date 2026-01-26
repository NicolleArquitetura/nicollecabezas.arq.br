import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {label && (
        <span className="inline-block text-xs tracking-widest-xl uppercase text-accent font-body font-medium mb-4">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-medium text-foreground leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <div className="text-muted-foreground font-body leading-relaxed text-base lg:text-lg">
          {description}
        </div>
      )}
    </motion.div>
  );
};

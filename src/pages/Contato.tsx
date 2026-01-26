import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Send, MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react";

const Contato = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Content */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block text-xs tracking-widest-xl uppercase text-accent font-body font-medium mb-6"
              >
                Contato
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground leading-tight mb-6"
              >
                Vamos conversar sobre
                <br />
                <span className="text-accent">seu projeto</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground font-body text-lg leading-relaxed mb-12"
              >
                O primeiro passo é uma conversa. Sem compromisso, podemos
                discutir suas ideias, esclarecer dúvidas e descobrir se somos a
                parceria ideal para seu projeto.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-foreground mb-1">
                      Endereço
                    </h3>
                    <p className="text-muted-foreground font-body text-sm">
                      São Paulo, SP
                      <br />
                      Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-foreground mb-1">
                      E-mail
                    </h3>
                    <a
                      href="mailto:contato@nicollecabezas.com"
                      className="text-muted-foreground font-body text-sm hover:text-accent transition-colors"
                    >
                      contato@nicollecabezas.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-foreground mb-1">
                      Telefone
                    </h3>
                    <a
                      href="tel:+5511999999999"
                      className="text-muted-foreground font-body text-sm hover:text-accent transition-colors"
                    >
                      +55 (11) 99999-9999
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-border"
              >
                <span className="text-sm text-muted-foreground font-body block mb-4">
                  Siga nas redes
                </span>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-secondary p-8 lg:p-12"
            >
              <h2 className="font-display text-2xl font-medium text-foreground mb-2">
                Agende uma Consulta
              </h2>
              <p className="text-muted-foreground font-body text-sm mb-8">
                Preencha o formulário abaixo e entraremos em contato em até 24
                horas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-body font-medium text-foreground mb-2"
                  >
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-body font-medium text-foreground mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-body font-medium text-foreground mb-2"
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-body font-medium text-foreground mb-2"
                  >
                    Tipo de projeto
                  </label>
                  <select
                    id="projectType"
                    value={formState.projectType}
                    onChange={(e) =>
                      setFormState({ ...formState, projectType: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="residencial">Residencial - Casa</option>
                    <option value="apartamento">
                      Residencial - Apartamento
                    </option>
                    <option value="interiores">Design de Interiores</option>
                    <option value="reforma">Reforma</option>
                    <option value="comercial">Comercial</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-body font-medium text-foreground mb-2"
                  >
                    Conte-nos sobre seu projeto *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                    placeholder="Descreva brevemente seu projeto, localização, prazo desejado..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 font-body text-sm font-medium tracking-wide transition-all duration-300"
                >
                  Enviar Mensagem
                  <Send size={18} />
                </button>

                <p className="text-xs text-muted-foreground font-body text-center">
                  Ao enviar, você concorda com nossa política de privacidade.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;

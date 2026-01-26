import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/como-trabalhamos", label: "Como Trabalhamos" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-display text-2xl font-semibold tracking-tight">
                Nicolle Cabezas
              </span>
              <span className="text-xs tracking-widest-xl uppercase opacity-70 font-body">
                Arquitetura
              </span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed max-w-md mb-8 font-body">
              Transformando visões em espaços que inspiram. Cada projeto é uma
              jornada única de descoberta, colaboração e excelência arquitetônica.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-colors hover:bg-primary-foreground/20"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="opacity-70 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-70 font-body">
                  São Paulo, SP
                  <br />
                  Brasil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="opacity-70 flex-shrink-0" />
                <a
                  href="mailto:contato@nicollecabezas.com"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body"
                >
                  contato@nicollecabezas.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="opacity-70 flex-shrink-0" />
                <a
                  href="tel:+5511999999999"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body"
                >
                  +55 (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-xs opacity-50 font-body">
              © {new Date().getFullYear()} Nicolle Cabezas Arquitetura. Todos os
              direitos reservados.
            </p>
            <p className="text-xs opacity-50 font-body">
              Desenvolvido com excelência e atenção aos detalhes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

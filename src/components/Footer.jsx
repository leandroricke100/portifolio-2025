
import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Mail size={20} />, href: 'mailto:contato@leandrocodelab.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              LeandroCodeLab
            </h3>
            <p className="text-white/70 mb-4">
              Transformando ideias em soluções digitais que geram resultados reais.
            </p>
            <p className="text-white/70">
              <Mail className="inline w-4 h-4 mr-2" />
              contato@leandrocodelab.com
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70">
            © {currentYear} LeandroCodeLab. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  
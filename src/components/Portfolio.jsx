
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { toast } = useToast();

  const projects = [
    {
      title: 'FoodSaaS',
      description: 'Plataforma completa de delivery que conecta restaurantes e clientes',
      tags: ['React', 'Node.js', 'IA'],
      gradient: 'from-blue-600 to-blue-800',
      link: 'https://foodsaas.vercel.app/'
    },
    {
      title: 'AgroMix',
      description: 'SaaS de formulação de ração para bovinos com relatórios em tempo real',
      tags: ['React', 'Dashboard', 'Analytics', 'SaaS'],
      gradient: 'from-green-600 to-emerald-800'
    },
    {
      title: 'DocIA',
      description: 'Ferramenta de leitura e análise de PDFs oficiais com IA',
      tags: ['IA', 'Machine Learning', 'Python', 'React'],
      gradient: 'from-purple-600 to-indigo-800'
    }
  ];

  const handleViewAll = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "Em breve você poderá ver todos os projetos detalhadamente!",
      duration: 3000,
    });
  };

  const actionClasses = "flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all";

  return (
    <section id="projetos" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Alguns dos meus projetos
          </h2>
          <div className="w-20 h-1 accent-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-200"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <h3 className="text-3xl font-bold text-white relative z-10">{project.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={actionClasses}
                  >
                    Ver detalhes
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <button
                    onClick={handleViewAll}
                    className={actionClasses}
                  >
                    Ver detalhes
                    <ExternalLink size={16} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            onClick={handleViewAll}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todos os projetos
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
  

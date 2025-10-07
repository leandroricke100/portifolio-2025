
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Globe, Settings, Zap, Smartphone, Brain, Database } from 'lucide-react';

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Criação de sites institucionais modernos',
      description: 'Sites responsivos e otimizados para conversão'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Sistemas e painéis administrativos sob medida',
      description: 'Soluções personalizadas para gestão eficiente'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Integrações com APIs e automação de tarefas',
      description: 'Conecte seus sistemas e automatize processos'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Aplicações responsivas e rápidas',
      description: 'Performance otimizada em todos os dispositivos'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Projetos com IA e extração de dados inteligentes',
      description: 'Soluções inteligentes com machine learning'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Desenvolvimento de APIs e Backend',
      description: 'Arquitetura robusta e escalável'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Soluções que impulsionam negócios
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Desenvolvo projetos personalizados para cada necessidade
          </p>
          <div className="w-20 h-1 accent-gradient mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-blue-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
  
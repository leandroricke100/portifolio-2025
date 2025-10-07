
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Code2, Rocket, Target } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Código Eficiente',
      description: 'Desenvolvimento limpo e otimizado'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Foco em Resultados',
      description: 'Soluções que convertem e performam'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Inovação',
      description: 'Tecnologias modernas e escaláveis'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Quem sou eu
          </h2>
          <div className="w-20 h-1 accent-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 md:p-12 mb-12 shadow-xl"
          >
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
              Olá! Sou <span className="font-bold text-blue-600">Leandro Henrique</span>, 
              desenvolvedor full stack apaixonado por tecnologia e inovação.
            </p>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
              Ajudo empresas e profissionais a digitalizarem seus processos e expandirem 
              sua presença online.
            </p>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Meu foco é unir <span className="font-semibold text-blue-600">design limpo</span>, 
              <span className="font-semibold text-blue-600"> código eficiente</span> e 
              <span className="font-semibold text-blue-600"> estratégia comercial</span> para 
              entregar resultados mensuráveis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-white border-2 border-blue-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
  

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const testimonials = [
    {
      name: 'João Silva',
      role: 'Diretor de Marketing',
      content: 'O Leandro transformou nossa ideia em um sistema prático e bonito. Atendimento excelente e entrega dentro do prazo!',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'Proprietária - AgroMix',
      content: 'Profissional extremamente competente! O sistema de formulação de ração superou todas as expectativas.',
      rating: 5
    },
    {
      name: 'Carlos Oliveira',
      role: 'Diretor de TI',
      content: 'Código limpo, documentação impecável e suporte excepcional. Recomendo fortemente!',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que dizem meus clientes
          </h2>
          <div className="w-20 h-1 accent-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all"
            >
              <Quote className="w-12 h-12 text-yellow-400 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-white/90 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-white/20 pt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-white/70">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
  
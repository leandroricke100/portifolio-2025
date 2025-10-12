
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import WhatsAppButton from '@/components/WhatsAppButton';

function App() {
  return (
    <>
      <Helmet>
        <title>LeandroCodeLab - Desenvolvedor Full Stack | Soluções Digitais Sob Medida</title>
        <meta name="description" content="Transformo ideias em soluções digitais que geram resultados reais. Desenvolvedor especializado em sites, sistemas e automação com foco em performance e conversão." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </>
  );
}

export default App;
  

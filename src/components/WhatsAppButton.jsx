import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5531984655356';
  const defaultMessage = 'Olá! Vim pelo site e gostaria de saber mais sobre suas soluções.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg shadow-green-500/40 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
      aria-label="Falar com LeandroCodeLab no WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;

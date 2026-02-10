import React from 'react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const phoneNumber = "5216181032038";
  const message = "Quiero conocer el catálogo de Espacios Publicitarios";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl cursor-pointer hover:bg-[#128C7E] transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <svg 
        viewBox="0 0 24 24" 
        width="32" 
        height="32" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="white" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-white fill-current"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
      
      <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block pointer-events-none">
        ¡Contáctanos!
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
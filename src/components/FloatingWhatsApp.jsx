import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "5216181032038";
  const message = "Quiero conocer el catálogo de Espacios Publicitarios";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulso animado de fondo */}
        <motion.div
          className="absolute inset-0 bg-[#25D366] rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Botón principal con imagen */}
        <div className="relative w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 overflow-hidden">
          <img 
            src="https://r2.eabmodel.com/whatsapp.png" 
            alt="WhatsApp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tooltip mejorado */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-5 py-3 rounded-xl shadow-2xl whitespace-nowrap pointer-events-none hidden md:block"
            >
              <div className="text-sm font-semibold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ¡Contáctanos por WhatsApp!
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Respuesta inmediata
              </div>
              
              {/* Flecha del tooltip */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badge de notificación (opcional) */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center"
        >
          <span className="text-white text-xs font-bold">1</span>
        </motion.div>
      </motion.a>

      {/* Tooltip móvil (aparece arriba en móviles) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-24 right-6 z-40 md:hidden bg-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium text-gray-800"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ¡Contáctanos!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingWhatsApp;
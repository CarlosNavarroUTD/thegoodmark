import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SuccessCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cases = [
    {
      title: 'Campaña Automotriz Premium',
      brand: 'Marca Automotriz',
      description: 'Incremento del 45% en visitas a concesionarios durante la campaña',
      image: 'Luxury car billboard advertisement on highway',
      metrics: { reach: '2.5M', engagement: '+45%', duration: '3 meses' }
    },
    {
      title: 'Lanzamiento Producto Retail',
      brand: 'Retail Nacional',
      description: 'Campaña multi-formato que generó 80% de recordación de marca',
      image: 'Retail product advertisement on LED screen',
      metrics: { reach: '1.8M', engagement: '+80%', duration: '2 meses' }
    },
    {
      title: 'Campaña Servicios Financieros',
      brand: 'Banco Regional',
      description: 'Posicionamiento en top-of-mind con presencia estratégica',
      image: 'Financial services billboard in business district',
      metrics: { reach: '3.2M', engagement: '+60%', duration: '6 meses' }
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#01257D] to-[#165e9d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Resultados comprobados que impulsan tu negocio
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img className="w-full h-full object-cover" alt={cases[currentIndex].title} src="https://images.unsplash.com/photo-1697747264193-3e43cb4c095a" />
                </div>
                
                <div className="p-8 md:p-12">
                  <div className="inline-block bg-[#00FFFF]/20 text-[#01257D] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {cases[currentIndex].brand}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-[#01257D] mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                    {cases[currentIndex].title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {cases[currentIndex].description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#165e9d]">{cases[currentIndex].metrics.reach}</div>
                      <div className="text-sm text-gray-500">Alcance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#165e9d]">{cases[currentIndex].metrics.engagement}</div>
                      <div className="text-sm text-gray-500">Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#165e9d]">{cases[currentIndex].metrics.duration}</div>
                      <div className="text-sm text-gray-500">Duración</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
          >
            <ChevronLeft className="text-[#01257D]" size={24} />
          </button>
          
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
          >
            <ChevronRight className="text-[#01257D]" size={24} />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCarousel;
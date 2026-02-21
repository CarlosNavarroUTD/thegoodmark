import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#01257D] mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
            Ubicaciones Estratégicas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Presencia en los puntos de mayor tráfico vehicular y peatonal en Durango
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="bg-gradient-to-br from-[#01257D] to-[#165e9d] p-8 text-white text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-[#00FFFF]" />
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              Mapa Interactivo de Ubicaciones
            </h3>
            <p className="text-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Explora nuestros espectaculares y pantallas LED en el mapa
            </p>
          </div>
          
          <div className="h-96 bg-gray-200 relative">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-104.7000%2C24.0000%2C-104.6000%2C24.1000&layer=mapnik&marker=24.0277,-104.6532"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mapa de ubicaciones en Durango"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
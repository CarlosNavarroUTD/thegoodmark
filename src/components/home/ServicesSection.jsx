import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Monitor, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Espectaculares',
      description: 'Estructuras de gran formato estratégicamente ubicadas en las principales vías de Durango.',
      features: ['Alta visibilidad', 'Ubicaciones premium', 'Iluminación nocturna'],
      link: '/billboards',
      image: 'Large outdoor billboard on highway with advertising',
    },
    {
      title: 'Pantallas LED',
      description: 'Tecnología digital de última generación para campañas dinámicas y de alto impacto.',
      features: ['Contenido dinámico', 'Alta resolución', 'Programación flexible'],
      link: '/led-screens',
      image: 'Bright LED screen display in urban area showing advertisements',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#01257D] mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Soluciones integrales de publicidad exterior para maximizar el alcance de tu marca
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover" alt={service.title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#01257D] mb-3" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <div className="w-2 h-2 bg-[#00FFFF] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={service.link}>
                  <button className="flex items-center text-[#165e9d] font-semibold hover:text-[#01257D] transition-colors group">
                    Ver más detalles
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
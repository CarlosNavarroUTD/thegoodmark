import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Download, Map, Monitor, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const categories = [
    {
      title: 'Espectaculares',
      description: 'Ubicaciones premium en las principales arterias de la ciudad.',
      image: 'https://images.unsplash.com/photo-1562519739-1203b127d7f7',
      link: '/billboards',
      count: '25+ Ubicaciones'
    },
    {
      title: 'Pantallas LED',
      description: 'Impacto digital dinámico de alta resolución.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
      link: '/led-screens',
      count: '10+ Pantallas'
    },
    {
      title: 'Mobiliario Urbano',
      description: 'Presencia a nivel de calle en zonas de alto flujo peatonal.',
      image: 'https://images.unsplash.com/photo-1572509018340-d0c7170ba394',
      link: '/contact',
      count: 'Próximamente'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Catálogo - The Good Mark | Nuestros Espacios</title>
        <meta name="description" content="Explora nuestro catálogo completo de espacios publicitarios en Durango. Espectaculares, Pantallas LED y más soluciones OOH." />
      </Helmet>

      <div className="pt-20">
        <section className="bg-[#01257D] py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: 'Ubuntu, sans-serif' }}
            >
              Catálogo de Espacios
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Descubre nuestra red de ubicaciones estratégicas diseñadas para maximizar la visibilidad de tu marca.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button className="bg-[#00FFFF] text-[#01257D] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center mx-auto hover:bg-white transition-colors">
                <Download className="mr-2" size={24} />
                Descargar Catálogo PDF 2025
              </button>
              <p className="text-sm text-gray-400 mt-4">
                Archivo PDF (15.4 MB) • Actualizado Diciembre 2024
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((cat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                    <img 
                      src={cat.image} 
                      alt={cat.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#01257D]">
                      {cat.count}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#01257D] mb-3" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                      {cat.title}
                    </h3>
                    <p className="text-gray-600 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {cat.description}
                    </p>
                    <Link 
                      to={cat.link}
                      className="inline-flex items-center text-[#165e9d] font-bold hover:text-[#01257D] transition-colors"
                    >
                      Ver Disponibilidad <ArrowRight size={20} className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FileText className="w-16 h-16 text-[#01257D] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#01257D] mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              ¿Buscas algo específico?
            </h2>
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nuestro equipo puede ayudarte a diseñar un circuito personalizado que se ajuste a tus objetivos y presupuesto.
            </p>
            <Link to="/contact">
              <button className="bg-[#01257D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#165e9d] transition-colors">
                Contactar a un Asesor
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Catalog;
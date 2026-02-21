import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Zap, Target, Maximize2, Download, Phone, MapPin, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const PuntosExhibicion = () => {
  const [selectedZone, setSelectedZone] = useState('all');

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1654815801642-91e2f706d2c7',
      alt: 'Punto de exhibición interactivo en tienda'
    },
    {
      url: 'https://images.unsplash.com/photo-1703757658365-1d84c9705c66',
      alt: 'Display de marca en punto de venta'
    },
    {
      url: 'https://images.unsplash.com/photo-1621685743771-fd5e13734ae6',
      alt: 'Exhibidor promocional estratégico'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Displays Interactivos',
      description: 'Exhibidores diseñados para captar la atención y generar interacción directa con los clientes en el punto de venta.'
    },
    {
      icon: Users,
      title: 'Presencia de Marca',
      description: 'Fortalece el reconocimiento y posicionamiento de tu marca en ubicaciones estratégicas de alto tráfico.'
    },
    {
      icon: Target,
      title: 'Engagement del Cliente',
      description: 'Crea experiencias memorables que conectan emocionalmente con tu audiencia y generan conversiones.'
    },
    {
      icon: Maximize2,
      title: 'Flexibilidad Total',
      description: 'Soluciones adaptables a diferentes espacios, formatos y necesidades específicas de tu campaña.'
    }
  ];

  const locations = [
    {
      id: 1,
      name: 'Centro Comercial Paseo',
      zone: 'sur',
      type: 'Isla Comercial',
      traffic: '15,000 visitas/día',
      features: 'Conexión eléctrica, WiFi',
      image: 'https://images.unsplash.com/photo-1519671482538-518b5c2a9d87'
    },
    {
      id: 2,
      name: 'Plaza de Armas',
      zone: 'centro',
      type: 'Stand Promocional',
      traffic: '25,000 peatones/día',
      features: 'Alta visibilidad, Zona turística',
      image: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1'
    },
    {
      id: 3,
      name: 'Expo Feria Durango',
      zone: 'norte',
      type: 'Pabellón de Exhibición',
      traffic: 'Eventos masivos',
      features: 'Espacio modular, Seguridad 24/7',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87'
    },
    {
      id: 4,
      name: 'Corredor Constitución',
      zone: 'centro',
      type: 'Módulo Urbano',
      traffic: '18,000 peatones/día',
      features: 'Iluminación LED, Diseño moderno',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8'
    }
  ];

  const zones = [
    { id: 'all', name: 'Todas las Zonas' },
    { id: 'norte', name: 'Zona Norte' },
    { id: 'sur', name: 'Zona Sur' },
    { id: 'centro', name: 'Centro' },
  ];

  const filteredLocations = selectedZone === 'all'
    ? locations
    : locations.filter(l => l.zone === selectedZone);

  return (
    <>
      <Helmet>
        <title>Puntos de Exhibición - The Good Mark | Displays y Exhibidores</title>
        <meta name="description" content="Puntos de exhibición y displays interactivos en Durango. Fortalece tu presencia de marca y genera engagement con tus clientes." />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              alt="Puntos de exhibición en Durango" 
              src="https://images.unsplash.com/photo-1654815801642-91e2f706d2c7" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#01257D]/95 to-[#165e9d]/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              style={{ fontFamily: 'Ubuntu, sans-serif' }}
            >
              Puntos de Exhibición
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Displays estratégicos que transforman espacios en experiencias de marca inolvidables
            </motion.p>
          </div>
        </section>

        {/* Service Description Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#01257D] mb-6" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                  ¿Qué son los Puntos de Exhibición?
                </h2>
                <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Los puntos de exhibición son displays estratégicos diseñados para maximizar la visibilidad de tu marca en espacios comerciales, eventos y puntos de venta. Son herramientas clave para generar engagement directo con tus clientes.
                </p>
                <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Desde exhibidores interactivos hasta displays promocionales personalizados, nuestras soluciones están diseñadas para captar la atención, comunicar tu mensaje de manera efectiva y generar resultados medibles en el punto de contacto con el cliente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <button className="bg-gradient-to-r from-[#01257D] to-[#165e9d] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#165e9d] hover:to-[#01257D] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                      <Phone className="mr-2" size={20} />
                      Solicitar Cotización
                    </button>
                  </Link>
                  <Link to="/catalog">
                    <button className="bg-white border-2 border-[#01257D] text-[#01257D] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#01257D] hover:text-white transition-all shadow-lg flex items-center justify-center">
                      <Download className="mr-2" size={20} />
                      Descargar Catálogo
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Display interactivo en punto de venta" 
                    src="https://images.unsplash.com/photo-1703757658365-1d84c9705c66" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01257D]/50 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#01257D] mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                Galería de Exhibidores
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Explora nuestras soluciones de exhibición y el impacto visual que generan
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative h-80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img 
                    className="w-full h-full object-cover" 
                    alt={image.alt} 
                    src={image.url} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01257D]/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-[#01257D] to-[#165e9d] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                Características Clave
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Lo que hace únicos a nuestros puntos de exhibición
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-[#00FFFF] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="text-[#01257D]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Locations Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#01257D]" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                Ubicaciones Disponibles
              </h2>
              
              <div className="flex items-center space-x-4">
                <Filter className="text-gray-500" size={20} />
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {zones.map(zone => (
                    <option key={zone.id} value={zone.id}>{zone.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl h-96">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-104.7000%2C24.0000%2C-104.6000%2C24.1000&layer=mapnik&marker=24.0277,-104.6532"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa de puntos de exhibición en Durango"
              ></iframe>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredLocations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img className="w-full h-full object-cover" alt={location.name} src={location.image} />
                    <div className="absolute top-4 right-4 bg-[#00FFFF] text-[#01257D] px-3 py-1 rounded-full text-sm font-semibold">
                      Disponible
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-[#165e9d] mb-2">
                      <MapPin size={18} className="mr-2" />
                      <span className="text-sm font-semibold uppercase">{location.zone}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#01257D] mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                      {location.name}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <div className="flex justify-between">
                        <span className="font-semibold">Tipo:</span>
                        <span>{location.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Tráfico:</span>
                        <span>{location.traffic}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Características:</span>
                        <span>{location.features}</span>
                      </div>
                    </div>

                    <button className="w-full mt-6 bg-[#01257D] hover:bg-[#165e9d] text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                      Solicitar Información
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#01257D] mb-6" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                ¿Listo para Transformar tus Espacios?
              </h2>
              <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Descubre cómo nuestros puntos de exhibición pueden potenciar tu marca
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="bg-gradient-to-r from-[#01257D] to-[#165e9d] text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-[#165e9d] hover:to-[#01257D] transition-all transform hover:scale-105 shadow-xl">
                    Contactar Ahora
                  </button>
                </Link>
                <Link to="/catalog">
                  <button className="bg-white border-2 border-[#01257D] text-[#01257D] px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#01257D] hover:text-white transition-all shadow-xl">
                    Ver Catálogo Completo
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PuntosExhibicion;
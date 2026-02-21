import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Eye, MapPin, TrendingUp, Shield, Download, Phone, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Vallas = () => {
  const [selectedZone, setSelectedZone] = useState('all');

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1533069027836-fa937181a8ce',
      alt: 'Valla publicitaria en ubicación estratégica'
    },
    {
      url: 'https://images.unsplash.com/photo-1602127719196-990a57433924',
      alt: 'Valla publicitaria de alto impacto'
    },
    {
      url: 'https://images.unsplash.com/photo-1568642357208-86504f3595dd',
      alt: 'Valla publicitaria urbana'
    }
  ];

  const features = [
    {
      icon: Eye,
      title: 'Alta Visibilidad',
      description: 'Ubicadas en puntos estratégicos de alto tráfico vehicular y peatonal para máxima exposición de tu marca.'
    },
    {
      icon: MapPin,
      title: 'Ubicaciones Estratégicas',
      description: 'Seleccionadas cuidadosamente en las principales vías de acceso y zonas comerciales de la ciudad.'
    },
    {
      icon: TrendingUp,
      title: 'Alto Impacto',
      description: 'Formato de gran tamaño que garantiza la atención de tu público objetivo las 24 horas del día.'
    },
    {
      icon: Shield,
      title: 'Durabilidad Garantizada',
      description: 'Materiales de primera calidad resistentes a condiciones climáticas adversas y desgaste del tiempo.'
    }
  ];

  const vallas = [
    {
      id: 1,
      name: 'Av. 20 de Noviembre y Libertad',
      zone: 'centro',
      size: '6.00 x 3.00m',
      traffic: '35,000 peatones/día',
      material: 'Lona vinílica',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
    },
    {
      id: 2,
      name: 'Blvd. Guadiana (Frente a Museo)',
      zone: 'sur',
      size: '8.00 x 4.00m',
      traffic: '65,000 vehículos/día',
      material: 'Lona vinílica',
      image: 'https://images.unsplash.com/photo-1552960562-daf630e9278b'
    },
    {
      id: 3,
      name: 'Salida a Mazatlán',
      zone: 'sur',
      size: '10.00 x 5.00m',
      traffic: '55,000 vehículos/día',
      material: 'Estructura metálica',
      image: 'https://images.unsplash.com/photo-1542382156909-52445b347963'
    },
    {
      id: 4,
      name: 'Zona Hospitalaria',
      zone: 'norte',
      size: '5.00 x 3.00m',
      traffic: '40,000 personas/día',
      material: 'Vinil adhesivo',
      image: 'https://images.unsplash.com/photo-1598136490941-026856d20352'
    }
  ];

  const zones = [
    { id: 'all', name: 'Todas las Zonas' },
    { id: 'norte', name: 'Zona Norte' },
    { id: 'sur', name: 'Zona Sur' },
    { id: 'centro', name: 'Centro' },
  ];

  const filteredVallas = selectedZone === 'all'
    ? vallas
    : vallas.filter(v => v.zone === selectedZone);

  return (
    <>
      <Helmet>
        <title>Vallas - The Good Mark | Publicidad Exterior de Alto Impacto</title>
        <meta name="description" content="Vallas publicitarias estratégicamente ubicadas en Durango. Máxima visibilidad y durabilidad garantizada para tu marca." />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              alt="Vallas publicitarias en Durango" 
              src="https://images.unsplash.com/photo-1533069027836-fa937181a8ce" 
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
              Vallas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Publicidad exterior de gran formato que captura la atención de miles de personas cada día
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
                  ¿Qué son las Vallas Publicitarias?
                </h2>
                <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Las vallas publicitarias son estructuras de gran formato diseñadas para exhibir mensajes publicitarios de alto impacto en ubicaciones estratégicas de la ciudad. Son la solución ideal para marcas que buscan máxima visibilidad y presencia constante.
                </p>
                <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Con materiales de primera calidad y ubicaciones cuidadosamente seleccionadas, nuestras vallas garantizan que tu mensaje llegue a miles de personas diariamente, generando recordación de marca y resultados medibles.
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
                    alt="Valla publicitaria de alto impacto" 
                    src="https://images.unsplash.com/photo-1602127719196-990a57433924" 
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
                Galería de Vallas
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Descubre nuestras ubicaciones premium y el impacto visual de nuestras vallas
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
                Lo que hace únicas a nuestras vallas publicitarias
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
                title="Mapa de vallas en Durango"
              ></iframe>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVallas.map((valla, index) => (
                <motion.div
                  key={valla.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img className="w-full h-full object-cover" alt={valla.name} src={valla.image} />
                    <div className="absolute top-4 right-4 bg-[#00FFFF] text-[#01257D] px-3 py-1 rounded-full text-sm font-semibold">
                      Disponible
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-[#165e9d] mb-2">
                      <MapPin size={18} className="mr-2" />
                      <span className="text-sm font-semibold uppercase">{valla.zone}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#01257D] mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                      {valla.name}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <div className="flex justify-between">
                        <span className="font-semibold">Tamaño:</span>
                        <span>{valla.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Tráfico:</span>
                        <span>{valla.traffic}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Material:</span>
                        <span>{valla.material}</span>
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
                ¿Listo para Maximizar tu Presencia?
              </h2>
              <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Descubre nuestras ubicaciones disponibles y lleva tu marca al siguiente nivel
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

export default Vallas;
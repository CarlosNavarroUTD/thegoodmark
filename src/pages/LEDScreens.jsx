import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Filter, Zap } from 'lucide-react';

const LEDScreens = () => {
  const [selectedZone, setSelectedZone] = useState('all');

  const screens = [
    {
      id: 1,
      name: 'Plaza Comercial Victoria',
      zone: 'centro',
      size: '8.00 x 4.50m',
      resolution: 'Full HD',
      traffic: '120,000 personas/día',
      image: 'Large LED screen in shopping mall displaying ads',
    },
    {
      id: 2,
      name: 'Boulevard Principal',
      zone: 'norte',
      size: '10.00 x 6.00m',
      resolution: '4K Ultra HD',
      traffic: '95,000 vehículos/día',
      image: 'Outdoor LED screen on main boulevard',
    },
    {
      id: 3,
      name: 'Zona Dorada',
      zone: 'oeste',
      size: '7.50 x 4.00m',
      resolution: 'Full HD',
      traffic: '78,000 personas/día',
      image: 'LED display in premium shopping district',
    },
    {
      id: 4,
      name: 'Centro Comercial Galerías',
      zone: 'sur',
      size: '9.00 x 5.00m',
      resolution: '4K Ultra HD',
      traffic: '110,000 personas/día',
      image: 'Indoor LED screen at shopping center entrance',
    },
  ];

  const zones = [
    { id: 'all', name: 'Todas las Zonas' },
    { id: 'norte', name: 'Zona Norte' },
    { id: 'sur', name: 'Zona Sur' },
    { id: 'centro', name: 'Centro' },
    { id: 'oeste', name: 'Zona Oeste' },
  ];

  const filteredScreens = selectedZone === 'all'
    ? screens
    : screens.filter(s => s.zone === selectedZone);

  return (
    <>
      <Helmet>
        <title>Pantallas LED en Durango - The Good Mark | Publicidad Digital</title>
        <meta name="description" content="Pantallas LED de última generación en Durango. Tecnología 4K, contenido dinámico y máximo impacto para tu campaña publicitaria." />
      </Helmet>

      <div className="pt-20">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Pantallas LED en Durango" src="https://images.unsplash.com/photo-1674596821389-71f409089253" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#01257D]/90 to-[#165e9d]/70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-4"
            >
              <Zap className="w-16 h-16 text-[#00FFFF] mx-auto" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: 'Ubuntu, sans-serif' }}
            >
              Pantallas LED
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Tecnología digital de última generación para campañas dinámicas de alto impacto
            </motion.p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-[#00FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-[#01257D]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#01257D] mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                  Contenido Dinámico
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Actualiza tu mensaje en tiempo real
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-[#00FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#01257D] text-2xl font-bold">4K</span>
                </div>
                <h3 className="text-xl font-bold text-[#01257D] mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                  Alta Resolución
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Calidad de imagen excepcional
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-[#00FFFF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#01257D] text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-[#01257D] mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                  Máximo Impacto
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Capta la atención al instante
                </p>
              </motion.div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#01257D]" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                Pantallas Disponibles
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

            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl h-96 bg-white">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-104.7000%2C24.0000%2C-104.6000%2C24.1000&layer=mapnik&marker=24.0277,-104.6532"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa de pantallas LED en Durango"
              ></iframe>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredScreens.map((screen, index) => (
                <motion.div
                  key={screen.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img className="w-full h-full object-cover" alt={screen.name} src="https://images.unsplash.com/photo-1631218371695-2c03b63ed583" />
                    <div className="absolute top-4 right-4 bg-[#00FFFF] text-[#01257D] px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Zap size={16} className="mr-1" />
                      Disponible
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-[#165e9d] mb-2">
                      <MapPin size={18} className="mr-2" />
                      <span className="text-sm font-semibold uppercase">{screen.zone}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#01257D] mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                      {screen.name}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-semibold text-gray-700">Tamaño:</span>
                        <span className="text-sm text-gray-600">{screen.size}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-semibold text-gray-700">Resolución:</span>
                        <span className="text-sm text-gray-600">{screen.resolution}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-semibold text-gray-700">Tráfico:</span>
                        <span className="text-sm text-gray-600">{screen.traffic}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-[#01257D] to-[#165e9d] hover:from-[#165e9d] hover:to-[#01257D] text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                      Solicitar Información
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LEDScreens;
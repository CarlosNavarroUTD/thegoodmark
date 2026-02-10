import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Filter } from 'lucide-react';

const Billboards = () => {
  const [selectedZone, setSelectedZone] = useState('all');

  const billboards = [
    {
      id: 1,
      name: 'Boulevard Durango Norte',
      zone: 'norte',
      size: '14.40 x 7.20m',
      traffic: '85,000 vehículos/día',
      illumination: 'LED nocturna',
      image: 'Large billboard on busy boulevard with traffic',
    },
    {
      id: 2,
      name: 'Carretera a Mazatlán',
      zone: 'sur',
      size: '14.40 x 7.20m',
      traffic: '72,000 vehículos/día',
      illumination: 'LED nocturna',
      image: 'Highway billboard advertising near mountains',
    },
    {
      id: 3,
      name: 'Centro Histórico',
      zone: 'centro',
      size: '12.00 x 6.00m',
      traffic: '45,000 peatones/día',
      illumination: 'LED nocturna',
      image: 'Billboard in historic city center with pedestrians',
    },
    {
      id: 4,
      name: 'Zona Industrial',
      zone: 'este',
      size: '14.40 x 7.20m',
      traffic: '65,000 vehículos/día',
      illumination: 'LED nocturna',
      image: 'Industrial area billboard on main road',
    },
    {
      id: 5,
      name: 'Boulevard Francisco Villa',
      zone: 'oeste',
      size: '14.40 x 7.20m',
      traffic: '78,000 vehículos/día',
      illumination: 'LED nocturna',
      image: 'Boulevard billboard with urban landscape',
    },
    {
      id: 6,
      name: 'Periférico Norte',
      zone: 'norte',
      size: '14.40 x 7.20m',
      traffic: '92,000 vehículos/día',
      illumination: 'LED nocturna',
      image: 'Highway bypass billboard with heavy traffic',
    },
  ];

  const zones = [
    { id: 'all', name: 'Todas las Zonas' },
    { id: 'norte', name: 'Zona Norte' },
    { id: 'sur', name: 'Zona Sur' },
    { id: 'centro', name: 'Centro' },
    { id: 'este', name: 'Zona Este' },
    { id: 'oeste', name: 'Zona Oeste' },
  ];

  const filteredBillboards = selectedZone === 'all'
    ? billboards
    : billboards.filter(b => b.zone === selectedZone);

  return (
    <>
      <Helmet>
        <title>Espectaculares en Durango - The Good Mark | Publicidad Exterior</title>
        <meta name="description" content="Espectaculares estratégicamente ubicados en Durango. Alta visibilidad, ubicaciones premium y resultados comprobados para tu marca." />
      </Helmet>

      <div className="pt-20">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Espectaculares en Durango" src="https://images.unsplash.com/photo-1551899815-fd3eb14cb498" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#01257D]/90 to-[#165e9d]/70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: 'Ubuntu, sans-serif' }}
            >
              Espectaculares
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Estructuras de gran formato en ubicaciones estratégicas de alto tráfico
            </motion.p>
          </div>
        </section>

        <section className="py-12 bg-white">
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
                title="Mapa de espectaculares en Durango"
              ></iframe>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBillboards.map((billboard, index) => (
                <motion.div
                  key={billboard.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img className="w-full h-full object-cover" alt={billboard.name} src="https://images.unsplash.com/photo-1521917435658-26c395cf712a" />
                    <div className="absolute top-4 right-4 bg-[#00FFFF] text-[#01257D] px-3 py-1 rounded-full text-sm font-semibold">
                      Disponible
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-[#165e9d] mb-2">
                      <MapPin size={18} className="mr-2" />
                      <span className="text-sm font-semibold uppercase">{billboard.zone}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#01257D] mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                      {billboard.name}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <div className="flex justify-between">
                        <span className="font-semibold">Tamaño:</span>
                        <span>{billboard.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Tráfico:</span>
                        <span>{billboard.traffic}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Iluminación:</span>
                        <span>{billboard.illumination}</span>
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
      </div>
    </>
  );
};

export default Billboards;
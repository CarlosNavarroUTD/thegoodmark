import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { TrendingUp, Eye, Calendar } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const SuccessCases = () => {
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    campaign: ''
  });

  const campaigns = [
    {
      id: 1,
      client: 'Automotriz Premium',
      campaign: 'Lanzamiento Modelo 2024',
      format: 'Espectaculares + LED',
      duration: '3 meses',
      reach: '2.5M',
      engagement: '+45%',
      roi: '3.8x',
      image: 'Premium car advertising campaign on billboards',
    },
    {
      id: 2,
      client: 'Retail Nacional',
      campaign: 'Temporada Alta',
      format: 'Pantallas LED',
      duration: '2 meses',
      reach: '1.8M',
      engagement: '+80%',
      roi: '4.2x',
      image: 'Retail store promotional campaign on LED screens',
    },
    {
      id: 3,
      client: 'Servicios Financieros',
      campaign: 'Productos de Inversión',
      format: 'Espectaculares',
      duration: '6 meses',
      reach: '3.2M',
      engagement: '+60%',
      roi: '3.5x',
      image: 'Financial services billboard campaign',
    },
    {
      id: 4,
      client: 'Inmobiliaria',
      campaign: 'Desarrollo Residencial',
      format: 'Espectaculares + LED',
      duration: '4 meses',
      reach: '2.1M',
      engagement: '+72%',
      roi: '5.1x',
      image: 'Real estate development advertising campaign',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Funcionalidad en desarrollo",
      description: "Esta función no está implementada aún. ¡Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Casos de Éxito - The Good Mark | Resultados Comprobados</title>
        <meta name="description" content="Descubre cómo hemos ayudado a marcas líderes a alcanzar sus objetivos con campañas de publicidad exterior exitosas en Durango." />
      </Helmet>

      <div className="pt-20">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Casos de éxito publicitarios" src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5" />
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
              Casos de Éxito
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Resultados comprobados que impulsan el crecimiento de nuestros clientes
            </motion.p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#01257D] mb-6 sm:mb-8">
                Campañas Destacadas
              </h2>

              {/* DESKTOP TABLE */}
              <div className="hidden md:block overflow-hidden bg-white rounded-xl shadow-lg">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#01257D] to-[#165e9d] text-white">
                    <tr>
                      {["Cliente", "Campaña", "Formato", "Duración", "Alcance", "Engagement", "ROI"].map((head) => (
                        <th key={head} className="px-6 py-4 text-left font-semibold text-sm">
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    {campaigns.map((campaign, index) => (
                      <motion.tr
                        key={campaign.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-semibold text-[#01257D]">
                          {campaign.client}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {campaign.campaign}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {campaign.format}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {campaign.duration}
                        </td>
                        <td className="px-6 py-4 font-semibold text-[#165e9d]">
                          {campaign.reach}
                        </td>
                        <td className="px-6 py-4 font-semibold text-green-600">
                          {campaign.engagement}
                        </td>
                        <td className="px-6 py-4 font-bold text-[#00FFFF]">
                          {campaign.roi}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* MOBILE CARDS */}
              <div className="md:hidden space-y-4">
                {campaigns.map((campaign, index) => (
                  <motion.div
                    key={campaign.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="bg-white rounded-xl shadow-md p-5"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-sm text-gray-500">Cliente</div>
                        <div className="font-semibold text-[#01257D]">
                          {campaign.client}
                        </div>
                      </div>
                      <div className="text-xs bg-[#00FFFF]/20 text-[#01257D] px-2 py-1 rounded-full">
                        {campaign.roi} ROI
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="text-sm text-gray-500">Campaña</div>
                      <div className="text-gray-800 font-medium">
                        {campaign.campaign}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-gray-500">Formato</div>
                        <div className="text-gray-700">{campaign.format}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Duración</div>
                        <div className="text-gray-700">{campaign.duration}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Alcance</div>
                        <div className="font-semibold text-[#165e9d]">
                          {campaign.reach}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500">Engagement</div>
                        <div className="font-semibold text-green-600">
                          {campaign.engagement}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>


            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {campaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img className="w-full h-full object-cover" alt={campaign.campaign} src="https://images.unsplash.com/photo-1676287570057-6b93e8d76649" />
                  </div>
                  
                  <div className="p-6">
                    <div className="inline-block bg-[#00FFFF]/20 text-[#01257D] px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {campaign.client}
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#01257D] mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                      {campaign.campaign}
                    </h3>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Eye className="w-6 h-6 text-[#165e9d] mx-auto mb-1" />
                        <div className="text-lg font-bold text-[#01257D]">{campaign.reach}</div>
                        <div className="text-xs text-gray-500">Alcance</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-green-600">{campaign.engagement}</div>
                        <div className="text-xs text-gray-500">Engagement</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Calendar className="w-6 h-6 text-[#165e9d] mx-auto mb-1" />
                        <div className="text-lg font-bold text-[#01257D]">{campaign.duration}</div>
                        <div className="text-xs text-gray-500">Duración</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-[#01257D] mb-4 text-center" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                ¿Listo para ser nuestro próximo caso de éxito?
              </h2>
              <p className="text-gray-600 text-center mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                      Contacto
                    </label>
                    <input
                      type="text"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                    Describe tu campaña
                  </label>
                  <textarea
                    value={formData.campaign}
                    onChange={(e) => setFormData({ ...formData, campaign: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#01257D] to-[#165e9d] text-white py-4 rounded-lg font-semibold text-lg hover:from-[#165e9d] hover:to-[#01257D] transition-all transform hover:scale-105"
                >
                  Solicitar Propuesta
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SuccessCases;
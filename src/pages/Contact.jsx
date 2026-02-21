import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Funcionalidad en desarrollo",
      description: "Esta función no está implementada aún. ¡Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contacto - The Good Mark | Solicita tu Cotización</title>
        <meta name="description" content="Contáctanos para solicitar información sobre nuestros servicios de publicidad exterior en Durango. WhatsApp, email y redes sociales." />
      </Helmet>

      <div className="pt-20">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Contacto The Good Mark" src="https://images.unsplash.com/photo-1599326014852-e083419b6f65" />
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
              Contacto
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Estamos listos para impulsar tu marca al siguiente nivel
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-[#01257D] mb-8" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                  Información de Contacto
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#01257D] to-[#165e9d] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#01257D] mb-1" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                        WhatsApp
                      </h3>
                      <a href="https://wa.me/5216181032038" className="text-gray-600 hover:text-[#165e9d] transition-colors text-lg">
                        +52 618 103 2038
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#01257D] to-[#165e9d] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#01257D] mb-1" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                        Email
                      </h3>
                      <a href="mailto:thegoodmark1@gmail.com" className="text-gray-600 hover:text-[#165e9d] transition-colors text-lg">
                        thegoodmark1@gmail.com
                      </a>
                    </div>
                  </div>


                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-[#01257D] mb-4 text-lg" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                    Síguenos en Redes Sociales
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com/thegoodmark"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-[#01257D] to-[#165e9d] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Facebook className="text-white" size={24} />
                    </a>
                    <a
                      href="https://linkedin.com/company/thegoodmark"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-[#01257D] to-[#165e9d] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Linkedin className="text-white" size={24} />
                    </a>
                  </div>
                </div>


              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-[#01257D] mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                  Solicita tu Cotización
                </h2>
                <p className="text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Completa el formulario y nos pondremos en contacto contigo
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                      Servicio de Interés
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent transition-all"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="billboards">Espectaculares</option>
                      <option value="led">Pantallas LED</option>
                      <option value="both">Ambos</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent transition-all resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#01257D] to-[#165e9d] hover:from-[#165e9d] hover:to-[#01257D] text-white py-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                  >
                    Enviar Mensaje
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#01257D] mb-6" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              ¿Listo para Impulsar tu Marca?
            </h2>
            <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contáctanos y descubre cómo podemos llevar tu mensaje a miles de personas cada día.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#00FFFF] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#01257D]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#01257D] mb-1" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                    WhatsApp
                  </h3>
                  <a href="https://wa.me/5216181032038" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#165e9d] transition-colors">
                    +52 618 103 2038
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#00FFFF] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#01257D]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#01257D] mb-1" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                    Email
                  </h3>
                  <a href="mailto:thegoodmark1@gmail.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#165e9d] transition-colors">
                    thegoodmark1@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                  Nombre
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
                  Email
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
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-[#01257D] hover:bg-[#165e9d] text-white py-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
                Enviar Mensaje
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      title: 'Tendencias en Publicidad Exterior 2024',
      excerpt: 'Descubre las últimas tendencias que están transformando el OOH advertising.',
      date: '15 Nov 2024',
      category: 'Tendencias',
      image: 'Modern digital billboard showing creative advertising',
    },
    {
      title: 'ROI en Campañas de Espectaculares',
      excerpt: 'Cómo medir el retorno de inversión en publicidad exterior estratégica.',
      date: '10 Nov 2024',
      category: 'Estudios',
      image: 'Business analytics dashboard showing advertising metrics',
    },
    {
      title: 'Tecnología LED: El Futuro del OOH',
      excerpt: 'Las pantallas LED están revolucionando la forma de hacer publicidad exterior.',
      date: '5 Nov 2024',
      category: 'Innovación',
      image: 'High-tech LED screen displaying dynamic content',
    },
  ];

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
            Blog & Noticias
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Mantente informado sobre las últimas tendencias en publicidad exterior
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img className="w-full h-full object-cover" alt={post.title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute top-4 left-4 bg-[#00FFFF] text-[#01257D] px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>
                
                <h3 className="text-xl font-bold text-[#01257D] mb-3" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {post.excerpt}
                </p>

                <Link to="/blog" className="flex items-center text-[#165e9d] font-semibold hover:text-[#01257D] transition-colors group">
                  Leer más
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <button className="bg-[#01257D] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#165e9d] transition-all transform hover:scale-105">
              Ver Todos los Artículos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
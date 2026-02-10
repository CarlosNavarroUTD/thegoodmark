import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const posts = [
    {
      id: 1,
      title: 'Tendencias en Publicidad Exterior para 2024',
      excerpt: 'Descubre las principales tendencias que están transformando el mundo del OOH advertising este año.',
      category: 'Tendencias',
      date: '15 Nov 2024',
      readTime: '5 min',
      image: 'Future trends in outdoor advertising technology',
      content: 'La publicidad exterior está evolucionando rápidamente...'
    },
    {
      id: 2,
      title: 'Cómo Medir el ROI en Campañas de Espectaculares',
      excerpt: 'Estrategias probadas para calcular el retorno de inversión en publicidad exterior.',
      category: 'Estudios',
      date: '10 Nov 2024',
      readTime: '7 min',
      image: 'ROI analytics dashboard for advertising campaigns',
      content: 'El ROI en publicidad exterior requiere métricas específicas...'
    },
    {
      id: 3,
      title: 'Tecnología LED: Revolucionando el OOH',
      excerpt: 'Las pantallas LED están cambiando la forma en que las marcas se comunican con su audiencia.',
      category: 'Innovación',
      date: '5 Nov 2024',
      readTime: '6 min',
      image: 'Advanced LED screen technology display',
      content: 'La tecnología LED ha revolucionado completamente...'
    },
    {
      id: 4,
      title: 'Estrategias de Ubicación para Máximo Impacto',
      excerpt: 'Cómo elegir las mejores ubicaciones para tu campaña de publicidad exterior.',
      category: 'Estrategia',
      date: '1 Nov 2024',
      readTime: '8 min',
      image: 'Strategic billboard locations on city map',
      content: 'La ubicación es fundamental en el éxito...'
    },
    {
      id: 5,
      title: 'El Futuro de la Publicidad Programática en OOH',
      excerpt: 'La automatización y personalización están llegando a la publicidad exterior.',
      category: 'Innovación',
      date: '28 Oct 2024',
      readTime: '6 min',
      image: 'Programmatic advertising technology interface',
      content: 'La publicidad programática en OOH permite...'
    },
    {
      id: 6,
      title: 'Casos de Éxito: Sector Automotriz',
      excerpt: 'Análisis de campañas exitosas en el sector automotriz utilizando OOH.',
      category: 'Casos de Éxito',
      date: '25 Oct 2024',
      readTime: '5 min',
      image: 'Successful automotive advertising campaign case study',
      content: 'El sector automotriz ha encontrado en el OOH...'
    },
  ];

  const categories = ['all', 'Tendencias', 'Estudios', 'Innovación', 'Estrategia', 'Casos de Éxito'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Blog - The Good Mark | Noticias y Tendencias OOH</title>
        <meta name="description" content="Mantente informado sobre las últimas tendencias, estudios y noticias en publicidad exterior y marketing OOH." />
      </Helmet>

      <div className="pt-20">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt="Blog publicidad exterior" src="https://images.unsplash.com/photo-1676279168715-c81dea528679" />
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
              Blog & Noticias
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif' }}>
              Últimas tendencias, estudios y noticias sobre publicidad exterior
            </motion.p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#165e9d] focus:border-transparent"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all ${
                      selectedCategory === category
                        ? 'bg-[#01257D] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {category === 'all' ? 'Todos' : category}
                  </button>
                ))}
              </div>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
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
                      <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#01257D] mb-3 line-clamp-2" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {post.excerpt}
                      </p>

                      <button className="flex items-center text-[#165e9d] font-semibold hover:text-[#01257D] transition-colors group">
                        Leer más
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  No se encontraron artículos que coincidan con tu búsqueda.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
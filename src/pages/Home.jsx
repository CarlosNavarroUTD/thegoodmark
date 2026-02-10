import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Eye, MapPin } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import MapSection from '@/components/home/MapSection';
import SuccessCarousel from '@/components/home/SuccessCarousel';
import BlogSection from '@/components/home/BlogSection';
import ContactSection from '@/components/home/ContactSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>The Good Mark - Publicidad Exterior en Durango | Espectaculares y Pantallas LED</title>
        <meta name="description" content="Líder en publicidad exterior en Durango. Espectaculares, pantallas LED y soluciones OOH de alto impacto para tu marca." />
      </Helmet>

      <div className="pt-20">
        <HeroSection />
        <ServicesSection />
        <MapSection />
        <SuccessCarousel />
        <BlogSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
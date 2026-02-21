import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" alt="Billboard advertising in Durango" src="https://images.unsplash.com/photo-1654816022020-570f48ae78cb" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#01257D]/90 to-[#165e9d]/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-5xl md:text-6xl font-bold text-white mb-6" style={{
        fontFamily: 'Ubuntu, sans-serif'
      }}>
          Tu Mensaje, <span className="text-[#00FFFF]">Nuestro Impacto</span>
        </motion.h1>
        
        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto" style={{
        fontFamily: 'Poppins, sans-serif'
      }}>Se grande, se espectacular</motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="bg-[#00FFFF] text-[#01257D] hover:bg-[#00FFFF]/90 text-lg px-8 py-6 rounded-full font-semibold transition-all transform hover:scale-105">
              Solicitar Cotización
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <Link to="/success-cases">
          <Button variant="outline" className="border-2 border-white text-[#01257D] hover:bg-white hover:text-[#01257D] text-lg px-8 py-6 rounded-full font-semibold transition-all transform hover:scale-105">
              Ver Casos de Éxito
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/billboards', label: 'Espectaculares' },
    { path: '/vallas', label: 'Vallas' },
    { path: '/led-screens', label: 'Pantallas LED' },
    { path: '/puntos-exhibicion', label: 'Puntos de Exhibición' },
    { path: '/success-cases', label: 'Casos de Éxito' },
    { path: '/about', label: 'Nosotros' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contacto' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://r2.eabmodel.com/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(1).png"
              alt="The Good Mark"
              className="w-40 h-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-[#01257D] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? 'bg-[#01257D] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

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

        {/* Logo */}
        <Link to="/" className="flex items-center justify-center h-full px-2 flex-shrink-0">
          <img
            src="https://r2.eabmodel.com/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(1).png"
            alt="The Good Mark"
            className="w-36 h-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 flex-nowrap overflow-hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                fontFamily: 'Poppins, sans-serif',
                border: '1px solid #e5e7eb',
                fontSize: 'clamp(0.65rem, 0.9vw, 0.875rem)',
                padding: 'clamp(4px, 0.4vw, 8px) clamp(6px, 0.7vw, 12px)',
                whiteSpace: 'nowrap',
                flexShrink: 1,
              }}
              className={`flex items-center justify-center rounded-lg transition-all duration-300 ${
                location.pathname === item.path
                  ? 'bg-[#01257D] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ border: '1px solid #e5e7eb' }}
          className="lg:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ border: '1px solid #e5e7eb' }}
            className="md:hidden bg-white"
          >
            <div
              style={{ border: '1px solid #e5e7eb' }}
              className="px-4 py-2 space-y-1"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    border: '1px solid #e5e7eb',
                    whiteSpace: 'nowrap',
                  }}
                  className={`flex items-center justify-center px-4 py-3 rounded-lg transition-all ${location.pathname === item.path
                      ? 'bg-[#01257D] text-white border-[#01257D]'
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
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
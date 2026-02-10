
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#01257D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="https://r2.eabmodel.com/the_good_mark_white.png"
                  alt="The Good Mark"
                  className="w-40 h-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-gray-300 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Publicidad exterior de impacto en Durango
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              Servicios
            </span>
            <ul className="space-y-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li><Link to="/billboards" className="text-gray-300 hover:text-[#00FFFF] transition-colors">Espectaculares</Link></li>
              <li><Link to="/vallas" className="text-gray-300 hover:text-[#00FFFF] transition-colors">Vallas</Link></li>
              <li><Link to="/led-screens" className="text-gray-300 hover:text-[#00FFFF] transition-colors">Pantallas LED</Link></li>
              <li><Link to="/puntos-exhibicion" className="text-gray-300 hover:text-[#00FFFF] transition-colors">Puntos de Exhibición</Link></li>
              <li><Link to="/success-cases" className="text-gray-300 hover:text-[#00FFFF] transition-colors">Casos de Éxito</Link></li>
              <li><Link to="/catalog" className="text-gray-300 hover:text-[#00FFFF] transition-colors">Catálogo</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              Empresa
            </span>
            <ul className="space-y-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li><Link to="/about" className="text-gray-300 hover:text-[#00FFFF] transition-colors">Nosotros</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-[#00FFFF] transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#00FFFF] transition-colors">Contacto</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-[#00FFFF] transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-[#00FFFF] transition-colors">Política de Privacidad</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              Contacto
            </span>
            <ul className="space-y-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone size={18} />
                <a href="https://wa.me/5216181032038" className="hover:text-[#00FFFF] transition-colors">+52 618 103 2038</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail size={18} />
                <a href="mailto:thegoodmark1@gmail.com" className="hover:text-[#00FFFF] transition-colors">thegoodmark1@gmail.com</a>
              </li>
              <li className="flex space-x-3 mt-4">
                <a href="https://facebook.com/thegoodmark" target="_blank" rel="noopener noreferrer" className="hover:text-[#00FFFF] transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00FFFF] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://linkedin.com/company/thegoodmark" target="_blank" rel="noopener noreferrer" className="hover:text-[#00FFFF] transition-colors">
                  <Linkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <p>&copy; {new Date().getFullYear()} The Good Mark. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

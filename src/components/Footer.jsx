import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#01257D] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

          {/* LOGO + DESCRIPCIÓN */}
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/" className="mb-4">
              <img
                src="https://r2.eabmodel.com/the_good_mark_white.png"
                alt="The Good Mark"
                className="w-44 sm:w-40 h-auto object-contain"
              />
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Publicidad exterior de impacto en Durango
            </p>
          </div>

          {/* SERVICIOS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Servicios
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Espectaculares", path: "/billboards" },
                { name: "Vallas", path: "/vallas" },
                { name: "Pantallas LED", path: "/led-screens" },
                { name: "Puntos de Exhibición", path: "/puntos-exhibicion" },
                { name: "Casos de Éxito", path: "/success-cases" },
                { name: "Catálogo", path: "/catalog" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-[#00FFFF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* EMPRESA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Empresa
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Nosotros", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Contacto", path: "/contact" },
                { name: "Términos y Condiciones", path: "/terms" },
                { name: "Política de Privacidad", path: "/privacy" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-[#00FFFF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contacto
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://wa.me/5216181032038"
                  className="flex items-center justify-center sm:justify-start gap-3 text-gray-300 hover:text-[#00FFFF] transition-colors"
                >
                  <Phone size={18} />
                  +52 618 103 2038
                </a>
              </li>

              <li>
                <a
                  href="mailto:thegoodmark1@gmail.com"
                  className="flex items-center justify-center sm:justify-start gap-3 text-gray-300 hover:text-[#00FFFF] transition-colors"
                >
                  <Mail size={18} />
                  thegoodmark1@gmail.com
                </a>
              </li>
            </ul>

            {/* REDES */}
            <div className="flex justify-center sm:justify-start gap-5 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61578079696045#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00FFFF] transition-colors"
              >
                <Facebook size={24} />
              </a>

              <a
                href="https://www.instagram.com/thegoodmark1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00FFFF] transition-colors"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://www.linkedin.com/company/thegoodmark%C2%AE/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00FFFF] transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} The Good Mark. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
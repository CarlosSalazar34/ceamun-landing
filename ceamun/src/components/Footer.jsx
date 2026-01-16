import React from 'react';
import { Instagram, Twitter, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Columna 1: Identidad */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white flex items-center">
            <span className="text-red-600 mr-2">CEA</span>MUN
          </h3>
          <p className="text-sm leading-relaxed">
            Formando líderes a través del debate y la diplomacia. 
            Un espacio donde la academia se encuentra con la familia y los valores.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Explorar</h4>
          <ul className="space-y-3">
            {['Inicio', 'Nosotros', 'Testimonios', 'contacto'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="flex items-center hover:text-red-500 transition-colors group">
                  <ChevronRight size={14} className="text-red-600 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Ubicación / Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Ubicación</h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-red-600 shrink-0 mt-1" />
              <p className="text-sm">
                Caracas, Venezuela. <br />
                by Carlos Salazar
              </p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <p className="text-xs italic">
                "La diplomacia es el arte de dejar que otros se salgan con la tuya."
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Línea Divisora y Copyright */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 pt-6 text-center">
        <p className="text-xs tracking-widest uppercase">
          &copy; {currentYear} <span className="text-red-600 font-bold">CEAMUN</span>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
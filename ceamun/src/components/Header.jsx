import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        { name: "¿Quiénes somos?", id: 'nosotros' },
        { name: "Visión", id: 'vision' },
        { name: 'Testimonios', id: 'testimonios' },
        { name: 'Contáctanos', id: 'contacto' }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Cierra el menú móvil después de hacer click
        }
    };

    return (
        <header className="bg-white sticky top-0 z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    
                    {/* LOGO (Opcional pero recomendado para balancear) */}
                    <div className="flex-shrink-0 font-bold text-xl cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        <span className="text-red-600">CEA</span>MUN
                    </div>

                    {/* DESKTOP MENU: Se oculta en móviles (hidden) y aparece en md (flex) */}
                    <nav className="hidden md:flex space-x-4">
                        {options.map((value, index) => (
                            <div
                                key={index}
                                className="text-sm subrayado font-semibold text-gray-600 hover:text-red-600 cursor-pointer transition-all duration-300 hover:scale-105 px-3 py-2"
                                onClick={() => scrollToSection(value.id)}
                            >
                                {value.name}
                            </div>
                        ))}
                    </nav>

                    {/* MOBILE BUTTON: Solo visible en móviles */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-red-600 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU: Animación de despliegue */}
            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2 bg-white border-t border-gray-100 shadow-inner">
                    {options.map((value, index) => (
                        <div
                            key={index}
                            className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                            onClick={() => scrollToSection(value.id)}
                        >
                            {value.name}
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}
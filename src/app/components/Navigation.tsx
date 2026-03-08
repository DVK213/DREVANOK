import { useState, useEffect } from 'react';
import logo from 'figma:asset/60f1cd7ad071ff6ec477bbb30e211a65888c93ea.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="hover:opacity-80 transition-opacity"
        >
          <img 
            src={logo} 
            alt="DREVANOK Logo" 
            className="h-16 w-auto"
          />
        </button>
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-gray-300 transition-colors uppercase text-sm tracking-wider"
          >
            Sobre Mí
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-gray-300 transition-colors uppercase text-sm tracking-wider"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-white hover:text-gray-300 transition-colors uppercase text-sm tracking-wider"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-gray-300 transition-colors uppercase text-sm tracking-wider"
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
}
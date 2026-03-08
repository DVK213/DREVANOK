import { Palette, Globe, Briefcase, Image, Film, Video, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Diseño de Logo',
    description: 'Creación de identidad visual única y memorable que representa la esencia de tu marca.'
  },
  {
    icon: Globe,
    title: 'Diseño Web',
    description: 'Sitios web modernos, responsivos y optimizados para ofrecer la mejor experiencia de usuario.'
  },
  {
    icon: Briefcase,
    title: 'Imagen Corporativa',
    description: 'Desarrollo completo de identidad visual corporativa coherente y profesional.'
  },
  {
    icon: Image,
    title: 'Ilustraciones',
    description: 'Ilustraciones digitales personalizadas para cualquier proyecto creativo o comercial.'
  },
  {
    icon: Film,
    title: 'Animaciones',
    description: 'Animaciones 2D y motion graphics que dan vida a tus ideas y conceptos.'
  },
  {
    icon: Video,
    title: 'Edición de Video',
    description: 'Edición profesional de video con efectos, transiciones y post-producción de calidad.'
  },
  {
    icon: TrendingUp,
    title: 'Branding',
    description: 'Estrategia integral de marca para posicionar tu negocio en el mercado.'
  }
];

export function Services() {
  return (
    <section id="services" className="min-h-screen bg-zinc-100 text-black py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl tracking-wider mb-6 text-center">
          SERVICIOS
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          Soluciones creativas profesionales para llevar tu marca al siguiente nivel
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              >
                <div className="mb-6">
                  <Icon 
                    size={48} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-2xl tracking-wider mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-black text-white p-12">
          <h3 className="text-3xl tracking-wider mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Cada proyecto es único. Trabajemos juntos para crear algo extraordinario que supere tus expectativas.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-all uppercase tracking-wider"
          >
            Solicitar Cotización
          </button>
        </div>
      </div>
    </section>
  );
}

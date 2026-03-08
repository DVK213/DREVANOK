import heroImage from 'figma:asset/60f1cd7ad071ff6ec477bbb30e211a65888c93ea.png';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* HD Monochrome Illustration Image */}
          <img
            src="https://images.unsplash.com/photo-1712308119376-6073f53c00dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwbW9ub2Nocm9tZSUyMGlsbHVzdHJhdGlvbiUyMGFydHxlbnwxfHx8fDE3NzIwNDkzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Ilustración Monocromática"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl tracking-wider mb-6 text-white">
          DREVANOK
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 tracking-wide">
          Comisiones Digitales • Arte & Diseño
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-all uppercase tracking-wider"
          >
            Ver Proyectos
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all uppercase tracking-wider"
          >
            Contactar
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
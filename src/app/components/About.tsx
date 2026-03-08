export function About() {
  return (
    <section id="about" className="min-h-screen bg-white text-black py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl tracking-wider mb-6">
            SOBRE LA MARCA
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        
        {/* Hero Statement */}
        <div className="bg-black text-white p-12 mb-16 border-4 border-black">
          <p className="text-3xl md:text-4xl tracking-wide leading-tight text-center">
            "Transformando ideas en arte digital que trasciende lo ordinario"
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-3xl tracking-wider mb-4">¿QUÉ ES DREVANOK?</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                DREVANOK es más que una marca personal, es una visión creativa dedicada a la excelencia 
                en el diseño digital. Fundada con la pasión por el arte y la innovación, DREVANOK se 
                especializa en crear comisiones digitales únicas que capturan la esencia de cada proyecto.
              </p>
            </div>

            <div className="bg-zinc-100 p-8 border-2 border-black">
              <h3 className="text-2xl tracking-wider mb-4">FILOSOFÍA</h3>
              <p className="text-gray-700 leading-relaxed">
                Cada proyecto es una oportunidad para crear algo memorable. En DREVANOK, creemos que 
                el diseño debe ser intencional, impactante y auténtico. Fusionamos técnicas tradicionales 
                con herramientas digitales de vanguardia para ofrecer resultados que no solo cumplen, 
                sino que superan expectativas.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-black text-white p-8">
              <h3 className="text-2xl tracking-wider mb-4">ENFOQUE</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                DREVANOK trabaja con un enfoque meticuloso en cada fase del proceso creativo. 
                Desde la conceptualización inicial hasta la entrega final, cada detalle es cuidadosamente 
                considerado para garantizar cohesión visual y narrativa.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="tracking-wider">Atención al detalle</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="tracking-wider">Comunicación transparente</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white"></div>
                  <p className="tracking-wider">Resultados excepcionales</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h3 className="text-3xl tracking-wider mb-4">EXPERIENCIA</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Con amplia experiencia en diseño gráfico, ilustración digital, branding y animación, 
                DREVANOK ofrece una perspectiva integral que abarca todas las necesidades visuales 
                de tu marca o proyecto personal.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-zinc-100 p-8 text-center border-2 border-black">
            <p className="text-5xl tracking-wider mb-2">100+</p>
            <p className="text-sm uppercase tracking-wider text-gray-600">Proyectos Completados</p>
          </div>
          <div className="bg-black text-white p-8 text-center">
            <p className="text-5xl tracking-wider mb-2">7</p>
            <p className="text-sm uppercase tracking-wider text-gray-300">Servicios Especializados</p>
          </div>
          <div className="bg-zinc-100 p-8 text-center border-2 border-black">
            <p className="text-5xl tracking-wider mb-2">50+</p>
            <p className="text-sm uppercase tracking-wider text-gray-600">Clientes Satisfechos</p>
          </div>
          <div className="bg-black text-white p-8 text-center">
            <p className="text-5xl tracking-wider mb-2">24/7</p>
            <p className="text-sm uppercase tracking-wider text-gray-300">Dedicación Creativa</p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h3 className="text-4xl tracking-wider text-center mb-12">VALORES FUNDAMENTALES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-4 border-black p-8 hover:bg-black hover:text-white transition-all group">
              <div className="text-6xl mb-4">01</div>
              <h4 className="text-2xl mb-4 tracking-wider">CREATIVIDAD</h4>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed">
                Innovación constante en cada proyecto. Ideas originales que destacan y generan impacto 
                visual inmediato en cualquier medio.
              </p>
            </div>
            
            <div className="border-4 border-black p-8 hover:bg-black hover:text-white transition-all group">
              <div className="text-6xl mb-4">02</div>
              <h4 className="text-2xl mb-4 tracking-wider">CALIDAD</h4>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed">
                Excelencia técnica en cada píxel. Trabajo meticuloso que garantiza resultados 
                profesionales de la más alta calidad.
              </p>
            </div>
            
            <div className="border-4 border-black p-8 hover:bg-black hover:text-white transition-all group">
              <div className="text-6xl mb-4">03</div>
              <h4 className="text-2xl mb-4 tracking-wider">COMPROMISO</h4>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed">
                Dedicación absoluta con cada cliente. Tu visión se convierte en mi misión hasta 
                alcanzar la perfección deseada.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-zinc-900 text-white p-12">
          <h3 className="text-4xl tracking-wider text-center mb-12">PROCESO CREATIVO</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">1</div>
              <h4 className="text-xl tracking-wider mb-3">CONSULTA</h4>
              <p className="text-gray-400 text-sm">Entendemos tu visión y objetivos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">2</div>
              <h4 className="text-xl tracking-wider mb-3">CONCEPTO</h4>
              <p className="text-gray-400 text-sm">Desarrollamos ideas y bocetos iniciales</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">3</div>
              <h4 className="text-xl tracking-wider mb-3">CREACIÓN</h4>
              <p className="text-gray-400 text-sm">Ejecutamos el diseño con precisión</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">4</div>
              <h4 className="text-xl tracking-wider mb-3">ENTREGA</h4>
              <p className="text-gray-400 text-sm">Refinamos y entregamos el producto final</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
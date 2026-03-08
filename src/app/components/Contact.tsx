import { Mail, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-white text-black py-20 px-6 flex items-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl tracking-wider mb-6 text-center">
          CONTACTO
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Conecta con DREVANOK y comienza tu próximo proyecto
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Email Contact */}
          <div className="space-y-6">
            <h3 className="text-2xl tracking-wider mb-6">¿Listo para trabajar juntos?</h3>
            <p className="text-gray-600 leading-relaxed">
              Si tienes un proyecto en mente o simplemente quieres explorar posibilidades creativas, 
              no dudes en contactarme. Estoy disponible para comisiones personalizadas y colaboraciones.
            </p>
            <a
              href="mailto:contacto@drevanok.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all uppercase tracking-wider"
            >
              <Mail size={20} />
              Enviar Email
            </a>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-2xl tracking-wider mb-6">Redes Sociales</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sígueme en redes sociales para ver más de mi trabajo y proceso creativo
            </p>
            <div className="space-y-4">
              <a
                href="https://instagram.com/drevanok"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-black hover:bg-black hover:text-white transition-all group"
              >
                <Instagram size={24} />
                <div>
                  <p className="tracking-wider">Instagram</p>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300">@drevanok</p>
                </div>
              </a>
              
              <a
                href="https://twitter.com/drevanok"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-black hover:bg-black hover:text-white transition-all group"
              >
                <Twitter size={24} />
                <div>
                  <p className="tracking-wider">Twitter</p>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300">@drevanok</p>
                </div>
              </a>
              
              <a
                href="https://linkedin.com/in/drevanok"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-black hover:bg-black hover:text-white transition-all group"
              >
                <Linkedin size={24} />
                <div>
                  <p className="tracking-wider">LinkedIn</p>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300">DREVANOK</p>
                </div>
              </a>
              
              <a
                href="https://github.com/drevanok"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-black hover:bg-black hover:text-white transition-all group"
              >
                <Github size={24} />
                <div>
                  <p className="tracking-wider">GitHub</p>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300">drevanok</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-600 tracking-wider">
            © 2026 DREVANOK • Todos los derechos reservados
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image'
import { FaCode, FaLightbulb, FaRocket, FaGraduationCap } from 'react-icons/fa'

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        {/* Contenido: Imagen + Texto lado a lado */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Foto izquierda ARRIBA */}
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-64 h-96 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl sticky top-24 isolate">
              <Image
                src="/images/aymar.jpg"
                alt="Aymar Aviles Ronquillo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Texto derecha */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                Hola, soy <span className="text-primary">Aymar</span>
              </h3>
              <p className="text-xl text-gray-400">Desarrollador Web Junior</p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Soy un desarrollador apasionado por crear soluciones digitales de alto impacto. Con experiencia en <span className="text-primary font-semibold">React, Next.js, Node.js</span> y tecnologías modernas, me especializo en desarrollar aplicaciones web escalables, performantes y con excelente experiencia de usuario.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Mi enfoque es combinar <span className="text-primary font-semibold">código limpio</span>, <span className="text-primary font-semibold">mejores prácticas</span> e <span className="text-primary font-semibold">innovación continua</span> para entregar proyectos que no solo funcionan, sino que generan valor real.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Me encanta aprender tecnologías nuevas, colaborar con equipos talentosos y resolver problemas complejos. Cada proyecto es una oportunidad para crecer.
            </p>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#proyectos"
                className="bg-primary text-black font-bold px-8 py-3 rounded-lg hover:bg-primary-dark transition text-center"
              >
                Ver Mis Proyectos
              </a>
              <a
                href="mailto:avilezaymar70@gmail.com"
                className="border-2 border-primary text-primary font-bold px-8 py-3 rounded-lg hover:bg-primary hover:text-black transition text-center"
              >
                Contactarme
              </a>
            </div>
          </div>
        </div>

        {/* Tarjetas de valores */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-dark-light rounded-xl p-6 border border-primary/30 text-center hover:border-primary transition">
            <FaCode className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Código Limpio</h3>
            <p className="text-gray-400 text-sm">Mantenible, escalable y documentado para facilitar colaboración.</p>
          </div>

          <div className="bg-dark-light rounded-xl p-6 border border-primary/30 text-center hover:border-primary transition">
            <FaLightbulb className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Innovación</h3>
            <p className="text-gray-400 text-sm">Siempre buscando nuevas formas de resolver problemas creativamente.</p>
          </div>

          <div className="bg-dark-light rounded-xl p-6 border border-primary/30 text-center hover:border-primary transition">
            <FaRocket className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Resultados</h3>
            <p className="text-gray-400 text-sm">Enfocado en entregar valor real y visible en cada proyecto.</p>
          </div>

          <div className="bg-dark-light rounded-xl p-6 border border-primary/30 text-center hover:border-primary transition">
            <FaGraduationCap className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Aprendizaje</h3>
            <p className="text-gray-400 text-sm">Comprometido con la mejora continua y dominio de nuevas tech.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

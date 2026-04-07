export default function Hero() {
  return (
    <section className="relative bg-black min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Brillo neón simulado */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[500px] h-[300px] bg-primary opacity-40 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 text-center pt-24 px-2 md:px-0">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          Desarrollador <span className="text-primary">Junior</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
          Creando experiencias web modernas y escalables con Python, React, Vue.js y Node.js.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
          {/* Botón para ir a la sección de proyectos */}
          <a
            href="#proyectos"
            className="bg-primary text-black font-bold px-8 py-3 rounded-2xl shadow-lg hover:bg-primary-dark transition"
          >
            Conoce mi trabajo
          </a>

          {/* Botón para descargar el CV */}
          <a
            href="/CV_Aymar_Aviles.pdf"
            download="CV_Aymar_Aviles.pdf"
            className="bg-white text-primary font-bold px-8 py-3 rounded-2xl shadow-lg hover:bg-gray-200 transition"
          >
            Descargar CV
          </a>
        </div>

        {/* Flecha para hacer scroll */}
        <a
          href="#sobre-mi"
          className="inline-block mt-8 animate-bounce text-primary text-3xl"
        >
          &#8595;
        </a>
      </div>
    </section>
  );
}

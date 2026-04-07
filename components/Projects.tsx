import Image from 'next/image'

const projects = [
  {
    id: 1,
    name: 'WaspBot',
    img: '/projects/project1.jpg',
    desc: 'Bot para WhatsApp desarrollado en Node.js y JavaScript que convierte imágenes a stickers con !s, y con !play permite buscar y enviar música como audio. Automación, respuesta a comandos y manejo de multimedia en tiempo real.',
    slug: 'waspbot'
  },
  {
    id: 2,
    name: 'MeloPatitas',
    img: '/projects/project2.png',
    desc: 'Desarrollo de un sistema web para la adopción y rescate de mascotas para la Fundación MeloPatitas. Gestión de mascotas, adopciones, donaciones, roles de usuario y publicaciones. Proyecto desarrollado con PHP, Bootstrap, JavaScript y SQL.',
    slug: 'melopatitas'
  },
  {
    id: 3,
    name: 'Nocion – Gestor de Hábitos',
    img: '/projects/project3.png',
    desc: 'Sistema web académico para la organización de hábitos, gestión de tareas y recordatorios con panel de métricas, reportes y calendario interactivo. Creado con PHP, JavaScript y Bootstrap.',
    slug: 'nocion'
  },
  {
    id: 4,
    name: 'HPO SHOP',
    img: '/projects/hposhop.png',
    desc: 'Demo de un catálogo interactivo con diseño moderno y vibrante. Explora productos de manera sencilla en esta aplicación.',
    slug: 'hpo-shop'
  },
  {
    id: 5,
    name: 'Waike',
    img: '/projects/waike-1.png',
    desc: 'Aplicación móvil de música. Descubre, escucha y crea tus playlists favoritas con una interfaz inmersiva.',
    slug: 'waike'
  }
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12">
          Mis <span className="text-primary">Proyectos</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="block-particles rounded-2xl shadow-xl border border-primary/30 overflow-hidden flex flex-col"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover select-none"
                  draggable={false}
                />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                <p className="flex-1 text-gray-300 mb-4">{p.desc}</p>
                <a
                  href={`/proyectos/${p.slug}`}
                  className="bg-primary text-black text-center font-semibold rounded-xl px-6 py-2 mt-auto hover:bg-primary-dark transition"
                >
                  Ver más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

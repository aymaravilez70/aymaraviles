/**
 * Datos del portafolio — Aymar Avilés
 */

export interface Project {
  id: string
  title: string
  category: string
  description: string
  details: string
  features: string[]
  tags: string[]
  color: string
  link: string
  github: string
  featured: string
  gallery: string[]
}

export const PORTFOLIO = {
  name: 'Aymar Avilés',
  title: 'Full Stack Developer & AI Workflow Architect',
  tagline:
    'Soluciones de software de alto impacto con React, Next.js, IA y automatización inteligente',
  email: 'avilezaymar70@gmail.com',
  location: 'Guayaquil, Ecuador',
  whatsapp: '+593 990069857',
  whatsappUrl: 'https://wa.me/593990069857',
  github: 'https://github.com/aymaravilez70',
  linkedin: 'https://linkedin.com/in/aymar-aviles-ronquillo',

  about: {
    heading: 'Sobre mí',
    paragraphs: [
      'Desarrollador web enfocado en crear soluciones de software de alto impacto con React, Next.js, Node.js y Python, integrando automatizaciones inteligentes con IA y n8n.',
      'Desde Guayaquil, Ecuador, combino desarrollo full stack con arquitectura de flujos automatizados, visión artificial y experiencias web inmersivas.',
    ],
  },

  stats: [
    { value: '7+', label: 'Proyectos' },
    { value: 'IA', label: 'Automatización' },
    { value: 'EC', label: 'Guayaquil' },
  ],

  skills: [
    { name: 'React 19 / Next.js 15', color: '#6b8cae' },
    { name: 'TypeScript', color: '#3d5a80' },
    { name: 'Node.js / Python / FastAPI', color: '#8b7355' },
    { name: 'n8n & Automatización IA', color: '#8b7fad' },
    { name: 'Three.js / R3F', color: '#5b4b7a' },
    { name: 'Tailwind CSS', color: '#7a6b8a' },
    { name: 'PostgreSQL / MySQL', color: '#6b8cae' },
    { name: 'WebSockets / REST APIs', color: '#8b7355' },
  ],

  projects: [
    {
      id: 'ecosort-ai',
      title: 'EcoSort AI',
      category: 'IA & Automatización',
      description:
        'Sistema de clasificación automatizada de excedentes con IA y visión artificial. Orquestado con n8n y microservicios en Python.',
      details:
        'Sistema de clasificación automatizada de productos excedentes con IA. Determina si un producto debe ser DONADO, RECICLADO o LIQUIDADO, optimizando el desvío de residuos y maximizando el impacto social y ambiental. Integrado con n8n para automatización completa del flujo de trabajo.',
      features: [
        'Clasificación con visión artificial',
        'Orquestación de flujos con n8n',
        'Microservicios en Python / FastAPI',
        'Dashboard web en Next.js',
      ],
      tags: ['Next.js', 'Python', 'n8n', 'Computer Vision', 'FastAPI'],
      color: '#6b8cae',
      link: 'https://peppy-griffin-bd26c2.netlify.app',
      github: 'https://github.com/aymaravilez70/ecosort-ai',
      featured: '/projects/ecosort-ai.png',
      gallery: ['/projects/ecosort-ai.png', '/projects/ecosort-n8n.png'],
    },
    {
      id: 'waspbot',
      title: 'WaspBot',
      category: 'IA & Automatización',
      description:
        'Bot para WhatsApp en Node.js con comandos en tiempo real, stickers y búsqueda de música.',
      details:
        'Bot para WhatsApp desarrollado en Node.js y JavaScript. Convierte imágenes a stickers con !s y permite buscar y enviar música con !play. Conexión vía código QR usando la API de WhatsApp Web.',
      features: [
        'Comando !s para stickers',
        'Comando !play para buscar música',
        'Conexión por QR',
        'Procesamiento en tiempo real',
      ],
      tags: ['Node.js', 'WhatsApp API', 'Automation', 'JavaScript'],
      color: '#8b7fad',
      link: '',
      github: 'https://github.com/aymaravilez70/WaspBot',
      featured: '/projects/WaspBot.png',
      gallery: [
        '/projects/project1.jpg',
        '/projects/WaspBot.png',
        '/projects/WaspBot1.png',
        '/projects/WaspBot2.png',
      ],
    },
    {
      id: 'melopatitas',
      title: 'MeloPatitas',
      category: 'Aplicaciones Web',
      description:
        'Plataforma web de rescate animal para gestión de adopciones, donaciones y fichas médicas.',
      details:
        'Sistema web para la gestión de adopción de mascotas en la Fundación MeloPatitas. Permite registrar, gestionar y dar seguimiento a mascotas, control de adopciones, usuarios, donaciones y publicaciones. Proyecto académico de responsabilidad social.',
      features: [
        'Gestión de mascotas y adopciones',
        'Panel administrativo',
        'Registro de donaciones',
        'Fichas médicas',
      ],
      tags: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Node.js'],
      color: '#5b4b7a',
      link: '',
      github: '',
      featured: '/projects/project2.png',
      gallery: [
        '/projects/project2.png',
        '/projects/melopatitas1.jpg',
        '/projects/melopatitas2.png',
        '/projects/melopatitas3.png',
        '/projects/melopatitas4.png',
        '/projects/melopatitas5.png',
      ],
    },
    {
      id: 'nocion',
      title: 'Nocion',
      category: 'Aplicaciones Web',
      description:
        'Suite de productividad con Pomodoro, hábitos diarios y calendario interactivo.',
      details:
        'Plataforma web de gestión del tiempo y productividad personal. Panel interactivo con estadísticas en tiempo real, temporizador Pomodoro, seguimiento de hábitos, reportes y notificaciones de calendario por correo. Desarrollado con PHP, JavaScript, Bootstrap y MySQL.',
      features: [
        'Temporizador Pomodoro',
        'Seguimiento de hábitos',
        'Reportes de productividad',
        'Notificaciones por email',
      ],
      tags: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
      color: '#8b7355',
      link: 'https://aymaravilez70.github.io/nocionn/',
      github: '',
      featured: '/projects/project3.png',
      gallery: [
        '/projects/nocion1.png',
        '/projects/nocion2.png',
        '/projects/nocion3.png',
        '/projects/nocion4.png',
      ],
    },
    {
      id: 'hpo-shop',
      title: 'HPO SHOP',
      category: 'Aplicaciones Web',
      description:
        'Catálogo e-commerce interactivo con filtros dinámicos y diseño moderno.',
      details:
        'Demo catálogo diseñada para mostrar productos de manera intuitiva y visualmente atractiva. Incluye galerías de productos, descripciones detalladas y diseño orientado a mejorar la experiencia del usuario.',
      features: [
        'Catálogo interactivo',
        'Filtros dinámicos',
        'Diseño responsive',
        'Arquitectura optimizada',
      ],
      tags: ['React', 'JavaScript', 'CSS Modules', 'REST API'],
      color: '#3d5a80',
      link: 'https://hpo-shop.vercel.app/',
      github: '',
      featured: '/projects/hposhop.png',
      gallery: ['/projects/hposhop.png', '/projects/hposhop-1.png'],
    },
    {
      id: 'waike',
      title: 'Waike Music',
      category: 'Sistemas & Móvil',
      description:
        'App de streaming musical con playlists inmersivas y control de audio fluido.',
      details:
        'Aplicación móvil de música para descubrir canciones, visualizar álbumes, organizar playlists personalizadas y disfrutar de la música con una interfaz moderna y fluida.',
      features: [
        'Streaming de audio',
        'Playlists personalizadas',
        'UI móvil fluida',
        'Exploración de álbumes',
      ],
      tags: ['React Native / Web', 'Audio API', 'UI/UX', 'Node.js'],
      color: '#7a6b8a',
      link: '',
      github: 'https://github.com/aymaravilez70/Waike',
      featured: '/projects/waike.jpg',
      gallery: [
        '/projects/waike-1.jpg',
        '/projects/waike-2.jpg',
        '/projects/waike-3.jpg',
        '/projects/waike-4.jpg',
      ],
    },
    {
      id: 'yale',
      title: 'Yale App',
      category: 'Sistemas & Móvil',
      description:
        'Reproducción sincronizada de audio y video en tiempo real vía WebSockets.',
      details:
        'Aplicación multiplataforma para reproducción de contenido multimedia en tiempo real. Permite unirse a salas y visualizar videos sincronizados con otros usuarios vía WebSockets.',
      features: [
        'Salas de video sincronizadas',
        'WebSockets full duplex',
        'Cliente web y móvil',
        'Servidor Node.js central',
      ],
      tags: ['WebSockets', 'Node.js', 'React', 'Full Duplex'],
      color: '#6b8cae',
      link: '',
      github: 'https://github.com/aymaravilez70/yale-app',
      featured: '/projects/yale.png',
      gallery: ['/projects/yale.png'],
    },
  ] satisfies Project[],

  experience: [
    {
      company: 'Alvirene Construcción & Ferretería',
      role: 'Vendedor & Control de Inventario Digital',
      period: 'Jun 2024 — Feb 2025',
    },
    {
      company: 'Farmacia Anthony',
      role: 'Especialista en Mantenimiento de Base de Datos',
      period: 'Ene 2024 — Jun 2024',
    },
    {
      company: 'Punto de Encuentro',
      role: 'Asistente de Soporte Técnico & Prácticas',
      period: 'Sep 2022 — Mar 2023',
    },
  ],

  social: [
    { name: 'GitHub', url: 'https://github.com/aymaravilez70', icon: 'github' },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/aymar-aviles-ronquillo',
      icon: 'linkedin',
    },
    { name: 'WhatsApp', url: 'https://wa.me/593990069857', icon: 'whatsapp' },
  ],

  nav: [
    { label: 'Inicio', href: '/#hero' },
    { label: 'Proyectos', href: '/#projects' },
    { label: 'Habilidades', href: '/#skills' },
    { label: 'Sobre mí', href: '/#about' },
    { label: 'Contacto', href: '/#contact' },
  ],
}

export function getProjectById(id: string): Project | undefined {
  return PORTFOLIO.projects.find((p) => p.id === id)
}

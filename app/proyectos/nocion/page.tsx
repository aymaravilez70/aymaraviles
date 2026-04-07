"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FaPhp, FaJsSquare, FaBootstrap, FaDatabase, FaCode } from "react-icons/fa"

export default function NocionPage() {
  const featured = "/projects/project3.png"
  const gallery = [
    "/projects/nocion1.png",
    "/projects/nocion2.png",
    "/projects/nocion3.png",
    "/projects/nocion4.png"
  ]
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 pt-32">
      <h1 className="text-4xl font-bold text-primary mb-1 flex items-center gap-3">
        <FaCode className="text-3xl text-primary" />
        NoCion
      </h1>

      <p className="text-gray-300 mb-4 text-lg">
        <span className="text-primary font-semibold">NoCion</span> es una plataforma web de gestión del tiempo y productividad personal.
        Permite al usuario administrar sus tareas, hábitos y eventos mediante un panel de control interactivo con estadísticas en tiempo real.
        Incluye un temporizador Pomodoro, seguimiento de hábitos diarios, generación de reportes de productividad, y notificaciones de calendario por correo electrónico.
        Todo el sistema fue desarrollado con <span className="text-primary font-semibold">PHP</span>, <span className="text-primary font-semibold">JavaScript</span>,
        <span className="text-primary font-semibold"> Bootstrap</span> y <span className="text-primary font-semibold">MySQL</span>.
      </p>

      <div className="rounded-xl border-2 border-primary shadow-xl mb-10 overflow-hidden flex justify-center h-72 md:h-96">
        <Image
          src={featured}
          alt="Panel principal de NoCion"
          width={700}
          height={400}
          className="object-cover w-full h-full rounded-lg"
          priority
        />
      </div>

      {/* Galería */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-primary mb-3">Galería</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {gallery.map((img, idx) => (
            <button
              key={idx}
              className="group aspect-[4/3] w-full rounded-xl overflow-hidden relative bg-dark-light shadow hover:scale-105 focus:outline-none transition-all"
              onClick={() => setModalImg(img)}
              title="Ver grande"
              type="button"
            >
              <div className="relative w-full h-full min-h-[100px]">
                <Image
                  src={img}
                  alt={`nocion-galeria-${idx}`}
                  fill
                  className="object-cover w-full h-full transition-opacity duration-200 group-hover:opacity-80"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Ampliar
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          <div className="relative max-w-md w-full mx-4">
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full px-2 py-1 text-lg font-bold shadow"
              onClick={() => setModalImg(null)}
              type="button"
            >
              ×
            </button>
            <Image
              src={modalImg}
              alt="Imagen ampliada"
              width={720}
              height={540}
              className="w-full h-auto max-h-[60vh] rounded-xl shadow-lg object-contain"
              priority
            />
          </div>
        </div>
      )}

      {/* Características principales */}
      <div className="mb-10 space-y-4">
        <h2 className="text-2xl text-white font-bold mb-2">Características clave</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Gestión de tareas con opciones para agregar, editar y marcar como completadas.</li>
          <li>Seguimiento de hábitos diarios con registro automático en base de datos.</li>
          <li>Temporizador Pomodoro con música de fondo para sesiones de enfoque.</li>
          <li>Panel de control con métricas de productividad y hábitos completados.</li>
          <li>Calendario con notificaciones por correo electrónico para próximos eventos.</li>
          <li>Reportes automáticos generados con gráficos usando Chart.js.</li>
          <li>Interfaz moderna y responsive construida con Bootstrap y JavaScript.</li>
        </ul>
      </div>

      {/* Tecnologías usadas */}
      <div className="mb-8">
        <h2 className="text-2xl text-white font-bold mb-2">Tecnologías usadas</h2>
        <div className="flex gap-6 text-4xl text-primary items-center">
          <span title="HTML"><FaCode /></span>
          <span title="Bootstrap"><FaBootstrap /></span>
          <span title="JavaScript"><FaJsSquare /></span>
          <span title="PHP"><FaPhp /></span>
          <span title="SQL / MySQL"><FaDatabase /></span>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/aymaravilez70/NoCion"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-black font-bold px-8 py-3 rounded-lg hover:bg-primary-dark transition"
        >
          Ver Código
        </a>
      </div>
    </section>
  )
}

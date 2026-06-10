"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FaReact, FaMobileAlt, FaNodeJs, FaVideo } from "react-icons/fa"

export default function YalePage() {
  const featured = "/projects/yale.png"
  const gallery = [
    "/projects/waike-1.jpg",
    "/projects/waike-2.jpg",
    "/projects/waike-3.jpg",
    "/projects/waike-4.jpg"
  ] // We can leave the waike placeholders or empty for now if there are no yale screenshots
  const [modalImg, setModalImg] = useState<string | null>(null)

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 pt-32">
      <h1 className="text-4xl font-bold text-primary mb-1 flex items-center gap-3">
        <FaVideo className="text-3xl text-primary" />
        Yale App
      </h1>
      <p className="text-gray-300 mb-4 text-lg">
        Aplicación multiplataforma para la reproducción de contenido multimedia en tiempo real. Yale App permite a los usuarios unirse a salas y visualizar videos de forma sincronizada con otros usuarios, con clientes web y móviles conectados a un servidor central a través de WebSockets.
      </p>

      {/* Imagen Principal */}
      <div className="rounded-xl border-2 border-primary shadow-xl mb-10 overflow-hidden flex justify-center bg-dark-light">
        <div className="relative w-full h-[500px] md:h-[600px]">
          <Image
            src={featured}
            alt="Portada principal de Yale App"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Galería */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-primary mb-3">Capturas de Pantalla (Próximamente)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {gallery.map((img, idx) => (
            <button
              key={idx}
              className="group aspect-[9/16] w-full rounded-xl overflow-hidden relative bg-black shadow hover:scale-105 focus:outline-none transition-all border border-gray-800"
              onClick={() => setModalImg(img)}
              title="Ver grande"
              type="button"
            >
              <div className="relative w-full h-full min-h-[200px]">
                <Image
                  src={img}
                  alt={`yale-galeria-${idx}`}
                  fill
                  className="object-cover w-full h-full transition-opacity duration-200 group-hover:opacity-80"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImg(null)}
        >
          <div className="relative w-full max-w-sm h-full max-h-[85vh]">
            <button
              className="absolute -top-10 right-0 bg-white text-black rounded-full px-3 py-1 text-lg font-bold shadow z-10"
              onClick={() => setModalImg(null)}
              type="button"
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={modalImg}
                alt="Imagen ampliada"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Características principales */}
      <div className="mb-10 space-y-4">
        <h2 className="text-2xl text-white font-bold mb-2">Características clave</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Sincronización de reproducción de video en tiempo real.</li>
          <li>Soporte multiplataforma: Cliente Web (React) y Móvil (React Native).</li>
          <li>Comunicación bidireccional de baja latencia usando WebSockets (Socket.io).</li>
          <li>Integración con APIs para obtención y reproducción de videos.</li>
        </ul>
      </div>

      {/* Tecnologías usadas */}
      <div className="mb-8">
        <h2 className="text-2xl text-white font-bold mb-2">Tecnologías usadas</h2>
        <div className="flex gap-6 text-4xl text-primary items-center">
          <span title="React"><FaReact /></span>
          <span title="React Native / Expo"><FaMobileAlt /></span>
          <span title="Node.js & Express"><FaNodeJs /></span>
        </div>
      </div>

      {/* Botón de código fuente */}
      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/aymaravilez70/yale-app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-black font-bold px-8 py-3 rounded-lg hover:bg-primary-dark transition"
        >
          Ver Código en GitHub
        </a>
      </div>
    </section>
  )
}

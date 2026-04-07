"use client"

import { useState } from 'react'
import Image from 'next/image'
import { FaNodeJs, FaJsSquare, FaWhatsapp } from "react-icons/fa"
import { FaRobot } from "react-icons/fa"

export default function WaspBotPage() {
  const gallery = [
    "/projects/project1.jpg",
    "/projects/WaspBot.png",
    "/projects/WaspBot1.png",
    "/projects/WaspBot2.png"
  ]

  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 pt-32">
    <h1 className="text-4xl font-bold text-primary mb-1 flex items-center gap-2">
      <FaRobot className="text-5xl text-primary" />
      WaspBot
    </h1>   
   <p className="text-gray-300 mb-4 text-lg">
        Bot para WhatsApp desarrollado en <span className="text-primary font-semibold">Node.js</span> y <span className="text-primary font-semibold">JavaScript</span>. Convierte imágenes a stickers con <span className="font-bold">!s</span> y permite buscar y enviar música en formato de audio con <span className="font-bold">!play</span>. 
        Su conexión se realiza escaneando un <span className="text-primary font-semibold">código QR</span> para vincularlo al número de WhatsApp del usuario, utilizando la API de <span className="font-semibold">WhatsApp Web</span>.
      </p>

      {/* Imagen principal */}
      <div className="rounded-xl border border-primary/30 shadow-xl mb-10 overflow-hidden flex justify-center">
        <Image
          src={gallery[0]}
          alt="Demo WaspBot"
          width={600}
          height={300}
          className="object-contain rounded-lg shadow"
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
            >
              <Image
                src={img}
                alt={`waspbot-galeria-${idx}`}
                fill
                className="object-cover w-full h-full transition-opacity duration-200 group-hover:opacity-80"
              />
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Ampliar
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal para ampliar imágenes */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          <div className="relative max-w-md w-full mx-4">
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full px-2 py-1 text-lg font-bold shadow"
              onClick={() => setModalImg(null)}
            >
              ×
            </button>
            <Image
              src={modalImg}
              alt="Imagen ampliada"
              width={480}
              height={360}
              className="w-full h-auto max-h-[70vh] rounded-xl shadow-lg object-contain bg-black"
            />
          </div>
        </div>
      )}

      {/* Características principales */}
      <div className="mb-10 space-y-4">
        <h2 className="text-2xl text-white font-bold mb-2">Características principales</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Conexión mediante escaneo de <span className="text-primary font-semibold">código QR</span> para vincular el bot con WhatsApp Web.</li>
          <li>Comando <span className="text-primary font-semibold">!s</span>: Convierte imágenes enviadas en stickers automáticamente.</li>
          <li>Comando <span className="text-primary font-semibold">!play [nombre canción]</span>: Busca en YouTube y envía el audio de la canción solicitada.</li>
          <li>Procesamiento en tiempo real de mensajes, imágenes y archivos multimedia.</li>
          <li>Responde tanto en chats privados como en grupos.</li>
          <li>Sistema modular, permitiendo añadir comandos personalizados.</li>
          <li>Integración con APIs externas para ampliar funcionalidades.</li>
        </ul>
      </div>

      {/* Tecnologías usadas */}
      <div className="mb-8">
        <h2 className="text-2xl text-white font-bold mb-2">Tecnologías usadas</h2>
        <div className="flex gap-6 text-4xl text-primary items-center">
          <span title="Node.js"><FaNodeJs /></span>
          <span title="JavaScript"><FaJsSquare /></span>
          <span title="WhatsApp Web"><FaWhatsapp /></span>
        </div>
      </div>

      {/* Botón de código fuente */}
      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/aymaravilez70/WaspBot.git"
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

"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FaReact, FaStore } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

export default function HpoShopPage() {
  const featured = "/projects/hposhop.png" // The uploaded image
  const gallery = [
    "/projects/hposhop.png",
    "/projects/hposhop-1.png"   // Foto 1


  ]
  const [modalImg, setModalImg] = useState<string | null>(null)

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 pt-32">
      <h1 className="text-4xl font-bold text-primary mb-1 flex items-center gap-3">
        <FaStore className="text-3xl text-primary" />
        HPO SHOP
      </h1>
      <p className="text-gray-300 mb-4 text-lg">
        HPO SHOP es una Demo Catálogo diseñada para mostrar productos de manera intuitiva y visualmente atractiva. Incluye galerías de productos, descripciones detalladas y un diseño moderno orientado a mejorar la experiencia del usuario y potenciar las ventas en un entorno digital.
      </p>

      <div className="rounded-xl border-2 border-primary shadow-xl mb-10 overflow-hidden flex justify-center h-72 md:h-96">
        <Image
          src={featured}
          alt="Portada principal de HPO SHOP"
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
                  alt={`hposhop-galeria-${idx}`}
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

      {/* Modal para imagen ampliada */}
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
          <li>Catálogo interactivo con diseño responsive.</li>
          <li>Galerías de productos de alta resolución y descripciones integradas.</li>
          <li>Interfaz orientada a brindar una experiencia de usuario (UX) óptima.</li>
          <li>Arquitectura optimizada para un rendimiento rápido en dispositivos móviles y de escritorio.</li>
        </ul>
      </div>

      {/* Tecnologías usadas */}
      <div className="mb-8">
        <h2 className="text-2xl text-white font-bold mb-2">Tecnologías usadas</h2>
        <div className="flex gap-6 text-4xl text-primary items-center">
          <span title="React"><FaReact /></span>
          <span title="Next.js"><SiNextdotjs /></span>
          <span title="Tailwind CSS"><SiTailwindcss /></span>
        </div>
      </div>

      {/* Botón de enlace al proyecto */}
      <div className="flex gap-4 mt-8">
        <a
          href="https://hpo-shop.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-black font-bold px-8 py-3 rounded-lg hover:bg-primary-dark transition"
        >
          Ver Proyecto
        </a>
      </div>
    </section>
  )
}

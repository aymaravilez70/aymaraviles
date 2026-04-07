"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FaPhp, FaJsSquare, FaDatabase, FaBootstrap } from "react-icons/fa"
import { GiCat, GiDogHouse } from "react-icons/gi"

export default function MeloPatitasPage() {
  const featured = "/projects/project2.png" // Cambia por tu imagen real principal
  const gallery = [
    "/projects/project2.png",
    "/projects/melopatitas1.jpg",
    "/projects/melopatitas2.png",
    "/projects/melopatitas3.png",
    "/projects/melopatitas4.png",
    "/projects/melopatitas5.png"

  ]
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 pt-32">
      <h1 className="text-4xl font-bold text-primary mb-1 flex items-center gap-3">
        <GiCat className="text-3xl text-primary" />
        MeloPatitas
        <GiDogHouse className="text-3xl text-primary" />
      </h1>
      <p className="text-gray-300 mb-4 text-lg">
        Sistema web para la gestión de adopción de mascotas en la Fundación MeloPatitas. Permite registrar, gestionar y dar seguimiento a mascotas disponibles, control de adopciones, registros de usuarios, donaciones y administración de publicaciones. Proyecto académico enfocado en responsabilidad social y transformación digital de procesos de rescate animal.
      </p>

      <div className="rounded-xl border-2 border-primary shadow-xl mb-10 overflow-hidden flex justify-center h-72 md:h-96">
        <Image
          src={featured}
          alt="Portada principal de MeloPatitas"
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
                  alt={`melopatitas-galeria-${idx}`}
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
          <li>Gestión integral de mascotas: registro, estado de adopción y ficha detallada.</li>
          <li>Panel administrativo para usuarios: roles, seguimiento y validación de solicitudes.</li>
          <li>Módulo de donaciones y apoyo comunitario.</li>
          <li>Publicaciones y noticias sobre rescates y adopciones.</li>
          <li>Reportes de adopciones exitosas, donaciones y actividad de la fundación.</li>
          <li>Interfaz adaptada a dispositivos móviles.</li>
        </ul>
      </div>

      {/* Tecnologías usadas */}
      <div className="mb-8">
        <h2 className="text-2xl text-white font-bold mb-2">Tecnologías usadas</h2>
        <div className="flex gap-6 text-4xl text-primary items-center">
          <span title="PHP"><FaPhp /></span>
          <span title="Bootstrap"><FaBootstrap /></span>
          <span title="JavaScript"><FaJsSquare /></span>
          <span title="SQL / MySQL"><FaDatabase /></span>
        </div>
      </div>

      {/* Botón de código fuente */}
      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/tuusuario/melopatitas"
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

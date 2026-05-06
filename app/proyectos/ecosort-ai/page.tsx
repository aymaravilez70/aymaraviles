"use client"

import { useState } from 'react'
import Image from 'next/image'
import { FaPython, FaJsSquare, FaRobot } from "react-icons/fa"
import { SiN8N, SiFastapi } from "react-icons/si"

export default function EcoSortAIPage() {
  const gallery = [
    "/projects/ecosort-ai.png",
    "/projects/ecosort-n8n.png"
  ]

  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 pt-32">
    <h1 className="text-4xl font-bold text-primary mb-1 flex items-center gap-2">
      <FaRobot className="text-5xl text-primary" />
      EcoSort AI
    </h1>   
   <p className="text-gray-300 mb-4 text-lg">
        Sistema de clasificacion automatizada de productos excedentes con <span className="text-primary font-semibold">IA</span>. 
        Determina si un producto debe ser <span className="font-bold text-green-400">DONADO</span>, <span className="font-bold text-blue-400">RECICLADO</span> o <span className="font-bold text-yellow-400">LIQUIDADO</span>, 
        optimizando el desvio de residuos y maximizando el impacto social y ambiental. 
        Integrado con <span className="text-primary font-semibold">n8n</span> para automatizacion completa del flujo de trabajo.
      </p>

      {/* Imagen principal */}
      <div className="rounded-xl border border-primary/30 shadow-xl mb-10 overflow-hidden flex justify-center">
        <Image
          src={gallery[0]}
          alt="EcoSort AI - Dashboard"
          width={600}
          height={300}
          className="object-contain rounded-lg shadow"
        />
      </div>

      {/* Galeria */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-primary mb-3">Galeria</h2>
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
                alt={`ecosort-galeria-${idx}`}
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

      {/* Modal para ampliar imagenes */}
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
              x
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

      {/* Arquitectura */}
      <div className="mb-10 space-y-4">
        <h2 className="text-2xl text-white font-bold mb-2">Arquitectura del Sistema</h2>
        <div className="bg-gray-800/50 rounded-xl p-6 border border-primary/20">
          <pre className="text-gray-300 text-sm leading-relaxed">
{`[Formulario Web] --> [Webhook n8n] --> [FastAPI - Clasificacion IA]
                                              |
                                      [Airtable - Almacenamiento]
                                              |
                                      [Slack - Notificacion]`}
          </pre>
        </div>
      </div>

      {/* Caracteristicas principales */}
      <div className="mb-10 space-y-4">
        <h2 className="text-2xl text-white font-bold mb-2">Caracteristicas principales</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Clasificacion inteligente: <span className="text-primary font-semibold">DONAR</span>, <span className="text-primary font-semibold">RECICLAR</span> o <span className="text-primary font-semibold">LIQUIDAR</span> con porcentaje de confianza.</li>
          <li>Automatizacion con <span className="text-primary font-semibold">n8n</span>: workflow visual con webhook, llamada a API y respuesta formateada.</li>
          <li>API REST con <span className="text-primary font-semibold">FastAPI</span>: endpoints para clasificacion, productos, estadisticas y webhook n8n.</li>
          <li>Dashboard en tiempo real con metricas de impacto ambiental (CO2 ahorrado, peso desviado).</li>
          <li>Frontend responsive con formulario de registro y tabla de productos recientes.</li>
          <li>Deploy en produccion: <span className="text-primary font-semibold">Netlify</span> (frontend) + <span className="text-primary font-semibold">Render</span> (backend).</li>
          <li>Extensible: preparado para conectar OpenAI/Claude, Airtable y Slack.</li>
        </ul>
      </div>

      {/* Tecnologias usadas */}
      <div className="mb-8">
        <h2 className="text-2xl text-white font-bold mb-2">Tecnologias usadas</h2>
        <div className="flex gap-6 text-4xl text-primary items-center flex-wrap">
          <span title="Python"><FaPython /></span>
          <span title="JavaScript"><FaJsSquare /></span>
          <span title="FastAPI" className="text-2xl font-bold">FastAPI</span>
          <span title="n8n" className="text-2xl font-bold">n8n</span>
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-4 mt-8 flex-wrap">
        <a
          href="https://peppy-griffin-bd26c2.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-black font-bold px-8 py-3 rounded-lg hover:bg-primary-dark transition"
        >
          Ver Demo
        </a>
        <a
          href="https://github.com/aymaravilez70/ecosort-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-primary text-primary font-bold px-8 py-3 rounded-lg hover:bg-primary hover:text-black transition"
        >
          Ver Codigo
        </a>
      </div>
    </section>
  )
}

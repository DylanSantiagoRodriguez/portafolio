'use client'

import Link from "next/link"
import Image from "next/image"
import { FaHome, FaFileCode, FaNetworkWired, FaJava, FaPython, FaVuejs, FaNodeJs } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="border-b border-gray-200 py-3 px-4">
        <nav className="flex items-center space-x-4">
          <Link href="/" className="font-medium">
            Portfolio
          </Link>
          <Link href="/home" className="flex items-center space-x-1">
            <FaHome className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link href="/proyectos" className="flex items-center space-x-1">
            <FaFileCode className="w-4 h-4" />
            <span>Proyectos</span>
          </Link>
          <Link href="/experiencia" className="flex items-center space-x-1">
            <FaNetworkWired className="w-4 h-4" />
            <span>Experiencia</span>
          </Link>
        </nav>
      </header>

      {/* Contenido principal */}
      <section className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Sección de perfil principal */}
        <article className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Columna izquierda: Foto de perfil y nombre */}
          <section className="space-y-8">
            {/* Foto de perfil */}
            <figure className="flex justify-center">
              <picture className="w-64 h-64 bg-gray-300 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Foto de perfil"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </picture>
            </figure>
            
            {/* Información personal */}
            <header className="text-center">
              <h2 className="text-lg font-medium mb-2 text-gray-600">Ingeniero de software</h2>
              <h1 className="text-3xl font-bold mb-4 text-gray-900">Dylan Santiago Rodríguez Portilla</h1>
            </header>
          </section>

          {/* Columna derecha: Sobre mí */}
          <article className="bg-gray-50 rounded-lg p-6 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Sobre mí</h2>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Soy un desarrollador junior con experiencia en python, java y vue, actual estudiante de la universidad
              cooperativa de colombia cursante del quinto semestre con experiencia laboral en java, springboot y vue,
              tengo un nivel b2 en ingles, con certificación en CI&T y diploma de eficiencia en ingles en vipri universidad de
              nariño.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Como parte de mis hobbies esta tocar guitarra, jugar ping pong, los videojuegos y el baloncesto, como
              actividades recreativas me gusta dibujar y salir a caminar.
            </p>
          </article>
        </article>

        {/* Grid de secciones restantes */}
        <section className="space-y-8">
          {/* Sección de contacto - ancho completo */}
          <article className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Contactos</h2>
            <address className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm not-italic">
              <span className="text-gray-700">dylansantiagorodriguez.p@gmail.com</span>
              <span className="text-gray-700">3168895127</span>
              <span className="text-gray-700">
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/dylan-rodriguez-305448265" className="text-teal-500 hover:underline">
                  https://www.linkedin.com/in/dylan-rodriguez-305448265
                </a>
              </span>
              <span className="text-gray-700">GitHub: DylanSantiagoRodriguez</span>
            </address>
          </article>

          {/* Segunda fila: CV y Conocimientos */}
          <section className="grid md:grid-cols-2 gap-8">
            {/* Sección CV */}
            <article className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Descargar CV</h2>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Descargar PDF
              </button>
            </article>

            {/* Sección de conocimientos */}
            <article className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Mis Conocimientos</h2>
              <ul className="grid grid-cols-3 gap-6">
                <li className="flex flex-col items-center text-center">
                  <FaJava className="w-12 h-12 text-teal-500 mb-2" />
                  <span className="text-xs text-gray-600">Nivel medio</span>
                </li>
                <li className="flex flex-col items-center text-center">
                  <FaPython className="w-12 h-12 text-teal-500 mb-2" />
                  <span className="text-xs text-gray-600">Nivel medio</span>
                </li>
                <li className="flex flex-col items-center text-center">
                  <FaVuejs className="w-12 h-12 text-teal-500 mb-2" />
                  <span className="text-xs text-gray-600">Nivel medio</span>
                </li>
                <li className="flex flex-col items-center text-center">
                  <SiTypescript className="w-12 h-12 text-teal-500 mb-2" />
                  <span className="text-xs text-gray-600">Nivel medio</span>
                </li>
                <li className="flex flex-col items-center text-center">
                  <FaNodeJs className="w-12 h-12 text-teal-500 mb-2" />
                  <span className="text-xs text-gray-600">Nivel medio</span>
                </li>
              </ul>
            </article>
          </section>
        </section>
      </section>
    </main>
  )
}

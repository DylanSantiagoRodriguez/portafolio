import Link from "next/link"
import Image from "next/image"
import { FaHome, FaFileCode, FaNetworkWired } from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"
import ParticleBackground from "./ParticleBackground"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors relative">
      {/* Fondo de partículas */}
      <ParticleBackground particleCount={45} />
      
      {/* Navbar */}
      <header className="border-b border-gray-200 dark:border-gray-700 py-3 px-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative z-10">
        <nav className="flex items-center justify-between">
          <section className="flex items-center space-x-4">
            <Link href="/" className="font-medium text-gray-900 dark:text-gray-100">
              Portfolio
            </Link>
            <Link href="/home" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400">
              <FaHome className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link href="/proyectos" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400">
              <FaFileCode className="w-4 h-4" />
              <span>Proyectos</span>
            </Link>
            <Link href="/experiencia" className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400">
              <FaNetworkWired className="w-4 h-4" />
              <span>Experiencia</span>
            </Link>
          </section>
          <ThemeToggle />
        </nav>
      </header>

      {/* Contenido principal */}
      <section className="container mx-auto px-4 py-8 relative z-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Experiencia</h1>
          <p className="text-gray-600 dark:text-gray-400">Trayectoria profesional y roles en empresas.</p>
        </header>

        {/* Tabs */}
        <nav className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <button className="px-4 py-2 font-medium text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100">Experiencia</button>
        </nav>

        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Empresas</h2>

        {/* Lista de experiencias */}
        <a 
          href="https://portal.kamilainnovation.com.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg overflow-hidden mb-8 shadow-sm hover:shadow-md hover:border hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 cursor-pointer">
            <section className="p-6 flex items-start gap-4">
              <figure className="flex-shrink-0">
                <picture className="w-12 h-12 bg-red-100/90 dark:bg-red-900/30 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Logo Kamila Innovation"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </figure>
              <section className="flex-grow">
                <header className="flex justify-between items-start">
                  <section>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Kamila Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-400">Desarrollador Front y Back - marzo 2025 - Actualidad</p>
                  </section>
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Enlace externo">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <path d="M15 3h6v6" />
                    <path d="M10 14L21 3" />
                  </svg>
                </header>
              </section>
            </section>
          </article>
        </a>
      </section>
    </main>
  )
}

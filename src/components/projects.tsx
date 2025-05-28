import Link from "next/link"
import Image from "next/image"
import { FaHome, FaFileCode, FaNetworkWired } from "react-icons/fa"

function ProjectsPage() {
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
      <section className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Proyectos</h1>
          <p className="text-gray-600">Selección de proyectos destacados y colaboraciones.</p>
        </header>

        {/* Tabs */}
        <nav className="border-b border-gray-200 mb-8">
          <button className="px-4 py-2 font-medium text-gray-900 border-b-2 border-gray-900">Proyectos</button>
        </nav>

        <h2 className="text-2xl font-bold mb-6">Proyectos destacados</h2>

        {/* Grid de proyectos */}
        <section className="grid md:grid-cols-2 gap-6">
          <article className="bg-gray-50 rounded-lg p-6">
            <figure className="mb-4 rounded-lg overflow-hidden bg-white shadow-sm">
              <iframe
                src="https://loginar.vercel.app/"
                className="w-full h-48 border-0"
                title="Preview de Loginar"
                loading="lazy"
              />
            </figure>
            <h3 className="text-xl font-bold mb-2">Loginar</h3>
            <p className="text-gray-600 mb-4">Gestión inventario potenciado con AI desarrollado en VUE.</p>
            <section className="flex space-x-3">
              <a
                href="https://loginar.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Ver proyecto
              </a>
              <a
                href="#"
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors"
              >
                GitHub
              </a>
            </section>
          </article>
        </section>
      </section>
    </main>
  )
}

export default ProjectsPage

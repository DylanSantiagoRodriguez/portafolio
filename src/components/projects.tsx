import Link from "next/link"
import { FaHome, FaFileCode, FaNetworkWired } from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"
import ParticleBackground from "./ParticleBackground"

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors relative">
      {/* Fondo de partículas */}
      <ParticleBackground particleCount={50} />
      
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
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Proyectos</h1>
          <p className="text-gray-600 dark:text-gray-400">Selección de proyectos destacados y colaboraciones.</p>
        </header>

        {/* Tabs */}
        <nav className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <button className="px-4 py-2 font-medium text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100">Proyectos</button>
        </nav>

        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Proyectos destacados</h2>

        {/* Grid de proyectos */}
        <section className="grid md:grid-cols-2 gap-6">
          <article className="bg-gray-50/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-6">
            <figure className="mb-4 rounded-lg overflow-hidden bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm shadow-sm">
              <iframe
                src="https://loginar.vercel.app/"
                className="w-full h-48 border-0"
                title="Preview de Loginar"
                loading="lazy"
              />
            </figure>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Loginar</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Gestión inventario potenciado con AI desarrollado en VUE.</p>
            <section className="flex space-x-3">
              <a
                href="https://loginar.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Ver proyecto
              </a>
              <a
                href="https://github.com/T0m4s1n/loginar"
                className="bg-white/90 border border-gray-300 hover:bg-gray-50 dark:bg-gray-700/90 dark:border-gray-600 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-md transition-colors backdrop-blur-sm"
              >
                GitHub
              </a>
            </section>
          </article>

          <article className="bg-gray-50/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-6">
            <figure className="mb-4 rounded-lg overflow-hidden bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm shadow-sm">
              <iframe
                src="https://white-sand-08e1fda0f.6.azurestaticapps.net/"
                className="w-full h-48 border-0"
                title="Preview de Resolution"
                loading="lazy"
              />
            </figure>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Resolution</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Gestion de solicitudes y reclamos con Django y Next.js</p>
            <section className="flex space-x-3">
              <a
                href="https://white-sand-08e1fda0f.6.azurestaticapps.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Ver proyecto
              </a>
              <a
                href="https://github.com/migueltovarb/ISWElectiva110202-3"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 border border-gray-300 hover:bg-gray-50 dark:bg-gray-700/90 dark:border-gray-600 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-md transition-colors backdrop-blur-sm"
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

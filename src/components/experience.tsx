import Link from "next/link"
import Image from "next/image"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="border-b border-gray-200 py-3 px-4">
        <nav className="flex items-center space-x-4">
          <Link href="/" className="font-medium">
            Mi Portfolio
          </Link>
          <Link href="/home" className="flex items-center space-x-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path d="M9 22V12h6v10" />
            </svg>
            <span>Home</span>
          </Link>
          <Link href="/proyectos" className="flex items-center space-x-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z" />
            </svg>
            <span>Proyectos</span>
          </Link>
          <Link href="/experiencia" className="flex items-center space-x-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
            </svg>
            <span>Experiencia</span>
          </Link>
        </nav>
      </header>

      {/* Contenido principal */}
      <section className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Experiencia</h1>
          <p className="text-gray-600">Trayectoria profesional y roles en empresas.</p>
        </header>

        {/* Tabs */}
        <nav className="border-b border-gray-200 mb-8">
          <button className="px-4 py-2 font-medium text-gray-900 border-b-2 border-gray-900">Experiencia</button>
        </nav>

        <h2 className="text-2xl font-bold mb-6">Empresas</h2>

        {/* Lista de experiencias */}
        <article className="bg-white border rounded-lg overflow-hidden mb-8">
          <section className="p-6 flex items-start gap-4">
            <figure className="flex-shrink-0">
              <picture className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Logo Kamininnovation"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </picture>
            </figure>
            <section className="flex-grow">
              <header className="flex justify-between items-start">
                <section>
                  <h3 className="text-lg font-bold">Kamininnovation</h3>
                  <p className="text-gray-600">Desarrollador Front y Back - marzo 2025 - Actualidad</p>
                </section>
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Enlace externo">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                </svg>
              </header>
            </section>
          </section>
        </article>
      </section>
    </main>
  )
}

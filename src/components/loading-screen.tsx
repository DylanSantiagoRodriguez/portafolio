"use client"

import Link from "next/link"
import TechIcons from "./TechIcons"

export default function LoadingScreen() {
  return (
    <main className="relative min-h-screen w-full bg-white dark:bg-gray-900 transition-colors overflow-hidden flex items-center justify-center">
      <TechIcons />

      {/* Tarjeta central */}
      <article className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-10 w-full max-w-2/4 mx-auto z-10">
        <header className="text-center">
          <h1 className="text-5xl font-bold text-teal-500 dark:text-teal-400 mb-4">Soy Dylan Rodríguez</h1>
          <p className="text-gray-500 dark:text-gray-400 text-xl mb-8">Bienvenido a mi portafolio</p>
        </header>
        <section className="flex justify-center">
          <Link href="/home">
            <button className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Explorar Portafolio
            </button>
          </Link>
        </section>
      </article>
    </main>
  )
}

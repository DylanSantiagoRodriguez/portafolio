"use client"

import { useEffect } from "react"
import Link from "next/link"
import TechIcons from "./TechIcons"

export default function LoadingScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {}, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center">
      <TechIcons />

      {/* Tarjeta central */}
      <article className="bg-white opacity-80 rounded-lg shadow-lg p-10 w-full max-w-1/4 mx-auto z-10">
        <header className="text-center">
          <h1 className="text-5xl font-bold text-teal-500 mb-4">Dylan Rodríguez</h1>
          <p className="text-gray-500 text-xl mb-8">Bienvenido a mi portafolio</p>
        </header>
        <section className="flex justify-center">
          <Link href="/home">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Explorar Portafolio
            </button>
          </Link>
        </section>
      </article>
    </main>
  )
}

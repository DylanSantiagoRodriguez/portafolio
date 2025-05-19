"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import TechIcons from "./TechIcons"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center">
      <TechIcons />

      {/* Tarjeta central */}
      <div className="bg-white opacity-80 rounded-lg shadow-lg p-10 w-full max-w-1/4 mx-auto z-10">
        <h1 className="text-5xl font-bold text-center text-teal-500 mb-4">Dylan Rodríguez</h1>
        <p className="text-gray-500 text-center text-xl mb-8">Bienvenido a mi portafolio</p>
        <div className="flex justify-center">
          <Link href="/home">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Explorar Portafolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

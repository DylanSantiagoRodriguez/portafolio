"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "@/components/loading-screen"
import HomePage from "@/components/home_page"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <main>
        <LoadingScreen />
      </main>
    )
  }

  return (
    <main>
      <HomePage />
    </main>
  )
}

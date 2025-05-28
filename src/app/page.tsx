"use client"

import { useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import HomePage from "@/components/home_page"

export default function Home() {
  const [showLoading, setShowLoading] = useState(true)

  if (showLoading) {
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

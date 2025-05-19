"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "../components/loading-screen"
import { FaBeer } from "react-icons/fa"
//import HomePage from "../components/home-page"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  
  return <main>loading ? <LoadingScreen /> : <h3> Lets go for a <FaBeer />? </h3> </main>
}

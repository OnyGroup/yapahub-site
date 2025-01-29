import type React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/images/Logo.svg" alt="Yapa Hub Logo" width="118" height="38" />
      </div>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-white" />}
      </button>
    </header>
  )
}

export default Header


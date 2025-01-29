import type React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <header className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/images/Logo.svg" alt="Yapa Hub Logo" width="118" height="38" />
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 light:bg-yapa-dark/10 light:hover:bg-yapa-dark/20"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-yapa-dark" />}
      </button>
    </header>
  )
}

export default Header


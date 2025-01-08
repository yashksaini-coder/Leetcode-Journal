"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      
      <Sun className={`h-5 w-5 text-black-500 transition-all duration-500 ease-in-out transform ${
          theme === "dark" ? "rotate-180 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
        }`}
      />
      
      <Moon className={`absolute h-5 w-5 text-white-700 transition-all duration-500 ease-in-out transform ${
          theme === "light" ? "rotate-0 opacity-0 scale-0" : "rotate-120 opacity-100 scale-100"
        }`}
      />
    </Button>
  )
}

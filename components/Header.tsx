'use client'

import { Github, Linkedin, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-semibold gradient-text">
            Portfolio
          </a>
          
          <nav className="flex items-center space-x-6">
            <a href="#projekty" className="text-sm hover:text-primary transition-colors">
              Projekty
            </a>
            <a href="#ai" className="text-sm hover:text-primary transition-colors">
              AI
            </a>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-accent rounded-full transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}


'use client'

import { Code, Briefcase, Moon, Sun, Globe } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="bg-background/80 backdrop-blur-md text-foreground p-4 sticky top-0 z-10 neon-border shadow-primary">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code size={24} className="text-primary" />
          <span className="text-xl font-semibold text-glow shadow-primary">Futuristické Portfolio</span>
        </div>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><a href="#o-mne" className="hover:text-primary transition-colors">O mně</a></li>
            <li><a href="#projekty" className="hover:text-primary transition-colors">Projekty</a></li>
            <li><a href="#ai" className="hover:text-primary transition-colors">O AI</a></li>
            <li><a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a></li>
          </ul>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
            <Globe size={20} />
          </button>
        </nav>
      </div>
    </header>
  )
}


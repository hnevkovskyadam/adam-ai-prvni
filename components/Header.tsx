'use client'

import { Github, Linkedin, Moon, Sun, User2 } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isContactOpen, setIsContactOpen] = useState(false)

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
            <div className="relative">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="p-2 hover:bg-accent rounded-full transition-colors"
              >
                <User2 size={20} />
              </button>
              
              {isContactOpen && (
                <div className="absolute top-12 right-0 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border min-w-[200px]">
                  <div className="space-y-3">
                    <a href="mailto:jmeno@example.com" className="flex items-center space-x-2 hover:text-primary transition-colors">
                      <span>jmeno@example.com</span>
                    </a>
                    <a href="tel:+420123456789" className="flex items-center space-x-2 hover:text-primary transition-colors">
                      <span>+420 123 456 789</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#projekty" className="text-sm hover:text-primary transition-colors">
              Projekty
            </a>
            <a href="#ai" className="text-sm hover:text-primary transition-colors">
              AI
            </a>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a 
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary transition-colors"
              title="LinkedIn"
            >
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


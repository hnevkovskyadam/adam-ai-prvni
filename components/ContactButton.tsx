'use client'

import { useState } from 'react'
import { Mail, Phone, Github, Linkedin, User2 } from 'lucide-react'

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border mb-2 min-w-[200px]">
          <div className="space-y-3">
            <a href="mailto:jmeno@example.com" className="flex items-center space-x-2 hover:text-primary transition-colors">
              <Mail size={16} />
              <span>jmeno@example.com</span>
            </a>
            <a href="tel:+420123456789" className="flex items-center space-x-2 hover:text-primary transition-colors">
              <Phone size={16} />
              <span>+420 123 456 789</span>
            </a>
            <a 
              href="https://github.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-primary transition-colors"
            >
              <Github size={16} />
              <span>github.com/username</span>
            </a>
            <a 
              href="https://linkedin.com/in/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-primary transition-colors"
            >
              <Linkedin size={16} />
              <span>linkedin.com/in/username</span>
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      >
        <User2 size={24} />
      </button>
    </div>
  )
} 
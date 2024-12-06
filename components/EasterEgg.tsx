'use client'

import { useState, useEffect } from 'react'

export default function EasterEgg() {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let konamiIndex = 0

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === konami[konamiIndex]) {
        konamiIndex++
        if (konamiIndex === konami.length) {
          setIsVisible(true)
          konamiIndex = 0
        }
      } else {
        konamiIndex = 0
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setPosition({
          x: Math.random() * (window.innerWidth - 50),
          y: Math.random() * (window.innerHeight - 50),
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div 
      className="fixed z-50 cursor-pointer"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onClick={() => setIsVisible(false)}
    >
      <div className="w-12 h-12 bg-primary rounded-full animate-bounce flex items-center justify-center text-primary-foreground font-bold">
        🕹️
      </div>
    </div>
  )
}


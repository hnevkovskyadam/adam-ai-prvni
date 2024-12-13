'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Vytvořeno s</span>
            <Heart className="w-4 h-4 text-primary" />
            <span>v České republice</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mé Portfolio. Všechna práva vyhrazena.
          </div>
        </div>
      </div>
    </footer>
  )
}


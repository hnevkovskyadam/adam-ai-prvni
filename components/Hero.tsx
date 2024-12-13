'use client'

import { Package } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-bg absolute inset-0 opacity-10" />
      <div className="container mx-auto px-4 py-24 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center">
            <Package size={48} className="text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold ml-4">
              Mé Portfolio
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Vítejte v mém portfoliu projektů. Zde najdete ukázky mé práce a
            experimentů s nejnovějšími technologiemi.
          </p>
          <a
            href="#projekty"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            Prozkoumat projekty
          </a>
        </div>
      </div>
    </section>
  )
} 
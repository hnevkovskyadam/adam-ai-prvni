'use client'

import { User2 } from 'lucide-react'

export default function AboutMe() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <User2 className="mr-2" />
            O mně
          </h2>
          <div className="space-y-4">
            <p>
              Jsem vášnivý vývojář softwaru se zaměřením na webové technologie a umělou inteligenci. 
              S více než 5 lety zkušeností v oboru se specializuji na vytváření škálovatelných a uživatelsky 
              přívětivých aplikací pomocí moderních technologií jako React, Node.js a Python.
            </p>
            <p>
              Mým cílem je neustále se učit a růst, přijímat nové výzvy a přispívat k inovativním projektům, 
              které mají pozitivní dopad na svět.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


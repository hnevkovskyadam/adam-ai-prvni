'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink, Briefcase } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platforma',
    description: 'Moderní e-shop postavený na Next.js s podporou serverových komponent a optimalizací pro vyhledávače.',
    longDescription: 'Tento projekt zahrnoval vývoj kompletní e-commerce platformy od návrhu až po nasazení. Využili jsme Next.js pro vytvoření rychlé a SEO optimalizované aplikace. Implementovali jsme pokročilé funkce jako real-time vyhledávání produktů, správu košíku a integraci s různými platebními bránami.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Node.js'],
    image: '/placeholder.svg?height=300&width=400',
    url: 'https://example.com/projekt1'
  },
  {
    id: 2,
    title: 'AI Asistent',
    description: 'Inteligentní chatbot využívající nejnovější technologie strojového učení pro podporu zákazníků.',
    longDescription: 'Vyvinuli jsme pokročilý AI chatbot pro zlepšení zákaznické podpory. Chatbot využívá zpracování přirozeného jazyka a strojové učení k porozumění a odpovídání na dotazy zákazníků. Integrace s existujícími systémy podpory umožňuje plynulé předávání složitějších případů lidským agentům.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    image: '/placeholder.svg?height=300&width=400',
    url: 'https://example.com/projekt2'
  }
]

export default function ProjectShowcase() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  return (
    <section id="projekty" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Briefcase className="mr-2 text-primary" />
            Projekty
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl neon-border shadow-primary"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-glow shadow-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div 
                  className="flex items-center text-primary cursor-pointer"
                  onClick={() => toggleProject(project.id)}
                >
                  <span className="mr-2">
                    {expandedProject === project.id ? 'Méně detailů' : 'Více detailů'}
                  </span>
                  {expandedProject === project.id ? <ChevronUp /> : <ChevronDown />}
                </div>
                {expandedProject === project.id && (
                  <div className="mt-4 space-y-4 animate-fadeIn">
                    <p>{project.longDescription}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Použité technologie:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      <span className="mr-2">Zobrazit projekt</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


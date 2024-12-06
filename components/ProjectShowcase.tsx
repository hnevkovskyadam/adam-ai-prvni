'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink, Briefcase } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'E-commerce platforma',
    description: 'Moderní e-shop postavený na Next.js s podporou serverových komponent a optimalizací pro vyhledávače.',
    longDescription: 'Tento projekt zahrnoval vývoj kompletní e-commerce platformy od návrhu až po nasazení. Využili jsme Next.js pro vytvoření rychlé a SEO optimalizované aplikace. Implementovali jsme pokročilé funkce jako real-time vyhledávání produktů, správu košíku a integraci s různými platebními bránami.',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '/placeholder.svg?height=300&width=400',
    url: 'https://example.com/project1'
  },
  {
    id: 2,
    title: 'AI Chatbot pro zákaznickou podporu',
    description: 'Inteligentní chatbot využívající strojové učení pro poskytování zákaznické podpory 24/7.',
    longDescription: 'Vyvinuli jsme pokročilý AI chatbot pro zlepšení zákaznické podpory. Chatbot využívá zpracování přirozeného jazyka a strojové učení k porozumění a odpovídání na dotazy zákazníků. Integrace s existujícími systémy podpory umožňuje plynulé předávání složitějších případů lidským agentům.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Flask', 'MongoDB'],
    image: '/placeholder.svg?height=300&width=400',
    url: 'https://example.com/project2'
  }
]

export default function ProjectShowcase() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id)
  }

  return (
    <section id="projekty" className="space-y-8">
      <h2 className="text-3xl font-semibold mb-6 flex items-center text-glow shadow-primary">
        <Briefcase className="mr-2 text-primary" />
        Moje Projekty
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl neon-border shadow-primary">
            <Image 
              src={project.image} 
              alt={project.title} 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-glow shadow-primary">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
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
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm">
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
                    Navštívit projekt <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


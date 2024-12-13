'use client'

import ProjectCard from './ProjectCard'

export const projects = [
  {
    title: "E-commerce Platforma",
    description: "Moderní e-shop postavený na React a TypeScript s důrazem na uživatelský zážitek a výkon.",
    tags: ["React", "TypeScript", "Next.js", "Node.js"],
    link: "https://github.com/username/e-commerce"
  },
  {
    title: "AI Asistent",
    description: "Inteligentní chatbot využívající nejnovější technologie strojového učení pro podporu zákazníků.",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    link: "https://github.com/username/ai-assistant"
  }
]

export default function Projects() {
  return (
    <section id="projekty" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {'<'} Projekty {'>'}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

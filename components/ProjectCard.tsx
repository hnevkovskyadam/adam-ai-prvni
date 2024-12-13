'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="aspect-[2/1] relative bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <Image 
            src="/placeholder.svg" 
            alt="Project preview" 
            width={400} 
            height={200}
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-white/10 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm hover:text-primary transition-colors"
        >
          Zobrazit projekt <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  )
} 
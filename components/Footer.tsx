import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground p-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Moje Portfolio. Všechna práva vyhrazena.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80">
            <Linkedin size={24} />
          </a>
          <a href="mailto:jmeno@example.com" className="hover:text-primary-foreground/80">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}


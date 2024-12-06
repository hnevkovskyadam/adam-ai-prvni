import { User, Mail, Phone, Github, Linkedin } from 'lucide-react'

export default function AboutMe() {
  return (
    <section id="o-mne" className="bg-card text-card-foreground p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        <User className="mr-2" />
        O mně
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg leading-relaxed mb-4">
            Jsem vášnivý vývojář softwaru se zaměřením na webové technologie a umělou inteligenci. 
            S více než 5 lety zkušeností v oboru se specializuji na vytváření škálovatelných 
            a uživatelsky přívětivých aplikací pomocí moderních technologií jako React, Node.js a Python.
          </p>
          <p className="text-lg leading-relaxed">
            Mým cílem je neustále se učit a růst, přijímat nové výzvy a přispívat k inovativním projektům, 
            které mají pozitivní dopad na svět.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="mr-2" />
            <a href="mailto:jmeno@example.com" className="hover:underline">jmeno@example.com</a>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2" />
            <a href="tel:+420123456789" className="hover:underline">+420 123 456 789</a>
          </div>
          <div className="flex items-center">
            <Github className="mr-2" />
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/username</a>
          </div>
          <div className="flex items-center">
            <Linkedin className="mr-2" />
            <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/username</a>
          </div>
        </div>
      </div>
    </section>
  )
}


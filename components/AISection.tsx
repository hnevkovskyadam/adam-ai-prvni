'use client'

import { Brain, Zap, Users } from 'lucide-react'

export default function AISection() {
  return (
    <section id="ai" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <Brain className="text-primary mr-4" />
            Programování s umělou inteligencí
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Brain className="mr-2 text-primary" size={20} />
                Budoucnost je zde
              </h3>
              <p className="text-muted-foreground">
                Umělá inteligence revolucionizuje způsob, jakým vytváříme software. Pomocí pokročilých
                AI nástrojů můžeme rychleji prototypovat, debugovat a optimalizovat náš kód.
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Zap className="mr-2 text-primary" size={20} />
                Automatizace a Efektivita
              </h3>
              <p className="text-muted-foreground">
                S pomocí AI můžeme automatizovat rutinní úkoly a soustředit se na kreativní aspekty
                vývoje. To vede k vyšší produktivitě a lepší kvalitě kódu.
              </p>
            </div>
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="mr-2 text-primary" size={20} />
                Spolupráce člověka a AI
              </h3>
              <p className="text-muted-foreground">
                AI není náhradou za programátory, ale mocným nástrojem, který nám pomáhá být
                produktivnější a kreativnější. Společně můžeme vytvářet lepší a inovativnější řešení.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


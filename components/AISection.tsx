import { Brain } from 'lucide-react'

export default function AISection() {
  return (
    <section id="ai" className="bg-card text-card-foreground p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        <Brain className="mr-2" />
        Programování s AI
      </h2>
      <div className="space-y-4">
        <p className="text-lg leading-relaxed">
          Umělá inteligence revolucionizuje způsob, jakým programujeme. S nástroji jako jsou 
          GitHub Copilot a ChatGPT mohou vývojáři rychleji psát kód, řešit složité problémy 
          a učit se nové technologie.
        </p>
        <p className="text-lg leading-relaxed">
          AI asistenti mohou pomoci s generováním kódu, debugováním a dokonce i s návrhem 
          architektury. Tato synergie mezi lidskou kreativitou a strojovou efektivitou 
          otevírá nové možnosti v softwarovém vývoji.
        </p>
        <p className="text-lg leading-relaxed">
          V mých projektech využívám AI k optimalizaci pracovních postupů, zlepšení kvality 
          kódu a urychlení vývoje. Zároveň se neustále učím, jak nejlépe integrovat tyto 
          pokročilé nástroje do svého vývojového procesu.
        </p>
      </div>
    </section>
  )
}


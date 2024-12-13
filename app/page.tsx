import AboutMe from '@/components/AboutMe'
import ProjectShowcase from '@/components/ProjectShowcase'
import AISection from '@/components/AISection'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

// Klientské komponenty, které potřebují být načteny dynamicky
const AIChat = dynamic(() => import('@/components/AIChat'), {
  ssr: false
})

const Analytics = dynamic(() => 
  import('@vercel/analytics/react').then((mod) => mod.Analytics), {
  ssr: false
})

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        <AboutMe />
        <ProjectShowcase />
        <AISection />
      </main>
      <Footer />
      <AIChat />
      <Analytics />
    </div>
  )
}

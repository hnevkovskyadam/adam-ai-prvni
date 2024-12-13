import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import Background3D from '@/components/Background3D'
import Header from '@/components/Header'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin', 'latin-ext'],
})

export const metadata = {
  title: 'Futuristické Portfolio',
  description: 'Ukázka mých projektů a dovedností v oblasti vývoje softwaru s prvky umělé inteligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Background3D />
          <div className="relative z-10">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

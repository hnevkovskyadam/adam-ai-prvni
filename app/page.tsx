export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <header className="flex flex-col items-center text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Vítejte na mém portfoliu
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Jsem vývojář se zaměřením na moderní webové technologie. 
          Specializuji se na React, Next.js a TypeScript.
        </p>
      </header>

      {/* About Me Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">O mně</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 leading-relaxed">
              Jsem nadšený vývojář s vášní pro vytváření moderních webových aplikací.
              Mám zkušenosti s nejnovějšími technologiemi a neustále se učím nové věci.
              Věřím v čistý kód a uživatelsky přívětivý design.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Technologie, které používám:</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git'].map((tech) => (
                  <span key={tech} className="bg-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">Projekty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">E-commerce Platforma</h3>
            <p className="text-gray-600 mb-4">
              Moderní e-shop postavený na Next.js s využitím TypeScriptu a Tailwind CSS.
              Implementace pokročilých funkcí včetně košíku a platební brány.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-blue-600 hover:underline">Demo</a>
              <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Portfolio Web</h3>
            <p className="text-gray-600 mb-4">
              Osobní portfolio vytvořené pomocí Next.js a Tailwind CSS.
              Responzivní design a optimalizace pro vyhledávače.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-blue-600 hover:underline">Demo</a>
              <a href="#" className="text-blue-600 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold mb-8">Kontakt</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-gray-600 text-center mb-8">
            Máte zájem o spolupráci? Neváhejte mě kontaktovat.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href="mailto:email@example.com" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Napište mi
            </a>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/yourusername" className="text-gray-600 hover:text-blue-600">GitHub</a>
              <a href="https://linkedin.com/in/yourprofile" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20 py-8 text-center text-gray-600">
        <p>© {new Date().getFullYear()} - Vytvořeno s ❤️ pomocí Next.js</p>
      </footer>
    </div>
  );
}

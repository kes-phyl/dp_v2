import { Hero, Socials, About, Experience, Projects, Contact, Footer } from '@/components'

export default function Home() {
  return (
    <main className="page-shell pt-20 lg:pl-16">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Socials />
    </main>
  )
}

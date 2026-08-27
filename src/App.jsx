import Navbar from './components/navbar'
import Hero from './components/hero'
import Stats from './components/stats'
import About from './components/about'
import Services from './components/services'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="bg-canvas">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      {/* Cyber-theme scanline wash. Inert in the light theme. */}
      <div className="scanlines" aria-hidden="true" />
    </div>
  )
}

export default App

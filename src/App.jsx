import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Playground from './components/Playground'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Playground />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-white/60">© {new Date().getFullYear()} Krishanu — All rights reserved.</footer>
    </div>
  )
}

export default App

import { useState } from 'react'
import { Menu, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  const toggleTheme = () => {
    setDark((d) => !d)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark')
    }
  }

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#playground', label: 'Playground' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-full bg-white/10 p-2 backdrop-blur-xl ring-1 ring-white/20 dark:bg-black/30">
          <a href="#home" className="text-sm font-semibold tracking-wider text-neutral-900 dark:text-neutral-100">KRISHANU</a>

          <div className="hidden md:block">
            <div className="gooey relative">
              <nav className="flex items-center gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="group relative overflow-hidden rounded-full border border-white/20 bg-white/20 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/30">
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 translate-y-full rounded-full bg-cyan-500/30 blur-xl transition-transform duration-500 group-hover:translate-y-0" />
                  </a>
                ))}
              </nav>
              <svg className="absolute h-0 w-0" aria-hidden>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={toggleTheme} className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/20 bg-white/10 text-white/90 backdrop-blur transition hover:bg-white/20">
              {dark ? <Sun size={18} className="animate-[spin_1.5s_linear]"/> : <Moon size={18} />}
            </button>
            <a href="#contact" className="hidden rounded-full bg-cyan-500/80 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-cyan-500/30 hover:bg-cyan-400 md:block">Hire Me</a>
            <button onClick={() => setOpen(!open)} className="md:hidden rounded-full border border-white/20 bg-white/10 p-2 text-white/90"><Menu size={18} /></button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur md:hidden">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl bg-white/5 px-3 py-2 text-white/90">{item.label}</a>
              ))}
              <div className="mt-2 flex gap-3">
                <a className="rounded-full border border-white/10 p-2 text-white/80 hover:text-white" href="#" aria-label="Github"><Github size={18}/></a>
                <a className="rounded-full border border-white/10 p-2 text-white/80 hover:text-white" href="#" aria-label="LinkedIn"><Linkedin size={18}/></a>
                <a className="rounded-full border border-white/10 p-2 text-white/80 hover:text-white" href="#" aria-label="Email"><Mail size={18}/></a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

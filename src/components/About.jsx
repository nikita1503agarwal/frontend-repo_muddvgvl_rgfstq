import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const suggestions = [
  { cmd: 'help', desc: 'Show available commands' },
  { cmd: 'ls', desc: 'List sections' },
  { cmd: 'cd projects', desc: 'Go to projects' },
  { cmd: 'cat skills', desc: 'Show skills' },
]

export default function About() {
  const [lines, setLines] = useState<string[]>(['Type "help" to begin.'])
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [lines])

  const handleCommand = (value: string) => {
    const v = value.trim()
    if (!v) return
    let output: string[] = []
    switch (true) {
      case v === 'help':
        output = [
          'Commands:',
          ...suggestions.map(s => ` - ${s.cmd} — ${s.desc}`)
        ]
        break
      case v === 'ls':
        output = ['about  projects  skills  contact']
        break
      case v.startsWith('cd'):
        output = ['Switched context → ' + v.split(' ').slice(1).join(' ')]
        break
      case v.startsWith('cat skills'):
      case v === 'cat skills':
        output = [
          'Frontend: React, Three.js, Framer Motion, Tailwind',
          'Backend: FastAPI, Node.js, MongoDB',
          'Other: GSAP, Lenis, WebGL'
        ]
        break
      default:
        output = ['Command not found. Try "help"']
    }
    setLines(prev => [...prev, `> ${v}`, ...output])
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput('')
  }

  return (
    <section id="about" className="relative bg-[#0b0b12] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 text-3xl font-bold tracking-tight">
          <span className="relative">
            <span className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-cyan-500 opacity-30 blur"/>
            <span className="relative">About</span>
          </span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4 shadow-2xl shadow-fuchsia-500/10 ring-1 ring-white/10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100%_2px] mix-blend-overlay"/>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.15),transparent_60%)]"/>
            <div className="relative font-mono text-sm leading-relaxed text-green-300">
              {lines.map((l, i) => (
                <div key={i} className="crt">
                  {l}
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <form onSubmit={onSubmit} className="mt-4 flex items-center gap-2">
              <span className="font-mono text-green-400">$</span>
              <input value={input} onChange={(e) => setInput(e.target.value)} className="w-full bg-transparent font-mono text-green-300 outline-none placeholder:text-green-700" placeholder="type a command" />
            </form>
            <div className="mt-3 text-xs text-green-700">try: {suggestions.map(s => s.cmd).join(', ')}</div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-white/80">I craft interfaces that feel alive — blending real-time 3D, motion, and strong engineering to tell stories. I love building futuristic interactions that run smoothly on any device.</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-white/70">
              <li>React & TypeScript</li>
              <li>Three.js / R3F</li>
              <li>GSAP & Framer Motion</li>
              <li>FastAPI / Node</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .crt { position: relative; }
        .crt::after {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.06),
            rgba(255,255,255,0.06) 1px,
            transparent 1px,
            transparent 3px
          );
          mix-blend-mode: overlay; pointer-events: none;
        }
      `}</style>
    </section>
  )
}

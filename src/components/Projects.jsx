import { motion } from 'framer-motion'

const demoProjects = [
  {
    name: 'Project One',
    desc: 'Holographic interface demo with interactive shaders.',
    tech: ['React', 'Three.js', 'R3F'],
    links: { git: '#', demo: '#' },
  },
  {
    name: 'Project Two',
    desc: 'Neon dashboard with motion design system.',
    tech: ['TypeScript', 'Framer Motion', 'Tailwind'],
    links: { git: '#', demo: '#' },
  },
  {
    name: 'Project Three',
    desc: 'Procedural particle worlds and music reactivity.',
    tech: ['WebGL', 'Tone.js'],
    links: { git: '#', demo: '#' },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0a0a12] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-3xl font-bold">
          Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="absolute -inset-20 bg-[radial-gradient(circle_at_var(--mx,_50%)_var(--my,_50%),rgba(34,211,238,0.18),transparent_20%)] transition-opacity duration-500 group-hover:opacity-100 opacity-0"/>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-white/70">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a href={p.links.git} className="text-sm text-white/80 underline-offset-4 hover:underline">GitHub</a>
                <a href={p.links.demo} className="text-sm text-white/80 underline-offset-4 hover:underline">Live Demo</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

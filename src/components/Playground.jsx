import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Playground() {
  const [pets, setPets] = useState(0)

  return (
    <section id="playground" className="relative bg-[#07070c] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-3xl font-bold">Playground</motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-3 text-sm text-white/70">Pet the blob</div>
            <button onClick={() => setPets(pets + 1)} className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-fuchsia-600/60 to-cyan-500/60 text-3xl font-semibold shadow-xl backdrop-blur transition active:scale-95">{pets}</button>
            <div className="mt-3 text-center text-white/70">pets</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/70">Mini shader gallery (placeholders)</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-28 rounded-xl bg-gradient-to-br from-fuchsia-600/30 to-cyan-400/30 ring-1 ring-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[110vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b12] via-[#0a0a16] to-[#090910] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.35),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-end pb-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-4 text-center text-4xl font-extrabold tracking-tight md:text-6xl"
        >
          <span className="relative inline-block">
            <span className="absolute -inset-1 blur-lg bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-indigo-500 opacity-60"/>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400">Krishanu</span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="max-w-2xl text-center text-balance text-white/80"
        >
          Building immersive, futuristic web experiences with 3D, motion, and craftsmanship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="pointer-events-auto rounded-full bg-cyan-500/90 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-cyan-500/30 ring-1 ring-white/10 backdrop-blur hover:bg-cyan-400">See Projects</a>
          <a href="#contact" className="pointer-events-auto rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white/90 backdrop-blur hover:bg-white/10">Contact</a>
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-10 text-center text-xs text-white/60"
        >
          Scroll
          <div className="mx-auto mt-2 h-8 w-[1px] bg-gradient-to-b from-white/60 to-transparent"/>
        </motion.div>
      </div>
    </section>
  )
}

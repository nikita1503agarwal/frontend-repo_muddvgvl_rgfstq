import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#08080f] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-3xl font-bold">Contact</motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <input className="rounded-xl border border-cyan-300/20 bg-black/40 px-4 py-3 outline-none ring-1 ring-transparent transition focus:ring-cyan-400/50" placeholder="Your name" />
              <input className="rounded-xl border border-cyan-300/20 bg-black/40 px-4 py-3 outline-none ring-1 ring-transparent transition focus:ring-cyan-400/50" placeholder="Email" />
              <textarea rows={5} className="rounded-xl border border-cyan-300/20 bg-black/40 px-4 py-3 outline-none ring-1 ring-transparent transition focus:ring-cyan-400/50" placeholder="Message" />
            </div>
            <button className="mt-4 w-full rounded-xl bg-cyan-500/90 px-4 py-3 font-semibold text-white shadow-cyan-500/30 hover:bg-cyan-400">Send Message</button>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/70">Connect</div>
            <div className="mt-4 flex gap-3">
              <a className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white/80 hover:text-white" href="#"><Github size={18}/> GitHub</a>
              <a className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white/80 hover:text-white" href="#"><Linkedin size={18}/> LinkedIn</a>
              <a className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white/80 hover:text-white" href="#"><Mail size={18}/> Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    const size = 260
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = size + 'px'
    canvas.style.height = size + 'px'
    ctx.scale(dpr, dpr)

    const levels = [0.9, 0.75, 0.6, 0.8, 0.7]
    const labels = ['React', 'Three', 'Motion', 'API', 'Design']

    function draw() {
      ctx.clearRect(0,0,size,size)
      ctx.save()
      ctx.translate(size/2, size/2)
      const R = 110
      const N = levels.length

      // grid
      ctx.strokeStyle = 'rgba(255,255,255,0.15)'
      for (let r = 1; r <= 5; r++) {
        ctx.beginPath()
        for (let i = 0; i < N; i++) {
          const a = (i / N) * Math.PI * 2
          const x = Math.cos(a) * (R * r/5)
          const y = Math.sin(a) * (R * r/5)
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.closePath(); ctx.stroke()
      }

      // axes
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2
        ctx.beginPath();
        ctx.moveTo(0,0)
        ctx.lineTo(Math.cos(a)*R, Math.sin(a)*R)
        ctx.stroke()
      }

      // polygon
      ctx.beginPath()
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2
        const r = R * levels[i]
        const x = Math.cos(a) * r
        const y = Math.sin(a) * r
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.closePath()
      const grad = ctx.createLinearGradient(-R,-R,R,R)
      grad.addColorStop(0,'rgba(34,211,238,0.45)')
      grad.addColorStop(1,'rgba(217,70,239,0.45)')
      ctx.fillStyle = grad
      ctx.fill()
      ctx.strokeStyle = 'rgba(255,255,255,0.35)'
      ctx.stroke()

      // labels
      ctx.fillStyle = 'rgba(255,255,255,0.8)'
      ctx.font = '12px ui-monospace, SFMono-Regular, Menlo, monospace'
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2
        const x = Math.cos(a) * (R + 12)
        const y = Math.sin(a) * (R + 12)
        ctx.fillText(labels[i], x-16, y+4)
      }

      ctx.restore()
    }

    draw()
  }, [])

  return (
    <section id="skills" className="relative bg-[#090910] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-3xl font-bold">Skills</motion.h2>
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <canvas ref={canvasRef} className="rounded-2xl border border-white/10 bg-white/5 p-3" />
          <ul className="grid flex-1 grid-cols-2 gap-3 text-white/80">
            {['React', 'TypeScript', 'Three.js', 'Framer Motion', 'GSAP', 'FastAPI', 'MongoDB', 'Tailwind'].map((s) => (
              <li key={s} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

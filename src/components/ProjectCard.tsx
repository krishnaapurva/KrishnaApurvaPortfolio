import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Button } from './Button'

export type ProjectCardProps = {
  title: string
  description: string
  stack: string[]
  metrics: string[]
  featured?: boolean
  diagram?: ReactNode
  onViewDetails: () => void
}

export function ProjectCard({
  title,
  description,
  stack,
  metrics,
  featured,
  diagram,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl glass"
    >
      {featured && (
        <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
          <span className="rounded-full bg-[#38BDF8]/15 px-3 py-1 text-xs font-semibold text-[#E2E8F0] border border-[#38BDF8]/30">
            FEATURED
          </span>
          <span className="h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_18px_rgba(34,197,94,0.7)]" />
        </div>
      )}

      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          featured ? 'bg-[radial-gradient(400px_circle_at_10%_0%,rgba(56,189,248,0.18),transparent_55%)]' : 'bg-[radial-gradient(420px_circle_at_10%_0%,rgba(34,197,94,0.14),transparent_60%)]'
        }`}
      />

      <motion.div
        whileHover={{
          y: -7,
          rotate: -0.6,
          boxShadow: featured
            ? '0 0 0 1px rgba(56,189,248,0.22), 0 30px 70px rgba(56,189,248,0.10)'
            : '0 0 0 1px rgba(34,197,94,0.22), 0 30px 70px rgba(34,197,94,0.10)',
        }}
        transition={{ type: 'spring', stiffness: 240, damping: 22 }}
        className="relative p-6"
      >
        {diagram && <div className="mb-4">{diagram}</div>}

        <header className={featured ? 'pt-12' : ''}>
          <h3 className="text-xl font-semibold tracking-tight text-[#E2E8F0]">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
            {description}
          </p>
        </header>

        <div className="mt-5 grid gap-3">
          <div className="flex flex-wrap gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-[#E2E8F0]/90"
              >
                {t}
              </span>
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-[#E2E8F0]/80">
                Key Impact
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <ul className="mt-2 grid gap-2">
              {metrics.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-2 text-sm text-[#94A3B8]"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
          <Button
            variant={featured ? 'secondary' : 'ghost'}
            size="md"
            onClick={onViewDetails}
            className="w-full sm:w-auto"
          >
            View Details
            <ArrowUpRight className="h-4 w-4" />
          </Button>

          <div className="text-xs text-[#94A3B8]">
            Built for reliability, performance, and scale.
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}


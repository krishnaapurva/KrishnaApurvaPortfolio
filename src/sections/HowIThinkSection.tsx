import { Layers, Radar, ShieldCheck, Zap, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'

const principles = [
  {
    title: 'Design for Scale',
    icon: Layers,
    accent: 'blue' as const,
    desc: 'Build systems that handle growing data without rework.',
  },
  {
    title: 'Reliability First',
    icon: ShieldCheck,
    accent: 'green' as const,
    desc: 'Focus on stable pipelines with monitoring, retries, and alerting.',
  },
  {
    title: 'Clean Data Contracts',
    icon: FileText,
    accent: 'blue' as const,
    desc: 'Ensure datasets are structured, validated, and analytics-ready.',
  },
  {
    title: 'Observability Matters',
    icon: Radar,
    accent: 'green' as const,
    desc: 'Track failures, latency, and pipeline health proactively.',
  },
  {
    title: 'Performance Optimization',
    icon: Zap,
    accent: 'blue' as const,
    desc: 'Continuously improve runtime, cost, and efficiency.',
  },
]

function accentRing(accent: 'blue' | 'green') {
  return accent === 'blue'
    ? 'border-[#38BDF8]/25 bg-[#38BDF8]/10'
    : 'border-[#22C55E]/25 bg-[#22C55E]/10'
}

function accentIcon(accent: 'blue' | 'green') {
  return accent === 'blue' ? 'text-[#38BDF8]' : 'text-[#22C55E]'
}

export function HowIThinkSection() {
  return (
    <section id="how-i-think" className="section relative">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-[#E2E8F0] sm:text-4xl">
            How I Think as a Data Engineer
          </h2>
          <p className="mt-3 text-[#94A3B8] max-w-2xl leading-relaxed">
            Engineering choices that keep data pipelines stable, governed, and
            ready for real-world analytics.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, idx) => {
            const Icon = p.icon
            return (
              <Reveal key={p.title} delayMs={idx * 55}>
                <motion.div
                  whileHover={{
                    y: -4,
                    rotate: p.accent === 'blue' ? -0.4 : 0.4,
                    boxShadow:
                      p.accent === 'blue'
                        ? '0 0 0 1px rgba(56,189,248,0.20), 0 30px 70px rgba(56,189,248,0.10)'
                        : '0 0 0 1px rgba(34,197,94,0.18), 0 30px 70px rgba(34,197,94,0.10)',
                  }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                  className={`glass rounded-3xl border ${accentRing(p.accent)} p-6`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`inline-flex size-12 items-center justify-center rounded-2xl border ${accentRing(
                        p.accent,
                      )} `}
                    >
                      <Icon className={`h-5 w-5 ${accentIcon(p.accent)}`} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#E2E8F0]">
                        {p.title}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                        {p.desc}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}


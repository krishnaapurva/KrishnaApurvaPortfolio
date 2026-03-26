import { Code2, Database, Cloud, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { ProfileAvatar } from '../components/ProfileAvatar'
import { Reveal } from '../components/Reveal'
import { publicPath } from '../lib/publicPath'
import { scrollToSection } from '../lib/scroll'

export function HeroSection() {
  const flowDots = [
    { left: '12%', top: '26%', size: 6, delay: 0.0, color: '#38BDF8' },
    { left: '26%', top: '44%', size: 4, delay: 0.25, color: '#22C55E' },
    { left: '44%', top: '22%', size: 5, delay: 0.45, color: '#38BDF8' },
    { left: '68%', top: '40%', size: 4, delay: 0.15, color: '#22C55E' },
    { left: '82%', top: '26%', size: 6, delay: 0.35, color: '#38BDF8' },
  ] as const

  return (
    <section id="home" className="section relative">
      <div className="mx-auto max-w-6xl px-4 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[radial-gradient(900px_circle_at_20%_10%,rgba(56,189,248,0.18),transparent_60%)]" />
          <div className="h-full w-full bg-[radial-gradient(900px_circle_at_90%_30%,rgba(34,197,94,0.12),transparent_60%)]" />
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              {/* Subtle animated grid overlay (hero-local) */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(56,189,248,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,197,94,0.28) 1px, transparent 1px)',
                  backgroundSize: '72px 72px',
                }}
                animate={{ backgroundPosition: ['0px 0px', '72px 72px'] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              />

              {/* Data-flow particles around the hero text */}
              <div aria-hidden className="pointer-events-none absolute -inset-4">
                {flowDots.map((d, i) => (
                  <motion.span
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      left: d.left,
                      top: d.top,
                      width: d.size,
                      height: d.size,
                      backgroundColor: d.color,
                      boxShadow: `0 0 18px ${d.color}33`,
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: [0.25, 0.85, 0.25], y: [10, -10, 10] }}
                    transition={{
                      duration: 4.8 + i * 0.35,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: d.delay,
                    }}
                  />
                ))}
              </div>

              <div className="inline-flex flex-wrap items-center gap-3 rounded-2xl glass-strong px-4 py-3 border border-white/10">
              <span className="inline-flex items-center gap-2 text-sm text-[#E2E8F0]">
                <Database className="h-4 w-4 text-[#38BDF8]" />
                ETL • Orchestration • Analytics
              </span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="inline-flex items-center gap-2 text-sm text-[#94A3B8]">
                <ShieldCheck className="h-4 w-4 text-[#22C55E]" />
                SLA-first pipelines
              </span>
              </div>

              <div className="relative mt-8 inline-block">
                {/* Glowing gradient behind name text */}
                <motion.div
                  aria-hidden
                  className="absolute -inset-x-10 -inset-y-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_60%)] blur-2xl opacity-80"
                  animate={{ opacity: [0.55, 0.95, 0.55] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="relative z-10 text-5xl font-semibold tracking-tight text-[#E2E8F0] sm:text-6xl"
                >
                  Krishna Apurva
                </motion.h1>
              </div>

            <p className="mt-5 text-lg leading-relaxed text-[#94A3B8] sm:text-xl">
              Transforming complex data challenges into scalable, high-performance
              data systems.
            </p>
            <p className="mt-3 text-sm text-[#94A3B8] sm:text-base">
              Data Engineer with 3+ years of experience in ETL, Cloud, and
              Analytics
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href={publicPath('resume.pdf')}
                downloadFileName="Resume_Krishna_Apurva_Data_Engineer.pdf"
              >
                Download Resume
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Code2 className="h-4 w-4 text-[#38BDF8]" />
                <div className="text-sm">
                  <div className="font-semibold text-[#E2E8F0]">Python + SQL</div>
                  <div className="text-[#94A3B8]">Data transformation</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Cloud className="h-4 w-4 text-[#22C55E]" />
                <div className="text-sm">
                  <div className="font-semibold text-[#E2E8F0]">Cloud pipelines</div>
                  <div className="text-[#94A3B8]">AWS + Azure orchestration</div>
                </div>
              </div>
            </div>
            </div>
          </Reveal>

          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full flex justify-center lg:justify-end">
              <ProfileAvatar />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


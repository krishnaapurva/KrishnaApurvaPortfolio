import { BriefcaseBusiness, CalendarRange, Sparkles } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const experiences = [
  {
    company: 'Innova Solutions',
    role: 'Data Engineer',
    duration: 'Aug 2025 — Present',
    achievements: [
      'Built CDC pipelines using timestamps and sequence logic',
      'Automated orchestration pipelines',
      'Implemented monitoring and alerting systems',
      'Developed metadata-driven ETL frameworks',
    ],
  },
  {
    company: 'Innova Solutions',
    role: 'Data Engineer',
    duration: 'May 2021 — June 2023',
    achievements: [
      'Reduced processing time by 37.5%',
      'Processed 40M+ records',
      'Built Talend pipelines with parallel processing',
      'Containerized pipelines using Docker',
    ],
  },
  {
    company: 'JJ Enterprises',
    role: 'Data Engineer',
    duration: undefined,
    achievements: [
      'Built Airflow pipelines',
      'Analyzed 700K+ transactions',
      'Increased revenue by 1.2%',
      'Improved customer retention by 12%',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="section relative">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div>
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-[#E2E8F0] sm:text-4xl">
              Experience
            </h2>
          </Reveal>
          <Reveal delayMs={60}>
            <p className="mt-3 text-[#94A3B8] max-w-2xl leading-relaxed">
              From orchestration to transformation, I’ve focused on delivering
              scalable systems that behave well in production.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {experiences.map((e, idx) => (
            <Reveal key={e.company} delayMs={idx * 60}>
              <div
                className="glass rounded-3xl p-6 border border-white/10 relative overflow-hidden pl-12 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.12),0_20px_80px_rgba(56,189,248,0.06)]"
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_10%_0%,rgba(56,189,248,0.14),transparent_60%)] opacity-70" />
                <div
                  aria-hidden
                  className="absolute left-5 top-6 bottom-6 w-px bg-white/10"
                />
                <div
                  aria-hidden
                  className={`absolute left-[14px] top-[22px] size-3 rounded-full ${
                    idx % 2 === 0
                      ? 'bg-[#38BDF8] shadow-[0_0_24px_rgba(56,189,248,0.28)]'
                      : 'bg-[#22C55E] shadow-[0_0_24px_rgba(34,197,94,0.24)]'
                  }`}
                />
                <div className="flex items-start gap-3">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                    <BriefcaseBusiness className="h-5 w-5 text-[#38BDF8]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[#94A3B8]">
                      {e.role}
                    </div>
                    <div className="mt-1 text-xl font-semibold tracking-tight text-[#E2E8F0]">
                      {e.company}
                    </div>
                    {e.duration && (
                      <div className="mt-1 inline-flex items-center gap-2 text-sm text-[#94A3B8]">
                        <CalendarRange className="h-4 w-4 text-[#22C55E]" />
                        {e.duration}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#E2E8F0]">
                    <Sparkles className="h-4 w-4 text-[#22C55E]" />
                    Key achievements
                  </div>
                  <ul className="mt-3 grid gap-2">
                    {e.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-[#94A3B8] text-sm">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                        <span className="leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}


import { BookOpen, GraduationCap, School } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const education = [
  {
    icon: GraduationCap,
    degree: 'Master of Science, Business Analytics and AI',
    school: 'University of Texas at Dallas',
    meta: 'GPA: 3.9',
  },
  {
    icon: BookOpen,
    degree: 'Bachelor of Technology, Information Technology',
    school: 'Medicaps University',
    meta: 'GPA: 3.8',
  },
]

export function EducationSection() {
  return (
    <section id="education" className="section relative">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#E2E8F0] sm:text-4xl">
                Education
              </h2>
              <p className="mt-3 text-[#94A3B8] max-w-2xl leading-relaxed">
                Strong analytics foundations paired with hands-on engineering
                experience across scalable ETL, orchestration, and data
                systems.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-[#94A3B8]">
              <School className="h-4 w-4 text-[#38BDF8]" />
              Credential-driven, engineering-focused
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {education.map((e, idx) => {
            const Icon = e.icon
            return (
              <Reveal key={e.degree} delayMs={idx * 60}>
                <div className="glass rounded-3xl p-6 border border-white/10 h-full">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                      <Icon className="h-5 w-5 text-[#38BDF8]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#94A3B8]">
                        Degree
                      </div>
                      <div className="mt-1 text-lg font-semibold tracking-tight text-[#E2E8F0]">
                        {e.degree}
                      </div>
                      <div className="mt-2 text-sm text-[#94A3B8]">
                        {e.school}
                      </div>
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[#94A3B8]">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                        {e.meta}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}


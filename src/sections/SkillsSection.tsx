import {
  Code2,
  Database as DbIcon,
  Server,
  Cpu,
  GitBranch,
  PlugZap,
  Layers,
} from 'lucide-react'
import { Reveal } from '../components/Reveal'

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    items: ['Python', 'SQL', 'R'],
    accent: 'blue',
  },
  {
    title: 'Data Engineering',
    icon: Layers,
    items: ['Spark', 'Airflow', 'Talend', 'dbt'],
    accent: 'green',
  },
  {
    title: 'Cloud',
    icon: Server,
    items: ['AWS', 'Azure'],
    accent: 'blue',
  },
  {
    title: 'Databases',
    icon: DbIcon,
    items: ['PostgreSQL', 'MongoDB', 'Teradata'],
    accent: 'green',
  },
  {
    title: 'Tools',
    icon: PlugZap,
    items: ['Docker', 'Kubernetes', 'Git'],
    accent: 'blue',
  },
  {
    title: 'Workflow Mindset',
    icon: Cpu,
    items: ['CI/CD patterns', 'Data quality checks', 'Observability'],
    accent: 'green',
  },
]

function accentClasses(accent: 'blue' | 'green') {
  return accent === 'blue'
    ? 'border-[#38BDF8]/25 bg-[#38BDF8]/10'
    : 'border-[#22C55E]/25 bg-[#22C55E]/10'
}

export function SkillsSection() {
  return (
    <section id="skills" className="section relative">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#E2E8F0] sm:text-4xl">
              Skills
            </h2>
            <p className="mt-3 text-[#94A3B8] max-w-2xl">
              A practical stack for building resilient, observable, and scalable
              data platforms.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-[#94A3B8]">
            <GitBranch className="h-4 w-4 text-[#38BDF8]" />
            Production-grade workflows
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <Reveal key={cat.title} delayMs={idx * 60}>
                <div
                  className={`glass rounded-2xl p-5 border ${accentClasses(
                    cat.accent as 'blue' | 'green',
                  )}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`inline-flex size-11 items-center justify-center rounded-xl border ${
                        cat.accent === 'blue'
                          ? 'border-[#38BDF8]/30 bg-[#38BDF8]/10'
                          : 'border-[#22C55E]/30 bg-[#22C55E]/10'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#E2E8F0]">
                        {cat.title}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {cat.items.map((it) => (
                          <span
                            key={it}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#94A3B8]"
                          >
                            {it}
                          </span>
                        ))}
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


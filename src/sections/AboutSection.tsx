import { Cpu, Layers, Workflow, Cloud, Gauge } from 'lucide-react'
import { Reveal } from '../components/Reveal'

const highlights = [
  {
    icon: Workflow,
    label: 'ETL + Orchestration',
    value: '3+ years',
    desc: 'Airflow-driven workflows and production-ready pipelines.',
  },
  {
    icon: Layers,
    label: 'Data Engineering Focus',
    value: 'Scale',
    desc: 'Designed for throughput, observability, and cost control.',
  },
  {
    icon: Cloud,
    label: 'Cloud Engineering',
    value: 'AWS + Azure',
    desc: 'Migration, monitoring, and reliable data platform builds.',
  },
  {
    icon: Gauge,
    label: 'Performance Mindset',
    value: 'Low latency',
    desc: 'Optimized Spark jobs and pipeline execution patterns.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="section relative">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#E2E8F0] sm:text-4xl">
                About
              </h2>
              <p className="mt-4 text-[#94A3B8] leading-relaxed">
                I build scalable data systems that stay fast under load,
                combining reliable ETL pipelines, cloud-native architectures,
                and analytics-ready data foundations. From schema design to
                Spark optimization, I focus on transforming complex, messy
                data into dependable, SLA-ready platforms.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#94A3B8]">
                  <Cpu className="h-4 w-4 text-[#38BDF8]" />
                  ETL pipelines (Airflow, Talend)
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#94A3B8]">
                  <Workflow className="h-4 w-4 text-[#22C55E]" />
                  Observability + operational hygiene
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <Reveal key={h.label} delayMs={60}>
                <div className="glass rounded-2xl p-5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                      <h.icon className="h-5 w-5 text-[#38BDF8]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#E2E8F0]">
                        {h.label}
                      </div>
                      <div className="mt-1 text-2xl font-semibold tracking-tight text-[#E2E8F0]">
                        {h.value}
                      </div>
                      <div className="mt-1 text-sm text-[#94A3B8]">{h.desc}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Reveal>
            <div className="glass-strong rounded-3xl p-6 border border-white/10">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-[#E2E8F0] font-semibold">
                    Building scalable data systems
                  </div>
                  <div className="mt-1 text-[#94A3B8] text-sm leading-relaxed">
                    I’m comfortable working across orchestration (Airflow),
                    transformation (Talend, dbt-style patterns), and cloud
                    services to deliver consistent results and clear operational
                    signals.
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#94A3B8]">
                    ETL pipelines
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#94A3B8]">
                    Airflow workflows
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#94A3B8]">
                    AWS + Azure
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}


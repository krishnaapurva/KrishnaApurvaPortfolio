import { AnimatePresence, motion } from 'framer-motion'
import { Database, ArrowRight, Cpu, Shield, Activity } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import type { ReactNode } from 'react'

type Project = {
  id: string
  title: string
  description: string
  stack: string[]
  metrics: string[]
  featured?: boolean
  details: {
    bullets: string[]
    highlights: { icon: ReactNode; label: string }[]
  }
}

function MediPriceArchitecture() {
  const [activeStage, setActiveStage] = useState<string | null>(null)

  const pathD =
    'M65 75 C 105 30, 165 30, 205 75 S 305 120, 345 75 S 435 30, 465 75'

  const stages = [
    {
      key: 'Ingest',
      x: 70,
      y: 35,
      stroke: '#38BDF8',
      desc: 'Collect and normalize clinical + cost sources into reliable datasets.',
    },
    {
      key: 'Transform',
      x: 190,
      y: 35,
      stroke: '#38BDF8',
      desc: 'Standardize with PySpark transformations and validate data contracts.',
    },
    {
      key: 'Orchestrate',
      x: 310,
      y: 35,
      stroke: '#22C55E',
      desc: 'Schedule end-to-end workflows with Airflow retries and lineage-aware monitoring.',
    },
    {
      key: 'Store',
      x: 430,
      y: 35,
      stroke: '#22C55E',
      desc: 'Persist governed, analytics-ready outputs for consistent dashboard reporting.',
    },
  ] as const

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-[#E2E8F0]">
        <Database className="h-4 w-4 text-[#38BDF8]" />
        MediPrice architecture
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-5 items-center">
        <div className="relative sm:col-span-5">
          <svg
            viewBox="0 0 520 150"
            width="100%"
            height="150"
            className="block"
            role="img"
            aria-label="Architecture diagram for MediPrice Insight"
          >
            <defs>
              <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#38BDF8" stopOpacity="0.9" />
                <stop offset="1" stopColor="#22C55E" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Dotted pipeline path + dash animation */}
            <path
              id="mediPipelinePath"
              d={pathD}
              fill="none"
              stroke="url(#edge)"
              strokeWidth="2"
              strokeDasharray="6 7"
              opacity="0.82"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-28"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </path>

            {/* Moving dots along the path */}
            <circle r="4.5" cx="0" cy="0" fill="#38BDF8" opacity="0.9">
              <animateMotion
                dur="4.8s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#mediPipelinePath" />
              </animateMotion>
            </circle>
            <circle r="3.8" cx="0" cy="0" fill="#22C55E" opacity="0.85">
              <animateMotion
                dur="4.8s"
                begin="2.1s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#mediPipelinePath" />
              </animateMotion>
            </circle>

            {/* Stage nodes (hover for tooltips + glow) */}
            {stages.map((s) => {
              const isActive = activeStage === s.key
              return (
                <g
                  key={s.key}
                  onMouseEnter={() => setActiveStage(s.key)}
                  onMouseLeave={() => setActiveStage(null)}
                  style={{ cursor: 'default' }}
                >
                  <circle
                    cx={s.x}
                    cy={s.y}
                    r="11"
                    fill="rgba(255,255,255,0.04)"
                    stroke={s.stroke}
                    strokeOpacity={isActive ? 0.95 : 0.55}
                  />
                  {isActive && (
                    <motion.circle
                      cx={s.x}
                      cy={s.y}
                      r="16"
                      fill="transparent"
                      stroke={s.stroke}
                      strokeWidth="2"
                      opacity="0.65"
                      animate={{
                        scale: [0.98, 1.06, 0.98],
                        opacity: [0.35, 0.75, 0.35],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  )}
                  <text
                    x={s.x}
                    y={s.y + 4}
                    textAnchor="middle"
                    fontSize="12"
                    fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
                    fill="#E2E8F0"
                    opacity={isActive ? 0.95 : 0.82}
                  >
                    {s.key}
                  </text>
                </g>
              )
            })}

            {/* Output node (static) */}
            <g>
              <circle
                cx="250"
                cy="105"
                r="12"
                fill="rgba(255,255,255,0.04)"
                stroke="#E2E8F0"
                strokeOpacity="0.45"
              />
              <text
                x="250"
                y="109"
                textAnchor="middle"
                fontSize="12"
                fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
                fill="#E2E8F0"
                opacity="0.82"
              >
                Insight
              </text>
            </g>
          </svg>
        </div>
      </div>

      <AnimatePresence>
        {activeStage && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="mt-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-[#E2E8F0]">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{
                  backgroundColor: stages.find((s) => s.key === activeStage)
                    ?.stroke,
                }}
              />
              {activeStage}
            </div>
            <div className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
              {stages.find((s) => s.key === activeStage)?.desc}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[#94A3B8]">
          <Cpu className="h-3.5 w-3.5 text-[#22C55E]" />
          PySpark ETL
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[#94A3B8]">
          <Shield className="h-3.5 w-3.5 text-[#38BDF8]" />
          Governed pipelines
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[#94A3B8]">
          <ArrowRight className="h-3.5 w-3.5 text-[#38BDF8]" />
          Dash-ready output
        </span>
      </div>
    </div>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Close project modal"
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        initial={{ opacity: 0, y: 16, x: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="relative w-full max-w-2xl glass rounded-3xl p-6 border border-white/10 overflow-hidden"
      >
        <div className="absolute -right-20 -top-20 size-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_65%)] blur-2xl" />
        <div className="absolute -left-20 -bottom-24 size-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.20),transparent_65%)] blur-2xl" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold tracking-wide text-[#94A3B8]">
                Project:
              </div>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#E2E8F0]">
                {project.title}
              </h3>
              <div className="mt-4 text-xs font-semibold tracking-wide text-[#94A3B8]">
                Description:
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                {project.description}
              </p>
            </div>
            <Button variant="ghost" size="md" onClick={onClose} className="shrink-0">
              Close
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#94A3B8]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#E2E8F0]">
                <Activity className="h-4 w-4 text-[#38BDF8]" />
                Key Impact:
              </div>
              <ul className="mt-3 grid gap-2">
                {project.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#E2E8F0]">
                <Shield className="h-4 w-4 text-[#22C55E]" />
                Highlights
              </div>
              <div className="mt-3 grid gap-2">
                {project.details.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                  >
                    {h.icon}
                    <div className="text-sm text-[#94A3B8]">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold text-[#E2E8F0]">
              What I delivered
            </div>
            <ul className="mt-3 grid gap-2">
              {project.details.bullets.map((b) => (
                <li key={b} className="text-sm text-[#94A3B8] flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const projects = useMemo<Project[]>(
    () => [
      {
        id: 'olist',
        title: 'Olist Azure Pipeline',
        description:
          'Designed a scalable Azure pipeline processing 1M+ records using Databricks and Synapse.',
        stack: ['Azure', 'Databricks', 'Synapse', 'Spark', 'SQL'],
        metrics: [
          'Improved processing efficiency',
          'Enabled real-time insights',
          'Built scalable architecture',
        ],
        featured: false,
        details: {
          bullets: [
            'Designed robust ingestion + transformation flow across Azure services',
            'Optimized Spark execution patterns for predictable batch performance',
            'Added operational guardrails: retries, monitoring signals, and failure visibility',
          ],
          highlights: [
            { icon: <Cpu className="h-4 w-4 text-[#38BDF8]" />, label: 'Databricks transformation layer' },
            { icon: <Shield className="h-4 w-4 text-[#22C55E]" />, label: 'SLA-first orchestration patterns' },
            { icon: <Database className="h-4 w-4 text-[#38BDF8]" />, label: 'Synapse analytics-ready storage' },
          ],
        },
      },
      {
        id: 'mediprice',
        title: 'MediPrice Insight',
        description:
          'Built a scalable healthcare data platform processing 6M+ records using PySpark and PostgreSQL.',
        stack: ['PySpark', 'PostgreSQL', 'Airflow', 'ETL', 'Analytics'],
        metrics: [
          'Processed 6M+ records efficiently',
          'Enabled real-time analytics',
          'Built reliable, consistent pipelines',
        ],
        featured: true,
        details: {
          bullets: [
            'Implemented PySpark transformations for structured cost analytics datasets',
            'Orchestrated end-to-end workflows in Airflow with reliability guardrails',
            'Designed storage + schema patterns that support downstream exploration',
          ],
          highlights: [
            { icon: <Cpu className="h-4 w-4 text-[#38BDF8]" />, label: 'PySpark ETL at scale' },
            { icon: <Shield className="h-4 w-4 text-[#22C55E]" />, label: 'Data governance + quality checks' },
            { icon: <Database className="h-4 w-4 text-[#38BDF8]" />, label: 'PostgreSQL for structured reporting' },
          ],
        },
      },
      {
        id: 'fraud',
        title: 'Fraud Detection',
        description:
          'Developed ML-based fraud detection system with Docker + Kubernetes.',
        stack: ['Docker', 'Kubernetes', 'Python', 'ML', 'Streaming-ready'],
        metrics: [
          'Scalable ML pipelines',
          'Reliable deployment system',
          'Repeatable workflows',
        ],
        featured: false,
        details: {
          bullets: [
            'Developed anomaly detection workflow designed for production deployment constraints',
            'Containerized end-to-end services for stable training and serving',
            'Deployed on Kubernetes with health-ready patterns for continuous availability',
          ],
          highlights: [
            { icon: <Shield className="h-4 w-4 text-[#22C55E]" />, label: 'Environment consistency by design' },
            { icon: <Cpu className="h-4 w-4 text-[#38BDF8]" />, label: 'Scalable inference architecture' },
            { icon: <Activity className="h-4 w-4 text-[#38BDF8]" />, label: 'K8s-native rollout patterns' },
          ],
        },
      },
    ],
    [],
  )

  const [selected, setSelected] = useState<Project | null>(null)

  const featuredDiagram = useMemo(() => <MediPriceArchitecture />, [])

  const openDetails = (p: Project) => setSelected(p)
  const closeDetails = () => setSelected(null)

  return (
    <section id="projects" className="section relative">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#E2E8F0] sm:text-4xl">
              Projects
            </h2>
            <p className="mt-3 text-[#94A3B8] max-w-2xl leading-relaxed">
              Premium, data-engineering work: orchestration, transformation, cloud
              pipelines, and deployment-ready systems.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#38BDF8]" />
            Hover for glow, open details for impact.
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {projects.map((p, idx) => (
            <Reveal key={p.id} delayMs={idx * 60}>
              <ProjectCard
                title={p.title}
                description={p.description}
                stack={p.stack.slice(0, 5)}
                metrics={p.metrics}
                featured={p.featured}
                diagram={p.featured ? featuredDiagram : undefined}
                onViewDetails={() => openDetails(p)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={closeDetails} />
        )}
      </AnimatePresence>
    </section>
  )
}


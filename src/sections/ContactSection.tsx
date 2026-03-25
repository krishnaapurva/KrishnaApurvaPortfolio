import { ExternalLink, Mail } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'

const email = 'krishnaapurva@email.com'
const linkedInUrl =
  'https://www.linkedin.com/in/krishnaapurva469/'
const githubUrl = 'https://github.com/krishnaapurva'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="section relative">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-[#E2E8F0] sm:text-4xl">
                Contact
              </h2>
              <p className="mt-3 text-[#94A3B8] max-w-xl leading-relaxed">
                If you’re building production-grade data platforms, I’d love to
                connect. I’m open to roles where reliability, scale, and clean
                engineering standards matter.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4">
            <Reveal delayMs={60}>
              <div className="glass rounded-3xl p-6 border border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                        <Mail className="h-5 w-5 text-[#38BDF8]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#E2E8F0]">
                          Email
                        </div>
                        <div className="mt-1 text-sm text-[#94A3B8]">
                          {email}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="secondary" size="md" onClick={copyEmail}>
                    {copied ? 'Copied' : 'Copy'}
                  </Button>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-colors px-4 py-3 flex items-center gap-3"
                  >
                    <ExternalLink className="h-5 w-5 text-[#38BDF8]" />
                    <div className="text-sm text-[#E2E8F0]">LinkedIn</div>
                  </a>

                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-colors px-4 py-3 flex items-center gap-3"
                  >
                    <ExternalLink className="h-5 w-5 text-[#22C55E]" />
                    <div className="text-sm text-[#E2E8F0]">GitHub</div>
                  </a>
                </div>

                <div className="mt-6 text-xs text-[#94A3B8] leading-relaxed">
                  Prefer email? Use the copy button above.
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-[#E2E8F0]">
                  Quick fit
                </div>
                <div className="mt-3 grid gap-2 text-sm text-[#94A3B8]">
                  <div className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                    ETL + Airflow orchestration
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                    Cloud data platforms (AWS/Azure)
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
                    Performance + reliability-first engineering
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}


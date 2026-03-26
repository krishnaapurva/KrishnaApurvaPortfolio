import { Mail } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { Button } from '../components/Button'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        fill="currentColor"
      />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        fill="currentColor"
      />
    </svg>
  )
}

const email = 'krishnaapurva469@gmail.com'
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
                    <LinkedInIcon className="h-5 w-5 text-[#38BDF8]" />
                    <div className="text-sm text-[#E2E8F0]">LinkedIn</div>
                  </a>

                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-colors px-4 py-3 flex items-center gap-3"
                  >
                    <GitHubIcon className="h-5 w-5 text-[#22C55E]" />
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


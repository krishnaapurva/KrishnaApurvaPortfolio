import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { scrollToSection } from '../lib/scroll'

type NavItem = { id: string; label: string }

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function NavBar() {
  const [activeId, setActiveId] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const items = useMemo(() => navItems, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean) as HTMLElement[]
    if (!els.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: '-20% 0px -60% 0px' },
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [items])

  const onNavigate = (id: string) => {
    setMobileOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[70] transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0F172A]/70 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-white/0'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
          aria-label="Go to top"
        >
          <span className="inline-flex size-8 items-center justify-center rounded-xl bg-white/5 border border-white/10">
            <span className="inline-block size-2 rounded-full bg-[#38BDF8] shadow-[0_0_18px_rgba(56,189,248,0.55)]" />
          </span>
          <span className="hidden sm:inline text-sm font-semibold tracking-wide text-[#E2E8F0]">
            Krishna Apurva
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {items.map((it) => {
            const isActive = it.id === activeId
            return (
              <button
                key={it.id}
                type="button"
                onClick={() => onNavigate(it.id)}
                className={`relative rounded-xl px-3 py-2 text-sm transition-colors duration-200 border border-transparent ${
                  isActive
                    ? 'text-[#E2E8F0]'
                    : 'text-[#94A3B8] hover:text-[#E2E8F0] hover:bg-white/5 hover:border-white/10'
                }`}
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 rounded-xl bg-white/5 border border-white/10 shadow-[0_0_0_1px_rgba(56,189,248,0.15)]"
                      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{it.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 pb-4">
              <div className="glass-strong rounded-2xl p-2.5 border border-white/10">
                {items.map((it) => {
                  const isActive = it.id === activeId
                  return (
                    <button
                      key={it.id}
                      type="button"
                      onClick={() => onNavigate(it.id)}
                      className={`w-full rounded-xl px-3 py-2 text-left text-sm mb-1 last:mb-0 transition-colors ${
                        isActive
                          ? 'text-[#E2E8F0] bg-white/5 border border-white/10'
                          : 'text-[#94A3B8] hover:text-[#E2E8F0] hover:bg-white/5 border border-transparent hover:border-white/10'
                      }`}
                    >
                      {it.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


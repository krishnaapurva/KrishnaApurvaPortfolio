import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'

const gradientConic =
  'conic-gradient(from_0deg,#38BDF8,#22C55E,#38BDF8)'

type Particle = {
  left: string
  top: string
  size: string
  color: 'blue' | 'green'
  delay: number
  duration: number
}

const particles: Particle[] = [
  { left: '12%', top: '22%', size: '8px', color: 'blue', delay: 0.0, duration: 4.8 },
  { left: '86%', top: '26%', size: '6px', color: 'green', delay: 0.3, duration: 5.3 },
  { left: '78%', top: '78%', size: '7px', color: 'blue', delay: 0.1, duration: 5.0 },
  { left: '18%', top: '74%', size: '6px', color: 'green', delay: 0.2, duration: 5.6 },
  { left: '50%', top: '9%', size: '5px', color: 'blue', delay: 0.15, duration: 4.9 },
  { left: '9%', top: '50%', size: '5px', color: 'green', delay: 0.25, duration: 5.2 },
  { left: '91%', top: '55%', size: '5px', color: 'blue', delay: 0.05, duration: 5.7 },
  { left: '52%', top: '91%', size: '6px', color: 'green', delay: 0.18, duration: 5.4 },
]

function initialsFallback() {
  return (
    <div className="flex size-full items-center justify-center">
      <div className="text-2xl font-semibold tracking-tight text-[#E2E8F0]">
        KA
      </div>
    </div>
  )
}

export function ProfileAvatar() {
  const reduced = useReducedMotion()
  const [imgOk, setImgOk] = useState(true)

  const particleStyle = useMemo(() => {
    return {
      blue: { background: 'rgba(56,189,248,0.65)', boxShadow: '0 0 20px rgba(56,189,248,0.35)' },
      green: { background: 'rgba(34,197,94,0.55)', boxShadow: '0 0 20px rgba(34,197,94,0.28)' },
    } as const
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 64 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md"
    >
      <div className="rounded-3xl p-3 sm:p-4 border border-white/10 bg-[rgba(255,255,255,0.05)] backdrop-blur-xl">
        <div className="relative flex items-center justify-center">
          {/* Soft outer glow */}
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full -z-10 blur-2xl opacity-80"
            style={{
              backgroundImage: gradientConic,
              filter: 'blur(24px)',
            }}
            animate={
              reduced
                ? undefined
                : { opacity: [0.35, 0.65, 0.35] }
            }
            transition={
              reduced ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }
            }
          />

          <motion.div
            className="group relative rounded-full p-[2px] w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] md:w-[220px] md:h-[220px]"
            aria-label="Krishna Apurva profile image"
            whileHover={{
              scale: 1.035,
              boxShadow:
                '0 0 0 1px rgba(56,189,248,0.26), 0 0 70px rgba(56,189,248,0.18), 0 0 70px rgba(34,197,94,0.14)',
            }}
            animate={
              reduced
                ? undefined
                : { y: [0, -8, 0] }
            }
            transition={
              reduced ? undefined : { duration: 6.2, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            {/* Animated gradient border */}
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-full -z-10"
              style={{
                backgroundImage: gradientConic,
              }}
              animate={reduced ? undefined : { rotate: 360 }}
              transition={reduced ? undefined : { duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative overflow-hidden rounded-full size-full bg-white/5 border border-white/10 backdrop-blur-sm">
              {imgOk ? (
                <img
                  src="/assets/profile.png"
                  alt="Krishna Apurva"
                  className="h-full w-full object-cover"
                  onError={() => setImgOk(false)}
                />
              ) : (
                initialsFallback()
              )}

              {/* Data-flow particles */}
              {!reduced &&
                particles.map((p, i) => {
                  const c = p.color === 'blue' ? particleStyle.blue : particleStyle.green
                  return (
                    <motion.span
                      key={i}
                      aria-hidden
                      className="pointer-events-none absolute rounded-full opacity-35 group-hover:opacity-70"
                      style={{
                        left: p.left,
                        top: p.top,
                        width: p.size,
                        height: p.size,
                        ...c,
                      }}
                      animate={{ y: [0, -10, 0], opacity: [0.25, 0.55, 0.25] }}
                      transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: p.delay,
                      }}
                    />
                  )
                })}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}


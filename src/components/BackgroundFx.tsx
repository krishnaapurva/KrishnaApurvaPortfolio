import { motion } from 'framer-motion'

export function BackgroundFx() {
  return (
    <>
      <div className="bg-orb" aria-hidden />
      <motion.div
        aria-hidden
        className="grid-bg"
        animate={{ opacity: [0.35, 0.55, 0.35], y: [0, -6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        aria-hidden
        className="fixed left-1/2 top-[-180px] z-[-1] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_62%)] blur-2xl opacity-70"
        animate={{ opacity: [0.62, 0.85, 0.62] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  )
}


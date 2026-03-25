import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type RevealProps = PropsWithChildren<{
  className?: string
  delayMs?: number
}>

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.6, ease: 'easeInOut', delay: delayMs / 1000 }}
    >
      {children}
    </motion.div>
  )
}


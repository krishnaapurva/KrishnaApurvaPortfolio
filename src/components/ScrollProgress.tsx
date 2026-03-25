import type { CSSProperties } from 'react'
import { useEffect, useMemo, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const maxScroll = doc.scrollHeight - doc.clientHeight
      const next = maxScroll <= 0 ? 0 : doc.scrollTop / maxScroll
      setProgress(Math.max(0, Math.min(1, next)))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const style = useMemo((): CSSProperties => {
    return {
      transform: `scaleX(${progress})`,
      transformOrigin: 'left',
    }
  }, [progress])

  return (
    <div className="fixed left-0 right-0 top-0 z-[80] h-1">
      <div
        className="absolute left-0 top-0 h-full w-full bg-white/5"
        aria-hidden
      />
      <div
        className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#38BDF8] via-[#22C55E] to-[#38BDF8] blur-[0.2px]"
        style={style}
      />
    </div>
  )
}


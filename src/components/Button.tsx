import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  download?: boolean
  downloadFileName?: string
  className?: string
}

export type ButtonProps =
  | (PropsWithChildren<CommonProps> &
      ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (PropsWithChildren<CommonProps> &
      AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-[transform,box-shadow,border-color,background-color,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] disabled:opacity-60 disabled:pointer-events-none disabled:transform-none hover:transform-gpu hover:scale-[1.03]'

const styles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#38BDF8]/15 text-[#E2E8F0] border border-[#38BDF8]/30 shadow-[0_0_0_1px_rgba(56,189,248,0.18),0_18px_50px_rgba(56,189,248,0.12)] hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_22px_64px_rgba(56,189,248,0.18),0_0_40px_rgba(56,189,248,0.10)] hover:border-[#38BDF8]/45',
  secondary:
    'bg-[#22C55E]/10 text-[#E2E8F0] border border-[#22C55E]/25 hover:border-[#22C55E]/40 shadow-[0_0_0_1px_rgba(34,197,94,0.16)] hover:shadow-[0_0_0_1px_rgba(34,197,94,0.26),0_0_40px_rgba(34,197,94,0.10)]',
  ghost:
    'bg-transparent text-[#E2E8F0] border border-white/10 hover:border-white/20 hover:bg-white/5 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.16),0_0_40px_rgba(56,189,248,0.08),0_0_50px_rgba(34,197,94,0.06)]',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  download,
  downloadFileName,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${styles[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        download={downloadFileName ?? download}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}


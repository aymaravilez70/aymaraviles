interface SectionTitleProps {
  label: string
  title: string
  subtitle?: string
}

export function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <span className="mb-3 inline-block font-body text-sm font-medium tracking-[0.3em] text-accent-soft uppercase">
        {label}
      </span>
      <h2 className="font-display text-4xl font-bold text-gradient-cosmic glow-text md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl font-body text-base text-white/50 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

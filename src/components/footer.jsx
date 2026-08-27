import { navLinks, profile, socials } from '../data'
import { Icon } from './icons'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line bg-canvas">
      {/* Cyber: the top hairline reads as a lit rail */}
      <div aria-hidden="true" className="sweep-line absolute inset-x-0 top-0 h-px" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="brand-gradient neon-edge on-grad grid h-9 w-9 place-items-center rounded-xl font-display text-sm font-bold">
            OT
          </span>
          <span className="font-display text-base font-semibold text-ink">{profile.name}</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-mute transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-9 w-9 place-items-center rounded-lg text-ink-mute transition-colors hover:bg-surface-alt hover:text-ink"
            >
              <Icon name={s.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="mono-cyber border-t border-line-soft py-5 text-center text-sm text-ink-mute">
        © {year} {profile.name}. Built with React &amp; Tailwind CSS.
      </div>
    </footer>
  )
}

export default Footer

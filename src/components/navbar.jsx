import { useEffect, useState } from 'react'
import { navLinks } from '../data'
import { Icon } from './icons'
import ThemeToggle from './themetoggle'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      {/* Cyber: the bottom hairline becomes a lit rail once you scroll */}
      <div
        aria-hidden="true"
        className={`sweep-line absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="brand-gradient neon-edge on-grad grid h-9 w-9 place-items-center rounded-xl font-display text-sm font-bold shadow-sm">
            OT
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Oyetunji<span className="text-brand-600">.</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-body transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle className="ml-3" />
          <a
            href="#contact"
            className="btn-primary ml-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Let’s talk
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink-soft"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-canvas/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-ink-soft hover:bg-surface-alt"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-1 rounded-lg px-4 py-2.5 text-center text-base font-semibold"
            >
              Let’s talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

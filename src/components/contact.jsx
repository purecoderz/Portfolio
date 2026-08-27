import { profile, socials } from '../data'
import { Icon } from './icons'
import { Reveal } from './reveal'

function Contact() {
  const tel = profile.phone.replace(/\s+/g, '')

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-line bg-canvas px-5 py-20 sm:px-8 sm:py-28"
    >
      <Reveal className="mx-auto max-w-4xl">
        <div className="glow neon-edge relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center shadow-xl shadow-slate-200/50 sm:px-12">
          {/* Cyber: vignetted blueprint grid behind the copy */}
          <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Get in touch
            </p>
            <h2 className="neon-text mx-auto mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Let’s build something together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-body">
              Have a project, a role, or an idea? I’m {profile.availability.toLowerCase()} and always
              happy to talk.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold shadow-lg shadow-cyan-500/20 transition-transform hover:-translate-y-0.5"
              >
                <Icon name="mail" className="h-5 w-5" />
                Email me
              </a>
              <a
                href={`tel:${tel}`}
                className="btn-ghost inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold"
              >
                <Icon name="phone" className="h-5 w-5" />
                {profile.phone}
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-line text-ink-body transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact

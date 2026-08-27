import { profile, socials, education } from '../data'
import { Icon } from './icons'
import { Reveal } from './reveal'

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-canvas">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        {/* Left — headshot + quick facts */}
        <Reveal>
          <div className="lg:sticky lg:top-24">
            {/* profile.png is a cutout with transparent margins, so the disc
                behind it does the framing. object-contain fits the whole image
                inside the circle no matter what its dimensions are — nothing
                gets cropped. Nudge `scale-` up if you want him larger. */}
            <div className="photo-frame relative aspect-square w-full max-w-3xs overflow-hidden rounded-full shadow-xl shadow-brand-500/20">
              <img
                src={profile.photo}
                alt={profile.name}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="fact-row flex items-center gap-2.5 text-ink-body">
                <Icon name="pin" className="h-4 w-4 text-brand-600" />
                {profile.location}
              </li>
              <li className="fact-row flex items-center gap-2.5 text-ink-body">
                <Icon name="mail" className="h-4 w-4 text-brand-600" />
                <a href={`mailto:${profile.email}`} className="hover:text-ink">
                  {profile.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink-body transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right — narrative + education */}
        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">About me</p>
          <h2 className="neon-text mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Engineer, founder, and educator — I own the whole build.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-body">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h3 className="mt-10 font-display text-lg font-semibold text-ink">
            Education & Certifications
          </h3>
          <ul className="mt-4 space-y-3">
            {education.map((e) => (
              <li
                key={e.title}
                className="flex items-start justify-between gap-4 border-b border-line-soft pb-3"
              >
                <div>
                  <p className="font-medium text-ink-strong">{e.title}</p>
                  <p className="text-sm text-ink-mute">{e.org}</p>
                </div>
                <span className="year-badge shrink-0 rounded-md px-2.5 py-1 text-xs font-semibold">
                  {e.year}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default About

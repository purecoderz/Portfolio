import { projects } from '../data'
import { Icon } from './icons'
import { Reveal } from './reveal'

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-line bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Selected work
          </p>
          <h2 className="neon-text mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Projects I’ve built & shipped
          </h2>
          <p className="mt-4 text-lg text-ink-body">
            Real platforms with real users — architected and delivered end-to-end.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((p, i) => (
            <Reveal key={p.name}>
              <article className="project-card neon-edge group/card grid overflow-hidden rounded-2xl border border-line bg-surface shadow-sm lg:grid-cols-2">
                {/* Screenshot. 16:9 on mobile; on desktop the panel stretches to
                    match the copy column, so let it fill whatever height it gets.
                    The gradient stays underneath as a fallback if the file 404s. */}
                <div
                  className={`relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-75 ${
                    i % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="brand-gradient absolute inset-0" />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }}
                  />
                  <img
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover/card:scale-[1.03]"
                  />
                  {/* Cyber: neon wash over the shot, pulling back on hover */}
                  <div className="shot-tint pointer-events-none absolute inset-0" />
                  <span className="badge-mono absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow-sm">
                    {p.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-9">
                  <p className="text-sm font-medium text-brand-600">{p.role}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-ink">{p.name}</h3>
                  <p className="mt-3 leading-relaxed text-ink-body">{p.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-line bg-surface-alt px-2.5 py-1 text-xs font-medium text-ink-body"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 font-semibold text-brand-700"
                  >
                    Visit live site
                    <Icon
                      name="external"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

import { services } from '../data'
import { Icon } from './icons'
import { Reveal } from './reveal'

// Split "api/server.go" into ["api/server", ".go"] so the extension can be
// tinted like syntax highlighting in the window title bar.
function splitFile(file) {
  const dot = file.lastIndexOf('.')
  return dot === -1 ? [file, ''] : [file.slice(0, dot), file.slice(dot)]
}

function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-line bg-canvas-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm font-medium text-brand-600">// what i do</p>
          <h2 className="neon-text mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Services I offer
          </h2>
          <p className="mt-4 text-lg text-ink-body">
            From the database up to the interface — here’s how I can help you ship.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const [stem, ext] = splitFile(s.file)
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08} className="h-full">
                <div className="code-card hud-corners neon-edge group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10">
                  {/* Gradient hairline that lights up along the top edge on hover */}
                  <div className="brand-gradient absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Window chrome */}
                  <div className="flex items-center gap-1.5 border-b border-line bg-surface-alt/80 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-line-strong transition-colors duration-300 group-hover:bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line-strong transition-colors duration-300 group-hover:bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line-strong transition-colors duration-300 group-hover:bg-emerald-400" />
                    <span className="ml-auto font-mono text-[11px] text-ink-dim">
                      {stem}
                      <span className="text-ink-mute transition-colors duration-300 group-hover:text-brand-600">
                        {ext}
                      </span>
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-3">
                      <div className="icon-tile h-10 w-10 shrink-0 rounded-lg">
                        <Icon name={s.icon} className="relative h-5 w-5" />
                      </div>
                      <h3 className="font-display text-[17px] font-semibold leading-snug text-ink">
                        {s.title}
                      </h3>
                    </div>

                    {/* Description as a comment block */}
                    <div className="mt-4 border-l-2 border-line-soft pl-3 transition-colors duration-300 group-hover:border-brand-200">
                      {s.lines.map((line, li) => (
                        <p key={line} className="font-mono text-[12.5px] leading-6 text-ink-mute">
                          <span className="select-none text-ink-faint transition-colors duration-300 group-hover:text-brand-400">
                            {'// '}
                          </span>
                          {line}
                          {li === s.lines.length - 1 && (
                            <span className="code-caret ml-1 inline-block h-3 w-0.5 bg-brand-500 align-middle" />
                          )}
                        </p>
                      ))}
                    </div>

                    <p className="mt-auto border-t border-dashed border-line pt-4 font-mono text-[11px] text-ink-dim transition-colors duration-300 group-hover:text-brand-600">
                      {s.tags.join('  ·  ')}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

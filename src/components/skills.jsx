import { skillGroups } from '../data'
import { Icon } from './icons'
import { Reveal } from './reveal'

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line bg-canvas-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-sm font-medium text-brand-600">// toolbox</p>
          <h2 className="neon-text mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Skills &amp; technologies
          </h2>
          <p className="mt-4 text-lg text-ink-body">
            The stack I reach for — branch by branch, from the language up to the platform.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Trunk: hugs the left edge on mobile, runs down the middle on desktop.
              In cyber a pulse travels down it (see .branch-spine in index.css). */}
          <div className="branch-spine absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 lg:left-1/2" />

          <div className="space-y-10 lg:space-y-0">
            {skillGroups.map((g, i) => {
              const left = i % 2 === 1
              return (
                <Reveal key={g.dir} x={left ? -28 : 28} y={12}>
                  <div className="relative pl-14 lg:grid lg:grid-cols-2 lg:gap-20 lg:py-6 lg:pl-0">
                    {/* Node on the trunk, with a stub branching out to the card */}
                    <div className="absolute left-5 top-5 z-10 -translate-x-1/2 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2">
                      <span className="node-dot grid h-10 w-10 place-items-center rounded-full border-2 border-brand-200 bg-surface font-mono text-[11px] font-semibold text-brand-600 shadow-sm">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`node-stub absolute top-1/2 hidden h-px w-5 bg-brand-200 lg:block ${
                          left ? 'right-full' : 'left-full'
                        }`}
                      />
                      <span
                        aria-hidden="true"
                        className="node-stub absolute left-full top-1/2 h-px w-4 bg-brand-200 lg:hidden"
                      />
                    </div>

                    {/* Branch card */}
                    <div className={left ? 'lg:col-start-1' : 'lg:col-start-2'}>
                      <div className="neon-edge group rounded-xl border border-line bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10">
                        <div className="flex items-start justify-between gap-4">
                          <span className="rounded-md bg-brand-50 px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-brand-700 ring-1 ring-brand-100">
                            {g.dir}
                          </span>
                          <div className="icon-tile h-9 w-9 shrink-0 rounded-lg">
                            <Icon name={g.icon} className="relative h-[18px] w-[18px]" />
                          </div>
                        </div>

                        <h3 className="mt-4 font-display text-xl font-bold text-ink">{g.title}</h3>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {g.items.map((it) => (
                            <span
                              key={it}
                              className="chip rounded-md px-2.5 py-1 font-mono text-[12px]"
                            >
                              {it}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

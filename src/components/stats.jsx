import { stats } from '../data'
import { Reveal } from './reveal'

function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-5 sm:px-8">
      <Reveal>
        {/* gap-px over a `bg-line` container turns the gaps themselves into the
            dividers — cyan hairlines in cyber, slate in light. */}
        <div className="neon-edge grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-sm sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-6 py-8 text-center">
              <div className="text-gradient neon-text font-display text-4xl font-bold sm:text-5xl">
                {s.value}
              </div>
              <div className="stat-label mt-1.5 text-sm font-medium text-ink-mute">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Stats

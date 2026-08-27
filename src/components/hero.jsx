import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data'
import { Icon } from './icons'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

// A small syntax-highlighted Go snippet for the hero visual. The window is dark
// in both themes; the code-* tokens shift it from slate to neon-on-navy.
function CodeWindow() {
  return (
    <div className="neon-edge overflow-hidden rounded-2xl border border-code-line bg-code-bg shadow-2xl shadow-slate-900/20">
      <div className="flex items-center gap-2 border-b border-code-line bg-code-chrome px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/90" />
        <span className="h-3 w-3 rounded-full bg-amber-400/90" />
        <span className="h-3 w-3 rounded-full bg-green-400/90" />
        <span className="ml-2 font-mono text-xs text-code-file">server.go</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-code-txt">
        <code>
          <span className="text-code-key">package</span> main{'\n\n'}
          <span className="text-code-key">func</span>{' '}
          <span className="text-code-fn">main</span>() {'{'}
          {'\n'}
          {'    '}r := api.<span className="text-code-fn">New</span>()
          {'\n'}
          {'    '}r.<span className="text-code-fn">GET</span>(
          <span className="text-code-str">"/health"</span>, healthz)
          {'\n'}
          {'    '}r.<span className="text-code-fn">WS</span>(
          <span className="text-code-str">"/live"</span>, collab.Handle){' '}
          <span className="text-code-cmt">// real-time</span>
          {'\n\n'}
          {'    '}log.<span className="text-code-fn">Fatal</span>(r.
          <span className="text-code-fn">Listen</span>(
          <span className="text-code-str">":8080"</span>))
          {'\n'}
          {'}'}
        </code>
      </pre>
    </div>
  )
}

function FloatingChip({ className, children, reduce, delay }) {
  return (
    <motion.div
      className={`hud-corners absolute hidden rounded-xl border border-line bg-surface/95 px-3.5 py-2 text-sm font-semibold text-ink-strong shadow-lg backdrop-blur sm:block ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        reduce
          ? { opacity: 1, scale: 1 }
          : { opacity: 1, scale: 1, y: [0, -8, 0] }
      }
      transition={
        reduce
          ? { duration: 0.4, delay }
          : { y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay }, opacity: { duration: 0.4, delay }, scale: { duration: 0.4, delay } }
      }
    >
      {children}
    </motion.div>
  )
}

function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-line bg-canvas-alt pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="glow pointer-events-none absolute inset-0 -z-10" />
      {/* Cyber only: a synthwave floor receding to a lit horizon. Deliberately
          NOT at -z-10 — the hero isn't a stacking context, so a negative layer
          would slip behind the section's own background and vanish. Sitting at
          the default level puts it above the background; the content wrapper
          below is `relative`, so it still paints on top. */}
      <div className="grid-floor pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-ok-line bg-ok-bg px-3.5 py-1.5 text-sm font-medium text-ok-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok-dot opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ok-dot" />
              </span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="neon-text mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Hi, I’m Oyetunji — I build{' '}
            <span className="text-gradient">fast, reliable backends</span> &amp; real-time systems.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-body">
            {profile.lead}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold shadow-lg shadow-cyan-500/20 transition-transform hover:-translate-y-0.5"
            >
              Let’s work together
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="btn-ghost inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold"
            >
              View my work
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-mute">
            <span className="text-ink-dim">Working with</span>
            {['Go', 'Python', 'JavaScript', 'PostgreSQL'].map((t, i) => (
              <span key={t} className="font-medium text-ink-soft">
                {i > 0 && <span className="mr-2 text-ink-faint">·</span>}
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — code window + floating chips */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 24, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="brand-gradient absolute -inset-3 -z-10 rounded-3xl opacity-15 blur-2xl" />
          <CodeWindow />
          <FloatingChip className="-left-6 top-10" reduce={reduce} delay={0.6}>
            <span className="text-gradient">600+</span> peak users
          </FloatingChip>
          <FloatingChip className="-right-4 bottom-8" reduce={reduce} delay={1.1}>
            <span className="text-gradient">45+</span> students taught
          </FloatingChip>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

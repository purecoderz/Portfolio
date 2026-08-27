import { Icon } from './icons'
import { useTheme } from '../theme'

const OPTIONS = [
  { id: 'light', label: 'light', icon: 'sun' },
  { id: 'cyber', label: 'cyber', icon: 'cpu' },
]

// Two-segment switch rather than a single toggle button: both options are
// visible, so it reads as a choice instead of a mystery icon.
function ThemeToggle({ className = '' }) {
  const { theme, setTheme } = useTheme()

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={`flex items-center gap-0.5 rounded-lg border border-line bg-surface-alt p-0.5 ${className}`}
    >
      {OPTIONS.map((o) => {
        const active = theme === o.id
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => setTheme(o.id)}
            aria-pressed={active}
            title={`${o.label} theme`}
            className={`relative flex items-center gap-1.5 rounded-md px-2 py-1.5 font-mono text-[11px] font-medium transition-colors sm:px-2.5 ${
              active ? 'on-grad' : 'text-ink-mute hover:text-ink'
            }`}
          >
            {/* Painted first, then the label is lifted above it with `relative` */}
            {active && <span className="btn-primary absolute inset-0 rounded-md" />}
            <Icon name={o.icon} className="relative h-3.5 w-3.5" />
            <span className="relative hidden sm:inline">{o.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default ThemeToggle

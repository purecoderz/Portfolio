import { useCallback, useEffect, useMemo, useState } from 'react'
import { STORAGE_KEY, THEME_COLOR, THEMES, ThemeContext } from '../theme'

// Read whatever the pre-paint script in index.html already put on <html>, so
// the first React render agrees with what the user is looking at.
function initialTheme() {
  if (typeof document === 'undefined') return 'light'
  const attr = document.documentElement.dataset.theme
  return THEMES.includes(attr) ? attr : 'light'
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme

    // Flip on the crossfade only around the change itself — index.css scopes a
    // broad `* { transition }` rule to this attribute, which would otherwise
    // tax every hover on the page.
    root.dataset.themeSwitching = ''
    const t = setTimeout(() => delete root.dataset.themeSwitching, 320)

    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Private mode / blocked storage — the theme still applies for this visit.
    }

    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])

    return () => clearTimeout(t)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'cyber' ? 'light' : 'cyber'))
  }, [])

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider

import { createContext, useContext } from 'react'

// Two themes, selected by `data-theme` on <html>. See src/index.css for the
// palettes. `light` is the default — it's the original approved design.
export const THEMES = ['light', 'cyber']

export const STORAGE_KEY = 'theme'

// The bar colour mobile browsers paint around the page, per theme.
export const THEME_COLOR = { light: '#ffffff', cyber: '#05070f' }

export const ThemeContext = createContext(null)

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}

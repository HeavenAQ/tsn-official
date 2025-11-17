import React from 'react'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(getInitialTheme())
  const first = React.useRef(true)

  React.useEffect(() => {
    const root = document.documentElement
    // Apply theme classes
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)

    // Add a short-lived transition class when toggling (skip on first render)
    if (first.current) {
      first.current = false
      return
    }
    root.classList.add('theme-transition')
    const t = window.setTimeout(() => root.classList.remove('theme-transition'), 250)
    return () => window.clearTimeout(t)
  }, [theme])

  return (
    <button
      type="button"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
      title={theme === 'dark' ? 'Light' : 'Dark'}
    >
      {theme === 'dark' ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 0 1-1v-1a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1Zm0-20a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1ZM3 11H2a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2Zm19 0h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2ZM5.64 18.36a1 1 0 0 0 1.41 0l.71-.71a1 1 0 1 0-1.41-1.41l-.71.71a1 1 0 0 0 0 1.41Zm11.6-11.6a1 1 0 0 0 1.41 0l.71-.71a1 1 0 0 0-1.41-1.41l-.71.71a1 1 0 0 0 0 1.41Zm0 11.6.71.71a1 1 0 1 0 1.41-1.41l-.71-.71a1 1 0 1 0-1.41 1.41ZM7.76 6.05a1 1 0 1 0-1.41-1.41l-.71.71a1 1 0 0 0 1.41 1.41l.71-.71Z"/>
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z" />
        </svg>
      )}
    </button>
  )
}

export default ThemeSwitch

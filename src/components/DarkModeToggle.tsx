import { useEffect } from 'react'

interface DarkModeToggleProps {
  onToggle: (isDark: boolean) => void
  isDark: boolean
}

export default function DarkModeToggle({ onToggle, isDark }: DarkModeToggleProps) {
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <button
      onClick={() => onToggle(!isDark)}
      className="fixed top-4 left-4 z-50 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-200"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <span className="text-2xl">☀️</span>
      ) : (
        <span className="text-2xl">🌙</span>
      )}
    </button>
  )
}

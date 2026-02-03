import { useState, useEffect, useRef } from 'react'

type Theme = 'roses' | 'hearts' | 'cupid' | 'sunset'

interface ThemeSelectorProps {
  onThemeChange: (theme: Theme) => void
  currentTheme: Theme
}

export default function ThemeSelector({ onThemeChange, currentTheme }: ThemeSelectorProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const themes: { name: Theme; label: string; emoji: string; gradient: string }[] = [
    { name: 'roses', label: 'Roses', emoji: '🌹', gradient: 'from-rose-300 via-pink-300 to-red-300' },
    { name: 'hearts', label: 'Hearts', emoji: '💕', gradient: 'from-pink-200 via-red-200 to-purple-200' },
    { name: 'cupid', label: 'Cupid', emoji: '💘', gradient: 'from-purple-200 via-pink-300 to-rose-300' },
    { name: 'sunset', label: 'Sunset', emoji: '🌅', gradient: 'from-orange-200 via-pink-200 to-purple-300' },
  ]

  const currentThemeData = themes.find(t => t.name === currentTheme) || themes[1]

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpanded])

  return (
    <div ref={containerRef} className="fixed top-4 right-4 z-50">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg p-3 transition-all duration-300">
        {/* Collapsed: Show only current theme */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="px-4 py-2 rounded-xl bg-pink-500 text-white shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
            title="Change theme"
          >
            <span className="text-xl">{currentThemeData.emoji}</span>
            <span className="text-sm">▼</span>
          </button>
        )}

        {/* Expanded: Show all themes */}
        {isExpanded && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">Themes</span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                title="Collapse"
              >
                <span className="text-sm">✕</span>
              </button>
            </div>
            <div className="flex gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => onThemeChange(theme.name)}
                  className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                    currentTheme === theme.name
                      ? 'bg-pink-500 text-white scale-110 shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200'
                  }`}
                  title={theme.label}
                >
                  <span className="text-xl">{theme.emoji}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

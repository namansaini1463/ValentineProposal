import { useState, useRef, useEffect } from 'react'

interface QuestionScreenProps {
  userName: string
  onYes: () => void
}

export default function QuestionScreen({ userName, onYes }: QuestionScreenProps) {
  const [yesButtonSize, setYesButtonSize] = useState(1)
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 })
  const [noButtonMounted, setNoButtonMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const noButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Set initial position after mount
    if (noButtonRef.current && !noButtonMounted) {
      setNoButtonMounted(true)
    }
  }, [noButtonMounted])

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return

    const container = containerRef.current.getBoundingClientRect()
    const button = noButtonRef.current.getBoundingClientRect()

    // Calculate available space
    const maxX = container.width - button.width - 40
    const maxY = container.height - button.height - 40

    // Generate random position
    const newLeft = Math.random() * maxX
    const newTop = Math.random() * maxY

    setNoButtonPosition({ top: newTop, left: newLeft })
    setYesButtonSize((prev) => Math.min(prev + 0.05, 3))
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
            💝 Hey {userName}! 💝
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800">
            Will you be my Valentine?
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative h-64 md:h-80 flex items-center justify-center"
        >
          <button
            onClick={onYes}
            style={{
              transform: `scale(${yesButtonSize})`,
            }}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-4 px-8 rounded-full hover:from-green-500 hover:to-green-700 transition-all duration-200 shadow-lg z-10"
          >
            Yes! 💚
          </button>

          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
            style={{
              position: 'absolute',
              top: noButtonMounted ? `${noButtonPosition.top}px` : '50%',
              left: noButtonMounted ? `${noButtonPosition.left}px` : '65%',
              transform: noButtonMounted ? 'none' : 'translate(-50%, -50%)',
              transition: 'top 0.3s ease, left 0.3s ease',
            }}
            className="bg-gradient-to-r from-red-400 to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg whitespace-nowrap"
          >
            No 💔
          </button>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Hint: Try clicking "No" if you dare... 😏</p>
        </div>
      </div>
    </div>
  )
}

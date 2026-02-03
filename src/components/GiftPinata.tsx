import { useState } from 'react'
import confetti from 'canvas-confetti'

interface GiftPinataProps {
  onOpen: () => void
}

export default function GiftPinata({ onOpen }: GiftPinataProps) {
  const [clicks, setClicks] = useState(0)
  const [isOpening, setIsOpening] = useState(false)
  const [isExploding, setIsExploding] = useState(false)
  const [burstEmojis, setBurstEmojis] = useState<{ id: number; emoji: string; x: number; y: number; rotation: number }[]>([])
  
  const maxClicks = 5
  const intensity = clicks / maxClicks

  const valentineEmojis = ['❤️', '💕', '💖', '💝', '💗', '💓', '💞', '💘', '🌹', '💐', '🍫', '🎁', '💌', '😍', '🥰', '💑', '💏', '💋']

  const handleClick = () => {
    if (clicks < maxClicks) {
      setClicks(prev => prev + 1)

      // Small confetti on each click
      confetti({
        particleCount: 10,
        spread: 40,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ff69b4', '#ff1493'],
      })

      if (clicks + 1 >= maxClicks) {
        // Open the gift
        setTimeout(() => openGift(), 300)
      }
    }
  }

  const openGift = () => {
    setIsOpening(true)

    // Wait for the opening animation to complete before exploding
    setTimeout(() => {
      setIsExploding(true)
      
      // Create burst of emojis
      const emojis = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        emoji: valentineEmojis[Math.floor(Math.random() * valentineEmojis.length)],
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
        rotation: Math.random() * 720 - 360,
      }))
      setBurstEmojis(emojis)
    }, 500)

    // Big confetti explosion
    const duration = 3000
    const end = Date.now() + duration
    const colors = ['#ff0000', '#ff69b4', '#ff1493', '#c71585', '#db7093', '#ff6b9d']

    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.6 },
        colors: colors,
      })
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.6 },
        colors: colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()

    // Massive center blast
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.6 },
        colors: colors,
        startVelocity: 45,
      })
    }, 100)

    // Call onOpen after animation
    setTimeout(() => {
      onOpen()
    }, 2000)
  }

  // Calculate vibration intensity based on clicks
  const getVibrationClass = () => {
    if (clicks === 0) return ''
    if (clicks === 1) return 'animate-shake-slow'
    if (clicks === 2) return 'animate-shake-medium'
    if (clicks === 3) return 'animate-shake-fast'
    if (clicks >= 4) return 'animate-shake-intense'
    return ''
  }

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Here's a Valentine's Day gift for you! 🎁
      </h2>

      {/* Gift Box */}
      <div className="relative mb-6">
        {!isExploding ? (
          <button
            onClick={handleClick}
            className={`relative cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 ${getVibrationClass()} ${
              isOpening ? 'animate-gift-open' : ''
            }`}
          >
            {/* Gift box */}
            <div className="relative">
              {/* Box body */}
              <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl shadow-2xl relative overflow-hidden">
                {/* Ribbon vertical */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-full bg-yellow-400" />
                {/* Ribbon horizontal */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-6 md:h-8 bg-yellow-400" />
                {/* Sparkles */}
                <div className="absolute top-4 right-4 text-xl md:text-2xl animate-pulse">✨</div>
                <div className="absolute bottom-4 left-4 text-xl md:text-2xl animate-pulse delay-75">✨</div>
              </div>
              
              {/* Bow on top */}
              <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2">
                <div className="text-5xl md:text-6xl">🎀</div>
              </div>
            </div>
          </button>
        ) : (
          // Opening animation - emojis burst from center
          <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
            {/* Burst emojis */}
            {burstEmojis.map((item) => (
              <div
                key={item.id}
                className="absolute text-3xl md:text-4xl animate-burst"
                style={{
                  '--tx': `${item.x}px`,
                  '--ty': `${item.y}px`,
                  '--r': `${item.rotation}deg`,
                } as any}
              >
                {item.emoji}
              </div>
            ))}
          </div>
        )}
      </div>

      {!isOpening && (
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-center px-4">
          Click to open your gift! 💝
        </p>
      )}

      <style>{`
        @keyframes gift-open {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) rotate(5deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(0.3) rotate(15deg);
            opacity: 0;
          }
        }

        .animate-gift-open {
          animation: gift-open 0.5s ease-in-out forwards;
          pointer-events: none;
        }

        @keyframes shake-slow {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-2px) rotate(-1deg); }
          75% { transform: translateX(2px) rotate(1deg); }
        }

        @keyframes shake-medium {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-4px) rotate(-2deg); }
          75% { transform: translateX(4px) rotate(2deg); }
        }

        @keyframes shake-fast {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-8px) rotate(-4deg); }
          75% { transform: translateX(8px) rotate(4deg); }
        }

        @keyframes shake-intense {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          10% { transform: translateX(-10px) rotate(-5deg); }
          20% { transform: translateX(10px) rotate(5deg); }
          30% { transform: translateX(-10px) rotate(-5deg); }
          40% { transform: translateX(10px) rotate(5deg); }
          50% { transform: translateX(-10px) rotate(-5deg); }
          60% { transform: translateX(10px) rotate(5deg); }
          70% { transform: translateX(-10px) rotate(-5deg); }
          80% { transform: translateX(10px) rotate(5deg); }
          90% { transform: translateX(-10px) rotate(-5deg); }
        }
        
        .animate-shake-slow {
          animation: shake-slow 0.5s ease-in-out infinite;
        }

        .animate-shake-medium {
          animation: shake-medium 0.4s ease-in-out infinite;
        }

        .animate-shake-fast {
          animation: shake-fast 0.3s ease-in-out infinite;
        }

        .animate-shake-intense {
          animation: shake-intense 0.2s ease-in-out infinite;
        }

        @keyframes burst {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) rotate(var(--r)) scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-burst {
          animation: burst 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

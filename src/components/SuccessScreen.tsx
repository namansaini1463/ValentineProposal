import { useEffect } from 'react'
import confetti from 'canvas-confetti'

interface SuccessScreenProps {
  userName: string
}

export default function SuccessScreen({ userName }: SuccessScreenProps) {
  useEffect(() => {
    // Trigger confetti
    const duration = 3000
    const end = Date.now() + duration

    const colors = ['#ff0000', '#ff69b4', '#ff1493', '#c71585', '#db7093']

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      })
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()

    // Big confetti blast
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
      })
    }, 200)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-2xl text-center">
        <div className="text-6xl md:text-8xl mb-6 animate-pulse">
          ❤️💕💖
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
          Yay! {userName}!
        </h1>
        
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          I knew you would say YES! 🎉
        </p>
        
        <p className="text-xl text-gray-600 mb-8">
          This Valentine's Day is going to be amazing! 💝
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-4xl md:text-5xl mb-8">
          <div className="animate-bounce" style={{ animationDelay: '0s' }}>🌹</div>
          <div className="animate-bounce" style={{ animationDelay: '0.1s' }}>💐</div>
          <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>🍫</div>
          <div className="animate-bounce" style={{ animationDelay: '0.3s' }}>🎁</div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-2xl p-6 md:p-8">
          <p className="text-lg md:text-xl text-gray-700 italic">
            "Love is in the air, and it's all because of you! 💕"
          </p>
        </div>

        {/* <button
          onClick={() => window.location.reload()}
          className="mt-8 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-8 rounded-lg hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Start Over 🔄
        </button> */}
      </div>
    </div>
  )
}

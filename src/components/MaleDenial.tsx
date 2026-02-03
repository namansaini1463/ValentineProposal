export default function MaleDenial() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md text-center transition-colors duration-300">
        <div className="text-6xl md:text-8xl mb-6 animate-bounce">😅</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Ewww! You're GAY!!
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          Sorry, but I'm not looking to date guys! 💁‍♀️
        </p>
        <div className="mt-8">
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
}

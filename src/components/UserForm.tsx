import { useState } from 'react'

interface UserFormProps {
  onSubmit: (data: { name: string; email: string; gender: 'M' | 'F' }) => void
}

export default function UserForm({ onSubmit }: UserFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState<'M' | 'F' | ''>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email && gender) {
      onSubmit({ name, email, gender })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md transition-colors duration-300">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">💕</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Valentine's Special
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Let's get to know you!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-pink-200 dark:border-pink-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-pink-200 dark:border-pink-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
              Gender
            </label>
            <div className="flex gap-4">
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="M"
                  checked={gender === 'M'}
                  onChange={(e) => setGender(e.target.value as 'M')}
                  className="sr-only peer"
                  required
                />
                <div className="border-2 border-pink-200 dark:border-pink-700 rounded-lg px-4 py-3 text-center peer-checked:border-pink-500 peer-checked:bg-pink-50 dark:peer-checked:bg-pink-900 transition-all">
                  <span className="text-2xl mb-1 block">👨</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">Male</span>
                </div>
              </label>

              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="F"
                  checked={gender === 'F'}
                  onChange={(e) => setGender(e.target.value as 'F')}
                  className="sr-only peer"
                  required
                />
                <div className="border-2 border-pink-200 dark:border-pink-700 rounded-lg px-4 py-3 text-center peer-checked:border-pink-500 peer-checked:bg-pink-50 dark:peer-checked:bg-pink-900 transition-all">
                  <span className="text-2xl mb-1 block">👩</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">Female</span>
                </div>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-4 px-6 rounded-lg hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Proceed 💖
          </button>
        </form>
      </div>
    </div>
  )
}

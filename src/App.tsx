import { useState } from 'react'
import emailjs from '@emailjs/browser'
import UserForm from './components/UserForm'
import MaleDenial from './components/MaleDenial'
import QuestionScreen from './components/QuestionScreen'
import SuccessScreen from './components/SuccessScreen'
import ThemeSelector from './components/ThemeSelector'
import FloatingHearts from './components/FloatingHearts'
import DarkModeToggle from './components/DarkModeToggle'
import { EMAILJS_CONFIG } from './config/emailjs'

type Screen = 'form' | 'denial' | 'question' | 'success'
type Theme = 'roses' | 'hearts' | 'cupid' | 'sunset'

interface UserData {
  name: string
  email: string
  gender: 'M' | 'F'
}

function App() {
  const [screen, setScreen] = useState<Screen>('form')
  const [userData, setUserData] = useState<UserData | null>(null)
  const [theme, setTheme] = useState<Theme>('hearts')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const themeGradients: Record<Theme, string> = {
    roses: 'from-rose-300 via-pink-300 to-red-300',
    hearts: 'from-pink-200 via-red-200 to-purple-200',
    cupid: 'from-purple-200 via-pink-300 to-rose-300',
    sunset: 'from-orange-200 via-pink-200 to-purple-300',
  }

  const darkThemeGradients: Record<Theme, string> = {
    roses: 'from-rose-900 via-pink-900 to-red-900',
    hearts: 'from-pink-900 via-red-900 to-purple-900',
    cupid: 'from-purple-900 via-pink-900 to-rose-900',
    sunset: 'from-orange-900 via-pink-900 to-purple-900',
  }

  const sendEmail = async (response: 'Yes' | 'Denied') => {
    if (!userData) return

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: userData.name,
          from_email: userData.email,
          gender: userData.gender === 'M' ? 'Male' : 'Female',
          response: response,
          timestamp: new Date().toLocaleString(),
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      console.log('Email sent successfully!')
    } catch (error) {
      console.error('Failed to send email:', error)
    }
  }

  const handleFormSubmit = (data: UserData) => {
    setUserData(data)
    if (data.gender === 'M') {
      setScreen('denial')
      sendEmail('Denied') // Send email for male users
    } else {
      setScreen('question')
    }
  }

  const handleYes = () => {
    sendEmail('Yes') // Send email when user says yes
    setScreen('success')
  }

  const currentGradient = isDarkMode ? darkThemeGradients[theme] : themeGradients[theme]

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentGradient} transition-colors duration-500 relative`}>
      <FloatingHearts />
      <DarkModeToggle isDark={isDarkMode} onToggle={setIsDarkMode} />
      <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
      
      <div className="relative z-10">
        {screen === 'form' && <UserForm onSubmit={handleFormSubmit} />}
        {screen === 'denial' && <MaleDenial />}
        {screen === 'question' && (
          <QuestionScreen 
            userName={userData?.name || ''} 
            onYes={handleYes} 
          />
        )}
        {screen === 'success' && <SuccessScreen userName={userData?.name || ''} />}
      </div>
    </div>
  )
}

export default App

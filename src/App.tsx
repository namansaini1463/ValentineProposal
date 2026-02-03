import { useState } from 'react'
import emailjs from '@emailjs/browser'
import UserForm from './components/UserForm'
import MaleDenial from './components/MaleDenial'
import QuestionScreen from './components/QuestionScreen'
import SuccessScreen from './components/SuccessScreen'
import { EMAILJS_CONFIG } from './config/emailjs'

type Screen = 'form' | 'denial' | 'question' | 'success'

interface UserData {
  name: string
  email: string
  gender: 'M' | 'F'
}

function App() {
  const [screen, setScreen] = useState<Screen>('form')
  const [userData, setUserData] = useState<UserData | null>(null)

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-red-200 to-purple-200">
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
  )
}

export default App

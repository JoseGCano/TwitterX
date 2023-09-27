import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomeLogin } from './pages/homeLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HomeLogin/>
  )
}

export default App

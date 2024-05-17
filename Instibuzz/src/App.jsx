import { useState } from 'react'


import './App.css'
import ThankYou from './components/ThankYou'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThankYou/>
    </>
  )
}

export default App

import { useState } from 'react'


import './App.css'
import ThankYou from './components/ThankYou'
import OurServices from './components/OurServices'
import Loading from './components/loading/Loading.jsx'
import Skeleton from './components/skeleton/Skeleton.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ThankYou/> */}
      {/* <Loading/> */}
      <Skeleton/>
      {/* <OurServicev ,./s/> */}    </>
  )

  
}

export default App

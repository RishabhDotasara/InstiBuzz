import { useState } from 'react'


// import './App.css'
import ThankYou from './components/ThankYou'
import OurServices from './components/OurServices'
import Loading from './components/loading/Loading.jsx'
import Skeleton from './components/skeleton/Skeleton.jsx'
import Shop from './components/shop/Shop.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ThankYou/> */}
      {/* <Loading/> */}
      {/* <Skeleton/> */}
      <Shop/>
      {/* <OurServicev ,./s/> */}    </>
  )

  
}

export default App

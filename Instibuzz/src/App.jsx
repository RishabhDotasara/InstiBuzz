import { useState } from 'react'
import Card from './components/my-orders-card/Card'


// // import './App.css'
// import ThankYou from './components/ThankYou'
// import OurServices from './components/OurServices'
// import Loading from './components/loading/Loading.jsx'
// import Skeleton from './components/skeleton/Skeleton.jsx'
// import Shop from './components/shop/Shop.jsx'
// import Services from './components/services/Services.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ThankYou/> */}
      {/* <Loading/> */}
      {/* <Skeleton/> */}
      {/* <Shop/> */}
      {/* <Services/> */}
      {/* <OurServicev ,./s/> */}    
      <Card/>  
    </>
  )

  
}

export default App

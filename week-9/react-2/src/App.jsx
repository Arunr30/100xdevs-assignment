import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)
  
    setInterval(() => {
      setCount(count + 1)
    }, 1000)
    
  return (
    <>
    <h2>{count}</h2>

    </>
  )
}



export default App

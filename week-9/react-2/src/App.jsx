import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
    const[visible, setVisible] = useState(true)
    useEffect(function() {
        setInterval(() => {
            setVisible(c => !c)
        }, 5000)
    }, [])
  
  return (
    // conditional rendering
    <>
    {visible && <Counter />}
    </>
  )
}

function Counter() {
    const[count, setCount] = useState(0)
    useEffect(()=> {
        // mountion, side effects!
        let clock = setInterval(() => {
            console.log("mounted!")
            setCount(count => count + 1)
        }, 1000)

        // unmounting/ cleanup!
        return function() {
            console.log("unmounted!");
            clearInterval(clock)
        }
    }, [])
  
    return(
        <>
        <h1> count is  {count}</h1>     
        </>
    )
}


export default App

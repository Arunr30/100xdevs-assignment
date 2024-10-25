import { useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  let timer = useRef()
  function startCount() {
    let value = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)
    timer.current = value
  }

  function stopCount() {
    clearInterval(timer.current)
  }
  return (
    <div>
      {count}
      <button onClick={startCount}>start</button>
      <button onClick={stopCount}>stop</button>
    </div>
  )
}

export default App

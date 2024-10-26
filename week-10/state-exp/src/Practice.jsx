import { useEffect, useState } from 'react'

const Practice = () => {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('green')
  useEffect(() => {
    document.title = `count: ${count} ${color}`
  }, [count, color])

  function addCount() {
    setCount((c) => c + 1)
  }
  function change() {
    setColor(color === 'green' ? 'red' : 'green')
  }

  return (
    <div>
      <p style={{ color: color }}>count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={change}>Change</button>
    </div>
  )
}

export default Practice

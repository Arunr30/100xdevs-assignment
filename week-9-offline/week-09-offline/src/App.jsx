import { useState } from 'react'

function App() {
  return (
    <div>
      <Button />
    </div>
  )
}

function Button() {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <p>this is from conditional rendering!</p>}
    </div>
  )
}

export default App

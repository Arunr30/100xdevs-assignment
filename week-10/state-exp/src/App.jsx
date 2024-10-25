import { useState } from 'react'

const App = () => {
  return (
    <div>
      <LightBulb />
    </div>
  )
}

const LightBulb = () => {
  const [bulbOn, setBulbOn] = useState(false)
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleState bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  )
}

const BulbState = ({ bulbOn }) => {
  return <div>{bulbOn ? 'Turn on' : 'Turn off'}</div>
}

const ToggleState = ({ setBulbOn }) => {
  function toggle() {
    setBulbOn((currentState) => !currentState)
  }
  return (
    <div>
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App

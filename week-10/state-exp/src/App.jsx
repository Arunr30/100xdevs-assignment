import { useState } from 'react'

function App() {
  return (
    <>
      <LightBulb />
    </>
  )
}

const LightBulb = () => {
  const [bulbOn, setBulbOn] = useState(true)
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleState bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  )
}

const BulbState = ({ bulbOn }) => {
  return <div>{bulbOn ? 'bulb on' : 'bulb off'}</div>
}

const ToggleState = ({ setBulbOn }) => {
  function toggle() {
    setBulbOn((currentState) => !currentState)
  }
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default App

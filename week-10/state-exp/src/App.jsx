import { useState, createContext, useContext } from 'react'

// creating a context
const Context = createContext()

const BulbProvider = ({ children }) => {
  const [bulbOn, setBulbOn] = useState(false)
  return (
    <div>
      <Context.Provider
        value={{
          bulbOn: bulbOn,
          setBulbOn: setBulbOn,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  )
}

const App = () => {
  // providing a context.
  return (
    <div>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>
    </div>
  )
}

const LightBulb = () => {
  return (
    <div>
      <BulbState />
      <ToggleState />
    </div>
  )
}

const BulbState = () => {
  const { bulbOn } = useContext(Context)
  return <div>{bulbOn ? 'Turn on' : 'Turn off'}</div>
}

const ToggleState = () => {
  const { setBulbOn } = useContext(Context)
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

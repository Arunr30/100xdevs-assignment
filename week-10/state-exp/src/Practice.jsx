import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

const PracticeProvider = ({ children }) => {
  const [state, setState] = useState(0)
  return (
    <div>
      <Context.Provider
        value={{
          state,
          setState,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  )
}

export default PracticeProvider

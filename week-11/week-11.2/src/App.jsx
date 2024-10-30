import { createContext } from 'react'
import './App.css'
import { useState } from 'react';
import { useContext } from 'react';
const Context = createContext();


function CountContext({children}) {
    const[count, setCount] = useState(0)
    return (
      <Context.Provider value={{count, setCount}}>
        {children}
      </Context.Provider>
    )
    
  }

function Parent() {

  return (
    <>
     <h1>
      <CountContext>
        <CountValue />
          <Increase />
          <Decrease />
      </CountContext>  
     </h1>
    </>
  )
}

const Increase = () => {
  const {count, setCount} = useContext(Context)
  return <button onClick={() => setCount(count + 1)}>Increase</button>
}

const Decrease = () => {
  const {count, setCount} = useContext(Context)
  return <button onClick={() => setCount(count - 1)}>Increase</button>
}

const CountValue = () => {
  const {count} = useContext(Context)
  return <h1>count: {count}</h1>
}

const App = () => {
  return <div>
    <Parent />
  </div>
}
export default App


// recoil minimize the re renders the app.
// managing the state in a controlled way.

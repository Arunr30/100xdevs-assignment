import { useState } from "react"



// custom hook,

function useCounter(){
  const[count, setCount] = useState(1)
  function increasebtn() {
    setCount(c => c + 1)
  }
  function decreasebtn() {
    setCount(c => c - 1)
  }

  return {
    count,
    increasebtn,
    decreasebtn
  }
}

function App() {
  const {count, increasebtn, decreasebtn} = useCounter()

  return (
    <>
      {count}
      <button onClick={increasebtn}>increase</button>
      <button onClick={decreasebtn}>decrease</button>
    </>
  )
}

export default App

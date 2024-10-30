import { useEffect, useRef, useState } from "react";


const useDebouce = (value, delay) => {
  const[debounceVal, setDebounceVal] = useState(value);
  
  
  useEffect(() => {
      const handler = setTimeout(() => {
        setDebounceVal(value)
      }, delay)
    
      return () => {
        clearTimeout(handler)
      } 
    },[value, delay])

  return debounceVal
} 



function App() {
  const[inputVal, setInputVal] = useState("")
  const deBouncedValue = useDebouce(inputVal, 200)

  function change(e) {
    setInputVal(e.target.value)
  }

  useEffect(() => {
    console.log("expensive operation");
    
  },[deBouncedValue])
  return (
    <div>
      <input type="text" onChange={change} />
    </div>
  );
}

export default App;

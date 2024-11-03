
import './App.css'
import { counter, evenCounter } from './store/atoms/count';
import { useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil';


// const Context = createContext();


// function CountContext({children}) {
    
//     return (
//       <Context.Provider value={{count, setCount}}>
//         {children}
//       </Context.Provider>
//     )
    
//   }




const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </div>
  )
}


const Buttons = () => {
  const setCount = useSetRecoilState(counter)

  function increase() {
    setCount(c => c + 2)

  }
  function decrease() {
    setCount(c => c - 1)
    
  }
  return(
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

const Counter = () => {
  const count = useRecoilValue(counter)
  return <div>
    {count}
  </div>
}

const IsEven = () => {
  const isEven = useRecoilValue(evenCounter)
  return <div>
    {isEven ? "even" : "odd"}
  </div>
}

export default App


// recoil minimize the re renders the app.
// managing the state in a controlled way.

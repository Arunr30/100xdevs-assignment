import { createContext } from 'react'
import './App.css'
import { useState } from 'react';
import { useContext } from 'react';
import { counter } from './store/atoms/count';
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil';
import MemoFn from './memo';

// const Context = createContext();


// function CountContext({children}) {
    
//     return (
//       <Context.Provider value={{count, setCount}}>
//         {children}
//       </Context.Provider>
//     )
    
//   }

const App = () => {
  // return <RecoilRoot>
  //   <Parent />
  // </RecoilRoot>
  // return <MemoFn />
   
}


function Parent() {

  return (
    <>
     <h1>
        <CountValue />
        <Increase />
        <Decrease /> 
     </h1>
    </>
  )
}

const Increase = () => {
  const setCount = useRecoilSta(counter)
  function increase() {
    setCount(c => c + 1)
  }
  return <button onClick={increase}>Increase</button>
}

const Decrease = () => {
  const setCount = useRecoilState(counter)
  function decrease() {
    setCount(c => c - 1)
  }
  return <button onClick={decrease}>Increase</button>
}

const CountValue = () => {
  const count = useRecoilValue(counter)

  return <div>
      count: {count}
  </div>
  
}


export default App


// recoil minimize the re renders the app.
// managing the state in a controlled way.

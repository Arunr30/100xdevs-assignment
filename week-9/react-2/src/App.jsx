import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

    const[count, setCount] = useState(0)
    const[count1, setCount1] = useState(0)

    function increaseCount() {
        setCount(c => c + 1)
    }
    function decreaseCount() {
        setCount1(c => c - 1)
    }
    return (
        <div>
            <Counter count = {count} count1 = {count1}/>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    )
    
}
// mounting, un mounting, re rendering! --> life cycle events!

function Counter(props){
    useEffect(function() {
        // mount
        console.log("mount!")

        return function() {
            console.log("unmount!")
        }
    }, [])

    useEffect(function() {
        console.log("count has changed!")
    }, [props.count])
    return (
        <div>
            <h1>Counter {props.count}</h1>
            <h1>Counter2 {props.count1}</h1>
        </div>
    )
}

export default App

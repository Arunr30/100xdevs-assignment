import { useEffect } from "react";
import { useState } from "react";
import { memo } from "react";

const MemoFn = () => {
    const[count, setCount] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setCount(c => c + 1)
        }, 3000)
    }, [])

    return (
        <div>
            <Counter count={count}/>
            <Increase />
        </div>   
    )
}

const Counter = memo(({count}) => {
    return (
        <div>
            {count}
        </div>
    )
})

const Increase = memo(() => {
    return (
        <button>hi</button>
    )
})



export default MemoFn
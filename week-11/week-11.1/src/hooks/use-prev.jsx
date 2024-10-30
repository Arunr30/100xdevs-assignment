import { useEffect, useRef, useState } from "react";


const usePrev = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value
    },[value])

    return ref.current
}

export const Previous = () => {
    const[value, setValue] = useState(0)
    const prevValue = usePrev(value)

    return <div>
        <h1>current count: {value}</h1>
        <h2>previous count: {prevValue}</h2>
        <button onClick={() => setValue((c) => c + 1)}>count</button>
    </div>
}
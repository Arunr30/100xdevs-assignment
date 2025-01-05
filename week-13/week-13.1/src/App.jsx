import React, { useRef } from 'react'

export const App = () => {
    const inputRef = useRef(null)

    function handleFocus() {
        inputRef.current.focus()
    }
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button className="bg-red-500" onClick={handleFocus}>
                signup
            </button>
        </div>
    )
}

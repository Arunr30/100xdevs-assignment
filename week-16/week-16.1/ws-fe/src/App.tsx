
import { useEffect, useRef, useState } from 'react'
import './App.css'
function App() {
  const[socket, setSocket] = useState();
  const inputRef = useRef()
  const sendMessage = () => {
    if(!socket) {
      return;
    }
    // @ts-ignore
    socket.send('ping')
  }

  // fetching an api 
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    console.log(ws)
    ws.onmessage = (ev) => {
      console.log(ev.data)
      alert(ev.data)
      const textarea = document.getElementById('text')
      // @ts-ignore
      textarea.textContent = ev.data
    }
  },[])

  return (
    <div>
      <input type="text" placeholder='message...'/>
      <button ref={inputRef} onClick={sendMessage}>send</button>
      <div id='text'></div>
    </div>
  )
}

export default App

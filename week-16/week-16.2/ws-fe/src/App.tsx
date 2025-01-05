import { useEffect, useRef, useState } from "react"




function App() {

  const[messages, setMessages] = useState(["hi there", "hello"]);
  const wsRef = useRef(null);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001")
    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data])
    }
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {roomId: 'red'}
      }))
    }
    
  },[])
  return (
    <div className="h-screen bg-black">
      <br /><br /><br />
      <div>
        <div className="h-[85vh] ">
          {messages.map((message, index) => <div className="m-8" key={index}>
            <span className="bg-white text-black rounded p-4 ">
              {message}
            </span> 
          </div>)}
        </div>
        <div className="w-full bg-white flex">
          <input id="message" className="flex-1 p-4" type="text" />
          <button onClick={() => {
            const msg = document.getElementById('message')?.value;
              wsRef.current.send(JSON.stringify({
                type: "chat",
                payload: {
                  chat: msg
                }
              }))
          }} className="bg-purple-600 text-white p-4">
            send message
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

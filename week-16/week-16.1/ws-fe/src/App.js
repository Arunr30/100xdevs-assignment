"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
function App() {
    const [socket, setSocket] = (0, react_1.useState)();
    const inputRef = (0, react_1.useRef)();
    const sendMessage = () => {
        if (!socket) {
            return;
        }
        // @ts-ignore
        socket.send('ping');
    };
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket("ws://localhost:5002");
        setSocket(ws);
        ws.onmessage = (ev) => {
            alert(ev.data);
        };
    });
    return (<div>
      <input type="text"/>
      <button ref={inputRef} onClick={sendMessage}>send</button>
    </div>);
}
exports.default = App;

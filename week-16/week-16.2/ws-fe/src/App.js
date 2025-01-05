"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function App() {
    function sendMessage() {
    }
    return (<div>
      <input type="text" placeholder="message..."/>
      <button type="submit" onClick={sendMessage}>send</button>
    </div>);
}
exports.default = App;

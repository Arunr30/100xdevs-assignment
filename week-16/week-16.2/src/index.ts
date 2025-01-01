import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port: 3001})

let userCount = 0;
let allSocket: WebSocket[] = []

// when the new user got connected
wss.on('connection', function(socket) {
  allSocket.push(socket);
  userCount++;
  console.log('user is connected: ', userCount)
  // when the user sends a message 
  socket.on('message', (message) => {
    console.log('message recieved: ', message.toString());
    for(let i = 0; i < allSocket.length; i++) {
      const s = allSocket[i];
      // server responds back with a message
      s.send(message.toString() + ' message from server')
    }

    // for each..
    // allSocket.forEach((socket) => {
    //   socket.send(message.toString() + 'message from the servrer')
    // })
  })
})





/*
flow of the websocket

1. import websocket server and websocket
2. give port
3. handle the new user throug 'on' method with socket callback
3. that socket is a callback when the client sends any message it will give to us. socket.on();
4. server responds back socket.send()
 */


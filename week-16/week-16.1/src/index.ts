// import { WebSocketServer } from "ws"; // importing wss from ws.,

// const wss = new WebSocketServer({port: 5001}) // defining a port


// // handling the event
// wss.on("connection", function(socket) {
//   console.log("user connected" + new Date());
//   setInterval(() => {
//     socket.send("hello")
//   },5000)

//   socket.on("message", (e) => {
//     console.log("reciever" + e.toString())
//   })
// })

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 5002})

wss.on("connection", function(socket) {
  console.log('user connected');

  socket.on('message', (e) => {
    const msg = e.toString().trim();
    console.log("sending a ping, recieving a pong");
    if(msg === 'ping') {
      socket.send('pong')
    }
  })
})






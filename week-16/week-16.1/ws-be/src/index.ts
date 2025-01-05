import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080})

wss.on('connection', function(socket) {
  console.log('user is connected')
  socket.on("message", (e) => {
    const msg = e.toString().trim();

    if(msg === "ping") {
      socket.send("pong");
    }
  })
})
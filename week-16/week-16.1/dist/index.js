"use strict";
// import { WebSocketServer } from "ws"; // importing wss from ws.,
Object.defineProperty(exports, "__esModule", { value: true });
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
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 5002 });
wss.on("connection", function (socket) {
    console.log('user connected');
    socket.on('message', (e) => {
        const msg = e.toString().trim();
        console.log("sending a ping, recieving a pong");
        if (msg === 'ping') {
            socket.send('pong');
        }
    });
});

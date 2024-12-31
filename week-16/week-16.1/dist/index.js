"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws"); // importing wss from ws.,
const wss = new ws_1.WebSocketServer({ port: 5001 }); // defining a port
// handling the event
wss.on("connection", function (socket) {
    console.log("user connected" + new Date());
    setInterval(() => {
        socket.send("hello");
    }, 5000);
    socket.on("message", (e) => {
        console.log("reciever" + e.toString());
    });
});

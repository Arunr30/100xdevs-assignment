"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 3001 });
let userCount = 0;
wss.on('connection', function (socket) {
    userCount++;
    console.log('user is connected: ', userCount);
    socket.on('message', (message) => {
        console.log('message recieved: ', message.toString());
        socket.send(message.toString() + ' from the server');
    });
});

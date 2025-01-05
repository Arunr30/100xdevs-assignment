"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 3001 });
let userCount = 0;
let allSocket = [];
// when the new user got connected
wss.on('connection', (socket) => {
    userCount++;
    console.log('user connected');
    socket.on('message', (message) => {
        // @ts-ignore
        const parsedMessage = JSON.parse(message);
        if (parsedMessage === 'join') {
            allSocket.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }
        if (parsedMessage === 'chat') {
            // const currentUserRoom = allSocket.find(x => x.socket === socket)?.room
            let currentUserRoom = null;
            for (let i = 0; i < allSocket.length; i++) {
                if (allSocket[i].socket === socket) {
                    currentUserRoom = allSocket[i].room;
                }
            }
        }
        allSocket.forEach(socket => {
            // @ts-ignore
            socket.send(parsedMessage.payload.roomId);
        });
    });
    socket.on('close', () => {
        allSocket.filter(x => x != socket);
    });
});
/*
flow of the websocket

1. import websocket server and websocket
2. give port
3. handle the new user throug 'on' method with socket callback
3. that socket is a callback when the client sends any message it will give to us. socket.on();
4. server responds back socket.send()
 */

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 3001 });
let allUser = [];
wss.on('connection', (socket) => {
    console.log('user connected');
    socket.on('message', (message) => {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === "join") {
            console.log('user joined' + parsedMessage.payload.roomId);
            allUser.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }
        if (parsedMessage.type == "chat") {
            console.log('user wants to chat');
            // const currentUser = allUser.find(x => x.socket === socket)
            let currentUser = null;
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].socket == socket) {
                    currentUser = allUser[i].room;
                }
            }
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].room == currentUser) {
                    allUser[i].socket.send(parsedMessage.payload.roomId);
                }
            }
        }
    });
});

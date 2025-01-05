"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', function (socket) {
    console.log('user is connected');
    socket.on("message", (e) => {
        const msg = e.toString().trim();
        if (msg === "ping") {
            socket.send("pong");
        }
    });
});

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const client_1 = require("@prisma/client");
const app = new express();
const client = new client_1.PrismaClient();
app.use(express.json());
// @ts-ignore
// create a new user
app.post('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email } = req.body;
    const user = yield client.user.create({
        data: { username, email },
    });
    res.json(user);
}));
// create a post for user 
// @ts-ignore
app.post('/post', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, authorId } = req.body;
    const post = yield client.post.create({
        data: { title, content, authorId }
    });
    res.json(post);
}));
// @ts-ignore
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.user.findMany({
        include: {
            posts: true
        }
    });
    res.json(users);
}));
// @ts-ignore
app.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield client.user.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            posts: true
        }
    });
    res.json(user);
}));
// @ts-ignore
app.put('/posts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = yield client.post.update({
        where: {
            id: Number(id)
        },
        data: {
            title,
            content
        }
    });
    res.json(post);
}));
app.listen(3000, () => {
    console.log('port is connected');
});

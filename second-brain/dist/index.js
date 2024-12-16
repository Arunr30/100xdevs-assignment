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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// zod validation, hash the password
app.post('/api/v1/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        yield db_1.userModel.create({
            username,
            password: hashedPassword
        });
    }
    catch (error) {
        console.log(error);
    }
    res.json({
        msg: "you are signed up!"
    });
}));
app.post('/api/v1/signup', (req, res) => {
});
app.post('/api/v1/content', (req, res) => {
});
app.get('/api/v1/content', (req, res) => {
});
app.delete('/api/v1/delete', (req, res) => {
});
app.post('/api/v1/brain/share', (req, res) => {
});
app.get('/api/v1/brain/:shareLink', (req, res) => {
});
app.listen(3000, () => {
    console.log('port is listening');
});

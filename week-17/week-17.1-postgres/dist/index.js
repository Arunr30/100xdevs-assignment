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
const pg_1 = require("pg");
const express = require('express');
const app = express();
app.use(express.json());
// const pgClient = new Client("postgresql://neondb_owner:qQAYmDMwX5O3@ep-cool-bar-a53p0wva.us-east-2.aws.neon.tech/neondb?sslmode=require")
const pgClient = new pg_1.Client({
    user: "neondb_owner",
    password: "qQAYmDMwX5O3",
    port: 5432,
    host: "ep-cool-bar-a53p0wva.us-east-2.aws.neon.tech",
    database: "neondb",
    ssl: true
});
pgClient.connect();
// @ts-ignore
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email } = req.body;
        const insertQuery = `Insert into users (username, password, email) VALUES($1, $2, $3)`;
        const values = [username, password, email];
        const response = yield pgClient.query(insertQuery, values);
        console.log(response);
        res.json({
            msg: "you have signed up"
        });
    }
    catch (error) {
        // @ts-ignore
        console.log('error while signed up', error.message);
    }
}));
app.listen(5001, () => {
    console.log('port is serving');
});

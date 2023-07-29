"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const GET_OBJECT = {
    hello: "world"
};
const app = (0, express_1.default)();
app.get('/api/hello', (_, res) => {
    return res.json(GET_OBJECT);
});
app.listen(PORT, () => {
    console.log('server is running on PORT: ' + PORT.toString());
});

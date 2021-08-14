"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const VoiceOver_1 = require("../functions/VoiceOver");
const app = express_1.default();
const http = http_1.default.createServer(app);
const io = new socket_io_1.Server(http);
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.post("/voiceover", async (req, res) => {
    const { text, outputFile } = req.body;
    const data = await VoiceOver_1.voiceMp3(text, outputFile);
    res.json(data);
});
io.on("connection", (socket) => {
    console.log("Connected");
});
http.listen(process.env.PORT || 3001, () => console.log(process.env.URL));

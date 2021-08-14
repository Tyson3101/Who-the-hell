require("dotenv").config();
import HTTP from "http";
import express from "express";
import { Server } from "socket.io";
import { voiceMp3 } from "../functions/VoiceOver";
const app = express();
const http = HTTP.createServer(app);
const io = new Server(http);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/voiceover", async (req, res) => {
  const { text, outputFile } = req.body;
  const data = await voiceMp3(text, outputFile);
  res.json(data);
});

io.on("connection", (socket) => {
  console.log("Connected");
});

http.listen(process.env.PORT || 3001, () => console.log(process.env.URL));

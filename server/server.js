require("dotenv").config();
import HTTP from "http";
import express from "express";
import short from "short-uuid";
import fs from "fs";
import { Server } from "socket.io";
import { voiceMp3 } from "../src/functions/VoiceOver.js";
import React from "react";
import ReactDOMServer from "react-dom/server.js";
const app = express();
const http = HTTP.createServer(app);
const io = new Server(http);

app.use(require("cors")({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./build"));

function ReactToHtml() {
  let html;
  try {
    html = fs.readFileSync("./build/index.html", "utf-8");
  } catch (e) {
    return [undefined, e];
  }
  return [html];
}

app.use((req, res) => {
  const [htmlString, error] = ReactToHtml();
  if (error) return res.status(500).send("Error Happened");
  else return res.send(htmlString);
});

app.post("/voiceover", async (req, res) => {
  const { text, outputFile } = req.body;
  const data = await voiceMp3(text, outputFile);
  res.json(data);
});

io.on("connection", (socket) => {
  console.log("Connected");
  socket.on("userJoined", (roomId, name, cb) => {
    const id = short.generate().toString();
    cb({
      id,
      name,
      users: Object.values(rooms[roomId].players).map((user) => ({
        id: user.id,
        name: user.name,
      })),
    });
    rooms[roomId].players.set(id, {
      name,
      points: 0,
      response: "",
      responses: [],
    });
    console.log(rooms[roomId]);
  });
});

http.listen(process.env.PORT || 4000, () => console.log(process.env.URL));

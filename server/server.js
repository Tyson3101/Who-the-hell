require("dotenv").config();
import HTTP from "http";
import express from "express";
import short from "short-uuid";
import fs from "fs";
import { Server } from "socket.io";
import { voiceMp3 } from "../src/functions/VoiceOver.js";
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

const rooms = {
  GAME: { players: [], state: "lobby", prompt: null },
};

app.use((req, res) => {
  const [htmlString, error] = ReactToHtml();
  if (error) return res.redirect("/?error=UnkownError");
  if (!rooms[req.url.toUpperCase().replace("/", "")])
    return res.redirect("/?error=GameNotFound");
  else return res.send(htmlString);
});

app.post("/voiceover", async (req, res) => {
  const { text, outputFile } = req.body;
  const data = await voiceMp3(text, outputFile);
  res.json(data);
});

io.on("connection", (socket) => {
  socket.on("userJoinedServer", (roomId, name, cb) => {
    roomId = roomId.toUpperCase();
    const id = short.generate().toString();
    if (rooms[roomId]?.players.length >= 8)
      return cb({ success: false, error: "Game Full" });
    socket.join(roomId);
    rooms[roomId].players.push({ id, name });
    cb(
      { id, name },
      rooms[roomId].players.map(({ id, name }) => ({ id, name }))
    );
    io.sockets.in(roomId).emit("userJoinedClient", { id, name });
  });
  console.log(JSON.stringify(rooms, null, 4));
});

http.listen(process.env.PORT || 4000, () => console.log(process.env.URL));

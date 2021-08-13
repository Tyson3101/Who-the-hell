require("dotenv").config();
import HTTP from "http";
import express from "express";
import { Server } from "socket.io";
const app = express();
const http = HTTP.createServer(app);
const io = new Server(http);

app.use(express.static("./dist/src/public"));
app.set("view engine", "ejs");
app.set("views", "./dist/src/public/views");

app.get("/", (req, res) => {
  res.render("index");
});

io.on("connection", (socket) => {
  console.log("Connected");
});

http.listen(process.env.PORT || 3000, () => console.log(process.env.URL));

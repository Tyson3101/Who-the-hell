require("dotenv").config();
import HTTP from "http";
import express from "express";
import fs from "fs";
import { Server } from "socket.io";
import { voiceMp3 } from "../functions/VoiceOver.js";
import React from "react";
import ReactDOMServer from "react-dom/server.js";
const app = express();
const http = HTTP.createServer(app);
const io = new Server(http);
import Home from "../src/Home";

app.use(require("cors")({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./build"));

app.get("/", (req, res) => {
  fs.readFile("./build/index.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<Home />)}</div>`
      )
    );
  });
});

app.post("/voiceover", async (req, res) => {
  const { text, outputFile } = req.body;
  const data = await voiceMp3(text, outputFile);
  res.json(data);
});

io.on("connection", (socket) => {
  console.log("Connected");
  socket.on("Working", (cb) => cb("Working."));
});

http.listen(process.env.PORT || 3000, () => console.log(process.env.URL));

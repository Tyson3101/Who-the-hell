import React, { useState, useEffect } from "react";
import Prompt from "./components/Prompt";
import Twitter from "./components/prompts/Tweet";
import Navbar from "./components/static/Navbar";
import io from "socket.io-client";

function Game() {
  const [socket, setSocket] = useState(io);
  const [audio, setAudio] = useState(
    new Audio(
      "https://github.com/Tyson3101/Who-the-hell/blob/main/prompts/Twitter/joke.mp3?raw=true"
    )
  );

  useEffect(() => {
    socket.emit("Working", console.log);
  }, []);

  return (
    <>
      <Navbar />
      <Prompt
        prompt={{
          Element: Twitter,
          Props: {
            style: {
              textAlign: "left",
              position: "relative",
              left: "50%",
              transform: "translate(-50%, 0)",
            },
            showReply: true,
            UserInfo: {
              profilePic:
                "http://cdn.wealthygorilla.com/wp-content/uploads/2016/08/5-Bulletproof-Ways-to-Deal-With-Haters-696x463.jpg",
              name: "Hater 🤡🤡",
            },
            tweet:
              "Please kill yourself. You fucking faggot, little ass cocks sucking faggot.",
          },
        }}
      />
    </>
  );
}

export default Game;

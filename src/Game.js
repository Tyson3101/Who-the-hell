import React, { useState, useEffect } from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import { useParams } from "react-router-dom";
import Prompt from "./components/Prompt";
import Twitter from "./components/prompts/Tweet";
import Navbar from "./components/static/Navbar";
import SignIn from "./components/SignIn";
import io from "socket.io-client";

function Game() {
  const url = window.location.origin;
  const [view, setView] = useState({
    View: Prompt,
    props: {
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
    },
  });
  const { id: gameId } = useParams();
  const [game, setGame] = useState({});
  const [me, setMe] = useState(null);
  const [socket, setSocket] = useState(io("/"));

  function joinGame(name) {
    console.log(name);
    socket.emit("userJoined", gameId, name, (obj) => {
      console.log(obj);
      setMe(obj);
    });
    //setMe({ id: (Math.random() * 10).toFixed("9"), name });
  }

  return (
    <>
      <Navbar />
      {!me ? (
        <SignIn onClickEvt={joinGame} />
      ) : (
        <view.View prompt={view.props} />
      )}
    </>
  );
}

export default Game;

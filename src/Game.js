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
  const [players, setPlayers] = useState([]);
  const [me, setMe] = useState({});
  const [socket] = useState(io("/"));

  useEffect(() => {
    console.log("Got event");
    socket.on("userJoinedClient", (player) => {
      if (me.id === player.id) return;
      setPlayers((prevPlayers) => [
        ...new Map(
          [...prevPlayers, player].map((item) => [item.id, item])
        ).values(),
      ]);
    });
  }, [socket]);

  function joinGame(name) {
    console.log(name);
    socket.emit("userJoinedServer", gameId, name, (meId, users) => {
      setMe(() => meId);
      setPlayers(() => [...users]);
    });
  }
  if (!me.id && !me.name) {
    return (
      <>
        <Navbar />
        <SignIn onClickEvt={joinGame} />
      </>
    );
  } else
    return (
      <>
        <Navbar />
        <div>
          <h1>{players.map((u) => u.name).join("\n")}</h1>
        </div>
        <view.View prompt={view.props} />
      </>
    );
}

export default Game;

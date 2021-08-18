import React from "react";
import "./css/game.css";

function Prompt({ prompt }) {
  return (
    <>
      <div className="promptContainer">
        <h1>Respond the same way as your person would.</h1>
        {prompt ? <prompt.Element {...prompt.Props} /> : <> </>}
      </div>
    </>
  );
}

{
  /* <Prompt
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
/>; */
}

export default Prompt;

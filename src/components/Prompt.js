import React from "react";
import "./css/game.css";

function Prompt({ prompt }) {
  console.log(prompt);
  return (
    <>
      <div className="promptContainer">
        <h1>Respond the same way as your person would.</h1>
        {prompt ? <prompt.Element {...prompt.Props} /> : <> </>}
      </div>
    </>
  );
}

export default Prompt;

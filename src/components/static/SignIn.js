import React, { useRef } from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

function SignIn({ onClickEvt }) {
  const usernameRef = useRef();
  const defaultUserName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    separator: "",
    style: "capital",
  });
  return (
    <>
      <div className="SignIn">
        <h2>Pick your name</h2>
        <input
          ref={usernameRef}
          type="text"
          spellCheck={false}
          contentEditable={true}
          placeholder={defaultUserName}
        />
        <button
          onClick={() =>
            onClickEvt(usernameRef.current.value || defaultUserName)
          }
        >
          Join Game
        </button>
      </div>
    </>
  );
}

export default SignIn;

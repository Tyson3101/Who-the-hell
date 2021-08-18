import { useRef } from "react";
import Navbar from "./components/static/Navbar";

function Home() {
  const roomId = useRef();
  const error = window.location.search;

  return (
    <>
      <Navbar />
      <div className="SignIn" style={{ background: "rgba(255,0,255,0.5)" }}>
        <h1
          style={{
            padding:
              error.split("?error=") && error.split("?error=")[1]?.length
                ? "0"
                : "2rem",
          }}
        >
          Join Game
        </h1>
        <h3
          style={{
            color: "red",
            padding:
              error.split("?error=") && error.split("?error=")[1]?.length
                ? "1rem"
                : "0",
          }}
        >
          {error.split("?error=") && error.split("?error=")[1]?.length ? (
            <span>
              Error: {error.split("?error=")[1].replace(/([A-Z])/g, ` $1`)}
            </span>
          ) : (
            ""
          )}
        </h3>
        <input type="text" placeholder="Room ID" ref={roomId} />
        <button onClick={() => (window.location = `/${roomId.current.value}`)}>
          Join Game
        </button>
      </div>
    </>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";
import "../css/twitter.css";

Twitter.propTypes = {
  UserInfo: PropTypes.shape({
    name: PropTypes.string,
    profilePic: PropTypes.string,
  }),
  showReply: PropTypes.bool,
  tweet: PropTypes.string,
  replyPlaceHolder: PropTypes.string,
  style: PropTypes.object,
};

function Twitter({ style, UserInfo, showReply, tweet, replyPlaceHolder }) {
  const [socket, setSocket] = useState(io);
  const [audio, setAudio] = useState(
    new Audio(
      "https://github.com/Tyson3101/Who-the-hell/blob/main/prompts/Twitter/joke.mp3?raw=true"
    )
  );
  function play() {
    audio.play();
  }
  useEffect(() => {
    console.log(showReply);
    socket.emit("Working", console.log);
  }, []);

  function tweeted() {
    play();
    console.log("Working.");
  }

  function replied() {
    play();
    console.log("Working.");
  }

  return (
    <>
      <section className="twitter-card" style={style}>
        <div className="user-info">
          <img
            className="profileImg"
            src={
              UserInfo?.profilePic ??
              "https://cdn.writermag.com/2019/03/question-marks.jpg"
            }
            alt=""
          />
          <h2 className="username">{UserInfo?.name || "Who tweeted this?"}</h2>
          <h2 className="at">
            @
            {UserInfo?.name
              .replaceAll(" ", "_")
              .replaceAll("🤡", "")
              ?.toLowerCase() || "Who_tweeted_this?"}
          </h2>
        </div>
        <div className="tweet">
          <p>{tweet || "Write your tweet here"}</p>
        </div>
        <div className="tweet-info">
          <p>
            <span>12:50pm</span> &#x2022; <span>12/08/2021</span> &#x2022;
            <span className="device">Twitter for iPhone</span>
          </p>
        </div>
        <div className="line" style={{ marginTop: "15px" }}></div>
        <div className="tweet-stats">
          <p>
            52 <span>Retweets</span>
          </p>
          <p>
            124 <span>Likes</span>
          </p>
        </div>
        <div className="line" style={{ marginTop: "4px" }}></div>
        <div className="share">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="
            r-4qtqp9
            r-yyyyoo
            r-50lct3
            r-dnmrzs
            r-bnwqim
            r-1plcrui
            r-lrvibr
            r-1srniue
          "
          >
            <g>
              <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
            </g>
          </svg>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="
            r-4qtqp9
            r-yyyyoo
            r-50lct3
            r-dnmrzs
            r-bnwqim
            r-1plcrui
            r-lrvibr
            r-1srniue
          "
          >
            <g>
              <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
            </g>
          </svg>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="
            r-4qtqp9
            r-yyyyoo
            r-50lct3
            r-dnmrzs
            r-bnwqim
            r-1plcrui
            r-lrvibr
            r-1srniue
          "
          >
            <g>
              <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
            </g>
          </svg>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="
            r-4qtqp9
            r-yyyyoo
            r-50lct3
            r-dnmrzs
            r-bnwqim
            r-1plcrui
            r-lrvibr
            r-1srniue
          "
          >
            <g>
              <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
              <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
            </g>
          </svg>
        </div>
        <div className="line"></div>
        {showReply ? (
          <>
            <div className="reply">
              <div className="replyInfo">
                <p>
                  Replying to{" "}
                  <span>
                    @
                    {(typeof UserInfo !== "undefined" &&
                      UserInfo.name
                        .replaceAll(" ", "_")
                        .replaceAll("🤡", "")
                        .toLowerCase()) ||
                      "Who_tweeted_this?"}
                  </span>
                </p>
              </div>
              <div className="replyContent">
                <div className="left">
                  <img
                    className="profileImg"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <h4 contentEditable={true}>
                    {replyPlaceHolder ?? "Tweet Your Reply Here"}
                  </h4>
                </div>
                <div className="right">
                  <button
                    className="replyBtn"
                    style={{ borderRadius: "35%" }}
                    onClick={replied}
                  >
                    <h5>Reply</h5>
                  </button>
                </div>
              </div>
            </div>
            <div className="line full"></div>
          </>
        ) : (
          <button
            className="replyBtn"
            style={{ fontSize: "1em", border: "none", padding: "0.6em" }}
            onClick={tweeted}
          >
            <h5>Reply</h5>
          </button>
        )}
      </section>
    </>
  );
}
export default Twitter;

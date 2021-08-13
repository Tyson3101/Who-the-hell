(document.querySelector("button#btn") as HTMLButtonElement).onclick =
  async () => {
    const audio = new Audio(
      "https://github.com/Tyson3101/Who-the-hell/blob/d6534a8c9be5abe2215f50036ba18af01bee8ee6/prompts/Twitter/joke.mp3?raw=true"
    );
    audio.addEventListener("canplaythrough", () => {
      audio.play();
    });
  };

function tweeted() {
  console.log(document.querySelector("body > section > div.tweet > p"));
}

function replied() {
  console.log(
    document.querySelector(
      "body > section > div.reply > div.replyContent > div.left > h4"
    )
  );
}

(document.querySelector("button#btn") as HTMLButtonElement).onclick =
  async () => {
    const audio = new Audio();
    audio.addEventListener("canplaythrough", () => {
      audio.play();
    });
  };

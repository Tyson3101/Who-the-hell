document.querySelector("button#btn").onclick =
    async () => {
        const audio = new Audio("https://github.com/Tyson3101/Who-the-hell/blob/d6534a8c9be5abe2215f50036ba18af01bee8ee6/prompts/Twitter/joke.mp3?raw=true");
        audio.addEventListener("canplaythrough", () => {
            audio.play();
        });
    };

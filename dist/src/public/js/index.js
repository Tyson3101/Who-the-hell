document.querySelector("button#btn").onclick =
    async () => {
        const audio = new Audio();
        audio.addEventListener("canplaythrough", () => {
            audio.play();
        });
    };

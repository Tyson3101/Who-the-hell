function tweeted() {
    const tweet = document.querySelector("body > section > div.tweet > p");
    fetch("/voiceover", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            text: tweet.innerText,
        }),
    })
        .then((res) => res.json())
        .then(({ data }) => {
        console.log(data);
        const audio = new Audio("data:audio/mp3;base64," + data);
        console.log(audio);
        audio.addEventListener("canplaythrough", () => {
            audio.play();
        });
    });
}
function replied() {
    console.log(document.querySelector("body > section > div.reply > div.replyContent > div.left > div > h4"));
}

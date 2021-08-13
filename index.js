require("dotenv").config();
const fs = require("fs");
const fetch = require("node-fetch");

async function voiceMp3(text, outputFile) {
  const response = await fetch(
    `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${process.env.API_KEY}`,
    {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        audioConfig: {
          pitch: 0,
          speakingRate: 1,
          audioEncoding: "MP3",
        },
        input: {
          text,
        },
        voice: {
          languageCode: "en-US",
          name: "en-US-Wavenet-D",
        },
      }),
    }
  ).then((res) => res.json());

  let base64 = response.audioContent;
  if (outputFile) fs.writeFileSync(outputFile, Buffer.from(base64, "base64"));
  return Buffer.from(base64, "base64");
}

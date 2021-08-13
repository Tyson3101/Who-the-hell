import fs from "fs";
import fetch from "node-fetch";

export async function voiceMp3(text: string, outputFile: string) {
  const response = await fetch(
    `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${process.env.API_KEY}`,
    {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        audioConfig: {
          pitch: 4,
          speakingRate: 0.8,
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

  let base64 = Buffer.from(response.audioContent, "base64");
  if (outputFile) fs.writeFileSync(outputFile, base64);
  return base64;
}

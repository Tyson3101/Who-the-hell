"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.voiceMp3 = void 0;
const fs_1 = __importDefault(require("fs"));
const node_fetch_1 = __importDefault(require("node-fetch"));
async function voiceMp3(text, outputFile) {
    const response = await node_fetch_1.default(`https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${process.env.API_KEY}`, {
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
    }).then((res) => res.json());
    let base64 = Buffer.from(response.audioContent, "base64");
    if (outputFile)
        fs_1.default.writeFileSync(outputFile, base64);
    return base64;
}
exports.voiceMp3 = voiceMp3;

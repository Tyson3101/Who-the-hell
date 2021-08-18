export default function Random(filter) {
  const profilePics = [
    "https://i.imgur.com/rIofxxQ.png",
    "https://i.imgur.com/PLqY3Es.png",
    "https://i.imgur.com/1ezCwCT.png",
    "https://i.imgur.com/sbvKd3D.png",
    "https://i.imgur.com/NVvZxb6.png",
    "https://i.imgur.com/AmhO0Ll.png",
    "https://i.imgur.com/RzwdkXB.png",
    "https://i.imgur.com/7mboq4i.png",
    "https://i.imgur.com/nBSMLIy.png",
    "https://i.imgur.com/xha65hx.png",
  ].filter((url) => filter?.length && !filter.includes(url));
  return profilePics[Math.floor(Math.random() * profilePics.length)];
}

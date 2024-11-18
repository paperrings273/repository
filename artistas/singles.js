const singlesData = [
  {
  title: "Let It Go",
  year: "Year 02",
  image: "https://i.imgur.com/fC6k0h9.png",
  label: "℗ © Starlight Studios",
  artist: "Riley",
  featuring: []
  },
  {
    title: "Late Night Talking (feat. Liz)",
    year: "Year 02",
    image: "https://i.imgur.com/w22xntp.png",
    label: "℗ © YG Entertainment",
    artist: "Eric",
    featuring: ["Liz"]
  },
  {
    title: "Word Up!",
    year: "Year 02",
    image: "https://i.imgur.com/XvaycfD.png",
    label: "℗ © Dawn Records",
    artist: "4Music",
    featuring: []
  },
  {
    title: "Move",
    year: "Year 02",
    image: "https://i.imgur.com/emvoHBm.png",
    label: "℗ © Dawn Records",
    artist: "4Music",
    featuring: []
  },
  {
    title: "Wings",
    year: "Year 02",
    image: "https://i.imgur.com/FFwDAJ2.png",
    label: "℗ © Dawn Records",
    artist: "4Music",
    featuring: []
  },
  {
    title: "Salute",
    year: "Year 02",
    image: "https://i.imgur.com/oxCDtRj.jpg",
    label: "℗ © Dawn Records",
    artist: "4Music",
    featuring: []
  },
  {
    title: "AFTERMATH",
    year: "Year 02",
    image: "https://i.imgur.com/n5OTHPi.png",
    label: "℗ © Dawn Records",
    artist: "Alana Grace",
    featuring: []
  },
  {
    title: "Overthinking",
    year: "Year 02",
    image: "https://i.imgur.com/hFoBnej.jpeg",
    label: "℗ © Pacific Records",
    artist: "Harper",
    featuring: []
  },
  {
    title: "feel like sheet",
    year: "Year 01",
    image: "https://i.imgur.com/x4b7aGQ.png",
    label: "℗ © Dawn Records",
    artist: "Ivy Sinclair",
    featuring: []
  },
  {
    title: "you broke me first",
    year: "Year 01",
    image: "https://i.imgur.com/iYvzkRJ.png",
    label: "℗ © Dawn Records",
    artist: "Ivy Sinclair",
    featuring: []
  },
  {
    title: "Stronger Than Love (feat. Trevor)",
    year: "Year 02",
    image: "https://i.imgur.com/aWhaA8L.png",
    label: "℗ © Starlight Studios",
    artist: "Aria",
    featuring: ["Trevor"]
  },
  {
    title: "Stolen",
    year: "Year 01",
    image: "https://i.imgur.com/Rh2xk4x.png",
    label: "℗ © Starlight Studios",
    artist: "Owen Graham",
    featuring: []
  },
  {
    title: "Rumors",
    year: "Year 01",
    image: "https://i.imgur.com/dhc5YTC.jpg",
    label: "℗ © Starlight Studios",
    artist: "Owen Graham",
    featuring: []
  },
  {
    title: "i didn't know any better",
    year: "-",
    image: "https://i.imgur.com/juP2TW0.png",
    label: "℗ © Dawn Records",
    artist: "Owen Graham",
    featuring: []
  },
  {
    title: "second",
    year: "-",
    image: "https://i.imgur.com/VJiFvQN.png",
    label: "℗ © Dawn Records",
    artist: "Owen Graham",
    featuring: []
  },
  {
    title: "timeless",
    year: "-",
    image: "https://i.imgur.com/ouWcGLu.png",
    label: "℗ © Dawn Records",
    artist: "Owen Graham",
    featuring: []
  },
  {
    title: "Set Myself On Fire",
    year: "-",
    image: "https://i.imgur.com/PfZcBlz.png",
    label: "℗ © YG Entertainment",
    artist: "Liz",
    featuring: []
  },
  {
    title: "Be Alive (Original Song from the Motion Picture \"Before Sunrise\")",
    year: "Year 02",
    image: "https://i.imgur.com/82p0m2k.png",
    label: "℗ © Dawn Records",
    artist: "Fiona",
    featuring: []
  },
  {
    title: "When The Party's Over",
    year: "Year 02",
    image: "https://i.imgur.com/wN6WNhi.jpeg",
    label: "℗ © Dawn Records",
    artist: "Fiona",
    featuring: []
  },
  {
    title: "Oh, Was That Yours?",
    year: "Year 02",
    image: "https://i.imgur.com/Q94Pawr.png",
    label: "℗ © Dawn Records",
    artist: "Ava",
    featuring: []
  },
  {
    title: "Bloodsucker",
    year: "Year 02",
    image: "https://i.imgur.com/n3DwAZF.png",
    label: "℗ © Dawn Records",
    artist: "Ava",
    featuring: []
  },
  {
    title: "My Game (Remix) feat. Ava",
    year: "Year 01",
    image: "https://i.imgur.com/hBMdtGF.jpeg",
    label: "℗ © Dawn Records",
    artist: "Fiona",
    featuring: ["Ava"]
  },
  {
    title: "Soul For My Love",
    year: "Year 01",
    image: "https://i.imgur.com/jLupsIR.png",
    label: "℗ © Dawn Records",
    artist: "Ava",
    featuring: []
  },
  {
    title: "Feeling",
    year: "Year 01",
    image: "https://i.imgur.com/Lwde55l.png",
    label: "℗ © Dawn Records",
    artist: "Ava",
    featuring: []
  },
  {
    title: "My Game",
    year: "Year 01",
    image: "https://i.imgur.com/dPHfzSg.jpeg",
    label: "℗ © Dawn Records",
    artist: "Fiona",
    featuring: []
  },
  {
    title: "Rockless",
    year: "-",
    image: "https://i.imgur.com/RXgkKT4.jpeg",
    label: "℗ © Dawn Records",
    artist: "Fiona",
    featuring: []
  },
  {
    title: "Confessions Of A Broken Heart",
    year: "-",
    image: "https://i.imgur.com/kvQV8Dg.jpeg",
    label: "℗ © Dawn Records",
    artist: "Fiona",
    featuring: []
  },
  {
    title: "Hold Me Close",
    year: "-",
    image: "https://i.imgur.com/OteWWIH.jpeg",
    label: "℗ © Dawn Records",
    artist: "Fiona",
    featuring: []
  },
  {
    title: "True Romance",
    year: "-",
    image: "https://i.imgur.com/q4UISeb.jpeg",
    label: "℗ © Dawn Records",
    artist: "Fiona",
    featuring: []
  },
  {
    title: "TEXAS ON FIRE",
    year: "Year 02",
    image: "https://i.imgur.com/sqDjXxy.png",
    label: "℗ © Dawn Records",
    artist: "Hannah",
    featuring: []
  },
  {
    title: "Dilemma (feat. Zara)",
    year: "Year 01",
    image: "https://i.imgur.com/1BYSxa1.png",
    label: "℗ © Illuminati Records",
    artist: "Aria",
    featuring: ["Zara"]
  },
  {
    title: "Boom Boom (feat. Hannah & Liza)",
    year: "Year 01",
    image: "https://i.imgur.com/3JncPKv.png",
    label: "℗ © Illuminati Records",
    artist: "Aria",
    featuring: ["Hannah", "Liza"]
  },
  {
    title: "Eyes On Me",
    year: "Year 01",
    image: "https://i.imgur.com/FoMPgwM.png",
    label: "℗ © Illuminati Records",
    artist: "Aria",
    featuring: []
  },
  {
    title: "Part Of The World (From Little Mermaid)",
    year: "Year 01",
    image: "https://i.imgur.com/a7m7cFN.png",
    label: "℗ © Starlight Studios",
    artist: "Hannah",
    featuring: []
  },
  {
    title: "HYPERSONIC",
    year: "-",
    image: "https://i.imgur.com/Vv6glzz.png",
    label: "℗ © Dawn Records",
    artist: "Hannah",
    featuring: []
  },
  {
    title: "Maquerade",
    year: "-",
    image: "https://i.imgur.com/kQJJiZY.png",
    label: "℗ © Dawn Records",
    artist: "Hannah",
    featuring: []
  },
  {
    title: "The Suburbs",
    year: "Year 02",
    image: "https://i.imgur.com/tHIl0ot.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: []
  },
  {
    title: "Alone In Kyoto",
    year: "Year 01",
    image: "https://i.imgur.com/0ZbcWX7.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: []
  },
  {
    title: "Beetlebum",
    year: "Year 01",
    image: "https://i.imgur.com/eTjuhMK.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: []
  },
  {
    title: "Stolen Brave Life",
    year: "-",
    image: "https://i.imgur.com/Vw8YK0s.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: []
  },
  {
    title: "The Very Modern Dance",
    year: "-",
    image: "https://i.imgur.com/wtwIZMs.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: []
  },
  {
    title: "Jesus Christ 2005 God Bless America",
    year: "-",
    image: "https://i.imgur.com/vaOJSMP.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: ["Bianca"]
  },
  {
    title: "Love It If We Made It",
    year: "-",
    image: "https://i.imgur.com/eAH1XDf.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: []
  },
  {
    title: "Give Yourself A Try",
    year: "-",
    image: "https://i.imgur.com/ccO8i1u.png",
    label: "℗ © Dawn Records",
    artist: "Even Grace",
    featuring: []
  },
  {
    title: "In Case I Don't Live Forever (Original Song from the Motion Picture \"Before Sunrise\")",
    year: "Year 02",
    image: "https://i.imgur.com/tqxWe2B.png",
    label: "℗ © Starlight Studios",
    artist: "Conan Woolridge",
    featuring: []
  },
  {
    title: "Memories From Home",
    year: "Year 01",
    image: "https://i.imgur.com/65gXFm7.png",
    label: "℗ © Starlight Studios",
    artist: "Conan Woolridge",
    featuring: []
  },
  {
    title: "20",
    year: "Year 01",
    image: "https://i.imgur.com/YOVEmFd.jpeg",
    label: "℗ © Dawn Records",
    artist: "Conan Woolridge",
    featuring: []
  },
  {
    title: "Forbidden",
    year: "Year 01",
    image: "https://i.imgur.com/XEnbAmV.png",
    label: "℗ © Illuminati Records",
    artist: "Matteo",
    featuring: []
  },
  {
    title: "Pleasure Addiction",
    year: "Year 01",
    image: "https://i.imgur.com/LzQProT.png",
    label: "℗ © Illuminati Records",
    artist: "Matteo",
    featuring: []
  },
  {
    title: "What if my thoughts could speak?",
    year: "Year 01",
    image: "https://i.imgur.com/9fKs4HG.png",
    label: "℗ © Illuminati Records",
    artist: "Matteo",
    featuring: []
  },
];

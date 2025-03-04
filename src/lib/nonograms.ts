import sunglassesEmoji from "$lib/images/sunglasses-emoji.png";
import spaceInvader from "$lib/images/space-invader.png";
import trafficLight from "$lib/images/traffic-light.png";
import swordShield from "$lib/images/sword-shield.png";
import gasStation from "$lib/images/gas-station.png";
import hourglass from "$lib/images/hourglass.png";
import snowman from "$lib/images/snowman.png";
import castle from "$lib/images/castle.png";
import cursor from "$lib/images/cursor.png";
import potion from "$lib/images/potion.png";
import turtle from "$lib/images/turtle.png";
import weight from "$lib/images/weight.png";
import heart from "$lib/images/heart.png";
import water from "$lib/images/water.png";
import beer from "$lib/images/beer.png";
import meat from "$lib/images/meat.png";
import save from "$lib/images/save.png";
import ship from "$lib/images/ship.png";
import wine from "$lib/images/wine.png";
import key from "$lib/images/key.png";

const nonograms = [
  {
    source: "https://pixabay.com/illustrations/beer-pub-drink-alcohol-mug-8-bit-7370681/",
    donate: "https://buymeacoffee.com/lesiakower0",
    artist: "Lesiakower",
    name: "Beer",
    img: beer,
    id: 1,
  },
  {
    source: "https://pixabay.com/illustrations/castle-medieval-fortress-building-7440761/",
    donate: "https://buymeacoffee.com/lesiakower0",
    artist: "Lesiakower",
    name: "Castle",
    img: castle,
    id: 2,
  },
  // {
  //   source: "https://pixabay.com/vectors/hand-cursor-vector-finger-pointer-96302/",
  //   donate: undefined,
  //   artist: "Quique",
  //   name: "Cursor",
  //   img: cursor,
  //   id: 3,
  // },
  {
    source: "https://pixabay.com/vectors/heart-love-red-heart-pixel-art-7764716/",
    artist: "rafdit24",
    donate: undefined,
    name: "Heart",
    img: heart,
    id: 4,
  },
  {
    source: "https://pixabay.com/illustrations/potion-test-tube-elixir-mixture-7265174/",
    donate: "https://buymeacoffee.com/lesiakower0",
    artist: "Lesiakower",
    name: "Potion",
    img: potion,
    id: 5,
  },
  {
    source: "https://pixabay.com/illustrations/viking-ship-history-medieval-8-bit-7502113/",
    donate: "https://buymeacoffee.com/lesiakower0",
    artist: "Lesiakower",
    name: "Ship",
    img: ship,
    id: 6,
  },
  {
    source: "https://pixabay.com/vectors/computer-game-monster-pixelated-151243/",
    artist: "OpenClipart-Vectors",
    name: "Space Invader",
    img: spaceInvader,
    donate: undefined,
    id: 7,
  },
  {
    source: "https://pixabay.com/vectors/animal-turtle-pixel-art-7764712/",
    artist: "rafdit24",
    donate: undefined,
    name: "Turtle",
    img: turtle,
    id: 8,
  },
  {
    source: "https://pixabay.com/illustrations/rain-droplet-nature-water-weather-7236051/",
    donate: "https://buymeacoffee.com/lesiakower0",
    artist: "Lesiakower",
    name: "Water",
    img: water,
    id: 9,
  },
  {
    source: "https://pixabay.com/illustrations/dumbbell-bodybuilding-weightlifting-7540929/",
    donate: "https://buymeacoffee.com/lesiakower0",
    artist: "Lesiakower",
    name: "Weight",
    img: weight,
    id: 10,
  },
  {
    source: "https://pixabay.com/illustrations/wine-party-alcohol-drink-glass-8029474/",
    donate: "https://buymeacoffee.com/lesiakower0",
    artist: "Lesiakower",
    name: "Wine",
    img: wine,
    id: 11,
  },
  {
    source: "https://pixabay.com/illustrations/fuel-car-petrol-gas-station-8-bit-8034102/",
    donate: "https://buymeacoffee.com/lesiakower0",
    artist: "Lesiakower",
    name: "Gas Station",
    img: gasStation,
    id: 12,
  },
  {
    source: "https://pixabay.com/illustrations/key-icon-security-lock-pixel-art-7702163/",
    donate: "https://buymeacoffee.com/lesiakower0",
    artist: "Lesiakower",
    name: "Key",
    img: key,
    id: 13,
  },
  {
    source: "https://pixabay.com/illustrations/meat-food-bone-pixel-art-pixel-7240692/",
    donate: "https://buymeacoffee.com/lesiakower0",
    artist: "Lesiakower",
    name: "Meat",
    img: meat,
    id: 14,
  },
  {
    source: "https://pixabay.com/illustrations/save-icon-disk-diskette-data-file-8207948/",
    donate: "https://buymeacoffee.com/lesiakower0",
    artist: "Lesiakower",
    name: "Save",
    img: save,
    id: 15,
  },
  // {
  //   source: "https://pixabay.com/illustrations/snowman-christmas-scarf-hat-winter-7648954/",
  //   donate: "https://buymeacoffee.com/lesiakower0",
  //   artist: "Lesiakower",
  //   name: "Snowman",
  //   img: snowman,
  //   id: 16,
  // },
  {
    source: "https://pixabay.com/vectors/emoji-emoticon-smirk-pixel-7843852/",
    name: "Sunglasses Emoji",
    img: sunglassesEmoji,
    artist: "rafidit24",
    donate: undefined,
    id: 17,
  },
  // {
  //   source: "https://pixabay.com/illustrations/shield-sword-medieval-knight-8256618/",
  //   donate: "https://buymeacoffee.com/lesiakower0",
  //   artist: "Lesiakower",
  //   name: "Sword Shield",
  //   img: swordShield,
  //   id: 18,
  // },
  {
    source: "https://pixabay.com/illustrations/traffic-light-stoplight-7291507/",
    donate: "https://buymeacoffee.com/lesiakower0",
    name: "Traffic Light",
    artist: "Lesiakower",
    img: trafficLight,
    id: 19,
  },
  {
    source: "https://pixabay.com/illustrations/hourglass-time-icon-sand-clock-8380087/",
    donate: "https://buymeacoffee.com/lesiakower0",
    artist: "Lesiakower",
    name: "Hourglass",
    img: hourglass,
    id: 20,
  },
];

const today = new Date();
const dayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
};

const index = dayOfYear(today) % nonograms.length;
export const dailyNonogram = nonograms[index];

import { tilesHistoryIndexer, colorsIndexer, tilesSolution, editorHeight, tilesHistory, editorWidth, isXSelected, type Tile, colors, isGame, tiles } from "$lib/refs.svelte";
import { page } from "$app/state";

export const MAX_SCALE = 3;
export const MIN_SCALE = 0.5;

export const isActive = (tile: Tile) => tile.colorIndex !== 0;

export const startEditor = () => {
  isGame.v = false;
  tiles.v = tilesSolution.v;
  resetHistory();
};

export const startGame = () => {
  isGame.v = true;
  tilesSolution.v = $state.snapshot(tiles.v);
  newEditor();
  resetHistory();
};

export const newEditor = () => {
  if (editorWidth.v < 1 || editorHeight.v < 1) return;

  const newTiles: Tile[][] = [[]];
  for (let i = 0; i < editorHeight.v; i++) {
    newTiles[i] = [];
    for (let j = 0; j < editorWidth.v; j++) {
      newTiles[i][j] = { colorIndex: 0, Xed: false };
    }
  }
  tiles.v = newTiles;

  isXSelected.v = false;
  colorsIndexer.v = 0;
};

export const checkTileColors = () => {
  for (let i = 0; i < tiles.numRows; i++) {
    for (let j = 0; j < tiles.numColumns; j++) {
      if (tiles.v[i][j].colorIndex > colors.v.length - 1) tiles.v[i][j].colorIndex = 0;
    }
  }
};

export const saveTiles = () => {
  if (tilesHistoryIndexer.v !== tilesHistory.v.length - 1) tilesHistory.v.splice(tilesHistoryIndexer.v + 1);
  tilesHistoryIndexer.v++;
  tilesHistory.v.push($state.snapshot(tiles.v));
};

export const resetHistory = () => {
  tilesHistory.reset();
  tilesHistory.v[0] = $state.snapshot(tiles.v);
  tilesHistoryIndexer.reset();
};

export const resizeEditor = () => {
  if (editorWidth.v < 1 || editorHeight.v < 1) return;

  const oldTiles = tiles.v;
  const newTiles: Tile[][] = [[]];
  for (let i = 0; i < editorHeight.v; i++) {
    newTiles[i] = [];
    for (let j = 0; j < editorWidth.v; j++) {
      if (oldTiles && oldTiles[i] && oldTiles[i][j]) newTiles[i][j] = { ...oldTiles[i][j] };
      else newTiles[i][j] = { colorIndex: 0, Xed: false };
    }
  }
  tiles.v = newTiles;

  saveTiles();
  isXSelected.v = false;
  colorsIndexer.v = 0;
};

export const hexToRGB = (hex: string): [number, number, number] => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

const colorsAreSimilar = (color1: [number, number, number], color2: [number, number, number], tolerance: number) => {
  const [r1, g1, b1] = color1;
  const [r2, g2, b2] = color2;

  const distance = Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);

  return distance <= tolerance;
};

const rgbToHex = (r: number, g: number, b: number) => {
  return "#" + [r, g, b].map(x => Math.round(x).toString(16).padStart(2, "0")).join("");
};

const addColorToMap = (hexColor: string, colorMap: string[], tolerance: number) => {
  const color = hexToRGB(hexColor);
  for (let i = 0; i < colorMap.length; i++) {
    const existingColor = hexToRGB(colorMap[i]);
    if (colorsAreSimilar(color, existingColor, tolerance)) return i;
  }
  colorMap.push(hexColor);
  return colorMap.length - 1;
};

const pngLoaded = (array: number[][], colorMap: string[]) => {
  editorWidth.v = array[0].length;
  editorHeight.v = array.length;
  colors.v = colorMap;
  colorsIndexer.v = 0;
  newEditor();
  for (let i = 0; i < tiles.numRows; i++) {
    for (let j = 0; j < tiles.numColumns; j++) tiles.v[i][j].colorIndex = array[i][j];
  }
  if (page.route.id === "/daily") startGame();
};

export const loadPNG = (file: File, tolerance: number) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, img.width, img.height).data;
        const colorMap: string[] = [];
        const array: number[][] = [];

        for (let y = 0; y < img.height; y++) {
          const row: number[] = [];
          for (let x = 0; x < img.width; x++) {
            const index = (y * img.width + x) * 4;
            const r = imageData[index];
            const g = imageData[index + 1];
            const b = imageData[index + 2];
            const a = imageData[index + 3];
            const hexColor = a < 1 ? "#ffffff" : rgbToHex(r, g, b);

            const colorIndex = addColorToMap(hexColor, colorMap, tolerance);
            row.push(colorIndex);
          }
          array.push(row);
        }

        pngLoaded(array, colorMap);
      }
    };
    img.src = e.target?.result as string;
  };
  reader.readAsDataURL(file);
};

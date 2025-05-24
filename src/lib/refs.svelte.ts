import { LocalStorage } from "./storage.svelte";

export type Tile = {
  colorIndex: number;
  Xed: boolean;
};

export type TilePosition = {
  column: number;
  row: number;
};

type ClickedTile = TilePosition & Tile;

type Ref<T> = {
  reset: () => void;
  v: T;
};

type RefTiles = {
  columnEncodes: Encode[][];
  colorIndices: number[][];
  rowEncodes: Encode[][];
  columnHints: Hint[][];
  numColumns: number;
  rowHints: Hint[][];
  numRows: number;
} & Ref<Tile[][]>;

export type Encode = {
  colorIndex: number;
  count: number;
};

export type Hint = Encode;

const ref = <T>(initial: T): Ref<T> => {
  let v: T = $state(initial);
  const reset = (): T => (v = initial);

  return {
    set v(value: T) { v = value; },
    get v(): T { return v; },
    reset,
  };
};

const refTiles = (initial: Tile[][]): RefTiles => {
  const baseRef: Ref<Tile[][]> = ref<Tile[][]>(initial);
  const numRows: number = $derived(baseRef.v.length);
  const numColumns: number = $derived(baseRef.v[0].length);
  const colorIndices: number[][] = $derived.by((): number[][] => baseRef.v.map(innerArray => innerArray.map(item => item["colorIndex"])));

  const rowEncodes: Encode[][] = $derived.by(() => {
    const rowEncodes: Encode[][] = [[]];
    const numRows = baseRef.v.length;
    const numColumns = baseRef.v[0].length;

    for (let row = 0; row < numRows; row++) {
      rowEncodes[row] = [];
      const firstTile = baseRef.v[row][0];
      const encode = { colorIndex: firstTile.Xed ? -1 : firstTile.colorIndex, count: 1 };
      for (let column = 1; column < numColumns; column++) {
        const previousTile = baseRef.v[row][column - 1];
        const currentTile = baseRef.v[row][column];
        if (previousTile.colorIndex === currentTile.colorIndex && previousTile.Xed === currentTile.Xed) encode.count++;
        else {
          rowEncodes[row].push({ ...encode });
          encode.colorIndex = currentTile.Xed ? -1 : currentTile.colorIndex;
          encode.count = 1;
        }
      }

      rowEncodes[row].push({ ...encode });
    }

    return rowEncodes;
  });

  const rowHints: Hint[][] = $derived(rowEncodes.map(subArray => subArray.filter(obj => obj.colorIndex !== 0 && obj.colorIndex !== -1)));

  const columnEncodes: Encode[][] = $derived.by(() => {
    const columnEncodes: Encode[][] = [[]];
    const numRows = baseRef.v.length;
    const numColumns = baseRef.v[0].length;

    for (let column = 0; column < numColumns; column++) {
      columnEncodes[column] = [];
      const firstTile = baseRef.v[0][column];
      const encode = { colorIndex: firstTile.Xed ? -1 : firstTile.colorIndex, count: 1 };
      for (let row = 1; row < numRows; row++) {
        const previousTile = baseRef.v[row - 1][column];
        const currentTile = baseRef.v[row][column];
        if (previousTile.colorIndex === currentTile.colorIndex && previousTile.Xed === currentTile.Xed) encode.count++;
        else {
          columnEncodes[column].push({ ...encode });
          encode.colorIndex = currentTile.Xed ? -1 : currentTile.colorIndex;
          encode.count = 1;
        }
      }

      columnEncodes[column].push({ ...encode });
    }

    return columnEncodes;
  });

  const columnHints: Hint[][] = $derived(columnEncodes.map(subArray => subArray.filter(obj => obj.colorIndex !== 0 && obj.colorIndex !== -1)));

  return {
    get columnEncodes(): Encode[][] { return columnEncodes; },
    get colorIndices(): number[][] { return colorIndices; },
    get columnHints(): Hint[][] { return columnHints; },
    get rowEncodes(): Encode[][] { return rowEncodes; },
    get numColumns(): number { return numColumns; },
    get rowHints(): Hint[][] { return rowHints; },
    set v(value: Tile[][]) { baseRef.v = value; },
    get numRows(): number { return numRows; },
    get v(): Tile[][] { return baseRef.v; },
    reset: baseRef.reset,
  };
};

export const preferences = new LocalStorage("preferences", {
  bgColor: "#476fb8",
});
export const colors: Ref<string[]> = ref<string[]>(["#ffffff", "#000000"]);
export const colorsIndexer: Ref<number> = ref<number>(1);

const initialTiles = [
  [{ colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }],
  [{ colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }],
  [{ colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }],
  [{ colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }],
  [{ colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }, { colorIndex: 0, Xed: false }],
];

export const editorWidth: Ref<number> = ref<number>(5);
export const editorHeight: Ref<number> = ref<number>(5);
export const tiles: RefTiles = refTiles(initialTiles);
export const tilesSolution: RefTiles = refTiles(initialTiles);
export const tilesHistory: Ref<Tile[][][]> = ref<Tile[][][]>([initialTiles]);
export const tilesHistoryIndexer: Ref<number> = ref<number>(0);

export const isGame: Ref<boolean> = ref<boolean>(false);
export const clickedTile: Ref<ClickedTile> = ref<ClickedTile>({ colorIndex: -1, column: -1, Xed: false, row: -1 });
export const tableScale: Ref<number> = ref<number>(1);
export const sidebarOn: Ref<boolean> = ref<boolean>(false);
export const isXSelected: Ref<boolean> = ref<boolean>(false);
export const isMoveSelected: Ref<boolean> = ref<boolean>(false);
export const isRowHintsSticky: Ref<boolean> = ref<boolean>(false);
export const isColumnHintsSticky: Ref<boolean> = ref<boolean>(false);

export const getIsWin = () => {
  const isWin = $derived.by(() => {
    if (!isGame.v) return false;

    for (let i = 0; i < tiles.numRows; i++) {
      if (tiles.rowHints[i].length !== tilesSolution.rowHints[i].length) return false;
      for (let j = 0; j < tiles.rowHints[i].length; j++) {
        if (
          tiles.rowHints[i][j].count !== tilesSolution.rowHints[i][j].count
          || tiles.rowHints[i][j].colorIndex !== tilesSolution.rowHints[i][j].colorIndex
        ) return false;
      }
    }

    for (let i = 0; i < tiles.numColumns; i++) {
      if (tiles.columnHints[i].length !== tilesSolution.columnHints[i].length) return false;
      for (let j = 0; j < tiles.columnHints[i].length; j++) {
        if (
          tiles.columnHints[i][j].count !== tilesSolution.columnHints[i][j].count
          || tiles.columnHints[i][j].colorIndex !== tilesSolution.columnHints[i][j].colorIndex
        ) return false;
      }
    }

    return true;
  });

  return isWin;
};

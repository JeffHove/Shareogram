import { type Hint } from "./refs.svelte";

export const testNonogram = (rowHints: Hint[][], colHints: Hint[][]): boolean => {
  const solutions: number[][][] = [];
  solveNonogram(rowHints, colHints, solutions);
  return solutions.length === 1;
};

export const solveNonogram = (rowHints: Hint[][], colHints: Hint[][], solutions: number[][][]): void => {
  const height = rowHints.length;
  const width = colHints.length;

  // Create initial grid filled with -1 (unknown)
  const grid: number[][] = Array(height).fill(null).map(() => Array(width).fill(-1));
  
  // Cache the possible colors
  const possibleColors = getPossibleColors(rowHints, colHints);
  
  // Try to solve using constraint propagation and backtracking
  solveWithBacktracking(grid, rowHints, colHints, 0, 0, solutions, possibleColors);
};

const solveWithBacktracking = (
  grid: number[][],
  rowHints: Hint[][],
  colHints: Hint[][],
  row: number,
  col: number,
  solutions: number[][][],
  possibleColors: number[],
): boolean => {
  const height = grid.length;
  const width = grid[0].length;

  // If we've filled the entire grid, check if it's valid
  if (row >= height) {
    if (isValidSolution(grid, rowHints, colHints)) {
      solutions.push(grid.map(row => [...row]));
      // Stop if we have found two solutions
      return solutions.length >= 2;
    }
    return false;
  }

  // Move to the next cell (next column or next row)
  const nextCol = (col + 1) % width;
  const nextRow = nextCol === 0 ? row + 1 : row;

  // If the cell is already filled, move to the next cell
  if (grid[row][col] !== -1)
    return solveWithBacktracking(grid, rowHints, colHints, nextRow, nextCol, solutions, possibleColors);

  // Try each possible color for the current cell
  for (const color of possibleColors) {
    grid[row][col] = color;

    // Check if the partial solution is still valid
    if (isPartiallyValid(grid, row, col, rowHints, colHints)) {
      // Recursively try to solve the rest of the grid
      if (solveWithBacktracking(grid, rowHints, colHints, nextRow, nextCol, solutions, possibleColors)) {
        return true;
      }
    }

    // Backtrack if this choice doesn't lead to a solution
    grid[row][col] = -1;
  }

  return false;
};

const getPossibleColors = (rowHints: Hint[][], colHints: Hint[][]): number[] => {
  // Get maximum color value from clues
  let maxColor = 0;

  // Find max color from all hints
  for (const hints of [...rowHints, ...colHints]) {
    for (const { colorIndex } of hints) {
      maxColor = Math.max(maxColor, colorIndex);
    }
  }

  // Return all possible colors (0 to maxColor)
  return Array.from({ length: maxColor + 1 }, (_, i) => i);
};

const isPartiallyValid = (
  grid: number[][],
  row: number,
  col: number,
  rowHints: Hint[][],
  colHints: Hint[][],
): boolean => {
  // Check if the current row is valid
  if (!hasUnknownCells(grid[row]) && !matchesClue(grid[row], rowHints[row])) {
    return false;
  }

  // Check if the current column is valid
  const column = grid.map(r => r[col]);
  if (!hasUnknownCells(column) && !matchesClue(column, colHints[col])) {
    return false;
  }

  return true;
};

const hasUnknownCells = (line: number[]): boolean => line.some(cell => cell === -1);

const matchesClue = (line: number[], clue: Hint[]): boolean => {
  // Group consecutive non-zero cells with the same color
  const groups: Array<[number, number]> = [];
  let currentColor: number | null = null;
  let currentLength = 0;

  for (const cell of line) {
    if (cell === 0) {
      // Empty cell ends the current group
      if (currentColor !== null && currentLength > 0) {
        groups.push([currentLength, currentColor]);
        currentColor = null;
        currentLength = 0;
      }
    }
    else if (cell === currentColor) {
      currentLength++;
    }
    else {
      // Start a new group or end the previous one and start a new one
      if (currentColor !== null && currentLength > 0) {
        groups.push([currentLength, currentColor]);
      }
      currentColor = cell;
      currentLength = 1;
    }
  }

  // Add the last group if there is one
  if (currentColor !== null && currentLength > 0) {
    groups.push([currentLength, currentColor]);
  }

  // Compare with the clue
  if (groups.length !== clue.length) return false;

  for (let i = 0; i < groups.length; i++) {
    if (groups[i][0] !== clue[i].count || groups[i][1] !== clue[i].colorIndex) {
      return false;
    }
  }

  return true;
};

const isValidSolution = (grid: number[][], rowHints: Hint[][], colHints: Hint[][]): boolean => {
  const height = grid.length;
  const width = grid[0].length;

  // Check all rows
  for (let row = 0; row < height; row++) {
    if (!matchesClue(grid[row], rowHints[row])) return false;
  }

  // Check all columns
  for (let col = 0; col < width; col++) {
    if (!matchesClue(grid.map(r => r[col]), colHints[col])) return false;
  }

  return true;
};

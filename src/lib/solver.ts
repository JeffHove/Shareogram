import { type Encode } from "./refs.svelte";

type Color = number; // 0 represents empty, other numbers represent colors
type Line = Array<Color>;
type Grid = Array<Array<Color>>;
type Clue = Array<Encode>;
type Clues = Array<Array<Encode>>;

export function testNonogramSolver(rowClues: Clues, colClues: Clues) {
  // Test case: This should be unsolvable
  // const rowClues: Clues = [
  //   [{count: 1, colorIndex: 1}],
  //   [{count: 1, colorIndex: 1}]
  // ];
  
  // const colClues: Clues = [
  //   [{count: 1, colorIndex: 1}],
  //   [{count: 1, colorIndex: 1}]
  // ];
  
  const solutions: Grid[] = [];
  solveNonogram(rowClues, colClues, solutions);
  const hasUniqueSolution = solutions.length === 1;
  
  // console.log("Solution found:", solutions.length > 0);
  // console.log("Unique solution:", hasUniqueSolution);
  
  if (solutions.length > 1) {
    solutions.forEach((solution, index) => {
      console.log(`Solution ${index + 1}:`);
      for (const row of solution) {
        console.log(row);
      }
    });
  }

  return { hasUniqueSolution, solutions};
}

export function solveNonogram(rowClues: Clues, colClues: Clues, solutions: Grid[]): void {
  const height = rowClues.length;
  const width = colClues.length;
  
  // Create initial grid filled with -1 (unknown)
  const grid: Array<Array<number>> = [];
  for (let i = 0; i < height; i++) {
    grid[i] = [];
    for (let j = 0; j < width; j++) {
      grid[i][j] = -1;
    }
  }
  
  // Try to solve using constraint propagation and backtracking
  solveWithBacktracking(grid, rowClues, colClues, 0, 0, solutions);
}

function solveWithBacktracking(
  grid: Grid, 
  rowClues: Clues, 
  colClues: Clues, 
  row: number, 
  col: number,
  solutions: Grid[]
): boolean {
  const height = grid.length;
  const width = grid[0].length;
  
  // If we've filled the entire grid, check if it's valid
  if (row >= height) {
    if (isValidSolution(grid, rowClues, colClues)) {
      // Add a copy of the solution to the solutions array
      const solutionCopy: Grid = grid.map(row => [...row]);
      solutions.push(solutionCopy);
      return true; // Continue searching for more solutions
    }
    return false;
  }
  
  // Move to the next cell (next column or next row)
  const nextCol = (col + 1) % width;
  const nextRow = nextCol === 0 ? row + 1 : row;
  
  // If the cell is already filled, move to the next cell
  if (grid[row][col] !== -1) {
    return solveWithBacktracking(grid, rowClues, colClues, nextRow, nextCol, solutions);
  }
  
  // Try each possible color for the current cell
  const possibleColors = getPossibleColors(grid, row, col, rowClues, colClues);
  
  for (const color of possibleColors) {
    grid[row][col] = color;
    
    // Check if the partial solution is still valid
    if (isPartiallyValid(grid, row, col, rowClues, colClues)) {
      // Recursively try to solve the rest of the grid
      if (solveWithBacktracking(grid, rowClues, colClues, nextRow, nextCol, solutions)) {
        // If we only want unique solutions, we can stop after the first solution is found
        // return false;
      }
    }
    
    // Backtrack if this choice doesn't lead to a solution
    grid[row][col] = -1;
  }
  
  return false;
}

function getPossibleColors(
  grid: Grid, 
  row: number, 
  col: number, 
  rowClues: Clues, 
  colClues: Clues
): Color[] {
  // Get maximum color value from clues
  let maxColor = 0;
  
  // Iterate through all row clues
  for (const clue of rowClues) {
    for (const {colorIndex} of clue) {
      if (colorIndex > maxColor) {
        maxColor = colorIndex;
      }
    }
  }
  
  // Iterate through all column clues
  for (const clue of colClues) {
    for (const {colorIndex} of clue) {
      if (colorIndex > maxColor) {
        maxColor = colorIndex;
      }
    }
  }
  
  // Return all possible colors (0 to maxColor)
  const colors: Color[] = [];
  for (let i = 0; i <= maxColor; i++) {
    colors.push(i);
  }
  return colors;
}

function isPartiallyValid(
  grid: Grid, 
  row: number, 
  col: number, 
  rowClues: Clues, 
  colClues: Clues
): boolean {
  // Check if the current row is valid
  if (isRowComplete(grid, row)) {
    if (!isValidRow(grid, row, rowClues[row])) {
      return false;
    }
  }
  
  // Check if the current column is valid
  if (isColComplete(grid, col)) {
    if (!isValidCol(grid, col, colClues[col])) {
      return false;
    }
  }
  
  return true;
}

function isRowComplete(grid: Grid, row: number): boolean {
  for (let col = 0; col < grid[row].length; col++) {
    if (grid[row][col] === -1) {
      return false;
    }
  }
  return true;
}

function isColComplete(grid: Grid, col: number): boolean {
  for (let row = 0; row < grid.length; row++) {
    if (grid[row][col] === -1) {
      return false;
    }
  }
  return true;
}

function isValidRow(grid: Grid, row: number, clue: Clue): boolean {
  return matchesClue(grid[row], clue);
}

function isValidCol(grid: Grid, col: number, clue: Clue): boolean {
  const column: Color[] = [];
  for (let row = 0; row < grid.length; row++) {
    column.push(grid[row][col]);
  }
  return matchesClue(column, clue);
}

function matchesClue(line: Line, clue: Clue): boolean {
  // Group consecutive non-zero cells with the same color
  const groups: Array<[number, Color]> = [];
  let currentColor: Color | null = null;
  let currentLength = 0;
  
  for (const cell of line) {
    if (cell === 0) {
      // Empty cell ends the current group
      if (currentColor !== null && currentLength > 0) {
        groups.push([currentLength, currentColor]);
        currentColor = null;
        currentLength = 0;
      }
    } else if (cell === currentColor) {
      // Continue the current group
      currentLength++;
    } else {
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
  if (groups.length !== clue.length) {
    return false;
  }
  
  for (let i = 0; i < groups.length; i++) {
    if (groups[i][0] !== clue[i].count || groups[i][1] !== clue[i].colorIndex) {
      return false;
    }
  }
  
  return true;
}

function isValidSolution(grid: Grid, rowClues: Clues, colClues: Clues): boolean {
  const height = grid.length;
  const width = grid[0].length;
  
  // Check all rows
  for (let row = 0; row < height; row++) {
    if (!isValidRow(grid, row, rowClues[row])) {
      return false;
    }
  }
  
  // Check all columns
  for (let col = 0; col < width; col++) {
    if (!isValidCol(grid, col, colClues[col])) {
      return false;
    }
  }
  
  return true;
}

// Run the test
// const result = testNonogramSolver();
const isValidSudoku = (board) => {
  const checkSquare = (square) => {
    let obj = {};
    for (let i = 0; i < square.length; i++) {
      if (obj[square[i]]>=0) {
        return false;
      } else {
        if (square[i] !== '.') obj[square[i]] = i;
      }
    }
    return true;
  }

  for (let square of board) {
    if(!checkSquare(square)) return false;
  }
  
  return true;
}

let board =
  [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]

console.log(isValidSudoku(board));
const isValidSudoku = (board) => {
  const checkArr = (arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]] >= 0) {
        return false;
      } else {
        if (arr[i] !== '.') obj[arr[i]] = i;
      }
    }
    return true;
  }

  const checkSquare = (quadrant) => {
    let row = quadrant[0] * 3;
    let column = quadrant[1] * 3;
    let square = [];
    board.slice(row, row + 3).forEach(r => {
      for (let i = column; i < column + 3; i++) {
        square.push(r[i])
      }
    })
    return checkArr(square);
  }

  const checkColumn = (y) => {
    let column = [];
    for (let row of board) {
      column.push(row[y]);
    };
    return checkArr(column);
  }

  const checkRow = (x) => {
    let row = board[x];
    return checkArr(row);
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!checkSquare([i, j])) return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    if (!checkRow(i)) return false;
    if (!checkColumn(i)) return false;
  }

  return true;
}

function isValidSudoku(board) {
  let rows = Array.from({ length: 9 }, () => Object());
  let columns = Array.from({ length: 9 }, () => Object());
  let squares = Array.from({ length: 9 }, () => Object());
  let num, square;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      square = Math.floor(i/3)*3+Math.floor(j/3)

      if (board[i][j] !== '.') {
        num = board[i][j];

        if (rows[i][num]) {
          return false
        } else {
          rows[i][num] = 1;
        }

        if (columns[j][num]) {
          return false
        } else {
          columns[j][num] = 1;
        }

        if (squares[square][num]) {
          return false
        } else {
          squares[square][num] = 1;
        }

      }
    }
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
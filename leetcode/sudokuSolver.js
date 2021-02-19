const solveSudoku = (sudoku) => {

  function getRowColSquare(x, y, board) {
    let row = [];
    let column = [];
    let square = [];
    let sx = Math.floor(x / 3) * 3;
    let sy = Math.floor(y / 3) * 3;

    for (let i = 0; i < 9; i++) {
      if (board[y][i] !== '.') {
        column.push(board[y][i]);
      }
      if (board[i][x] !== '.') {
        row.push(board[i][x]);
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        square.push(board[i + sy][j + sx]);
      }
    }

    return { row, column, square }
  }

  function nextCell(board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === '.') {
          return [j, i]
        }
      }
    }

    return [-1, -1];
  }

  function getPossibleNums(x, y, board) {
    let nums = new Set();
    let { row, column, square } = getRowColSquare(x, y, board)

    for (let i = 1; i < 10; i++) {
      nums.add(`${i}`)
    }

    for (let num of [...row, ...column, ...square]) {
      nums.delete(num);
    }

    return nums;
  }

  function inputNumber(board) {

    let [x, y] = nextCell(board);

    if (x < 0 && y < 0) {
      return true;
    }

    let nums = getPossibleNums(x, y, board);
    if (!nums.size) return false;

    let boardCopy = [];
    for (let i = 0; i < board.length; i++) {
      boardCopy.push([...board[i]])
    }

    for (let num of nums) {
      boardCopy[y][x] = num;
      let res = inputNumber(boardCopy);
      if (res) {
        numbers.push(num);
        return true;
      }
    }

    return false;
  }

  let numbers = [];
  if (inputNumber(sudoku)) {
    for (let i = 0; i < sudoku.length; i++) {
      for (let j = 0; j < sudoku[i].length; j++) {
        if (sudoku[i][j] === '.') {
          sudoku[i][j] = numbers.pop()
        }
      }
    }
  };

  return sudoku;
}

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(solveSudoku(board))
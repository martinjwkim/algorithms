var solveSudoku = function(board){
  let rows = Array.from({ length: 9 }, () => Object());
  let columns = Array.from({ length: 9 }, () => Object());
  let squares = Array.from({ length: 9 }, () => Object());
  let num, square;
  let baseInputs = 0;

  function isValidSudoku(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        square = Math.floor(i/3)*3+Math.floor(j/3)
  
        if (board[i][j] !== '.') {
          num = board[i][j];
  
          if (rows[i][num]) {
            return false
          } else {
            rows[i][num] = 1;
            baseInputs++
          }
  
          if (columns[j][num]) {
            return false
          } else {
            columns[j][num] = 1;
            baseInputs++
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

  function validNumber(n, i, j) {
    square = Math.floor(i/3)*3+Math.floor(j/3);
    if (rows[i][n] || columns[j][n] || squares[square][n]) return false;
    return true;
  }

  if (isValidSudoku(board)){
    let inputs = baseInputs;

    while (inputs < 81){
      for (let i=0; i<9; i++){
        for (let j=0; j<9; j++){
          if(board[i][j] === '.'){
            
          }
        }
      }
    }


  } else {
    return 'invalid board';
  }

  return board;

}

let board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(solveSudoku(board))
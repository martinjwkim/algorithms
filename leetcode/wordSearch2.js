const findWords = (board, words) => {

  const directions = [[1,0],[-1,0],[0,1],[0,-1]];

  const findWord = (x, y) => {

    let cell = board[y][x];

    board[y][x] = '#'

    for (let [dx, dy] of directions){
      findWord(x+dx,y+dy);
    }

    board[y][x] = cell;

    return;
  }

  let wordSet = new Set();

  for (let word of words) {
    wordSet.add(word);
  }

  for (let y=0; y<board.length; y++){
    for (let x=0; x<board[0].length; x++){
      findWord(x, y, wordSet)
    }
  }

  
}
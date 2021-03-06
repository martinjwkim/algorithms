const findWords = (board, words) => {

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  const findWord = (x, y, curr) => {

    if (x < 0 || y < 0 || x >= board[0].length || y >= board.length) return;
    if (board[y][x] === '#') return;

    let cell = board[y][x];
    curr += cell;

    if (wordSet.has(curr)) {
      resSet.add(curr);
      wordSet.delete(curr);
    }

    board[y][x] = '#'

    for (let [dx, dy] of directions) {
      findWord(x + dx, y + dy, curr);
    }

    board[y][x] = cell;

    return;
  }

  let wordSet = new Set();
  let resSet = new Set();
  let res = [];

  for (let word of words) {
    wordSet.add(word);
  }

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      findWord(x, y, '')
    }
  }

  for (let word of resSet) {
    res.push(word)
  }

  return res;
}
const exist = (board, word) => {
  let startingLetter = word[0];
  let startingPoints = [];
  let found = false;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === startingLetter) startingPoints.push([j, i])
    }
  }

  function findWord(x, y, i, visited) {
    if (found) return;
    if (x === board[0].length || x < 0) return;
    if (y === board.length || y < 0) return;
    if (visited[`${x},${y}`]) return;
    if (board[y][x] !== word[i]) return;
    if (i === word.length - 1) {
      found = true;
      return;
    }

    findWord(x + 1, y, i + 1, { ...visited, [`${x},${y}`]: true })
    findWord(x - 1, y, i + 1, { ...visited, [`${x},${y}`]: true })
    findWord(x, y + 1, i + 1, { ...visited, [`${x},${y}`]: true })
    findWord(x, y - 1, i + 1, { ...visited, [`${x},${y}`]: true })
  }

  for (let start of startingPoints) {
    findWord(start[0], start[1], 0, {})
  }

  return found;
};
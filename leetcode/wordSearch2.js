const findWords = (board, words) => {

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  const buildTree = (words) => {
    let tree = {};

    for (let word of words) {
      let node = tree;
      for (let char of word) {
        if (!node[char]) node[char] = {};
        node = node[char];
      }
      node.word = word;
    }

    return tree;
  }

  const search = (x, y, node) => {

    if (node.word) resSet.add(node.word);
    if (x < 0 || y < 0 || x >= board[0].length || y >= board.length) return;
    if (!node) return;
    if (board[y][x] === '#') return;

    let cell = board[y][x];

    if (!node[cell]) return;

    board[y][x] = '#'

    for (let [dx, dy] of directions) {
      search(x + dx, y + dy, node[cell]);
    }

    board[y][x] = cell;

    return;
  }

  let root = buildTree(words);
  let resSet = new Set();
  let res = [];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      search(x, y, root)
    }
  }

  for(let word of resSet){
    res.push(word)
  }
  
  return res;
}
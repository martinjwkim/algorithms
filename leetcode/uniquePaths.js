const uniquePaths = (m, n) => {

  function traverse(x, y, memo) {

    if (memo[`${x},${y}`]) {
      return memo[`${x},${y}`];
    }

    if (x === 1 & y === 1) {
      return 1;
    }

    if (x === 0 || y === 0) {
      return 0;
    }

    memo[`${x},${y}`] = traverse(x - 1, y, memo) + traverse(x, y - 1, memo);
    return memo[`${x},${y}`]

  }

  return traverse(m, n, {});
}

console.log(uniquePaths(2, 3))
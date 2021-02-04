const uniquePathsWithObstacles = (obstacleGrid) => {

  function traverse(x, y, memo) {
    if (memo[`${x},${y}`]) return memo[`${x},${y}`]
    if (x === 0 || y === 0) return 0;
    if (obstacleGrid[x-1][y-1]===1) return 0;
    if (x === 1 & y === 1) return 1;
    memo[`${x},${y}`] = traverse(x - 1, y, memo) + traverse(x, y - 1, memo);
    return memo[`${x},${y}`]
  }

  return traverse(obstacleGrid.length, obstacleGrid[0].length, {});
};

console.log(uniquePathsWithObstacles([[1]]))
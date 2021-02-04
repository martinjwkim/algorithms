/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.
*/

const minPathSum = (grid) => {
  function traverse(x, y, memo) {
    if (x < 0 || y < 0) return Infinity;
    if (x === 0 && y === 0) return grid[x][y];
    if (memo[`${x},${y}`]) {
      return memo[`${x},${y}`];
    }
    memo[`${x},${y}`] = grid[x][y] + Math.min(traverse(x-1,y,memo), traverse(x,y-1,memo));
    return memo[`${x},${y}`]
  }

  return traverse(grid.length-1, grid[0].length-1, {})
}

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
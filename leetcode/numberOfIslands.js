const numIslands = (grid) => {
  let directions = [[1,0], [-1,0], [0,1], [0,-1]];
  let count = 0;

  const liquify = (x, y) => {
    if (x < 0 || y < 0 || x >= grid[0].length || y >= grid.length) return;
    if (grid[y][x] === '0') return;

    grid[y][x] = '0';

    for (let [dx, dy] of directions) {
      liquify(x+dx, y+dy);
    }
  }

  for (let i=0; i<grid.length; i++){
    for (let j=0; j<grid[i].length; j++){
      if (grid[i][j] === '1'){
        liquify(j, i);
        count++;
      }
    }
  }

  return count;
}
const uniquePaths = (m, n) => {
  let count = 0;
  let obj =  {};
  for (let i=1; i<=m; i++){
    obj[i]={};
  }

  function traverse(s, x, y, travelled) {
    if (x===1 & y===1) {
      console.log(travelled)
      count++
      return;
    }
    if (x===0 || x > s[0] || y === 0 || y > s[1]) {
      return;
    }
    if(travelled[x][y]){
      return;
    }
    traverse(s, x-1, y, {...travelled, [x]: {...travelled[x], [y]: true}})
    traverse(s, x, y-1, {...travelled, [x]: {...travelled[x], [y]: true}})
  }

  traverse([m, n], m, n, obj)

  return count;
}

console.log(uniquePaths(3,2))
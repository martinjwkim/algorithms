// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

const generateMatrix = (n) => {
  let matrix = Array.from({ length: n }, () => [])
  let nums = [];
  let dir = 'right'
  let c = 0;

  for (let i=n**2; i>0; i--){
    nums.push(i);
  }

  while(nums.length > 0){
    if (dir  === 'right'){
      for(let i=c; i<n-c; i++){
        matrix[c][i] = nums.pop();
      }
      dir = 'down';
    } else if (dir  === 'down'){
      for (let i=c+1; i<n-1-c; i++){
        matrix[i][n-1-c] = nums.pop();
      }
      dir = 'left'
    } else if (dir  === 'left'){
      for (let i=n-c-1; i>=c; i--){
        matrix[n-c-1][i] =  nums.pop();
      }
      dir = 'up'
    } else if (dir  === 'up'){
      for (let i=n-c-2; i>c; i--){
        matrix[i][c] = nums.pop();
      }
      c++
      dir = 'right'
    }
  }

  return matrix;
}

console.log(generateMatrix(5))
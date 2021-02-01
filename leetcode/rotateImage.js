/* 
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.
*/

const rotateOuter = (matrix) => {
  // collect clockwise in arr
  // top
  let arr = [...matrix[0]];
  // right going down
  for (let i = 1; i < matrix.length - 1; i++) {
    arr.push(matrix[i][matrix[i].length - 1]);
  }
  // bot in reverse
  arr.push(...matrix[matrix.length - 1].slice().reverse());
  // left going up
  for (let i = matrix.length - 2; i > 0; i--) {
    arr.push(matrix[i][0])
  }

  for (let i = 0; i < matrix.length - 1; i++) {
    arr.unshift(arr.pop())
  }

  return arr;
}

const rotate = (matrix) => {
  // rotate along diagonal
  let temp;
  for (let i=0; i<matrix.length; i++){
    for (let j=i; j<matrix.length; j++){
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // reverse
  for (let i=0; i<matrix.length; i++){
    matrix[i].reverse()
  }

  return matrix
};

console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]))
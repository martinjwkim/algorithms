/* 
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.
*/ 

const rotateImage = (matrix) => {
  // outer box
  // inner box
  function rotateOuter(m) {
    // collect clockwise in arr
    // top
    let arr = [...m[0]];
    // right going down
    for (let i=1 ; i<m.length-1; i++){
      arr.push(m[i][m[i].length-1]);
    }
    // bot in reverse
    arr.push(...m[m.length-1].slice().reverse());
    // left going up
    for (let i=m.length-2; i>0; i--){
      arr.push(m[i][0])
    }

    for (let i=0; i<matrix.length-1; i++){
      arr.unshift(arr.pop())
    }

    return  arr;
  }

  return rotateOuter(matrix)
}

console.log(rotateImage([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))
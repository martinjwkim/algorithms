const spiralOrder = (matrix) => {

  let res = [];
  let direction = 'top'

  while(matrix.length){
    if (direction === 'top'){
      res.push(...matrix.shift())
      direction = 'right'
    } else if (direction === 'right') {
      for (let i=0; i<matrix.length; i++){
        if(matrix[i].length > 1 ){
          res.push(matrix[i].pop())
        } else {
          res.push(...matrix.shift())
          i--;
        }
      }
      direction = 'bottom'
    } else if (direction === 'bottom'){
      res.push(...(matrix.pop().reverse()))
      direction = 'left'
    } else if (direction === 'left'){
      for (let i=matrix.length-1; i>=0; i--){
        if(matrix[i].length > 1 ){
          res.push(matrix[i].shift())
        } else {
          res.push(...matrix.pop())
        }
      }
      direction = 'top'
    }
  }

  return res;
}

console.log(spiralOrder([[2,5],[8,4],[0,-1]]))
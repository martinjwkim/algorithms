const maximalRectangle = (matrix) => {
  
  
  const findLargestRectangle = (x, y) => {
    
  }

  const findLargestSquare = (x, y) => {

  }

  const extend = (x, y, len, direction) => {

  }

  let maxArea = 0;

  for (let j=0; j<matrix.length; j++){
    for (let i=0; i<matrix[0].length; i++){
      maxArea = Math.max(maxArea, findLargestRectangle(i, j));
    }
  }

  return maxArea;

}
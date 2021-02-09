const setZeroes = function (matrix) {
  let column = false;
  let row = false;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) column = true;
  }

  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) row = true;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }


  for (let i = matrix[0].length - 1; i > 0; i--) {
    if (matrix[0][i] === 0) {
      for (let j = 0; j < matrix.length; j++) {
        matrix[j][i] = 0;
      }
    }
  }


  for (let i = matrix.length - 1; i > 0; i--) {
    if (matrix[i][0] === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  if (row) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  if (column) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;

};
const searchMatrix = (matrix, target) => {
  function findRow(low, high) {
    if (low > high) return -1;

    let row;
    let mid = Math.floor((low + high) / 2);

    if (target >= matrix[mid][0] && target <= matrix[mid][matrix[0].length - 1]) {
      row = mid;
    } else if (target < matrix[mid][0]) {
      row = findRow(low, mid - 1)
    } else {
      row = findRow(mid + 1, high)
    }

    return row;
  }

  function isNumInArr(arr, low, high) {
    if (low > high) return false;

    let mid = Math.floor((low + high) / 2);
    let found = false;

    if (arr[mid] === target) {
      found = true;
    } else if (target < arr[mid]) {
      found = isNumInArr(arr, low, mid - 1)
    } else {
      found = isNumInArr(arr, mid + 1, high)
    }

    return found;
  }

  let row = findRow(0, matrix.length - 1)

  if (row >= 0) {
    return isNumInArr(matrix[row], 0, matrix[row].length - 1)
  } else {
    return false;
  }
};
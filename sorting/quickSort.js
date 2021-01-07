function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = sort(arr, left, right)
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  } 
  return arr;
}

function sort(arr, left = 0, right = arr.length-1) {
  let pivot = arr[left];
  let count = left;

  for (let i = left+1; i <= right; i++) {
    if (pivot > arr[i]) {
      count++
      [arr[i], arr[count]] = [arr[count], arr[i]]
    }
  }

  [arr[left], arr[count]] = [arr[count], arr[left]]
  return count
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))
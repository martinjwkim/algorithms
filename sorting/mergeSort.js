function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let midPoint = Math.floor(arr.length/2);
  let leftArr = arr.slice(0,midPoint);
  let rightArr = arr.slice(midPoint);

  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(arr1, arr2) {
  let mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i])
      i++
    } else {
      mergedArr.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}

console.log(mergeSort([10,24,76,73,72,1,9]))
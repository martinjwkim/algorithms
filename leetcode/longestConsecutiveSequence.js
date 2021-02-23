const eraseOverlapIntervals = (nums) => {
  let sortedNums = nums.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let curr = sortedNums[0];

  for (let i = 1; i < sortedNums.length; i++) {
    if (curr[1] > sortedNums[i][0]){
      count++;
    } else {
      curr = sortedNums[i];
    }
  }

  return count;
}
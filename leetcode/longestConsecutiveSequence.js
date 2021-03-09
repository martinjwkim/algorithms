const longestConsecutive2 = (nums) => {
  let currNum, currMax;
  let max = 0;

  let numSet = new Set();

  for (let num of nums) {
    numSet.add(num);
  }

  for (let num of nums) {
    if (!numSet.has(num - 1)) {
      currNum = num;
      currMax = 1;

      while (numSet.has(currNum + 1)) {
        currMax++;
        currNum = currNum + 1;
      }

      max = Math.max(max, currMax);
    }
  }

  return max;

}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
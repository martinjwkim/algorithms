const combinationSum4 = (nums, target) => {
  let count = 0;

  function findCombos(numsArr, tar, sum) {
    if (sum === target) {
      count++;
      return;
    }
    if (sum > target) return;
    for (let i = 0; i < numsArr.length; i++) {
      findCombos(numsArr, tar, sum + numsArr[i])
    }
  }

  findCombos(nums, target, 0)

  return count;
}
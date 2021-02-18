const combinationSum4 = (nums, target) => {

  function findCombos(numsArr, left, memo) {
    if (memo[left]) return memo[left];
    if (left === 0) {
      return 1;
    }
    if (left < 0) return 0;
    let num = 0;
    for (let i = 0; i < numsArr.length; i++) {
      num += findCombos(numsArr, left - numsArr[i], memo)
    }
    memo[left] = num;

    return memo[left]
  }

  return findCombos(nums, target, {})
}
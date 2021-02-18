const combinationSum4 = (nums, target, memo = {}) => {

  if (memo[target] >= 0) return memo[target];
  if (target === 0) return 1;
  if (target < 0) return 0;

  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num += combinationSum4(nums, target - nums[i], memo)
  }
  memo[target] = num;

  return memo[target];
}
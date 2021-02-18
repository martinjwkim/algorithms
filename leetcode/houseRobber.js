const rob = (nums) => {
  function findMax(nums, i) {

    if (i >= nums.length) return 0;

    return nums[i] + Math.max(findMax(nums, i + 2), findMax(nums, i + 3))
  }

  return Math.max(findMax(nums, 0), findMax(nums, 1))
}
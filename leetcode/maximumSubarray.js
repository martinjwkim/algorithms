const maxSubArray = (nums) => {
  let max = nums[0];
  
  for (let i=1; i<nums.length; i++){
    nums[i] = Math.max(nums[i], nums[i-1]+nums[i]);
    max = Math.max(max, nums[i])
  }

  return max;
}
const rob = (nums) => {
  
  for (let i=nums.length-1; i>=0; i--){
    nums[i] += Math.max(nums[i+2] || 0, nums[i+3] || 0)
  }

  return Math.max(nums[0] || 0,nums[1] || 0)
}
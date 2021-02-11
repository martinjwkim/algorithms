const maxProduct = (nums) => {
  let arr = [{max: nums[0], min: nums[0]}]
  let max = nums[0];
  let currMax, currMin;

  for (let i=1; i<nums.length; i++){
    if (nums[i-1] !== 0) {
      currMax = Math.max(nums[i]*arr[i-1].max, nums[i]*arr[i-1].min)
      currMin = Math.min(nums[i]*arr[i-1].max, nums[i]*arr[i-1].min)
      arr.push({max: currMax, min: currMin})
    } else {
      arr.push({max: nums[i], min: nums[i]})
    }

    max = Math.max(max, arr[i].max)
  }

  return max;
}
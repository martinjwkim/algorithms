const findMin = (nums) => {
  let min = nums[0];

  for (let i=0; i<nums.length; i++){
    if (nums[i] < min) {
      min = nums[i];
      break;
    }
  }

  return min;
}
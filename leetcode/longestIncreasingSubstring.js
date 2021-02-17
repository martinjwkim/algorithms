const lengthOfLIS = (nums) => {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    let inserted = false;

    for (let j = 0; j < arr.length; j++) {
      if (nums[i] <= arr[j] && !inserted) {
        arr[j] = nums[i];
        inserted = true;
      }
    }
    if (!inserted) arr.push(nums[i]);
  }

  return arr.length
}

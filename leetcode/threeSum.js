var threeSum = function (nums) {

  let res = [];

  if (nums.length < 3) return res;

  let sortedNums = nums.sort((a, b) => a - b);
  let i = 0;

  while (i < sortedNums.length - 2) {
    res.push(...twoSum(sortedNums.slice(i + 1), sortedNums[i]))
    do {
      i++;
    } while (sortedNums[i] === sortedNums[i - 1]);
  }

  return res;
};

function twoSum(nums, target) {
  // for a sorted array nums

  let l = 0;
  let r = nums.length - 1;
  let res = [];

  if (nums.length < 2) return res;

  while (l < r) {
    if (nums[l] + nums[r] + target === 0) {
      res.push([target, nums[l], nums[r]])
      do {
        l++;
      } while (nums[l] === nums[l - 1]);
      do {
        r--;
      } while (nums[r] === nums[r + 1])
    } else if (nums[l] + nums[r] + target < 0) {
      do {
        l++;
      } while (nums[l] === nums[l - 1]);
    } else {
      do {
        r--;
      } while (nums[r] === nums[r + 1])
    }
  }

  return res;
}

[-2,-1,0,1,2,3] -4

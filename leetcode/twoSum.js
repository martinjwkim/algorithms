//EASY

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  return -1;
};

var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] >= 0) {
      return [hash[target - nums[i]], i]; 
    } else {
      hash[nums[i]] = i;
    }
  }
  return -1;
};

console.log(twoSum([2,7,11,15],9))

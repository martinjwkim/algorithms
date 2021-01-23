/* Given an array nums of n integers and an integer target, 
are there elements a, b, c, and d in nums such that a + b + c + d = target? 
Find all unique quadruplets in the array which gives the sum of target.
*/

var fourSum = function (nums, target) {
  let sortedNums = nums.sort((a, b) => a - b);

  let l = 0;
  let r = l+1;
  let res = [];
  let twoSumRes;

  while (l < nums.length-3) {
    twoSumRes = twoSum(sortedNums.slice(l + 1, r), target - sortedNums[l] - sortedNums[r])
    twoSumRes.forEach(arr => res.push([l, ...arr, r]))

    

  }

  return res;
};

//[ -2, -1, 0, 0, 1, 2 ]

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
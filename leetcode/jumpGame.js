/*
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.
*/

const canJump = (nums) => {
  let deadEnds = {};
  let startIndex = nums.indexOf(0) - 1;
  if (startIndex === -2 || nums.length === 1) return true;

  function jump(arr, currIndex, path) {
    if (currIndex + arr[currIndex] >= arr.length - 1) return true;
    if (deadEnds[currIndex]) return false;
    if (arr[currIndex] === 0) {
      for (let i = 0; i < path.length; i++) {
        deadEnds[path[i]] = true;
      }
      return false;
    }
    for (let i = arr[currIndex]; i > 0; i--) {
      if (jump(arr, currIndex + i, path.concat(currIndex + i))) return true;
    }
    return false;
  }

  if (startIndex>=0){
    for (let i = startIndex; i >= 0; i--) {
      if (nums[i]+i>startIndex){
        if (jump(nums, i, [i])) return true;
      }
    }
    return false;
  } else {
    return jump(nums,0,[])
  }
}

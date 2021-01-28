/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
Follow up: Could you write an algorithm with O(log n) runtime complexity?
*/

// const searchRange = (nums, target) => {

//   function search(nums, target, l = 0, r = nums.length - 1) {
//     if (l === r) return [-1,1]

//     let midPoint = Math.floor((r - l) / 2);
//     if (nums[midPoint] === target) {
//       return midPoint
//     } else if (nums[midPoint] > target) {
//       return search(nums, target, l, midPoint)
//     } else {
//       return search(nums, target, midPoint, r)
//     }
//   }

//   let index = search(nums,target);
//   let l = index-1;
//   let r = index+1;
//   let count = 1;
//   while(nums[r]===target && nums[l]===target){
    
//   }
// }

const searchRange = (nums, target, l = 0, r = nums.length - 1) => {
  if (l > r || !nums.length) return [-1,-1]
  
  let midPoint = Math.floor((r + l) / 2);

  if (nums[midPoint] === target) {
    let startIndex = midPoint;
    let endIndex = midPoint;
    while(nums[startIndex-1]===target){
      startIndex--
    }
    while(nums[endIndex+1]===target){
      endIndex++
    }
    return [startIndex,endIndex]
  } else if (nums[midPoint] > target) {
    return searchRange(nums, target, l, midPoint-1)
  } else {
    return searchRange(nums, target, midPoint+1, r)
  }
}

console.log(searchRange([5,7,7,8,8,10],8))g
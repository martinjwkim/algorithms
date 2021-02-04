/*
Given an array nums with n objects colored red, white, or blue, 
sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
*/

let sortColors = (nums) => {
  let left = 0;
  let right = nums.length -1;
  let i=0;

  while (i<=right){
    if(nums[i] === 0){
      [nums[i],nums[left]] = [nums[left],nums[i]];
      i++;
      left++;
    } else if(nums[i] === 1){
      i++;
    } else if(nums[i] === 2){
      [nums[i],nums[right]] = [nums[right],nums[i]];
      right--;
    }
  }

  return nums;
}

console.log(sortColors([2,0,2,1,1,0]))
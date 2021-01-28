/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
The replacement must be in place and use only constant extra memory.
*/

const nextPermutation = (nums) => {
  let prev;
  let pPoint = -1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < prev) {
      pPoint = i;
      break;
    }
    prev = nums[i];
  }

  if (pPoint === -1) return nums.reverse();

  let nextIndex = pPoint + 1;
  for (let i = nextIndex; i < nums.length; i++) {
    if (nums[i] > nums[pPoint] && nums[i] < nums[nextIndex]) {
      nextIndex = i;
    }
  }

  [nums[pPoint],nums[nextIndex]] = [nums[nextIndex], nums[pPoint]]

  return nums.slice(0, pPoint + 1).concat(nums.slice(pPoint + 1).reverse());
}

console.log(nextPermutation([1,3,2]))
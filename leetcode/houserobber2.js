const rob = (nums) => {

  if (nums.length === 1) return nums[0]

  let nums1 = nums.slice(1);
  let nums2 = nums.slice(0, nums.length - 1);

  const robHouses = (nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
      nums[i] += Math.max(nums[i + 2] || 0, nums[i + 3] || 0)
    }
    return Math.max(nums[0] || 0, nums[1] || 0)
  }

  return Math.max(robHouses(nums1), robHouses(nums2))
}
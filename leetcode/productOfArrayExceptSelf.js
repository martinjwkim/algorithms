const productExceptSelf = (nums) => {
  let leftSum = [1];
  let rightSum = [1];

  for (let i=1; i<nums.length; i++){
    leftSum.push(leftSum[i-1]*nums[i-1])
    rightSum.push(rightSum[i-1]*nums[nums.length-i])
  }

  for (let i=0; i<nums.length; i++){
    leftSum[i] *= rightSum[nums.length-1-i]
  }
    
  return leftSum;
}
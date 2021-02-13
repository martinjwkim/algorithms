const lengthOfLIS = (nums) => {
  if(nums.length === 0) return 0
    let dp = new Array(nums.length).fill(1)
    for(let i = 1; i < dp.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }
    
    return Math.max(...dp)
}
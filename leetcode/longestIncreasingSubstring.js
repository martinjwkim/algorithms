const lengthOfLIS = (nums) => {
  let maxLen = 1;
    
    function LIS(numsArr, i, curr, memo){
        let len = 1;
        if (memo[i]) return memo[i];
        
        for (let j=i+1; j<numsArr.length; j++){
            let res = LIS(numsArr, j, numsArr[j], memo)  
            if (curr < numsArr[j]){
                len = Math.max(len, res+1);
            }
        }
        
        memo[i] = len;
        maxLen = Math.max(maxLen, len)
        
        return len;
    }
    
    LIS(nums, 0, nums[0], {})
    
    
    return maxLen;
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
